/* Wenova workshop – mozgó magyarázó ábrák (motion). Design system v3 (2026-11-11). Oriana × Wenova · 2026-11-12.
   Saját JavaScript, külső könyvtár, webfont és hálózati kérés nélkül; offline működik. Stílus: _assets/wenova-motion.css
   (a wenova.css @import-tal tölti be).

   ============================ BEILLESZTÉS ============================
   <figure class="mozgo" data-jelenet="prompt-ut">
     <figcaption>Szöveges megfelelő: szkript nélkül is ebből érthető az ábra.</figcaption>
   </figure>
   ...
   <script src="../_assets/wenova-motion.js"></script>
   <script src="../_assets/jelenetek/alap.js"></script>       (a jelenetek adatai; több fájl is betölthető)

   Attribútumok: data-jelenet = a jelenet neve · data-auto="nincs": nem indul el magától · URL: ?anim=nincs (vetítés, képernyőkép).
   A lejátszó: Elölről · Vissza · Lejátszás/Szünet · Tovább, alatta lépéspöttyök; a felirat (aria-live) minden lépést egy mondatban elmond.
   prefers-reduced-motion: reduce esetén nincs automatikus lejátszás és nincs mozgás, a lépések kattintással járhatók végig.

   ============================ JELENET REGISZTRÁLÁSA ============================
   WenovaMotion.jelenet('nev', { tipus: 'aramlas' | 'tokenek' | 'epites', cim: '…', ... });

   tipus: 'aramlas'  – szereplők között utazó csomagok (ki kinek mit ad, hurokkal, számlálóval)
     meret: [1000, 560]                       a rajzvászon mérete (viewBox)
     szereplok: [{ id, nev, alcim, ikon, x, y, szin }]   x, y = a doboz KÖZEPE; ikon: lásd IKON; szin: lásd SZINEK
     lepesek: [{
        tol, ig, csomag,        csomag utazik tol → ig (a csomag felirata rövid: 1–3 szó)
        szaggatott: true,       válasz vagy visszaút (szaggatott vonal)
        iv: 0.18,               az ív görbülete (negatív: a másik oldalra hajlik; 0: egyenes)
        aktiv: 'id',            utazás nélküli lépés: a szereplő „dolgozik”
        buborek: 'szöveg',      gondolatbuborék az aktív (vagy a cél) szereplő fölött
        jelzo: { szereplo: 'id', szoveg: 'v1' },   tartós címke egy szereplőn (pl. verzió); szoveg: '' törli
        szamlalo: 'Kör 1 / 2',  a jobb felső sarok számlálója (a következő módosításig érvényes)
        szin: 'kesz',           a csomag és a vonal színe
        szoveg: '…',            a lépés egy mondata (kötelező)
        ido: 3200               a lépés ideje ms-ban automatikus lejátszáskor (alap: 3000)
     }]

   tipus: 'tokenek'  – a prompt útja a modellben: tokenekre bontás, tokenenkénti feldolgozás, a kimenet előállítása
     prompt: ['Fog', 'lald', ' össze', …]      a prompt tokenjei (szemléltetés)
     kimenet: [{ jeloltek: [['A', 62], ['Ez', 21], ['Tegnap', 9]] }, …]   lépésenként a jelöltek; az ELSŐ a kiválasztott
     szovegek: { 0: '…', 1: '…', 2: '…', token: '…', zaro: '…' }          felülírható feliratok

   tipus: 'epites'   – rétegenként felépülő szerkezet (pl. a cég-DNS), mellette „mit ad” és egy stabilitásmérő
     alap: 'Közös alap'                         a talapzat felirata
     mero: 'Stabil, ismételhető eredmény'       a mérő felirata
     lepesek: [{ blokk: { nev, alcim, szin }, ad: 'mit ad ez a réteg', szoveg: '…' }]
   ========================================================================= */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var JELENETEK = {}, LEJATSZOK = [];
  var SZINEK = ['accent', 'kesz', 'jegyezd', 'figyelj', 'tipp', 'elakadas', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6'];
  /* 24×24-es vonalas ikonok (stroke) */
  var IKON = {
    ember: '<circle cx="12" cy="7.5" r="3.6"/><path d="M4.8 20.5c.7-4.2 3.5-6.3 7.2-6.3s6.5 2.1 7.2 6.3"/>',
    karmester: '<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18.5" r="2.4"/><circle cx="19" cy="18.5" r="2.4"/><circle cx="12" cy="18.5" r="2.4"/><path d="M12 7.4v8.7M12 11h-7v5.1M12 11h7v5.1"/>',
    keszito: '<path d="M14.5 5.5a4 4 0 0 0-5.2 5.2L3.5 16.5l4 4 5.8-5.8a4 4 0 0 0 5.2-5.2l-2.7 2.7-2.3-.6-.6-2.3z"/>',
    ellenor: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5M7.8 10.6l2 2 3.4-3.8"/>',
    dokumentum: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    mappa: '<path d="M3 6.5h6l2 2.5h10v10.5H3z"/>',
    adatbazis: '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>',
    bongeszo: '<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="M3 9h18M6.5 6.8h.1M9.5 6.8h.1"/>',
    modell: '<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9zM9 2.5V5M15 2.5V5M9 19v2.5M15 19v2.5M2.5 9H5M2.5 15H5M19 9h2.5M19 15h2.5"/>',
    szabaly: '<path d="M12 3l8 3.2v5.6c0 4.6-3.2 8-8 9.2-4.8-1.2-8-4.6-8-9.2V6.2z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    fogaskerek: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/>',
    level: '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3.5 7l8.5 6.5L20.5 7"/>',
    tablazat: '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 4.5v15"/>',
    kapu: '<path d="M4 21V9a8 8 0 0 1 16 0v12M4 21h16M12 21v-6"/><path d="M9.5 12h5"/>',
    zaszlo: '<path d="M5.5 21V3.5M5.5 4.5h12l-2.5 4 2.5 4h-12"/>',
    csillag: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    ora: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.4 2"/>',
    felho: '<path d="M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.5 1.3 3.9 3.9 0 0 1-.4 7.7z"/>',
    villam: '<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>',
    naplo: '<path d="M6 3.5h12v17H6z"/><path d="M9 8h6M9 12h6M9 16h3.5M6 7H4M6 12H4M6 17H4"/>'
  };

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function sv(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function szin(s) { return SZINEK.indexOf(s) >= 0 ? s : 'accent'; }
  function nincsMozgas() {
    try { if (/[?&]anim=nincs/.test(location.search)) return true; return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
  }

  /* ================================ ÁRAMLÁS ================================ */
  function Aramlas(szin_, def) {
    this.def = def; this.raf = 0;
    var m = def.meret || [1000, 560], self = this;
    this.W = m[0]; this.H = m[1];
    var wrap = el('div', 'mozgo-gorget'); szin_.appendChild(wrap);
    this.svg = sv('svg', { viewBox: '0 0 ' + this.W + ' ' + this.H, 'class': 'mozgo-svg', role: 'img', 'aria-label': def.cim || 'Mozgó ábra' }, wrap);
    this.gNyom = sv('g', { 'class': 'm-nyomok' }, this.svg);
    this.gUt = sv('g', { 'class': 'm-ut' }, this.svg);
    this.gSzer = sv('g', { 'class': 'm-szereplok' }, this.svg);
    this.gDin = sv('g', { 'class': 'm-din' }, this.svg);
    this.szamlalo = sv('g', { 'class': 'm-szamlalo', transform: 'translate(' + (this.W - 24) + ',30)' }, this.svg);
    this.sz = {};
    (def.szereplok || []).forEach(function (s) {
      var w = s.w || 176, h = s.h || 112;
      var g = sv('g', { 'class': 'm-szereplo', 'data-szin': szin(s.szin), transform: 'translate(' + s.x + ',' + s.y + ')' }, self.gSzer);
      sv('rect', { 'class': 'm-arnyek', x: -w / 2 + 6, y: -h / 2 + 6, width: w, height: h, rx: 20 }, g);
      sv('rect', { 'class': 'm-doboz', x: -w / 2, y: -h / 2, width: w, height: h, rx: 20 }, g);
      var ik = sv('g', { 'class': 'm-ikon', transform: 'translate(' + (-w / 2 + 14) + ',' + (-h / 2 + 12) + ') scale(1.7)' }, g);
      sv('circle', { 'class': 'm-ikon-hatter', cx: 12, cy: 12, r: 13 }, ik);
      var ig = sv('g', { 'class': 'm-ikon-rajz' }, ik); ig.innerHTML = IKON[s.ikon] || IKON.dokumentum;
      var t = sv('text', { 'class': 'm-nev', x: -w / 2 + 68, y: -h / 2 + 40 }, g); t.textContent = s.nev;
      if (s.alcim) {
        var sorok = String(s.alcim).split('|');
        sorok.forEach(function (sor, i) { var a = sv('text', { 'class': 'm-alcim', x: -w / 2 + 16, y: -h / 2 + 76 + i * 20 }, g); a.textContent = sor; });
      }
      var jel = sv('g', { 'class': 'm-jelzo', transform: 'translate(' + (w / 2 - 6) + ',' + (-h / 2 - 2) + ')' }, g);
      self.sz[s.id] = { g: g, x: s.x, y: s.y, w: w, h: h, jel: jel };
    });
  }
  Aramlas.prototype.pont = function (a, b) { // az a doboz szélének pontja a b felé
    var dx = b.x - a.x, dy = b.y - a.y, hw = a.w / 2 + 10, hh = a.h / 2 + 10;
    if (!dx && !dy) return { x: a.x, y: a.y };
    var t = Math.min(dx ? hw / Math.abs(dx) : Infinity, dy ? hh / Math.abs(dy) : Infinity);
    return { x: a.x + dx * t, y: a.y + dy * t };
  };
  Aramlas.prototype.ut = function (l) {
    var a = this.sz[l.tol], b = this.sz[l.ig]; if (!a || !b) return null;
    var p = this.pont(a, b), q = this.pont(b, a), dx = q.x - p.x, dy = q.y - p.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var iv = (l.iv == null ? 0.2 : l.iv), cx = (p.x + q.x) / 2 - dy / d * iv * d, cy = (p.y + q.y) / 2 + dx / d * iv * d;
    return { p: p, q: q, c: { x: cx, y: cy }, d: 'M' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ' Q' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + q.x.toFixed(1) + ' ' + q.y.toFixed(1) };
  };
  Aramlas.prototype.rajzol = function (k, anim) {
    var self = this, L = this.def.lepesek, cur = L[k], latott = {}, jelzok = {}, szaml = '';
    cancelAnimationFrame(this.raf);
    this.gNyom.innerHTML = ''; this.gUt.innerHTML = ''; this.gDin.innerHTML = '';
    Object.keys(this.sz).forEach(function (id) { self.sz[id].g.classList.remove('aktiv', 'forras', 'cel'); self.sz[id].jel.innerHTML = ''; });
    for (var i = 0; i <= k; i++) {
      var l = L[i];
      if (l.szamlalo != null) szaml = l.szamlalo;
      if (l.jelzo) jelzok[l.jelzo.szereplo] = l.jelzo.szoveg;
      if (i < k && l.tol && l.ig) {
        var kulcs = l.tol + '>' + l.ig; if (latott[kulcs]) continue; latott[kulcs] = 1;
        var u = this.ut(l); if (u) sv('path', { d: u.d, 'class': 'm-nyom' + (l.szaggatott ? ' szagg' : '') }, this.gNyom);
      }
    }
    Object.keys(jelzok).forEach(function (id) {
      var s = self.sz[id], txt = jelzok[id]; if (!s || !txt) return;
      var w = Math.max(44, txt.length * 10 + 22);
      sv('rect', { x: -w, y: -15, width: w, height: 30, rx: 15, 'class': 'm-jelzo-hatter' }, s.jel);
      var t = sv('text', { x: -w / 2, y: 6, 'class': 'm-jelzo-szoveg' }, s.jel); t.textContent = txt;
    });
    this.szamlalo.innerHTML = '';
    var sw = 0;
    if (szaml) {
      sw = szaml.length * 10.5 + 34;
      sv('rect', { x: -sw, y: -18, width: sw, height: 40, rx: 20, 'class': 'm-szamlalo-hatter' }, this.szamlalo);
      var st = sv('text', { x: -sw / 2, y: 9, 'class': 'm-szamlalo-szoveg' }, this.szamlalo); st.textContent = szaml;
    }
    var bubHely = null;
    if (cur.tol && cur.ig) {
      var ut = this.ut(cur); if (!ut) return;
      this.sz[cur.tol].g.classList.add('forras'); this.sz[cur.ig].g.classList.add('cel');
      var g = sv('g', { 'data-szin': szin(cur.szin) }, this.gUt);
      var path = sv('path', { d: ut.d, 'class': 'm-vonal' + (cur.szaggatott ? ' szagg' : '') }, g);
      var hossz = path.getTotalLength();
      // nyílhegy a végponton, az érintő irányában
      var ex = ut.q.x - ut.c.x, ey = ut.q.y - ut.c.y, ed = Math.sqrt(ex * ex + ey * ey) || 1, ux = ex / ed, uy = ey / ed;
      var hegy = sv('path', { 'class': 'm-hegy', d: 'M' + ut.q.x + ' ' + ut.q.y + ' L' + (ut.q.x - ux * 20 - uy * 10) + ' ' + (ut.q.y - uy * 20 + ux * 10) + ' L' + (ut.q.x - ux * 20 + uy * 10) + ' ' + (ut.q.y - uy * 20 - ux * 10) + ' Z' }, g);
      var cs = sv('g', { 'class': 'm-csomag', 'data-szin': szin(cur.szin) }, this.gDin);
      var felirat = cur.csomag || '', cw = Math.max(54, felirat.length * 10.2 + 30);
      sv('rect', { x: -cw / 2 + 4, y: -15, width: cw, height: 38, rx: 12, 'class': 'm-csomag-arnyek' }, cs);
      sv('rect', { x: -cw / 2, y: -19, width: cw, height: 38, rx: 12, 'class': 'm-csomag-doboz' }, cs);
      var ct = sv('text', { x: 0, y: 6, 'class': 'm-csomag-szoveg' }, cs); ct.textContent = felirat;
      var hely = function (t) { var pt = path.getPointAtLength(hossz * t); cs.setAttribute('transform', 'translate(' + pt.x.toFixed(1) + ',' + pt.y.toFixed(1) + ')'); };
      var tVeg = Math.max(.5, 1 - (cw / 2 + 18) / (hossz || 1)); // a csomag a cel doboza ELOTT all meg, nem takarja ki
      if (anim) {
        if (!cur.szaggatott) { path.style.strokeDasharray = hossz; path.style.strokeDashoffset = hossz; }
        hegy.style.opacity = 0; hely(0);
        var t0 = null, tart = 1300;
        var lep = function (ts) {
          if (t0 == null) t0 = ts;
          var t = Math.min(1, (ts - t0) / tart), e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          hely(Math.min(e, tVeg)); if (!cur.szaggatott) path.style.strokeDashoffset = hossz * (1 - e);
          if (t < 1) self.raf = requestAnimationFrame(lep); else { hegy.style.opacity = 1; self.sz[cur.ig].g.classList.add('aktiv'); }
        };
        this.raf = requestAnimationFrame(lep);
      } else { hely(tVeg); this.sz[cur.ig].g.classList.add('aktiv'); }
      if (cur.buborek) bubHely = this.sz[cur.ig];
    } else if (cur.aktiv && this.sz[cur.aktiv]) {
      this.sz[cur.aktiv].g.classList.add('aktiv'); bubHely = this.sz[cur.aktiv];
    }
    if (cur.buborek && bubHely) {
      var bw = Math.max(80, cur.buborek.length * 9.6 + 34), bx = Math.max(bw / 2 + 8, Math.min(this.W - bw / 2 - 8, bubHely.x));
      var emel = 0; Object.keys(this.sz).forEach(function (id) { if (self.sz[id] === bubHely && jelzok[id]) emel = 20; }); // a jelző fölé kerül
      var fent = bubHely.y - bubHely.h / 2 - 54 - emel > 8;
      if (fent && sw && bubHely.y - bubHely.h / 2 - 54 < 62 && bx + bw / 2 > this.W - sw - 40) fent = false; // ne takarja a szamlalot
      var by = fent ? bubHely.y - bubHely.h / 2 - 34 - emel : bubHely.y + bubHely.h / 2 + 38;
      var b = sv('g', { 'class': 'm-buborek' + (anim ? ' be' : ''), transform: 'translate(' + bx + ',' + by + ')' }, this.gDin);
      sv('rect', { x: -bw / 2, y: -20, width: bw, height: 40, rx: 20, 'class': 'm-buborek-doboz' }, b);
      sv('circle', { cx: (bubHely.x - bx) * .5, cy: fent ? 28 : -28, r: 5, 'class': 'm-buborek-doboz' }, b);
      var bt = sv('text', { x: 0, y: 6, 'class': 'm-buborek-szoveg' }, b); bt.textContent = cur.buborek;
    }
  };
  Aramlas.prototype.hossz = function () { return this.def.lepesek.length; };
  Aramlas.prototype.szoveg = function (k) { return this.def.lepesek[k].szoveg || ''; };
  Aramlas.prototype.ido = function (k) { return this.def.lepesek[k].ido || 3000; };

  /* ================================ TOKENEK ================================ */
  function Tokenek(szin_, def) {
    this.def = def; this.gyoker = el('div', 'tk'); szin_.appendChild(this.gyoker);
    this.m = (def.kimenet || []).length;
  }
  Tokenek.prototype.hossz = function () { return 3 + this.m + 1; };
  Tokenek.prototype.ido = function (k) { return k === 1 ? 3600 : k === 2 ? 3600 : k >= 3 && k < 3 + this.m ? 4200 : 3200; };
  Tokenek.prototype.szoveg = function (k) {
    var s = this.def.szovegek || {};
    if (k === 0) return s[0] || 'Ezt írod be. Neked ez egy mondat; a modell nem mondatokat lát.';
    if (k === 1) return s[1] || 'Tokenizálás: a szöveg apró darabokra (tokenekre) bomlik, és minden darab egy számot kap.';
    if (k === 2) return s[2] || 'A tokenek sorban belépnek a modellbe. Amit a modell egyszerre lát, az a kontextus.';
    if (k < 3 + this.m) {
      var i = k - 3, j = this.def.kimenet[i].jeloltek;
      return (s.token || 'A modell kiszámolja, mi a legvalószínűbb folytatás, és választ egyet: „{t}”. A kész token visszakerül a kontextusba.').replace('{t}', String(j[0][0]).trim()).replace('{n}', i + 1);
    }
    return s.zaro || 'Így készül a válasz: tokenről tokenre. A modell valószínű szöveget ír, ezért a jól hangzó mondat még nem bizonyíték.';
  };
  Tokenek.prototype.rajzol = function (k, anim) {
    var d = this.def, P = d.prompt || [], m = this.m, a = anim ? ' be' : '', h = '';
    var kesz = Math.max(0, Math.min(m, k - 2)), most = (k >= 3 && k < 3 + m) ? k - 3 : -1, regi = most >= 0 ? most : kesz;
    function chip(t, i, extra, kesl) { return '<span class="tk-token' + (extra || '') + '" style="--i:' + (kesl == null ? i : kesl) + '"><span class="tk-szo">' + esc(t).replace(/ /g, '<i class="tk-szokoz">␣</i>') + '</span><small>' + (1024 + ((i * 7919 + t.length * 613) % 8200)) + '</small></span>'; }
    // 1. sor: a prompt
    h += '<div class="tk-sor"><span class="tk-cimke">1 · A prompt</span><div class="tk-prompt' + (k === 0 ? '' : ' bontva') + '">';
    if (k === 0) h += '<span class="tk-mondat' + a + '">' + esc(P.join('')) + '</span>';
    else P.forEach(function (t, i) { h += chip(t, i, k === 1 ? a : ''); });
    h += '</div>' + (k >= 1 ? '<span class="tk-megj">' + P.length + ' token · a számok szemléltetők</span>' : '') + '</div>';
    // 2. sor: a modell és a jelöltek
    h += '<div class="tk-sor tk-kozep"><div class="tk-gep' + (k >= 2 && k < 3 + m ? ' dolgozik' : '') + (k < 2 ? ' var' : '') + '"><span class="tk-cimke">2 · A modell</span>';
    h += '<div class="tk-retegek" aria-hidden="true"><i></i><i></i><i></i><i></i></div>';
    h += '<div class="tk-kontextus"><span class="tk-kis">kontextus:</span>';
    if (k >= 2) {
      P.forEach(function (t, i) { h += '<span class="tk-mini' + (k === 2 ? a : '') + '" style="--i:' + i + '">' + esc(t.trim() || '␣') + '</span>'; });
      for (var i = 0; i < regi; i++) h += '<span class="tk-mini uj' + (most >= 0 && i === regi - 1 && anim ? ' be' : '') + '" style="--i:0">' + esc(String(d.kimenet[i].jeloltek[0][0]).trim()) + '</span>';
    } else h += '<span class="tk-kis">még üres</span>';
    h += '</div></div>';
    h += '<div class="tk-jeloltek"><span class="tk-cimke">3 · Mi jöjjön?</span>';
    if (most >= 0) {
      d.kimenet[most].jeloltek.forEach(function (j, i) {
        h += '<div class="tk-jelolt' + (i === 0 ? ' nyer' : '') + a + '" style="--i:' + i + ';--w:' + j[1] + '%"><b>' + esc(String(j[0]).trim()) + '</b><span class="tk-sav"><i></i></span><em>' + j[1] + '%</em></div>';
      });
      h += '<span class="tk-megj">a legvalószínűbb nyer · a számok szemléltetők</span>';
    } else h += '<span class="tk-kis">' + (k < 3 ? 'a modell itt számolja ki a folytatás esélyeit' : 'kész: nincs több token') + '</span>';
    h += '</div></div>';
    // 3. sor: a kimenet
    h += '<div class="tk-sor"><span class="tk-cimke">4 · A válasz, tokenről tokenre</span><div class="tk-kimenet">';
    var db = most >= 0 ? most + 1 : kesz;
    for (var q = 0; q < db; q++) h += '<span class="tk-ki' + (q === most && anim ? ' be' : '') + '">' + esc(d.kimenet[q].jeloltek[0][0]) + '</span>';
    h += (k < 3 + m ? '<span class="tk-kurzor" aria-hidden="true"></span>' : '') + (db === 0 ? '<span class="tk-kis">még üres</span>' : '') + '</div>';
    if (most >= 0) h += '<span class="tk-vissza' + a + '">↺ a kész token visszakerül a kontextusba, és jön a következő</span>';
    h += '</div>';
    if (k === 3 + m) h += '<div class="tk-zaro' + a + '">A modell nem „tudja” a választ: <b>kiszámolja a valószínű folytatást.</b> Ezért kell a forrás és az ellenőrzés.</div>';
    this.gyoker.innerHTML = h;
  };

  /* ================================ ÉPÍTÉS ================================ */
  function Epites(szin_, def) { this.def = def; this.gyoker = el('div', 'ep'); szin_.appendChild(this.gyoker); }
  Epites.prototype.hossz = function () { return this.def.lepesek.length; };
  Epites.prototype.szoveg = function (k) { return this.def.lepesek[k].szoveg || ''; };
  Epites.prototype.ido = function (k) { return this.def.lepesek[k].ido || 3400; };
  Epites.prototype.rajzol = function (k, anim) {
    var d = this.def, L = d.lepesek, n = L.length, h = '<div class="ep-torony">';
    for (var j = n - 1; j > k; j--) h += '<div class="ep-blokk hely" aria-hidden="true"><span class="ep-sorszam">' + (j + 1) + '</span><span>&nbsp;</span></div>';
    for (var i = k; i >= 0; i--) {
      var b = L[i].blokk || {};
      h += '<div class="ep-blokk' + (i === k ? ' uj' + (anim ? ' be' : '') : '') + '" data-szin="' + szin(b.szin) + '"><span class="ep-sorszam">' + (i + 1) + '</span><span><b>' + esc(b.nev || '') + '</b>' + (b.alcim ? '<small>' + esc(b.alcim) + '</small>' : '') + '</span></div>';
    }
    h += '<div class="ep-alap">' + esc(d.alap || 'Alap') + '</div></div>';
    h += '<div class="ep-oldal"><div class="ep-ad"><span class="tk-cimke">Mit ad ez a réteg?</span><p>' + esc(L[k].ad || '') + '</p></div>';
    h += '<div class="ep-mero"><span class="tk-cimke">' + esc(d.mero || 'Stabilitás') + '</span><div class="ep-sav"><i style="width:' + Math.round((k + 1) / n * 100) + '%"></i></div><span class="tk-kis">' + (k + 1) + ' / ' + n + ' réteg a helyén</span></div></div>';
    this.gyoker.innerHTML = h;
  };

  var TIPUS = { aramlas: Aramlas, tokenek: Tokenek, epites: Epites };

  /* ================================ LEJÁTSZÓ ================================ */
  function Lejatszo(fig, def) {
    var self = this, cap = fig.querySelector('figcaption');
    this.fig = fig; this.k = 0; this.megy = false; this.timer = 0; this.indult = false;
    fig.classList.add('mozgo-kesz');
    var fej = el('div', 'mozgo-fej', '<span class="mozgo-cimke">Mozgó ábra</span><b>' + esc(def.cim || '') + '</b>');
    var szin_ = el('div', 'mozgo-szin'); szin_.setAttribute('data-tipus', def.tipus);
    this.felirat = el('div', 'mozgo-felirat', '<span class="mozgo-szam"></span><span class="mozgo-szoveg"></span>'); this.felirat.setAttribute('aria-live', 'polite');
    var vez = el('div', 'mozgo-vezerlo'); vez.setAttribute('role', 'group'); vez.setAttribute('aria-label', 'Az ábra lejátszása');
    function gomb(cls, szoveg, cim, fn) { var b = el('button', cls, szoveg); b.type = 'button'; b.title = cim; b.setAttribute('aria-label', cim); b.addEventListener('click', fn); vez.appendChild(b); return b; }
    this.bElol = gomb('m-g', '⏮', 'Elölről', function () { self.all(); self.mutat(0, true); });
    this.bVissza = gomb('m-g', '◀', 'Előző lépés', function () { self.all(); self.mutat(self.k - 1, false); });
    this.bJatek = gomb('m-g fo', '▶ Lejátszás', 'Lejátszás vagy szünet', function () { if (self.megy) self.all(); else self.jatek(); });
    this.bTovabb = gomb('m-g', '▶', 'Következő lépés', function () { self.all(); self.mutat(self.k + 1, true); });
    this.pottyok = el('div', 'mozgo-pottyok'); vez.appendChild(this.pottyok);
    [fej, szin_, this.felirat, vez].forEach(function (x) { fig.insertBefore(x, cap); });
    this.r = new TIPUS[def.tipus](szin_, def);
    this.n = this.r.hossz();
    for (var i = 0; i < this.n; i++) (function (i) {
      var p = el('button', 'm-potty'); p.type = 'button'; p.setAttribute('aria-label', (i + 1) + '. lépés'); p.addEventListener('click', function () { self.all(); self.mutat(i, true); }); self.pottyok.appendChild(p);
    })(i);
    var kezd = /[?&]lepes=(\d+)/.exec(location.search); // ?lepes=N: az ábrák az N. lépésnél állnak (képernyőkép, vetítés)
    this.mutat(kezd ? (kezd[1] | 0) - 1 : 0, false);
    if (kezd) this.indult = true;
    if (!kezd && !nincsMozgas() && fig.getAttribute('data-auto') !== 'nincs' && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting && !self.indult) { self.indult = true; self.mutat(0, true); self.jatek(); } else if (!e.isIntersecting && self.megy) self.all(); });
      }, { threshold: 0.55 });
      io.observe(szin_);
    }
  }
  Lejatszo.prototype.mutat = function (k, anim) {
    k = Math.max(0, Math.min(this.n - 1, k)); this.k = k;
    this.r.rajzol(k, anim && !nincsMozgas());
    this.felirat.querySelector('.mozgo-szam').textContent = (k + 1) + ' / ' + this.n;
    this.felirat.querySelector('.mozgo-szoveg').textContent = this.r.szoveg(k);
    var ps = this.pottyok.children;
    for (var i = 0; i < ps.length; i++) { ps[i].classList.toggle('volt', i < k); ps[i].classList.toggle('most', i === k); if (i === k) ps[i].setAttribute('aria-current', 'step'); else ps[i].removeAttribute('aria-current'); }
    this.bVissza.disabled = k === 0; this.bTovabb.disabled = k === this.n - 1;
  };
  Lejatszo.prototype.jatek = function () {
    var self = this;
    if (this.k >= this.n - 1) this.mutat(0, true);
    this.megy = true; this.indult = true; this.bJatek.innerHTML = '⏸ Szünet'; this.fig.classList.add('megy');
    (function kov() {
      self.timer = setTimeout(function () {
        if (!self.megy) return;
        if (self.k >= self.n - 1) { self.all(); return; }
        self.mutat(self.k + 1, true); kov();
      }, self.r.ido(self.k));
    })();
  };
  Lejatszo.prototype.all = function () { this.megy = false; clearTimeout(this.timer); this.bJatek.innerHTML = this.k >= this.n - 1 ? '↻ Újra' : '▶ Lejátszás'; this.fig.classList.remove('megy'); };

  function init() {
    var figs = document.querySelectorAll('figure.mozgo:not(.mozgo-kesz)');
    for (var i = 0; i < figs.length; i++) {
      var nev = figs[i].getAttribute('data-jelenet'), def = JELENETEK[nev];
      if (!def || !TIPUS[def.tipus]) { figs[i].classList.add('mozgo-hiany'); continue; }
      try { LEJATSZOK.push(new Lejatszo(figs[i], def)); } catch (e) { figs[i].classList.add('mozgo-hiany'); if (window.console) console.error('WenovaMotion: ' + nev, e); }
    }
  }
  window.WenovaMotion = {
    jelenet: function (nev, def) { JELENETEK[nev] = def; },
    init: init, ikonok: Object.keys(IKON), szinek: SZINEK, lejatszok: LEJATSZOK
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else setTimeout(init, 0);
})();

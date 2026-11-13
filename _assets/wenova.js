/* Wenova workshop – közös JS notebookokhoz és lapozható prezentációkhoz. Design system v2 (2026-11-10), v3 kiegészítés (2026-11-11):
   Wenova-logó a felső sávban, fókusz mód (egyszerre egy lépés), jelvény, villámkérdés (.villamkerdes), fordítós kártya (button.fordito).
   Oriana × Wenova · 2026-11-12. Külső erőforrás nélkül, offline működik.
   - Téma-váltó: világos (alap) / sötét / rendszer; html[data-theme], mentés localStorage-ba ("wenova-tema"), try/catch-ben.
     A villanás elkerülésére a <head>-be egy sor is kerülhet (lásd notebook-template.html). A gomb a .topbar-tools elembe kerül,
     ha van; különben lebegő gomb (jobb felső sarok).
   - Daymap: <ul class="daymap" data-current="03"></ul> automatikusan kitöltődik a nap blokkjaival; sávszín (közös / BA / Sales–Account / párhuzamos).
     A .napi-nav elemben ◀ ▶ lépkedő a szomszédos blokkra.
   - Lépésvezető (v2): <section class="gyakorlat"> benne <aside class="lepes-sin"> (a JS tölti) és .lepes-lista > section.lepes
     [data-csoport, data-rovid, data-ido, data-csoport-nev, data-kulcs]. Számozás, „Kész” pipa (localStorage: "wenova-lepes:<útvonal>"),
     „Hol tartok” a görgetéssel szinkronban, előre/vissza léptetés.
   - Prompt másolás: .prompt-box elemekhez gomb. Checklist: .checklist input állapota localStorage-ban (oldalanként).
   - Deck (body.deck): nyilak / szóköz / PgUp-PgDn / Home-End, S = jegyzetek, O = áttekintés, F = teljes képernyő, ?hash = dia. */
(function () {
  'use strict';
  var DAY = [
    { id: 'ea', rovid: 'Előadás', t: 'nyitó', n: 'Nyitó előadás: honnan jött az AI, és miért most?', href: '00%20Eloadas/ai-tortenet-eloadas.html', sav: 'all', extra: true },
    { id: '00', rovid: 'Alapozás', t: '09:00', n: 'Saját feladat, AI-alapok', href: 'Notebookok/00-halado-setup-notebook.html', sav: 'all' },
    { id: '01', rovid: 'DNS', t: '09:40', n: 'Oriana DNS', href: 'Notebookok/01-dns-notebook.html', sav: 'all' },
    { id: 'uc1', rovid: 'Ügyfélprofil', t: '10:15', n: 'Ügyfélprofil promptokkal', href: 'Notebookok/uc1-ugyfelprofil-notebook.html', sav: 'all' },
    { id: 'b1', t: '11:15', n: 'Szünet', brk: true },
    { id: '04', rovid: 'RONDO agent', t: '11:25', n: 'RONDO agent: KAPU I, maker', href: 'Notebookok/04-rondo-agent-notebook.html', sav: 'par' },
    { id: 'b2', t: '12:30', n: 'Ebéd', brk: true },
    { id: '05', rovid: 'Reviewer', t: '13:25', n: 'Reviewer és stop-döntés', href: 'Notebookok/05-rondo-reviewer-notebook.html', sav: 'par' },
    { id: 'b3', t: '14:35', n: 'Szünet', brk: true },
    { id: '06b', rovid: 'BA-szekció', t: '15:10', n: 'BA-szekció: keresztreferencia, képernyőterv, dokumentáció kódból', href: 'Notebookok/06b-ba-utotag-notebook.html', sav: 'ba' },
    { id: 'uc2', rovid: 'Sales: ügynök', t: '15:10', n: 'Sales-Account szekció: Ügyfélprofil agent', href: 'Notebookok/uc2-ugyfelprofil-agent-notebook.html', sav: 'sa' },
    { id: '07', rovid: 'Saját folyamat', t: '16:05', n: 'Saját folyamat átvitele', href: 'Notebookok/07-sajat-atvitel-notebook.html', sav: 'all' },
    { id: 'uc3', rovid: 'Projekt-szabályok', t: '45 perc', n: 'Projekt-szabályrendszer: saját orchestrator, maker, reviewer', href: 'Notebookok/uc3-szabalyrendszer-notebook.html', sav: 'all' },
    { id: 'eset', rovid: 'Esettanulmány', t: 'bónusz', n: 'Bónusz esettanulmány: nagy követelményanyagból követhető specifikáció', href: 'Notebookok/esettanulmany-kovetelmenyek.html', sav: 'ba', extra: true }
  ];
  // Kiegészítő gyakorlatok: nincsenek a napi időrendben (2026-11-12-i döntés), de a tananyag részei és ugyanúgy indíthatók.
  var KIEG = [
    { id: '02', rovid: 'Adatgyűjtés', n: 'RONDO-portál: adatgyűjtés', href: 'Notebookok/02-portal-notebook.html' },
    { id: '03', rovid: 'Megosztás', n: 'Közös munka és megosztás', href: 'Notebookok/03-kozos-munka-notebook.html' },
    { id: '06', rovid: 'Ügykövető', n: 'Ügykövető (Sites)', href: 'Notebookok/06-sites-notebook.html' }
  ];
  var SAV_NEV = { all: 'közös sáv', ba: 'BA sáv', sa: 'Sales–Account sáv', par: 'párhuzamos: BA és Sales–Account' };

  // Rövidítések feloldása a daymap elemeken (title attribútum), a glosszárium szerint.
  var GLOSS = {
    'RONDO': 'RONDO: RONDO Hullámkartongyártó Kft., valós cég; a gyakorlóeset projektje kitalált',
    'KAPU I': 'KAPU I: a felmérési csomag teljességi és összhang-ellenőrzése',
    'BA': 'BA: üzleti elemző (Business Analyst)',
    'DNS': 'DNS: az Oriana közös, verziózott vállalati tudáscsomagja',
    'Sites': 'Sites: a ChatGPT-ben készíthető mini-alkalmazás, ha a munkatérben elérhető'
  };
  function glossTitle(name) {
    var out = [];
    Object.keys(GLOSS).forEach(function (k) { if (new RegExp('(^|[^A-Za-z])' + k + '([^A-Za-z]|$)').test(name)) out.push(GLOSS[k]); });
    return out.join(' · ');
  }

  function rootPrefix() {
    // a notebookok a Tananyag alatti egy vagy két mélységű mappában vannak; a data-root felülírja
    var b = document.body.getAttribute('data-root');
    if (b !== null) return b;
    var depth = (document.body.getAttribute('data-depth') || '1') | 0;
    var p = ''; for (var i = 0; i < depth; i++) p += '../';
    return p;
  }

  /* ---------- Téma ---------- */
  var TEMA_KEY = 'wenova-tema';
  var TEMAK = [
    { id: 'light', ikon: '☀', szo: 'Világos', cim: 'Világos téma' },
    { id: 'dark', ikon: '☾', szo: 'Sötét', cim: 'Sötét téma' },
    { id: 'system', ikon: '◐', szo: 'Rendszer', cim: 'A rendszer beállítását követi' }
  ];
  function temaOlvas() {
    // sorrend: már beállított html[data-theme] (a <head> egysoros szkriptje) → ?tema= URL-paraméter (vetítéskor, nem mentjük) → mentett → világos
    var t = document.documentElement.getAttribute('data-theme');
    if (t !== 'dark' && t !== 'system' && t !== 'light') { try { t = new URLSearchParams(location.search).get('tema'); } catch (e) { t = null; } }
    if (t !== 'dark' && t !== 'system' && t !== 'light') { try { t = localStorage.getItem(TEMA_KEY); } catch (e) { t = null; } }
    return (t === 'dark' || t === 'system') ? t : 'light';
  }
  function temaAlkalmaz(t, ment) {
    document.documentElement.setAttribute('data-theme', t);
    if (ment) { try { localStorage.setItem(TEMA_KEY, t); } catch (e) { /* privát mód: nem baj */ } }
    document.querySelectorAll('.tema-valto button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-tema') === t)); });
  }
  function temaValto() {
    var t = temaOlvas();
    if (!document.documentElement.getAttribute('data-theme')) temaAlkalmaz(t, false);
    if (document.querySelector('.tema-valto')) { temaAlkalmaz(t, false); return; }
    var box = document.createElement('div'); box.className = 'tema-valto'; box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Téma: világos, sötét vagy a rendszer szerint');
    TEMAK.forEach(function (x) {
      var b = document.createElement('button'); b.type = 'button'; b.setAttribute('data-tema', x.id); b.title = x.cim; b.setAttribute('aria-label', x.cim);
      b.innerHTML = '<span class="ikon" aria-hidden="true">' + x.ikon + '</span><span class="szo">' + x.szo + '</span>';
      b.addEventListener('click', function () { temaAlkalmaz(x.id, true); });
      box.appendChild(b);
    });
    var host = document.querySelector('.topbar-tools');
    if (host) host.appendChild(box); else { box.classList.add('lebeg'); document.body.appendChild(box); }
    temaAlkalmaz(t, false);
  }

  /* ---------- Napi térkép ---------- */
  function buildDaymaps() {
    var maps = document.querySelectorAll('.daymap');
    var pre = rootPrefix();
    maps.forEach(function (ul) {
      if (ul.children.length) return; // kézzel kitöltött
      var cur = ul.getAttribute('data-current') || document.body.getAttribute('data-current') || '';
      var passed = true;
      DAY.forEach(function (d) {
        var li = document.createElement('li');
        if (d.brk) li.className = 'break';
        if (d.id === cur) { li.className = 'current'; passed = false; }
        else if (passed && !d.brk) li.className = 'done';
        if (d.sav) li.classList.add('sav-' + d.sav);
        var el;
        if (d.href && !d.brk) { el = document.createElement('a'); el.href = pre + d.href; if (d.id === cur) el.setAttribute('aria-current', 'page'); }
        else { el = document.createElement('span'); el.className = 'item'; }
        var top = !!ul.closest('.topbar');
        el.innerHTML = '<span class="t">' + d.t + '</span>' + (top && d.rovid ? d.rovid : d.n);
        if (top) el.setAttribute('aria-label', d.t + ' - ' + d.n);
        var gt = glossTitle(d.n), title = (d.sav ? SAV_NEV[d.sav] : '') + (gt ? (d.sav ? ' · ' : '') + gt : '');
        el.setAttribute('title', d.t + ' - ' + d.n + (title ? ' - ' + title : ''));
        li.appendChild(el); ul.appendChild(li);
      });
      // a felső sávban: az aktuális elem látszódjon (mobilon vízszintesen görgethető; csak vízszintes görgetés, a lapot nem mozdítja)
      function mutatAktualis() {
        var c = ul.querySelector('li.current');
        if (c && ul.closest('.topbar')) hKozep(ul, c);
      }
      requestAnimationFrame(mutatAktualis);
      window.addEventListener('resize', mutatAktualis);
    });
    // ◀ ▶ lépkedő a felső sávban
    document.querySelectorAll('.napi-nav').forEach(function (nav) {
      if (nav.querySelector('.nav-lep')) return;
      var ul = nav.querySelector('.daymap'); if (!ul) return;
      var cur = ul.getAttribute('data-current') || document.body.getAttribute('data-current') || '';
      var blocks = DAY.filter(function (d) { return !d.brk; }), idx = -1;
      blocks.forEach(function (d, i) { if (d.id === cur) idx = i; });
      function lep(d, cls, jel) {
        var a = document.createElement('a'); a.className = 'nav-lep ' + cls; a.textContent = jel;
        if (d) { a.href = pre + d.href; a.title = (cls === 'prev' ? 'Előző blokk: ' : 'Következő blokk: ') + d.n; a.setAttribute('aria-label', a.title); }
        else { a.setAttribute('aria-disabled', 'true'); a.href = '#'; a.setAttribute('aria-label', cls === 'prev' ? 'Nincs előző blokk' : 'Nincs következő blokk'); }
        return a;
      }
      nav.insertBefore(lep(idx > 0 ? blocks[idx - 1] : null, 'prev', '◀'), ul);
      nav.appendChild(lep(idx >= 0 && idx < blocks.length - 1 ? blocks[idx + 1] : null, 'next', '▶'));
    });
  }

  /* ---------- Lépésvezető (v2) ---------- */
  function lepesvezeto() {
    var gy = document.querySelector('.gyakorlat'); if (!gy) return;
    var sin = gy.querySelector('.lepes-sin'), lista = gy.querySelector('.lepes-lista'); if (!sin || !lista) return;
    var lepesek = Array.prototype.slice.call(lista.querySelectorAll('section.lepes')); if (!lepesek.length) return;
    var key = 'wenova-lepes:' + location.pathname, state = {};
    try { state = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { state = {}; }
    var n = lepesek.length, cur = 0;

    // fejléc kiegészítése: szám, kész-pipa, lábléc léptetővel
    lepesek.forEach(function (sec, i) {
      if (!sec.id) sec.id = 'lepes-' + (i + 1);
      var fej = sec.querySelector('.lepes-fej'), h = fej && fej.querySelector('h3');
      if (fej && !fej.querySelector('.lepes-szam')) {
        var sz = document.createElement('span'); sz.className = 'lepes-szam'; sz.textContent = String(i + 1); sz.setAttribute('aria-hidden', 'true');
        fej.insertBefore(sz, fej.firstChild);
      }
      if (h && !h.querySelector('.sr-only')) { var sr = document.createElement('span'); sr.className = 'sr-only'; sr.textContent = (i + 1) + '. lépés: '; h.insertBefore(sr, h.firstChild); }
      if (fej && !fej.querySelector('.lepes-kesz')) {
        var lab = document.createElement('label'); lab.className = 'lepes-kesz';
        var cb = document.createElement('input'); cb.type = 'checkbox'; cb.setAttribute('aria-label', (i + 1) + '. lépés kész');
        lab.appendChild(cb); lab.appendChild(document.createTextNode(' Kész'));
        fej.appendChild(lab);
        var id = sec.getAttribute('data-id') || sec.id;
        if (state[id]) { cb.checked = true; sec.classList.add('is-kesz'); }
        cb.addEventListener('change', function () {
          sec.classList.toggle('is-kesz', cb.checked); state[id] = cb.checked;
          try { localStorage.setItem(key, JSON.stringify(state)); } catch (e) { /* privát mód */ }
          frissit();
        });
      }
      if (!sec.querySelector('.lepes-lablec')) {
        var lab2 = document.createElement('div'); lab2.className = 'lepes-lablec';
        var prev = document.createElement('button'); prev.type = 'button'; prev.textContent = '◀ Előző lépés'; prev.disabled = i === 0;
        var next = document.createElement('button'); next.type = 'button';
        if (i < n - 1) { next.innerHTML = 'Következő: ' + (i + 2) + '. ' + esc(lepesek[i + 1].getAttribute('data-rovid') || '') + ' ▶'; }
        else { next.textContent = 'Utolsó lépés: tovább a „Mitől jó az eredmény” részhez ▼'; }
        prev.addEventListener('click', function () { ugras(i - 1); });
        next.addEventListener('click', function () { if (i < n - 1) ugras(i + 1); else { var v = document.getElementById('validalas') || gy.nextElementSibling; if (v) v.scrollIntoView({ behavior: 'smooth' }); } });
        lab2.appendChild(prev); lab2.appendChild(next); sec.appendChild(lab2);
      }
    });

    // a sín
    var fejHTML = '<div class="sin-fej" aria-live="polite"><div class="sin-cimke">Hol tartok</div><div class="sin-hol"><span class="sz"></span><small class="nev"></small></div>' +
      '<div class="sin-kesz"><span class="db"></span><span class="sav" aria-hidden="true"><i></i></span></div>' +
      '<div class="sin-lepteto"><button type="button" data-a="prev">◀ Vissza</button><button type="button" data-a="next">Előre ▶</button></div></div>';
    var ol = '<ol class="sin-lista" aria-label="A gyakorlat lépései">', lastCs = null;
    lepesek.forEach(function (sec, i) {
      var cs = sec.getAttribute('data-csoport') || '', csn = sec.getAttribute('data-csoport-nev') || '';
      if (csn && cs !== lastCs) { ol += '<li class="sin-csoport" data-csoport="' + esc(cs) + '" aria-hidden="true">' + esc(csn) + '</li>'; }
      lastCs = cs;
      ol += '<li class="allomas" data-csoport="' + esc(cs) + '" data-i="' + i + '"><button type="button" aria-label="' + (i + 1) + '. lépés: ' + esc(sec.getAttribute('data-rovid') || '') + '"><span class="pont" aria-hidden="true">' + (i + 1) + '</span><span class="nev">' + esc(sec.getAttribute('data-rovid') || ('' + (i + 1) + '. lépés')) + (sec.getAttribute('data-ido') ? '<small>' + esc(sec.getAttribute('data-ido')) + '</small>' : '') + '</span></button></li>';
    });
    ol += '</ol>';
    sin.innerHTML = fejHTML + ol;
    var fej = sin.querySelector('.sin-fej'), allomasok = Array.prototype.slice.call(sin.querySelectorAll('.allomas'));
    allomasok.forEach(function (li) { li.querySelector('button').addEventListener('click', function () { ugras(li.getAttribute('data-i') | 0); }); });
    sin.querySelector('[data-a="prev"]').addEventListener('click', function () { ugras(cur - 1); });
    sin.querySelector('[data-a="next"]').addEventListener('click', function () { ugras(cur + 1); });

    // Fókusz mód (v3): egyszerre egy lépés van kibontva; a többi egy sor, kattintásra nyílik. A választás a böngészőben marad.
    var FOKUSZ_KEY = 'wenova-fokusz', fokusz = true;
    try { fokusz = localStorage.getItem(FOKUSZ_KEY) !== 'ki'; } catch (e) { fokusz = true; }
    var kap = document.createElement('button'); kap.type = 'button'; kap.className = 'fokusz-kapcsolo';
    lista.insertBefore(kap, lista.firstChild);
    function setFokusz(v, ment) {
      fokusz = v; gy.classList.toggle('fokusz', v); kap.setAttribute('aria-pressed', String(v));
      kap.textContent = v ? 'Fókusz: egyszerre egy lépés · kattints az összes kibontásához' : 'Minden lépés kibontva · kattints a fókusz módhoz';
      if (ment) { try { localStorage.setItem(FOKUSZ_KEY, v ? 'be' : 'ki'); } catch (e) { /* privát mód */ } }
    }
    kap.addEventListener('click', function () { setFokusz(!fokusz, true); lepesek[cur].scrollIntoView({ block: 'start' }); });
    lepesek.forEach(function (sec, i) {
      var f = sec.querySelector('.lepes-fej'); if (!f) return;
      f.addEventListener('click', function (e) {
        if (!fokusz || sec.classList.contains('is-current')) return;
        if (e.target.closest && e.target.closest('.lepes-kesz')) return;
        ugras(i);
      });
      var cb = sec.querySelector('.lepes-kesz input');
      if (cb) cb.addEventListener('change', function () { if (cb.checked && fokusz && i === cur && i < n - 1) setTimeout(function () { ugras(i + 1); }, 450); });
    });

    // Blokkvégi „Fontos fogalmak” doboz: fókusz módban csak akkor nyitott, ha a blokk utolsó lépése az aktuális; kattintásra nyílik-csukódik.
    var fgDobozok = Array.prototype.slice.call(lista.querySelectorAll(':scope > .fogalmak'));
    function fogalomAllapot() {
      fgDobozok.forEach(function (d) {
        if (d.getAttribute('data-kezi')) return;
        var elozo = d.previousElementSibling; while (elozo && !elozo.classList.contains('lepes')) elozo = elozo.previousElementSibling;
        d.classList.toggle('nyitva', !!(elozo && elozo === lepesek[cur]));
      });
    }
    fgDobozok.forEach(function (d) {
      d.addEventListener('click', function () { if (!fokusz) return; d.setAttribute('data-kezi', '1'); d.classList.toggle('nyitva'); });
    });

    var manual = false;
    function ugras(i) {
      i = Math.max(0, Math.min(n - 1, i));
      manual = true; setCur(i);
      lepesek[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function () { manual = false; }, 900);
    }
    function setCur(i) {
      cur = i;
      lepesek.forEach(function (s, k) { s.classList.toggle('is-current', k === i); });
      allomasok.forEach(function (li, k) { li.classList.toggle('is-current', k === i); if (k === i) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current'); });
      var cs = lepesek[i].getAttribute('data-csoport') || '';
      fej.setAttribute('data-csoport', cs);
      fogalomAllapot();
      fej.querySelector('.sz').textContent = (i + 1) + '/' + n + ' lépés';
      fej.querySelector('.nev').textContent = lepesek[i].getAttribute('data-rovid') || '';
      sin.querySelector('[data-a="prev"]').disabled = i === 0;
      sin.querySelector('[data-a="next"]').disabled = i === n - 1;
      // mobilon: az aktuális állomás látszódjon a csíkban (csak vízszintes görgetés)
      var a = allomasok[i]; if (a && window.matchMedia && window.matchMedia('(max-width: 900px)').matches) hKozep(sin.querySelector('.sin-lista'), a);
    }
    function frissit() {
      var done = 0;
      lepesek.forEach(function (s, k) { var k2 = s.classList.contains('is-kesz'); if (k2) done++; allomasok[k].classList.toggle('is-kesz', k2); });
      fej.querySelector('.db').textContent = 'Kész: ' + done + '/' + n;
      fej.querySelector('.sav i').style.width = (done / n * 100) + '%';
      // jelvény (v3): ha minden lépés kész, a gyakorlat jelvénye megvan; az állapotot a napi térkép is olvassa
      var megvan = done === n, jid = document.body.getAttribute('data-current') || '';
      jsav.querySelector('.jelveny').classList.toggle('megvan', megvan);
      jsav.querySelector('.jelveny').innerHTML = megvan ? CSILLAG : '?';
      jsav.querySelector('.js-cim').textContent = megvan ? 'Megszerezted: ' + jnev : 'Jelvény: ' + jnev;
      jsav.querySelector('.js-all').textContent = megvan ? 'Minden lépés kész. Szép munka!' : 'Még ' + (n - done) + ' lépés van hátra (' + done + ' / ' + n + ' kész).';
      jsav.querySelector('.js-sav i').style.width = (done / n * 100) + '%';
      if (jid) { try { if (megvan) localStorage.setItem('wenova-jelveny:' + jid, '1'); else localStorage.removeItem('wenova-jelveny:' + jid); } catch (e) { /* privát mód */ } }
    }
    var jnev = document.body.getAttribute('data-jelveny') || 'a gyakorlat teljesítve';
    var jsav = document.createElement('div'); jsav.className = 'jelveny-sav'; jsav.setAttribute('aria-live', 'polite');
    jsav.innerHTML = '<span class="jelveny">?</span><div class="js-szoveg"><b class="js-cim"></b><span class="js-all"></span><div class="js-sav" aria-hidden="true"><i></i></div></div>';
    lista.insertBefore(jsav, kap.nextSibling);
    function scrollSync() {
      if (manual || fokusz) return;
      var line = window.innerHeight * 0.38, best = 0;
      lepesek.forEach(function (s, k) { var r = s.getBoundingClientRect(); if (r.top <= line) best = k; });
      if (best !== cur) setCur(best);
    }
    window.addEventListener('scroll', scrollSync, { passive: true });
    window.addEventListener('resize', scrollSync);
    setFokusz(fokusz, false);
    setCur(0); frissit(); scrollSync();
    if (fokusz) { var elso = -1; lepesek.forEach(function (s, k2) { if (elso < 0 && !s.classList.contains('is-kesz')) elso = k2; }); setCur(elso < 0 ? n - 1 : elso); }
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); var k = lepesek.indexOf(t); if (k >= 0) setTimeout(function () { setCur(k); lepesek[k].scrollIntoView({ block: "start" }); }, 50); }
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function hKozep(tarolo, el) { // egy elem vízszintes középre görgetése a saját tárolójában; a lap függőleges helyzetét nem változtatja
    if (!tarolo || !el || tarolo.scrollWidth <= tarolo.clientWidth) return;
    var x = el.offsetLeft - tarolo.offsetLeft - (tarolo.clientWidth - el.offsetWidth) / 2;
    try { tarolo.scrollTo({ left: Math.max(0, x), behavior: 'auto' }); } catch (e) { tarolo.scrollLeft = Math.max(0, x); }
  }

  /* ---------- Prompt-másolás, checklist ---------- */
  function copyButtons() {
    document.querySelectorAll('.prompt-box').forEach(function (box) {
      if (box.querySelector('.copy-btn')) return;
      var hint = box.querySelector('.copy-hint'); if (hint) hint.remove();
      var btn = document.createElement('button'); btn.className = 'copy-btn'; btn.type = 'button'; btn.textContent = 'Másolás';
      btn.addEventListener('click', function () {
        var clone = box.cloneNode(true); var b = clone.querySelector('.copy-btn'); if (b) b.remove();
        var text = clone.textContent.replace(/^\s+|\s+$/g, '');
        var done = function () { btn.textContent = 'Másolva'; btn.classList.add('done'); setTimeout(function () { btn.textContent = 'Másolás'; btn.classList.remove('done'); }, 1600); };
        var tartalek = function () { var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) { btn.textContent = 'Jelöld ki és másold kézzel'; } ta.remove(); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, tartalek);
        else tartalek();
      });
      box.appendChild(btn);
    });
  }

  function checklists() {
    var key = 'wenova-check:' + location.pathname;
    var state = {};
    try { state = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { state = {}; }
    document.querySelectorAll('.checklist li').forEach(function (li, i) {
      var cb = li.querySelector('input[type=checkbox]');
      if (!cb) { cb = document.createElement('input'); cb.type = 'checkbox'; li.insertBefore(cb, li.firstChild); }
      var id = li.getAttribute('data-id') || ('i' + i);
      if (state[id]) { cb.checked = true; li.classList.add('checked'); }
      cb.addEventListener('change', function () {
        li.classList.toggle('checked', cb.checked); state[id] = cb.checked;
        try { localStorage.setItem(key, JSON.stringify(state)); } catch (e) { /* privát mód */ }
      });
    });
  }

  /* ---------- Prezentáció ---------- */
  function deck() {
    if (!document.body.classList.contains('deck')) return;
    var slides = Array.prototype.slice.call(document.querySelectorAll('section.slide'));
    if (!slides.length) return;
    var idx = 0, bar, counter, prog;
    function show(i) {
      idx = Math.max(0, Math.min(slides.length - 1, i));
      slides.forEach(function (s, k) { s.classList.toggle('active', k === idx); });
      counter.textContent = (idx + 1) + ' / ' + slides.length;
      prog.style.width = ((idx + 1) / slides.length * 100) + '%';
      var h = slides[idx].id || ('s' + (idx + 1)); history.replaceState(null, '', '#' + h);
      slides[idx].scrollTop = 0;
    }
    bar = document.createElement('div'); bar.className = 'deck-bar';
    var t = document.title || '';
    bar.innerHTML = '<span class="title">' + t + '</span>' +
      '<button data-a="prev">◀</button><span class="counter"></span><button data-a="next">▶</button>' +
      '<button data-a="notes" title="S">Jegyzet</button><button data-a="over" title="O">Áttekintés</button><button data-a="full" title="F">Teljes képernyő</button>';
    document.body.appendChild(bar);
    prog = document.createElement('div'); prog.className = 'progress'; document.body.appendChild(prog);
    counter = bar.querySelector('.counter');
    bar.addEventListener('click', function (e) {
      var a = e.target.getAttribute && e.target.getAttribute('data-a'); if (!a) return;
      if (a === 'prev') show(idx - 1); if (a === 'next') show(idx + 1);
      if (a === 'notes') document.body.classList.toggle('show-notes');
      if (a === 'over') document.body.classList.toggle('overview');
      if (a === 'full') { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.target && /input|textarea/i.test(e.target.tagName)) return;
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': case ' ': case 'PageDown': case 'Enter': show(idx + 1); e.preventDefault(); break;
        case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'Backspace': show(idx - 1); e.preventDefault(); break;
        case 'Home': show(0); break; case 'End': show(slides.length - 1); break;
        case 's': case 'S': document.body.classList.toggle('show-notes'); break;
        case 'o': case 'O': case 'Escape': document.body.classList.toggle('overview'); break;
        case 'f': case 'F': if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); break;
      }
    });
    slides.forEach(function (s, k) { s.addEventListener('click', function () { if (document.body.classList.contains('overview')) { document.body.classList.remove('overview'); show(k); } }); });
    // dia-lábléc automatikusan
    slides.forEach(function (s, k) {
      if (!s.querySelector('.slide-footer')) { var f = document.createElement('div'); f.className = 'slide-footer'; f.innerHTML = '<span>' + (document.body.getAttribute('data-footer') || 'Oriana × Wenova · 2026.11.12') + '</span><span>' + (k + 1) + '</span>'; s.appendChild(f); }
    });
    var start = 0; if (location.hash) { var id = location.hash.slice(1); slides.forEach(function (s, k) { if (s.id === id || 's' + (k + 1) === id) start = k; }); }
    show(start);
    // érintés
    var x0 = null; document.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; });
    document.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); x0 = null; });
  }

  /* ---------- Oldalsáv (v1 notebookok) ---------- */
  function sidebar() {
    var sb = document.querySelector('.sidebar'); if (!sb) return;
    var btn = document.querySelector('.sidebar-toggle');
    if (btn) btn.addEventListener('click', function () { document.body.classList.toggle('sidebar-open'); });
    var links = Array.prototype.slice.call(sb.querySelectorAll('nav a[href^="#"]'));
    var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    function update() {
      var y = window.scrollY + 120, cur = -1;
      targets.forEach(function (t, i) { if (t && t.offsetTop <= y) cur = i; });
      links.forEach(function (a, i) { a.classList.toggle('active', i === cur); });
    }
    links.forEach(function (a) { a.addEventListener('click', function () { document.body.classList.remove('sidebar-open'); }); });
    window.addEventListener('scroll', update, { passive: true }); update();
  }

  /* ---------- v3: Wenova-logó, villámkérdés, fordítós kártya, jelvényrács ---------- */
  var CSILLAG = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="#FFD84D" stroke="#14183A" stroke-width="1.5" stroke-linejoin="round"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>';
  function logo() {
    var src = rootPrefix() + '_assets/logo/wenova-szovedjegy.png';
    document.querySelectorAll('.topbar .brand').forEach(function (a) {
      if (a.querySelector('.logo')) return;
      var sp = document.createElement('span'); sp.className = 'brand-szoveg';
      while (a.firstChild) sp.appendChild(a.firstChild);
      var img = document.createElement('img'); img.className = 'logo'; img.src = src; img.alt = 'Wenova';
      a.appendChild(img); a.appendChild(sp);
    });
    document.querySelectorAll('.sidebar, .logo-hely').forEach(function (sb) {
      if (sb.querySelector('.logo-sav')) return;
      var d = document.createElement('div'); d.className = 'logo-sav';
      var img = document.createElement('img'); img.className = 'logo'; img.src = src; img.alt = 'Wenova';
      d.appendChild(img); sb.insertBefore(d, sb.firstChild);
    });
  }
  function villamkerdesek() {
    document.querySelectorAll('.villamkerdes').forEach(function (vk) {
      var out = vk.querySelector('.vk-visszajelzes'), gombok = vk.querySelectorAll('.vk-valaszok button');
      gombok.forEach(function (b) {
        b.addEventListener('click', function () {
          gombok.forEach(function (x) { x.classList.remove('jo', 'rossz'); x.setAttribute('aria-pressed', 'false'); });
          var jo = b.hasAttribute('data-jo'); b.classList.add(jo ? 'jo' : 'rossz'); b.setAttribute('aria-pressed', 'true');
          if (out) { out.textContent = b.getAttribute('data-visszajelzes') || (jo ? 'Igen.' : 'Nem egészen.'); out.classList.toggle('jo', jo); out.classList.toggle('rossz', !jo); }
        });
      });
    });
  }
  function forditok() {
    document.querySelectorAll('button.fordito').forEach(function (b) {
      if (!b.hasAttribute('aria-pressed')) b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () {
        var v = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', String(v));
        var s = b.querySelector('small'); if (s) s.textContent = v ? 'Vissza a kérdéshez' : 'Kattints a megfordításhoz';
      });
    });
  }
  var JELVENY_NEV = { '00': 'Célkártya-mester', '01': 'DNS-építő', '02': 'Próbafutás-mester', '03': 'Jogmátrix-készítő', '04': 'Agent-indító', '05': 'Független ellenőr', '06': 'Ügykövető-építő', '06b': 'Forrás-visszakereső', '07': 'Folyamatgazda', 'uc1': 'Ügyfélprofil-készítő', 'uc2': 'Ügynök-építő', 'uc3': 'Szabályszerző' };
  function jelvenyRacs() {
    var pre = rootPrefix();
    document.querySelectorAll('ul.jelveny-racs').forEach(function (ul) {
      if (ul.children.length) return;
      DAY.concat(KIEG).forEach(function (d) {
        if (d.brk || d.extra) return; // az előadáshoz és az esettanulmányhoz nincs jelvény
        var megvan = false; try { megvan = localStorage.getItem('wenova-jelveny:' + d.id) === '1'; } catch (e) { megvan = false; }
        var li = document.createElement('li'); if (megvan) li.className = 'megvan';
        li.innerHTML = '<span class="jelveny' + (megvan ? ' megvan' : '') + '">' + (megvan ? CSILLAG : '?') + '</span><b>' + esc(JELVENY_NEV[d.id] || d.rovid || d.n) + '</b><a href="' + pre + d.href + '">' + esc((/^uc/.test(d.id) ? '' : d.id + ' · ') + (d.rovid || d.n)) + '</a><span class="sr-only">' + (megvan ? 'jelvény megszerezve' : 'még nincs meg') + '</span>';
        ul.appendChild(li);
      });
    });
  }

  // ugrólista a gyakorlatoldal tetején: a megértés-ábrák, a fejezet ábrája és a lépések egy kattintásra
  function ugroLista() {
    var fej = document.querySelector('main.lap > .session-fejlec'); if (!fej || document.querySelector('.ugro.auto')) return;
    var celok = [['megertes', 'Ezt kell megértened'], ['abra', 'A fejezet ábrája'], ['dns-promptok', 'A DNS promptjai egyben'], ['lepesek', 'Ugrás a lépésekhez']], nav = document.createElement('nav');
    nav.className = 'ugro auto'; nav.setAttribute('aria-label', 'Ugrás az oldalon belül');
    celok.forEach(function (c) { if (!document.getElementById(c[0])) return; var a = document.createElement('a'); a.href = '#' + c[0]; a.textContent = c[1]; if (c[0] === 'lepesek') a.className = 'fo'; nav.appendChild(a); });
    if (nav.children.length > 1) fej.parentNode.insertBefore(nav, fej.nextSibling);
  }

  function init() { temaValto(); logo(); ugroLista(); buildDaymaps(); lepesvezeto(); copyButtons(); checklists(); sidebar(); deck(); villamkerdesek(); forditok(); jelvenyRacs(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

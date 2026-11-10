/* Wenova workshop – dinamikus ábrák notebookokhoz és a lapozható prezentációhoz.
   Oriana × Wenova · 2026-11-12. Saját JavaScript, inline SVG; külső erőforrás, könyvtár, webfont,
   hálózati kérés nincs; offline működik. Stílus: _assets/wenova-abrak.css (a wenova.css @import-tal tölti be;
   a napi-attekintes.html közvetlenül linkeli, saját tokenjeit a figure.abra elemen leképezve).

   ============================ BEILLESZTÉSI API (szerződés, v5.1 terv 5. fejezet) ============================

   <figure class="abra" data-abra="vezerelv" data-stage="01">
     <figcaption>Az AI-natív működés térképe: közös DNS, két szerep, munkafolyamat, kapuk, proaktív segéd.
       Most az 1. gyakorlat: a DNS épül.</figcaption>
   </figure>
   <script src="../_assets/wenova-abrak.js"></script>      (az oldal végén, a wenova.css mellett)

   Attribútumok a <figure class="abra"> elemen:
     data-abra     melyik ábra:  "vezerelv" (Á1, a nap térképe, öt rész)      aliasz: "a1"   (00, 07 notebook)
                                 "lepcso"   (Á2, érettségi lépcső, öt fok)      aliasz: "a2"   (00, 07)
                                 "hurok"    (Á4, maker-reviewer hurok, stop)    aliasz: "a4"   (05)
                   fejezet-ábrák (v2, állapot nélkül, csoportszínekkel):
                                 "dns-retegek" (Á5, 01) · "portal-dryrun" (Á6, 02) · "jogmatrix" (Á7, 03) ·
                                 "agent-futas" (Á8, 04) · "sites-ut" (Á9, 06) · "ba-utotag" (Á10, 06b)   aliasz: a5…a10
     data-stage    hol tart a résztvevő a napban (a nap blokkjai, mint a daymap data-current értéke):
                   "00" | "01" | "02" | "03" | "04" | "05" | "06" | "06b" | "07".  Hiányzik: "07" (végállapot).
                   Aliasz: data-allapot. Á4-nél a hurok saját állapotai is adhatók:
                   "brief" | "futas" | "atvetel" | "r1" | "javitas" | "r2" | "stop" (vagy "04" = futas, "05" = r2).
     data-anim     "auto" (alap: lépésenként rajzolódik ki, amikor látható lesz; az aktuális rész egyszer pulzál)
                   URL-ből is kikapcsolható az egész oldalra: ?anim=nincs (vetítés, képernyőkép).
                   | "nincs" (azonnal végállapot). prefers-reduced-motion: reduce esetén mindig végállapot.
     data-cim      "nincs": az SVG-be rajzolt cím elmarad (ha a dia vagy a szekció címe már kimondja).
     data-elrendezes  "keskeny" | "szeles": az elrendezés kényszerítése (alap: a nézet szélessége dönt, 640 px alatt keskeny).
     data-ma       (Á2) a mai fok sorszáma 1-5; data-30nap (Á2) a 30 napos cél foka 1-5. Ugyanez URL-paraméterrel is:
                   ?ma=3&nap=4 (a tréner vetítéskor). Kattintás is állítja: a „jelölő: ma / 30 nap” gomb választja ki, melyiket
                   (a 07-ben az első kattintás a „ma”, ha az még üres, a következő a „30 nap”); a localStorage őrzi, csak az adott böngészőben.
     data-kor      (Á4) körszámláló szöveg, pl. "2/3".

   Viselkedés:
     - A komponens az SVG-t a figcaption ELÉ illeszti; a figcaption a szöveges megfelelő, és szkript nélkül is érthető.
     - Az SVG role="img" és aria-label; a részek kattinthatók, és alatta billentyűzettel is elérhető "csipsz"-gombok
       (.abra-chips) ismétlik a részletes részeket; kattintásra a rész meghatározása és a "melyik gyakorlatban készül" jelenik meg
       (.abra-info). A szerepeknél a mini-folyamat csak itt, kattintásra bomlik ki.
     - Állapot: megépült rész = teli szín; aktuális = kiemelt, egyszer pulzál; hátralévő = halvány. "00": a teljes
       ábra halványan, bemutatva. "07": minden kigyullad.
     - Két elrendezés: 640 px alatt függőleges (matchMedia), újrarajzolás átméretezéskor. Belső görgetősáv nincs:
       az SVG a szélességhez igazodik (viewBox), magassága a dián korlátozott.
     - prefers-reduced-motion: reduce → nincs átmenet, végállapot. Nyomtatás: végállapot, csipszek nélkül.

   JavaScript-API (opcionális, pl. a demóoldalnak):
     window.WenovaAbrak.renderAll()               minden .abra[data-abra] kirajzolása (betöltéskor magától lefut)
     window.WenovaAbrak.render(figure)            egy figure kirajzolása / újrarajzolása
     window.WenovaAbrak.setStage(figure, "04")    állapotváltás újrarajzolás nélkül (a data-stage módosítása is ezt teszi)
     window.WenovaAbrak.stages("vezerelv")        az ábra ismert állapotai (tömb)

   Tartalom: fogalmi térkép, nem adat. A szerepek, idők a nap programjából; fiktív oktatási példák, valós adat nincs.
   ============================================================================================================== */
(function () {
  'use strict';

  var REDUCED = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var NARROW = window.matchMedia ? window.matchMedia('(max-width: 640px)') : { matches: false };
  var uidCounter = 0;

  /* A nap blokkjai (a wenova.js DAY tömbjével egyező idők; csak a feliratokhoz). */
  var DAY = {
    '00': { n: 'Saját feladat, AI-alapok', t: '09:00', c: '0. gyakorlat' },
    '01': { n: 'Oriana DNS', t: '09:40', c: '1. gyakorlat' },
    '02': { n: 'RONDO-portál: adatgyűjtés', t: '10:15', c: '2. gyakorlat' },
    '03': { n: 'Közös munka és megosztás', t: '11:00', c: '3. gyakorlat' },
    '04': { n: 'RONDO agent: KAPU I, maker', t: '11:25', c: '4. gyakorlat' },
    '05': { n: 'Reviewer és stop-döntés', t: '13:25', c: '5. gyakorlat' },
    '06': { n: 'Ügykövető (Sites)', t: '15:10', c: '6. gyakorlat' },
    '06b': { n: 'BA-utótag', t: '15:35', c: 'BA-utótag' },
    '07': { n: 'Saját folyamat átvitele', t: '16:05', c: '7. gyakorlat' }
  };
  var DAY_ORDER = ['00', '01', '02', '03', '04', '05', '06', '06b', '07'];

  function hol(ids) {
    return ids.map(function (id) { var d = DAY[id]; return d ? d.c + ' (' + d.t + ', ' + d.n + ')' : id; }).join('; ');
  }

  /* ---------- SVG-segédek: sztringként épülő elemek ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function attrs(o) {
    var out = '';
    Object.keys(o || {}).forEach(function (k) { if (o[k] !== undefined && o[k] !== null && o[k] !== false) out += ' ' + k + '="' + esc(o[k]) + '"'; });
    return out;
  }
  function tag(name, o, inner) { return '<' + name + attrs(o) + (inner === undefined ? '/>' : '>' + inner + '</' + name + '>'); }
  function rect(x, y, w, h, cls, rx) { return tag('rect', { x: x, y: y, width: w, height: h, rx: rx === undefined ? 10 : rx, 'class': cls }); }
  function circle(cx, cy, r, cls) { return tag('circle', { cx: cx, cy: cy, r: r, 'class': cls }); }
  function text(x, y, s, cls, size, anchor, extra) {
    var o = { x: x, y: y, 'class': cls, 'font-size': size, 'text-anchor': anchor || 'middle' };
    if (extra) Object.keys(extra).forEach(function (k) { o[k] = extra[k]; });
    return tag('text', o, esc(s));
  }
  function path(d, cls, marker) { return tag('path', { d: d, 'class': cls, 'marker-end': marker ? 'url(#' + marker + ')' : undefined }); }
  /* Csoportszínek (design system v2, wenova-abrak.css .szin-*): a részek színe mutatja, mi tartozik egybe.
     dns = indigó (közös alap) · flow = narancs (munkafolyamat, maker kör) · ok = zöld (kapuk, reviewer) · warn = borostyán (ember dönt)
     ba = égkék (BA szerep) · sa = bíbor (Sales–Account szerep) · pro = cián (proaktív segéd) · tanulsag = lila (visszacsatolás)
     fok1…fok5 = az érettségi lépcső fokai (cián → kék → lila → rózsa → narancs). */
  var SZIN = {
    dns: 'dns', visszacsatolas: 'tanulsag', munkafolyamat: 'flow', maker: 'flow', reviewer: 'ok', kapuk: 'ok', 'ember-dont': 'warn',
    'szerep-ba': 'ba', 'szerep-sa': 'sa', proaktiv: 'pro',
    brief: 'flow', futas: 'flow', javitas: 'flow', atvetel: 'ok', r1: 'ok', r2: 'ok', stop: 'warn',
    'fok-1': 'fok1', 'fok-2': 'fok2', 'fok-3': 'fok3', 'fok-4': 'fok4', 'fok-5': 'fok5',
    /* fejezet-ábrák (v2) */
    'dns-kik': 'g1', 'dns-mit': 'pro', 'dns-szab': 'flow', 'dns-minta': 'tanulsag', 'dns-gloss': 'g5', 'dns-verzio': 'warn', 'dns-forras': 'ok', 'dns-ba': 'ba', 'dns-sa': 'sa',
    kezi: 'g5', terv: 'g1', dryrun: 'pro', alkalmaz: 'flow', visszaolvas: 'tanulsag', osszevetes: 'ok', ember: 'warn',
    'meg-link': 'g1', 'meg-projekt': 'tanulsag', 'meg-space': 'pro', app: 'flow', csapat: 'g5', szabaly: 'warn',
    fA: 'g1', fB: 'flow', ebed: 'g5', fC: 'pro', fD: 'tanulsag', 'sav-ba': 'ba', 'sav-sa': 'sa',
    adat: 'pro', 'sites-app': 'tanulsag', jog: 'flow', megoszt: 'ok',
    doc: 'g1', drotvaz: 'tanulsag', doksi: 'flow', recept: 'ok'
  };
  function part(id, n, szin, body, label) {
    szin = szin || SZIN[id] || '';
    return tag('g', { 'class': 'abra-part p-' + id + (szin ? ' szin-' + szin : ''), 'data-part': id, style: '--n:' + n, 'aria-label': label }, tag('g', { 'class': 'body' }, body));
  }
  function gearPath(cx, cy, ro, ri, n) {
    var pts = [], step = Math.PI * 2 / n, i, a;
    for (i = 0; i < n; i++) {
      a = i * step - Math.PI / 2;
      [[ri, a - 0.35 * step], [ro, a - 0.2 * step], [ro, a + 0.2 * step], [ri, a + 0.35 * step]].forEach(function (p) {
        pts.push((cx + p[0] * Math.cos(p[1])).toFixed(1) + ',' + (cy + p[0] * Math.sin(p[1])).toFixed(1));
      });
    }
    return 'M' + pts.join(' L') + ' Z';
  }
  function shieldPath(cx, cy, h) {
    return 'M' + (cx - h) + ' ' + (cy - h) + ' H' + (cx + h) + ' V' + (cy + h * 0.2) +
      ' Q' + (cx + h) + ' ' + (cy + h * 0.85) + ' ' + cx + ' ' + (cy + h * 1.15) +
      ' Q' + (cx - h) + ' ' + (cy + h * 0.85) + ' ' + (cx - h) + ' ' + (cy + h * 0.2) + ' Z';
  }
  function diamondPath(cx, cy, w, h) { return 'M' + cx + ' ' + (cy - h) + ' L' + (cx + w) + ' ' + cy + ' L' + cx + ' ' + (cy + h) + ' L' + (cx - w) + ' ' + cy + ' Z'; }
  function defs(uid) {
    return '<defs>' +
      tag('marker', { id: uid + '-ah', viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }, tag('path', { d: 'M0 0 L10 5 L0 10 Z', 'class': 'ah' })) +
      tag('marker', { id: uid + '-ah2', viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }, tag('path', { d: 'M0 0 L10 5 L0 10 Z', 'class': 'ah ah-soft' })) +
      '</defs>';
  }
  function svgOpen(uid, W, H, label, y0) { // y0: a cím nélküli változat felső üres sávját levágjuk (tömörebb dián)
    y0 = y0 || 0;
    return '<svg viewBox="0 ' + y0 + ' ' + W + ' ' + (H - y0) + '" role="img" aria-label="' + esc(label) + '" class="abra-svg" data-uid="' + uid + '">' + defs(uid);
  }

  /* ======================================================================================================
     Á1 · VEZÉRELV-ÁBRA: "Így működik egy AI-natív szervezet: öt rész, egy nap."
     Öt felső szintű rész: DNS (közép), két szerep (fogaskerekek), agentikus munkafolyamat (felső ív, maker és
     reviewer kör), ellenőrző kapuk (két pajzs + ember dönt), proaktív segéd (jobb sáv, hat fok); visszacsatolás.
     ====================================================================================================== */
  var LANC = ['bemenet', 'ismert / ismeretlen', 'kapu', 'vázlat forrással', 'review', 'emberi döntés', 'tanulság'];
  var A1_PARTS = [
    { id: 'dns', nev: 'DNS, közös alap', rovid: 'DNS', chip: true, szin: '', hol: ['01'],
      def: 'Egy forrás, verziózva, gazdával: kik vagyunk és mit adunk; termék és szabályok (BA, Sales, Account modul); glosszárium és forrásjegyzék. Minden szerep és minden agent ugyanabból olvas.',
      megj: 'Az 1. gyakorlatban készül az első változat, a napon végig bővül.' },
    { id: 'munkafolyamat', nev: 'Agentikus munkafolyamat', rovid: 'hat lépés', chip: true, szin: '', hol: ['02'],
      def: 'A módszer hat lépése minden gyakorlatban ugyanaz: cél, forrás, utasítás, ellenőrzés, javítás, rögzítés. A maker végzi a célt, a forrást, az utasítást, majd a javítást és a rögzítést; az ellenőrzés a reviewer köre, független, friss kontextusban. Ami nincs ellenőrizve és rögzítve, az nem kész.',
      megj: 'A 2. gyakorlatban: eszközhasználó agent, dry run.' },
    { id: 'ember-dont', nev: 'Ember dönt', szin: 'warn', hol: ['03'],
      def: 'Az ügyfélnek kimenő és a visszafordíthatatlan lépésnél ember dönt. A többit a kapuk és a bizonyíték fedik, hogy az emberi idő a valóban fontos döntésre menjen.',
      megj: 'A 3. gyakorlat 3. lépése: írási határ egy felügyelet nélkül futó feladatnál.' },
    { id: 'maker', nev: 'Maker kör', szin: '', hol: ['04'],
      def: 'Cél, forrás, utasítás, majd javítás és rögzítés: a maker elkészíti az első változatot, maga futtatja a gépi ellenőrzést, a reviewer megállapításai alapján javít, és rögzíti a bizonyítékot.',
      megj: 'A 4. gyakorlatban: KAPU I az agenttel.' },
    { id: 'szerep-ba', nev: 'BA szerep', rovid: 'BA folyamata', chip: true, szin: '', hol: ['04', '06b'], lanc: true,
      def: 'Üzleti elemző: a DNS-ből dolgozik, a felmérési csomagot a kapunál ellenőrzi, és a tanulságot visszaírja.',
      megj: 'A 4. gyakorlatban és a BA-utótagban mélyül.' },
    { id: 'szerep-sa', nev: 'Sales–Account szerep', rovid: 'Sales–Account folyamata', chip: true, szin: '', hol: ['04', '06'], lanc: true,
      def: 'Ugyanabból a DNS-ből dolgozik, más modullal: ajánlat, ügyállapot, ügyfél felé menő üzenet; ami kimegy, ott ember dönt.',
      megj: 'A 4. gyakorlatban és a 6. gyakorlat ügykövetőjében.' },
    { id: 'reviewer', nev: 'Reviewer kör', szin: '', hol: ['05'],
      def: 'Ellenőrzés, független és friss kontextusban: a reviewer a forrásig néz és megállapít, nem javít; a javítás a makeré. A kör korlátos: ha nem lesz jó, stop-döntés és döntési brief, nem csendes újrapróbálás.',
      megj: 'Az 5. gyakorlatban: reviewer és stop-döntés.' },
    { id: 'kapuk', nev: 'Ellenőrző kapuk', rovid: 'kapuk', chip: true, szin: 'ok', hol: ['05'],
      def: 'Két kapu a hat lépésen: az ellenőrzésnél determinisztikus (gépi) ellenőrzés és független review, a rögzítésnél bizonyíték. Egy szabály csak akkor él, ha gép vagy másik szem ellenőrzi.',
      megj: 'Az 5. gyakorlatban zárul a két kapu.' },
    { id: 'proaktiv', nev: 'Proaktív segéd', rovid: 'hat feltétel', chip: true, szin: '', hol: ['06'],
      def: 'Hat feltétel, hogy a segéd ne csak válaszoljon, hanem figyeljen és jelezzen: állandó kontextus; recept; ellenőrizhető cél és ellenőr; hosszú futás és jelzés; ütemezés vagy esemény (ha elérhető); saját brief.',
      megj: 'A 6. gyakorlatban: az ügykövető.' },
    { id: 'visszacsatolas', nev: 'Tanulság → DNS v0.2', szin: '', hol: ['07'],
      def: 'Ami a kapuknál és a szerepeknél kiderül, visszakerül a DNS-be. A következő változat jobb forrásból indul: az AI-natív működés folyamat, nem státusz.',
      megj: 'A 7. gyakorlatban: a saját folyamat átvitele és az első 30 nap.' }
  ];
  var A1_STAGES = [
    { id: '00', parts: [], most: 'A nap térképe: ma ezt járjuk végig, részenként.' },
    { id: '01', parts: ['dns'], most: 'Most a DNS épül: közös alap, forrással és gazdával.' },
    { id: '02', parts: ['munkafolyamat'], most: 'Most az agentikus munkafolyamat: eszközhasználó agent, dry run.' },
    { id: '03', parts: ['ember-dont'], most: 'Most az ember döntési pontja: írási határ a közös munkában.' },
    { id: '04', parts: ['maker', 'szerep-ba', 'szerep-sa'], most: 'Most a maker kör és a két szerep: KAPU I az agenttel.' },
    { id: '05', parts: ['reviewer', 'kapuk'], most: 'Most a reviewer kör és a kapuk: független ellenőrzés friss kontextusban, a maker javít, stop-döntés.' },
    { id: '06', parts: ['proaktiv'], most: 'Most a proaktív segéd: figyel, jelez, javasol.' },
    { id: '06b', parts: ['szerep-ba'], most: 'Most a BA szerep mélyül: a BA-utótag.' },
    { id: '07', parts: ['visszacsatolas'], all: true, most: 'Minden rész él: ezt viszed haza, és innen indul az első 30 nap.' }
  ];
  var A1_LABEL = 'Az AI-natív működés térképe öt résszel: DNS mint közös alap középen, BA és Sales–Account szerep két fogaskerékként, agentikus munkafolyamat a módszer hat lépésével (cél, forrás, utasítás, ellenőrzés, javítás, rögzítés): a maker kör a cél, forrás, utasítás, javítás, rögzítés lépéseket végzi, az ellenőrzés a reviewer külön, friss kontextusú köre; ellenőrző kapuk az ellenőrzés és a rögzítés lépésen, ember dönt jel, proaktív segéd hat feltétellel, visszacsatolás a DNS-be.';
  var STEPS6 = ['cél', 'forrás', 'utasítás', 'ellenőrzés', 'javítás', 'rögzítés']; // a módszer hat lépése (deck #hat-lepes, glosszárium)
  var PRO6 = ['kontextus', 'recept', 'cél és ellenőr', 'hosszú futás', 'ütemezés*', 'saját brief'];

  function a1Order() { // kirajzolódás sorrendje = az állapotok sorrendje
    var seen = {}, order = [];
    A1_STAGES.forEach(function (s) { s.parts.forEach(function (p) { if (!seen[p]) { seen[p] = 1; order.push(p); } }); });
    A1_PARTS.forEach(function (p) { if (!seen[p.id]) order.push(p.id); });
    return order;
  }

  function a1Wide(uid, cim, N) {
    var W = 1040, H = 548, m = uid + '-ah', m2 = uid + '-ah2', s = '';
    s += svgOpen(uid, W, H, A1_LABEL, cim ? 0 : 46);
    if (cim) s += text(W / 2, 32, 'Így működik egy AI-natív szervezet: öt rész, egy nap', 'abra-cim', 22);
    // maker és reviewer kör: sávok a lépések mögött (a DOM-ban előbb, hogy a lépések felettük látszódjanak)
    s += part('maker', N.maker, '', rect(262, 92, 476, 120, 'box', 14) + text(274, 202, '↻ maker kör: 1-3, 5-6', 'lbl', 14, 'start'), 'Maker kör: cél, forrás, utasítás, javítás, rögzítés') +
      part('reviewer', N.reviewer, '', rect(498, 98, 84, 108, 'box', 10) + text(540, 188, '↻ reviewer', 'lbl', 11.5) + text(540, 200, 'friss kontextus', 'sub', 9.5), 'Reviewer kör: ellenőrzés független, friss kontextusban');
    // munkafolyamat: hat lépés íven, DNS → folyamat nyíl
    var xs = [300, 380, 460, 540, 620, 700], ys = [156, 144, 136, 136, 144, 156], b = '';
    b += path('M500 256 V218', 'ln', m);
    b += path('M' + xs[0] + ' ' + ys[0] + ' L' + xs[1] + ' ' + ys[1] + ' L' + xs[2] + ' ' + ys[2] + ' L' + xs[3] + ' ' + ys[3] + ' L' + xs[4] + ' ' + ys[4] + ' L' + xs[5] + ' ' + ys[5], 'ln');
    xs.forEach(function (x, i) {
      if (i === 3 || i === 5) return; // a kapuk pajzsai külön részben (ellenőrzés, rögzítés)
      b += circle(x, ys[i], 16, 'box') + text(x, ys[i] + 5, String(i + 1), 'lbl', 14) + text(x, ys[i] - 27, STEPS6[i], 'sub', 15);
    });
    s += part('munkafolyamat', N.munkafolyamat, '', b, 'Agentikus munkafolyamat, hat lépés');
    // kapuk: két pajzs a 4. és 5. lépésen
    b = '';
    [3, 5].forEach(function (i) {
      b += path(shieldPath(xs[i], ys[i] - 2, 17), 'box') + path('M' + (xs[i] - 6) + ' ' + ys[i] + ' l4 4 l8 -9', 'mark') + text(xs[i], ys[i] - 27, STEPS6[i], 'sub', 15);
    });
    s += part('kapuk', N.kapuk, 'ok', b, 'Ellenőrző kapuk: gépi ellenőrzés és független review');
    // ember dönt
    b = path('M717 156 H750', 'ln', m) + path(diamondPath(794, 156, 44, 26), 'box') + text(794, 161, 'ember', 'lbl', 13) +
      text(794, 200, 'ember dönt', 'cap', 15) + text(794, 217, 'kimenő, visszafordíthatatlan', 'cap', 12);
    s += part('ember-dont', N['ember-dont'], 'warn', b, 'Ember dönt a kimenő és visszafordíthatatlan lépésnél');
    // DNS
    b = rect(300, 256, 400, 124, 'box', 14) + text(500, 290, 'DNS: közös alap', 'lbl', 22, 'middle', { 'font-weight': 700 }) +
      text(500, 316, 'kik vagyunk, mit adunk · termék és szabályok: BA, Sales, Account', 'sub', 14) +
      text(500, 337, 'glosszárium, forrásjegyzék · verzió és gazda', 'sub', 14) +
      text(500, 365, 'egy forrás, verziózva, gazdával', 'sub it', 13.5);
    s += part('dns', N.dns, '', b, 'DNS, közös alap');
    // szerepek: fogaskerekek, a DNS-ből kapnak nyilat
    b = path('M300 296 H222', 'ln', m) + path(gearPath(150, 318, 66, 54, 12), 'box') + text(150, 326, 'BA', 'lbl', 24, 'middle', { 'font-weight': 700 }) + text(150, 410, 'BA szerep', 'cap', 15);
    s += part('szerep-ba', N['szerep-ba'], '', b, 'BA szerep');
    b = path('M700 296 H790', 'ln', m) + path(gearPath(862, 318, 66, 54, 12), 'box') + text(862, 313, 'Sales–', 'lbl', 16, 'middle', { 'font-weight': 700 }) + text(862, 333, 'Account', 'lbl', 16, 'middle', { 'font-weight': 700 }) + text(862, 410, 'Sales–Account szerep', 'cap', 15);
    s += part('szerep-sa', N['szerep-sa'], '', b, 'Sales–Account szerep');
    // proaktív segéd: sáv a DNS alatt, hat fok, a DNS-ből olvas
    b = path('M500 380 V404', 'ln', m) + text(500, 426, 'Proaktív segéd: figyel, jelez, javasol', 'lbl', 15, 'middle', { 'font-weight': 700 });
    var two = [['állandó', 'kontextus'], ['recept', ''], ['cél és', 'ellenőr'], ['hosszú', 'futás'], ['ütemezés*', ''], ['saját', 'brief']];
    two.forEach(function (t, i) { var x = 300 + i * 67.2; b += rect(x, 436, 64, 46, 'fok', 7) + text(x + 32, t[1] ? 455 : 464, t[0], 'lbl', 13) + (t[1] ? text(x + 32, 471, t[1], 'lbl', 13) : ''); });
    b += text(500, 498, '* ha elérhető a munkatérben', 'sub', 11.5);
    s += part('proaktiv', N.proaktiv, '', b, 'Proaktív segéd, hat feltétel');
    // visszacsatolás: a kapuktól és a szerepektől vissza a DNS-be
    b = path('M838 156 H940 V516 H720 V342 H706', 'ln dash', m2) + path('M150 384 V516 H280 V342 H294', 'ln dash', m2) + text(500, 532, 'tanulság → DNS v0.2', 'lbl it', 15);
    s += part('visszacsatolas', N.visszacsatolas, '', b, 'Visszacsatolás: tanulság a DNS-be');
    return s + '</svg>';
  }

  function a1Deck(uid, N) {
    var m = uid + '-ah', m2 = uid + '-ah2', s = svgOpen(uid, 1040, 390, A1_LABEL);
    s += part('maker', N.maker, '', rect(40, 24, 180, 82, 'box', 12) + text(130, 54, 'Maker', 'lbl', 22) + text(130, 82, 'készít, javít', 'sub', 18), 'Maker: elkészíti és javítja a kimenetet');
    var b = rect(260, 24, 500, 82, 'box', 12) + text(510, 54, 'Agentikus munkafolyamat', 'lbl', 22);
    ['Cél', 'Forrás', 'Utasítás', 'Ellenőrzés', 'Javítás', 'Rögzítés'].forEach(function (t, i) { b += text(300 + i * 83, 84, t, 'sub', 16); });
    s += part('munkafolyamat', N.munkafolyamat, '', b, 'Hat lépéses munkafolyamat');
    s += part('kapuk', N.kapuk, 'ok', rect(800, 24, 200, 82, 'box', 12) + text(900, 54, 'Ellenőrző kapuk', 'lbl', 20), 'Gépi ellenőrzés és független review');
    s += part('reviewer', N.reviewer, '', text(900, 82, 'gép + friss reviewer', 'sub', 17), 'Reviewer: független, friss kontextus');
    b = rect(340, 148, 360, 96, 'box', 12) + text(520, 178, 'DNS: közös alap', 'lbl', 24) + text(520, 205, 'tudás, termék, szabályok', 'sub', 18) + text(520, 230, 'egy forrás, verzió és gazda', 'sub', 18);
    s += part('dns', N.dns, '', b, 'DNS, a közös vállalati tudás');
    s += part('szerep-ba', N['szerep-ba'], '', rect(40, 160, 180, 72, 'box', 12) + text(130, 190, 'BA szerep', 'lbl', 22) + text(130, 216, 'üzleti elemző', 'sub', 18), 'BA, üzleti elemző');
    s += part('szerep-sa', N['szerep-sa'], '', rect(800, 160, 200, 72, 'box', 12) + text(900, 190, 'Sales-Account', 'lbl', 22) + text(900, 216, 'értékesítési szerep', 'sub', 17), 'Sales-Account szerep');
    s += part('proaktiv', N.proaktiv, '', rect(300, 282, 440, 62, 'box', 12) + text(520, 309, 'Proaktív segéd', 'lbl', 22) + text(520, 334, 'figyel, jelez, javasol', 'sub', 18), 'Proaktív segéd');
    s += part('ember-dont', N['ember-dont'], 'warn', rect(800, 282, 200, 62, 'box', 12) + text(900, 309, 'Ember dönt', 'lbl', 22) + text(900, 334, 'kimenő lépés előtt', 'sub', 17), 'Ember dönt a kimenő lépés előtt');
    s += path('M220 65 H254', 'ln', m) + path('M760 65 H794', 'ln', m) + path('M520 148 V112', 'ln', m) + path('M340 196 H226', 'ln', m) + path('M700 196 H794', 'ln', m) + path('M520 244 V276', 'ln', m) + path('M1010 65 H1024 V270 H900 V276', 'ln', m);
    b = path('M40 244 V366 H1024 V246', 'ln dash') + path('M260 366 V260 H320 V220 H334', 'ln dash', m2) + text(520, 385, 'tanulság vissza a DNS-be', 'lbl it', 18);
    s += part('visszacsatolas', N.visszacsatolas, '', b, 'Visszacsatolás: a tanulság visszakerül a közös tudásba');
    return s + '</svg>';
  }

  function a1Narrow(uid, cim, N) {
    var W = 420, H = 668, m = uid + '-ah', m2 = uid + '-ah2', s = '';
    s += svgOpen(uid, W, H, A1_LABEL);
    if (cim) s += text(210, 22, 'Így működik egy AI-natív szervezet:', 'abra-cim', 15) + text(210, 42, 'öt rész, egy nap', 'abra-cim', 15);
    var xs = [46, 112, 178, 244, 310, 376], cy = 116, b = '';
    s += part('maker', N.maker, '', rect(14, 64, 392, 96, 'box', 10) + text(22, 152, '↻ maker kör: 1-3, 5-6', 'lbl', 11, 'start'), 'Maker kör: cél, forrás, utasítás, javítás, rögzítés') +
      part('reviewer', N.reviewer, '', rect(216, 70, 56, 86, 'box', 7) + text(244, 148, 'reviewer', 'lbl', 8.5), 'Reviewer kör: ellenőrzés független, friss kontextusban');
    b += path('M210 236 V168', 'ln', m) + path('M46 ' + cy + ' H376', 'ln');
    xs.forEach(function (x, i) { if (i === 3 || i === 5) return; b += circle(x, cy, 11, 'box') + text(x, cy + 4, String(i + 1), 'lbl', 10) + text(x, cy - 20, STEPS6[i], 'sub', 11); });
    s += part('munkafolyamat', N.munkafolyamat, '', b, 'Agentikus munkafolyamat, hat lépés');
    b = '';
    [3, 5].forEach(function (i) { b += path(shieldPath(xs[i], cy - 1, 12), 'box') + path('M' + (xs[i] - 4.5) + ' ' + cy + ' l3 3 l6 -7', 'mark') + text(xs[i], cy - 20, STEPS6[i], 'sub', 11); });
    s += part('kapuk', N.kapuk, 'ok', b, 'Ellenőrző kapuk');
    b = path('M376 128 V150 H356 V172', 'ln', m) + path(diamondPath(356, 192, 32, 18), 'box') + text(356, 196, 'ember', 'lbl', 10) + text(318, 190, 'ember dönt', 'cap', 11, 'end') + text(318, 203, 'kimenő, visszafordíthatatlan', 'cap', 9, 'end');
    s += part('ember-dont', N['ember-dont'], 'warn', b, 'Ember dönt');
    b = rect(30, 236, 360, 108, 'box', 12) + text(210, 266, 'DNS: közös alap', 'lbl', 17, 'middle', { 'font-weight': 700 }) +
      text(210, 288, 'kik vagyunk, mit adunk · termék és szabályok', 'sub', 11) + text(210, 304, 'BA, Sales, Account · glosszárium · verzió, gazda', 'sub', 11) + text(210, 330, 'egy forrás, verziózva, gazdával', 'sub it', 11);
    s += part('dns', N.dns, '', b, 'DNS, közös alap');
    b = path('M110 344 V360', 'ln', m) + path(gearPath(110, 412, 46, 37, 12), 'box') + text(110, 418, 'BA', 'lbl', 18, 'middle', { 'font-weight': 700 }) + text(110, 476, 'BA szerep', 'cap', 11);
    s += part('szerep-ba', N['szerep-ba'], '', b, 'BA szerep');
    b = path('M310 344 V360', 'ln', m) + path(gearPath(310, 412, 46, 37, 12), 'box') + text(310, 408, 'Sales–', 'lbl', 12, 'middle', { 'font-weight': 700 }) + text(310, 423, 'Account', 'lbl', 12, 'middle', { 'font-weight': 700 }) + text(310, 476, 'Sales–Account szerep', 'cap', 11);
    s += part('szerep-sa', N['szerep-sa'], '', b, 'Sales–Account szerep');
    b = rect(30, 492, 360, 116, 'box', 12) + text(210, 512, 'Proaktív segéd: figyel, jelez, javasol', 'lbl', 12, 'middle', { 'font-weight': 700 });
    var two = [['állandó', 'kontextus'], ['recept', ''], ['cél és', 'ellenőr'], ['hosszú', 'futás'], ['ütemezés*', ''], ['saját', 'brief']];
    two.forEach(function (t, i) { var x = 40 + i * 57; b += rect(x, 524, 54, 56, 'fok', 5) + text(x + 27, t[1] ? 547 : 556, t[0], 'lbl', 10.5) + (t[1] ? text(x + 27, 562, t[1], 'lbl', 10.5) : ''); });
    b += text(210, 600, '* ha elérhető', 'sub', 9);
    s += part('proaktiv', N.proaktiv, '', b, 'Proaktív segéd, hat feltétel');
    b = path('M356 210 V222 H410 V632 H10 V290 H24', 'ln dash', m2) + path('M64 412 H10', 'ln dash') + text(210, 652, 'tanulság → DNS v0.2', 'lbl it', 11);
    s += part('visszacsatolas', N.visszacsatolas, '', b, 'Visszacsatolás: tanulság a DNS-be');
    return s + '</svg>';
  }

  var ABRAK = {};
  ABRAK.vezerelv = {
    parts: A1_PARTS, stages: A1_STAGES, defaultStage: '07',
    hint: 'Kattints az ábra egy részére (vagy ide): mit jelent, melyik gyakorlatban készül.',
    svg: function (fig, uid, narrow) {
      var order = a1Order(), N = {};
      order.forEach(function (id, i) { N[id] = i; });
      var cim = fig.getAttribute('data-cim') !== 'nincs';
      if (fig.getAttribute('data-layout') === 'deck') return a1Deck(uid, N);
      return narrow ? a1Narrow(uid, cim, N) : a1Wide(uid, cim, N);
    },
    state: function (stageId) {
      var idx = -1, built = {}, current = {};
      A1_STAGES.forEach(function (s, i) { if (s.id === stageId) idx = i; });
      if (idx < 0) idx = A1_STAGES.length - 1;
      var st = A1_STAGES[idx];
      if (st.all) A1_PARTS.forEach(function (p) { built[p.id] = 1; });
      A1_STAGES.slice(0, idx).forEach(function (s) { s.parts.forEach(function (p) { built[p] = 1; }); });
      st.parts.forEach(function (p) { current[p] = 1; });
      return { built: built, current: current, most: st.most, id: st.id };
    }
  };

  /* ======================================================================================================
     Á2 · ÉRETTSÉGI LÉPCSŐ: öt fok, szám nélkül. Kattintás = "ma" jelölő; a 07 állapotban "30 nap" jelölő.
     ====================================================================================================== */
  var A2_FOK = [ // kanonikus szöveg: Feladatok/00-halado-setup.md, 2. lépés (az öt fok egy-egy mondattal, szám nélkül)
    { id: 'fok-1', nev: 'Eseti használat', jel: 'mindenki a saját promptjaival, alkalmanként' },
    { id: 'fok-2', nev: 'Fluens egyének', jel: 'sokan magabiztosan használják, de külön-külön' },
    { id: 'fok-3', nev: 'Megosztott tudás', jel: 'közös, verziózott alap, amelyből a csapat dolgozik' },
    { id: 'fok-4', nev: 'Beágyazott workflow', jel: 'az AI a folyamat része, kapuval és gazdával' },
    { id: 'fok-5', nev: 'AI-natív működés', jel: 'a tudás, a szerepek, a kapuk és a segéd együtt a mindennapi működés, mérve és rendszeresen felülvizsgálva' }
  ];
  var A2_LABEL = 'Érettségi lépcső öt fokkal, szám nélkül: eseti használat, fluens egyének, megosztott tudás, beágyazott workflow, AI-natív működés. A csoport jelöli, hol tart ma, és a 7. gyakorlatban hová lép 30 nap alatt.';
  function wrapWords(str, max) {
    var words = str.split(' '), line = '', lines = [];
    words.forEach(function (w) { if (line && (line + ' ' + w).length > max) { lines.push(line); line = w; } else line = line ? line + ' ' + w : w; });
    if (line) lines.push(line);
    return lines;
  }
  function jelolok(x, y, narrow) {
    var f = narrow ? 0.8 : 1;
    return tag('g', { 'class': 'jelolo', transform: 'translate(' + x + ' ' + y + ')' },
      rect(-54 * f, -11 * f, 44 * f, 20 * f, 'ma-box', 10 * f) + text(-32 * f, 4 * f, 'ma', 'ma-lbl', 11 * f) +
      rect(0, -11 * f, 60 * f, 20 * f, 'nap-box', 10 * f) + text(30 * f, 4 * f, '30 nap', 'nap-lbl', 11 * f));
  }
  ABRAK.lepcso = {
    parts: A2_FOK.map(function (f) { return { id: f.id, nev: f.nev, def: f.jel.charAt(0).toUpperCase() + f.jel.slice(1) + '.', megj: 'Kattintással ide kerül a jelölő; a fokok a 0. és a 7. gyakorlatban kerülnek elő.', hol: ['00', '07'] }; }),
    stages: DAY_ORDER.map(function (id) { return { id: id, parts: [], most: '' }; }),
    defaultStage: '00',
    hint: 'Kattints egy fokra: oda kerül a kiválasztott jelölő (csak ebben a böngészőben marad meg). Fokok:', chipAll: true,
    svg: function (fig, uid, narrow) {
      var cim = fig.getAttribute('data-cim') !== 'nincs';
      var W = narrow ? 420 : 1000, H = narrow ? 626 : 420, s = svgOpen(uid, W, H, A2_LABEL, cim ? 0 : (narrow ? 18 : 34)), m = uid + '-ah';
      if (cim) s += text(W / 2, narrow ? 24 : 30, 'Hol tartunk: öt fok, szám nélkül', 'abra-cim', narrow ? 15 : 20);
      A2_FOK.forEach(function (f, i) {
        var b;
        if (narrow) {
          var y = 44 + i * 108, x = 24 + i * 12, w = 372 - i * 12;
          b = rect(x, y, w, 96, 'box', 10) + text(x + 14, y + 26, f.nev, 'lbl', 15, 'start', { 'font-weight': 700 });
          wrapWords(f.jel, 52).slice(0, 3).forEach(function (l, k) { b += text(x + 14, y + 45 + k * 13, l, 'sub', 10.5, 'start'); });
          b += jelolok(x + w - 64, y + 84, true);
        } else {
          var h = 90 + i * 50, bx = 40 + i * 184, by = 370 - h;
          b = rect(bx, by, 176, h, 'box', 10) + text(bx + 88, by + 28, f.nev, 'lbl', 15, 'middle', { 'font-weight': 700 });
          wrapWords(f.jel, 25).slice(0, 5).forEach(function (l, k) { b += text(bx + 88, by + 50 + k * 15, l, 'sub', 11.5); });
          b += jelolok(bx + 88, by - 14, false);
        }
        s += part(f.id, i, '', b, f.nev);
      });
      if (!narrow) s += path('M40 392 H960', 'ln', m) + text(500, 412, 'a felső fokok feltételei (közös tudás, kapu, gazda, mérés) nem termékfunkciók, hanem a szervezet döntései', 'sub it', 12);
      else s += text(210, 612, 'feltétel: közös tudás, kapu, gazda, mérés', 'sub it', 10.5);
      return s + '</svg>';
    },
    state: function (stageId) { return { built: {}, current: {}, most: stageId === '07' ? 'Jelöld: hol tartunk ma, és hová lépünk 30 nap alatt.' : 'Jelöld, hol tartunk ma. A tréner nem mond szintet.', id: stageId, all: true }; },
    after: function (fig) { // jelölők: data-ma / data-30nap, URL (?ma=3&nap=4), localStorage, kattintás; a 07-ben „ma” és „30 nap” váltó
      var key = 'wenova-lepcso', st = {}, q = {};
      try { st = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { st = {}; }
      try { var u = new URLSearchParams(location.search); q.ma = u.get('ma'); q.nap = u.get('nap') || u.get('30nap'); } catch (e) { q = {}; }
      var ma = fig.getAttribute('data-ma') || q.ma || st.ma || '', nap = fig.getAttribute('data-30nap') || q.nap || st.nap || '';
      var is07 = (fig.getAttribute('data-stage') || '00') === '07', mode = is07 && ma ? 'nap' : 'ma';
      var chips = fig.querySelector('.abra-chips'), sel = null;
      if (chips) {
        sel = document.createElement('span'); sel.className = 'abra-jelolo-valaszto'; sel.setAttribute('role', 'group'); sel.setAttribute('aria-label', 'Melyik jelölőt teszed le kattintással');
        sel.innerHTML = '<span>jelölő:</span><button type="button" class="abra-chip" data-mode="ma">ma</button>' + (is07 ? '<button type="button" class="abra-chip" data-mode="nap">30 nap</button>' : '');
        chips.insertBefore(sel, chips.firstChild);
        sel.addEventListener('click', function (ev) { var b = ev.target.closest('button[data-mode]'); if (b) { mode = b.getAttribute('data-mode'); paint(); } });
      }
      function paint() {
        fig.querySelectorAll('.abra-part').forEach(function (g, i) {
          g.classList.toggle('is-ma', String(i + 1) === String(ma));
          g.classList.toggle('is-nap', String(i + 1) === String(nap));
          g.classList.toggle('is-built', !!(ma && i + 1 <= Number(ma)));
          g.classList.toggle('is-todo', !!(ma && i + 1 > Number(ma)));
        });
        if (sel) sel.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === mode)); b.classList.toggle('is-open', b.getAttribute('data-mode') === mode); });
        var most = fig.querySelector('.abra-most');
        if (most) most.textContent = (is07 ? 'A lépcső ma és 30 nap múlva. ' : 'Jelöld, hol tartunk ma; a tréner nem mond szintet. ') + 'Ma: ' + (ma ? A2_FOK[ma - 1].nev : 'nincs jelölve') + (is07 ? ' · 30 nap: ' + (nap ? A2_FOK[nap - 1].nev : 'nincs jelölve') : '') + '.';
      }
      paint();
      fig.addEventListener('abra:state', paint);
      fig.addEventListener('abra:part', function (ev) {
        var i = Number(ev.detail.id.split('-')[1]);
        if (mode === 'nap') nap = i; else { ma = i; if (is07) mode = 'nap'; }
        try { localStorage.setItem(key, JSON.stringify({ ma: ma, nap: nap })); } catch (e) { /* privát mód: nem baj */ }
        paint();
      });
    }
  };

  /* ======================================================================================================
     Á4 · MAKER-REVIEWER HUROK kapukkal és stop-döntéssel.
     Cél → v1 → gépi ellenőrzés → R1 → v2 → R2 → stop. Két rombusz: "megfelel?" és "limit?".
     ====================================================================================================== */
  var A4_PARTS = [
    { id: 'brief', nev: 'Cél és recept', hol: ['04'], def: 'Mit kérünk, miből, mi a „jó” ellenőrizhető kritériuma, hol a határ. Ez a brief; ettől indul a maker.', mondat: '„Készítsd el a felmérési csomag első változatát a DNS szabályai szerint; a kész feltétele az ellenőrzőlista.”' },
    { id: 'futas', nev: 'v1: a maker dolgozik', hol: ['04'], def: 'Az agent elkészíti az első változatot a recept szerint, és rögzíti, mit miből csinált.', mondat: '„Dolgozz lépésenként; minden állításhoz forrás; ha hiányzik adat, jelöld, ne találd ki.”' },
    { id: 'atvetel', nev: 'Gépi ellenőrzés', szin: 'ok', hol: ['04'], def: 'Determinisztikus kapu: szerkezet, kötelező mezők, tiltott szavak, számok egyezése. Gép ellenőrzi, nem a modell jóindulata.', mondat: '„Futtasd az ellenőrzőlistát, és a hibákat sorold fel, ne javítsd csendben.”' },
    { id: 'r1', nev: 'R1: független review', szin: 'ok', hol: ['05'], def: 'Másik szem (másik beszélgetés vagy másik ember) a forrásig ellenőriz: megfelel? Megállapítások súlyossággal.', mondat: '„Te vagy a reviewer. Ne javíts: állapíts meg, forrással és súlyossággal.”' },
    { id: 'javitas', nev: 'v2: javítás', hol: ['05'], def: 'A maker csak a megnevezett hibákat javítja, és jelzi, mi változott.', mondat: '„Javítsd a felsorolt hibákat, mást ne változtass; írd le, mi változott.”' },
    { id: 'r2', nev: 'R2: újraellenőrzés', szin: 'ok', hol: ['05'], def: 'A reviewer a javításokat és az érintett részeket nézi újra. Legfeljebb 2 külső review-kör indul: R1 és R2, utána stop-döntés.', mondat: '„Ellenőrizd a változásokat és amit érintenek; csak az új revíziót minősítsd.”' },
    { id: 'stop', nev: 'Stop-döntés', szin: 'warn', hol: ['05'], def: 'Kilépés: „kész” (nem küldési engedély) vagy a limit elérve: döntési brief az illetékes embernek. Nincs csendes újrapróbálás.', mondat: '„Ha a második kör után sem jó: állj meg, és írd meg a döntési briefet: mi a kérdés, mik az opciók, mi hiányzik.”' }
  ];
  var A4_STAGE_ALIAS = { '00': 'brief', '01': 'brief', '02': 'brief', '03': 'brief', '04': 'atvetel', '05': 'r2', '06': 'stop', '06b': 'stop', '07': 'stop' };
  var A4_LABEL = 'Maker-reviewer hurok: cél és recept, v1 a makertől, gépi ellenőrzés, R1 független review a „megfelel?” rombusszal, v2 javítás, R2 újraellenőrzés a „limit?” rombusszal, stop-döntés: kész (nem küldési engedély) vagy döntési brief.';
  ABRAK.hurok = {
    parts: A4_PARTS.map(function (p) { return { id: p.id, nev: p.nev, szin: p.szin || '', def: p.def, hol: p.hol, megj: 'Indító mondat: ' + p.mondat }; }),
    stages: A4_PARTS.map(function (p) { return { id: p.id, parts: [p.id] }; }),
    defaultStage: 'stop',
    hint: 'Kattints egy lépésre: mit jelent, és mi az indító mondat.', chipAll: true,
    norm: function (st) { return A4_STAGE_ALIAS[st] || st; },
    svg: function (fig, uid, narrow) {
      var cim = fig.getAttribute('data-cim') !== 'nincs', kor = fig.getAttribute('data-kor');
      var W = narrow ? 420 : 1000, H = narrow ? 640 : 380, s = svgOpen(uid, W, H, A4_LABEL, cim || kor ? 0 : (narrow ? 14 : 24)), m = uid + '-ah', m2 = uid + '-ah2';
      if (cim) s += text(W / 2, narrow ? 24 : 30, 'Maker-reviewer hurok: kapuk és stop-döntés', 'abra-cim', narrow ? 15 : 20);
      if (kor) s += text(W - 20, narrow ? 24 : 30, 'kör: ' + kor, 'sub kor', narrow ? 11 : 13, 'end');
      var P, i;
      if (!narrow) {
        P = [[40, 160], [200, 160], [360, 160], [520, 160], [680, 160], [840, 160]]; // brief, futas, atvetel, r1(rombusz), javitas, r2(rombusz)
        var b;
        b = rect(40, 130, 120, 60, 'box', 10) + text(100, 156, 'cél és', 'lbl', 13) + text(100, 174, 'recept', 'lbl', 13);
        s += part('brief', 0, '', b, A4_PARTS[0].nev);
        b = path('M160 160 H196', 'ln', m) + rect(200, 130, 120, 60, 'box', 10) + text(260, 156, 'v1', 'lbl', 15, 'middle', { 'font-weight': 700 }) + text(260, 174, 'maker', 'sub', 12);
        s += part('futas', 1, '', b, A4_PARTS[1].nev);
        b = path('M320 160 H356', 'ln', m) + path(shieldPath(400, 156, 26), 'box') + path('M389 158 l7 7 l14 -16', 'mark') + text(400, 212, 'gépi ellenőrzés', 'cap', 12);
        s += part('atvetel', 2, 'ok', b, A4_PARTS[2].nev);
        b = path('M430 160 H476', 'ln', m) + path(diamondPath(540, 160, 60, 36), 'box') + text(540, 157, 'R1', 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(540, 172, 'megfelel?', 'lbl', 11) +
          path('M540 196 V236 H100 V194', 'ln dash', m2) + text(320, 252, 'nem: javítás a megnevezett hibákon', 'cap', 11);
        s += part('r1', 3, 'ok', b, A4_PARTS[3].nev);
        b = path('M600 160 H636', 'ln', m) + rect(640, 130, 120, 60, 'box', 10) + text(700, 156, 'v2', 'lbl', 15, 'middle', { 'font-weight': 700 }) + text(700, 174, 'javítás', 'sub', 12);
        s += part('javitas', 4, '', b, A4_PARTS[4].nev);
        b = path('M760 160 H796', 'ln', m) + path(diamondPath(860, 160, 60, 36), 'box') + text(860, 157, 'R2', 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(860, 172, 'limit?', 'lbl', 11) +
          text(780, 282, 'legfeljebb 2 külső review: R1, R2; utána stop-döntés', 'cap', 11);
        s += part('r2', 5, 'ok', b, A4_PARTS[5].nev);
        b = path('M860 124 V90', 'ln', m) + rect(770, 46, 180, 44, 'box', 10) + text(860, 64, 'kész', 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(860, 80, '(nem küldési engedély)', 'sub', 10.5) +
          path('M920 160 H956', 'ln', m) + text(996, 150, 'limit', 'cap', 11, 'end') + text(996, 164, 'elérve', 'cap', 11, 'end') + text(996, 178, 'döntési brief', 'cap', 11, 'end', { 'font-weight': 700 }) +
          text(500, 330, 'a hurok korlátos: a határnál nem újrapróbál csendben, hanem az illetékes embernek döntési briefet ad', 'cap it', 12.5);
        s += part('stop', 6, 'warn', b, A4_PARTS[6].nev);
      } else {
        var ys = [60, 140, 220, 300, 380, 460], cx = 150, b2;
        b2 = rect(80, ys[0], 140, 50, 'box', 8) + text(cx, ys[0] + 30, 'cél és recept', 'lbl', 12);
        s += part('brief', 0, '', b2, A4_PARTS[0].nev);
        b2 = path('M150 ' + (ys[0] + 50) + ' V' + (ys[1] - 4), 'ln', m) + rect(80, ys[1], 140, 50, 'box', 8) + text(cx, ys[1] + 30, 'v1: maker', 'lbl', 12);
        s += part('futas', 1, '', b2, A4_PARTS[1].nev);
        b2 = path('M150 ' + (ys[1] + 50) + ' V' + (ys[2] - 4), 'ln', m) + path(shieldPath(cx, ys[2] + 22, 22), 'box') + path('M141 ' + (ys[2] + 24) + ' l6 6 l12 -14', 'mark') + text(cx + 34, ys[2] + 28, 'gépi ellenőrzés', 'cap', 11, 'start');
        s += part('atvetel', 2, 'ok', b2, A4_PARTS[2].nev);
        b2 = path('M150 ' + (ys[2] + 50) + ' V' + (ys[3] - 4), 'ln', m) + path(diamondPath(cx, ys[3] + 26, 56, 28), 'box') + text(cx, ys[3] + 24, 'R1', 'lbl', 11, 'middle', { 'font-weight': 700 }) + text(cx, ys[3] + 36, 'megfelel?', 'lbl', 10) +
          path('M94 ' + (ys[3] + 26) + ' H40 V' + (ys[1] + 25) + ' H76', 'ln dash', m2) + text(36, ys[2] + 10, 'nem', 'cap', 10, 'start');
        s += part('r1', 3, 'ok', b2, A4_PARTS[3].nev);
        b2 = path('M150 ' + (ys[3] + 54) + ' V' + (ys[4] - 4), 'ln', m) + rect(80, ys[4], 140, 50, 'box', 8) + text(cx, ys[4] + 30, 'v2: javítás', 'lbl', 12);
        s += part('javitas', 4, '', b2, A4_PARTS[4].nev);
        b2 = path('M150 ' + (ys[4] + 50) + ' V' + (ys[5] - 4), 'ln', m) + path(diamondPath(cx, ys[5] + 26, 56, 28), 'box') + text(cx, ys[5] + 24, 'R2', 'lbl', 11, 'middle', { 'font-weight': 700 }) + text(cx, ys[5] + 36, 'limit?', 'lbl', 10) +
          text(254, ys[5] - 20, 'R1, R2: utána stop', 'cap', 10, 'start');
        s += part('r2', 5, 'ok', b2, A4_PARTS[5].nev);
        b2 = path('M150 ' + (ys[5] + 54) + ' V550', 'ln', m) + rect(30, 554, 160, 46, 'box', 8) + text(110, 573, 'kész', 'lbl', 12, 'middle', { 'font-weight': 700 }) + text(110, 589, '(nem küldési engedély)', 'sub', 9.5) +
          path('M206 ' + (ys[5] + 26) + ' H300 V550', 'ln', m) + rect(230, 554, 170, 46, 'box', 8) + text(315, 573, 'limit elérve', 'lbl', 12, 'middle', { 'font-weight': 700 }) + text(315, 589, 'döntési brief az embernek', 'sub', 9.5) +
          text(210, 626, 'a hurok korlátos: nem újrapróbál csendben', 'cap it', 10.5);
        s += part('stop', 6, 'warn', b2, A4_PARTS[6].nev);
      }
      return s + '</svg>';
    },
    state: function (stageId) {
      var ids = A4_PARTS.map(function (p) { return p.id; }), idx = ids.indexOf(stageId), built = {}, current = {};
      if (idx < 0) idx = ids.length - 1;
      ids.slice(0, idx).forEach(function (p) { built[p] = 1; });
      current[ids[idx]] = 1;
      var MOST = { brief: 'Most a cél és a recept: mitől lesz ellenőrizhetően kész.', futas: 'Most a maker dolgozik: v1 a recept szerint.', atvetel: 'Most a gépi kapu: szerkezet, mezők, számok, tiltott szavak.', r1: 'Most az R1: független review, megállapítás forrással.', javitas: 'Most a javítás: csak a megnevezett hibák.', r2: 'Most az R2: a változások újraellenőrzése; limit?', stop: 'Stop-döntés: kész (nem küldési engedély) vagy döntési brief.' };
      return { built: built, current: current, most: MOST[ids[idx]], id: ids[idx] };
    }
  };
  /* ======================================================================================================
     FEJEZET-ÁBRÁK (design system v2): fejezetenként más ábra a fejezet fogalmára. Állapot nincs: minden rész a saját
     csoportszínében látszik; kattintásra a meghatározás és a „hol készül” jelenik meg. Szöveg: a Feladatok forgatókönyvei.
       dns-retegek   (01) a DNS felépítése: öt réteg, verzió és gazda, forrás-visszakeresés; egy alap, két szerep
       portal-dryrun (02) kézi út vagy böngésző-agent: terv → dry run → alkalmazás naplóval → visszaolvasás → összevetés
       jogmatrix     (03) megosztási módok és jogok mátrixa; app-kapcsolat → csapatfeladat → hozzáférési szabály
       agent-futas   (04) az agentfutás íve: A–B fázis, ebéd alatti futás, C átvétel, R1, D javítás; BA és Sales–Account sáv
       sites-ut      (06) adat → app → jogosultság → megosztás, a tartalmi szabállyal
       ba-utotag     (06b) három rövid BA-feladat receptből: dokumentum, drótváz, dokumentáció kódból
     ====================================================================================================== */
  function card(x, y, w, h, title, lines, size, rx) {
    size = size || 13;
    var s = rect(x, y, w, h, 'box', rx === undefined ? 10 : rx) + text(x + w / 2, y + 22, title, 'lbl', size, 'middle', { 'font-weight': 700 });
    (lines || []).forEach(function (l, i) { s += text(x + w / 2, y + 41 + i * (size + 1), l, 'sub', size - 2); });
    return s;
  }
  function simpleDef(parts, hint, svgFn) {
    return {
      parts: parts, stages: DAY_ORDER.map(function (id) { return { id: id, parts: [], most: '' }; }), defaultStage: '07',
      hint: hint || 'Kattints az ábra egy részére (vagy ide): mit jelent.', chipAll: true, svg: svgFn,
      state: function (st) { return { built: {}, current: {}, most: '', id: st, all: true }; }
    };
  }
  function arrow(x1, y1, x2, y2, m, dash) { return path('M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2, 'ln' + (dash ? ' dash' : ''), m); }

  /* ---------- Á5 · dns-retegek (01) ---------- */
  var A5_PARTS = [
    { id: 'dns-kik', nev: 'Kik vagyunk', hol: ['01'], def: 'A vállalat bemutatása: ceg.md. Minden állítás mellett forrásazonosító és gazda áll.' },
    { id: 'dns-mit', nev: 'Mit adunk', hol: ['01'], def: 'Terméktudás és érték: termek.md, ertek-es-ugyfel.md. Ugyanebből olvas a BA és a Sales–Account.' },
    { id: 'dns-szab', nev: 'Szabályok (szerepmodulok)', hol: ['01', '04'], def: 'Döntési szabályok szerepenként: ba.md, sales.md, account.md. A feladatréteg különbözik, az alap közös.' },
    { id: 'dns-minta', nev: 'Működési minta', hol: ['00', '01'], def: 'A közös működési minta: a prompt-szerkezet (hét elem), az „írasd a promptot” minta, a maker–reviewer döntési szabály, az orchestrator szerepe és a stop-szabályok (mukodesi-minta.md).' },
    { id: 'dns-gloss', nev: 'Glosszárium és forrásjegyzék', hol: ['01'], def: 'A rövidítések feloldása és a források jegyzéke: a forrásazonosító ide mutat.' },
    { id: 'dns-verzio', nev: 'Verzió, gazda, státusz', hol: ['01'], def: 'A README-ből induláskor kiolvasott verzió, gazda, státusz, érvényesség és utolsó ellenőrzés: a frissességi munkamenet. A DNS nem automatikusan friss; a kiolvasott verzió bizonyítja.' },
    { id: 'dns-forras', nev: 'Forrás-visszakeresés', hol: ['01', '05'], def: 'Állítás → forrásazonosító → forrásjegyzék → fájl és hely. Hiány esetén „Nincs megadva” vagy „Jóváhagyásra vár”; nem hatályos szabálynál a gazdát kell megkérdezni.' },
    { id: 'dns-ba', nev: 'BA szerep', hol: ['01', '04'], def: 'Üzleti elemző: ugyanabból a kiadásból válaszol, forráshellyel (modul, szakasz, verzió).' },
    { id: 'dns-sa', nev: 'Sales–Account szerep', hol: ['01', '04'], def: 'Értékesítés és ügyfélkapcsolat: ugyanabból a kiadásból, más szerepmodullal; ami kimegy, ott ember dönt.' }
  ];
  var A5_LABEL = 'A DNS felépítése: öt réteg (kik vagyunk, mit adunk, szabályok, működési minta, glosszárium és forrásjegyzék) egy alapként, mellette a verzió, gazda, státusz és a forrás-visszakeresés; az alapból két szerep dolgozik, a BA és a Sales–Account, forráshellyel.';
  var A5_LAYERS = [['dns-kik', 'Kik vagyunk', 'ceg.md'], ['dns-mit', 'Mit adunk', 'termek.md · ertek-es-ugyfel.md'], ['dns-szab', 'Szabályok', 'ba.md · sales.md · account.md'], ['dns-minta', 'Működési minta', 'prompt-szerkezet · írasd a promptot · maker–reviewer · orchestrator'], ['dns-gloss', 'Glosszárium és forrásjegyzék', 'glosszarium.md · forrasjegyzek.md']];
  ABRAK['dns-retegek'] = simpleDef(A5_PARTS, 'Kattints egy rétegre vagy szerepre: mit jelent, hol készül.', function (fig, uid, narrow) {
    var cim = fig.getAttribute('data-cim') !== 'nincs', m = uid + '-ah', s, b;
    if (!narrow) {
      var W = 1000, H = 440; s = svgOpen(uid, W, H, A5_LABEL, cim ? 0 : 22);
      if (cim) s += text(500, 26, 'A DNS: egy alap, két szerep', 'abra-cim', 20);
      b = rect(230, 44, 180, 60, 'box', 12) + text(320, 70, 'BA', 'lbl', 18, 'middle', { 'font-weight': 700 }) + text(320, 92, 'üzleti elemző · ba.md', 'sub', 11) + arrow(320, 160, 320, 108, m) + text(300, 138, 'forráshellyel', 'cap', 11, 'end');
      s += part('dns-ba', 0, '', b, 'BA szerep');
      b = rect(590, 44, 180, 60, 'box', 12) + text(680, 70, 'Sales–Account', 'lbl', 16, 'middle', { 'font-weight': 700 }) + text(680, 92, 'sales.md · account.md', 'sub', 11) + arrow(680, 160, 680, 108, m) + text(700, 138, 'forráshellyel', 'cap', 11, 'start');
      s += part('dns-sa', 1, '', b, 'Sales–Account szerep');
      s += text(500, 136, 'ugyanabból a kiadásból, ugyanazzal a verzióval', 'cap', 12);
      A5_LAYERS.forEach(function (L, i) {
        var y = 160 + i * 46;
        b = rect(250, y, 500, 42, 'box', i === 0 ? 10 : 6) + text(268, y + 26, L[1], 'lbl', 14, 'start', { 'font-weight': 700 }) + text(732, y + 26, L[2], 'sub', 11, 'end');
        s += part(L[0], 2 + i, '', b, L[1]);
      });
      b = card(40, 190, 180, 120, 'README', ['verzió · gazda', 'státusz · érvényesség', 'utolsó ellenőrzés', 'kiolvasva induláskor'], 13) + arrow(222, 250, 246, 250, m);
      s += part('dns-verzio', 7, '', b, 'Verzió, gazda, státusz');
      b = card(780, 190, 180, 120, 'Forrás-visszakeresés', ['állítás [F-nn]', '→ forrásjegyzék', '→ fájl, hely', 'hiány: „Nincs megadva”'], 13) + arrow(754, 250, 778, 250, m);
      s += part('dns-forras', 8, '', b, 'Forrás-visszakeresés');
      s += text(500, 428, 'minden állítás mellett forrás és gazda · a tanulság visszakerül a DNS-be (v0.2)', 'sub it', 12);
    } else {
      var W2 = 420, H2 = 640; s = svgOpen(uid, W2, H2, A5_LABEL, cim ? 0 : 20);
      if (cim) s += text(210, 22, 'A DNS: egy alap, két szerep', 'abra-cim', 15);
      b = rect(30, 40, 160, 50, 'box', 10) + text(110, 62, 'BA', 'lbl', 15, 'middle', { 'font-weight': 700 }) + text(110, 80, 'ba.md', 'sub', 10) + arrow(110, 132, 110, 94, m);
      s += part('dns-ba', 0, '', b, 'BA szerep');
      b = rect(230, 40, 160, 50, 'box', 10) + text(310, 62, 'Sales–Account', 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(310, 80, 'sales.md · account.md', 'sub', 10) + arrow(310, 132, 310, 94, m);
      s += part('dns-sa', 1, '', b, 'Sales–Account szerep');
      s += text(210, 118, 'egy alap, két szerep', 'cap', 11);
      A5_LAYERS.forEach(function (L, i) {
        var y = 134 + i * 50;
        b = rect(30, y, 360, 46, 'box', 6) + text(44, y + 20, L[1], 'lbl', 12.5, 'start', { 'font-weight': 700 }) + text(44, y + 36, L[2], 'sub', 9.5, 'start');
        s += part(L[0], 2 + i, '', b, L[1]);
      });
      b = card(30, 400, 360, 74, 'README: verzió · gazda · státusz', ['érvényesség · utolsó ellenőrzés, induláskor kiolvasva'], 12) + arrow(210, 398, 210, 386, m);
      s += part('dns-verzio', 7, '', b, 'Verzió, gazda, státusz');
      b = card(30, 490, 360, 74, 'Forrás-visszakeresés', ['állítás [F-nn] → forrásjegyzék → fájl, hely · hiány: „Nincs megadva”'], 12);
      s += part('dns-forras', 8, '', b, 'Forrás-visszakeresés');
      s += text(210, 600, 'minden állítás mellett forrás és gazda', 'sub it', 10.5) + text(210, 618, 'a tanulság visszakerül a DNS-be (v0.2)', 'sub it', 10.5);
    }
    return s + '</svg>';
  });

  /* ---------- Á6 · portal-dryrun (02) ---------- */
  var A6_PARTS = [
    { id: 'kezi', nev: 'Kézi út (tartalék)', hol: ['02'], def: 'A portál felületét te nyitod meg és kezeled; az AI ellenőrzőlistát és összevetést készít a bemásolt táblázatból. A módszer gyakorlása, nem élő automatizálás; a kimeneten így van jelölve.' },
    { id: 'terv', nev: 'Terv és jóslat', hol: ['02'], def: 'A kigyűjtött táblából a portál státuszszabálya szerint soronként előre megmondod, mi legyen a tervezett státusz; csak utána rögzül a terv.' },
    { id: 'dryrun', nev: 'Dry run (próbafutás)', hol: ['02'], def: 'A portál módosítás nélkül mutatja, mi változna; a jóslatot és az eredményt az AI összeveti, minden eltérést megnevez.' },
    { id: 'alkalmaz', nev: 'Alkalmazás naplóval', hol: ['02'], def: 'Jóváhagyás után, csak a jelenlegi tervhez futtatott dry run után; soronként rögzíti a sikert vagy a hibát.' },
    { id: 'visszaolvas', nev: 'Visszaolvasás', hol: ['02'], def: 'Az azonosító alapján visszaolvassa az eredményt a portálról; második dry run: az ismételt futás nem kettőz. Egy hibára legfeljebb egy újrapróbálás.' },
    { id: 'osszevetes', nev: 'Összevetés és mentés', hol: ['02'], def: 'A Műveleti napló CSV-exportja a saját naplóval összevetve; az eltéréseket te indokolod és döntöd el.' },
    { id: 'ember', nev: 'Ember dönt', hol: ['02', '03'], def: 'Újrapróbálás után a döntés a tiéd; a hiányzó adatot senki nem találja ki: „Nincs megadva”.' }
  ];
  var A6_LABEL = 'Adatgyűjtés API nélküli portálról két úton: kézi út a portál felületén (tartalék), vagy böngésző-agent: terv és jóslat, dry run, alkalmazás soronkénti naplóval, visszaolvasás, összevetés az exporttal; egy hibára legfeljebb egy újrapróbálás, utána ember dönt; a hiányzó adat „Nincs megadva”.';
  var A6_STEPS = [['terv', 'Terv és jóslat', 'soronként: mi legyen a státusz'], ['dryrun', 'Dry run', 'próbafutás, nincs változtatás'], ['alkalmaz', 'Alkalmazás', 'soronkénti napló'], ['visszaolvas', 'Visszaolvasás', 'azonosító alapján · 2. dry run'], ['osszevetes', 'Összevetés', 'export CSV ↔ napló · mentés']];
  ABRAK['portal-dryrun'] = simpleDef(A6_PARTS, 'Kattints egy lépésre: mit jelent, mi a határ.', function (fig, uid, narrow) {
    var cim = fig.getAttribute('data-cim') !== 'nincs', m = uid + '-ah', m2 = uid + '-ah2', s, b;
    if (!narrow) {
      var W = 1000, H = 400; s = svgOpen(uid, W, H, A6_LABEL, cim ? 0 : 22);
      if (cim) s += text(500, 26, 'Portál API nélkül: kézi út vagy böngésző-agent', 'abra-cim', 20);
      b = rect(40, 46, 920, 96, 'box', 12) + text(60, 68, 'Kézi út (tartalék, B-terv)', 'lbl', 13, 'start', { 'font-weight': 700 });
      [['portál felülete', 60], ['kézi kigyűjtés', 290], ['bemásolt táblázat', 520], ['ellenőrzőlista', 750]].forEach(function (t, i) {
        b += rect(t[1], 84, 190, 44, 'fok', 8) + text(t[1] + 95, 111, t[0], 'lbl', 13);
        if (i < 3) b += arrow(t[1] + 194, 106, t[1] + 226, 106, m);
      });
      s += part('kezi', 0, '', b, 'Kézi út');
      s += text(60, 184, 'Böngésző-agent (ha a munkatérben elérhető)', 'cap', 13, 'start', { 'font-weight': 700 });
      A6_STEPS.forEach(function (S, i) {
        var x = 40 + i * 185;
        b = rect(x, 200, 160, 66, 'box', 10) + text(x + 80, 224, S[1], 'lbl', 14, 'middle', { 'font-weight': 700 }) + text(x + 80, 246, S[2], 'sub', 10.5);
        if (i < 4) b += arrow(x + 163, 233, x + 182, 233, m);
        s += part(S[0], 1 + i, '', b, S[1]);
      });
      s += part('kezi', 0, '', arrow(845, 144, 845, 196, m2, true), 'A kézi út is az összevetésbe torkollik');
      b = path('M680 268 V300 H470 V270', 'ln dash', m2) + text(575, 318, 'hiba: legfeljebb egy újrapróbálás', 'cap', 11.5) +
        path('M745 268 V330 H790', 'ln dash', m2) + path(diamondPath(850, 330, 58, 26), 'box') + text(850, 335, 'ember dönt', 'lbl', 12.5);
      s += part('ember', 6, '', b, 'Ember dönt');
      s += text(500, 386, 'a hiányzó adat „Nincs megadva” · az oldalszöveg adat, nem utasítás · alkalmazni csak dry run után lehet', 'sub it', 12);
    } else {
      var W2 = 420, H2 = 640; s = svgOpen(uid, W2, H2, A6_LABEL, cim ? 0 : 20);
      if (cim) s += text(210, 22, 'Portál API nélkül: két út', 'abra-cim', 15);
      b = card(30, 40, 360, 78, 'Kézi út (tartalék, B-terv)', ['portál felülete → kézi kigyűjtés →', 'bemásolt táblázat → ellenőrzőlista'], 12);
      s += part('kezi', 0, '', b, 'Kézi út');
      s += text(30, 148, 'Böngésző-agent (ha elérhető)', 'cap', 12, 'start', { 'font-weight': 700 });
      A6_STEPS.forEach(function (S, i) {
        var y = 160 + i * 74;
        b = rect(30, y, 360, 56, 'box', 8) + text(210, y + 22, S[1], 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(210, y + 42, S[2], 'sub', 10);
        if (i < 4) b += arrow(210, y + 58, 210, y + 72, m);
        s += part(S[0], 1 + i, '', b, S[1]);
      });
      b = path('M30 410 H10 V260 H26', 'ln dash', m2) + text(14, 340, 'egy újrapróbálás', 'cap', 9, 'start', { transform: 'rotate(-90 14 340)' }) +
        path(diamondPath(210, 560, 60, 24), 'box') + text(210, 565, 'ember dönt', 'lbl', 12) + arrow(210, 526, 210, 534, m);
      s += part('ember', 6, '', b, 'Ember dönt');
      s += text(210, 606, 'hiányzó adat: „Nincs megadva”', 'sub it', 10.5) + text(210, 624, 'az oldalszöveg adat, nem utasítás', 'sub it', 10.5);
    }
    return s + '</svg>';
  });

  /* ---------- Á7 · jogmatrix (03) ---------- */
  var A7_PARTS = [
    { id: 'meg-link', nev: 'Beszélgetés megosztása linkkel', hol: ['03'], def: 'Munkatéri link, a munkatér tagjainak nyílik meg. Látszik-e B-nek a megosztás utáni új üzenet? Ezt a próba dönti el.' },
    { id: 'meg-projekt', nev: 'Közös projekt', hol: ['03'], def: 'Ha a munkatérben elérhető. Jogok: Chat vagy Edit; az Edit utasítást és fájlt módosíthat.' },
    { id: 'meg-space', nev: 'Space-oldal', hol: ['03'], def: 'Ha a munkatérben elérhető. Jogok: View, Comment, Edit; a hozzáférés öröklődik az oldalakra.' },
    { id: 'app', nev: 'App-kapcsolat', hol: ['03'], def: 'Plugin- és appkapcsolat: azt látja, amit a felhasználó; a jogmátrixban külön oszlop: kell-e appengedély.' },
    { id: 'csapat', nev: 'Csapatfeladat (Agents / Team Task)', hol: ['03', '07'], def: 'Egy csapatfeladat folyamatváza és az Agents előnézete; a kimenő és visszafordíthatatlan lépésnél ember dönt.' },
    { id: 'szabaly', nev: 'Hozzáférési szabály', hol: ['03'], def: 'A jogmátrix sorai: elem, megosztás módja, kinek, olvashat, kommentelhet, szerkeszthet, appengedély, a próba eredménye. A pár mondja ki: kik olvashatják, kik szerkeszthetik, ki dönt az új hozzáférésről.' }
  ];
  var A7_LABEL = 'Megosztási jogok mátrixa: beszélgetés linkkel (olvasás a munkatér tagjainak), közös projekt (Chat vagy Edit), Space-oldal (View, Comment, Edit); mellette az app-kapcsolat, a csapatfeladat és a hozzáférési szabály: kik olvashatják, kik szerkeszthetik, ki dönt az új hozzáférésről.';
  var A7_ROWS = [['meg-link', 'Beszélgetés link', 'munkatéri link', ['✓ munkatéri tag', 'a próba dönti el', '–']], ['meg-projekt', 'Közös projekt', 'ha elérhető', ['Chat', 'a próba dönti el', 'Edit: utasítás, fájl']], ['meg-space', 'Space-oldal', 'ha elérhető', ['View', 'Comment', 'Edit (öröklődik)']]];
  ABRAK.jogmatrix = simpleDef(A7_PARTS, 'Kattints egy sorra vagy dobozra: mit jelent.', function (fig, uid, narrow) {
    var cim = fig.getAttribute('data-cim') !== 'nincs', m = uid + '-ah', s, b;
    if (!narrow) {
      var W = 1000, H = 400; s = svgOpen(uid, W, H, A7_LABEL, cim ? 0 : 22);
      if (cim) s += text(500, 26, 'Ki fér hozzá az ügy anyagaihoz?', 'abra-cim', 20);
      var cols = [['olvas', 300], ['kommentel', 430], ['szerkeszt', 560]];
      cols.forEach(function (c) { s += text(c[1], 64, c[0], 'cap', 13, 'middle', { 'font-weight': 700 }); });
      A7_ROWS.forEach(function (R, i) {
        var y = 80 + i * 76;
        b = rect(40, y, 620, 64, 'box', 10) + text(56, y + 28, R[1], 'lbl', 14, 'start', { 'font-weight': 700 }) + text(56, y + 48, R[2], 'sub', 11, 'start');
        R[3].forEach(function (c, k) { b += rect(cols[k][1] - 58, y + 14, 116, 36, 'fok', 7) + text(cols[k][1], y + 37, c, 'lbl', 11); });
        s += part(R[0], i, '', b, R[1]);
      });
      s += text(350, 324, 'minden sor a páros próba eredményével: olvasni, kommentelni, szerkeszteni próbál a társad', 'sub it', 11.5);
      b = card(700, 50, 260, 70, 'App-kapcsolat', ['azt látja, amit a felhasználó', 'appengedély kell?'], 13) + arrow(830, 122, 830, 146, m);
      s += part('app', 3, '', b, 'App-kapcsolat');
      b = card(700, 150, 260, 70, 'Csapatfeladat', ['Agents / Team Task: folyamatváz', 'kimenő lépésnél ember dönt'], 13) + arrow(830, 222, 830, 246, m);
      s += part('csapat', 4, '', b, 'Csapatfeladat');
      b = card(700, 250, 260, 96, 'Hozzáférési szabály', ['kik olvashatják · kik szerkeszthetik', 'ki dönt az új hozzáférésről', 'jogmatrix.md'], 13);
      s += part('szabaly', 5, '', b, 'Hozzáférési szabály');
      s += text(500, 386, 'az AI csak javaslatot ad a sor tartalmára; a döntés a páré', 'sub it', 12);
    } else {
      var W2 = 420, H2 = 600; s = svgOpen(uid, W2, H2, A7_LABEL, cim ? 0 : 20);
      if (cim) s += text(210, 22, 'Ki fér hozzá az anyagokhoz?', 'abra-cim', 15);
      A7_ROWS.forEach(function (R, i) {
        var y = 40 + i * 84;
        b = rect(30, y, 360, 72, 'box', 8) + text(44, y + 20, R[1] + ' · ' + R[2], 'lbl', 12.5, 'start', { 'font-weight': 700 });
        ['olvas: ', 'kommentel: ', 'szerkeszt: '].forEach(function (c, k) { b += text(44, y + 38 + k * 14, c + R[3][k], 'sub', 10, 'start'); });
        s += part(R[0], i, '', b, R[1]);
      });
      b = card(30, 300, 360, 56, 'App-kapcsolat', ['azt látja, amit a felhasználó · appengedély kell?'], 12) + arrow(210, 358, 210, 372, m);
      s += part('app', 3, '', b, 'App-kapcsolat');
      b = card(30, 376, 360, 56, 'Csapatfeladat (Agents / Team Task)', ['folyamatváz · kimenő lépésnél ember dönt'], 12) + arrow(210, 434, 210, 448, m);
      s += part('csapat', 4, '', b, 'Csapatfeladat');
      b = card(30, 452, 360, 80, 'Hozzáférési szabály (jogmatrix.md)', ['kik olvashatják · kik szerkeszthetik', 'ki dönt az új hozzáférésről'], 12);
      s += part('szabaly', 5, '', b, 'Hozzáférési szabály');
      s += text(210, 566, 'az AI csak javaslatot ad; a döntés a páré', 'sub it', 10.5);
    }
    return s + '</svg>';
  });

  /* ---------- Á8 · agent-futas (04) ---------- */
  var A8_PARTS = [
    { id: 'fA', nev: 'A fázis: KAPU I és forráscsapdák (11:25–11:45)', hol: ['04'], def: 'Cél és DNS-verzió, forrásleltár scripttel, ügyfélkutatás a cégadatlapból (Sales–Account) vagy a KAPU I kérés vázlata (BA), gyors páros ellenőrzés friss beszélgetésben, jelentés és hibajegyzék mentése.' },
    { id: 'fB', nev: 'B fázis: brief és indítás (11:45–12:30)', hol: ['04'], def: 'Munkamód és kiinduló állapot, kritériumok (K1–K7: hét számozott, mérhető elvárás), agent-brief, terv jóváhagyása, előfutás-ellenőrzés scripttel, a háttérmunka indítása 12:25-kor.' },
    { id: 'ebed', nev: 'Ebéd: az agent fut (12:30–13:15)', hol: ['04'], def: 'A háttérfutás alatt neked nincs feladatod. Az eredményről előre eldöntötted, mitől lesz jó.' },
    { id: 'fC', nev: 'C fázis: átvétel (13:15–13:25)', hol: ['04'], def: 'Állapot és az eredmény forrása, átvétel-ellenőrzés, átvételi jegyzék és státusz.' },
    { id: 'r1', nev: 'R1: független review (5. gyakorlat)', hol: ['05'], def: 'Friss beszélgetésben, szűk bemenettel egy független ellenőr vizsgálja a v1-et; a maker nem minősíti saját magát.' },
    { id: 'fD', nev: 'D fázis: javítás R1 alapján (14:15–14:35)', hol: ['04'], def: 'A javítási kör kijelölése, egy megállapítás ellenőrzése a forrásban, a javítási futás indítása („RONDO 04 javítás R1”), újramérés és v1–v2 összevetés.' },
    { id: 'sav-ba', nev: 'BA-sáv', hol: ['04', '06b'], def: 'KAPU I kérés → KAPU I jelentés és hibajegyzék → az agent FDD-egységet készít (v1) → javítás a reviewer alapján (v2). Az FDD-egység csak nem blokkolt KAPU I státusz után készül.' },
    { id: 'sav-sa', nev: 'Sales–Account sáv', hol: ['04', '06'], def: 'Ügyfélkutatás a cégadatlapból (öt valós tény, forrással és oldalszámmal) → forrás-ellenőrző lista → az agent ajánlati kalkulációt és kockázatos változásjegyzéket készít (v1) → javítás (v2). Megtérülést vagy belső költségadatot nem találunk ki.' }
  ];
  var A8_LABEL = 'Az agentfutás íve: A fázis KAPU I és forráscsapdák, B fázis brief, kritériumok, terv és indítás 12:25-kor, ebéd alatt háttérfutás, C fázis átvétel, R1 független review az 5. gyakorlatban, D fázis javítás és újramérés; alatta a BA-sáv (KAPU I jelentés, FDD-egység) és a Sales–Account sáv (ügyfélkutatás a cégadatlapból, ajánlati kalkuláció és változásjegyzék).';
  var A8_PH = [['fA', 'A fázis', '11:25–11:45', ['KAPU I kérés / forrás-', 'ellenőrzés, páros próba']], ['fB', 'B fázis', '11:45–12:30', ['kritériumok K1–K7 · brief', 'terv · előfutás · indítás 12:25']], ['ebed', 'Ebéd', '12:30–13:15', ['az agent a háttérben fut', 'neked nincs feladatod']], ['fC', 'C fázis', '13:15–13:25', ['átvétel · jegyzék', 'státusz']], ['r1', 'R1', '13:25–14:15', ['5. gyakorlat:', 'független review']], ['fD', 'D fázis', '14:15–14:35', ['javítás R1 alapján', 'újramérés v1–v2']]];
  ABRAK['agent-futas'] = simpleDef(A8_PARTS, 'Kattints egy fázisra vagy sávra: mi történik, mi a határ.', function (fig, uid, narrow) {
    var cim = fig.getAttribute('data-cim') !== 'nincs', m = uid + '-ah', s, b;
    if (!narrow) {
      var W = 1040, H = 470; s = svgOpen(uid, W, H, A8_LABEL, cim ? 0 : 22);
      if (cim) s += text(520, 26, 'Az agentfutás íve: brief → futás → átvétel → javítás', 'abra-cim', 20);
      var xs = [20, 190, 400, 560, 730, 880], ws = [160, 200, 150, 160, 140, 140];
      A8_PH.forEach(function (P, i) {
        var x = xs[i], w = ws[i];
        b = rect(x, 50, w, 92, 'box', 10) + text(x + w / 2, 72, P[1], 'lbl', 15, 'middle', { 'font-weight': 700 }) + text(x + w / 2, 90, P[2], 'sub', 11);
        P[3].forEach(function (l, k) { b += text(x + w / 2, 110 + k * 14, l, 'sub', 10.5); });
        if (i < 5) b += arrow(x + w + 2, 96, xs[i + 1] - 4, 96, m);
        s += part(P[0], i, '', b, P[1] + ' ' + P[2]);
      });
      b = rect(20, 190, 1000, 92, 'box', 12) + text(36, 214, 'BA', 'lbl', 15, 'start', { 'font-weight': 700 }) + text(36, 232, 'üzleti elemző', 'sub', 10.5, 'start');
      [['KAPU I kérés', 'vázlat a saját szavaiddal', 140], ['KAPU I jelentés', '+ hibajegyzék, státusz', 350], ['agent: FDD-egység v1', 'nem blokkolt státusz után', 560], ['javítás → v2', 'R1 alapján, újramérés', 790]].forEach(function (t, k) {
        b += rect(t[2], 206, 200, 60, 'fok', 8) + text(t[2] + 100, 230, t[0], 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(t[2] + 100, 250, t[1], 'sub', 10.5);
        if (k < 3) b += arrow(t[2] + 204, 236, [350, 560, 790][k] - 4, 236, m);
      });
      s += part('sav-ba', 6, '', b, 'BA-sáv');
      b = rect(20, 300, 1000, 92, 'box', 12) + text(36, 324, 'Sales–', 'lbl', 15, 'start', { 'font-weight': 700 }) + text(36, 342, 'Account', 'lbl', 15, 'start', { 'font-weight': 700 });
      [['ügyfélkutatás', 'cégadatlap: 5 valós tény', 140], ['forrás-ellenőrző lista', 'ajánlati források', 350], ['agent: kalkuláció v1', '+ kockázatos változásjegyzék', 560], ['javítás → v2', 'R1 alapján, újramérés', 790]].forEach(function (t, k) {
        b += rect(t[2], 316, 200, 60, 'fok', 8) + text(t[2] + 100, 340, t[0], 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(t[2] + 100, 360, t[1], 'sub', 10.5);
        if (k < 3) b += arrow(t[2] + 204, 346, [350, 560, 790][k] - 4, 346, m);
      });
      s += part('sav-sa', 7, '', b, 'Sales–Account sáv');
      s += text(520, 424, 'a brief, a K1–K7, a DNS, az R1, a determinisztikus ellenőrzés, a napló és a stop-szabály együtt teszi az eredményt jóvá és validálttá', 'sub it', 12);
      s += text(520, 448, 'valós: a cégadatlap számai · kitalált: a projekt, az igények, a személyek, az ajánlati számok; a kettőt nem keverjük', 'sub it', 12);
    } else {
      var W2 = 420, H2 = 700; s = svgOpen(uid, W2, H2, A8_LABEL, cim ? 0 : 20);
      if (cim) s += text(210, 22, 'Az agentfutás íve', 'abra-cim', 15);
      A8_PH.forEach(function (P, i) {
        var y = 36 + i * 66;
        b = rect(30, y, 360, 56, 'box', 8) + text(44, y + 20, P[1] + ' · ' + P[2], 'lbl', 12.5, 'start', { 'font-weight': 700 }) + text(44, y + 36, P[3][0], 'sub', 10, 'start') + text(44, y + 49, P[3][1], 'sub', 10, 'start');
        if (i < 5) b += arrow(210, y + 58, 210, y + 64, m);
        s += part(P[0], i, '', b, P[1] + ' ' + P[2]);
      });
      b = card(30, 440, 360, 96, 'BA-sáv', ['KAPU I kérés → KAPU I jelentés + hibajegyzék', '→ agent: FDD-egység v1 → javítás v2'], 12);
      s += part('sav-ba', 6, '', b, 'BA-sáv');
      b = card(30, 548, 360, 96, 'Sales–Account sáv', ['ügyfélkutatás (cégadatlap, 5 valós tény) →', 'forrás-ellenőrző lista → agent: kalkuláció v1 → v2'], 12);
      s += part('sav-sa', 7, '', b, 'Sales–Account sáv');
      s += text(210, 668, 'valós: a cégadatlap · kitalált: a projekt és a számok', 'sub it', 10.5) + text(210, 686, 'ami nincs a forrásban: „Nincs megadva”', 'sub it', 10.5);
    }
    return s + '</svg>';
  });

  /* ---------- Á9 · sites-ut (06) ---------- */
  var A9_PARTS = [
    { id: 'adat', nev: 'Adat', hol: ['06'], def: 'Az ellenőrzött RONDO-eredmények: igények, ajánlati tételek és kockázatok forráshellyel és ellenőrzési eredménnyel; három tábla: ugy, tetel, review.' },
    { id: 'sites-app', nev: 'App', hol: ['06'], def: 'Mini-alkalmazás leírásból: a Sites (ha a munkatérben elérhető), tartós adatbázissal (D1) és munkatéri hitelesítéssel; különben a helyi prototípus, azonos módszerrel.' },
    { id: 'jog', nev: 'Jogosultság', hol: ['06', '03'], def: 'Szerepek: owner, editor, visitor. A tételek olvashatók mindenkinek, írni csak a saját tételt lehet. Két fiókkal próbálva: visszajön-e az adat, módosítható-e a más tulajdonában lévő tétel.' },
    { id: 'megoszt', nev: 'Megosztás és export', hol: ['06'], def: 'A mentett verzió és a deploy külön lépés; tesztjegyzék, rekordok, export. Nyilvános publikálás nincs.' },
    { id: 'szabaly', nev: 'Tartalmi szabály', hol: ['06'], def: 'Csak ellenőrzött vagy nyitottnak jelölt tartalom kerül be; csak fiktív adat; a beépített AI-hívást nem ígérjük.' }
  ];
  var A9_LABEL = 'Az ügykövető útja: ellenőrzött adat (igények, ajánlati tételek, kockázatok forráshellyel) → mini-alkalmazás (Sites vagy helyi prototípus) → jogosultság (owner, editor, visitor; két fiókkal próbálva) → megosztás és export; a tartalmi szabály: csak ellenőrzött vagy nyitottnak jelölt tartalom, csak fiktív adat.';
  var A9_BOX = [['adat', 'Adat', ['ellenőrzött tételek', 'forráshellyel', 'ugy · tetel · review']], ['sites-app', 'App', ['Sites mini-alkalmazás', 'vagy helyi prototípus', 'D1 adatbázis · hitelesítés']], ['jog', 'Jogosultság', ['owner · editor · visitor', 'két fiókkal próbálva:', 'visszajön? a másé nem írható']], ['megoszt', 'Megosztás', ['mentett verzió · deploy', 'tesztjegyzek.md · rekordok.md', 'export']]];
  ABRAK['sites-ut'] = simpleDef(A9_PARTS, 'Kattints egy állomásra: mit jelent, mit próbálunk ki.', function (fig, uid, narrow) {
    var cim = fig.getAttribute('data-cim') !== 'nincs', m = uid + '-ah', s, b;
    if (!narrow) {
      var W = 1000, H = 340; s = svgOpen(uid, W, H, A9_LABEL, cim ? 0 : 22);
      if (cim) s += text(500, 26, 'Ügykövető: adat → app → jogosultság → megosztás', 'abra-cim', 20);
      A9_BOX.forEach(function (B, i) {
        var x = 40 + i * 240;
        b = card(x, 50, 200, 110, B[1], B[2], 15, 12);
        if (i < 3) b += arrow(x + 204, 105, x + 236, 105, m);
        s += part(B[0], i, '', b, B[1]);
      });
      b = rect(40, 190, 920, 54, 'box', 10) + text(500, 213, 'Tartalmi szabály', 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(500, 232, 'csak ellenőrzött vagy nyitottnak jelölt tartalom · csak fiktív adat · nyilvános publikálás nincs', 'sub', 12);
      s += part('szabaly', 4, '', b, 'Tartalmi szabály');
      s += text(500, 290, 'a tételek olvashatók mindenkinek, írni csak a saját tételt lehet · a próba dönt, nem a hit', 'sub it', 12);
      s += text(500, 312, 'a Sites elérése munkatérfüggő: ha nincs, a helyi prototípus ugyanazzal a módszerrel', 'sub it', 12);
    } else {
      var W2 = 420, H2 = 560; s = svgOpen(uid, W2, H2, A9_LABEL, cim ? 0 : 20);
      if (cim) s += text(210, 22, 'Ügykövető: adat → app → jog → megosztás', 'abra-cim', 14);
      A9_BOX.forEach(function (B, i) {
        var y = 36 + i * 100;
        b = card(30, y, 360, 84, B[1], B[2], 13, 8);
        if (i < 3) b += arrow(210, y + 86, 210, y + 98, m);
        s += part(B[0], i, '', b, B[1]);
      });
      b = card(30, 440, 360, 66, 'Tartalmi szabály', ['csak ellenőrzött vagy nyitottnak jelölt tartalom', 'csak fiktív adat · nyilvános publikálás nincs'], 12, 8);
      s += part('szabaly', 4, '', b, 'Tartalmi szabály');
      s += text(210, 532, 'írni csak a saját tételt lehet · a próba dönt', 'sub it', 10.5);
    }
    return s + '</svg>';
  });

  /* ---------- Á10 · ba-utotag (06b) ---------- */
  var A10_PARTS = [
    { id: 'doc', nev: 'A · Önállóan szállítható dokumentum', hol: ['06b'], def: 'Számláló méri a feloldatlan keresztreferenciákat; a szükséges szöveg beépül, a forrás lábjegyzetbe kerül; a számláló újra mér. Recept: 06b-onallo-dokumentum-SKILL.md.' },
    { id: 'drotvaz', nev: 'B · Képernyőterv-drótváz', hol: ['06b'], def: 'Bemenet az FDD egy fejezete (vagy a melléklet fiktív mintafejezete); kimenet általános, offline HTML-drótváz; egy mezőt közösen javítunk. Közös kipróbálás, nem önálló tervezés.' },
    { id: 'doksi', nev: 'C · Dokumentáció kódból', hol: ['06b'], def: 'Kis kódmintából felhasználói szintű leírás, és egy elavult leírás frissítése; egy kódszabályt közösen keresünk vissza. Nem fejlesztési munka.' },
    { id: 'recept', nev: 'Recept (Skill) és visszakereshetőség', hol: ['06b', '05'], def: 'Mindhárom feladat receptből megy, számlálóval vagy visszakereséssel ellenőrizve; a jelentés és a forrás között megmarad a kapcsolat.' }
  ];
  var A10_LABEL = 'A BA-utótag három rövid feladata: önállóan szállítható dokumentum (keresztreferenciák feloldása, számlálóval mérve), képernyőterv-drótváz egy FDD-fejezethez (offline HTML), dokumentáció kódból (elavult leírás frissítése); mindhárom receptből (Skill), a jelentés és a forrás között visszakereshető kapcsolattal.';
  var A10_CARDS = [['doc', 'A · Önálló dokumentum', ['számláló: feloldatlan', 'keresztreferenciák', 'szöveg beépül, forrás', 'lábjegyzetbe · újra mér']], ['drotvaz', 'B · Képernyőterv', ['bemenet: FDD-fejezet', 'kimenet: offline HTML-', 'drótváz · egy mező', 'közös javítása']], ['doksi', 'C · Dokumentáció kódból', ['kódminta → felhasználói', 'leírás · elavult leírás', 'frissítése · kódszabály', 'visszakeresése']]];
  ABRAK['ba-utotag'] = simpleDef(A10_PARTS, 'Kattints egy feladatra: mit mér, mit tesz, mit nem tehet.', function (fig, uid, narrow) {
    var cim = fig.getAttribute('data-cim') !== 'nincs', m = uid + '-ah', s, b;
    if (!narrow) {
      var W = 1000, H = 360; s = svgOpen(uid, W, H, A10_LABEL, cim ? 0 : 22);
      if (cim) s += text(500, 26, 'BA-utótag: három recept, egy módszer', 'abra-cim', 20);
      A10_CARDS.forEach(function (C, i) {
        var x = 40 + i * 320;
        b = card(x, 70, 280, 130, C[1], C[2], 15, 12) + rect(x + 90, 52, 100, 26, 'fok', 13) + text(x + 140, 69, 'recept (Skill)', 'lbl', 11);
        if (i < 2) b += arrow(x + 284, 135, x + 316, 135, m, true);
        s += part(C[0], i, '', b, C[1]);
      });
      b = rect(40, 230, 920, 54, 'box', 10) + text(500, 253, 'Recept (Skill) → ellenőrzés számlálóval vagy visszakereséssel → jelentés ↔ forrás', 'lbl', 13, 'middle', { 'font-weight': 700 }) + text(500, 272, 'a jelentés és a forrás között megmarad a visszakereshető kapcsolat', 'sub', 12);
      s += part('recept', 3, '', b, 'Recept és visszakereshetőség');
      s += text(500, 330, 'a drótváz és a dokumentáció közös kipróbálás, nem önálló tervezési vagy fejlesztési munka', 'sub it', 12);
    } else {
      var W2 = 420, H2 = 560; s = svgOpen(uid, W2, H2, A10_LABEL, cim ? 0 : 20);
      if (cim) s += text(210, 22, 'BA-utótag: három recept', 'abra-cim', 15);
      A10_CARDS.forEach(function (C, i) {
        var y = 36 + i * 128;
        b = card(30, y, 360, 112, C[1], C[2], 13, 8);
        if (i < 2) b += arrow(210, y + 114, 210, y + 126, m, true);
        s += part(C[0], i, '', b, C[1]);
      });
      b = card(30, 428, 360, 66, 'Recept (Skill) → ellenőrzés → jelentés ↔ forrás', ['számlálóval vagy visszakereséssel ellenőrizve'], 12, 8);
      s += part('recept', 3, '', b, 'Recept és visszakereshetőség');
      s += text(210, 524, 'közös kipróbálás, nem önálló tervezés vagy fejlesztés', 'sub it', 10.5);
    }
    return s + '</svg>';
  });

  ABRAK.a1 = ABRAK.vezerelv; ABRAK.a2 = ABRAK.lepcso; ABRAK.a4 = ABRAK.hurok;
  ABRAK.a5 = ABRAK['dns-retegek']; ABRAK.a6 = ABRAK['portal-dryrun']; ABRAK.a7 = ABRAK.jogmatrix; ABRAK.a8 = ABRAK['agent-futas']; ABRAK.a9 = ABRAK['sites-ut']; ABRAK.a10 = ABRAK['ba-utotag'];

  /* ---------- Közös renderelés ---------- */
  var ANIM_URL = (function () { try { return new URLSearchParams(location.search).get('anim'); } catch (e) { return null; } })(); // ?anim=nincs: minden ábra azonnal végállapotban (vetítés, képernyőkép, nyomtatás)
  function animOk(fig) { return !REDUCED.matches && ANIM_URL !== 'nincs' && fig.getAttribute('data-anim') !== 'nincs'; }

  function applyState(fig) {
    var A = fig._abra; if (!A) return;
    var stage = fig.getAttribute('data-stage') || fig.getAttribute('data-allapot') || A.def.defaultStage;
    if (A.def.norm) stage = A.def.norm(stage);
    var st = A.def.state(stage);
    fig.setAttribute('data-stage-aktiv', st.id);
    fig.querySelectorAll('.abra-part').forEach(function (g) {
      var id = g.getAttribute('data-part'), c = st.current[id], b = st.built[id];
      if (st.all) { g.classList.remove('is-built', 'is-current', 'is-todo'); return; }
      g.classList.toggle('is-current', !!c);
      g.classList.toggle('is-built', !c && !!b);
      g.classList.toggle('is-todo', !c && !b);
    });
    var most = fig.querySelector('.abra-most');
    if (most) { most.textContent = st.most || ''; most.hidden = !st.most; }
    var svg = fig.querySelector('svg.abra-svg');
    if (svg && st.most) svg.setAttribute('aria-label', svg.getAttribute('aria-label').replace(/ Állapot: .*$/, '') + ' Állapot: ' + st.most);
    // pulzálás újraindítása állapotváltásnál
    if (animOk(fig) && fig.classList.contains('is-live')) {
      fig.classList.remove('pulse'); void fig.offsetWidth; fig.classList.add('pulse');
    }
    fig.dispatchEvent(new CustomEvent('abra:state', { detail: { stage: st.id } }));
  }

  function openInfo(fig, id) {
    var A = fig._abra, info = fig.querySelector('.abra-info'), p = null;
    A.def.parts.forEach(function (x) { if (x.id === id) p = x; });
    var open = fig.getAttribute('data-open') === id;
    fig.querySelectorAll('.abra-part, .abra-chip').forEach(function (el) {
      var on = !open && el.getAttribute('data-part') === id;
      el.classList.toggle('is-open', on);
      if (el.classList.contains('abra-chip')) el.setAttribute('aria-expanded', on ? 'true' : 'false');
    });
    if (open || !p) { fig.removeAttribute('data-open'); info.hidden = true; info.innerHTML = ''; return; }
    fig.setAttribute('data-open', id);
    var h = '<strong>' + esc(p.nev) + '</strong> ' + esc(p.def || '');
    if (p.lanc) h += '<div class="abra-lanc" aria-label="A szerep mini-folyamata">' + LANC.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('<i>→</i>') + '</div>';
    if (p.hol && p.hol.length) h += '<div class="hol">Hol készül: ' + esc(hol(p.hol)) + (p.megj ? ' · ' + esc(p.megj) : '') + '</div>';
    info.innerHTML = h; info.hidden = false;
    fig.dispatchEvent(new CustomEvent('abra:part', { detail: { id: id } }));
  }

  function render(fig) {
    var key = (fig.getAttribute('data-abra') || '').toLowerCase(), def = ABRAK[key];
    if (!def) { fig.classList.add('abra-ismeretlen'); return; }
    var force = fig.getAttribute('data-elrendezes'), narrow = force === 'keskeny' ? true : force === 'szeles' ? false : NARROW.matches, uid = 'abra' + (++uidCounter);
    var cap = fig.querySelector('figcaption');
    fig.querySelectorAll('.abra-svg, .abra-chips, .abra-info, .abra-most').forEach(function (el) { el.parentNode.removeChild(el); });
    var wrap = document.createElement('div'); wrap.className = 'abra-render';
    wrap.innerHTML = def.svg(fig, uid, narrow) +
      '<p class="abra-most" hidden></p>' +
      '<div class="abra-chips" role="group" aria-label="Részletek kattintásra"><span class="abra-chips-label">' + esc(def.hint || 'Részletek kattintásra:') + '</span>' + def.parts.filter(function (p) { return def.chipAll || p.chip; }).map(function (p) {
        return '<button type="button" class="abra-chip" data-part="' + esc(p.id) + '" aria-expanded="false">' + esc(p.rovid || p.nev) + '</button>';
      }).join('') + '</div>' +
      '<div class="abra-info" hidden></div>';
    var old = fig.querySelector('.abra-render'); if (old) old.parentNode.removeChild(old);
    if (cap) fig.insertBefore(wrap, cap); else fig.appendChild(wrap);
    fig._abra = { def: def, key: key, narrow: narrow };
    fig.classList.toggle('anim', animOk(fig));
    fig.classList.remove('is-live', 'pulse');
    fig.removeAttribute('data-open');
    if (!fig._bound) {
      fig._bound = true;
      fig.addEventListener('click', function (ev) {
        var t = ev.target.closest ? ev.target.closest('[data-part]') : null;
        if (t && fig.contains(t)) { openInfo(fig, t.getAttribute('data-part')); }
      });
      if (window.MutationObserver) {
        new MutationObserver(function () { applyState(fig); }).observe(fig, { attributes: true, attributeFilter: ['data-stage', 'data-allapot'] });
      }
    }
    applyState(fig);
    if (def.after) def.after(fig);
    // lépésenkénti kirajzolódás, amikor látható lesz (dián is: a rejtett dia nem metszi a nézetet)
    function live() { fig.classList.add('is-live'); if (animOk(fig)) { fig.classList.add('pulse'); } }
    if (!animOk(fig)) { live(); }
    else if (window.IntersectionObserver) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { live(); io.disconnect(); } }); }, { threshold: 0.15 });
      io.observe(fig);
      // tartalék: görgetéskor mért helyzet, és legkésőbb 6 mp után mindenképp kirajzolódik (pl. keretbe ágyazva, vetítéskor)
      var onScroll = function () {
        var r = fig.getBoundingClientRect();
        if (r.bottom > 0 && r.top < (window.innerHeight || 100000)) { live(); io.disconnect(); window.removeEventListener('scroll', onScroll); }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      setTimeout(function () { if (!fig.classList.contains('is-live')) onScroll(); }, 400);
      setTimeout(function () { if (!fig.classList.contains('is-live')) { live(); io.disconnect(); } }, 6000);
    } else live();
  }

  function renderAll() {
    document.querySelectorAll('figure.abra[data-abra]').forEach(render);
  }
  function setStage(fig, stage) { fig.setAttribute('data-stage', stage); applyState(fig); }
  function stages(key) { var d = ABRAK[(key || '').toLowerCase()]; return d ? d.stages.map(function (s) { return s.id; }) : []; }

  var relayout = function () { document.querySelectorAll('figure.abra[data-abra]').forEach(function (f) { if (f._abra && !f.getAttribute('data-elrendezes') && f._abra.narrow !== NARROW.matches) render(f); }); };
  if (NARROW.addEventListener) NARROW.addEventListener('change', relayout); else if (NARROW.addListener) NARROW.addListener(relayout);
  if (REDUCED.addEventListener) REDUCED.addEventListener('change', function () { document.querySelectorAll('figure.abra[data-abra]').forEach(render); });

  window.WenovaAbrak = { render: render, renderAll: renderAll, setStage: setStage, stages: stages, ABRAK: ABRAK };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderAll); else renderAll();
})();

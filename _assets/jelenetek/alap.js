/* Wenova workshop – közös mozgó ábrák (jelenetek), amelyeket több gyakorlat is használ. Betöltés: a wenova-motion.js UTÁN.
   FIKTÍV OKTATÁSI MINTA: a példák szemléltetők; a tokenhatárok, a token-számok és a százalékok nem egy valódi modell mérései. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* 1. A prompt útja a modellben: tokenizálás → tokenenkénti feldolgozás → a kimenet előállítása */
  M.jelenet('prompt-ut', {
    tipus: 'tokenek',
    cim: 'Mi történik a prompttal? Tokenekre bomlik, és a válasz tokenenként készül',
    prompt: ['Fog', 'lald', ' össze', ' a', ' meg', 'besz', 'élést'],
    kimenet: [
      { jeloltek: [['A', 58], ['Ez', 24], ['Tegnap', 9]] },
      { jeloltek: [[' megbeszélés', 71], [' csapat', 14], [' projekt', 8]] },
      { jeloltek: [[' három', 46], [' két', 31], [' fontos', 12]] },
      { jeloltek: [[' döntést', 64], [' témát', 22], [' feladatot', 9]] },
      { jeloltek: [[' hozott.', 77], [' rögzített.', 15], [' érintett.', 5]] }
    ]
  });

  /* 2. Ki mit csinál: ember – orchestrator – maker – reviewer, a „javítsd, amíg jó” hurokkal */
  M.jelenet('szerepek-hurok', {
    tipus: 'aramlas',
    cim: 'Ki mit csinál? Ember, orchestrator, maker, reviewer és a javító hurok',
    meret: [1000, 600],
    szereplok: [
      { id: 'ember', nev: 'Te', alcim: 'cél, mérce,|döntés', ikon: 'ember', x: 118, y: 300, szin: 'jegyezd' },
      { id: 'orch', nev: 'Orchestrator', alcim: 'bont, indít, kaput|tart, naplóz', ikon: 'karmester', x: 455, y: 300, szin: 'elakadas', w: 240 },
      { id: 'maker', nev: 'Maker', alcim: 'elkészíti|és javítja', ikon: 'keszito', x: 830, y: 130, szin: 'accent' },
      { id: 'reviewer', nev: 'Reviewer', alcim: 'független,|nem javít', ikon: 'ellenor', x: 830, y: 470, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'ember', ig: 'orch', csomag: 'utasítás', szin: 'jegyezd', szoveg: 'Te kiadod a feladatot az orchestratornak. A cél és a mérce a tiéd.' },
      { aktiv: 'orch', buborek: 'Mi a kész állapot?', szoveg: 'Az orchestrator értelmezi a feladatot. Ami hiányzik, azt nem találja ki. A mai gyakorlatokban ezt a szerepet te töltöd be.' },
      { tol: 'orch', ig: 'ember', csomag: 'visszakérdez', szaggatott: true, szin: 'elakadas', szoveg: 'Visszakérdez: mi a kimenet, mi a korlát, mivel ellenőrizzük?' },
      { tol: 'ember', ig: 'orch', csomag: 'kimenet + korlát + ellenőrzés', szin: 'jegyezd', szoveg: 'Te válaszolsz. Ettől lesz a cél ellenőrizhető.' },
      { tol: 'orch', ig: 'maker', csomag: 'brief', szin: 'elakadas', szamlalo: 'Kör 1 / 2', szoveg: 'Az orchestrator briefet ír, és elindítja a makert. Indul az 1. kör.' },
      { aktiv: 'maker', buborek: 'dolgozom…', szoveg: 'A maker önállóan dolgozik, és naplóz. Az orchestrator felügyel, de nem készít helyette.' },
      { tol: 'maker', ig: 'orch', csomag: 'v1 + napló', szin: 'accent', jelzo: { szereplo: 'maker', szoveg: 'v1' }, szoveg: 'Visszajön az első változat (v1) a naplóval.' },
      { tol: 'orch', ig: 'reviewer', csomag: 'review-csomag', szin: 'elakadas', szoveg: 'Az orchestrator továbbadja a reviewernek: csak a kimenet, a kritériumok és a források mennek át.' },
      { aktiv: 'reviewer', buborek: 'PASS vagy FAIL?', szoveg: 'A reviewer friss szemmel, kritériumonként ellenőriz. Nem látja a maker beszélgetését, és nem javít.' },
      { tol: 'reviewer', ig: 'orch', csomag: 'R1: 2 hiba', szaggatott: true, szin: 'figyelj', jelzo: { szereplo: 'reviewer', szoveg: 'R1' }, szoveg: 'Megjön az R1 jelentés: két hibát talált, bizonyítékkal és javítási javaslattal.' },
      { tol: 'orch', ig: 'maker', csomag: 'R1', szin: 'figyelj', iv: -0.2, szoveg: 'Az orchestrator visszaadja az R1-et a makernek.' },
      { aktiv: 'maker', buborek: 'ami jogos, javítom', szoveg: 'A maker megvizsgálja a megállapításokat, és ami jogos, azt javítja. Új verzióba, a régit nem írja felül.' },
      { tol: 'maker', ig: 'orch', csomag: 'v2', szin: 'accent', jelzo: { szereplo: 'maker', szoveg: 'v2' }, szamlalo: 'Kör 2 / 2', szoveg: 'Kész a v2. Ez már a 2. kör: a hurok nem végtelen, van körhatár.' },
      { tol: 'orch', ig: 'reviewer', csomag: 'v2 + R1', szin: 'elakadas', iv: -0.2, szoveg: 'A reviewer a javított tételeket és az érintett részeket újra ellenőrzi.' },
      { tol: 'reviewer', ig: 'orch', csomag: 'R2: PASS', szaggatott: true, szin: 'kesz', jelzo: { szereplo: 'reviewer', szoveg: 'R2' }, szoveg: 'R2: minden kritérium teljesül, nincs nyitott súlyos hiba.' },
      { tol: 'orch', ig: 'ember', csomag: 'kész + napló', szin: 'kesz', iv: -0.2, szamlalo: 'Stop', ido: 4200, szoveg: 'Stop: minden kritérium teljesült (vagy elfogyott volna a kör). Az eredmény hozzád kerül: a „kész” nem küldési engedély, a döntés a tiéd.' }
    ]
  });

  /* 3. Miből áll a cég DNS-e (közös, verziózott vállalati tudás), és mitől lesz stabil az eredmény */
  M.jelenet('dns-epites', {
    tipus: 'epites',
    cim: 'Miből épül a cég DNS-e, és mitől lesz stabil az eredmény?',
    alap: 'Közös, verziózott vállalati tudás (DNS)',
    mero: 'Stabil, ismételhető eredmény',
    lepesek: [
      { blokk: { nev: 'Kik vagyunk', alcim: 'ceg.md: szolgáltatások, vállalati határok', szin: 'accent' }, ad: 'Nem kell minden beszélgetésben újra elmesélni a céget.', szoveg: 'Az alap: kik vagyunk, mit csinálunk, és mit nem. Ezt az AI minden feladatnál ugyanonnan olvassa.' },
      { blokk: { nev: 'Termék és korlát', alcim: 'termek.md: modul, támogatott folyamat, korlát', szin: 'tipp' }, ad: 'Az AI nem ígér olyat, amit a termék nem tud.', szoveg: 'A termék leírása a korlátokkal együtt: mit támogat, és hol a határ.' },
      { blokk: { nev: 'Érték és ügyfél', alcim: 'ertek-es-ugyfel.md: igazolt állítás és feltevés külön', szin: 'g2' }, ad: 'A feltevés nem keveredik a ténnyel.', szoveg: 'Az ügyféligény és a nyújtott érték. Külön áll, ami igazolt állítás, és ami csak feltevés.' },
      { blokk: { nev: 'Szerepszabályok', alcim: 'szabalyok/: BA, sales, account, kapuk', szin: 'g4' }, ad: 'Mindenki ugyanazt a kaput és jóváhagyási rendet követi.', szoveg: 'Szerepenként a szabályok: a BA kapui, az árlista és a vállalás jóváhagyása, az eszkaláció.' },
      { blokk: { nev: 'Működési minta', alcim: 'prompt-szerkezet, maker–reviewer, stop-szabályok', szin: 'elakadas' }, ad: 'Ugyanúgy kérünk, ellenőrzünk és állunk meg.', szoveg: 'A közös működési minta: a prompt hét eleme, mikor kell maker–reviewer, és mikor állunk meg.' },
      { blokk: { nev: 'Skillek', alcim: 'skills/: a DNS alkalmazása, független ellenőrzés', szin: 'g5' }, ad: 'A jó gyakorlat újrahasználható, nem fejben él.', szoveg: 'Az ismétlődő munkamenetek skillként rögzítve: így alkalmazd a DNS-t, így ellenőrizz függetlenül.' },
      { blokk: { nev: 'Verzió, gazda, változásnapló', alcim: 'README.md és forrásjegyzék', szin: 'kesz' }, ad: 'Tudni lehet, mi érvényes, ki felel érte, és mi változott.', ido: 4400, szoveg: 'A tető: verzió, gazda, érvényesség, változásnapló. Ettől ellenőrizhető, hogy mihez mérünk; a tanulság ide kerül vissza.' }
    ]
  });
})();

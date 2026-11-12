/* Wenova workshop – a 4. gyakorlat (RONDO agent) mozgó ábrái. Betöltés: a wenova-motion.js UTÁN.
   Forrás: Notebookok/04-rondo-agent-notebook.html, Feladatok/04-rondo-agent.md, AGENTS.md („Maker mód”).
   KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* 1. Az agentfutás íve a napban: A fázis → B fázis → indítás 12:25 → ebéd → C átvétel → D javítás az R1 alapján */
  M.jelenet('agent-iv', {
    tipus: 'aramlas',
    cim: 'Az agentfutás íve a napban: előkészítés, ebéd alatti futás, átvétel, javítás',
    meret: [1000, 640],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'cél, mérce,|döntés', ikon: 'ember', x: 120, y: 330, szin: 'jegyezd' },
      { id: 'forras', nev: 'Források', alcim: 'a RONDO-eset|forrásmappája', ikon: 'mappa', x: 480, y: 120, szin: 'tipp' },
      { id: 'mappa', nev: '04-Agent', alcim: 'brief, kritériumok,|terv, napló, v1, v2', ikon: 'naplo', x: 480, y: 540, szin: 'elakadas', w: 220 },
      { id: 'maker', nev: 'Maker', alcim: 'önállóan|dolgozik', ikon: 'keszito', x: 870, y: 190, szin: 'accent' },
      { id: 'reviewer', nev: 'Reviewer', alcim: 'független,|nem javít', ikon: 'ellenor', x: 870, y: 500, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'forras', ig: 'te', csomag: 'leltár', szin: 'tipp', szamlalo: 'A fázis · 11:25', szoveg: 'A fázis: script leltározza a forrásmappát. A gép csak a szerkezetet méri; hogy mit jelent a tartalom, azt te ítéled meg.' },
      { tol: 'te', ig: 'reviewer', csomag: 'páros ellenőrzés', szin: 'jegyezd', iv: 0, szoveg: 'Friss beszélgetésben egy gyors páros ellenőr is ránéz a jelentésedre. Nem javít; a megállapításairól te döntesz.' },
      { tol: 'te', ig: 'mappa', csomag: 'kapu-I/', szin: 'jegyezd', szoveg: 'Az A fázis eredménye a kapu-I mappába kerül. Ez lesz a B fázis mérőpontja: erre épül a brief.' },
      { tol: 'te', ig: 'mappa', csomag: 'kritériumok + brief', szin: 'jegyezd', szamlalo: 'B fázis · 11:45', szoveg: 'B fázis: megírod a K1–K7 kritériumokat és a briefet úgy, hogy az agent rád várás nélkül tudjon dolgozni.' },
      { aktiv: 'te', buborek: 'jóváhagyom a tervet', szoveg: 'Jóváhagyod a legfeljebb 8 lépéses tervet. Ez a te kontrollpontod: az agent ezen a határon belül dolgozik.' },
      { tol: 'te', ig: 'maker', csomag: 'RONDO 04 maker', szin: 'jegyezd', iv: 0, szamlalo: '12:25 · indítás', szoveg: '12:25: friss beszélgetésben elindítod a makert. Védett lépés: akkor is indítunk, ha a brief nem teljes; a hiány nyitott tétel.' },
      { tol: 'mappa', ig: 'maker', csomag: 'brief + K + terv', szin: 'elakadas', szoveg: 'A maker csak a briefet, a kritériumokat, a tervet és a briefben megnevezett fájlokat olvassa.' },
      { aktiv: 'maker', buborek: 'dolgozom…', szamlalo: 'Ebéd · 12:30–13:15', ido: 3600, szoveg: 'Ebéd: az agent a háttérben fut, neked nincs feladatod. Hiányzó döntésnél megáll, nem talál ki semmit.' },
      { tol: 'maker', ig: 'mappa', csomag: 'v1 + napló', szin: 'accent', iv: -0.2, jelzo: { szereplo: 'maker', szoveg: 'v1' }, szoveg: 'Elkészül a v1 és a napló. A „kész” üzenet még nem bizonyíték.' },
      { tol: 'mappa', ig: 'te', csomag: 'átvételi mérés', szaggatott: true, szin: 'elakadas', iv: -0.2, szamlalo: 'C fázis · 13:15', szoveg: 'C fázis: átvétel. A kritériumok mérései a maker futásától függetlenül futnak a v1-en; itt nem javítunk, csak mérünk.' },
      { tol: 'mappa', ig: 'reviewer', csomag: 'review-csomag', szin: 'elakadas', szamlalo: '5. gyakorlat · R1', szoveg: 'Az 5. gyakorlatban egy független reviewer megvizsgálja a v1-et, és megírja az R1 jelentést.' },
      { tol: 'reviewer', ig: 'te', csomag: 'R1', szaggatott: true, szin: 'figyelj', iv: 0.14, jelzo: { szereplo: 'reviewer', szoveg: 'R1' }, szamlalo: 'D fázis · 14:15', szoveg: 'D fázis: átnézed az R1 megállapításait, egyet visszakeresel a forrásban, és kijelölöd, mit javítson az agent.' },
      { tol: 'te', ig: 'maker', csomag: 'RONDO 04 javítás R1', szin: 'jegyezd', iv: -0.14, szoveg: 'Új beszélgetésben indítod a javítást. A maker az R1-et is beolvassa, és csak a kijelölt hibákat javítja.' },
      { tol: 'mappa', ig: 'te', csomag: 'v2 + összevetés', szin: 'kesz', iv: -0.2, jelzo: { szereplo: 'maker', szoveg: 'v2' }, szamlalo: 'Döntés', ido: 4200, szoveg: 'A javítás új verzióba (v2) kerül. Az újramérés megmutatja, mely K javult vagy romlott; te döntesz, mehet-e az R2 reviewerhez.' }
    ]
  });

  /* 2. Mit olvas és mit ír a maker: belső körök, napló, stop-feltételek (AGENTS.md, „Maker mód”) */
  M.jelenet('maker-kor', {
    tipus: 'aramlas',
    cim: 'Mit olvas és mit ír a maker? Belső körök, napló, stop-feltételek',
    pelda: "Heti összefoglaló egy tízsoros (kitalált) egyeztetési jegyzetből: ténylegesen lefuttatott példa, szó szerinti részletekkel",
    teljes: 'pelda-hurok.html',
    meret: [1000, 600],
    szereplok: [
      { id: 'be', nev: 'Bemenet', alcim: 'brief, kritériumok,|terv, források', ikon: 'dokumentum', x: 120, y: 300, szin: 'tipp', w: 200 },
      { id: 'maker', nev: 'Maker', alcim: 'készít, mér,|javít', ikon: 'keszito', x: 490, y: 150, szin: 'accent' },
      { id: 'meres', nev: 'Mérés', alcim: 'a kriteriumok.md|szerint', ikon: 'tablazat', x: 490, y: 470, szin: 'kesz' },
      { id: 'ki', nev: '04-Agent', alcim: 'v1/, ellenorzes/,|naplo.md', ikon: 'mappa', x: 870, y: 150, szin: 'elakadas' },
      { id: 'te', nev: 'Te', alcim: 'jóváhagyás,|döntés', ikon: 'ember', x: 870, y: 470, szin: 'jegyezd' }
    ],
    lepesek: [
      { tol: 'be', ig: 'maker', csomag: 'brief + K + terv', szin: 'tipp', szoveg: 'A maker beolvassa a briefet, a kriteriumok.md és a terv.md fájlt, meg a briefben felsorolt forrásokat. Mást nem.', pelda: {"ki": "Te írod a makernek", "szoveg": "Maker vagy: te készíted el a munkát. Olvasd el a brief.md és a kriteriumok.md fájlt, és készítsd el a briefben kért összefoglalót a megadott forrásból, a megadott helyre.", "h": "k5"} },
      { tol: 'maker', ig: 'te', csomag: 'terv: max. 8 lépés', szaggatott: true, szin: 'accent', iv: 0.1, szoveg: 'Legfeljebb 8 lépéses tervet mutat, és te jóváhagyod. Utána önállóan dolgozik.', pelda: {"ki": "A példában", "szoveg": "Ennél a kis feladatnál nem kértünk tervet: a brief egyetlen kimenetet írt elő.\nA 4. gyakorlatban a maker előbb legfeljebb 8 lépéses tervet mutat, és te hagyod jóvá.", "h": "k5"} },
      { aktiv: 'maker', buborek: 'készítem…', szamlalo: 'Belső kör 1 / 2', szoveg: 'Első belső kör: elkészíti a brief kötelező kimeneteit.', pelda: {"ki": "A brief két szabálya", "szoveg": "- Javaslatot vagy felvetést ne fogalmazz át döntéssé; a még el nem döntött ügy a Nyitott kérdések részbe való.\n- Ahol az adat hiányzik, a Nincs megadva szöveget használd.", "h": "k4"} },
      { tol: 'maker', ig: 'ki', csomag: 'v1/', szin: 'accent', jelzo: { szereplo: 'ki', szoveg: 'v1' }, szoveg: 'A kimenet a v1/ mappába kerül. Meglévő verziót a maker nem ír felül.', pelda: {"ki": "A v1 egy sora", "szoveg": "- Lerövidítsük-e a jelszó-emlékeztető e-mail szövegét? Kántor Vince javaslatáról még nem született döntés. (Forrás: 3. pont)", "h": "k5"} },
      { tol: 'maker', ig: 'meres', csomag: 'mérés K szerint', szin: 'accent', szoveg: 'Mér a kriteriumok.md szerint: melyik K teljesül, és melyik nem.', pelda: {"ki": "A maker saját mérése (naplo.md)", "szoveg": "K1: megfelel; K2: 2/2 döntés; K3: megfelel; K4: megfelel; K5: 8/8 tartalmi sor forrásolt", "h": "k5"} },
      { tol: 'meres', ig: 'maker', csomag: 'legsúlyosabb hiba', szaggatott: true, szin: 'figyelj', szoveg: 'A javítás a legsúlyosabb hibára fókuszál.', pelda: {"ki": "A példában", "szoveg": "A maker saját mérése nem talált hibát: a K4-re is azt írta, megfelel.\nA független reviewer szerint a K4 („egyoldalas”) nem is mérhető.", "h": "k7"} },
      { tol: 'maker', ig: 'ki', csomag: 'naplósor', szin: 'elakadas', iv: -0.2, szoveg: 'Minden körben naplósor kerül a naplo.md fájlba: kör, idő, hiba, változtatás, K-eredmények, stop vagy folytatás és az ok.', pelda: {"ki": "A maker naplósora", "szoveg": "1. kör | Heti összefoglaló: kimenet/2026-11-10_heti_osszefoglalo_v1.md\nstop: a saját ellenőrzés és a független újraellenőrzés megfelelt", "h": "k5"} },
      { aktiv: 'maker', buborek: 'javítom…', szamlalo: 'Belső kör 2 / 2', szoveg: 'Második belső kör: javít és újra mér. Több belső kör nincs: a hurok nem végtelen.', pelda: {"ki": "Te írod a makernek (javító kör)", "szoveg": "A terjedelmet géppel mérd meg (szószámláló paranccsal), és a parancsot a tényleges eredménnyel írd be a naplo.md új sorába", "h": "k8"} },
      { tol: 'maker', ig: 'ki', csomag: 'ellenorzes/', szin: 'kesz', szoveg: 'A mérések az ellenorzes/ mappába kerülnek, a napló pedig újabb sorral bővül.', pelda: {"ki": "A mérés a naplóban: parancs és eredmény", "szoveg": "(Get-Content -Raw -Encoding utf8 kimenet/2026-11-10_heti_osszefoglalo_v2.md | Measure-Object -Word).Words = 146 szó", "h": "k9"} },
      { aktiv: 'maker', buborek: 'megálljak?', szamlalo: 'Stop?', ido: 4200, szoveg: 'Megáll, ha minden K teljesült, ha elérte a maximális kört, ha két körben nincs javulás, vagy ha döntés vagy jogosultság hiányzik.', pelda: {"ki": "A maker naplósora (2. kör)", "szoveg": "folytatás: a módosított változat független újraellenőrzése még szükséges.", "h": "k9"} },
      { tol: 'maker', ig: 'te', csomag: 'Nincs megadva', szaggatott: true, szin: 'figyelj', iv: -0.1, szoveg: 'A hiányzó üzleti döntést nem pótolja: „Nincs megadva”, nyitott tételként a kriteriumok.md fájlban. A döntés a tiéd.', pelda: {"ki": "A v1 egy sora: a hiány nincs kitalálva", "szoveg": "- A riportoldal elkészítése. Felelős: Nincs megadva; határidő: november 24. (Forrás: 5. és 6. pont)", "h": "k5"} },
      { tol: 'ki', ig: 'te', csomag: 'fájlok + napló', szin: 'kesz', szamlalo: 'Stop', ido: 4200, szoveg: 'A végén a mentett fájlok és a napló várnak rád. Nincs küldés, külső írás, publikálás: a „kész” nem küldési engedély.', pelda: {"ki": "A maker válasza", "szoveg": "Elmentettem az összefoglalót és a naplóbejegyzést.", "h": "k5"} }
    ]
  });
})();

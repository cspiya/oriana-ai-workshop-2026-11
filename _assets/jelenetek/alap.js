/* Wenova workshop – közös mozgó ábrák (jelenetek), amelyeket több gyakorlat is használ. Betöltés: a wenova-motion.js UTÁN.
   FIKTÍV OKTATÁSI MINTA, SZEMLÉLTETÉS: a példák szemléltetők; a tokenhatárok, a token-számok és a százalékok nem egy valódi modell mérései. */
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
    pelda: 'A 4–5. gyakorlat BA-sávja: a RONDO jóváhagyási workflow FDD-egysége (FIKTÍV OKTATÁSI MINTA)',
    meret: [1000, 600],
    szereplok: [
      { id: 'ember', nev: 'Te', alcim: 'cél, mérce,|döntés', ikon: 'ember', x: 104, y: 300, szin: 'jegyezd' },
      { id: 'orch', nev: 'Orchestrator', alcim: 'bont, indít, kaput|tart, naplóz', ikon: 'karmester', x: 500, y: 300, szin: 'elakadas', w: 240 },
      { id: 'maker', nev: 'Maker', alcim: 'elkészíti|és javítja', ikon: 'keszito', x: 870, y: 130, szin: 'accent' },
      { id: 'reviewer', nev: 'Reviewer', alcim: 'független,|nem javít', ikon: 'ellenor', x: 870, y: 470, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'ember', ig: 'orch', csomag: 'utasítás', szin: 'jegyezd', szoveg: 'Te kiadod a feladatot az orchestratornak. A cél és a mérce a tiéd.',
        pelda: 'Te írod: „Kezdjük a 4. gyakorlatot.”\nA cél két kimenet a RONDO BA-forrásaiból: javított KAPU I jelentés és egy kis FDD-egység (3-5 funkció).' },
      { aktiv: 'orch', buborek: 'Mi a kész állapot?', szoveg: 'Az orchestrator értelmezi a feladatot. Ami hiányzik, azt nem találja ki. A mai gyakorlatokban ezt a szerepet te töltöd be.',
        pelda: 'Az agent-brief sablon 1. pontja még kitöltetlen: „1. Cél: két kötelező kimenet, címzett és formátum.”\nA kriteriumok.md „Elvárás (te írod)” oszlopa is üres.' },
      { tol: 'orch', ig: 'ember', csomag: 'visszakérdez', szaggatott: true, szin: 'elakadas', szoveg: 'Visszakérdez: mi a kimenet, mi a korlát, mivel ellenőrizzük?',
        pelda: 'A kérdés: mi a K1–K7 elvárása, mérése és küszöbe?\nIrányadó kérdés a K1-hez: „Minden R-azonosítójú igény megjelenik-e, és egyeznek-e az azonosítók?”' },
      { tol: 'ember', ig: 'orch', csomag: 'a kész állapot', szin: 'jegyezd', szoveg: 'Te válaszolsz: kimenet, korlát, ellenőrzés. Ettől lesz a cél ellenőrizhető.',
        pelda: 'Munka/04-Agent/kriteriumok.md: K1–K7 elvárás, mérés, küszöb · körkeret: belső kör legfeljebb 2; külső kör: R1 és R2\nKorlát a briefben: hiány „Nincs megadva”; javaslat nem döntés.' },
      { tol: 'orch', ig: 'maker', csomag: 'brief', szin: 'elakadas', szamlalo: 'Kör 1 / 2', szoveg: 'Az orchestrator briefet ír, és elindítja a makert. Indul az 1. kör.',
        pelda: 'Fájlok: Munka/04-Agent/agent-brief.md, kriteriumok.md, terv.md (legfeljebb 8 lépés, te hagyod jóvá)\nÚj Work-beszélgetésben írod: „RONDO 04 maker.” (GPT-6.1 Terra, közepes effort)' },
      { aktiv: 'maker', buborek: 'dolgozom…', szoveg: 'A maker önállóan dolgozik, és naplóz. Az orchestrator felügyel, de nem készít helyette.',
        pelda: 'A maker a briefet, a kritériumokat, a tervet és a briefben megnevezett forrásokat olvassa; mást nem.\nnaplo.md sor: kör | idő | belső/külső | hiba-ID | változtatás | K-eredmények | rubrika | stop/folytatás és ok' },
      { tol: 'maker', ig: 'orch', csomag: 'v1 + napló', szin: 'accent', jelzo: { szereplo: 'maker', szoveg: 'v1' }, szoveg: 'Visszajön az első változat (v1) a naplóval.',
        pelda: 'Munka/04-Agent/v1/: a két kötelező kimenet (javított KAPU I jelentés, FDD-egység) · kapu-I/atadas.md: lezárt / feltételes / blokkolt\nMellette: naplo.md; az átvételről: v1/atvetel.md' },
      { tol: 'orch', ig: 'reviewer', csomag: 'review-csomag', szin: 'elakadas', szoveg: 'Az orchestrator továbbadja a reviewernek: csak a kimenet, a kritériumok és a források mennek át.',
        pelda: 'Munka/05-Reviewer/review/: a v1 kötelező kimenetei, kriteriumok.md, a forráslista nyers forrásai, a rögzített DNS-modul\nNem megy át: agent-brief.md, terv.md, naplo.md, a maker ellenorzes/ eredményei' },
      { aktiv: 'reviewer', buborek: 'PASS vagy FAIL?', szoveg: 'A reviewer friss szemmel, kritériumonként ellenőriz. Nem látja a maker beszélgetését, és nem javít.',
        pelda: 'Friss beszélgetésben, a review-projektben írod: „RONDO 05 reviewer R1.” (GPT-6.1 Sol)\nK1–K7 egyenként: PASS / FAIL / NEM ELLENŐRIZHETŐ, bizonyítékkal (fájl és hely).' },
      { tol: 'reviewer', ig: 'orch', csomag: 'R1 jelentés', szaggatott: true, szin: 'figyelj', jelzo: { szereplo: 'reviewer', szoveg: 'R1' }, szoveg: 'Megjön az R1 jelentés: megállapítások bizonyítékkal és javítási javaslattal. Hogy mi megy javításra, azt te jelölöd ki.',
        pelda: 'Munka/05-Reviewer/R1.md, Findings: ID | súlyosság | hely | bizonyíték | javasolt javítás\nFormai példa: F-01 | major | … | egy állításnál hiányzik a forráshely | …\nTe döntesz: „A: minden blockert és majort (ajánlott)”' },
      { tol: 'orch', ig: 'maker', csomag: 'R1', szin: 'figyelj', iv: -0.2, szoveg: 'Az orchestrator a kijelölt hibákkal visszaadja az R1-et a makernek.',
        pelda: 'A terv.md végére „R1 javítás” szakasz kerül: mely megállapítások, mi nem módosulhat, hány belső kör, mikor stop.\nÚj beszélgetésben írod: „RONDO 04 javítás R1.”' },
      { aktiv: 'maker', buborek: 'a kijelölteket javítom', szoveg: 'A maker csak az R1-ben megnevezett, kijelölt hibákat javítja. Új verzióba, a régit nem írja felül.',
        pelda: 'A maker beolvassa a Munka/05-Reviewer/R1.md jelentést, és csak az ott megnevezett, kijelölt hibákat javítja.\nMentés: Munka/04-Agent/v2/; a v1/ érintetlen marad.' },
      { tol: 'maker', ig: 'orch', csomag: 'v2', szin: 'accent', jelzo: { szereplo: 'maker', szoveg: 'v2' }, szamlalo: 'Kör 2 / 2', szoveg: 'Kész a v2. Ez már a 2. kör: a hurok nem végtelen, van körhatár.',
        pelda: 'Kész: Munka/04-Agent/v2/, új sorral a naplo.md fájlban.\nÚjramérés a kriteriumok.md szerint: Munka/04-Agent/ellenorzes/v1_v2_osszevetes.txt' },
      { tol: 'orch', ig: 'reviewer', csomag: 'v2 + R1', szin: 'elakadas', iv: -0.2, szoveg: 'A reviewer a javított tételeket és az érintett részeket újra ellenőrzi.',
        pelda: 'A review/ csomagba bekerül a v2/ kötelező kimenete és az R1.md; a kizárt fájlok R2-ben is kizártak.\nFriss beszélgetésben írod: „RONDO 05 reviewer R2.”' },
      { tol: 'reviewer', ig: 'orch', csomag: 'R2: PASS', szaggatott: true, szin: 'kesz', jelzo: { szereplo: 'reviewer', szoveg: 'R2' }, szoveg: 'R2: minden kritérium teljesül, nincs nyitott súlyos hiba.',
        pelda: 'Munka/05-Reviewer/R2.md: az R1 tételei egyenként (Javítva? · Érintett függőség újraellenőrizve?), majd a verdikt.\nAz ábrán: K1–K7 PASS. Nálad lehet FAIL is; harmadik review akkor sem indul.' },
      { tol: 'orch', ig: 'ember', csomag: 'kész + napló', szin: 'kesz', iv: -0.2, szamlalo: 'Stop', ido: 4200, szoveg: 'Stop: minden kritérium teljesült (vagy elfogyott volna a kör). Az eredmény hozzád kerül: a „kész” nem küldési engedély, a döntés a tiéd.',
        pelda: 'Munka/05-Reviewer/stop-dontes.md: „A döntés: A: lezárt · B: feltételes · C: blokkolt”\nLezárt vagy feltételes döntésnél a végleges FDD-egység másolata a Munka/04-Agent/fdd/ mappába kerül.' }
    ]
  });

  /* 3. Miből áll a cég DNS-e (közös, verziózott vállalati tudás), és mitől lesz stabil az eredmény */
  M.jelenet('dns-epites', {
    tipus: 'epites',
    cim: 'Miből épül a cég DNS-e, és mitől lesz stabil az eredmény?',
    pelda: 'A fiktív DNS-minta: „04 usecase RONDO/dns-minta/” (FIKTÍV OKTATÁSI MINTA, nem Oriana-tény)',
    alap: 'Közös, verziózott vállalati tudás (DNS)',
    mero: 'Stabil, ismételhető eredmény',
    lepesek: [
      { blokk: { nev: 'Kik vagyunk', alcim: 'ceg.md: szolgáltatások, vállalati határok', szin: 'accent' }, ad: 'Nem kell minden beszélgetésben újra elmesélni a céget.', szoveg: 'Az alap: kik vagyunk, mit csinálunk, és mit nem. Ezt az AI minden feladatnál ugyanonnan olvassa.',
        pelda: 'ceg.md, „Vállalati határok”:\n„Szolgáltatási szintet csak a hatályos szolgáltatási szerződés szerint ígérünk. (Forrás: F-03)”\n„Minden más határ: Nincs megadva.”' },
      { blokk: { nev: 'Termék és korlát', alcim: 'termek.md: modul, támogatott folyamat, korlát', szin: 'tipp' }, ad: 'Az AI nem ígér olyat, amit a termék nem tud.', szoveg: 'A termék leírása a korlátokkal együtt: mit támogat, és hol a határ.',
        pelda: 'termek.md egy sora: Beszerzési modul (fiktív) | kétszintű jóváhagyás | … v2.3 |\nKorlát: „harmadik szint és helyettesítés: a specifikáció nem tartalmazza (Nincs megadva)” | F-04' },
      { blokk: { nev: 'Érték és ügyfél', alcim: 'ertek-es-ugyfel.md: igazolt állítás és feltevés külön', szin: 'g2' }, ad: 'A feltevés nem keveredik a ténnyel.', szoveg: 'Az ügyféligény és a nyújtott érték. Külön áll, ami igazolt állítás, és ami csak feltevés.',
        pelda: 'ertek-es-ugyfel.md, igazolt állítás: „A kitalált forgatókönyvben a RONDO kétszintű jóváhagyást használ …” | F-04\nVizsgálandó feltevés: „A harmadik szint bevezethető a meglévő modulban.”' },
      { blokk: { nev: 'Szerepszabályok', alcim: 'szabalyok/: BA, sales, account, kapuk', szin: 'g4' }, ad: 'Mindenki ugyanazt a kaput és jóváhagyási rendet követi.', szoveg: 'Szerepenként a szabályok: a BA kapui, az árlista és a vállalás jóváhagyása, az eszkaláció.',
        pelda: 'szabalyok/ba.md: „Minden igény egyedi R-NN azonosítót kap; az azonosító nem változik és nem kerül újraszámozásra.”\nszabalyok/sales.md: „Ajánlat csak a hatályos, évhez kötött árlistából készül.”' },
      { blokk: { nev: 'Működési minta', alcim: 'prompt-szerkezet, maker–reviewer, stop-szabályok', szin: 'elakadas' }, ad: 'Ugyanúgy kérünk, ellenőrzünk és állunk meg.', szoveg: 'A közös működési minta: a prompt hét eleme, mikor kell maker–reviewer, és mikor állunk meg.',
        pelda: 'szabalyok/mukodesi-minta.md, a „Forrás és határ” elem mintamondata:\n„Csak a három megadott jegyzet; ami nincs bennük: Nincs megadva.”\nStop-szabály: „elérted a körhatárt”.' },
      { blokk: { nev: 'Skillek', alcim: 'skills/: a DNS alkalmazása, független ellenőrzés', szin: 'g5' }, ad: 'A jó gyakorlat újrahasználható, nem fejben él.', szoveg: 'Az ismétlődő munkamenetek skillként rögzítve: így alkalmazd a DNS-t, így ellenőrizz függetlenül.',
        pelda: 'skills/dns-alkalmazas/SKILL.md, „Menet”: „1. Keresd meg a kanonikus DNS-t, és ellenőrizd a verziót (README.md).”\nskills/reviewer/SKILL.md: „Minden megállapításhoz adj bizonyítékot: fájl és hely.”' },
      { blokk: { nev: 'Verzió, gazda, változásnapló', alcim: 'README.md és forrásjegyzék', szin: 'kesz' }, ad: 'Tudni lehet, mi érvényes, ki felel érte, és mi változott.', ido: 4400, szoveg: 'A tető: verzió, gazda, érvényesség, változásnapló. Ettől ellenőrizhető, hogy mihez mérünk; a tanulság ide kerül vissza.',
        pelda: 'README.md: Verzió: 0.1-minta · Gazda: Nincs megadva (fiktív minta) · Státusz: oktatási minta, nem hatályos szabályzat\nVáltozásnapló: 0.1-minta | 2026-11-10 | első fiktív kiadás | Nincs megadva' }
    ]
  });
})();

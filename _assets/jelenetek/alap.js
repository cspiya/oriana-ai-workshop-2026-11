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
    pelda: "Heti összefoglaló egy tízsoros (kitalált) egyeztetési jegyzetből: ténylegesen lefuttatott példa, szó szerinti részletekkel",
    teljes: 'pelda-hurok.html',
    meret: [1000, 600],
    szereplok: [
      { id: 'ember', nev: 'Te', alcim: 'cél, mérce,|döntés', ikon: 'ember', x: 104, y: 300, szin: 'jegyezd' },
      { id: 'orch', nev: 'Orchestrator', alcim: 'bont, indít, kaput|tart, naplóz', ikon: 'karmester', x: 500, y: 300, szin: 'elakadas', w: 240 },
      { id: 'maker', nev: 'Maker', alcim: 'elkészíti|és javítja', ikon: 'keszito', x: 870, y: 130, szin: 'accent' },
      { id: 'reviewer', nev: 'Reviewer', alcim: 'független,|nem javít', ikon: 'ellenor', x: 870, y: 470, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'ember', ig: 'orch', csomag: 'utasítás', szin: 'jegyezd', szoveg: "Te kiadod a feladatot az orchestratornak. Elsőre ritkán teljes: a cél megvan, a mérce még nincs.",
        pelda: {"ki": "Te írod", "szoveg": "Készíts heti összefoglalót a tegnapi egyeztetés jegyzetéből a csapatnak.", "h": "k1"} },
      { aktiv: 'orch', buborek: 'Mi a kész állapot?', szoveg: "Az orchestrator értelmezi a feladatot. Ami hiányzik, azt nem találja ki. A mai gyakorlatokban ezt a szerepet te töltöd be.",
        pelda: {"ki": "Az orchestrator szabálya", "szoveg": "Mielőtt bárkit elindítanál, állapítsd meg, hogy a feladatnál megvan-e a három dolog: a kimenet (mi készüljön el), a korlát (miből dolgozhat, mit nem tehet) és az ellenőrzés (miből látszik, hogy jó).", "h": "k1"} },
      { tol: 'orch', ig: 'ember', csomag: 'visszakérdez', szaggatott: true, szin: 'elakadas', szoveg: "Visszakérdez: mi a kimenet, mi a korlát, mivel ellenőrizzük?",
        pelda: {"ki": "Az orchestrator válasza", "szoveg": "1. Melyik jegyzetből dolgozzunk? Küldd el vagy jelöld meg, hol található.\n2. Van megkötés a formára vagy terjedelemre, illetve arra, mi maradjon ki?\n3. Mitől lesz jó az összefoglaló: elég a fő döntések és teendők kiemelése, vagy más szempontot is kövessen?", "h": "k2"} },
      { tol: 'ember', ig: 'orch', csomag: 'a kész állapot', szin: 'jegyezd', szoveg: "Te válaszolsz: kimenet, korlát, ellenőrzés. Ettől lesz a cél ellenőrizhető.",
        pelda: {"ki": "Te írod", "szoveg": "1. A forrás: forras/2026-11-10_heti_egyeztetes_jegyzet.md. Csak ebből dolgozhat a készítő; ami nincs benne, az „Nincs megadva”.\n2. Egyoldalas Markdown, három résszel: Döntések, Nyitott kérdések, Következő lépések (felelőssel és határidővel). A javaslatot ne írja döntésnek.\n3. Akkor jó, ha minden sor mellett ott a forráshely (a jegyzet pontjának száma), minden döntés szerepel benne, és semmi olyan nincs benne, ami a jegyzetben nem áll.", "h": "k3"} },
      { tol: 'orch', ig: 'maker', csomag: 'brief', szin: 'elakadas', szamlalo: 'Kör 1', szoveg: "Az orchestrator briefet és kritériumokat ír a makernek. Indul az 1. kör.",
        pelda: {"ki": "A brief.md egy része", "szoveg": "Kizárólag ezt a forrást használd: forras/2026-11-10_heti_egyeztetes_jegyzet.md.\nAmi a jegyzet alapján nem állapítható meg, annak értéke pontosan: Nincs megadva.\nJavaslatot vagy felvetést ne fogalmazz át döntéssé; a még el nem döntött ügy a Nyitott kérdések részbe való.", "h": "k4"} },
      { aktiv: 'maker', buborek: 'dolgozom…', szoveg: "A maker önállóan dolgozik, és naplóz. Az orchestrator felügyel, de nem készít helyette.",
        pelda: {"ki": "Te írod a makernek", "szoveg": "Maker vagy: te készíted el a munkát. Olvasd el a brief.md és a kriteriumok.md fájlt, és készítsd el a briefben kért összefoglalót a megadott forrásból, a megadott helyre.", "h": "k5"} },
      { tol: 'maker', ig: 'orch', csomag: 'v1 + napló', szin: 'accent', jelzo: { szereplo: 'maker', szoveg: 'v1' }, szoveg: "Visszajön az első változat (v1) a naplóval. A napló a maker saját véleménye a munkájáról.",
        pelda: {"ki": "A v1 egy sora, és amit a maker a naplóba írt", "szoveg": "- A riportoldal elkészítése. Felelős: Nincs megadva; határidő: november 24. (Forrás: 5. és 6. pont)\nstop: a saját ellenőrzés és a független újraellenőrzés megfelelt", "h": "k5"} },
      { tol: 'orch', ig: 'reviewer', csomag: 'review-csomag', szin: 'elakadas', szoveg: "A reviewer csak a kimenetet, a kritériumokat és a forrást kapja meg. A brief és a napló nem megy át.",
        pelda: {"ki": "A példában", "szoveg": "Bement: a v1, a kriteriumok.md és a nyers jegyzet.\nKint maradt: a brief.md, a naplo.md és a maker beszélgetése.", "h": "k6"} },
      { aktiv: 'reviewer', buborek: 'PASS vagy FAIL?', szoveg: "A reviewer friss szemmel, kritériumonként ellenőriz. Nem látja a maker beszélgetését, és nem javít.",
        pelda: {"ki": "Te írod a reviewernek", "szoveg": "Független reviewer vagy: nem javítasz, csak ellenőrzöl. A készítő beszélgetését, naplóját és önértékelését nem kapod meg.\nMinden kritériumra adj ítéletet: PASS / FAIL / NEM ELLENŐRIZHETŐ, egy mondat bizonyítékkal és forráshellyel", "h": "k6"} },
      { tol: 'reviewer', ig: 'orch', csomag: 'R1 jelentés', szaggatott: true, szin: 'figyelj', jelzo: { szereplo: 'reviewer', szoveg: 'R1' }, szoveg: "Megjön az R1 jelentés, bizonyítékkal. Itt nem a munkában volt a hiba, hanem a mércében: az „egyoldalas” nem mérhető.",
        pelda: {"ki": "Az R1 ítélete", "szoveg": "NEM ELLENŐRIZHETŐ – nem adható PASS. A 8 kritériumból 7 PASS, 0 FAIL, 1 NEM ELLENŐRIZHETŐ; K4 egyoldalassági feltétele igazolatlan", "h": "k7"} },
      { tol: 'orch', ig: 'maker', csomag: 'a döntésed', szin: 'figyelj', iv: -0.2, szoveg: "Te döntöd el, mi megy javításra. Hozzáteheted azt is, amit csak te veszel észre: amire nincs kritérium, azt a reviewer nem keresi.",
        pelda: {"ki": "Te írod a makernek", "szoveg": "1. F1 elfogadva: az „egyoldalas” nem mérhető. A kriteriumok.md fájlban a K4 terjedelmi feltétele legyen: „legfeljebb 250 szó, szószámlálóval mérve”.\n2. Saját észrevétel, amit a reviewer nem találhatott meg, mert nem volt rá kritérium: a jegyzet 8. pontja (a tesztkörnyezet pénteki leállása) a csapatnak fontos, mégis kimaradt.", "h": "k8"} },
      { aktiv: 'maker', buborek: 'a kijelölteket javítom', szoveg: "A maker csak a kijelölt tételeket javítja. Új verzióba, a régit nem írja felül.",
        pelda: {"ki": "A maker válasza", "szoveg": "A K4-et módosítottam, a K9-et hozzáadtam; a v1 változatlan maradt.\nA gépi szószámlálás eredménye 146 szó, a parancsot és az eredményt rögzítettem a naplóban.", "h": "k9"} },
      { tol: 'maker', ig: 'orch', csomag: 'v2', szin: 'accent', jelzo: { szereplo: 'maker', szoveg: 'v2' }, szamlalo: 'Kör 2', szoveg: "Kész a v2. A „kész” üzenet még nem bizonyíték: nézd meg, mi áll valójában a fájlban.",
        pelda: {"ki": "A v2 vége, ahogy a fájlban áll", "szoveg": "## Tudnival?k\n- A tesztk?rnyezet p?nteken k?t ?r?ra le?ll karbantart?s miatt. (Forr?s: 8. pont)", "h": "k9"} },
      { tol: 'orch', ig: 'reviewer', csomag: 'v2 + R1', szin: 'elakadas', iv: -0.2, szoveg: "A reviewer a javított tételeket és az érintett részeket újra ellenőrzi.",
        pelda: {"ki": "Te írod a reviewernek", "szoveg": "Ellenőrizd újra a változott részeket és azt, amit a változás érinthet.\nA gépi ellenőrzésnél idézd a parancsot és a tényleges eredményt.", "h": "k10"} },
      { tol: 'reviewer', ig: 'orch', csomag: 'R2: FAIL', szaggatott: true, szin: 'figyelj', jelzo: { szereplo: 'reviewer', szoveg: 'R2' }, szoveg: "R2: a javítás nem sikerült teljesen. A független ellenőr azt is megfogja, amit a maker állított, de nem tett meg.",
        pelda: {"ki": "Az R2 megállapításai", "szoveg": "R2-F1 – Sérült új cím és karbantartási közlés\nR2-F2 – A mércefájl nem tükrözi pontosan az ember döntését\nK4 még „egyoldalas” és „három” részt kér", "h": "k10"} },
      { tol: 'orch', ig: 'maker', csomag: 'R2', szin: 'figyelj', iv: -0.2, szoveg: "Újabb javító kör, megint csak a megnevezett hibákra.",
        pelda: {"ki": "Te írod a makernek", "szoveg": "Maker vagy, második javító kör. Olvasd el az R2.md reviewer-jelentést. Csak a két megnevezett hibát javítsd:", "h": "k11"} },
      { tol: 'maker', ig: 'orch', csomag: 'v3', szin: 'accent', jelzo: { szereplo: 'maker', szoveg: 'v3' }, szamlalo: 'Kör 3', szoveg: "Kész a v3. A hurok nem végtelen: a mai gyakorlatokban két review-kör a határ, utána te döntesz.",
        pelda: {"ki": "A maker naplósora", "szoveg": "0, 0 gyanús karakter; 146 szó\nfolytatás: a javított változat független újraellenőrzése szükséges.", "h": "k11"} },
      { tol: 'orch', ig: 'reviewer', csomag: 'v3 + R2', szin: 'elakadas', iv: -0.2, szoveg: "A reviewer újra a szűk csomagot kapja: az új változatot, a mércét, az előző jelentést és a forrást.",
        pelda: {"ki": "Te írod a reviewernek", "szoveg": "Ellenőrizd újra az R2 két findingját és azt, amit a javítás érinthetett", "h": "k12"} },
      { tol: 'reviewer', ig: 'orch', csomag: 'R3: PASS', szaggatott: true, szin: 'kesz', jelzo: { szereplo: 'reviewer', szoveg: 'R3' }, szoveg: "Minden kritérium teljesül, nincs nyitott súlyos hiba.",
        pelda: {"ki": "Az R3 ítélete", "szoveg": "Összesített ítélet: PASS – READY. K1–K9: PASS; FAIL: 0; NEM ELLENŐRIZHETŐ: 0; lefedettség: COMPLETE.\nEz ellenőrzési ítélet, nem publikálási felhatalmazás.", "h": "k12"} },
      { tol: 'orch', ig: 'ember', csomag: 'kész + napló', szin: 'kesz', iv: -0.2, szamlalo: 'Stop', ido: 4600, szoveg: "Stop: minden kritérium teljesült (vagy elfogyott volna a kör). Az eredmény hozzád kerül: a „kész” nem küldési engedély, a döntés a tiéd.",
        pelda: {"ki": "A példában", "szoveg": "Három változat és három független ellenőrzés után minden kritérium teljesült.\nA kész összefoglalót még senki nem küldte el: erről te döntesz.", "h": "k13"} }
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

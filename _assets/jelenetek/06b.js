/* Wenova workshop – a 6b gyakorlat (BA-utótag) mozgó ábrája. Betöltés: a wenova-motion.js UTÁN.
   FIKTÍV OKTATÁSI MINTA: a drótváz és a dokumentáció általános, fiktív; valós termék képességéről nem állít semmit. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* A BA útja a napban: a hat előre beküldött BA-kérdés térképe (4., 5. és 6b gyakorlat) */
  M.jelenet('ba-ut-a-napban', {
    tipus: 'epites',
    cim: 'A BA útja a napban: hat kérdés, hat állomás',
    pelda: 'Egy BA napja a RONDO jóváhagyási workflow anyagán (kitalált projekt, FIKTÍV OKTATÁSI MINTA)',
    alap: 'Felmérési anyag: jegyzetek, leírások, táblák',
    mero: 'Ellenőrzött, átadható BA-kimenet',
    lepesek: [
      { blokk: { nev: 'KAPU I', alcim: '4. gyakorlat, A fázis: teljes-e a csomag?', szin: 'jegyezd' }, ad: 'Tudod, mi van meg, mi hiányzik, és mi mond ellent.', szoveg: 'KAPU I: az említett anyagokat a fájlok tényleges tartalmához párosítod; minden megállapításnak van forráshelye.', pelda: 'Kérésed eleje: „Cél: a forrasok/BA felmérési csomag teljességének és belső összhangjának ellenőrzése (KAPU I).”\nEgy sor: T-03: a jelenlegi folyamat szöveges leírása (PDF) | a jegyzet 36. sora | megtalált fájl: … | megvan / hiányzik' },
      { blokk: { nev: 'FDD-egység fit-gappel', alcim: '4. gyakorlat, B–D fázis: egy funkcióblokk', szin: 'accent' }, ad: 'Kis egység készül, előre leírt mércével.', szoveg: 'Az FDD kis egységben készül a séma szerint: csoportosítás, elképzelés, fit-gap, funkciók, önellenőrzés az igényekhez, igazodás.', pelda: 'Fit-gap sor formája: FG-01 | R-…: … | <fájl>, <hely> | igen / részben / nem / Nincs megadva | eltérés: … | javaslat, nem döntés (vagy NK-…)\nA mérce: a kriteriumok.md K1–K7 sorai' },
      { blokk: { nev: 'KAPU II', alcim: '5. gyakorlat: független ellenőrzés', szin: 'elakadas' }, ad: 'Fejlesztésre csak ellenőrzött egység megy.', szoveg: 'KAPU II: a reviewer az értékkészleteket, az összhangot és a teljes folyamat értelmezhetőségét nézi, friss beszélgetésben.', pelda: 'Új beszélgetésbe: „RONDO 05 reviewer R1” → R1.md\nKérésed: „Cél: derüljön ki, hogy az FDD-egység alapján elképzelhető-e a teljes folyamat: egy igény útja az elejétől a végéig.”' },
      { blokk: { nev: 'Önállóan szállítható', alcim: '6b, A fázis: recept és számláló', szin: 'tipp' }, ad: 'A dokumentum a környezete nélkül is érthető.', szoveg: 'A recept beépíti a hivatkozott szöveget, a forrás lábjegyzetbe kerül; a számláló előtte és utána mér, a próba friss beszélgetés.', pelda: 'Bekezdés: „A kiküldés az 5. pontban leírt jóváhagyás után történik (lásd az előző fejezet táblázatát). …”\nSzámláló: ÖSSZESEN előtte: … · utána: …\nFriss beszélgetés: „Érthető-e ez a szöveg más dokumentum nélkül?”' },
      { blokk: { nev: 'Képernyőterv', alcim: '6b, B fázis: drótváz a mezőtáblából', szin: 'g2' }, ad: 'A leírás első próbája, a megadott listán belül.', szoveg: 'A fejezet mezőtáblájából drótváz készül; a képességlistát te adod forrásként, ami nincs rajta, az nyitott kérdés.', pelda: 'A fejezet sora: Pénznem | felsorolás | igen | HUF (forint), EUR (euró)\nA drótvázban: Pénznem → V-05 Legördülő lista (a FIKTÍV képességlistáról), értékkészlet: HUF (forint), EUR (euró)' },
      { blokk: { nev: 'Dokumentáció kódból', alcim: '6b, C fázis: leírás kódhelyekkel', szin: 'kesz' }, ad: 'A leírás visszakereshető a kódban.', ido: 4400, szoveg: 'A szintet a kimeneti séma mondja ki; minden szabály mellett kódhely áll; eltérésnél a forrás a kód, a döntés a szerzőé.', pelda: '„Az igény csak akkor kerülhet Jóváhagyva státuszba, ha minden szint lezárult.”\nKódhely: szabalyok.py, 50–52. sor (jovahagyhato)' }
    ]
  });

  /* Három rövid BA-feladat: mi megy be, mi jön ki, és mivel mérjük */
  M.jelenet('ba-harom-feladat', {
    tipus: 'aramlas',
    cim: 'Három BA-feladat: mi megy be, mi jön ki, és mivel mérjük',
    pelda: 'Tartalék bekezdés, a „Beszerzési igény adatlap” és a rondo-jovahagyas kódja (FIKTÍV MINTÁK)',
    meret: [1000, 660],
    szereplok: [
      { id: 'bek', nev: 'Bekezdés', alcim: 'máshová mutató|hivatkozásokkal', ikon: 'dokumentum', x: 130, y: 135, szin: 'tipp', w: 196 },
      { id: 'fej', nev: 'Fejezet', alcim: 'FDD 11. fejezet:|képernyőleírás', ikon: 'tablazat', x: 130, y: 335, szin: 'tipp', w: 196 },
      { id: 'kod', nev: 'Kód', alcim: 'szabalyok.py és|régi kézikönyv', ikon: 'fogaskerek', x: 130, y: 535, szin: 'tipp', w: 196 },
      { id: 'ai', nev: 'Asszisztens', alcim: 'recept (Skill)|és mérés', ikon: 'modell', x: 500, y: 335, szin: 'accent', w: 210 },
      { id: 'ell', nev: 'Ellenőrzés', alcim: 'ellenorzes.md:|előtte és utána', ikon: 'naplo', x: 865, y: 135, szin: 'kesz', w: 200 },
      { id: 'drot', nev: 'Drótváz', alcim: 'offline HTML,|nem működik', ikon: 'bongeszo', x: 865, y: 335, szin: 'kesz', w: 200 },
      { id: 'dok', nev: 'Leírás', alcim: 'felhasználónak,|kódhelyekkel', ikon: 'dokumentum', x: 865, y: 535, szin: 'kesz', w: 200 }
    ],
    lepesek: [
      { tol: 'bek', ig: 'ai', csomag: 'bekezdés', szin: 'tipp', szamlalo: 'A fázis', szoveg: 'A fázis: bemegy egy bekezdés, amelynek megértéséhez más dokumentumokra kellene lapozni.', pelda: '06b-ellenorzes-sablon.md, 5. szakasz, tartalék bekezdés:\n„A kiküldés az 5. pontban leírt jóváhagyás után történik (lásd az előző fejezet táblázatát). …”' },
      { aktiv: 'ai', buborek: 'számláló: előtte', szoveg: 'Előbb a számláló megméri a feloldatlan keresztreferenciákat.', pelda: 'A recept számlálója mintákat számol, például: „lásd …”, „fent említett”, „az előző fejezet”, „az 5. pont”.\nKimenet: mintánként a találatok száma, a végén: ÖSSZESEN előtte: …' },
      { aktiv: 'ai', buborek: 'beépít + lábjegyzet', szoveg: 'A recept (Skill) szerint a szükséges szöveg beépül, a forrás lábjegyzetbe kerül. A recept a tartalmat nem bővítheti.', pelda: 'Te (a váz eleje): „Cél: ez a bekezdés más dokumentum nélkül is érthető legyen. Címzett: én és az FDD olvasója.”\nLábjegyzet: SPEC_reszlet_jovahagyasi_workflow_v2.3.md, <hely>; ahol a forrás nem ad adatot: „Nincs megadva”' },
      { tol: 'ai', ig: 'ell', csomag: 'előtte / utána', szin: 'kesz', szoveg: 'A számláló újra mér. Kijön az átírt bekezdés, a hivatkozásszám előtte és utána, a változtatások forrással.', pelda: 'Munka/06b-BA-utotag/ellenorzes.md: Hivatkozásleltár: előtte: … · utána: … · mérés módja: script\n1. <eredeti hivatkozás> → <beépített szöveg> · forrás: fájl és hely · egyezik a forrással: ✅ vagy ⚠️' },
      { aktiv: 'ell', buborek: 'érthető egyedül is?', szoveg: 'A számláló nem mondja meg, hogy a szöveg egyedül is érthető-e. Ezt egy friss beszélgetés próbálja ki, amely csak az átírt szöveget kapja.', pelda: 'Friss beszélgetésbe: <csak az átírt szöveg>, majd: „Érthető-e ez a szöveg más dokumentum nélkül? Mit hiányolsz?”\nellenorzes.md, 4. szakasz: igen / nem, mit hiányol · A te döntésed: elfogadom / javítom: mit' },
      { tol: 'fej', ig: 'ai', csomag: 'mezők táblázata', szin: 'tipp', szamlalo: 'B fázis', szoveg: 'B fázis: bemegy az FDD 11. fejezete (vagy a fiktív mintafejezet) a képernyő leírásával.', pelda: '06b-kepernyoterv-feladat.md, „Beszerzési igény adatlap”:\nPénznem | felsorolás | igen | HUF (forint), EUR (euró)\nStátusz | felsorolás, csak olvasható | igen | Tervezet, Jóváhagyásra vár, Jóváhagyva, Elutasítva' },
      { tol: 'ai', ig: 'drot', csomag: 'drótváz', szin: 'kesz', szoveg: 'Kijön egy offline HTML-drótváz: nem működő képernyővázlat, általános, fiktív elemekkel.', pelda: 'Te: „Cél: offline HTML-drótváz a »Beszerzési igény adatlap« képernyőhöz, csak a megadott képességlista vezérlőivel.”\nKi: Pénznem | felsorolás | V-05 Legördülő lista | – | értékkészlet: HUF (forint), EUR (euró)' },
      { aktiv: 'drot', buborek: 'egyezik a fejezettel?', jelzo: { szereplo: 'drot', szoveg: '_v2' }, szoveg: 'Összeveted a fejezet táblázatával: típus, kötelező jelölés, értékkészlet. Egy mező, egy javítás, újramérés: új verzió.', pelda: 'Te (a váz eleje): „Cél: a drótváz <mező> mezője egyezzen az FDD 11. fejezetének sorával.”\nKi: A fejezet sora … · Előtte (v1) … ⚠️ · Utána (v2) … ✅ · Más mező nem változott ✅ · Új fájl: …_v2.html' },
      { tol: 'kod', ig: 'ai', csomag: 'kód + kézikönyv', szin: 'tipp', szamlalo: 'C fázis', szoveg: 'C fázis: bemegy a kód és egy elavult kézikönyv. Az asszisztens csak olvassa, a kód nem módosul.', pelda: 'Te: „Forrás és határ: Tananyag/04 usecase RONDO/kod-repo/rondo-jovahagyas/szabalyok.py. … A kódot ne módosítsd.”\nA másik ágon a docs/felhasznaloi_kezikonyv.md is bemegy, összevetésre.' },
      { tol: 'ai', ig: 'dok', csomag: 'leírás + kódhely', szin: 'kesz', szoveg: 'Kijön egy felhasználói szintű leírás, nem függvénylista. Minden szabályhoz kódhely tartozik: fájl és sor.', pelda: '„Mikor lesz jóváhagyott az igény? Az igény csak akkor kerülhet Jóváhagyva státuszba, ha minden szint lezárult. Kódhely: szabalyok.py, 50–52. sor.”\nMentve: Munka/06b-BA-utotag/dokumentacio/ÉÉÉÉ-HH-NN_dokumentacio_kodbol.md' },
      { aktiv: 'dok', buborek: 'kód vagy kézikönyv?', szoveg: 'Egy szabályt közösen visszakerestek a kódban, és összevetitek a kézikönyv mondatával. Ha eltér: a forrás a kód, a döntés a szerzőé.', pelda: 'Ki: Kód: szabalyok.py, <sor>. sor: „…” · Kézikönyv: docs/felhasznaloi_kezikonyv.md, <szakasz>: „…”\nTe döntesz: „A: egyezik.” vagy „B: eltér: a kézikönyv <szakasz> mondata mást ír, mint a szabalyok.py <sor>. sora.”' },
      { aktiv: 'ai', buborek: 'recept, mérés, forrás', szamlalo: 'Egy módszer', ido: 4400, szoveg: 'Mindháromnál ugyanaz a módszer: recept, mérhető ellenőrzés, forrás-visszakeresés. A drótváz és a leírás közös kipróbálás, nem kész munka.', pelda: 'Recept: 06b-onallo-dokumentum-SKILL.md, kepernyoterv-recept.md\nMérés: számláló előtte és utána; választólista ↔ értékkészlet (script)\nForrás: a SPEC <helye>, a fejezet sora, a szabalyok.py <sora>' }
    ]
  });
})();

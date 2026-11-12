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
    alap: 'Felmérési anyag: jegyzetek, leírások, táblák',
    mero: 'Ellenőrzött, átadható BA-kimenet',
    lepesek: [
      { blokk: { nev: 'KAPU I', alcim: '4. gyakorlat, A fázis: teljes-e a csomag?', szin: 'jegyezd' }, ad: 'Tudod, mi van meg, mi hiányzik, és mi mond ellent.', szoveg: 'KAPU I: az említett anyagokat a fájlok tényleges tartalmához párosítod; minden megállapításnak van forráshelye.' },
      { blokk: { nev: 'FDD-egység fit-gappel', alcim: '4. gyakorlat, B–D fázis: egy funkcióblokk', szin: 'accent' }, ad: 'Kis egység készül, előre leírt mércével.', szoveg: 'Az FDD kis egységben készül a séma szerint: csoportosítás, elképzelés, fit-gap, funkciók, önellenőrzés az igényekhez, igazodás.' },
      { blokk: { nev: 'KAPU II', alcim: '5. gyakorlat: független ellenőrzés', szin: 'elakadas' }, ad: 'Fejlesztésre csak ellenőrzött egység megy.', szoveg: 'KAPU II: a reviewer az értékkészleteket, az összhangot és a teljes folyamat értelmezhetőségét nézi, friss beszélgetésben.' },
      { blokk: { nev: 'Önállóan szállítható', alcim: '6b, A fázis: recept és számláló', szin: 'tipp' }, ad: 'A dokumentum a környezete nélkül is érthető.', szoveg: 'A recept beépíti a hivatkozott szöveget, a forrás lábjegyzetbe kerül; a számláló előtte és utána mér, a próba friss beszélgetés.' },
      { blokk: { nev: 'Képernyőterv', alcim: '6b, B fázis: drótváz a mezőtáblából', szin: 'g2' }, ad: 'A leírás első próbája, a megadott listán belül.', szoveg: 'A fejezet mezőtáblájából drótváz készül; a képességlistát te adod forrásként, ami nincs rajta, az nyitott kérdés.' },
      { blokk: { nev: 'Dokumentáció kódból', alcim: '6b, C fázis: leírás kódhelyekkel', szin: 'kesz' }, ad: 'A leírás visszakereshető a kódban.', ido: 4400, szoveg: 'A szintet a kimeneti séma mondja ki; minden szabály mellett kódhely áll; eltérésnél a forrás a kód, a döntés a szerzőé.' }
    ]
  });

  /* Három rövid BA-feladat: mi megy be, mi jön ki, és mivel mérjük */
  M.jelenet('ba-harom-feladat', {
    tipus: 'aramlas',
    cim: 'Három BA-feladat: mi megy be, mi jön ki, és mivel mérjük',
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
      { tol: 'bek', ig: 'ai', csomag: 'bekezdés', szin: 'tipp', szamlalo: 'A fázis', szoveg: 'A fázis: bemegy egy bekezdés, amelynek megértéséhez más dokumentumokra kellene lapozni.' },
      { aktiv: 'ai', buborek: 'számláló: előtte', szoveg: 'Előbb a számláló megméri a feloldatlan keresztreferenciákat.' },
      { aktiv: 'ai', buborek: 'beépít + lábjegyzet', szoveg: 'A recept (Skill) szerint a szükséges szöveg beépül, a forrás lábjegyzetbe kerül. A recept a tartalmat nem bővítheti.' },
      { tol: 'ai', ig: 'ell', csomag: 'előtte / utána', szin: 'kesz', szoveg: 'A számláló újra mér. Kijön az átírt bekezdés, a hivatkozásszám előtte és utána, a változtatások forrással.' },
      { aktiv: 'ell', buborek: 'érthető egyedül is?', szoveg: 'A számláló nem mondja meg, hogy a szöveg egyedül is érthető-e. Ezt egy friss beszélgetés próbálja ki, amely csak az átírt szöveget kapja.' },
      { tol: 'fej', ig: 'ai', csomag: 'mezők táblázata', szin: 'tipp', szamlalo: 'B fázis', szoveg: 'B fázis: bemegy az FDD 11. fejezete (vagy a fiktív mintafejezet) a képernyő leírásával.' },
      { tol: 'ai', ig: 'drot', csomag: 'drótváz', szin: 'kesz', szoveg: 'Kijön egy offline HTML-drótváz: nem működő képernyővázlat, általános, fiktív elemekkel.' },
      { aktiv: 'drot', buborek: 'egyezik a fejezettel?', jelzo: { szereplo: 'drot', szoveg: '_v2' }, szoveg: 'Összeveted a fejezet táblázatával: típus, kötelező jelölés, értékkészlet. Egy mező, egy javítás, újramérés: új verzió.' },
      { tol: 'kod', ig: 'ai', csomag: 'kód + kézikönyv', szin: 'tipp', szamlalo: 'C fázis', szoveg: 'C fázis: bemegy a kód és egy elavult kézikönyv. Az asszisztens csak olvassa, a kód nem módosul.' },
      { tol: 'ai', ig: 'dok', csomag: 'leírás + kódhely', szin: 'kesz', szoveg: 'Kijön egy felhasználói szintű leírás, nem függvénylista. Minden szabályhoz kódhely tartozik: fájl és sor.' },
      { aktiv: 'dok', buborek: 'kód vagy kézikönyv?', szoveg: 'Egy szabályt közösen visszakerestek a kódban, és összevetitek a kézikönyv mondatával. Ha eltér: a forrás a kód, a döntés a szerzőé.' },
      { aktiv: 'ai', buborek: 'recept, mérés, forrás', szamlalo: 'Egy módszer', ido: 4400, szoveg: 'Mindháromnál ugyanaz a módszer: recept, mérhető ellenőrzés, forrás-visszakeresés. A drótváz és a leírás közös kipróbálás, nem kész munka.' }
    ]
  });
})();

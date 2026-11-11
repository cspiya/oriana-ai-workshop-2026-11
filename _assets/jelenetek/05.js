/* Wenova workshop – az 5. gyakorlat (RONDO reviewer) mozgó ábrái. Betöltés: a wenova-motion.js UTÁN.
   Forrás: Notebookok/05-rondo-reviewer-notebook.html, Feladatok/05-rondo-reviewer.md, AGENTS.md („Reviewer mód”, „Módszer”).
   KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* 1. Mi megy át a review-csomagban, és mi marad kint; így lesz belőle R1 */
  M.jelenet('review-csomag', {
    tipus: 'aramlas',
    cim: 'Mi megy át a review-csomagban, és mi marad kint?',
    meret: [1000, 640],
    szereplok: [
      { id: 'mappa', nev: '04-Agent', alcim: 'a maker|munkamappája', ikon: 'mappa', x: 120, y: 330, szin: 'accent' },
      { id: 'csomag', nev: 'review/', alcim: 'szűk csomag|és csomagjegyzék', ikon: 'dokumentum', x: 490, y: 170, szin: 'tipp', w: 210 },
      { id: 'kint', nev: 'Kint marad', alcim: 'a reviewer|nem kapja meg', ikon: 'szabaly', x: 490, y: 520, szin: 'figyelj', w: 210 },
      { id: 'reviewer', nev: 'Reviewer', alcim: 'friss beszélgetés,|nem javít', ikon: 'ellenor', x: 870, y: 170, szin: 'kesz' },
      { id: 'te', nev: 'Te', alcim: 'indítasz,|döntesz', ikon: 'ember', x: 870, y: 520, szin: 'jegyezd' }
    ],
    lepesek: [
      { tol: 'mappa', ig: 'csomag', csomag: 'v1 kimenetei', szin: 'accent', szoveg: 'A csomagba másolat kerül a v1 kötelező kimeneteiről. Az eredeti fájlokat nem mozgatjuk és nem módosítjuk.' },
      { tol: 'mappa', ig: 'csomag', csomag: 'kriteriumok.md', szin: 'accent', szoveg: 'Bemegy a kriteriumok.md: ez a mérce, ehhez mér a reviewer.' },
      { tol: 'mappa', ig: 'csomag', csomag: 'nyers források + DNS', szin: 'tipp', szoveg: 'Bemennek a forráslista nyers forrásai és a rögzített DNS-modul.' },
      { tol: 'mappa', ig: 'kint', csomag: 'brief, terv, napló', szin: 'figyelj', szoveg: 'Nem megy be a brief, a terv és a napló.' },
      { tol: 'mappa', ig: 'kint', csomag: 'a maker mérései', szin: 'figyelj', szoveg: 'Nem megy be a maker saját mérése és semmilyen megoldókulcs. Különben az ellenőr a magyarázatot ellenőrizné, nem a munkát.' },
      { aktiv: 'csomag', buborek: 'jegyzék + script', szoveg: 'A csomag-jegyzek.md megmutatja, mi megy be és mi nem; script ellenőrzi, hogy a kizárt fájlok nincsenek a csomagban. Te jóváhagyod.' },
      { tol: 'te', ig: 'reviewer', csomag: 'függetlenségi próba', szin: 'jegyezd', iv: -0.2, szoveg: 'Friss beszélgetésben megkérdezed: mit lát, és mit tud korábbról? A függetlenség korlátját egy sorban felírod.' },
      { tol: 'te', ig: 'reviewer', csomag: 'RONDO 05 reviewer R1', szin: 'jegyezd', iv: -0.2, szamlalo: 'R1', szoveg: 'Rövid indítóval elindítod az R1-et: a munka a receptben és a csomagban van.' },
      { tol: 'csomag', ig: 'reviewer', csomag: 'recept + csomag', szin: 'tipp', szoveg: 'A reviewer a receptedet és a review/ csomagot olvassa. Annyit tud, amennyit ott talál.' },
      { aktiv: 'reviewer', buborek: 'PASS? FAIL?', szoveg: 'Minden kritériumot minősít: PASS, FAIL vagy NEM ELLENŐRIZHETŐ. Nem javít, és ami nem ellenőrizhető, az nem teljesített.' },
      { tol: 'reviewer', ig: 'te', csomag: 'R1.md', szaggatott: true, szin: 'kesz', iv: -0.1, jelzo: { szereplo: 'reviewer', szoveg: 'R1' }, ido: 4200, szoveg: 'Megjön az R1.md a vizsgált fájlok pontos verziójával. Ez is csak állítás: a forrás igazolja vagy cáfolja, a döntés a tiéd.' }
    ]
  });

  /* 2. Mire épül a stop-döntés: rétegek az ellenőrzésben, R1 → javítás → R2 → stop */
  M.jelenet('stop-epites', {
    tipus: 'epites',
    cim: 'Mire épül a stop-döntés? Rétegek, két független kör, kimondott megállás',
    alap: 'Kritériumlista (K-azonosítókkal) és szűk review-csomag',
    mero: 'Bizonyítékkal alátámasztott lezárás',
    lepesek: [
      { blokk: { nev: 'Determinisztikus ellenőrzés', alcim: 'script, számláló, összeg: parancs és tényleges eredmény', szin: 'accent' }, ad: 'A szerkezetet méri; a tartalmi helyességet nem bizonyítja.', szoveg: 'Az első réteg a gépi mérés: a kód a szerkezetet méri. Támogatás, nem bizonyítja a tartalmi helyességet.' },
      { blokk: { nev: 'Forrás-visszakeresés', alcim: 'az öt kijelölt állítás forráshelye; kettőt magad keresel vissza', szin: 'tipp' }, ad: 'Nem a reviewer szavában bízol, hanem a bizonyítékban.', szoveg: 'A második réteg a forrás: a tényeket méri. Az öt kijelölt állításból kettőt saját kezűleg keresel vissza.' },
      { blokk: { nev: 'Rubrika 1–5', alcim: 'használhatóság, egyértelműség', szin: 'g2' }, ad: 'A használhatóságot méri; a forrást nem váltja ki.', szoveg: 'A harmadik réteg a rubrika: a használhatóságot méri. A három réteg egymást ellenőrzi; egyre sem hagyatkozol egyedül.' },
      { blokk: { nev: 'R1: első független kör', alcim: 'friss beszélgetés, szűk csomag, a maker magyarázata nélkül', szin: 'kesz' }, ad: 'A készítő vakfoltja nem megy tovább.', szoveg: 'Az R1 független ellenőr: a készítő nem ellenőrizheti önmagát, mert ugyanazt a vakfoltot viszi tovább.' },
      { blokk: { nev: 'Javítás: v2', alcim: 'a 4. gyakorlat D fázisa; csak a kijelölt hibák', szin: 'figyelj' }, ad: 'Hogy mit javítunk, az döntés, és a döntés a tiéd.', szoveg: 'Az R1 után te jelölöd ki, mit javít a maker. A javítás új verzióba kerül, a v1 megmarad.' },
      { blokk: { nev: 'R2: újraellenőrzés', alcim: 'a javított tételek és az érintett függőségek', szin: 'elakadas' }, ad: 'Kiderül, hogy a javítás tényleg javított-e, és nem rontott-e el mást.', szoveg: 'Az R2 ugyanolyan szűk és tiszta bemenettel dolgozik, mint az R1. A javítás csak akkor igazolt, ha a független ellenőr látja is.' },
      { blokk: { nev: 'Stop-döntés', alcim: 'lezárt, feltételes vagy blokkolt; harmadik review nem indul', szin: 'jegyezd' }, ad: 'Ami nyitva maradt, az látszik. A „kész” nem küldési engedély.', ido: 4400, szoveg: 'A tető a te döntésed: kimondod, melyik stop-szabály teljesült. A körkeret legfeljebb 2 belső kör és 2 review.' }
    ]
  });
})();

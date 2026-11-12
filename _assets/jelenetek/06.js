/* Wenova workshop – a 6. gyakorlat (RONDO ügykövető, Sites) mozgó ábrái. Betöltés: a wenova-motion.js UTÁN.
   FIKTÍV OKTATÁSI MINTA: a RONDO Hullámkartongyártó Kft. valós cég, a projekt kitalált. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* 1. A fázis (közös): az ellenőrzött eredményből ügykövető, két fiókkal kipróbálva */
  M.jelenet('ugykoveto-a-fazis', {
    tipus: 'aramlas',
    cim: 'A fázis, közös: az ellenőrzött eredményből ügykövető, két fiókkal kipróbálva',
    pelda: 'A „RONDO ügykövető” T-01 tétele: Harmadik jóváhagyó bevezetése a jóváhagyási láncban (R-01)',
    meret: [1000, 620],
    szereplok: [
      { id: 'forras', nev: 'Forrás', alcim: 'ellenőrzött:|v2 és R2.md', ikon: 'szabaly', x: 140, y: 140, szin: 'kesz' },
      { id: 'te', nev: 'Te', alcim: 'brief, próba,|döntés', ikon: 'ember', x: 140, y: 470, szin: 'jegyezd' },
      { id: 'app', nev: 'Ügykövető', alcim: 'Site vagy helyi|prototípus', ikon: 'adatbazis', x: 500, y: 300, szin: 'accent', w: 210 },
      { id: 'tars', nev: 'Társad', alcim: 'a második|fiók', ikon: 'ember', x: 860, y: 140, szin: 'elakadas' },
      { id: 'jegyzek', nev: 'Jegyzék', alcim: 'tesztjegyzek.md:|PASS / FAIL / …', ikon: 'naplo', x: 860, y: 470, szin: 'tipp', w: 200 }
    ],
    lepesek: [
      { tol: 'te', ig: 'app', csomag: 'Site-brief + szabály', szin: 'jegyezd', szoveg: 'A briefben kimondod a szabályt: a tételek mindenkinek olvashatók, írni csak a saját tételt lehet, és ez a szerveroldalon érvényesül.', pelda: 'Te (a váz, a folytatást te írod): „Egészítsd ki a »RONDO ügykövető« briefet az igény tételtípusra.\nKi olvashatja a tételeket: … Ki módosíthat és törölhet egy tételt: … Hol érvényesül ez a szabály: …”' },
      { tol: 'forras', ig: 'app', csomag: 'ellenőrzött tételek', szin: 'kesz', szoveg: 'Csak olyan tétel kerül be, amely a reviewen átment, vagy nyitott kérdésként jelölt. Mindegyiknek van forráshelye és státusza.', pelda: 'tetelek.csv, T-01: T-01 | igeny | Harmadik jóváhagyó bevezetése a jóváhagyási láncban (R-01). | 2026-11-05_RONDO_workshop_jegyzet_jovahagyas.md, R-01 | review-n_atment' },
      { aktiv: 'app', buborek: 'ugy · tetel · review', szoveg: 'Három tábla tárolja az adatot: ugy, tetel, review. A Site, ha a munkatérben elérhető, tartós adatbázist és munkatéri hitelesítést használ.', pelda: 'ugy: id: U-RONDO-2027\ntetel: id: T-01 · ugy_id: U-RONDO-2027 · tipus: igeny · owner_email: ba.minta@pelda.example\nreview: tetel_id: T-01 · kriterium: K4 forráshely · eredmeny: PASS' },
      { aktiv: 'te', buborek: 'Mit várok?', szamlalo: 'Próbák', szoveg: 'Jön a próba. Az elvárt eredményt a próba előtt mondjátok ki, nem utána.', pelda: 'tesztjegyzek.md, 4. sor, még a próba előtt:\n4 | Rekordjog | Elvárt eredmény: „A szerver elutasítja; a saját tétel módosítható” | Kapott eredmény: (még üres)' },
      { tol: 'app', ig: 'te', csomag: 'visszajön?', szaggatott: true, szin: 'accent', iv: -0.2, szamlalo: '1. próba', szoveg: '1. próba, tartós adat: frissítés után a tételek ugyanazzal az azonosítóval visszajönnek-e?', pelda: 'Megnyitod a T-01 tételt, frissítesz, majd új munkamenetben visszaolvasod.\nElvárt: „A tételek ugyanazzal az azonosítóval visszajönnek” → a T-01 továbbra is T-01.' },
      { tol: 'app', ig: 'tars', csomag: 'ugyanaz az ügy?', szaggatott: true, szin: 'accent', szamlalo: '2. próba', szoveg: '2. próba, közös használat: a második fiók ugyanazt az ügyet látja-e?', pelda: 'A társad a második fiókkal megnyitja az U-RONDO-2027 ügyet, és új tételt vesz fel; te újratöltesz.\nElvárt: „Mindkét fiók ugyanazt az ügyet látja.”' },
      { tol: 'tars', ig: 'app', csomag: 'más tételét írná', szin: 'figyelj', iv: -0.2, szamlalo: '4. próba', szoveg: '4. próba, rekordjog: a társad megpróbálja módosítani a te tételedet.', pelda: 'Tegyük fel, hogy a T-01 a tiéd: az owner_email mezője a te hitelesített e-mail-címed.\nA társad a saját fiókjával megpróbálja átírni a T-01 leírását.' },
      { tol: 'app', ig: 'tars', csomag: 'elutasítja?', szaggatott: true, szin: 'figyelj', szoveg: 'A szerver elutasítását kell látnod, nem a gomb hiányát. Egy elrejtett gomb nem védelem.', pelda: 'Te ezt rögzíted: „4. próba, rekordjog. Elvárt: a szerver elutasítja, ha a párom tételét módosítanám; a saját tételem módosítható.\nKapott: …”' },
      { tol: 'te', ig: 'jegyzek', csomag: 'kapott eredmény', szin: 'tipp', iv: 0.14, szamlalo: '', szoveg: 'A jegyzékbe az kerül, amit megfigyeltél. Ha eltér a várttól, az FAIL; amit nem próbáltál ki, az NEM TESZTELT, nem PASS.', pelda: 'tesztjegyzek.md:\n4 | Rekordjog | A szerver elutasítja; a saját tétel módosítható | … (amit megfigyeltél) | PASS vagy FAIL\n7 | Appkapcsolat | … | – | NEM TESZTELT (ma nem végezzük)' },
      { aktiv: 'app', buborek: 'nincs Sites?', szoveg: 'Ha a Sites két percen belül nem érhető el: helyi prototípus. Kiesik a tartós adatbázis és a hitelesítés, a módszer azonos.', pelda: 'Te: „B: helyi prototípus” → Tananyag/04 usecase RONDO/sites/prototipus.html\ntesztjegyzek.md: Út: helyi prototípus (tartalék) · Kiesett funkció: tartós adatbázis, hitelesítés' },
      { tol: 'forras', ig: 'te', csomag: 'státusz az R2-ből', szin: 'kesz', iv: 0, ido: 4400, szoveg: 'Zárás: a státusz az R2 eredményével egyezik. Innen a Sales-Account sáv a B fázissal folytatja, a BA-sáv a 6b gyakorlattal.', pelda: 'tétel | R2 eredménye | státusz | egyezik?\nT-01 | PASS | review-n_atment | ✅ (például; a te R2-d szerint)\nMentve: Munka/06-Sites/rekordok.md, tesztjegyzek.md' }
    ]
  });

  /* 2. B fázis (csak Sales-Account): egy hiba javítása újraméréssel, tételek, következő lépés, export */
  M.jelenet('ugykoveto-b-fazis', {
    tipus: 'aramlas',
    cim: 'B fázis, Sales-Account: egy hiba, egy javítás, egy újramérés, majd tételek és export',
    pelda: 'Sales-Account: a tesztjegyzék egy FAIL próbája (például a 4., rekordjog) és a saját tételeid',
    meret: [1000, 600],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'Sales-Account|sáv', ikon: 'ember', x: 135, y: 300, szin: 'jegyezd' },
      { id: 'app', nev: 'Ügykövető', alcim: 'Site vagy helyi|prototípus', ikon: 'adatbazis', x: 500, y: 150, szin: 'accent', w: 210 },
      { id: 'jegyzek', nev: 'Jegyzék', alcim: 'tesztjegyzek.md:|előtte és utána', ikon: 'naplo', x: 860, y: 150, szin: 'tipp', w: 200 },
      { id: 'rekord', nev: 'Rekordok', alcim: 'tétel, forráshely,|következő lépés', ikon: 'tablazat', x: 500, y: 470, szin: 'kesz', w: 210 },
      { id: 'export', nev: 'Export', alcim: 'CSV vagy JSON,|Munka/06-Sites', ikon: 'mappa', x: 860, y: 470, szin: 'kesz', w: 200 }
    ],
    lepesek: [
      { aktiv: 'jegyzek', buborek: 'FAIL vagy NEM TESZTELT', szamlalo: 'Javítás', szoveg: 'A B fázis a jegyzék egy FAIL vagy NEM TESZTELT próbájával indul. Te választod ki, melyiket javítjuk.', pelda: 'tesztjegyzek.md, például: 4 | Rekordjog | … | FAIL · 7 | Appkapcsolat | – | NEM TESZTELT\nTe: „A: a FAIL próbát javítjuk.”' },
      { tol: 'te', ig: 'app', csomag: 'javítási kérés', szin: 'jegyezd', szoveg: 'Fókuszált javítási kérést írsz egyetlen hibára. Új funkció nem kerül be.', pelda: 'Te (a váz, a folytatást te írod):\n„A tesztjegyzék <n>. próbája <FAIL / NEM TESZTELT>.\nJavítsd úgy a Site-ot, hogy …”' },
      { aktiv: 'app', buborek: 'mentve, deploy nélkül', jelzo: { szereplo: 'app', szoveg: 'új verzió' }, szoveg: 'A javított verzió azonosítót kap. A verziót deploy nélkül mentjük.', pelda: 'Válasz, a forma: „Javított verzió: <verzióazonosító>, deploy nélkül mentve”\ntesztjegyzek.md, 1. Környezet: Verzióazonosító: <a mentett verzió azonosítója>' },
      { tol: 'te', ig: 'app', csomag: 'ugyanaz a próba', szin: 'jegyezd', iv: -0.2, szoveg: 'Ugyanazt a próbát futtatod újra. A javítás akkor igazolt, ha ugyanarra a próbára más eredményt kapsz.', pelda: 'Ha a 4. próbát javítottátok: a társad újra megpróbálja módosítani a te tételedet.\nAz elvárt eredmény változatlan: „A szerver elutasítja; a saját tétel módosítható.”' },
      { tol: 'app', ig: 'jegyzek', csomag: 'új sor', szin: 'tipp', szoveg: 'A próba új sora a jegyzékbe kerül: előtte és utána, a verzióazonosítóval. Ha nem javult, FAIL marad, és nyitott tételként látszik.', pelda: '<n>. próba – előtte: FAIL (a megfigyelt eredménnyel)\nJavított verzió: <verzióazonosító>, deploy nélkül mentve\nUtána: … (amit megfigyeltél) → PASS vagy FAIL' },
      { tol: 'te', ig: 'app', csomag: 'három tétel', szin: 'jegyezd', szamlalo: 'Tételek', szoveg: 'Legfeljebb három ajánlati tételt vagy kockázatot töltesz be, és újratöltés után visszaolvasod.', pelda: 'Te: „A: a kalkuláció két legnagyobb hatású tétele és a legfontosabb nyitott kockázat.”\nT-… | ajanlati_tetel | … | forrás: a saját v2 kalkulációd, hely\nT-… | kockazat | … | forrás: fájl és hely' },
      { tol: 'app', ig: 'rekord', csomag: 'státusz az R2-ből', szin: 'kesz', szoveg: 'A státusz az R2-ből jön: review-n_atment csak R2 PASS esetén, különben nyitott_kerdes. A hiány „Nincs megadva”.', pelda: 'T-… | ajanlati_tetel | … | review-n_atment (csak R2 PASS esetén)\nT-… | kockazat | … | nyitott_kerdes\nReview-sor: T-… | K4 forráshely | PASS | <idézett hely vagy script-kimenet> | R2' },
      { tol: 'te', ig: 'rekord', csomag: 'következő lépés', szin: 'jegyezd', iv: 0.2, szoveg: 'Minden tételhez egy következő lépés: ki végezné, mi a bemenete, a kimenete, az írási határa. Ez javaslat, nem vállalás.', pelda: 'tetel_id | Következő lépés | Ki végezné | Bemenet | Elvárt kimenet | Írási határ\nTe: „A T-… sorában a »Ki végezné« nálunk nincs eldöntve: írd azt, hogy Nincs megadva.”' },
      { tol: 'rekord', ig: 'export', csomag: 'export', szin: 'kesz', szamlalo: 'Lezárás', szoveg: 'Zárás: az export a Munka/06-Sites mappába kerül. A sorok száma egyezik a rekordokéval.', pelda: 'Munka/06-Sites/ÉÉÉÉ-HH-NN_ugykovetes_export.csv\nÖsszesítő: PASS: … · FAIL: … · NEM TESZTELT: … · a sorok száma egyezik a rekordokéval ✅' },
      { aktiv: 'te', buborek: 'a „kész” nem publikálás', ido: 4400, szoveg: 'A Site-ot nem töröljük, és nem publikáljuk nyilvánosan: a „kész” nem publikálási engedély.', pelda: 'Te: „A: ahogy van, mentsd.”\nA zárás: „A Site-ot nem töröltem, és nem publikáltam nyilvánosan.” · Nyitva marad: … (a nyitott tételek felsorolva)' }
    ]
  });
})();

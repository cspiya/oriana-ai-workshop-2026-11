/* Wenova workshop – az ügyfélprofil use case-ek (uc1: Prompt Workbook, uc2: ügyfélprofil agent) mozgó ábrái.
   Betöltés: a wenova-motion.js UTÁN. Minden állítás a két útmutató szövegéből származik. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* uc1: a négy prompt lánca ugyanabban a beszélgetésben; minden kör után te nézed meg az eredményt */
  M.jelenet('uc1-promptlanc', {
    tipus: 'aramlas',
    cim: 'A négy prompt lánca ugyanabban a beszélgetésben: cégnévtől az interaktív ügyfélprofilig',
    meret: [1000, 590],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'kérsz, megnézed,|pontosítasz', ikon: 'ember', x: 112, y: 300, szin: 'jegyezd' },
      { id: 'ai', nev: 'Beszélgetés', alcim: 'egy AI-környezet,|négy prompt', ikon: 'modell', x: 520, y: 300, szin: 'accent', w: 210 },
      { id: 'forras', nev: 'Források', alcim: 'honlap, cégadat-|oldalak, beszámoló', ikon: 'bongeszo', x: 868, y: 135, szin: 'tipp', w: 196 },
      { id: 'profil', nev: 'Profil', alcim: 'Oriana arculatú|HTML ügyfélprofil', ikon: 'dokumentum', x: 868, y: 470, szin: 'kesz', w: 196 }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: '1. prompt: cégnév', szin: 'jegyezd', szamlalo: '1. prompt', szoveg: 'Egy cégnévvel kezdesz: rövid felkészítőt kérsz a Rondo Hullámkartongyártó Kft.-ről a sales és a BA csapatnak.' },
      { tol: 'ai', ig: 'forras', csomag: 'keresés', szin: 'accent', szoveg: 'A kérés szerint az AI a cég honlapját, a CompanyWall.hu-t és a Cégadatok.hu-t használja, és a magyar céget elkülöníti a cégcsoporttól.' },
      { tol: 'forras', ig: 'ai', csomag: 'adatok, források', szaggatott: true, szin: 'tipp', iv: -0.2, szoveg: 'Visszajönnek az adatok a forráshivatkozásokkal; a feltételezéseket az AI megjelöli.' },
      { tol: 'ai', ig: 'te', csomag: 'első üzleti kép', szaggatott: true, szin: 'accent', iv: -0.2, buborek: 'A magyar cégről szól?', szoveg: 'Megkapod a cégazonosítást, a tömör üzleti helyzetképet és az első forrásokat. Nyiss meg egy találatot: a magyar cégről szól-e?' },
      { tol: 'te', ig: 'ai', csomag: '2. prompt: mélyítés', szin: 'jegyezd', szamlalo: '2. prompt', szoveg: 'Ugyanabban a beszélgetésben kérdezel tovább az első eredményből: gyártás, kapacitás, beruházások, informatikai rendszerek.' },
      { tol: 'ai', ig: 'forras', csomag: 'ellenőrzés több oldalon', szin: 'accent', szoveg: 'Az AI az árbevételt több oldalon ellenőrzi, lehetőleg az eredeti beszámolóval: azonos évet, mutatót és mértékegységet vet össze.' },
      { tol: 'forras', ig: 'ai', csomag: 'eltérések, korlátok', szaggatott: true, szin: 'figyelj', iv: -0.2, szoveg: 'Az eltérések és az ellenőrzés korlátai is visszajönnek. A hiányzó adatot az AI nem becsüli.' },
      { tol: 'ai', ig: 'te', csomag: 'adatok, öt kérdés', szaggatott: true, szin: 'accent', iv: -0.2, buborek: 'Egy adat, két forrás', szoveg: 'Megkapod a forrással és évvel jelölt diagramadatokat és öt találkozókérdést. Egy adatnál nézd meg két forrásban az évet és a mutatót.' },
      { tol: 'te', ig: 'ai', csomag: '3. prompt + HTML-minta', szin: 'jegyezd', szamlalo: '3. prompt', szoveg: 'A megjelenítéshez referenciát mutatsz: csatolod a HTML-mintát, ha a környezet támogatja. A minta csak elrendezési referencia.' },
      { tol: 'ai', ig: 'profil', csomag: 'első változat', szin: 'kesz', jelzo: { szereplo: 'profil', szoveg: 'első változat' }, szoveg: 'Az eddigi kutatásból elkészül az Oriana arculatú HTML ügyfélprofil: mutatókártyák, diagramok, üzleti jelzések, rövid elemzések.' },
      { tol: 'profil', ig: 'te', csomag: 'megnyitott oldal', szaggatott: true, szin: 'kesz', iv: -0.3, buborek: 'Elöl a fontos számok?', szoveg: 'Megnyitod az oldalt, és megnézed: az elején gyorsan láthatók-e a fontos számok és következtetések.' },
      { tol: 'te', ig: 'ai', csomag: '4. prompt: visszajelzés', szin: 'jegyezd', szamlalo: '4. prompt', szoveg: 'A megnyitott oldalra rövid visszajelzést adsz: évválasztó, váltható diagramok, kiválasztható adatpont, CSV-letöltés, nyomtatási nézet.' },
      { tol: 'ai', ig: 'profil', csomag: 'frissített fájl', szin: 'kesz', jelzo: { szereplo: 'profil', szoveg: 'frissített' }, szoveg: 'Az AI finomítja a HTML-t, asztali és mobilnézetben ellenőrzi, és jelzi, mit nem tudott kipróbálni.' },
      { tol: 'profil', ig: 'te', csomag: 'kipróbálás', szaggatott: true, szin: 'kesz', iv: -0.3, ido: 4400, szoveg: 'Kipróbálod: évet és mutatót váltasz, kijelölsz egy adatpontot, megnyitsz egy forráslinket, letöltöd a CSV-t. A kész HTML kutatási pillanatkép.' }
    ]
  });

  /* uc2: a három helyszín közti út: helyi Work-beszélgetés → ügynöklétrehozó beszélgetés → az ügynök saját beszélgetése */
  M.jelenet('uc2-harom-helyszin', {
    tipus: 'aramlas',
    cim: 'A három helyszín közti út: skill és sablon, az ügynök beállítása, próba egy cégnévvel',
    meret: [1000, 640],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'másolsz, döntesz,|ellenőrzöl', ikon: 'ember', x: 118, y: 330, szin: 'jegyezd' },
      { id: 'work', nev: 'Helyi Work', alcim: 'SKILL.md|és sablon', ikon: 'mappa', x: 450, y: 122, szin: 'tipp', w: 224 },
      { id: 'creator', nev: 'Létrehozó', alcim: 'beállítás, fájlok,|állandó utasítás', ikon: 'fogaskerek', x: 838, y: 205, szin: 'elakadas', w: 200 },
      { id: 'ugynok', nev: 'Ügynök', alcim: 'saját|beszélgetése', ikon: 'modell', x: 838, y: 500, szin: 'accent', w: 200 },
      { id: 'fajlok', nev: 'Kimenet', alcim: 'HTML + JSON|+ CSV', ikon: 'dokumentum', x: 450, y: 524, szin: 'kesz', w: 224 }
    ],
    lepesek: [
      { tol: 'te', ig: 'creator', csomag: '0.0: üres ügynök', szin: 'jegyezd', iv: 0.12, szamlalo: '0.0 · kézi lépés', jelzo: { szereplo: 'creator', szoveg: 'üres ügynök' }, szoveg: '0.0: kézzel létrehozol egy új, üres ügynököt, és elnevezed: Oriana ügyfélkutatás. Ez teendő, nem elküldendő prompt.' },
      { tol: 'te', ig: 'work', csomag: '1. prompt', szin: 'jegyezd', szamlalo: '1. lépés · helyi Work', szoveg: '1. lépés: a helyi fájlokat elérő Work-beszélgetésben kéred, hogy az 1-es feladat anyagából készüljön skill és sablon.' },
      { aktiv: 'work', buborek: 'SKILL.md + sablon kész', szoveg: 'Elkészül a SKILL.md és az Oriana_Sablon_Ugyfelprofil.html. Az eredeti Rondo HTML az 1-es mappában változatlan marad.' },
      { tol: 'work', ig: 'creator', csomag: 'SKILL.md + sablon', szin: 'tipp', szamlalo: '2–4. lépés · létrehozó', szoveg: '2–3. lépés: a két fájlt átadod az ügynöklétrehozó beszélgetésnek. A puszta feltöltés még nem tartós hozzárendelés.' },
      { tol: 'te', ig: 'creator', csomag: 'beállítási promptok', szin: 'jegyezd', iv: 0.12, szoveg: 'Promptokkal kéred a meglévő ügynök beállítását: webes kutatás, fájlkészítés, a két fájl hozzárendelése. Új ügynököt nem hozol létre.' },
      { tol: 'creator', ig: 'te', csomag: 'mi mentve, mi kézi', szaggatott: true, szin: 'elakadas', iv: 0.12, szoveg: 'A létrehozó visszajelzi, mit sikerült ténylegesen mentenie, és mi igényel még kézi lépést. Egy prompt nem kapcsol be hiányzó jogosultságot.' },
      { tol: 'te', ig: 'creator', csomag: 'állandó utasítás', szin: 'jegyezd', iv: 0.12, jelzo: { szereplo: 'creator', szoveg: 'beállítva' }, szoveg: '4. lépés: állandó futási utasításként rögzítteted a szabályokat. Egy válaszban megjelenő szöveg önmagában nem bizonyít mentést.' },
      { tol: 'creator', ig: 'ugynok', csomag: 'beállított ügynök', szin: 'elakadas', iv: 0, szoveg: 'Kész a próbára: ugyanaz az ügynök, a skillel, a sablonnal és az állandó utasítással.' },
      { tol: 'te', ig: 'ugynok', csomag: 'egy cégnév', szin: 'jegyezd', iv: -0.1, szamlalo: '5–7. lépés · az ügynök', szoveg: '5. lépés: az ügynök előnézetében vagy saját beszélgetésében csak egy cégnevet küldesz, feladatleírás nélkül.' },
      { aktiv: 'ugynok', buborek: 'legfeljebb két javítási kör', szoveg: 'Az ügynök önállóan kutat, forrást ellenőriz, kitölti a sablont, és szükség esetén legfeljebb két javítási kört végez.' },
      { tol: 'ugynok', ig: 'fajlok', csomag: 'HTML + JSON + CSV', szin: 'kesz', iv: 0, szoveg: 'Megérkezik a letölthető, sablonhű HTML, a kutatas.json és a CSV, rövid korlátlistával. Terv vagy összefoglaló nem kész kimenet.' },
      { tol: 'fajlok', ig: 'te', csomag: 'letöltés, ellenőrzés', szaggatott: true, szin: 'kesz', iv: 0.1, szoveg: '6. lépés: letöltöd a fájlokat, és összeveted a sablonnal: év- és mutatóváltás, pontos értékek, CSV, nyomtatás.' },
      { tol: 'te', ig: 'creator', csomag: 'konkrét eltérés', szin: 'figyelj', iv: 0.12, szamlalo: '7. lépés', szoveg: '7. lépés: ha hibát látsz, a létrehozó beszélgetésben írod le: mi történt, és mi az elvárt eredmény. Új ügynököt nem készítesz.' },
      { tol: 'te', ig: 'ugynok', csomag: 'másik cégnév', szin: 'jegyezd', iv: -0.1, ido: 4400, szoveg: 'A mentett ügynök új beszélgetésében másik cégnevet adsz meg. Siker esetén a teljes folyamat új feladatleírás nélkül is végigfut.' }
    ]
  });
})();

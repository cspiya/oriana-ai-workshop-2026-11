/* Wenova workshop – a 3. gyakorlat (közös munka és megosztás) mozgó ábrái. Betöltés: a wenova-motion.js UTÁN.
   FIKTÍV OKTATÁSI MINTA: a RONDO Hullámkartongyártó Kft. valós cég, a projekt kitalált. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* 1. A páros hozzáféréspróba: a saját anyagból megosztott anyag, a próbából jogmátrix */
  M.jelenet('megosztas-proba', {
    tipus: 'aramlas',
    cim: 'A páros próba: megosztod, a társad kipróbálja, és csak ez kerül a jogmátrixba',
    pelda: 'Páros próba: fiktív RONDO-összefoglaló, beszélgetés-link, olvasási jog (FIKTÍV OKTATÁSI MINTA)',
    meret: [1000, 620],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'megosztasz,|jogot adsz', ikon: 'ember', x: 140, y: 150, szin: 'jegyezd' },
      { id: 'tars', nev: 'Társad', alcim: 'kipróbálja,|megerősíti', ikon: 'ember', x: 860, y: 150, szin: 'elakadas' },
      { id: 'hely', nev: 'Megosztott anyag', alcim: 'beszélgetés-link, közös|projekt vagy Space-oldal', ikon: 'mappa', x: 500, y: 330, szin: 'tipp', w: 290 },
      { id: 'ai', nev: 'Asszisztens', alcim: 'jegyzőkönyvet|vezet', ikon: 'modell', x: 150, y: 500, szin: 'accent', w: 210 },
      { id: 'matrix', nev: 'Jogmátrix', alcim: 'csak ami|kipróbált', ikon: 'tablazat', x: 850, y: 500, szin: 'kesz', w: 200 }
    ],
    lepesek: [
      { tol: 'ai', ig: 'te', csomag: 'fiktív összefoglaló', szin: 'accent', szoveg: 'Az asszisztens két mondatos, fiktív RONDO-összefoglalót ír. Csak fiktív anyagot oszthattok meg, valós ügyfélanyagot soha.',
        pelda: 'Az anyag: két mondat a RONDO README alapján, „FIKTÍV OKTATÁSI MINTA” jelöléssel.\nValós adat nincs benne.' },
      { tol: 'te', ig: 'hely', csomag: 'megosztás', szin: 'jegyezd', szoveg: 'Megosztod a társaddal, és jogot adsz: olvasás, kommentelés vagy szerkesztés, ahol a mód engedi. A projekt és a Space csak akkor, ha a munkatérben elérhető.',
        pelda: 'Te írod: „A: beszélgetés-link és közös projekt. A társamnak olvasási jogot adok.”\nJegyzőkönyv: Elem és mód: beszélgetés, munkatéri link · Mit állítottunk be (jog): olvasás' },
      { aktiv: 'te', buborek: 'Mit várok?', szoveg: 'A próba előtt kimondod a várt eredményt: mit tehet majd a társad az anyaggal?',
        pelda: 'Jegyzőkönyv, „Mit vártunk”: … (ezt a próba előtt ti mondjátok ki)\nPéldául: a társam elolvashatja, de nem szerkesztheti.' },
      { tol: 'tars', ig: 'hely', csomag: 'olvas?', szin: 'elakadas', szamlalo: 'Próba 1 / 3', szoveg: 'A társad a saját fiókjával megpróbálja elolvasni. Közös bejelentkezést nem használtok.',
        pelda: 'A társad megnyitja a linket a saját fiókjával.\nA jogmátrix oszlopa: Olvashat? <igen / nem / nem próbáltuk>' },
      { tol: 'tars', ig: 'hely', csomag: 'kommentel?', szin: 'elakadas', szamlalo: 'Próba 2 / 3', szoveg: 'Megpróbál kommentelni. Az olvasás, a komment és a szerkesztés külön jog, ezért külön próba.',
        pelda: 'A társad megpróbál megjegyzést fűzni az anyaghoz.\nA jogmátrix oszlopa: Kommentelhet? <igen / nem / nem próbáltuk>' },
      { tol: 'tars', ig: 'hely', csomag: 'szerkeszt?', szin: 'elakadas', szamlalo: 'Próba 3 / 3', szoveg: 'Megpróbálja szerkeszteni. A beállítás és a tényleges hozzáférés két külön dolog: ezt csak a próba mutatja meg.',
        pelda: 'A társad megpróbál beleírni az anyagba.\nA jogmátrix oszlopa: Szerkeszthet? <igen / nem / nem próbáltuk>' },
      { tol: 'tars', ig: 'te', csomag: 'ezt tapasztaltam', szaggatott: true, szin: 'elakadas', iv: 0.18, szamlalo: '', szoveg: 'A társad elmondja mindhárom eredményt. Az asszisztens nem látja a képernyőjét: a forrás a társad megerősítése.',
        pelda: 'Jegyzőkönyv: Mit tapasztalt a másik fél: <olvas / komment / szerkeszt / nem fér hozzá> · a pár megerősítette ✅' },
      { tol: 'te', ig: 'ai', csomag: 'várt + tapasztalt', szin: 'jegyezd', iv: -0.2, szoveg: 'Az asszisztens jegyzőkönyvbe írja: a várt és a tapasztalt eredmény külön áll, az eltérés megnevezve.',
        pelda: 'Munka/03-Kozos/megosztasi-proba.md: Mit vártunk: … · Mit tapasztalt a másik fél: … · Eltérés a várttól: …, vagy: nincs\nUtána új üzenet: látszik-e a másiknak? igen / nem / nem próbáltuk' },
      { tol: 'ai', ig: 'matrix', csomag: 'kipróbált sorok', szin: 'kesz', iv: 0.14, szoveg: 'A jegyzőkönyvből lesz a jogmátrix: minden sora visszavezethető egy próbasorra.',
        pelda: 'Munka/03-Kozos/jogmatrix.md egy sora:\negy beszélgetés | link | a párod | … | … | … | Nincs megadva | a pár megerősítette ✅ (a jegyzőkönyv sora)' },
      { aktiv: 'matrix', buborek: '„nem próbáltuk”', szoveg: 'Ami nem volt kipróbálva, az „nem próbáltuk”; ami nem látszik, az „nem látszik a munkatérben”. Feltételezés nem kerül a mátrixba.',
        pelda: 'A ki nem próbált elem sora:\negy Space-oldal | View / Comment / Edit | … | nem próbáltuk | nem próbáltuk | nem próbáltuk | Nincs megadva | ⚠️ nem próbáltuk' },
      { aktiv: 'te', buborek: 'Ki dönt az új hozzáférésről?', ido: 4400, szoveg: 'A hozzáférési szabályt ti mondjátok ki a pároddal: kik olvashatják, kik szerkeszthetik, ki dönt az új hozzáférésről.',
        pelda: 'Ti írjátok: „Kik olvashatják az ügy anyagait: …\nKik szerkeszthetik: …\nKi dönti el, hogy egy új ember hozzáférést kap: … (név, vagy: Nincs megadva)”' }
    ]
  });

  /* 2. A csapatfeladat: kinek a jogán fut, mit nem örököl, hol az írási határ és az emberi döntési pont */
  M.jelenet('csapatfeladat-hatar', {
    tipus: 'aramlas',
    cim: 'A csapatfeladat nem a te fejeddel fut: írási határ és emberi döntési pont',
    pelda: 'Csapatfeladat-szöveg: heti ügyállapot-összesítő a RONDO-megújítási ügyről (FIKTÍV OKTATÁSI MINTA)',
    meret: [1000, 580],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'megírod a|feladat szövegét', ikon: 'ember', x: 115, y: 300, szin: 'jegyezd' },
      { id: 'feladat', nev: 'Csapatfeladat', alcim: 'szolgáltatásfiókkal,|felhőben fut', ikon: 'ora', x: 505, y: 300, szin: 'elakadas', w: 250 },
      { id: 'hely', nev: 'Kijelölt hely', alcim: 'ide írhat', ikon: 'dokumentum', x: 855, y: 140, szin: 'kesz', w: 240 },
      { id: 'kivul', nev: 'Azon kívül', alcim: 'máshová írna|vagy küldene', ikon: 'level', x: 855, y: 460, szin: 'figyelj', w: 240 }
    ],
    lepesek: [
      { aktiv: 'te', buborek: 'memória, előzmények', szoveg: 'Nálad ott a memóriád, az utasításaid és az előzményeid. A csapatfeladat (Team Tasks, ha a munkatérben elérhető) ezeket nem örökli.',
        pelda: 'A szöveg nem hivatkozhat a memóriádra vagy a korábbi beszélgetéseidre: a feladat csak azt tudja, ami a szövegében áll.\nA minta: Feladatok/mellekletek/03-heti-osszesito-feladatszoveg.md' },
      { tol: 'te', ig: 'feladat', csomag: 'feladatszöveg', szin: 'jegyezd', szoveg: 'Ezért mindent a szövegbe írsz, amire a feladatnak szüksége van. A szöveg önmagában is érthető: nem hivatkozik az előzményekre.',
        pelda: '„Cél. Minden hét végén készíts rövid ügyállapot-összesítőt a RONDO-megújítási ügyről (FIKTÍV OKTATÁSI MINTA): hol tart az ügy, mi változott a múlt héthez képest, mi a nyitott kérdés.”' },
      { aktiv: 'feladat', buborek: 'kinek a jogán futok?', szoveg: 'A feladat a csapat szolgáltatásfiókjával, felhőben fut, ütemezésre vagy eseményre indul. Feladatonként külön jog nem állítható.',
        pelda: '„Címzett. A RONDO-ügy csapata (<a megosztási kör, a jogmátrix szerint>).”\n„Forrás és határ. Kizárólag a következő, a csapat által elérhető források: <…>. Más forrásból nem dolgozol.”' },
      { tol: 'feladat', ig: 'hely', csomag: 'heti összesítő', szin: 'kesz', szoveg: 'A heti ügyállapot-összesítőt a kijelölt helyre írja. Ez az írási határ, amelyet te írtál le előre.',
        pelda: '„Írási határ. Csak a kijelölt kimeneti helyre írhatsz: <például: a csapat Space-oldalának »Heti összesítő« aloldala>.”\nA cím formátuma: ÉÉÉÉ-HH-NN_heti_osszesito' },
      { tol: 'feladat', ig: 'kivul', csomag: 'írna vagy küldene', szaggatott: true, szin: 'figyelj', szoveg: 'És ha a kijelölt helyen kívül akarna írni vagy küldeni? Ez az emberi döntési pont.',
        pelda: 'A minta szövege erre az esetre: „Üzenetet, e-mailt vagy külső módosítást nem küldesz.”' },
      { tol: 'feladat', ig: 'te', csomag: 'megálljon?', szaggatott: true, szin: 'figyelj', iv: -0.2, buborek: 'Te döntöd el előre', szoveg: 'Te döntöd el előre, a szövegben: megáll és jóváhagyást kér, vagy egyáltalán nem küldhet, csak a kijelölt helyre írhat.',
        pelda: 'A minta mondata: „Ha a feladatod írni vagy küldeni akarna a kijelölt helyen kívül, megállsz, és jóváhagyást kérsz.”\nTe írod: „Ha a kijelölt helyen kívül írna vagy küldene: A / B / más: …”' },
      { aktiv: 'hely', buborek: 'az új tag is látja', szoveg: 'Az új csapattag látja a korábbi futásokat és fájlokat: ezt is tudnia kell a csapatnak.',
        pelda: 'jogmatrix.md, 5. szakasz (csapatfeladat-váz):\nKi látja a kimenetet? <…> · Ki a feladat gazdája? <név vagy Nincs megadva>' },
      { aktiv: 'te', buborek: 'él az ütemezés?', ido: 4400, szoveg: 'Azt, hogy az ütemezés él, csak akkor állítjuk, ha láttad az ütemezett listában. Élő ütemezést ma nem kötelező indítani.',
        pelda: 'jogmatrix.md, 5. szakasz, „Állapot”:\nmentett szöveg, ütemezés nélkül / ütemezve (a résztvevő látta az ütemezett listában) / nem látszik a munkatérben' }
    ]
  });
})();

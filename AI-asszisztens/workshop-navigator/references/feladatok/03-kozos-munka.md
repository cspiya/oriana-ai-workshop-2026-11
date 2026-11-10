---
id: "03"
cim: "Közös munka és megosztás: ki fér hozzá az ügy anyagaihoz?"
blokk: 3
ido: "11:00-11:25"
vezeti: "Piya Csaba; körbejár: Kemény Krisztián"
sav: "közös"
munkamappa: "Munka/03-Kozos"
modell: "GPT-6 Luna"
ajanlott_mod: kozos
fazisok: ["egy fázis: 11:00 appkapcsolat, páros hozzáféréspróba, csapatfeladat-váz, jogmátrix"]
inditok: ["Kezdjük a 3. gyakorlatot"]
proaktiv_elem: ["megosztás és jogok (Space, közös projekt, beszélgetés-link), ha a munkatérben elérhető", "Team Tasks: a heti ügyállapot-összesítő mint csapatfeladat szövege, ha a munkatérben elérhető", "Agents webes Preview, ha a munkatérben elérhető"]
eredmeny: ["E4"]
forrasok:
  - "Munka/00-Alapozas/profil.md"
  - "Tananyag/04 usecase RONDO/README.md (fiktív ügyanyag a próbához)"
  - "Munka/02-Portal/osszevetes.md (ha elkészült; különben a README adja a próbaanyagot)"
kimenetek:
  - "Munka/03-Kozos/jogmatrix.md"
  - "Munka/03-Kozos/megosztasi-proba.md"
mellekletek:
  - "Feladatok/mellekletek/03-jogmatrix-sablon.md"
  - "Feladatok/mellekletek/03-heti-osszesito-feladatszoveg.md"
glosszarium: ["plugin", "Projekt és projektutasítás", "Space", "Team Tasks", "Agents", "RONDO", "BA", "Sales-Account"]
fopproban_ellenorizendo: nincs
b_terv: "A Space, az Agents vagy a Team Tasks nem látszik a munkatérben: a páros próba közös projekttel vagy az Oriana szabályai szerint engedélyezett fájlátadással történik; a csapatfeladat szövege mentett szövegként készül el (ütemezés nélkül), a tréner képsort mutat a nem látszó felületről; a jogmátrixban a kiesett elem neve és a „nem látszik a munkatérben” jelölés áll."
---

# Cél

Az ügy anyagai (a gyakorlatban a kitalált RONDO-eset) csak akkor szolgálják a csapatot, ha az is tudható, ki fér hozzájuk: ki olvashat, ki szerkeszthet, és melyik kapcsolat vagy csapatfeladat milyen jogosultsággal dolgozik. A RONDO Hullámkartongyártó Kft. valós cég; a gyakorlóeset projektje kitalált. Egy társaddal ténylegesen kipróbálod a megosztási szinteket, és elkészíted a jogmátrixot; nem építünk teljes integrációt.

# Indítás

A résztvevő az `Oriana AI-workshop` projekt új Work-beszélgetésében ezt írja: „Kezdjük a 3. gyakorlatot.” Az AI első üzenete kérdés nélkül, számozva:

1. **Cél:** a társaddal kipróbáljátok, ki mit lát és mit ír a megosztott anyagokban, és közösen felírjátok a hozzáférési szabályt a [jogmátrixba](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md).
2. **Út:** plugin- és appkapcsolat áttekintése, kb. 5 perc · páros hozzáféréspróba, kb. 8 perc · csapatfeladat folyamatváza (és, ha a munkatérben elérhető, az Agents webes előnézete), kb. 7 perc · jogmátrix és szabály, kb. 5 perc.
3. **Hová jutunk:** a [jogmatrix.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md) és a [megosztasi-proba.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/megosztasi-proba.md).
4. **Mit tanulunk:** a megosztás három szintjét (beszélgetés, projekt, Space-oldal vagy mentett dokumentum), azt, hogy az olvasás, a kommentelés, a szerkesztés és az appengedély külön jog, és azt, hogy a megosztás hatását a tényleges próba mutatja meg. A hat lépésből az Ellenőrzést és a Rögzítést gyakoroljuk, a promptot a hét elem szerint építed fel (Cél → Címzett → Forrás és határ → Kimeneti séma → Szabályok → Ellenőrzés → Mentés).
5. **Hová mentek:** A kimeneteket a [Munka/03-Kozos](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/) mappába mentem, a [Tananyagot](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/) nem módosítom. A próbához csak fiktív anyagot osztunk meg; a kimeneteken: FIKTÍV OKTATÁSI MINTA.

Ugyanebben az üzenetben egy sor a módról: „Ajánlott mód: közös. A kulcslépéseknél üres vázat kapsz a hét elemmel, te a saját szavaiddal kitöltöd, én ellenőrzöm és futtatom. Elakadtál? Adj tippet · Mutasd a mintát · Írd meg helyettem és futtasd. Módot így váltasz: Váltsunk vezetett / önálló módra.” Ha a profilban más tanulási mód szerepel, az AI azt használja, és ezt egy sorban közli. A rövidítéseket és szakkifejezéseket az első előfordulásnál egy tagmondattal feloldom a glosszárium szerint.

Az AI beolvassa a [profil.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/00-Alapozas/profil.md) fájlt, és egy sorban, ✅/⚠️ jelöléssel közli a sávot, a módot és az önállósági szintet. Ezután azonnal jön az 1. lépés.

# Lépések

## 1. lépés / 4 – Plugin- és appkapcsolat: ki mit lát (kb. 5 perc, közös)

- Kulcslépés: nem
- Mit csinál az AI: 1. lépés / 4 – Plugin- és appkapcsolat. Elmondja, hogy a plugin (telepíthető bővítménycsomag, amely skilleket és külső rendszerekhez kapcsolódó eszközöket foghat össze) és az app kapcsolata azzal a jogosultsággal dolgozik, amelyet a kapcsolt fiók ad; ez túlmehet a te személyes hozzáférésed határán. A munkatéri kapcsolatot (workspace connection) a munkatér adminisztrátora hozza létre és engedélyezi; a csapatfeladat (Team Tasks) ezt használja. Nem készítünk teljes integrációt, csak feltérképezzük, mi látszik és kinek a jogán fut. Mivel a ChatGPT beállításait az AI nem látja, egy kérdést tesz fel a résztvevőnek.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): Ne találgasd a résztvevő beállításait; menünevet ne találj ki. Egyetlen kérdés opciókkal a látható kapcsolatokról. A Team Tasks első említésekor oldd fel: Team Tasks: ütemezésre vagy eseményre induló közös csapatfeladatok, amelyek a csapat szolgáltatásfiókjával futnak. Mondd ki: a kapcsolat a kapcsolt fiók jogosultságával dolgozik, ezért a hozzáférés nem „enyém vagy a csapaté”, hanem a kapcsolt fiók joga. Jelszót vagy hozzáférési kulcsot ne kérj.
- Mit futtat az AI? Cél: a résztvevő tudja, milyen kapcsolatok látszanak a munkatérben és kinek a jogán futnak · Címzett: a résztvevő · Forrás és határ: a résztvevő saját képernyője és válasza; találgatás nincs · Kimeneti séma: egy sor kapcsolatonként: kapcsolat | kinek a jogán dolgozik | látszik-e nálam · Szabályok: ami nem látszik, „nem látszik a munkatérben”; hiány „Nincs megadva” · Ellenőrzés: minden sorban van látszik/nem látszik · Mentés: a jogmátrix 2. szakasza a 4. lépésben. Miért így épül fel: a saját képernyő a forrás, ezért az AI nem állít semmit a beállításokról, amit a résztvevő nem látott.
- Bekérendő paraméter(ek): Egy választás: „Mi látszik nálad a kapcsolt appok között? A: dokumentumtár vagy fájlmegosztó · B: levelezés vagy naptár · C: csapatüzenet-felület · D: nem látszik kapcsolat · más: írd le (több is lehet).”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 1. lépésnél tartunk a négyből; most a kapcsolatokat nézzük, utána a társaddal kipróbáljátok a megosztást.” A kapcsolat-táblát és a kérdést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium: minden megnevezett kapcsolat mellett áll, hogy kinek a jogán dolgozik és látszik-e a résztvevőnél. Forrás-visszakeresés: a résztvevő saját képernyője, nem az AI állítása. Ellenőrzés: az AI a táblát ✅/⚠️ jelöléssel közli, és a „látszik” sorokat a résztvevő megerősíti.
- Kimenet (fájl): Nincs külön fájl; a sorok a [jogmatrix.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md) 2. szakaszába kerülnek.
- Miért fontos (az AI elmondja): A kapcsolt rendszerbe írás vagy olvasás mindig valakinek a jogán történik; ha ezt nem tudod, nem tudod megmondani, ki mit láthat.
- Ha nem elérhető: ha a munkatérben nem látszik kapcsolat, a sor `nem látszik a munkatérben` jelölést kap, a tréner képsort mutat a kapcsolatnézetről, és a jogmátrix 2. szakasza a képsor alapján, „képsor alapján” jelöléssel készül.

## 2. lépés / 4 – Páros hozzáféréspróba (kb. 8 perc, közös)

- Kulcslépés: igen
- Mit csinál az AI: 2. lépés / 4 – Páros hozzáféréspróba. A résztvevő egy társsal párt alkot. Az egyik fél (A) létrehoz egy rövid, fiktív anyagot: az AI a [RONDO README](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/README.md) alapján két mondatos összefoglalót ír az esetről, és A megosztja a társával (B). A megosztás három szintje, amelyekből A kettőt választ: (1) **beszélgetés** megosztása linkkel (munkatéri link, amely a munkatér tagjainak nyílik meg; ha a megosztás után új üzenet kerül a beszélgetésbe, látszik-e B-nek? ezt a próba dönti el), (2) **közös projekt**, ha a munkatérben elérhető (jogok: Chat vagy Edit; az Edit utasítást és fájlt módosíthat), (3) **Space-oldal**, ha a munkatérben elérhető (jogok: View, Comment, Edit; a hozzáférés öröklődik az oldalakra). B megpróbál olvasni, kommentelni, szerkeszteni, és mindhárom eredményt elmondja. Az AI a jegyzőkönyvbe írja, B erősíti meg.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): Csak fiktív anyagot oszthat meg a pár, valós ügyfélanyagot soha. Az AI nem látja B képernyőjét: az eredményt B szóbeli vagy írásbeli megerősítése adja, és ezt „a pár megerősítette” jelöléssel rögzítsd. Ne állítsd, hogy a beszélgetés-link pillanatkép: kérd, hogy a pár kipróbálja. A Space-et és a közös projektet csak akkor említsd lehetőségként, ha a résztvevő látja. A Space első előfordulásakor oldd fel: Space: közös ChatGPT-munkafelület dokumentumok, diák, táblázatok, Sites és fájlok rendezésére és közös használatára. A kommentben megidézett asszisztens (például @ChatGPT) a címzett ellenőrzése nélkül ne küldjön semmit. Közös bejelentkezést ne javasolj; mindenki a saját fiókjával dolgozik. Mentés előtt mutasd az effektív utasítást.
- Mit futtat az AI? Cél: kipróbált (nem feltételezett) hozzáférési jogok két megosztási szinten · Címzett: a pár, és a jogmátrix · Forrás és határ: egy fiktív, két mondatos anyag a RONDO README alapján; valós adat nincs · Kimeneti séma: a megosztási próba jegyzőkönyve: dátum, pár, elem és mód, beállított jog, várt eredmény, tapasztalt eredmény, eltérés, utólagos üzenet látszik-e, nem kipróbált elemek · Szabályok: a próba eredménye a pár megerősítése; ami nem volt kipróbálva, `nem próbáltuk`; ami nem látszik, `nem látszik a munkatérben` · Ellenőrzés: minden kipróbált elemnél van várt és tapasztalt oszlop, és a pár megerősítése · Mentés: [megosztasi-proba.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/megosztasi-proba.md), ütközésnél `_v2`. Miért így épül fel: a hozzáférést a tényleges próba bizonyítja, nem az, amit a beállítás neve sugall, és a várt/tapasztalt oszlop mutatja meg az eltérést.
- Tipp-létra: 1. „Mit vársz, ki mit tehet a megosztott anyaggal, és mi lehetne a próba, amely ezt igazolja vagy cáfolja?” · 2. „Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: …” · 3. „Készíts jegyzőkönyvet a páros próbáról a 03-jogmatrix-sablon.md 3. szakasza szerint: elem és mód <beszélgetés / projekt / Space-oldal>, beállított jog <…>, várt eredmény <…>, a társam tapasztalata (olvas / komment / szerkeszt / nem fér hozzá), eltérés a várttól; ami nem volt kipróbálva, írd: nem próbáltuk.”
- Bekérendő paraméter(ek): Két paraméter: melyik két megosztási szintet próbáljátok ki (A: beszélgetés-link és közös projekt · B: beszélgetés-link és Space-oldal · C: csak a beszélgetés-link, mert más nem látszik · más: írd le), és milyen jogot adsz a társadnak (olvasás, kommentelés vagy szerkesztés, ahol a mód engedi).
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 2. lépésnél tartunk a négyből; most a társaddal próbáljátok ki a megosztást, utána a csapatfeladatot nézzük.” Az üres jegyzőkönyvet, majd a pár megerősítésével kitöltött változatot.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium: legalább két megosztási szintre van kipróbált sor, mindegyiknél a várt és a tapasztalt eredmény különválasztva, az eltérés (ha volt) megnevezve; az olvasás, a komment, a szerkesztés külön sor vagy oszlop. Forrás-visszakeresés: a pár tapasztalata (B megerősítése); az AI a jegyzőkönyvet a saját képernyőid alapján nem tudja ellenőrizni. Ellenőrzés: az AI ✅/⚠️ jelöléssel közli, melyik sorhoz van pár általi megerősítés.
- Kimenet (fájl): [megosztasi-proba.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/megosztasi-proba.md).
- Miért fontos (az AI elmondja): A megosztás beállítása és a tényleges hozzáférés két külön dolog; csak a próba mutatja meg, hogy a másik fél valóban azt látja és csak azt írhatja, amit szántál neki.
- Ha nem elérhető: ha a Space vagy a közös projekt nem látszik, vagy a pár nem tud belépni, két perc után a pár közös projekttel vagy az Oriana szabályai szerint engedélyezett fájlátadással próbál, és a kiesett elem a jegyzőkönyvben `nem látszik a munkatérben` jelölést kap; a tréner képsort mutat a Space-ről. A módszer (várt és tapasztalt eredmény, pár megerősítése) ugyanaz.

## 3. lépés / 4 – Csapatfeladat folyamatváza és az Agents előnézete (kb. 7 perc, közös)

- Kulcslépés: igen
- Mit csinál az AI: 3. lépés / 4 – Csapatfeladat folyamatváza. Elmondja, hogy a Team Tasks csapatfeladat ütemezve vagy eseményre indulhat, a csapat szolgáltatásfiókjával fut felhőben, ezért **nem örökli** a létrehozó memóriáját, utasításait és előzményeit; mindent, amire szüksége van, az utasításnak kell tartalmaznia. Feladatonként külön jog nem állítható, és az új csapattag látja a korábbi futásokat és fájlokat. A heti ügyállapot-összesítő szövegét a [03-heti-osszesito-feladatszoveg.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/03-heti-osszesito-feladatszoveg.md) adja kiindulásnak. A résztvevő saját szavaival megírja a szöveg három részét: a címzettet (ki látja), az írási határt (hová írhat és hová nem) és azt, mi történjen, ha a feladat írni vagy küldeni akarna. Az Agents oldalról is szó esik: az Agents (a munkatérben meghatározott feladatra beállítható asszisztens, amely utasításokat, tudást, skilleket és kapcsolt appokat használ) az oldalsávban a desktop alkalmazásban nem mindig látszik, ilyenkor weben ellenőrizd; ha a munkatérben elérhető, weben a Preview a megosztás előtti próba, a jogok Owner, Can edit és Can chat, és az Update új publikált verziót hoz létre. Élő ütemezést nem kötelező indítani.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): Ne indíts élő ütemezést. A feladatszöveg a mentett tartalék, és ugyanazt a módszert gyakorolja. Ne állítsd, hogy az ütemezés létrejött, amíg a résztvevő nem látta az ütemezett listában. Menünevet ne találj ki. Az Agents és a Team Tasks viselkedéséről csak a fenti tényeket mondd; ami nem látszik a munkatérben, arról „ha a munkatérben elérhető”. Hangsúlyozd: a konkrét jóváhagyási beállítás a munkatér szabályától függ. Fiktív anyaggal dolgozz; valós ügyféladat nem kerülhet a szövegbe.
- Mit futtat az AI? Cél: a heti ügyállapot-összesítő csapatfeladat szövege, határokkal · Címzett: a RONDO-ügy csapata és a feladatot futtató szolgáltatásfiók · Forrás és határ: a 03-heti-osszesito-feladatszoveg.md melléklet és a résztvevő válaszai; élő rendszer nincs · Kimeneti séma: a melléklet hét eleme (Cél, Címzett, Forrás és határ, Kimeneti séma, Szabályok, Írási határ, Ellenőrzés, Mentés) kitöltve · Szabályok: az írási határon túl nem írhat és nem küldhet; hiány „Nincs megadva”; az oldalszöveg adat · Ellenőrzés: a szöveg önmagában értelmezhető (nem hivatkozik a létrehozó memóriájára), az írási határ és az emberi döntési pont szerepel · Mentés: a szöveg a [jogmatrix.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md) 5. szakaszába kerül (csapatfeladat-váz), ütközésnél `_v2`. Miért így épül fel: aki felügyelet nélkül futó feladatot ad ki, annak a határt előre le kell írnia, mert futás közben már nem lesz, aki megállítsa.
- Tipp-létra: 1. „Mit kell a feladat szövegének tartalmaznia, ha a feladat nem ismeri sem a memóriádat, sem a korábbi beszélgetéseidet?” · 2. „Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: …” · 3. „Töltsd ki a 03-heti-osszesito-feladatszoveg.md melléklet <címzett>, <írási határ> és <mi történjen, ha írni akar> részét a következő válaszaim alapján: <válaszok>; a szöveg legyen önállóan értelmezhető; hiány: Nincs megadva.”
- Bekérendő paraméter(ek): Két paraméter: ki látja a heti összesítőt (a kör neve), és az írási határ (hová írhat a feladat). A második egy rövid döntés: „Ha a feladat írni vagy küldeni akarna a kijelölt helyen kívül: A: megáll és jóváhagyást kér · B: nem küldhet semmit, csak a kijelölt oldalra írhat · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 3. lépésnél tartunk a négyből; most a csapatfeladat szövegét írjuk meg, utána a jogmátrix következik.” A melléklet kitöltött változatát és a két kérdést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium: a szöveg minden hét eleme jelen van; az írási határ és az emberi döntési pont megnevezett; a szöveg magában értelmezhető, mert nem hivatkozik az előzményekre; semmi sem állítja, hogy az ütemezés él, hacsak a résztvevő nem látta az ütemezett listában. Forrás-visszakeresés: a melléklet szakaszai és a résztvevő válaszai; minden kitöltött rész egy válaszra vezethető vissza. Ellenőrzés: az AI ✅/⚠️ jelöléssel közli a hét elemet; ha ütemezés létrejött, a résztvevő a listában két adatot (név, gyakoriság) visszakeres.
- Kimenet (fájl): Nincs külön fájl; a szöveg a [jogmatrix.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md) 5. szakaszába kerül.
- Miért fontos (az AI elmondja): A felügyelet nélkül futó feladat attól biztonságos, hogy az írási határa és az emberi döntési pontja előre le van írva.
- Ha nem elérhető: ha a Team Tasks vagy az Agents nem látszik a munkatérben, a szöveg mentett szövegként marad (ütemezés nélkül), a tréner képsort mutat az Agents oldalról, és a jogmátrix 5. szakasza `nem látszik a munkatérben` jelölést kap; az Agents a desktop alkalmazásban nem mindig látszik: ilyenkor weben ellenőrizd.

## 4. lépés / 4 – Jogmátrix és hozzáférési szabály (kb. 5 perc, közös)

- Kulcslépés: igen
- Mit csinál az AI: 4. lépés / 4 – Jogmátrix és hozzáférési szabály. A [03-jogmatrix-sablon.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/03-jogmatrix-sablon.md) szerkezetében összefoglalja az 1-3. lépés eredményét: soronként elem, megosztás módja, kinek, olvashat, kommentelhet, szerkeszthet, appengedély kell-e, a próba eredménye. A páros közösen megfogalmazza a RONDO-ügy anyagainak hozzáférési szabályát: kik olvashatják, kik szerkeszthetik, ki dönt az új hozzáférésről. Az AI csak javaslatot ad a sor tartalmára; a döntés a páré.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): Csak a tényleges próbából származó vagy a résztvevő által megerősített adat kerüljön a mátrixba; ami nem volt kipróbálva, `nem próbáltuk`. A javaslatot ne kezeld döntésként. A szabályt a páros mondja ki; te formába öntöd. A fiktív jelölés: FIKTÍV OKTATÁSI MINTA a fájl tetején. Meglévő fájlnál új `_v2` név.
- Mit futtat az AI? Cél: a páros próba és a csapatfeladat-váz összefoglalása jogmátrixban és hozzáférési szabályban · Címzett: a pár és a trénerek · Forrás és határ: a [megosztasi-proba.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/megosztasi-proba.md), az 1. lépés kapcsolat-táblája és a 3. lépés szövege; más forrás nincs · Kimeneti séma: a sablon szakaszai: jogmátrix, alkalmazás- és kapcsolatjogok, hozzáférési szabály, csapatfeladat-váz · Szabályok: kipróbálatlan elem `nem próbáltuk`; hiány „Nincs megadva”; a javaslat nem döntés · Ellenőrzés: minden mátrixsor visszavezethető a jegyzőkönyv egy sorára vagy a kapcsolat-tábla egy sorára · Mentés: [jogmatrix.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md), ütközésnél `_v2`. Miért így épül fel: a mátrix csak annyit állíthat, amennyit a próba és a megerősítések alátámasztanak, a „nem próbáltuk” jelölés pedig mutatja a bizonyítatlan részt.
- Tipp-létra: 1. „Melyik megosztási módnál tudtál a párod tapasztalatára hivatkozni, és melyiknél csak feltételezel?” · 2. „Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: …” · 3. „Foglald össze a megosztasi-proba.md és az 1. lépés kapcsolat-táblája alapján a jogmátrixot a 03-jogmatrix-sablon.md szerint; minden sorhoz írd a próba sorát; ahol nem volt próba, írd: nem próbáltuk; a hozzáférési szabályt a páros válaszai alapján, javaslatként add meg.”
- Bekérendő paraméter(ek): Két döntés: „A RONDO-ügy anyagainak hozzáférési szabálya (olvasás, szerkesztés, ki dönt az új hozzáférésről) így jó? A: igen, rögzítsd · B: javítok (írd le, melyik sorban) · más: írd le.” és „Mentsem a mátrixot? A: igen · B: még nézzünk meg egy sort · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 4. lépésnél tartunk a négyből, ez az utolsó; mentés után a 4. gyakorlat következik, a sávodnak megfelelően.” A kitöltött jogmátrixot és a hozzáférési szabály javaslatát.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium: a mátrix legalább két megosztási szinten kipróbált sort tartalmaz, az olvasás, a komment és a szerkesztés külön jelölt; a kipróbálatlan elem `nem próbáltuk`; a hozzáférési szabály megnevezi, ki dönt az új hozzáférésről; minden sor visszavezethető a jegyzőkönyvre. Forrás-visszakeresés: az AI a mátrix soraihoz kikeresi a [megosztasi-proba.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/megosztasi-proba.md) megfelelő sorát (sorlinkkel). Ellenőrzés: ✅/⚠️ soronként; a pár és a résztvevő egy sort személyesen is megerősít.
- Kimenet (fájl): [jogmatrix.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md).
- Miért fontos (az AI elmondja): A jogmátrix tanúsítja, hogy a csapat tudja, ki mit láthat és ír; a kipróbálatlan sor megmutatja, hol van még bizonyítatlan feltételezés.

# Elakadás

- **A Space, az Agents vagy a Team Tasks nem látszik:** az AI nem találgat; két perc után a közös projektre vagy az Oriana szabályai szerint engedélyezett fájlátadásra, a mentett feladatszövegre és a tréner képsorára lép, megnevezi a kiesett funkciót, és a módszert ugyanúgy gyakoroltatja. Az Agents a desktop alkalmazásban nem mindig látszik: ilyenkor weben ellenőrizd.
- **A pár nem lát semmit vagy nem tud belépni:** az AI egy mondatban jelzi, hogy ez a megosztás tényleges eredménye lehet; először a címzett és a jog beállítását ellenőrizteti, utána a tréner segítségét kéri.
- **Nincs pár (páratlan létszám):** a tréner hármas csoportot alakít, vagy a tréner a pár szerepét tölti be; a próbát nem hagyjuk ki.
- **Nem tudható, ki a jóváhagyó vagy a gazda:** az AI nem nevez ki senkit; „Nincs megadva”, és nyitott kérdésként marad.
- **Valós ügyfélanyag került a megosztásba:** az AI megállít, nem menti, és kéri, hogy csak fiktív anyagot osszanak meg; ha már megtörtént, a résztvevő a trénerrel egyezteti a visszavonást.
- **Közös bejelentkezést javasolna valaki:** az AI jelzi, hogy ez nem megoldás: mindenki a saját fiókjával dolgozik, a jogot a megosztás adja.
- **Jelszó vagy hozzáférési kulcs került a beszélgetésbe:** az AI megállít, nem menti, kéri, hogy ne írja le újra.
- **Az ütemezés létrehozása nem sikerült:** az AI nem ismétli; a szöveg mentett szövegként marad, és a jogmátrix 5. szakaszába „ütemezés nélkül” jelölés kerül.
- **A használati keret fogy vagy a válasz lassú:** az AI rövidebb lépésre vált, a tréner dönt.
- **Időhiány:** az AI a 3. lépést a három kérdésre rövidíti, az Agents bemutatást a tréner képsorára cseréli; a páros próba és a jogmátrix nem maradhat el.

# Ellenőrzés a végén

Az AI önellenőrzése, a résztvevőt nem kérdezi:

- ✅ A [megosztasi-proba.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/megosztasi-proba.md) legalább két megosztási szintre tartalmaz kipróbált sort várt és tapasztalt eredménnyel, a pár megerősítésével.
- ✅ A [jogmatrix.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md) minden sora a jegyzőkönyvre vagy a kapcsolat-táblára vezethető vissza; a kipróbálatlan elem `nem próbáltuk`, a nem látszó elem `nem látszik a munkatérben`.
- ✅ A hozzáférési szabály megnevezi, ki olvashat, ki szerkeszthet, és ki dönt az új hozzáférésről, vagy a hiányt „Nincs megadva” jelöli.
- ✅ A csapatfeladat szövege önállóan értelmezhető, tartalmaz írási határt és emberi döntési pontot; ütemezés csak akkor szerepel kész ténynek, ha a résztvevő látta az ütemezett listában.
- ✅ Csak fiktív anyagot osztottak meg; a kimeneteken a FIKTÍV OKTATÁSI MINTA jelölés megvan.
- ✅ A hiány „Nincs megadva”, a javaslat nem döntés, minden lényeges állításhoz van forráshely (próba-sor vagy megerősítés).
- ✅ Jelszó vagy hozzáférési adat nem került a beszélgetésbe vagy a fájlokba.
- ✅ A [Tananyag](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/) érintetlen.

Az AI egy rövid ✅/⚠️ összegzésben közli az eredményt linkekkel; ⚠️ esetén egy mondatban leírja, mit javít.

# Zárás – mit tanultunk

Az AI ezt mondja:

- Elkészült: a [jogmátrix](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/jogmatrix.md) és a [megosztási próba jegyzőkönyve](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/03-Kozos/megosztasi-proba.md).
- A hat lépésből a **Forrás** (a próba és a pár megerősítése), az **Ellenőrzés** (kipróbált, nem feltételezett jogok) és a **Rögzítés** (mátrix és szabály) jelent meg; az **Utasítás** a csapatfeladat hét elemes szövege volt.
- A proaktív ív következő eleme: a megosztás és a jogok (Space, közös projekt, beszélgetés-link, ha a munkatérben elérhető), valamint a heti ügyállapot-összesítő mint csapatfeladat szövege: a feladat felügyelet nélkül futhat, ezért az írási határ és az emberi döntési pont előre le van írva.
- Átvihető: bármely megosztás előtt kimondod, ki olvashat és ki szerkeszthet, és egy tényleges próbával ellenőrzöd; bármely felügyelet nélküli feladatnál leírod az írási határt.
- Következik közvetlenül (szünet nélkül) a 4. gyakorlat (11:25): a sávodnak megfelelően. Indító mondat: „Kezdjük a 4. gyakorlatot.”

Ezután egyszer a „Vidd haza” kérdés opciókkal.

# Vidd haza

- **BA (üzleti elemző):** a követelményjegyzék és a specifikációk megosztási szabálya: ki szerkeszthet, ki csak olvashat, és ki hagyja jóvá a változtatást; a szabály a projekt utasításában és a jogmátrixban.
- **Sales-Account (értékesítési és ügyfélkapcsolati sáv):** az ajánlati anyagok megosztása: az ügyfél felé menő tételeket csak az olvashatja, akinek joga van; a heti ügyállapot-összesítő szövege az ügy csapatának.
- **Közös:** minden közösen használt dokumentum, projekt vagy csapatfeladat elé tedd ki a jogmátrixot: ki olvas, ki ír, kinek a jogán fut, és ki dönt az új hozzáférésről.

„Melyik saját feladatodon próbálnád ki ugyanezt? A: a profilodban rögzített feladat: <feladat> · B: egy másik visszatérő feladat · C: más: írd le.”

Résztvevői döntések száma ebben a gyakorlatban: 6 (a kipróbált megosztási szintek kiválasztása; az adott jog; a címzett és az írási határ a csapatfeladatnál; az írási határ jóváhagyási módja; a hozzáférési szabály jóváhagyása; a mátrix mentése). A „Vidd haza” kérdés nem számít döntésnek. A kapcsolat-kérdésre adott válasz, a saját szavas válaszok, a pár megerősítése és a tipp-létra kérései nem döntések; az „Mit futtat az AI?” sorok közlések, nem kérdések.

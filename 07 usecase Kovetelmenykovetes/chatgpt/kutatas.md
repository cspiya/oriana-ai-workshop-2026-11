---
id: KUT-2026-11-12
version: 1.0
research_date: 2026-11-12
language: hu-HU
status: reviewra-kesz
scope: nagy ügyfél-Word anyagból követhető funkcionális specifikáció
---

# Megbízható funkcionális specifikáció nagy Word-anyagból

## F01 · Vezetői álláspont

**[A11 · ajánlás]** Microsoft 365-központú, kifejezett követelmény- és bizonyítékregiszterrel működő, AI-val támogatott, fordítószerű feldolgozást javaslok. A Word marad az ügyfél forrása; a SharePoint a verziózott tároló; a regiszter őrzi a forrásblokkokat, a belőlük kiolvasott atomi állításokat, a származtatott specifikációt, a döntéseket és kapcsolatokat; az Azure DevOps pedig a jóváhagyott megvalósítási és tesztelési feladatok munkaterülete. A dokumentumgenerálás és az AI-kivonat a nyilvántartásból építkezik, nem helyettesíti azt. A forrásdokumentumok irányadó változata a SharePointon él; a normalizált, kanonikus regiszter és baseline verziózott csomagban, például Gitben őrzendő; az Azure DevOps work itemek és tesztkapcsolatok ennek downstream vetületei. Az Azure DevOps-ban történt szerkesztés csak egyeztetett javaslatként kerülhet vissza a regiszter gazdájához: nincs két, egymással automatikusan versengő törzsrendszer.

A lényeg a bizonyítékkal átjárható lánc: **rögzített forrásverzió → teljes szerkezeti leltár → atomi állítás és feltételei → specifikációs tétel → teszt és döntés → jóváhagyott kiadás**. Minden irányban legyen megvizsgálható, mi miért szerepel, illetve egy forrásrésznek mi lett a sorsa. A rendszert nem lehet pusztán egy nagy kontextusablakkal vagy egy keresőindexszel teljessé tenni. [A08, A10, A13]

A konkrét ügyfélcsomag, méret, nyelv, Word-verziók, hozzáférés, licencek, költségkeret, kockázati osztály és adatkezelési engedély: **Nincs megadva**. Ezért a javaslat megvalósítási terv és pilotterv, nem kész termékajánlat, nem teljesítményígéret és nem előzetesen elvégzett ügyfélteszt. A kísérő adatcsomag kizárólag fiktív oktatási minta.

## F02 · A nyolc probléma és a kezelési elv

| Probléma | A tipikus meghibásodás | Ellenszer és bizonyíték |
|---|---|---|
| Lefedettség | Egy táblázat, lábjegyzet, kép vagy melléklet kiesik; egy blokkban több kötelezettség közül csak egyet veszünk észre. | Strukturális leltár és minden blokk elszámolása; külön atomizálási kontroll, mintavétel és független referencia. |
| Értelmezés | A feltétel, tagadás, kivétel, szereplő vagy időbeli hatály elmarad. | Atomi mezők, szövegrész és környezet; feltételmegőrzési szemantikai vizsgálat. |
| Nyomkövetés | Egy specifikációs tételnek nincs pontos forrása, vagy a forrásból nem találni a kimenetet. | Verzióhoz kötött, típusos, kétirányban bejárható kapcsolatok és árvaelem-jelentés. |
| Tartalmi megfelelés | A hivatkozás valódi, de a mögötte álló szöveg mást jelent. | Forrás→specifikáció és specifikáció→forrás emberi szemantikai vizsgálat, nem csak linkellenőrzés. |
| Hiány és ellentmondás | Az AI kipótolja a hiányt, vagy összeegyeztethetetlen mondatokat önkényesen felold. | Külön nyitott kérdés, ütközés, felelős és döntési rekord; „Nincs megadva”. |
| Változás | A forrás változik, de egy teszt vagy jóváhagyás korábbi állapotra mutat. | Verziózott baseline, diff és gráfos hatáselemzés; érintett bizonyítékok elavult státusza. |
| Konzisztencia | Azonos fogalom más néven szerepel; két spec-tétel különböző szabályt állít. | Fogalomtár, duplikátum- és ellentmondásjelöltek, emberi döntés naplója. |
| Fenntartható ellenőrzés | A kézi átnézés drága és megismételhetetlen. | Determinisztikus kapuk + kockázat szerinti független review, mérés és rögzített elfogadás. |

## F03 · Miért nem elég egyetlen prompt vagy keresés?

**[A08 · kutatási eredmény]** A Lost in the Middle cikkben a vizsgált modellek több dokumentumos kérdés-válasz és kulcs–érték keresési feladatokban érzékenyek voltak az információ helyére; a középső tartalom kezelése gyakran gyengébb volt. A RULER szintetikus benchmarkja egyszerű keresésen túl többlépéses követést és összesítést is vizsgált; az értékek romolhattak a kontextushossz és a feladat nehézségének növekedésével. Ezek meghatározott korábbi modellekre és tesztekre vonatkoznak: nem bizonyítják egy mai választott modell konkrét, magyar ügyfélanyagon mérhető hibaarányát. Pilotban az adott dokumentumon, modellen és eljáráson kell mérni. [S16 §Abstract; S21 §Abstract]

Egy nagy kontextusba beférő dokumentum nem egyenlő minden állítás sikeres feldolgozásával. A visszakeresésre támaszkodó generálás (RAG) célzott kérdésre hasznos, de a lekérdezés által nem előhívott állításokat nem számolja el; a szemantikailag hasonló találatok rangsora és a találatszám elrejthet egy kivételt. Darabolásnál a szabály és a kivétel más darabba eshet, a táblázat fejléce elszakadhat a cellától, a definíció a másik fejezetben lehet. A Microsoft a tokenkorlátok miatt javasolhat darabolást; ez nem teljességi garancia. [S11 §Why chunk documents; A13 következtetés]

A feldolgozás ezért nem csupán lekérdezéseket futtat: a teljes rögzített bemenet **minden leltározott blokkja sorra kerül**, szomszédos kontextussal és kapcsolódó távoli hivatkozásokkal. Az átfedés önmagában nem oldja meg a dokumentum távoli részei közötti kapcsolatok problémáját; szükséges a szerkezeti hivatkozások, definíciók, fogalmak és lehetséges ellentmondások külön összefűzése.

## F04 · Javasolt feldolgozási folyamat

### F04.1 · Rögzített bemenet és határ

A forrásgazda először rögzíti, mely dokumentumok, mellékletek és verziók tartoznak a vizsgálatba, mi a jóváhagyott szöveg nézete, és mely kommentek, tervezetek és követett módosítások irányadók. Nincs automatikus szabály arra, hogy a legfrissebb mondat felülír egy korábbit. A baseline (rögzített kiinduló állapot) tartalmazzon dokumentumazonosítót, Drive/SharePoint item ID-t, verziót, letöltés időpontját, byte-hash-t, hozzáférést és hiányzó fájlok listáját. A szöveg mellett a mellékletek hozzáférhetőségét és a képeket is leltározni kell. A verziómegőrzés adminisztrációs beállításfüggő, ezért megőrzési terv és visszaállítási próba kell. [S09 §Remarks; S20]

A jóváhagyott forrásból szükség esetén változatlan byte-snapshot készüljön hozzáférés-szabályozott helyen. Az aktuális fájl letöltésekor ellenőrizni kell, hogy a letöltés közben nem változott-e a metaadat vagy az ETag; eltérésnél újraolvasás és új baseline kell. Az ETag egyezésvizsgálata nem dokumentumzárolás vagy több fájlt átfogó atomi tranzakció. Az egyes források közötti konzisztenciát a baseline-manifeszt és az üzleti jóváhagyás teremti meg. [S10 §Request headers; A06]

### F04.2 · Szerkezeti leltár és veszteségkezelés

**[A03 · dokumentált képesség]** A DOCX nem egyetlen folyamatos szöveg: a WordprocessingML csomag külön részeket és tartalomtörténeteket tartalmazhat, például fő szöveget, megjegyzést, élőfejet, láb- és végjegyzetet, szövegdobozt; a táblázatok blokkszerkezetek. [S12 §Structure; S13 §Important parts; S14 §Structure of a Table] A saját kinyerő a csomagjegyzékből induljon, majd minden felismert blokkhoz rögzítsen azonosítót, részt, hierarchiát, sorrendet, típusát, cellapozíciót, normalizált és nyers szöveget, verziót és hitelesítő hash-t. A numerikus oldalszám önmagában nem stabil; használjunk XML-rész és szerkezeti útvonal plusz rövid idézet kombinációt, továbbá az eredeti megtekintéshez navigációt. A hash az egyezést, nem a jelentést bizonyítja.

Leltározzuk a címsorokat, bekezdéseket, listaszámokat, táblafejléceket és cellákat, láb- és végjegyzeteket, kommenteket, képeket, ábrákat, linkeket, mezőket, szövegdobozokat, beágyazott és külső objektumokat, revíziókat és minden nem támogatott elemet. A lista megvalósítási követelmény, **nem állítás arról, hogy valamely kész eszköz mindegyiket hibátlanul kinyeri**. Minden objektum sorsa: kinyerve / külön feldolgozandó / hatókörön kívüli indokkal / sikertelen és blokkoló. Beágyazott objektum vagy elérhetetlen hivatkozás külön forrásként kezelendő, nem eltüntetendő. A revíziók elfogadása üzleti döntés; az erre szolgáló technikai eljárás önmagában nem ad felhatalmazást. [S15]

**[A04 · dokumentált korlát]** A Microsoft Document Intelligence read/layout DOCX bemenet esetén nem elemzi a beágyazott vagy hivatkozott képeket; a DOCX oldalegység 3000 karakterenként számított egység, nem feltétlen a Word képernyőn látható oldala. [S05 §Input requirements; S06 §Office file restrictions] A képeket/ábrákat külön ki kell menteni és alkalmas, engedélyezett kép- vagy OCR-feldolgozással vizsgálni, majd emberileg ellenőrizni; az ábra hiányzó jelentése blokkolhatja a kiadást. A teljes bevitelre vonatkozó teszt nélkül sem a layout, sem az OCR nem garantálja a szöveg és jelentés teljességét.

### F04.3 · Atomi állítások több menetben

1. **Leltármenet:** a feldolgozó minden blokkot meglát, és külön kezeli a címet, környezetet, táblafejlécet és forrásszöveget. A nem követelményt is osztályozza; nincs csendes eldobás.
2. **Kinyerés:** blokkonként minden külön kötelezettség, üzleti szabály, adat, korlátozás, feltétel, kivétel, definíció, nyitott kérdés, következmény vagy nem funkcionális állítás jelöltet kap. Egy mondatból több atom, több bekezdésből egy összetartozó szabály is keletkezhet. Az AI-javaslat állapota javasolt, nem elfogadott.
3. **Kapcsolatmenet:** fejezetek, távoli definíciók, szereplők és hivatkozások alapján kapcsoljuk a feltételt az érintett állításhoz. Keressünk tagadást, kivételt, jogosultságot, időbeli érvényt és számszaki küszöböt. Az egyes számokat és egységeket forráshoz kötjük.
4. **Szemantikai visszanézés:** külön menet keresi az elszalasztott atomokat, a félreosztott kivételeket és az ellentmondó állításokat. Kockázatos esetet ember dönt el, új bizonyítékot vagy kérdést rögzítünk.
5. **Fordítás:** az elfogadott atomokból keletkezik specifikációs tétel: szereplő, kiváltó esemény, előfeltétel, művelet, eredmény, kivétel, adatok, üzleti szabályok, nem funkcionális kapcsolat és ellenőrizhető elfogadási feltétel. Ahol nincs alap, „Nincs megadva”, nyitott kérdéssel; javaslatot külön jelölünk.

A blokkleltár sikeres elszámolása azt bizonyítja, hogy a gép minden **ismert és leltározott** blokkra rögzített sorsot. Nem bizonyítja, hogy a parser minden Word-objektumot észrevett, hogy a blokkba minden atomi követelményt felfedezett, vagy hogy az értelmezés helyes. [A10 következtetés] A sémahelyes JSON is csak alak- és típusmegfelelőség; nem bizonyítja az állítás igazságát, teljességét és forráshűségét.

### F04.4 · Gráf, döntések és konfiguráció

A minimális regiszter csomópontjai: **Forrásverzió**, **Forrásblokk**, **Atom**, **Specifikációs tétel**, **Teszt/elfogadási kritérium**, **Döntés/kérdés**, **Felülvizsgálati bizonyíték**, **Baseline**. A kapcsolat típusa és iránya külön mező: tartalmaz, alátámaszt, pontosít, kivétel, függ, ütközik, származik, teszteli, döntött róla, felváltja. Sok-sok kapcsolat szükséges: egy atom több tételt érinthet, egy tétel több távoli forrásból állhat össze. Meg kell őrizni a forrásazonosítót, verziót, szerkezeti helyet, idézetet és változatlenyomatot.

Az üzleti azonosító tartós, a verzióazonosító változatonként egyedi. Áthelyezéskor az azonosítás nem csak sortól vagy oldalszámtól függ; a szövegegyezés és szerkezet alapján automatikusan javasolt megfeleltetést bizonytalanság esetén ember erősíti meg. Törléskor nem tűnik el a korábbi rekord: tombstone, korábbi baseline és utód/szétválás/összevonás nyoma marad. A hash-változás nem jelent automatikusan szemantikai változást; a hash-egyezés egy részlet környezetváltozását nem érzékeli.

Az ütközés és hiány előbb **nyitott tétel**: források, érvényességi hatály, kérdés, felelős és határidő ha ismert. A javasolt értelmezés nem döntés. A döntést az arra jogosult rögzíti indoklással, érintett forrás- és specverzióval; ha a forrás gazdájának jóváhagyása hiányzik, a tétel blokkolt. A dokumentált üzleti döntés az eredeti ellentmondást nem tünteti el.

## F05 · Ellenőrzés és kapuk

**[A02 · dokumentált útmutatás]** A NASA kézikönyve egyedileg hivatkozható követelményeket és kétirányú nyomkövetést javasol; a NASA validálási útmutatója külön figyelmeztet arra, hogy a követelmények kezelése önmagában nem igazolja helyességüket. [S02 Appendix C; S03 §§3.4, 3.9–3.10] Az ISO/IEC/IEEE 29148:2018 katalógusa a követelménymérnöki folyamatok és információs tételek hatókörét írja le. Csak a katalógust/kivonatot ellenőriztük; teljes szabványolvasást vagy szabványmegfelelőségi tanúsítást nem állítunk. [A01; S01 Abstract]

**Gépi, determinisztikus kapu:** ellenőrizze a séma- és kötelezőmezőket; az ID-k egyediségét; célpontok és forrásverziók létét; hogy minden leltárblokkhoz tartozik engedélyezett sors; hogy minden elfogadott atomnak és specifikációs tételnek van megfelelő kapcsolat; hogy az előírt teszt-kapcsolat megvan; hogy nincs baseline-keverés, hibás státuszátmenet vagy nyitott blokkoló; és hogy a forráshash és a hivatkozott bizonyíték verziója egyezik. Sikertelen kinyerés vagy hiányzó melléklet nem kaphat automatikus PASS státuszt. A szabályok teszteléséhez szándékosan hibás bemenet is kell: törött kapcsolat, kimaradt blokk, eltérő baseline és nyitott blocker.

**Szemantikai kapu:** (1) forrás → specifikáció: minden releváns atom és a hozzá tartozó feltételek megjelennek-e megfelelő helyen vagy indokoltan máshova kerültek; (2) specifikáció → forrás: minden állítást alátámaszt-e a megjelölt forrás vagy engedélyezett döntés, nincs-e hozzáadott tartalom, fordított tagadás, elveszett kivétel vagy megváltoztatott szám; (3) ellenmondások és fogalmak dokumentumszintű vizsgálata; (4) teszt a tényleges feltételt és kivételt ellenőrzi-e. A nem funkcionális követelmény nem veszhet el csak azért, mert a kimenet funkcionális: kapcsolódó nem funkcionális követelményként külön sorsa, gazdája és ellenőrzése legyen.

Az AI a kockázatos jelölteket rangsorolhatja, de az értelmezést független, eredeti forrást is látó reviewer bírálja; üzleti kérdésben a kijelölt gazda dönt. Az önellenőrzés hasznos előszűrés, nem független bizonyíték. A korábbi önjavítás-kutatás meghatározott érvelési tesztekben külső visszajelzés nélkül gyakran romlást vagy elégtelen javulást talált; ebből nem következik, hogy minden önellenőrzés haszontalan. [A09; S17 Abstract]

**Kiadási kapu:** minden bemeneti objektum elszámolt, a blokk- és atomkapcsolatok gépileg rendben, a kötelező szemantikai ellenőrzés kész, a kiválasztott pilotküszöbök teljesültek, nincs nyitott blocker/major, és az üzleti gazda rögzített verzióra hagyta jóvá. Elavult review vagy egy már megváltozott forráshoz tartozó jóváhagyás nem érvényes. Sikertelen vagy nem ellenőrizhető feltétel: blokkolt vagy kifejezetten feltételes, név szerinti kockázatvállalással, ha azt a szervezet szabályzata megengedi.

## F06 · M365 és DevOps: kész képesség és építendő réteg

| Réteg | Dokumentált képesség | A megvalósítandó többlet |
|---|---|---|
| SharePoint / Graph | Elem-, tartalom- és verzióelérés; delta a változott elemállapot követésére. [S04, S09, S10, S20] | Snapshot-manifeszt, hatókör, visszaállíthatóság, következetes többlépcsős beolvasás és verzióőrzés. |
| Open XML | Dokumentumrészek és elemek programozott elérése. [S12–S15] | Saját leltározó, a használt objektumtípusok tesztje, stabil lokátor és hiányriasztás. |
| Document Intelligence | Layout/read az adott verzióban; dokumentált Office-korlátok. [S05–S06] | Külön képkivonás és OCR/vizuális ellenőrzés, eredmények egyesítése. |
| Azure AI Search | Szövegrészek indexelésének és darabolásának útmutatója. [S11] | Teljes leltáron végigmenő feldolgozás, fogalmi kapcsolatok, visszakeresési értékelés; a kereső nem a teljességi nyilvántartás. |
| Azure Boards és Test Plans | Work item kapcsolatok, tesztesetekhez és automatizált tesztekhez kötés. [S18–S19] | Atom–spec–teszt szemantikai modell, forrásverzió, állapot, döntés és elavulás megjelenítése. |
| DevOps REST | Work item revíziótesztes PATCH és reláció, külön eredményű batch. [S07–S08] | Idempotencia, integrációs napló, részhibák javítása, konfliktuskezelés és újraszinkronizálás. |

A Graph delta lapozandó a végső deltaLinkig; törölt elemek jelölve térnek vissza, a feed egy elem legutóbbi állapotát adja, nem minden köztes módosítást. Az item ID-t kell követni; duplikált előfordulás esetén a dokumentált legutolsó az irányadó. A megőrzött verziók és baseline-ok nem helyettesíthetők pusztán deltával. [A05; S04 §Remarks] Delta-token elvesztése, jogosultságváltozás vagy hiányos lapozás esetén teljes újraegyeztetés és kiadási zárolás kell.

A DevOps REST `test /rev` feltétellel megakadályozható, hogy a megfigyelt revízió helyett észrevétlenül másikat módosítsunk; revízióütközéskor olvasás, összevetés, szükség esetén emberi feloldás következzen. Az API batch dokumentációja szerint az egyedi kérések külön eredménnyel térnek vissza, és egy hiba nem állítja le a továbbiakat: a teljes batch **nem tekinthető automatikusan mindent vagy semmit tranzakciónak**. [A07; S07 §REST semantics; S08 §Update a field] Írást csak jóváhagyott kiadásnál és megfelelő jogosultsággal, külön naplózott szinkronizáló végezzen; a rendszer ezen kutatás során nem ír ügyfélrendszerbe.

Olvasási és írási identitás különüljön el; csak a szükséges dokumentumtárakra és DevOps-területekre adjanak hozzáférést. A Graph dokumentációja minimális jogosultság kiválasztását írja elő, de a konkrét tenantban ténylegesen szükséges scoped permissiont és szolgáltatásidentitást igazolni kell. [S04 §Permissions; S18 §Prerequisites] Ügyfélforrás modellhez, indexhez és naplóhoz továbbítása csak jóváhagyott adatkezeléssel, titkosítási, megőrzési és törlési szabályokkal történjen. Az adatrezidencia, licenc és szolgáltatási feltételek: Nincs megadva, projektindítási kapu.

## F07 · Változáskezelés és konzisztencia

Egy új dokumentumverziónál: (1) új snapshot és szerkezeti leltár; (2) blokkmegfeleltetés, új/törölt/áthelyezett/szövegmódosult/ambivalens címkézés; (3) atomok és kapcsolatok újraértékelése a helyi és távoli kontextussal; (4) gráfbejárás az érintett specifikációkon, teszteken, üzleti döntéseken és review-bizonyítékokon; (5) elavultként jelölés és új ellenőrzés; (6) új baseline csak jóváhagyással. A változatokat nem szabad észrevétlenül összekeverni. Egy áthelyezett szöveg is megváltoztathatja hatályát; a csak szöveges diff ezt nem biztosan mutatja. Egy törölt kivétel hatása a főszabály értelmére terjedhet, ezért a függőségi él kulcsfontosságú.

A change precision = valóban érintettnek ítélt és jelölt elemek / minden érintettnek jelölt elem; change recall = valóban érintettnek ítélt és jelölt elemek / referencia szerint minden érintett elem. A referencia független emberi ítélet a változásról; a gépi érintettség nem lesz önmagában igazság.

### F07.1 · A demonstráció hét esete

A kísérő adatkészlet **FIKTÍV OKTATÁSI MINTA**. Az azonosítók közösek a bemutatóval: C1 egyszerű igény; C2 feltétel és kivétel; C3 távoli részek összekapcsolása; C4 forráskonfliktus; C5 hiányos üzleti adat; C6 oktatási, nem képernyőfunkciós igény; C7 változás. A B0 blokkolt, a B1 és B2 kizárólag demonstrációs állapot: egyik sem tényleges üzleti jóváhagyás. A tesztek definíciók, nem lefuttatott teszteredmények. A gráf az atomi forrástól a követelményen és specifikáción át a tesztig vezeti az éleket; a fordított nézet az élekből számítható. A működő konkrét kapcsolatok az adatkészletben vizsgálhatók, nem új példaként szerepelnek itt.

## F08 · Alternatívák és választás

| Megközelítés | Előny | Lényegi korlát és alkalmazás |
|---|---|---|
| Kézi Word + táblázatos nyomkövetés | Gyors indulás, kevés integráció. | Nagy változási volumen mellett kézi szinkron és elszámolás költséges; kis, stabil kockázatú csomagnál ésszerű kiindulás. |
| Csak AI-összefoglaló / RAG | Gyors kérdés-válasz és előkészítés. | Nem biztosít teljes blokkelszámolást, az esetleg kihagyott kivételek és távoli feltételek kockázatosak; önálló kiadási rendszernek nem ajánlott. |
| **M365 + külön regiszter és AI** | Meglévő forrástár és munkafolyamat mellé építhető, kétirányú és auditálható. | Kinyerő, gráf, jogosultság, változás és emberi review integrációját meg kell építeni, üzemeltetni és értékelni. Ajánlott pilot. |
| Dedikált követelménykezelő termék | Kiforrottabb strukturált workflow lehet, ha ténylegesen kielégíti a követelményeket. | Licenc, bevezetés, forrásimport, verziókezelés, API és jogosultság szállítónként igazolandó; beszerzési összehasonlítás itt nem történt. |

A feladat igénye alapján az ajánlott út olyan rendszer, amelynek a forrása és az elfogadott állapotai ellenőrizhetők és exportálhatók. Nem állítjuk, hogy a felsorolt szolgáltatások kész összeállításként automatikusan biztosítják a teljes folyamatot, vagy hogy a külön regiszter termék már létezik.

## F09 · Pilot és döntési mérőszámok

**[A12 · javaslat]** A pilot a tényleges ügyféltől engedélyezett, reprezentatív csomagból induljon: szöveges és táblázatos részek, ábrák, lábjegyzetek, revíziók, távoli hivatkozások, kivételek, ütközések és legalább két valódi változat; a méret és megengedett hozzáférés: Nincs megadva. Ne csak könnyű vagy AI által kiválasztott oldalak kerüljenek be. A mintavétel rétegenként előre rögzített és kockázatarányosan bővíthető; a kimaradó objektumtípusok külön jelentendők.

Két hozzáértő annotátor egymástól függetlenül olvassa az eredeti, befagyasztott forrást, és jelöljön minden releváns atomot, feltételt, kivételt, konfliktust, valamint a források és specifikációk kapcsolatát. Az eltéréseket harmadik döntnök vagy közös, naplózott adjudikáció oldja fel. A konszenzusos referencia nem tévedhetetlen igazság: a nézeteltérések számát és okait, a bizonytalan tételeket és a referencia módosításait is meg kell őrizni. A kiértékeléshez használt referencia ne kerüljön előre a rendszer promptjába; fejlesztéshez és végső értékeléshez külön mintát használjunk.

| Mérőszám | Számláló / nevező | Javasolt induló kapu, nem iparági tény |
|---|---|---|
| Szerkezeti capture rate | A referencialeltárral egyező, ténylegesen kinyert releváns objektumok / referencialeltár releváns objektumai. Külön report a nem támogatott/olvashatatlan részekről. | ≥99%, és minden hiányzó kritikus objektum blokkoló. |
| Blokk-elszámolás | Érvényes, indokolt sorssal rendelkező leltárblokkok / minden leltárblokk. | 100%; önmagában nem szemantikai teljesség. |
| Atomi szemantikai recall | Helyesen megtalált referenciaatomok / összes referenciaatom. | ≥95% összesen, kritikus atomnál 100% a vizsgált mintán. |
| Atomi precision | Helyesnek ítélt, releváns rendszeratomok / összes rendszeratom. | ≥95%; a fals pozitívokat külön sorolni. |
| Feltétel- és kivételmegőrzés | Hiánytalanul és helyesen megőrzött referencia-feltételek és kivételek / összes referencia-feltétel és kivétel. | ≥98%, kritikus esetben 100% a mintán. |
| Ellentmondás-recall | Helyesen felismert referenciaütközések / összes referenciaütközés. | ≥90%; minden ismert kritikus ütközés blokkol és emberhez kerül. |
| Változás precision / recall | F07 szerinti helyes érintettségi találatok / összes jelölt, illetve összes referencia szerint érintett. | Mindkettő ≥90%; súlyos változásnál manuális teljes felülvizsgálat. |
| Munka és költség | Reviewer órája és javítási körök feladatonként; modell-, index-, tárhely-, integrációs és emberi költség összesen, azonos feladatra. | A kézi kontrollal együtt mérendő; előre megállapított költség- és időkeret: Nincs megadva. |

**Nevezővédelem:** nulla vagy ismeretlen nevező esetén az arány **nem értelmezhető**, nem 100%; a kihagyott, feldolgozhatatlan és annotálatlan egységeket a nevezőből nem szabad csendben kihagyni. Az esetszám, rétegenkénti érték, kritikus hibák, annotátori nézeteltérések és bizonytalanság mindig az arány mellett szerepeljen. Kevés konfliktus vagy változás esetén a küszöb teljesülése nem általánosítható; bővített vagy célzottan nehéz minta kell. A referencia szerinti és rendszer szerinti atomok eltérő bontása esetén előre definiált egyeztetési szabály és szemantikai párosítás kell, külön rögzítve a több-egy kapcsolatokkal.

**Pilot sorrend:** (1) jogosultság és forrásleltár; (2) két annotátor és referencia lezárása; (3) kézi kontrollfolyamat idő- és költségmérése; (4) eszközlánc futtatása a befagyasztott csomagon; (5) vak összevetés, célzott hibajavítás, legfeljebb két kör; (6) második verzióval változásvizsgálat; (7) költség és kockázat alapján döntés: folytatás, szűkítés, más módszer vagy leállás. Az újramérés mindig azonos vagy előre rögzített új tesztkészleten történjen; ne javítsunk kizárólag a mérőmintára.

**Stop:** kritikus forrás elérhetetlen vagy képi tartalma nem vizsgálható; adatkezelési engedély hiányzik; nyitott kritikus ellentmondás vagy felelős nélküli döntés van; lényeges hibát mérés nem tud kizárni; a körhatár lejárt; két javítás nem hoz érdemi javulást; vagy költség/időkeret túllépése várható. A pilotban vállalt célértékek javaslatok, a gazda kockázat és mintanagyság alapján módosíthatja őket; egy minta sikere nem bizonyít minden további dokumentumra érvényes teljesítményt.

## F10 · Bizonyítékok és korlátok

A stabil állításazonosítók feloldása, a 21 megnyitott elsődleges forrás teljes URL-je, kiadója, éve ahol azonosítható, hozzáférés napja, pontos vizsgált szakasza és korlátja a kísérő [sources.json](sources.json) fájlban található. Az S01 szabványkatalógus; nem teljes szabványszöveg. A gyártói dokumentáció szolgáltatásképességekről szól, nem a jelen ügyfélkörnyezetben végzett integrációs próba. Az S16/S17/S21 kísérletek a szerzők meghatározott modelljeire és feladataira érvényesek. A javaslat és következtetés külön szerepel a tényállításoktól. Az ügyféladatokra, tényleges költségre és kiválasztott rendszer pontosságára nincs mérés.

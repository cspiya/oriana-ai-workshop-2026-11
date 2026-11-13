# 3. A kutatási megbízás, amelyet a ChatGPT írt

> Esettanulmány a 2026. november 12-i workshop végéről. A példák fiktívek; a szöveg a beszélgetésből szó szerint származik, az eszközhasználat naplója nélkül.

Ezt a szöveget kapta meg változtatás nélkül egy új ChatGPT-beszélgetés és a Claude is.

## Feladat

Végezz önálló, forrásokkal alátámasztott kutatást arról, hogyan lehet nagy méretű, ügyfelek által összeállított Word-követelményleírásokból megbízható, ellenőrizhető és változáskövethető funkcionális specifikációt készíteni mesterséges intelligencia támogatásával.

A kutatás alapján javasolj módszertant és eszközkészletet, majd mutasd be a megoldást közérthető, grafikus prezentációként vagy interaktív vizuális dashboardként. A bemutató konkrét példákon vezesse végig az információ átalakulását.

A feladatkiírás kizárólag a problémát és az elvárt eredményt rögzíti. A feldolgozási módszert és a megoldás felépítését neked kell kidolgoznod.

## Kiinduló helyzet

Az ügyfelek nagy terjedelmű Word-dokumentumokban adják át az igényeiket. Ezekből funkcionális specifikációt kell készíteni, amely megfelelően és hiánytalanul írja le az elvárt működést.

A jelenlegi tapasztalat szerint, ha a teljes dokumentumot egyszerűen feltöltjük például egy ChatGPT-projektbe, és funkcionális specifikáció készítését kérjük, az eredményből sok részlet kimarad, illetve több követelmény hibás értelmezéssel kerül bele.

Külön ellenőr alkalmazásakor újabb és újabb problémák kerülnek elő. Előfordul, hogy 10–15 ellenőrzési és javítási kör szükséges az elfogadható eredményhez. Olyan megközelítést keresünk, amelynek minősége és teljessége átláthatóan ellenőrizhető.

A jelenlegi munkakörnyezet Microsoft 365: Word, SharePoint és Azure DevOps. Vizsgáld a javaslat illeszthetőségét ehhez a környezethez. Ha további eszközt javasolsz, indokold annak szükségességét.

Konkrét ügyféldokumentum nincs mellékelve. A bemutatáshoz készíts egyértelműen fiktív példákat. A dokumentumok pontos méretét, szerkezetét és a szervezeti adottságokat ne kezeld ismert tényként.

## A megoldással szembeni elvárások

A javaslat adjon érdemi választ az alábbiakra:

- **Teljes forráslefedettség:** hogyan biztosítható és ellenőrizhető, hogy az eredeti anyag minden állítását és kérését feldolgoztuk? Minden elemről megállapítható legyen, mi lett a sorsa, akkor is, ha nem került belőle közvetlenül funkció a specifikációba.
- **Pontos értelmezés:** hogyan maradnak meg a feltételek, kivételek, korlátozások és az egymástól távol szereplő, de összetartozó információk?
- **Visszakövethetőség:** egy specifikációtételről megállapítható legyen, mely eredeti igényekből származik. Egy eredeti igényből kiindulva pedig látható legyen, hol és hogyan dolgoztuk azt ki.
- **Tartalmi megfelelés:** hogyan ellenőrizhető, hogy a specifikáció ténylegesen megfelel az eredeti követelménynek? A puszta hivatkozás megléte önmagában nem elegendő.
- **Ellentmondások és hiányok:** hogyan derülnek ki az eredeti igények közötti ellentmondások, többértelműségek és hiányzó információk? Mi történik velük a tisztázásig, és ki dönthet róluk?
- **Változáskövetés:** egy forrásbeli módosításnál hogyan állapítható meg, mely követelmények, specifikációrészek és ellenőrzések érintettek?
- **Konzisztens egész:** hogyan állítható elő egy adott állapothoz tartozó, egymással összhangban lévő teljes követelményrendszer és funkcionális specifikáció?
- **Fenntartható ellenőrzés:** hogyan mérhető a minőség, és hogyan kerülhető el, hogy az ellenőrzési folyamat végtelen javítási körökké váljon?

Különítsd el azt, ami ténylegesen bizonyítható, attól, ami csak valószínűsíthető. Mutasd meg a teljesség ellenőrzésének korlátait is; ne ígérj bizonyíték nélküli hibamentességet.

## Kutatási feladat

Keress iparági bevált gyakorlatokat, releváns szabványokat, kutatási eredményeket és dokumentált eszközképességeket.

Vizsgáld meg:

- Milyen okok vezethetnek a nagy dokumentumok feldolgozásakor kihagyásokhoz és félreértelmezésekhez?
- Milyen módszerek alkalmasak ezek megelőzésére, felismerésére és javítására?
- Milyen munkát végezhet megbízhatóan az automatizálás, és hol szükséges emberi értelmezés vagy döntés?
- Milyen megoldási alternatívák vannak, és milyen feltételek mellett melyiket érdemes választani?
- Milyen eszközök támogatják a javasolt működést, és milyen fejlesztés, integráció vagy szervezeti változás szükséges hozzájuk?
- Milyen próbafeldolgozással és mérőszámokkal lehetne ellenőrizni, hogy a javaslat valóban javít a jelenlegi gyakorlaton?

Elsődleges, ellenőrizhető forrásokra támaszkodj. A fontos állításokhoz adj hivatkozást. Válaszd szét a dokumentált képességeket, a gyártói állításokat, a saját következtetéseidet és a kipróbálást igénylő feltételezéseket.

A kutatás eredményeként foglalj állást: adj indokolt, megvalósítható ajánlást, ne csak eszközlistát.

## Vizuális bemutatás

A fő átadandó eredmény egy jól érthető, áttekinthető vizuális bemutató legyen. Kerüld a hosszú szövegblokkokat és a túlzsúfolt diákat.

Az ábrákból derüljön ki:

- Mely rendszerek és szereplők vesznek részt a folyamatban?
- Milyen lépések követik egymást, és hol vannak elágazások vagy visszatérések?
- Az egyes lépéseknek mi a bemenete és a kimenete?
- Pontosan milyen átalakítás történik az adatokon?
- Milyen kapcsolatokat kell megőrizni az eredeti forrás és az abból készülő információk között?
- Melyik lépésben milyen szabályokat kell betartani?
- Hol és hogyan történik ellenőrzés, javítás és emberi döntés?
- Hogyan terjed tovább egy változás hatása?

Lehetőleg használj dinamikus vagy interaktív ábrákat. A néző tudja végigkövetni egy konkrét igény útját, megvizsgálni a kapcsolatait, és összehasonlítani egy módosítás előtti és utáni állapotot. Az interakció a megértést segítse.

A bemutató adjon először könnyen befogadható áttekintést, majd tegye elérhetővé a részleteket. Ha a választott prezentációs formátum nem támogat dinamikus ábrákat, a működést egymást követő, jól összehasonlítható állapotokkal szemléltesd.

## Végigvezetett példák

Ugyanazt a fiktív példát vezesd végig a megoldás lényeges pontjain. Legyen látható az eredeti ügyfélmegfogalmazás, az értelmezés eredménye, a funkcionális kidolgozás, a kapcsolatok és az ellenőrzés bizonyítéka.

A példák mutassák meg legalább:

- Egy egyértelmű követelmény teljes útját.
- Egy feltételt vagy kivételt tartalmazó igény feldolgozását.
- Több dokumentumrészből összeálló igény kezelését.
- Két egymásnak ellentmondó eredeti igény felismerését és további sorsát.
- Egy hiányzó információ kezelését találgatás nélkül.
- Egy eredeti kérés sorsát, amely nem kerül közvetlenül a funkcionális specifikációba.
- Egy későbbi ügyfélmódosítás hatását és az új, konzisztens állapot előállítását.

Az egyedi példák mellett azt is szemléltesd, hogyan működik a megközelítés a teljes nagy dokumentum szintjén: miből derül ki, hogy semmi nem maradt feldolgozatlan vagy elszámolatlan.

## Az átadás akkor teljes, ha

A bemutató alapján egy szakmai résztvevő meg tudja érteni, hogy mit kell csinálni az egyes lépésekben, milyen információ készül, hogyan kapcsolódik az eredeti forráshoz, és milyen bizonyíték alapján fogadható el.

Az eredmény tartalmazza a kutatásból levezetett ajánlást, az eszközök szerepét, a vizuális folyamatbemutatást, a végigvezetett példákat, valamint a bevezetéshez javasolt első próba és értékelés módját.

A teljes forrásfeldolgozás, a tartalmi helyesség, a változáskövetés és a konzisztencia ellenőrzésének módja legyen bemutatva. A fennmaradó bizonytalanságok és az emberi döntést igénylő pontok legyenek egyértelműek.

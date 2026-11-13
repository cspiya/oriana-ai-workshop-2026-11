# 2. Az első válasz (ChatGPT, ugyanabban a beszélgetésben)

> Esettanulmány a 2026. november 12-i workshop végéről. A példák fiktívek; a szöveg a beszélgetésből szó szerint származik, az eszközhasználat naplója nélkül.

**Ehhez követelményközpontú feldolgozási folyamatot javaslok: először ellenőrzött követelménynyilvántartást készítetek, majd ebből állítjátok elő és validáljátok a funkcionális specifikációt.** A Word megmaradhat ügyféloldali bemenetnek és átadási formátumnak, de a visszakövethetőséget az egyes tételek és kapcsolataik nyilvántartása biztosítsa.

A Microsoft 365-környezetetekben ezt SharePoint, Azure DevOps és egy szabályozott dokumentumfeldolgozó folyamat köré építeném.

Az iparági alap jól megalapozott: az **ISO/IEC/IEEE 29148** a követelmények előállításának és kezelésének folyamatait tárgyalja; a NASA nyilvános mérnöki kézikönyve pedig kifejezetten előírja a kétirányú visszakövethetőséget, a követelmények felbontását, a jóváhagyott változatok kezelését és a kapcsolatok tartalmi ellenőrzését. Az alábbi munkafolyamat ezekre épülő, mesterséges intelligenciával támogatott megvalósítási javaslat, nem egy szabvány szó szerinti receptje. [ISO 29148](https://www.iso.org/standard/72089.html), [NASA: követelménykezelés](https://www.nasa.gov/reference/6-2-requirements-management/)

A leírásotok alapján a 10–15 javítási kör mögött valószínűleg több probléma összeadódása áll: kimaradó forrásrészek, túl nagy feldolgozási egységek, nem rögzített ellenőrzési szempontok, illetve javítás közben keletkező új hibák. Konkrét dokumentum nélkül ezek lehetséges okok. A hosszú bemenet önmagában nem biztosít teljes információfelhasználást; ezt korábbi nyelvimodell-kutatások is kimutatták, bár azokból a most használt modellre nem következik konkrét hibaarány. [Lost in the Middle, 2024](https://aclanthology.org/2024.tacl-1.9/)

A javasolt folyamat:

1. **Rögzítsétek a bemenetet, és ellenőrizzétek a kinyerés teljességét.**

   Minden feldolgozás meghatározott dokumentumverzióból induljon. Legyen rögzítve, hogy a követett módosítások, megjegyzések és mellékletek közül mi számít elfogadott követelménynek, és mi függő javaslatnak.

   A feldolgozás leltározza a fejezeteket, bekezdéseket, táblázatokat, ábrákat és hivatkozott mellékleteket. Minden forrásegység kapjon azonosítót és státuszt: feldolgozott, háttéranyag, tisztázandó vagy technikailag nem olvasható. Egyetlen rész se maradjon észrevétlenül kimaradva.

   A forráshelyhez dokumentumazonosítót, verziót, fejezetet, bekezdés- vagy táblázatcellát és pontos idézetet tároljatok. Az oldalszám kiegészítő támpont legyen.

   Ez Microsoft-környezetben különösen fontos: az Azure Document Intelligence Word-feldolgozása nem támogatja a beágyazott képeket, és a dokumentáció szerinti Word-„oldalegység” legfeljebb 3000 karakter, nem a Word tényleges oldala. Az ábrákhoz ezért külön feldolgozási és ellenőrzési út szükséges. [Microsoft: dokumentumfeldolgozási korlátok](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/layout?view=doc-intel-4.0.0)

2. **Készítsetek elemi, külön ellenőrizhető követelményeket.**

   Egy ügyféloldali bekezdés több kötelezettséget tartalmazhat. Ezeket bontsátok külön tételekre úgy, hogy a feltételek, kivételek és összefüggések megmaradjanak.

   Minden tételnél legyen eredeti szöveg, pontosított megfogalmazás, forráshely, típus, felelős és állapot. A jogosultsági, teljesítménybeli, adatkezelési és integrációs követelmények is kapjanak helyet, akkor is, ha nem a funkcionális specifikációban lesznek teljes egészükben kidolgozva.

   A hiányzó üzleti szabály legyen „Nincs megadva”, kijelölt döntési felelőssel. Az ellentmondó forrásokat őrizzétek meg; a rendszer ne válasszon önállóan közöttük. Az elemi, egyértelmű, egyedileg hivatkozható és ellenőrizhető követelmények kialakítása a NASA minőségi ellenőrzőlistájának is része. [NASA: jó követelmények ismérvei](https://www.nasa.gov/reference/appendix-c-how-to-write-a-good-requirement/)

   **Itt legyen az első elfogadási kapu:** az üzleti elemző jóváhagyja a követelménykészlet értelmezését. Ha már a kinyerésből hiányzik valami, a későbbi lefedettségi kimutatás hamis biztonságot adhat.

3. **Összetartozó funkciócsomagokból készüljenek a specifikációtételek.**

   Egy feldolgozási egység például egy jóváhagyási folyamat vagy egy üzleti művelet legyen. A csomag tartalmazza az összes hozzá tartozó követelményt, az eredeti forrásrészeket, az alkalmazandó közös szabályokat, fogalmakat és függőségeket.

   A fejezethatáron túli kapcsolatokat is követni kell: egy folyamat leírásához hozzátartozhat a másik fejezetben szereplő jogosultsági szabály vagy mellékletben lévő értékkészlet.

   A kereséssel kiegészített szövegalkotás hasznos a kapcsolódó háttér megtalálására. **A kötelező követelmények feldolgozását azonban tételes munkalista vezérelje.** Néhány releváns keresési találat nem bizonyítja, hogy minden követelmény sorra került.

   A specifikációtételek rögzített szerkezetet kövessenek: szereplő, előfeltétel, kiváltó esemény, működés, üzleti szabályok, adatok, kivételek, eredmény, elfogadási feltételek és forráskapcsolatok. A forrásban nem szereplő tervezési megoldás külön javaslat legyen, indoklással és jóváhagyási állapottal.

4. **A kapcsolatokat már az előállításkor rögzítsétek.**

   A nyilvántartásban ezt a láncot kell tudni mindkét irányban bejárni:

   **Forrásrész ↔ követelmény ↔ specifikációtétel ↔ elfogadási feltétel / teszteset.**

   Egy követelményt több specifikációtétel együtt teljesíthet, és egy specifikációtétel több követelményt szolgálhat. Ezért több-a-többhöz kapcsolatokat kell kezelni.

   A kapcsolat saját adatai legyenek: a két tétel pontos verziója, a kapcsolat típusa, a lefedett feltétel, az ellenőrzés eredménye, indoklása és jóváhagyója. A „kapcsolódik hozzá” és a „tartalmilag teljesíti” két külön állapot.

5. **Három külön ellenőrzést futtassatok.**

   | Ellenőrzés | Mit bizonyít? | Hogyan történjen? |
   |---|---|---|
   | Szerkezeti és lefedettségi | Minden tétel feldolgozott; a hivatkozások léteznek; nincs gazdátlan követelmény vagy specifikációtétel. | Programmal végzett, ismételhető vizsgálat. |
   | Tartalmi megfelelés | A specifikáció megőrzi a követelmény feltételeit, határait, kivételeit és kötelezettségeit. | Követelményenkénti összevetés az eredeti forrással, külön ellenőrrel. |
   | Rendszerszintű összhang | A külön elkészített részek együtt is működőképes, ellentmondásmentes folyamatot írnak le. | Teljes üzleti forgatókönyvek, állapotok, jogosultságok és adatkapcsolatok átjárása. |

   A tartalmi ellenőr minden kijelölt tételre adjon eredményt: **teljesül / részben teljesül / ellentmond / nem ellenőrizhető**, pontos bizonyítékkal. Több kapcsolódó specifikáció esetén az együttes lefedettséget is vizsgálja.

   Az elfogadási tesztek elvárt eredményeit az eredeti követelményekből is ellenőrizzétek. Ha a specifikációból készül a teszt, ugyanaz a félreértés mindkettőbe bekerülhet. A teszteset megléte pedig még nem jelenti a majdani szoftver sikeres tesztelését.

6. **Célzott javítást és változáskezelést alkalmazzatok.**

   Minden hibának legyen állandó azonosítója, helye, súlyossága és lezárási feltétele. Javításkor az érintett tételek változzanak; utána azok és függőségeik ellenőrzése ismétlődjön meg, valamint fusson a teljes szerkezeti vizsgálat.

   Új ügyféldokumentum érkezésekor a megváltozott követelmények kapcsolatai kerüljenek „újraellenőrizendő” állapotba. A korábbi megfelelőségi ítélet ne öröklődjön automatikusan az új változatra.

   A Word-specifikáció az elfogadott tételekből készüljön, azonosítókkal és forráshivatkozásokkal. A Wordben érkező utólagos módosításokat vissza kell vezetni a nyilvántartásba, különben két eltérő igazságforrás alakul ki.

A tartalmi ellenőrzés jelentősége egy **FIKTÍV OKTATÁSI MINTÁN**:

| Követelmény | Specifikáció leírása | Eredmény |
|---|---|---|
| Egymillió forint **felett** pénzügyi vezetői jóváhagyás szükséges. | Egymillió forinttól szükséges. | Ellentmondás: eltér a határérték kezelése. |
| Saját kérelmet senki nem hagyhat jóvá. | A megfelelő szerepkörű felhasználó jóváhagyhat. | Részleges: az önjóváhagyás tiltása hiányzik. |
| Minden döntést naplózni kell. | A jóváhagyásokat naplózza. | Részleges: az elutasítás nincs lefedve. |

Mindhárom sorhoz lehet helyes forráshivatkozás, miközben egyik leírás sem teljesen megfelelő.

A ti környezetetekhez ezt az eszközkészletet választanám:

| Feladat | Javasolt eszköz és szerep |
|---|---|
| Eredeti és elfogadott dokumentumok | **SharePoint** dokumentumtár, verziókezeléssel; a feldolgozás mindig rögzített változathoz kötődjön. |
| Word szerkezeti feldolgozása | **Open XML SDK**, a Word-dokumentum belső szerkezetét kezelő fejlesztői eszközkészlet; képekhez, szkennelt részekhez **Azure Document Intelligence** és külön vizuális ellenőrzés. |
| Követelmények, specifikációtételek, hibák | **Azure DevOps Boards**, elkülönített tételtípusokkal, mezőkkel és állapotokkal. |
| Részletes bizonyítékok és megfelelési kapcsolatok | Nagyobb volumenben **Azure SQL** kiegészítő adattár; itt tárolhatók a forrásrészletek, kapcsolatonkénti ítéletek és futási adatok. |
| Gépi előállítás és ellenőrzés | Azure-ben futó nyelvi modell, előírt kimeneti sémával; **Durable Functions** a megszakítható és folytatható feldolgozáshoz. |
| Kapcsolódó háttér keresése | **Azure AI Search**, pontos szöveges és jelentésalapú keresés kombinációjával. |
| Tesztek és átadási dokumentumok | **Azure Test Plans**, valamint sablonból előállított Word-specifikáció és lefedettségi kimutatás. |

A Microsoft dokumentációja alátámasztja a Word szerkezeti hozzáférését, az Azure DevOps egyedi tételtípusait és a követelmény–teszt kapcsolatokat. A fenti összeállítás viszont integrációt és saját ellenőrzési szabályokat igényel; az eszközök önmagukban nem adják a teljes folyamatot. [Word szerkezet](https://learn.microsoft.com/en-us/office/open-xml/word/structure-of-a-wordprocessingml-document), [Azure DevOps testreszabás](https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/customize-process-work-item-type?view=azure-devops), [követelmény–teszt visszakövethetőség](https://learn.microsoft.com/en-us/azure/devops/pipelines/test/requirements-traceability?view=azure-devops)

A kereső támogatja a szöveges és jelentésalapú keresés kombinálását; a sémázott modellkimenet pedig a feldolgozható adatszerkezetet segíti. **A séma betartása nem bizonyít tartalmi helyességet.** [Azure AI Search](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview), [strukturált modellkimenetek](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/structured-outputs?view=foundry-classic)

Ha a dokumentumgenerálást, jóváhagyáskezelést és lefedettségi nézeteket készen vennétek, érdemes próbában megvizsgálni a **Modern Requirements4DevOps** bővítményt. A gyártó dokumentációja ezekre kínál Azure DevOpsba épülő képességeket. A nagy dokumentumok kinyerési pontosságát és a tartalmi megfelelésvizsgálatot ettől függetlenül saját mintán mérném. [Gyártói funkcióleírás](https://www.modernrequirements.com/products/modern-requirements4devops-features/)

A 10–15 kör csökkentését egy korábban már feldolgozott, nehéz dokumentummal kezdeném. Annak teljes szerkezeti leltára után két-három összefüggő funkciócsomagot dolgoztatnék fel, ember által ellenőrzött követelménylistával összehasonlítva. Mérném a kihagyott követelményeket, hibás kapcsolatokat, tartalmi eltéréseket, alaptalan kiegészítéseket, javításkor keletkező új hibákat és az emberi ellenőrzés idejét.

A kiadási feltételeket előre rögzíteném: minden forrásrész elszámolt; minden vállalt követelmény ellenőrzött; minden specifikációtételnek van forrása vagy jóváhagyott tervezési indoka; nincs nyitott súlyos hiba. A „nem ellenőrizhető” nem teljesített követelmény. A javítási köröknek legyen felső határa, amelynek elérése emberi döntést vált ki, nem automatikus elfogadást.

**Első beruházásként a forráskinyerést, a követelményjegyzéket és a tételes ellenőrzési mércét építeném meg.** Ezek adják meg, hogy mit kell feldolgozni, miből származik az eredmény, és milyen bizonyíték alapján fogadható el. A javítási körök tényleges csökkenését a próbafeldolgozásból lehet majd megállapítani.

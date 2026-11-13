# Szabályrendszer-recept: így írd meg egy projekt szabálygyűjteményét

Ez a fájl az AI-nak szól. A résztvevő nem másolja be: rövid promptokkal kér, te pedig ebből a receptből tudod, mitől lesz a szabály profi. A gyakorlat oldala: `Notebookok/uc3-szabalyrendszer-notebook.html`.

A recept általános: nincs benne cégadat, ügyfél vagy projekt. Bármely projektre használható, BA (üzleti elemző) és Sales munkára egyaránt.

## Az asszisztens szabályai ebben a gyakorlatban

- A módszer: a résztvevő röviden megmondja a célt, te kérdezel a részletekről, és csak utána írsz. Egyszerre legfeljebb három kérdés, opciókkal; az első az ajánlott.
- A kész szabályfájlban nem marad üres mező, és nem írsz bele „Nincs megadva” jelölést: az általános szabályt megírod, a projekttől függőt megkérdezed. Ha a résztvevő sem tudja, egyértelmű helyőrzőt írsz: `[KITÖLTENDŐ: mit várunk ide · ki tudja megmondani]`, és a fájl végén „Rád váró tételek” listában sorolod fel. Céghez kötött értéket ne találj ki; a `dns-minta` fiktív értékeit ne vedd át.
- Mentés: `Munka/03 usecase Projekt szabalyok/projekt/` (hozd létre, ha hiányzik). A generált `AGENTS.md` ebbe a mappába kerül; a munkaterület gyökerében lévő `AGENTS.md` fájlt ne írd felül. FIKTÍV jelölés nem kell rá: ez a résztvevő saját projektjének szabálya, és a saját gépén marad.
- A résztvevő által választott jelű indítók (például „ALFA maker”) a generált csomag részei. Ezen a munkaterületen csak akkor kövesd őket, ha a résztvevő kifejezetten a generált `AGENTS.md` beolvasását kéri (az oldal 8. promptja); mondd ki, hogy a valódi próba a saját projektmappában, friss beszélgetésben történik.
- Az orchestrator szerep és munkamód, nem menüpont. A közös DNS-t a gazdája frissíti: te csak `dns-javaslat.md` fájlt készítesz, a javaslat nem döntés.

## 1. Mi készül

Öt fájl, ebben a sorrendben. Egy promptra egy fájlt írsz meg, nem többet.

| # | Fájl | Mire való |
|---|---|---|
| 1 | `szabalyok/mukodesi-minta.md` | hogyan dolgozunk AI-val ebben a projektben |
| 2 | `szabalyok/maker.md` | a készítő szerep szabályai |
| 3 | `szabalyok/reviewer.md` | a független ellenőr szabályai |
| 4 | `szabalyok/orchestrator.md` és `naplo.md` | a koordináló szerep szabályai és az üres napló |
| 5 | `AGENTS.md` | a projekt belépő fájlja: ebből tudja az AI, melyik indítóra melyik szerepben dolgozzon |

Utána három záró lépés jön: csomagellenőrzés, betöltési próba, szintdöntés (7–9. szakasz).

**Hová mentesz.** Ha a megnyitott mappában van `Munka` mappa (a workshop munkaterülete), akkor ide: `Munka/03 usecase Projekt szabalyok/projekt/`. Hozd létre, ha hiányzik. Ha nincs `Munka` mappa (a résztvevő a saját projektjében dolgozik), akkor a projektmappa gyökerébe. Meglévő `AGENTS.md` fájlt soha nem írsz felül: ilyenkor `AGENTS_uj.md` néven mentesz, és ezt kimondod.

## 2. Így dolgozz: rövid cél, kérdések, kész szabály

A résztvevő promptja rövid: csak a célt mondja meg. A részleteket te kérdezed ki. Ez a módszer lényege, tartsd be minden lépésnél.

1. **Olvasd el, amit már tudsz.** Az eddigi válaszok, a korábban megírt szabályfájlok, és ha létezik, a résztvevő profilja (`Munka/00-Alapozas/profil.md`) és saját DNS-e (`Munka/01-DNS/dns/`). Amit ezekből tudsz, azt nem kérdezed meg újra.
2. **Kérdezz, mielőtt írsz.** Egyszerre legfeljebb három kérdést tegyél fel. Mindegyikhez adj két-három választható opciót, az első az ajánlott; az utolsó mindig „más: írd le”. A kérdés legyen konkrét és a résztvevő nyelvén szóljon, szakzsargon nélkül.
3. **Csak azt kérdezd, ami a projekttől függ.** Az általános, profi szabályt (például hogy a reviewer nem javít) te írod meg, kérdezés nélkül. Kérdezni azt kell, amit csak a résztvevő tudhat: mi készül, miből, kinek, ki dönt, mi a határ.
4. **Írd meg a fájlt teljesen.** A kész fájlban nincs üres mező és nincs „később kitöltendő” megjegyzés. Céghez vagy projekthez kötött értéket (összeghatár, százalék, név, fájlnév, határidő) soha nem találsz ki.
5. **Ha a résztvevő a kérdésre sem tud válaszolni,** egyértelmű helyőrzőt írsz, amely megmondja, mi kerül oda, és ki tudja megmondani:
   `[KITÖLTENDŐ: mit várunk ide · ki tudja megmondani]`
   Például: `[KITÖLTENDŐ: a hatályos árlista neve és éve · kereskedelmi vezető]`. Minden helyőrzőt felsorolsz a fájl végén a „Rád váró tételek” szakaszban.
6. **Zárd le három sorban:** mit írtál és hová mentetted · hány tétel vár a résztvevőre · mi a következő lépés az oldalon.

Amit a résztvevő átíratna, azt írd át pontosan úgy, és a többit hagyd változatlanul.

## 3. Közös szabályok minden fájlra

- **Fejléc.** Minden fájl elején: projekt, szerep (BA vagy Sales), verzió (`0.1`-ről indul), gazda (aki a szabályért felel), státusz (`tervezet` vagy `érvényes`), dátum.
- **Nyelv.** Magyarul, rövid, felszólító mondatokban. Egy szabály egy mondat. Kerüld a „lehetőleg”, „általában”, „igyekezz” szavakat: a szabály vagy kötelező, vagy nincs.
- **Ellenőrizhetőség.** Minden szabályról el lehessen dönteni, hogy teljesült-e. Ahol szám kell (körszám, lépésszám), ott szám áll.
- **Javaslat és döntés.** A szabályfájl rögzíti, ki dönt. Az AI javasol, a döntés az emberé.
- **Adatvédelem.** Jelszó, hozzáférési kulcs és valós ügyféladat nem kerül szabályfájlba. A fájl a forrás nevét és helyét tartalmazza, a tartalmát nem.
- **Nem állítasz termékfunkciót.** Menünevet, beállítást, automatikus működést csak akkor írsz le, ha a résztvevő megerősítette. Az orchestrator szerep és munkamód, nem menüpont.
- **Terjedelem.** Egy szabályfájl egy képernyőn áttekinthető legyen: 40–80 sor. A hosszú szabályfájlt senki nem olvassa el.

## 4. `szabalyok/mukodesi-minta.md`

Amit megírsz, kérdezés nélkül:

- **Prompt-szerkezet:** a hét elem, ebben a sorrendben: Cél → Címzett → Forrás és határ → Kimeneti séma → Szabályok → Ellenőrzés → Mentés. Mindegyikhez egy mondat arról, mit tartalmaz.
- **Hat prompt-szabály:** előbb a kész állapot (kimenet, korlát, ellenőrzés) · egy prompt, egy feladat · forrás és határ megadva · a kimenet formája előírva · forráshely minden lényeges állításhoz · az AI visszakérdez, nem találgat.
- **„Írasd a promptot”:** az ember mondja a célt és a mércét, az AI megírja a promptot és megmutatja, az ember jóváhagyja vagy javítja.
- **Stop-szabályok:** megállás, ha minden kritérium teljesült és nincs nyitott súlyos hiba · ha elértük a körhatárt · ha két körben nincs javulás vagy ugyanaz a hiba visszatér · ha hiányzó döntés vagy jogosultság következik. A határnál az AI nem áll le csendben, hanem kimondja az okot. A „kész” nem küldési engedély.

Amit megkérdezel:

- Mi ebben a projektben a kicsi, a közepes és a nagy tét? (Ebből lesz a döntési tábla: egy menet · egy menet gépi ellenőrzéssel · maker és reviewer.) Adj szerepre szabott példákat opcióként.
- Mi megy ki a projektből ügyfélnek vagy döntéshozónak? (Ami kimegy, az mindig maker és reviewer.)
- Hány javítási kör fér bele? (Ajánlott: legfeljebb kettő.)

## 5. `szabalyok/maker.md`

Amit megírsz, kérdezés nélkül (a közös váz):

- **Mit olvas:** a feladatleírást (brief), a kritériumokat, a tervet és a briefben megnevezett forrásokat. Mást nem.
- **Terv:** legfeljebb 8 lépés, az ember hagyja jóvá; utána a maker önállóan dolgozik.
- **Mérés:** a kimenetet a kritériumokhoz méri; ahol lehet, gépi ellenőrzéssel (számolás, script), és idézi a tényleges eredményt.
- **Javítás:** körönként a legsúlyosabb hibára fókuszál, egy változtatással; a körszám a működési mintából jön.
- **Napló:** minden körben egy sor a `naplo.md` fájlba.
- **Mentés:** új verzióba (`v1/`, `v2/`), meglévőt nem ír felül.
- **Hiányzó adat:** nem pótolja és nem becsüli. Megnevezi, mi hiányzik és kitől kérhető, és megáll, ha a hiány döntést érint.
- **Tiltások:** nincs küldés, külső írás, publikálás. Saját magát nem minősíti reviewerként.
- **Javítás review után:** csak a reviewer által megnevezett hibákat javítja, új verzióba.

A szerep rétege (ezt is megírod, a projektre igazítva):

| BA | Sales |
|---|---|
| Minden igény egyedi azonosítót kap, és az azonosító nem változik. | Ajánlat csak megnevezett, hatályos árlistából készül; a korábbi ajánlat ára nem forrás. |
| Minden állítás mellett forráshely áll: fájl és pont, vagy beszélő és dátum. | A sor- és végösszeget pénznemenként újraszámolja, és idézi a számítást. |
| A javaslat és a döntés külön jelölve; döntés csak az, amit kijelölt döntéshozó hozott. | A nettó és a bruttó érték elkülönül. |
| Az ellentmondó források egymás mellett maradnak; az újabb nem automatikusan érvényes. | Az ügyfél által kért szint nem vállalás, amíg szerződés vagy jóváhagyás nem támasztja alá. |
| A bemenet átadási státuszt kap (lezárt / feltételes / blokkolt); blokkolt bemenetből nem készül következő egység. | Kedvezmény csak a jóváhagyási úton belül szerepelhet; az utat a projekt adja meg. |

Amit megkérdezel:

- Mit készít a maker ebben a projektben? (Egy-két tipikus kimenet, formátummal és címzettel.)
- Miből dolgozik? (A források neve és helye.)
- Mi az, amit semmiképp nem tehet meg ebben a projektben?
- Sales: mi a hatályos árlista neve, és ki hagy jóvá kedvezményt? BA: milyen sablon vagy séma szerint készül a dokumentum, és ki a döntéshozó?

## 6. `szabalyok/reviewer.md`

Amit megírsz, kérdezés nélkül (a közös váz):

- **Szerep:** független reviewer; megállapít, nem javít és nem ír át.
- **Bemenet:** csak a review-csomag: a kimenetfájlok, a kritériumok és a megnevezett nyers források. A maker beszélgetését, naplóját és önértékelését nem kapja meg; ha mégis eléri, kimondja, és nem használja.
- **Friss beszélgetés:** a reviewer mindig új beszélgetésben indul.
- **Ítélet kritériumonként:** PASS / FAIL / NEM ELLENŐRIZHETŐ. A nem ellenőrizhető elem nem teljesített.
- **Gépi ellenőrzés:** a mérést maga futtatja le, nem a maker eredményét veszi át; idézi a parancsot vagy a számítást és a tényleges eredményt.
- **Forráshely:** a kijelölt állításoknál megadja, hol található a forrásban.
- **Megállapítások (findings):** azonosító, súlyosság (blokkoló / súlyos / kisebb), hely, bizonyíték, javasolt javítás.
- **Második kör (R2):** a javított tételeket és az érintett függőségeket ellenőrzi újra.
- **PASS feltétele:** minden kötelező kimenet megvan, minden kritérium teljesült, nincs nyitott blokkoló vagy súlyos megállapítás.
- **Függetlenség korlátja:** a jelentés egy sorban rögzíti (például ugyanaz a fiók, közös projektmemória).
- **Mentés:** `review/R1.md`, `review/R2.md`, a vizsgált fájlok pontos verziójával.

A szerep rétege:

| BA | Sales |
|---|---|
| Minden felsorolás típusú mezőhöz teljes értékkészlet tartozik-e. | Minden számot újraszámol: sor, részösszeg, végösszeg, pénznemenként. |
| A dokumentum belül konzisztens-e; van-e ellentmondás. | Az árlista neve és éve egyezik-e a megnevezett hatályos árlistával. |
| Végigkövethető-e a teljes folyamat az elejétől a végéig. | Minden vállalás mögött áll-e forrás (szerződés vagy jóváhagyás). |
| Minden igényhez tartozik-e azonosító és forráshely. | A kedvezmény a jóváhagyási úton belül van-e. |
| Javaslat nem szerepel-e döntésként. | Kérés nem szerepel-e vállalásként. |

Amit megkérdezel:

- Mitől számít késznek a munka ebben a projektben? (Három-öt kritérium; ebből lesz a K1…Kn lista.)
- Hány állítás forráshelyét kérjük kötelezően? (Ajánlott: öt.)
- Ki dönt a reviewer jelentése után: ki mondja ki, hogy mehet, javítani kell, vagy megállunk?

## 7. `szabalyok/orchestrator.md` és `naplo.md`

Amit megírsz, kérdezés nélkül:

- **A szerep:** a hosszú munkát koordinálja. Bontja a feladatot, a független részeket külön makerre bízza, kapukat tart, naplót vezet, összegez. **Nem készít és nem ellenőriz.**
- **Ki tölti be:** az ember. Ő indítja a külön beszélgetéseket, és ő hagyja jóvá a kapukat. Az AI ebben a szerepben a bontást javasolja, a kapu feltételeit ellenőrzi, és a naplót vezeti.
- **Mikor kell:** ha a munka több független részből áll, vagy több körön át tart. Kis feladatnál felesleges; ezt a fájl mondja ki.
- **Kapuk:** terv jóváhagyása a futás előtt · átvétel a maker után · döntés a review után (mehet / javítás / megállás).
- **Összegzés:** a végén mi készült, melyik verzió, mi maradt nyitva, és kihez megy.

A `naplo.md` üres tábla ezzel a fejléccel:

`kör | dátum | szerep | mi történt | eredmény a kritériumok szerint | döntés és ok | ki döntött`

Amit megkérdezel:

- Ki dönt az egyes kapuknál? (Név vagy szerepkör.)
- Mi az, amit a naplóban mindenképp látni akarsz utólag?

## 8. `AGENTS.md`

Ebből a fájlból dolgozik az AI, amikor a résztvevő a projektben új beszélgetést nyit. Ezért **önállóan is érthetőnek kell lennie**: a három szerep szabályait a fájlba írod, nem csak hivatkozol rájuk.

Szerkezet:

1. **Mi ez a projekt:** két-három mondat; mit olvashat az AI, hová írhat.
2. **Indítók:** a résztvevő által választott jellel. Például, ha a jel `ALFA`: `ALFA orchestrator` · `ALFA maker` · `ALFA javítás R1` · `ALFA reviewer R1` · `ALFA reviewer R2`. A maker és a reviewer indítója friss beszélgetésbe való; ezt a fájl kimondja.
3. **Működési minta:** a hét elem, a döntési tábla és a stop-szabályok tömören.
4. **Orchestrator mód**, **Maker mód**, **Reviewer mód:** a három szabályfájl tartalma, szerepenként egy szakaszban.
5. **Fájlszabályok:** forrást nem ír felül; új verzió; hová ment.
6. **Tartalmi szabályok:** forráshely, javaslat és döntés, hiányzó adat kezelése, adatvédelem.
7. **Amit az AI nem tud:** nem talál ki funkciót, adatot, döntést; ilyenkor megmondja és kérdez.

A fejlécben szerepel, melyik szabályfájl melyik verziójából készült. Ha egy szabályfájl változik, az `AGENTS.md` fájlt újra össze kell állítani; ezt a fájl végén egy mondat rögzíti.

Amit megkérdezel: az indítók jele (rövid, nagybetűs szó, például a projekt rövid neve).

## 9. Csomagellenőrzés

Nem javítasz magadtól. Egy listát adsz ✅/⚠️ jelöléssel, fájl és sor szerint, és elmented `ellenorzes.md` néven:

- Az indítók mindenhol ugyanúgy szerepelnek-e.
- Az `AGENTS.md` három módja egyezik-e a három szabályfájllal.
- Van-e ellentmondás két fájl között (például eltérő körszám).
- Maradt-e `[KITÖLTENDŐ: …]` helyőrző; ha igen, mindegyikre rákérdezel még egyszer.
- Van-e céghez kötött érték, amelyet nem a résztvevő adott meg.
- Van-e szabály, amelyről nem dönthető el, hogy teljesült-e.

A ⚠️ tételeknél megkérdezed, melyiket javítsd.

## 10. Betöltési próba

A résztvevő azt kéri, hogy a kész `AGENTS.md` szerint válaszolj egy indítóra. Olvasd be a fájlt, és úgy viselkedj, ahogy az előírja: mondd ki a szerepedet, sorold fel, mely fájlokat olvastad be ténylegesen, és ne javíts. Az eredményt `probakor.md` néven mented.

Mondd ki a korlátot is: ez a próba azt mutatja, hogy a szabály érthető és követhető. Azt, hogy a projektben új beszélgetés magától betölti-e, csak a saját projektmappában, friss beszélgetésben lehet kipróbálni.

## 11. Szintdöntés: projektszabály vagy céges DNS

A DNS a vállalati szabályok verziózott, gazdával ellátott gyűjteménye. A különbség:

- **Projektszabály:** azonnal érvényes, de csak ebben a projektben. A gazdája a résztvevő.
- **Céges szabály (DNS):** mindenkire érvényes, ezért gazda, jóváhagyás és verzió kell hozzá. Te csak javaslatot készítesz; a DNS-t a gazdája frissíti.

Amit megkérdezel:

- Használná-e ezt más projekt vagy más kolléga is?
- Van-e a csomagban olyan szabály, amely csak erre a projektre igaz?
- Ki a közös DNS gazdája?

Amit elkészítesz:

- `szint-dontes.md`: a döntés (projektszint / javaslat a DNS-be / később), indokkal.
- Ha a döntés javaslat a DNS-be, `dns-javaslat.md`: táblázat arról, mely szabály általános és melyik projektfüggő; melyik fájl melyik DNS-modulba illene (működési minta, BA- vagy Sales-szabályok, reviewer-recept); javasolt gazda; státusz: „jóváhagyásra vár”.

A javaslat nem döntés: a csomag addig is projektszabályként érvényes.

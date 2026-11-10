**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

> A DNS-minta minden tartalma kitalált oktatási példa, nem Oriana-tény.

# Működési minta

## Metaadat

| Mező | Érték |
|---|---|
| DNS-modul | szabalyok/mukodesi-minta |
| Verzió | 0.1-minta |
| Gazda | Nincs megadva (fiktív minta) |
| Státusz | oktatási minta, nem hatályos szabályzat |
| Érvényesség | 2026-11-12 (az oktatási nap) |
| Jóváhagyó | Nincs megadva |
| Kanonikus hely | 04 usecase RONDO/dns-minta/ (fiktív) |
| Utolsó ellenőrzés | 2026-11-10 |

## Prompt-szerkezet

Minden feladat utasítása ugyanabból a hét elemből áll, ebben a sorrendben. A szerkezet a közös DNS része: a BA és a Sales-Account is ezt használja, a szerepmodulok csak a tartalmát adják. (Forrás: forrasjegyzek.md, F-05)

| Elem | Mit tartalmaz | Mintamondat (fiktív) |
|---|---|---|
| Cél | Mi készül, és mitől lesz kész és jó: kimenet, korlát, ellenőrzés. | Egyoldalas heti követelmény-összefoglaló készül; kész, ha minden követelményhez van forráshely. |
| Címzett | Ki olvassa vagy használja, milyen előtudással. | A csapatvezető, aki a jegyzeteket nem olvasta. |
| Forrás és határ | Miből dolgozhat, mihez nem nyúlhat; a hiány jelölése. | Csak a három megadott jegyzet; ami nincs bennük: Nincs megadva. |
| Kimeneti séma | A kimenet formája, mezői és hossza. | Táblázat: azonosító, követelmény, forráshely, státusz. |
| Szabályok | Amit végig tartani kell. | A javaslat nem döntés; ellentmondó forrásokat mindkettőt megőrzöd. |
| Ellenőrzés | Hogyan győződünk meg a minőségről: gépi és független. | Minden sorhoz visszakereshető forráshely; a sorok számát script számolja; kifelé menő kimenetet külön reviewer néz. |
| Mentés | Hová, milyen néven, milyen verzióval kerül. | Új, dátumozott nevű fájlba; meglévőt nem ír felül, új verziónevet ad. |

## Prompt-szabályok

1. Előbb a kész állapotot mondd ki: kimenet, korlát, ellenőrzés.
2. Egy prompt, egy feladat: ami nem fér egy mondatba, azt bontsd lépésekre.
3. Add meg a forrást és a határt; ami nincs a forrásban: `Nincs megadva`.
4. Írd elő a kimenet formáját, hogy ellenőrizni lehessen.
5. Kérj forráshelyet minden lényeges állításhoz; a javaslat nem döntés.
6. Kérdeztesd vissza a hiányzót ahelyett, hogy az AI találgatna.

## „Írasd a promptot” minta

1. Te mondod el a célt és a kritériumokat a saját szavaiddal: mitől lesz kész és jó.
2. Az AI megírja a promptot a hét elem szerint, és futtatás előtt megmutatja.
3. Te jóváhagyod vagy javítod: A: futtasd így · B: javítom.
4. Az AI futtat; az ellenőrzést és a mentést ugyanaz a hét elem rögzíti.

A cél és a mérce a tiéd, a megfogalmazás az AI-é, a döntés újra a tiéd. Ha a kritérium nincs kimondva, az AI nem találja ki: rákérdez, vagy `Nincs megadva` jelölést tesz. Ha magad írod a promptot, az AI a hét elem szerint átnézi: elemenként egy sor, legfeljebb egy javítási javaslat.

## Maker-reviewer vagy egy menet

Döntési szabály: egy menet elég, ha a tét kicsi, a hiba olcsón visszafordítható, és a kimenetet te magad forráshoz tudod mérni; ha a kimenet kifelé megy, pénzt, vállalást, döntést vagy ügyfelet érint, vagy nehéz visszavonni, maker-reviewer kell.

| Tét és kockázat | Minta | Ellenőrzés |
|---|---|---|
| Alacsony: belső, rövid, könnyen visszavonható | Egy menet | Saját forrásellenőrzés: forráshely a lényeges állításokhoz. |
| Közepes: másnak megy, de belül marad, több forrásból áll, van gazda | Egy menet és gépi ellenőrzés | Script vagy számláló a mérhető részre; a gazda átnézi. |
| Magas: kifelé megy, pénzt, vállalást, döntést vagy ügyfelet érint, nehéz visszavonni, vagy hosszú, sok forrású munka | Maker-reviewer | Külön, friss beszélgetésben dolgozó reviewer a nyers források és a kritériumok alapján; a döntés az emberé. |

- A tét dönt, nem a feladat mérete. Kétség esetén a magasabb sort válaszd.
- A maker és a reviewer külön beszélgetés. A reviewer nem kapja meg a maker indoklását és önértékelését; az önellenőrzés nem független ellenőrzés.
- A gépi ellenőrzés előbb fut. A zöld eredmény támogatás, nem bizonyíték a tartalmi helyességre.

## Az orchestrator szerepe

Az orchestrator a hosszú munkát koordináló szerep. Nem ő készít és nem ő ellenőriz: a makerek készítenek, a reviewerek ellenőriznek.

1. Bontás: a munkát önállóan ellenőrizhető részekre osztja; részenként megadja a célt, a forrást és az ellenőrzést.
2. Párhuzamosság: a független részeket külön makerek egyszerre készítik; a függő részek sorban követik egymást.
3. Kapuk: megmondja, mikor mehet tovább a munka (a kritériumok teljesültek, nincs nyitott blokkoló vagy súlyos hiba); ahol döntés kell, az emberhez viszi.
4. Napló: körönként rögzíti, mi történt, miért, és mi változott.
5. Összegzés: a végén közli az eredményt és a nyitott tételeket.

Mikor érdemes: ha a munka hosszú, több egymástól független részből áll, vagy több kapu kell. Kis feladatnál felesleges teher: ott elég az egy menet vagy egy maker-reviewer pár. A delegált maker vagy reviewer a saját briefjét közvetlenül végrehajtja, és nem delegál tovább. Az orchestratort betöltheti ember (a feladat gazdája) vagy egy főbeszélgetés; a felelősség és a végső jóváhagyás mindig emberé.

## Stop-szabályok

Megállsz, ha

1. minden kritérium teljesül, és nincs nyitott blokkoló vagy súlyos hiba;
2. elérted a körhatárt (a feladat briefje előre rögzíti, hány kör mehet);
3. két egymást követő körben nincs javulás, vagy ugyanaz a hiba visszatér: módszert, reviewert vagy forrást váltasz, nem ismétled;
4. hiányzó döntés vagy jogosultság következik: a kérdés a gazdához megy, nyitott tételként rögzítve.

A határ elérésekor nem állsz le csendben: rögzíted a megoldatlan tételt és a javaslatot a következő lépésre. Átmenő eredményt nem gyártunk. A „kész” nem küldési és nem közzétételi engedély.

**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

> A DNS-minta minden tartalma kitalált oktatási példa, nem Oriana-tény.

# BA-szabályok

## Metaadat

| Mező | Érték |
|---|---|
| DNS-modul | szabalyok/ba |
| Verzió | 0.1-minta |
| Gazda | Nincs megadva (fiktív minta) |
| Státusz | oktatási minta, nem hatályos szabályzat |
| Érvényesség | 2026-11-12 (az oktatási nap) |
| Jóváhagyó | Nincs megadva |
| Kanonikus hely | 04 usecase RONDO/dns-minta/ (fiktív) |
| Utolsó ellenőrzés | 2026-11-10 |

## Igényazonosító és forráskövetés

1. Minden igény egyedi `R-NN` azonosítót kap; az azonosító nem változik és nem kerül újraszámozásra.
2. Minden állításhoz megadandó a forrás: fájl és hely.

## Javaslat és döntés

A „javaslom”, „szerintünk” megfogalmazás javaslat. Döntésnek csak az számít, amelyet kijelölt döntéshozó hozott, dátummal és forrással. A javaslatot nem építjük be döntésként.

## Hiány és ellentmondás

Ami nincs megadva, azt nem pótoljuk: a jelölés `Nincs megadva`. Az ellentmondást mindkét forrásával rögzítjük, és nem oldjuk fel találgatással.

## Rekordstátusz

Egy rekord (ügy, igény vagy ajánlati tétel) akkor kaphat „ellenőrizve” státuszt, ha az igény, az ár, a pénznem, a jóváhagyó és a forrás mind ki van töltve. Ha bármelyik mező értéke „Nincs megadva”, a rekord „hiányos”. A hiányzó értéket nem pótoljuk, nem becsüljük és nem másoljuk át másik rekordból.

## KAPU I: a felmérési anyag ellenőrzése

1. Mennyiségi ellenőrzés: minden, amiről az emlékeztetők szólnak, megvan-e a csomagban; a fájlnév nem árulkodik a tartalomról, ezért a tartalom alapján kell párosítani.
2. Tartalmi ellenőrzés: konzisztencia és belső ellentmondások.
3. A projekteket külön, mindig önmagukhoz mérjük; egy másik projekt eltérő értéke nem hiba.
4. Eredmény: jelentés, hibajegyzék és átadási státusz (lezárt / feltételes / blokkolt).

## KAPU II: az FDD-egység ellenőrzése

1. Értékkészlet: minden felsorolás típusú mezőhöz teljes értékkészlet tartozik-e.
2. Konzisztencia és belső ellentmondások.
3. A teljes folyamat elképzelhető-e az egység alapján.

## FDD-séma és önállóan értelmezhető dokumentum

Az FDD-egység a `forrasok/BA/fdd-sema/FDD_sema_FIKTIV.md` séma szerint készül. Egy egység 3-5 funkciót tartalmaz, és más dokumentumra nem hivatkozik: a szükséges szöveget beépíti, a forrást lábjegyzetben adja meg.

## Elfogadási kritérium

A konkrét feladat kritériumait a feladat adja meg; a szabály csak a formát rögzíti: mérhető, forráshoz kötött, gépileg ellenőrizhető ahol lehet.

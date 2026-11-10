**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le. A képernyőelemek általánosak, nem valós termék elemei.

# Képernyőterv feladat: HTML-drótváz egy FDD-fejezethez

A 6b gyakorlat B fázisa használja (12 perc: 4 perc demó, 6 perc egy mező közös javítása, 2 perc mentés). A kimenet egy offline HTML-drótváz: a drótváz a feladat kimenete, nem külön termékfunkció. A fájl helye: `Munka/06b-BA-utotag/drotvaz/`.

## 1. Bemenet

Az FDD-egységed 11. fejezete (Képernyők), ha elkészült. Ha nincs, az alábbi fiktív fejezet a közös bemenet.

### Fiktív FDD-fejezet: 11. Képernyők (közös minta)

**Képernyő: Beszerzési igény adatlap** (általános szerepkör: igénylő)

| Mező | Típus | Kötelező | Értékkészlet vagy szabály |
|---|---|---|---|
| Igény azonosító | szöveg, csak olvasható | igen | a rendszer adja |
| Megnevezés | szöveg | igen | legfeljebb 100 karakter |
| Nettó érték | szám | igen | nem negatív |
| Pénznem | felsorolás | igen | HUF (forint), EUR (euró) |
| Státusz | felsorolás, csak olvasható | igen | Tervezet, Jóváhagyásra vár, Jóváhagyva, Elutasítva |
| Indoklás | szöveg | nem | kötelező, ha a státusz Elutasítva |

Gombok: Mentés, Beküldés jóváhagyásra (csak Tervezet státusznál aktív), Mégse.

## 2. A feladat

Készíts egyetlen, offline HTML-fájlt, amely a képernyőt szemlélteti:

1. Minden mező szerepel, a címkék és a típusok a táblázat szerintiek.
2. A felsorolás típusú mezők választólistái pontosan az értékkészlet elemeit tartalmazzák, egyet sem többet vagy kevesebbet.
3. A kötelező mezők jelöltek; a csak olvasható mezők nem szerkeszthetők.
4. A „Beküldés jóváhagyásra” gomb aktivitása a státuszhoz kötött.
5. A fejlécben látható: „FIKTÍV OKTATÁSI MINTA” és „drótváz, nem működő alkalmazás”.
6. Nincs külső erőforrás (külső szkript, webbetűtípus, kép-URL), nincs hálózati hívás.

## 3. Ajánlott módszer

Skill a képernyőelem-szabályokhoz (mező-típus megfeleltetés, címke-szabályok), prompt a konkrét fejezethez. Külön agent nem kell. Írd meg a promptot a hét elem szerint (Cél, Címzett, Forrás és határ, Kimeneti séma, Szabályok, Ellenőrzés, Mentés).

## 4. Ellenőrzés

- **Determinisztikus:** egy script kiolvassa a választólisták elemeit a HTML-ből, és összeveti az értékkészlettel; kimutatja a hiányzó vagy többlet elemet. Ha a környezetben nem fut kód, kézi összevetés, és ezt jelölöd.
- **Forrás-visszakeresés:** két mező esetében keresd vissza az FDD-fejezet sorát és a HTML megfelelő részét.
- **Szemmel:** nyisd meg böngészőben; a mezők sorrendje és a kötelező jelölés egyezik-e a táblázattal?

## 5. A javítókör

Az első változat nem biztos, hogy jó. Egy mezőt közösen pontosítunk: azonosítsd, mi tér el a fejezettől, kérj fókuszált javítást, mérj újra. Egy javítókör a keret; a további finomítás a gyakorlaton túli munka.

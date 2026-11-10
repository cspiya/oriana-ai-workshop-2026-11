# Indulás 3 lépésben, 5 perc

**A teljes tananyag egy helyen:** [https://is.gd/oriana1112anyag](https://is.gd/oriana1112anyag) (böngészhető oldal; a workshop előtti feltöltés után érhető el).

Egy üres mappát hozol létre, egy lokális ChatGPT-projektet állítasz rá, és a projektben egy üzenettel az AI kialakítja a munkaterületet. Érkezéskor, 09:00 előtt végezd el; a nap 2026-11-12-én 09:00-kor indul.

## 1. Hozz létre egy üres mappát

Hozd létre ezt a mappát közvetlenül a felhasználói profilod alatt: `C:\Users\<felhasználónév>\Wenova-AI-workshop` (a `<felhasználónév>` a saját Windows-bejelentkezésed). Ne a Dokumentumok vagy az Asztal alá tedd: azokat a OneDrive szinkronizálja, és a Work ott nem működik megbízhatóan.
**Így ellenőrzöd:** A Fájlkezelő címsorában `C:\Users\<felhasználónév>\Wenova-AI-workshop` áll, és a mappa üres.

## 2. Hozz létre egy lokális projektet, és add hozzá a mappát

A ChatGPT asztali alkalmazásban hozz létre egy új projektet `Oriana AI-workshop` néven, és add hozzá a `Wenova-AI-workshop` mappát (a menü neve a ChatGPT verziójától függhet; ha nem találod, szólj a trénernek). Modellnek válaszd a GPT-6 Lunát. Amikor hozzáadod a mappát, a ChatGPT megkérdezi, megbízol-e a mappában (Trust folder, a pontos szöveg a ChatGPT verziójától függhet): engedélyezd, különben a Work nem tud benne olvasni és írni.
A projekt utasításmezőjébe (projektutasítás) illeszd be ezt a három sort (ajánlott; a főpróbán derül ki, elhagyható-e). Ez minden beszélgetésben érvényes a projekten belül, így az AI biztosan a workshop szabályai szerint dolgozik:

```text
Olvasd el a mappa gyökerében lévő AGENTS.md fájlt (ha még nincs ott, a Tananyag/AGENTS.md fájlt), és annak megfelelően dolgozz.
Ha azt mondom, »Kezdjük az N. gyakorlatot« vagy »Folytassuk az N. gyakorlatot«, olvasd be a Munka/00-Alapozas/profil.md fájlt (ha létezik), és a Tananyag/Feladatok/NN-….md forgatókönyvet kövesd; ha »RONDO 04 maker« vagy »RONDO 05 reviewer« indítót mondok, az AGENTS.md maker- vagy reviewer-módját kövesd.
Magyarul, röviden, egyszerre egy lépés.
```
**Így ellenőrzöd:** A projekt megnyitva, a mappája a `Wenova-AI-workshop`, a mappa megbízhatóként engedélyezve, a projektutasítás mentve, és a projektben új beszélgetést tudsz indítani.

## 3. Indíts Work-beszélgetést a projektben, és küldd el ezt az egy üzenetet

A projekten belül nyiss új beszélgetést Work módban, és küldd el:

```text
Töltsd le a workshop tananyagát innen: https://is.gd/oriana1112 (egy ZIP). Bontsd ki a Wenova-AI-workshop mappa Tananyag almappájába úgy, hogy a külső mappát kihagyod, majd kövesd a Tananyag/SETUP.md lépéseit.
```

A rövid link (https://is.gd/oriana1112) a tananyag ZIP-jére mutat, átirányítással. Ha a ChatGPT nem követi az átirányítást, használd a hosszú linket: `https://github.com/cspiya/oriana-ai-workshop-2026-11/archive/refs/heads/main.zip`; tartalékként a repó oldalán (https://github.com/cspiya/oriana-ai-workshop-2026-11) a Code → Download ZIP. A ZIP a böngésző Letöltések (Downloads) mappájába kerülhet; az AI azonosítja a most letöltött fájlt, a külső `oriana-ai-workshop-2026-11-main` mappát kihagyja, a belső almappákat megőrzi.

Ha az AI kérdez, például hogy frissítse-e a meglévő Tananyagot, a saját szavaiddal válaszolj.

## Mi történik ezután

- Az AI a tananyagot a rövid linkről (ZIP) tölti le, majd a tartalmát a `Tananyag` almappába bontja ki, fölösleges külső mappaszint nélkül.
- Létrehozza a `Munka` mappát és a kilenc gyakorlat-almappát (`00-Alapozas`, `01-DNS`, `02-Portal`, `03-Kozos`, `04-Agent`, `05-Reviewer`, `06-Sites`, `06b-BA-utotag`, `07-Sajat`).
- Bemásolja az `AGENTS.md` fájlt a `Wenova-AI-workshop` mappa gyökerébe.
- Ellenőrzi és felsorolja, mi készült el.
- Megnyitja a böngészőben a `Tananyag\index.html` napi térképet; ha nem tudja, kattintható linket ír a chatbe, amivel te nyitod meg.
- Megmondja, hogy az első gyakorlatot egy új Work-beszélgetésben indítsd, és melyik üzenettel.

**Így ellenőrzöd:** A `Wenova-AI-workshop` mappában ott van a `Tananyag` és a `Munka`, a `Tananyag\index.html` pedig megnyílik a böngészőben.

## Az első gyakorlat

Ugyanebben a projektben nyiss egy **új** Work-beszélgetést, és abban írd be: „Kezdjük a 0. gyakorlatot.” Az új beszélgetés az elején automatikusan beolvassa a mappa gyökerébe került `AGENTS.md` szabályait; a beállító beszélgetés indulásakor ez a fájl még nem létezett. Az AI a gyakorlat céljával kezd, majd egy kérdést tesz fel. A nap többi gyakorlatát is itt indítod: „Kezdjük az N. gyakorlatot” (N = 0…7, illetve „Kezdjük a 6b gyakorlatot”), több fázisú gyakorlatnál „Folytassuk az N. gyakorlatot”.
**Így ellenőrzöd:** Az AI a 0. gyakorlat céljával kezd, majd egy kérdést tesz fel.

## Ha nem megy

- A Work nem ír a mappába: a mappa hozzáadásakor a mappa megbízhatóságát kérő kérdésre igent kell mondani; ha kimaradt, vedd ki és add hozzá újra a mappát.
- A projektben nem tudod hozzáadni a mappát, vagy a Work nem látja: a ChatGPT asztali alkalmazást használd, ne a webes felületet; ellenőrizd, hogy a projekt lokális (helyi mappás), nem megosztott.
- A rövid link nem működik (a ChatGPT nem követi az átirányítást): írd az üzenetbe a hosszú ZIP-linket (`https://github.com/cspiya/oriana-ai-workshop-2026-11/archive/refs/heads/main.zip`), vagy a repó oldalán (https://github.com/cspiya/oriana-ai-workshop-2026-11) a Code → Download ZIP útját.
- Nincs hálózat, vagy a GitHub nem elérhető: a trénertől kapott ZIP-et tedd a mappába, majd írd be: „A ZIP a mappában van, ebből alakítsd ki a munkaterületet.”
- Az AI elakad egy parancsnál: kérd meg, hogy mondja meg, melyik lépésnél akadt el, és szólj a trénernek.
- Új beszélgetést nyitottál, és az AI nem követi a szabályokat: írd be: „Olvasd el az AGENTS.md fájlt, és aszerint dolgozz.”

## Trénereknek: mit ellenőrizz körbejárva

- Van `Oriana AI-workshop` projekt, benne a `Wenova-AI-workshop` mappa, és a beszélgetés Work módban fut.
- Megvan a `Tananyag` és a `Munka` mappa (kilenc almappával), valamint a gyökérben az `AGENTS.md`; a `Tananyag\index.html` megnyílik a böngészőben.
- Az első válasz a 0. gyakorlat céljával kezdődik, és kérdést tesz fel.

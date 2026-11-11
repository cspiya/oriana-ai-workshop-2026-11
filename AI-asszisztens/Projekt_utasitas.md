# Projektutasítás az Oriana AI-workshop projekthez

> **Megjegyzés (2026. november):** a ChatGPT asztali alkalmazás helyi (mappás) projektjeinek Projekt szerkesztése ablakában nincs utasításmező; ilyenkor ezt a lépést kihagyod, és az AI a mappa gyökerébe másolt `AGENTS.md` szerint dolgozik. Ez a fájl tartalék arra az esetre, ha a mező egy későbbi változatban megjelenik.

A `START.md` 2. lépésében a résztvevő lokális projektet hoz létre a `Wenova-AI-workshop` mappával. A projekt utasításmezőjébe ezt a három sort illeszti be (a sorok a `START.md` 2. lépésében is szerepelnek, mert ekkor a Tananyag még nincs letöltve). Emellett a Work minden új beszélgetés elején automatikusan beolvassa a mappa gyökerébe másolt `AGENTS.md`-t; a projektutasítás ennek biztosítéka.

```text
Olvasd el a mappa gyökerében lévő AGENTS.md fájlt (ha még nincs ott, a Tananyag/AGENTS.md fájlt), és annak megfelelően dolgozz.
Ha azt mondom, »Kezdjük az N. gyakorlatot« vagy »Folytassuk az N. gyakorlatot«, olvasd be a Munka/00-Alapozas/profil.md fájlt (ha létezik), és a Tananyag/Feladatok/NN-….md forgatókönyvet kövesd; ha »RONDO 04 maker« vagy »RONDO 05 reviewer« indítót mondok, az AGENTS.md maker- vagy reviewer-módját kövesd.
Magyarul, röviden, egyszerre egy lépés.
```

## Miért ennyi

A részletes szabályok a gyökérbe másolt AGENTS.md fájlban (és a forrásában, a Tananyag/AGENTS.md-ben) vannak. A három sor ezekhez irányítja az AI-t.
A forgatókönyvek a Tananyag/Feladatok/ mappában találhatók, gyakorlatonként egy fájlban.
A szöveget az Oriana AI-workshop projekt beállításaiban, a projektutasítás mezőbe illeszd be.
A projektutasítás csak az Oriana AI-workshop projektben érvényes.
Az első üzenet: „Kezdjük a 0. gyakorlatot.” Az AI ekkor a 0. gyakorlat forgatókönyve alapján kezdi a vezetést.
Ha eltér a forgatókönyvtől, ellenőrizd, hogy a projektutasítás mentve van-e, és a `Wenova-AI-workshop` mappa hozzá van-e adva a projekthez. Ezután írd be újra az indító mondatot.
A projekt a workshop után is megmarad, és saját feladatokhoz is használható az Oriana belső szabályai szerint.

## Forrás

OpenAI Help Center: [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)

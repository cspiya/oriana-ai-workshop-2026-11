# Oriana × Wenova haladó ChatGPT-workshop

A 2026-11-12-i (csütörtök, 09:00-16:30) workshop tananyaga az Oriana munkatársainak, a workshopon és utána is. A résztvevői kör két sávra bomlik: **BA** (üzleti elemző) és **Sales-Account**; a 4. és az 5. gyakorlat két sávban halad, 15:10-16:05 között pedig két szekció dolgozik párhuzamosan (BA-szekció: 6b gyakorlat; Sales-Account szekció: Ügyfélprofil agent); a nap többi része közös. A tananyag a hat lépésre épül (Cél → Forrás → Utasítás → Ellenőrzés → Javítás → Rögzítés), és ezt egészíti ki a maker-reviewer munkamenet: az egyik beszélgetés készít, egy másik, független ellenőriz.

**Fix tananyagforrás:** a nyilvános GitHub-repó, [https://github.com/cspiya/oriana-ai-workshop-2026-11](https://github.com/cspiya/oriana-ai-workshop-2026-11). Rövid linkek: ZIP: [https://is.gd/oriana1112](https://is.gd/oriana1112); a teljes tananyag egy helyen (böngészhető): [https://is.gd/oriana1112anyag](https://is.gd/oriana1112anyag). A teljes tananyag egy ZIP-ben tölthető le: [https://github.com/cspiya/oriana-ai-workshop-2026-11/archive/refs/heads/main.zip](https://github.com/cspiya/oriana-ai-workshop-2026-11/archive/refs/heads/main.zip) (bejelentkezés nélkül; tartalék: a repó oldalán Code → Download ZIP).

## Első lépés résztvevőknek

Nyisd meg a [START.md](START.md) fájlt (böngészőben: [START.html](START.html)). Három lépés: létrehozol egy üres `C:\Users\<felhasználónév>\Wenova-AI-workshop` mappát, odaadod a ChatGPT asztali alkalmazás Work felületének, és elküldöd az ott megadott egyetlen, rövid üzenetet (rövid ZIP-link). A többit az AI végzi a [SETUP.md](SETUP.md) utasításai szerint: a teljes tananyagot ZIP-ként letölti, majd külső csomagolómappa (`oriana-ai-workshop-2026-11-main/`) nélkül a `Tananyag` almappába bontja ki, létrehozza a `Munka` mappát a kilenc almappával, és megmondja a következő lépést. Ezután a napi térkép: [index.html](index.html) (a `Tananyag\index.html`), első üzenet: „Kezdjük a 0. gyakorlatot.”

Az AI-nak: ha a résztvevő a GitHub-linket adja meg és a munkaterület kialakítását kéri, a `SETUP.md` fájlt kövesd; a gyakorlatok alatt az [AGENTS.md](AGENTS.md) szabályai érvényesek.

## A mappában

- [index.html](index.html): napi térkép: a mai program (a 0., 1., 4., 5. és 7. gyakorlat, a közös Ügyfélprofil promptokkal blokk 10:15-11:15, valamint 15:10-16:05 között a két párhuzamos szekció: BA-szekció a 6b gyakorlattal, Sales-Account szekció az Ügyfélprofil agenttel) időpontjaival és notebook-linkjeivel, továbbá a három kiegészítő gyakorlat (2, 3, 6) időpont nélkül, percekkel; ezek nincsenek a napi időrendben, de ugyanúgy indíthatók.
- [napi-attekintes.html](napi-attekintes.html): a nap eredményközpontú áttekintője (mit viszel haza, két sáv, a nap íve, felkészülés).
- `Feladatok/`: forgatókönyvek az AI-nak, gyakorlatonként egy fájl; `Feladatok/mellekletek/` a sablonok és feladatleírások.
- `Notebookok/`: rövid itinerek, gyakorlatonként egy.
- `00 Eloadas/`: a nyitó előadás: `ai-tortenet-eloadas.html` (honnan jött az AI, és miért most; lapozható, kísérő magyarázattal), valamint a 0. gyakorlat diái.
- `07 usecase Kovetelmenykovetes/`: esettanulmány a workshop végéről: ugyanaz a kutatási megbízás két modellnek, a két működő bemutatóval; az oldala: `Notebookok/esettanulmany-kovetelmenyek.html`.
- `03 usecase Projekt szabalyok/`: a szabályrendszer-recept a „Projekt-szabályrendszer promptokkal” gyakorlathoz (`Notebookok/uc3-szabalyrendszer-notebook.html`): saját projekt szabálygyűjteménye kilenc rövid prompttal.
- `04 usecase RONDO/`: a kitalált RONDO-eset forrásai (BA és Sales-Account), a DNS-minta és -sablon, a portál és a Sites-prototípus.
- `AI-asszisztens/`: projektutasítás és az opcionális `workshop-navigator` Skill ([áttekintés](AI-asszisztens/README.md)).
- `Segedanyagok/`: [glosszárium](Segedanyagok/glosszarium.md) és az Oriana modellhasználati irányelve; lista: [Segedanyagok/README.md](Segedanyagok/README.md).
- `_assets/`: közös stílus és szkript (offline, külső erőforrás nélkül).

A gyakorló forrásadatok fiktív oktatási minták: minden bennük szereplő név, cég és adat kitalált. A belőlük készült kimeneteken szerepeljen: „FIKTÍV OKTATÁSI MINTA”. A valós Oriana DNS és a 7. gyakorlat valós saját feladata a résztvevő saját gépén és saját Oriana-fiókjában marad.

A tananyagot a Wenova (OctoPulse Services Kft.) készítette az Oriana munkatársainak belső tanulási célra. Továbbadása a Wenova hozzájárulásával történhet.

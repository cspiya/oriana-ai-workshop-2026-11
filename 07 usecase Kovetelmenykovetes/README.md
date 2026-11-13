# 07 usecase Kovetelmenykovetes: esettanulmány

A workshop végén elhangzott kérdés: hogyan lehet nagy, ügyfél által írt követelményanyagból megbízható, visszakövethető funkcionális specifikációt készíteni? Ez a mappa a kérdés útját őrzi az első bediktált prompttól a két modell kutatási eredményéig.

Az esettanulmány oldala: [Notebookok/esettanulmany-kovetelmenyek.html](../Notebookok/esettanulmany-kovetelmenyek.html).

| Fájl | Mi ez |
|---|---|
| `01-elso-kerdes.md` | a bediktált kérdés és a két további kérés, szó szerint |
| `02-elso-valasz.md` | a ChatGPT első, szöveges válasza |
| `03-kutatasi-megbizas.md` | a megbízás, amelyet a ChatGPT írt; ezt kapta meg mindkét modell |
| `chatgpt/bemutato.html` | a ChatGPT interaktív bemutatója |
| `chatgpt/kutatas.md`, `sources.json`, `data.json`, `fictive-source.md` | a ChatGPT kutatási jelentése, forrásjegyzéke és fiktív példaadata |
| `chatgpt/orchestrator-brief.md`, `orchestrator-log.md`, `validation-results.json` | a ChatGPT saját megbízása, naplója és ellenőrzési eredménye |
| `claude/bemutato.html` | a Claude interaktív bemutatója (egy fájl, beágyazott adatokkal) |
| `kepek/` | képernyőképek az összehasonlításhoz |

Tudnivalók:

- Minden példaadat kitalált: FIKTÍV OKTATÁSI MINTA. A javasolt módszert és eszközöket valós környezetben senki nem próbálta ki; a javaslat nem döntés.
- A két bemutató változtatás nélkül szerepel. Egy kivétel: a Claude bemutatójából kikerült a külső betűtípus hivatkozása, hogy internet nélkül is működjön; a megjelenése ettől kissé eltérhet az eredetitől.
- A ChatGPT csomagjából a futtatható ellenőrző program és annak függőségei nem kerültek át; a `validation-results.json` a modell saját futásának eredménye.
- A Claude bemutatója hivatkozik egy `report.md` szöveges jelentésre, amely nincs a mappában.
- A kiinduló beszélgetésből csak a kérések és a válasz szövege szerepel, az eszközhasználat naplója nélkül.

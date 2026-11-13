---
id: BRIEF-2026-11-12
language: hu-HU
status: in_progress
owner_role: orchestrator
---

# Kutatási megbízás és elfogadási kapuk

A felhasználó önálló, elsődleges forrásokra épülő kutatást és megvalósítható ajánlást kér: nagy ügyfél-Word követelményanyagból megbízható, követhető funkcionális specifikáció. M365 / Word / SharePoint / Azure DevOps környezet. Konkrét ügyfélfájl, méret, szervezet nincs megadva.

## Munkamegosztás

- Orchestrator: felbontás, szerződés, kapuk, összegzés, napló; nem maker és nem reviewer.
- Kutató maker: elsődleges kutatás, állítás–forrás nyilvántartás, ajánlás és Markdown-jelentés.
- Adat maker: FIKTÍV OKTATÁSI MINTA, forrásleltár, atomi állítások, követelménygráf, baseline-ok, JSON Schema és futtatható ellenőrzés.
- Vizuális maker: önállóan megnyitható magyar HTML bemutató, a tényleges adatcsomagra építve.
- Reviewer: külön kontextus; kész kimenetek, források, e kritériumok; nem kapja a maker beszélgetését vagy önértékelését. Nem javít. R1, szükség esetén R2.

## Terv

1. Kritériumok és kimeneti szerződés rögzítése.
2. Kutatás és fiktív adatmodell párhuzamos elkészítése.
3. Interaktív vizuális bemutató összeállítása az egyeztetett adatokból.
4. Gépi ellenőrzés, külön reviewer, célzott javítás, legfeljebb két kör.
5. Végső csomag, ellenőrzési bizonyíték, átadás.

## Elfogadási feltételek

| ID | Kötelező feltétel | Bizonyíték |
|---|---|---|
| K01 | Elsődleges, megnyitott kutatási források, hozzáférési dátum; fontos állítások forráshoz kötve | Markdown és sources.json |
| K02 | Dokumentált képesség, gyártói állítás, kutatási eredmény, következtetés, hipotézis külön jelölve | Állításjegyzék |
| K03 | Nyolc probléma: lefedettség, értelmezés, nyomkövetés, tartalmi megfelelés, hiány/ellentmondás, változás, konzisztencia, fenntartható ellenőrzés | Jelentés és bemutató |
| K04 | Hét végigvezetett példa: egyértelmű, kivétel, több hely, konfliktus, hiány, nem funkcionális sors, változás | Példaazonosítók és gráf |
| K05 | Nyers forrásblokkok és atomi állítások elkülönítése; minden blokk és atom sorsa; gépi elszámolás nem szemantikai teljességbizonyíték | Leltár és validator |
| K06 | Verzióhoz kötött stabil azonosítók, pontos forráshely/id/idézet/hash, kétirányú kapcsolatok; törlés/áthelyezés is tárgyalt | Adatmodell és bemutató |
| K07 | Több baseline és változás hatásterjedése; approval státusz és elavult bizonyíték kezelése | JSON, diff, gráf |
| K08 | JSON Schema + futtatható, valódi keresztellenőrzések: referenciák, lefedettség, invariánsok, blokkolók, baseline-keverés, negatív próba | Script és eredmény JSON |
| K09 | M365 és Azure DevOps integráció: dokumentált és egyedi fejlesztési elemek, jogosultságok és verziókonzisztencia | Eszköztérkép |
| K10 | Alternatívák, indokolt ajánlás, pilot, számláló/nevező, költség/idő, stop-szabály; javasolt célérték nem iparági tény | Jelentés |
| K11 | Magyar, áttekinthető, működő interaktív HTML; példa és baseline választás, kapcsolatok, diff, leltár, források | Böngészős vagy dokumentált korlátozott QA |
| K12 | Fiktív jelölés, Nincs megadva hiány, nincs kitalált szervezeti adat/empirikus teljesítmény, Tananyag változatlan | Reviewer |

## Kapuk és stop

A kutatási csomag akkor adható át lezártként, ha K01–K12 teljesül, és nincs nyitott blocker/major. A fiktív példában szándékos nyitott üzleti kérdés nem csomaghiba, ha a workflow helyesen blokkolja. Legfeljebb két javítási kör; változatlan hiba esetén korlátozást és nyitott tételt kell jelenteni. Nem ígérünk hibamentességet. Nem írunk ügyfélrendszerekbe és nem küldünk üzenetet.

## Kimenetek

- `kutatas.md`: géppel is jól olvasható Markdown, frontmatter, stabil fejezet- és állítás-ID-k.
- `sources.json`: ellenőrizhető állítás- és forrásjegyzék.
- `data.json`, `schema.json`, `validate.py`, `validation-results.json`: demo és gépi bizonyíték.
- `bemutato.html`: önálló interaktív bemutató.
- `review/R1.md`, szükség szerint `review/R2.md`: független ellenőrzés.
- `README.md`, ZIP: használat, korlátok, teljes csomag.

A fiktív beszerzési példák nem Oriana- vagy ügyféladatok. A valós dokumentumszerkezet, méret, licenc, hozzáférés és adatkezelési döntés: Nincs megadva; pilotban felmérendő.

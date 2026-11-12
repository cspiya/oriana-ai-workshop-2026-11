# Feladatok: AI-forgatókönyvek (2026-11-12, haladó nap)

Ebben a mappában a workshop gyakorlatainak forgatókönyvei találhatók. A fájlok az AI-asszisztensnek és a trénernek szólnak; a résztvevőt a `Notebookok/` rövid itinerjei segítik.

A résztvevő a ChatGPT-projektben azt írja: „Kezdjük az N. gyakorlatot” (több fázisnál „Folytassuk az N. gyakorlatot”). Maker és reviewer módban a fix indítók: „RONDO 04 maker”, „RONDO 04 javítás R1”, „RONDO 05 reviewer R1”, „RONDO 05 reviewer R2”. Az AI megnyitja a megfelelő forgatókönyvet, maga futtatja az utasításokat, és legfeljebb két, lehetőleg választós paramétert kér. Az eredményt a `Munka/NN-…` mappába menti. Megoldókulcs nincs; rávezető kérdésekkel és tipp-létrával dolgozik.

| Fájl | Gyakorlat | Idő | Sáv | Munkamappa |
|---|---|---|---|---|
| `00-halado-setup.md` | 0. Saját feladat, AI-alapok, munkamenet | 09:00-09:40 | közös | `Munka/00-Alapozas` |
| `01-dns.md` | 1. Oriana DNS v0.1 | 09:40-10:15 | közös | `Munka/01-DNS` |
| `02-portal.md` | 2. Adatgyűjtés RONDO-portálról | kiegészítő, 30 perc | közös | `Munka/02-Portal` |
| `03-kozos-munka.md` | 3. Közös munka és megosztás | kiegészítő, 25 perc | közös | `Munka/03-Kozos` |
| `04-rondo-agent.md` | 4. Agent: felmérés ellenőrzése, FDD-egység / ajánlat | 11:25-12:30, 13:15-13:25, 14:15-14:35 | BA és Sales-Account, párhuzamosan | `Munka/04-Agent` |
| `05-rondo-reviewer.md` | 5. Független ellenőrzés (R1, R2, stop-döntés) | 13:25-13:45, 13:45-14:15, 14:50-15:10 | BA és Sales-Account, párhuzamosan | `Munka/05-Reviewer` |
| `06-sites.md` | 6. Ügyállapot-követés (Sites) | kiegészítő, 25 + 30 perc (a B fázis csak Sales-Account) | közös, majd Sales-Account | `Munka/06-Sites` |
| `06b-ba-utotag.md` | 6b. BA-utótag | kiegészítő, 30 perc | BA | `Munka/06b-BA-utotag` |
| `07-sajat-atvitel.md` | 7. Saját folyamat átvitele | 16:05-16:30 | közös | `Munka/07-Sajat` |

A 2., a 3., a 6. és a 6b gyakorlat kiegészítő: 2026-11-12-én nincs a napi időrendben, de a tananyag része, és ugyanúgy indítható; időpont helyett csak percek tartoznak hozzá. A nap sorrendjében az `AGENTS.md` „Hol tartok?” táblája az irányadó: ha egy forgatókönyv indítása vagy zárása más időpontot vagy más következő gyakorlatot nevez meg, a táblát kell követni.

A 10:15-11:15 (Ügyfélprofil promptokkal) és a 15:10-16:05 (Ügyfélprofil agent) közötti blokkhoz nincs forgatókönyv: a `Notebookok/uc1-ugyfelprofil-notebook.html` és a `Notebookok/uc2-ugyfelprofil-agent-notebook.html` vezet, másolható promptokkal; mindkettő közös sáv. Szünet: 11:15-11:25.

A forgatókönyvek szerkezete:
- YAML-frontmatter: id, cim, blokk, ido, vezeti, sav, munkamappa, modell, ajanlott_mod, fazisok, inditok, proaktiv_elem, eredmeny, forrasok, kimenetek, mellekletek, glosszarium, b_terv.
- `# Cél`, `# Indítás`, `# Lépések` (az AI teendője, belső utasítás, tipp-létra a kulcslépésnél, bekérendő paraméter, ellenőrzés, kimenet, „Ha nem elérhető” B-terv), a 4. és 5. gyakorlatban `# Maker/reviewer mód`, majd `# Elakadás`, `# Ellenőrzés a végén`, `# Zárás – mit tanultunk`, `# Vidd haza` és a résztvevői döntések száma.

A mellékletek a `mellekletek/` almappában vannak; a forgatókönyv csak hivatkozik rájuk. A beszélgetésvezetés szabályai az `AGENTS.md` fájlban vannak.

A `AI-asszisztens/workshop-navigator/references/feladatok/` mappa ezeknek a fájloknak a tükörmásolata; a Feladatok módosítása után azt is frissíteni kell.

A 4. gyakorlat forrásai a `04 usecase RONDO/` mappában vannak (forrasok, dns-minta, dns-sablon, portal, sites, kod-repo).

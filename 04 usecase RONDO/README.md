**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# 04 usecase RONDO: a BA-sáv forráscsomagja

Ez a mappa a RONDO Hullámkartongyártó Kft. (RONDO) mintaügyfél köré épített, **kitalált** beszerzési jóváhagyási projekt anyagait tartalmazza. A cég valós, nyilvános adatai a `cegadat/RONDO_cegadatlap.md` lapon vannak; a projekt, az igények, a személyek és a számok kitaláltak, és nem a cég valós működését írják le.

## Valós és kitalált

| Elem | Státusz | Hol |
|---|---|---|
| A cég: név, cégjegyzékszám, székhely, főtevékenység, nyilvános pénzügyi adatok | **valós, nyilvános** | `cegadat/RONDO_cegadatlap.md`, forrásaival (a mellette lévő nyilvános cégkivonat és e-beszámolók) |
| A projekt tárgya: a beszerzési jóváhagyási workflow bővítése a RONDO indirekt, karbantartási (MRO) és beruházási beszerzésére; a hullámalappapír keretszerződéses beszerzése kívül marad | kitalált | `forrasok/BA/` |
| Az igények, az egyeztetési jegyzet, a levél, a folyamatleírás, az elemtábla, az ábra, a küszöbök, az export | kitalált | `forrasok/BA/` |
| A RONDO-oldali szereplők | kitalált, csak szerepkör (például beszerzési vezető (RONDO), pénzügyi kontroller (RONDO)) | `forrasok/BA/` |
| Az Oriana-oldali szereplők (például Kende Bertalan) | kitalált | `forrasok/BA/` |
| A négy termékforrás (specifikáció v2.3, tudásbázis-kivonat, support hibajegy, levélszál) | kitalált Oriana-oldali források; az ügyfélmegjelölésük a RONDO-hoz igazítva | `forrasok/BA/` |
| Projekt-B (Tiszavölgyi Gépgyártó Zrt.) | teljesen kitalált, a RONDO-hoz nem kapcsolódik | `forrasok/BA/projekt-B/` |
| A kódrepó és a DNS-minta | kitalált oktatási példa | `kod-repo/`, `dns-minta/` |

A cégadatlap 7. szakasza szerint a RONDO rendszereiről, beszerzési és jóváhagyási folyamatairól, felhasználószámairól nincs nyilvános adat. A kitalált anyag ezekről valós tényt nem állít: ami ott szerepel, az jelölten kitalált.

## Két külön projekt

A `forrasok/BA/` mappában két, egymástól független projekt anyaga van. Mindegyiket önmagához mérve kell vizsgálni.

| Projekt | Hol | Mi ez |
|---|---|---|
| Projekt-A (RONDO) | `forrasok/BA/` (a `projekt-B/` almappa nélkül) | A RONDO beszerzési jóváhagyásának bővítése (indirekt, karbantartási és beruházási beszerzés): négy korábbi forrás, két egyeztetési emlékeztető, elemtábla, folyamatleírás, folyamatábra és egy exportfájl. |
| Projekt-B (Tiszavölgyi Gépgyártó Zrt.) | `forrasok/BA/projekt-B/` | Egy másik cég saját küszöbökkel és saját szabályokkal. A két projekt értékei eltérhetnek egymástól, ez önmagában nem hiba. |

A fájlok pontos leltára (eredet, dátum, verzió): `forrasok/BA/eredetjegyzek.md`. A leltár nem ír le tartalmat.

## Melyik forrás melyik feladatot támasztja alá

| Feladat | Források |
|---|---|
| KAPU I: a felmérési anyag ellenőrzése | A `forrasok/BA/` összes fájlja (a Projekt-A anyagai és külön a `projekt-B/` mappa), az `eredetjegyzek.md` leltárral. |
| Kis FDD-egység készítése | A KAPU I jelentés és a nyers források, valamint a `forrasok/BA/fdd-sema/FDD_sema_FIKTIV.md` séma. |
| KAPU II: az FDD-egység ellenőrzése | Az elkészült FDD-egység, a nyers források és a séma. |
| A DNS használata | `dns-minta/` (kitalált, kitöltött) és `dns-sablon/` (üres, a saját kitöltéshez). |

## Mappák

- `cegadat/`: a RONDO valós, nyilvános cégadata (cégadatlap és a nyilvános forrásai); nem kitalált anyag.
- `forrasok/BA/`: a BA-sáv forrásai, a Projekt-B almappával és az FDD-sémával.
- `dns-minta/`: kitalált, kitöltött DNS-kiadás (minden fájl kitalált). A tartalma oktatási példa, nem tény.
- `dns-sablon/`: ugyanaz a fájlszerkezet üresen, `<...>` helyőrzőkkel, a saját kitöltéshez.
- `kod-repo/rondo-jovahagyas/`: a 6b gyakorlat kitalált mintakódja és leírása.

A `forrasok/Sales-Account/`, a `portal/` és a `sites/` mappa a másik sáv és a további gyakorlatok anyaga; ezt a leírás nem tárgyalja.

## Szabályok

- Ami nincs megadva, azt nem találjuk ki: a hiányzó adat jelölése `Nincs megadva`.
- A javaslat nem döntés. A kérdéses vagy ellentmondó pontot nem oldjuk fel a forrásokon kívüli feltevéssel.
- Minden kitalált fájl tartalmazza a „KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA” jelölést és az elhatároló mondatot; a Projekt-B, az FDD-séma és a DNS-sablon a régi „FIKTÍV OKTATÁSI MINTA” jelölést viseli.

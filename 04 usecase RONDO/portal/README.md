**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# RONDO gyakorlóportál (offline)

Egyetlen HTML-fájl ([index.html](index.html)), amelyben a stílus, a program és a hat gyakorló ügy is benne van. Nem használ hálózatot, külső betűtípust, külső scriptet vagy API-t. A feladatleírás: [portal-feladat.md](portal-feladat.md).

## Indítás

1. Nyisd meg az `index.html` fájlt Edge-ben vagy Chrome-ban (dupla kattintás vagy `file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/portal/index.html`).
2. Belépési adat (nyilvános gyakorlóérték, a bejelentkezési képernyőn is látszik): felhasználónév `gyakorlo`, jelszó `Minta-2026`. A belépés nem valódi hitelesítés: a böngészőben fut, és a lap bezárásakor megszűnik.
3. A menüből: Ügylista, Ellenőrzési munkalap, Dry run összesítő, Műveleti napló. Az Önteszt a lábléc linkjén érhető el.

## Az állapot

- A státuszok, a terv és a napló a böngésző helyi tárába (`localStorage`) kerülnek, hogy az oldal újratöltése után is megmaradjanak. A tartósságot nem feltételezzük: privát ablakban, más böngészőben vagy törölt adatok után az induló állapot áll vissza.
- Az állapot exporttal átadható: a Műveleti napló képernyőn „Állapot letöltése (JSON)” és „CSV letöltése”.
- **Reset:** a lábléc „Reset” gombja, majd a „Reset megerősítése”. Visszaáll az induló hat sor (mind „új”), a napló és a terv kiürül. A Reset csak a gyakorlóállapotot érinti.

## A napló CSV-fejléce

Pontosvesszős elválasztás, UTF-8; a letöltött fájl elején BOM van, hogy Excelben az ékezetek helyesen jelenjenek meg:

```
idobelyeg;ugy_id;mezo;elotte;utana;eredmeny;megjegyzes
```

A szövegmező a képernyőn BOM nélkül mutatja ugyanazt a tartalmat. Az `eredmeny` értékei: `sikeres`, `nincs változás`, `elutasítva`, `dry-run`.

## Hivatkozások és böngészőútvonalak

A képernyők címe `#/belepes`, `#/lista?oldal=2`, `#/ugy/RONDO-R-02`, `#/munkalap`, `#/dryrun`, `#/naplo`, `#/onteszt`. Bejelentkezés nélkül minden cím a belépési képernyőre vezet.

## Mit tud és mit nem

- Tud: keresés és státuszszűrő, két oldalas lapozás, ügyadatlap, soronkénti tervezés, dry run, alkalmazás csak friss dry run után, napló és CSV, Reset, Önteszt.
- A hiányos ügy „ellenőrizve” mentését a kód elutasítja, és az elutasítás naplózva van.
- Nem tud: valódi bejelentkezést, hálózati hívást, kiküldést, élő rendszer módosítását.

## Az adatok

| Azonosító | Típus | Hivatkozott forrás |
|---|---|---|
| RONDO-R-01 … RONDO-R-04 | követelmény | `forrasok/BA/2026-11-05_RONDO_workshop_jegyzet_jovahagyas.md`, R-01 … R-04 |
| RONDO-M-03, RONDO-M-04 | ajánlati tétel | `forrasok/Sales-Account/Levelezes_RONDO_megujitas_2026-10.md`, `Arlista_2027_licenc_support.xlsx`, `Muszaki_melleklet_2025_es_kert_valtozasok.md` (M-03, M-04) |

A követelmény-ügyek összege „példa kérelem összege”, gyakorlóérték; az ajánlati tétel ára az árlistából származik.

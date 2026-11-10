> FIKTÍV OKTATÁSI MINTA: a RONDO-portál minden adata kitalált gyakorlóérték.

# Műveleti napló és összevetés: sablon

A 2. gyakorlat használja. Két fájl szerkezetét adja meg: a soronkénti naplóét (`Munka/02-Portal/muveleti-naplo.csv`) és az összevetését (`Munka/02-Portal/osszevetes.md`). A portál saját exportja (`export_<időbélyeg>.csv`) ugyanezt a fejlécet használja. A feladat leírása: `04 usecase RONDO/portal/portal-feladat.md`. Hiányzó adat: `Nincs megadva`. A `<…>` helyőrzőket kitöltéskor le kell cserélni; ez a bevezető bekezdés a kész fájlból törlendő.

## 1. A műveleti napló (CSV)

Pontosvesszővel elválasztott, UTF-8 kódolású fájl (a CSV, vagyis a pontosvesszővel tagolt táblázatfájl, Excelben megnyitható). A fejléc pontosan ez:

```
idobelyeg;ugy_id;mezo;elotte;utana;eredmeny;megjegyzes
```

| Oszlop | Tartalom |
|---|---|
| `idobelyeg` | A művelet időpontja: `ÉÉÉÉ-HH-NNTÓÓ:PP:MM` |
| `ugy_id` | A portál ügyazonosítója |
| `mezo` | Melyik mező változott vagy változna (például a státusz) |
| `elotte` | A mező értéke a művelet előtt |
| `utana` | A mező értéke a művelet után; ha nem változott, azonos az `elotte` értékkel |
| `eredmeny` | `sikeres`, `nincs változás`, `elutasítva` vagy `dry-run` |
| `megjegyzes` | Az elutasítás oka vagy a dry run kimenete; különben üres |

Szabályok:

- Egy sor egy művelet. A dry run sor és az alkalmazási sor külön sor.
- A dry run sorok `eredmeny` értéke `dry-run`; ezek a módosítás előtt készülnek.
- Minden változásnak van `elotte` és `utana` értéke.
- Az elutasítás nem hiba, amelyet újra kell próbálni: a szabály működését mutatja.
- Egy hibára legfeljebb egy újrapróbálás lehet; az újrapróbálás előtt az AI az azonosító alapján visszaolvassa az ügyet.
- Hiányzó vagy nem olvasható érték: `Nincs megadva`. Nem becsülünk, nem pótolunk másik ügyből.

Formai példa (nem a gyakorlat adata):

```
idobelyeg;ugy_id;mezo;elotte;utana;eredmeny;megjegyzes
2026-11-12T10:20:00;RONDO-X-00;státusz;új;ellenőrizve;dry-run;módosítana
```

## 2. Az összevetés (`osszevetes.md`)

### 2.1 A kigyűjtött adatok

Egy sor egy ügy. A hat azonosító mindegyike pontosan egyszer szerepel.

| Azonosító | Igény | Ár (nettó) | Pénznem | Jóváhagyó | Forrás | Tervezett státusz | Hiányzó mező |
|---|---|---|---|---|---|---|---|
| <…> | <…> | <… vagy Nincs megadva> | <…> | <…> | <…> | <ellenőrizve / hiányos> | <…, vagy: nincs> |

### 2.2 A két napló összevetése

| Ellenőrzés | Az AI naplója | A portál exportja | Egyezik? |
|---|---|---|---|
| Sorok száma | <…> | <…> | <✅ / ⚠️> |
| Sikeres módosítások azonosítónként | <…> | <…> | <✅ / ⚠️> |
| Dry run sorok | <…> | <…> | <✅ / ⚠️> |
| Elutasított műveletek | <…> | <…> | <✅ / ⚠️> |

### 2.3 Eltérések és döntések

| Azonosító | Eltérés | Mindkét érték | A te döntésed |
|---|---|---|---|
| <…> | <…> | <…> | <…> |

### 2.4 A hiányos ügyek indoklása

| Azonosító | Melyik mező hiányzik | Miért nem „ellenőrizve” (a státuszszabály szerint) |
|---|---|---|
| <…> | <…> | <…> |

## 3. A státuszszabály

Egy ügy akkor kaphat „ellenőrizve” státuszt, ha az igény, az ár, a pénznem, a jóváhagyó és a forrás mind ki van töltve. Ha bármelyik mező értéke `Nincs megadva`, az ügy „hiányos”. A hiányzó értéket nem pótoljuk, nem becsüljük és nem másoljuk át másik ügyből. A portál ezt a szabályt a kódban is érvényesíti.

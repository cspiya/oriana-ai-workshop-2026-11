**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Reviewer-jelentés sablon (`R1.md`, `R2.md`)

Az 5. gyakorlat B és C fázisában a reviewer ezt a szerkezetet tölti ki. A fájl helye: `Munka/05-Reviewer/R<n>.md`. A reviewer nem javít; csak megállapít, bizonyítékkal.

## 1. Fejléc

| Mező | Érték |
|---|---|
| Kör | `<R1 / R2>` |
| Idő | `<ÉÉÉÉ-HH-NN HH:MM>` |
| Vizsgált fájlok és pontos verzió | `<fájl, verzió, SHA256 vagy Nincs megadva>` |
| Rögzített DNS-verzió | `<…>` |
| A függetlenség korlátja | `<egy sor: pl. ugyanaz a fiók, projektmemória; mit látott a reviewer>` |

## 2. Kritériumok

| K | Eredmény (PASS / FAIL / NEM ELLENŐRIZHETŐ) | Bizonyíték (fájl és hely) | Megjegyzés |
|---|---|---|---|
| K1 | `<…>` | `<…>` | `<…>` |
| K2-K7 | | | |

## 3. Determinisztikus ellenőrzés

| Ellenőrzés | Parancs | Tényleges eredmény |
|---|---|---|
| `<…>` | `<…>` | `<…>` |

Ha egy ellenőrzés nem futott, jelöld, és a kritérium „NEM ELLENŐRIZHETŐ”.

## 4. Öt kijelölt állítás forráshelye

| # | Állítás | Forráshely a nyers forrásban | Egyezik-e (igen / nem / eltér: hogyan) |
|---|---|---|---|
| 1-5 | `<…>` | `<fájl és hely>` | `<…>` |

## 5. Tartalmi rubrika (1-5)

| Szempont | Pont | Indoklás (1-2 mondat) |
|---|---|---|
| `<a kriteriumok.md szerinti szempontok>` | `<…>` | `<…>` |
| Átlag / legalacsonyabb | `<…>` | |

## 6. Findings

| ID | Súlyosság (blocker / major / minor) | Hely | Bizonyíték | Javasolt javítás |
|---|---|---|---|---|
| `<F-01>` | `<…>` | `<…>` | `<…>` | `<…>` |

## 7. Csak R2-ben: az R1 tételeinek újraellenőrzése

| R1 finding | Javítva? | Érintett függőség újraellenőrizve? | Megjegyzés |
|---|---|---|---|
| `<…>` | `<…>` | `<…>` | `<…>` |

## 8. Verdikt

| Mező | Érték |
|---|---|
| Lefedettség | `<teljes / részleges>` |
| Verdikt | `<PASS / FAIL>` |
| Indok | PASS csak teljes kötelező lefedettség, minden K teljesülése és nyitott blocker/major hiánya esetén; a nem ellenőrizhető elem nem teljesített. |

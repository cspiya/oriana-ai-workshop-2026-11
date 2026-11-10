**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Átadási és átvételi jegyzék sablon

Két célra használható; mindkettő rövid, egy oldalas.

## A. KAPU I átadási státusz (csak BA sáv)

Helye: `Munka/04-Agent/kapu-I/atadas.md`. A 4. gyakorlat B fázisában, a jelentésjavítás, a friss reviewer-kör és a determinisztikus újramérés után készül.

| Mező | Érték |
|---|---|
| Státusz | `<lezárt / feltételes / blokkolt>` |
| Indok | `<…>` |
| Újramérés (parancs és tényleges eredmény) | `<…>` |
| Feltételes továbbadás esetén: tételes hiányok | `<HJ-azonosítók>` |
| Nyitott üzleti döntések (nem pótoljuk) | `<…>` |
| FDD-egység indítható? | `<igen / nem>`: blokkolt státusznál nem, az agent megáll |

## B. Átvételi jegyzék (mindkét sáv)

Helye: `Munka/04-Agent/v<n>/atvetel.md`. A 4. gyakorlat C fázisában készül, a futás befejezése vagy a 13:25-ös határ után.

| Mező | Érték |
|---|---|
| Verzió | `<v1>` |
| Honnan jött | `<saját maker-futás / tréneri tartalék (jelölve)>` |
| Kötelező kimenet 1 megvan és megnyílik | `<igen / nem, fájl>` |
| Kötelező kimenet 2 megvan és megnyílik | `<igen / nem, fájl>` |
| Mérések (`ellenorzes/`) | `<melyik script futott, eredmény>` |
| Naplósorok száma és a körkeret | `<n sor, a keret: 2 belső kör>` |
| Átvételi státusz | `<átvéve / feltételesen átvéve / nem átvett>` |
| Feltétel vagy ok | `<…>` |
| Mehet-e a reviewerhez | `<igen / nem>` |

Tartalék esetén a rögzítőlapon „B-tervvel” jelölés kerül; a tartalék átvétele nem önálló maker-teljesítés.

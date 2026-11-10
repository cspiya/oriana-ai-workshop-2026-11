**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Stop-döntés sablon (`stop-dontes.md`)

Az 5. gyakorlat C fázisában, az R2 után készül. A „repeat until good” ciklus akkor ér valamit, ha kimondott feltétellel véget ér. A fájl helye: `Munka/05-Reviewer/stop-dontes.md`. A döntést te hozod; az AI a bizonyítékot rendezi.

## 1. Körök összesítése

| Kör | Fajta | Idő | K-teljesülés (db / összes) | Rubrika átlag | Nyitott blocker / major |
|---|---|---|---|---|---|
| Alapmérés | belső | `<…>` | `<…>` | `<…>` | `<…>` |
| R1 | külső | `<…>` | `<…>` | `<…>` | `<…>` |
| Javítás (v2) | belső | `<…>` | `<…>` | `<…>` | `<…>` |
| R2 | külső | `<…>` | `<…>` | `<…>` | `<…>` |

Körkeret: belső legfeljebb 2, külső legfeljebb 2 review. A harmadik review nem indul.

## 2. Melyik stop-szabály érvényes

| Szabály | Teljesül? | Bizonyíték |
|---|---|---|
| Minden K teljesült és nincs nyitott blocker/major | `<igen / nem>` | `<…>` |
| Elfogyott a körkeret | `<igen / nem>` | `<…>` |
| Két körben nincs javulás | `<igen / nem>` | `<…>` |
| Hiányzó döntés vagy jogosultság | `<igen / nem>` | `<…>` |

## 3. Döntés

| Mező | Érték |
|---|---|
| Döntés | `<lezárt / feltételes / blokkolt>` |
| Indok | `<…>` |
| Nyitott tételek (feltételes esetén kötelező) | `<tétel, ki dönt vagy javít, mikorra: konkrét dátum vagy Nincs megadva>` |
| Ami a következő lépéshez kell | `<…>` |

## 4. Mentés és határ

- BA sáv, lezárt vagy feltételes döntésnél: a végleges FDD-egység másolata a `Munka/04-Agent/fdd/` mappába kerül, verziónévvel.
- A „kész” nem küldési, publikálási vagy átadási engedély; ezt külön döntés adja.
- A döntés alapját képező fájlok pontos verziója: `<…>`.

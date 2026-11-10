**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Terv sablon (`terv.md`)

A 4. gyakorlat B fázisa használja. A tervet az agent javasolja a briefből és a kritériumokból, te hagyod jóvá; a futás csak a jóváhagyott tervvel indul. A fájl helye: `Munka/04-Agent/terv.md`. A terv legfeljebb 8 lépésből áll.

## Lépések

| # | Lépés | Bemenet | Kimenet | Mérés (K-azonosító) | Kör (belső 1 / 2) |
|---|---|---|---|---|---|
| 1 | `<…>` | `<…>` | `<…>` | `<…>` | `<…>` |
| 2 | `<…>` | `<…>` | `<…>` | `<…>` | `<…>` |
| … | | | | | |
| 8 | `<legfeljebb nyolc sor>` | | | | |

## Sávfüggő kötelező elem

- **BA sáv:** az 1. lépés a KAPU I jelentés javítása, majd friss reviewer-kör és determinisztikus újramérés, végül a `kapu-I/atadas.md` státusza (lezárt / feltételes / blokkolt). Az FDD-egység előállítása csak nem blokkolt státusz után indulhat; blokkolt státusznál az agent megáll és jelez.
- **Sales-Account sáv:** a kalkuláció és a változásjegyzék előállítása előtt a forrás-ellenőrző lista tételeinek rögzítése; a számok újraszámolása pénznemenként külön.

## Jóváhagyás

| Mező | Érték |
|---|---|
| Jóváhagyta | `<a résztvevő neve vagy kezdőbetűi>` |
| Dátum és idő | `<ÉÉÉÉ-HH-NN HH:MM>` |
| Módosítás a javaslathoz képest | `<nincs / mit módosítottál és miért>` |
| Nyitott tétel a futás előtt | `<hivatkozás a kriteriumok.md nyitott tételeire, vagy: nincs>` |

Az agent a jóváhagyott terven kívül nem dolgozik, és hiányzó üzleti döntést nem pótol.

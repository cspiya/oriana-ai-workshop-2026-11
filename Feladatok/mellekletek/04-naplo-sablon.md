**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Napló sablon (`naplo.md`)

A 4. gyakorlat B-D fázisában és az 5. gyakorlatban használod. A napló célja, hogy a „repeat until good” ciklus ne legyen végtelen és ne legyen követhetetlen: minden körről egy sor készül, a körkeret és a stop-szabály előre rögzített. A fájl helye: `Munka/04-Agent/naplo.md`. A korábbi állapotokat a napló őrzi; sort csak hozzáfűzni lehet.

## Körkeret és stop-szabály

| Mező | Érték |
|---|---|
| Belső körök maximuma | 2 |
| Külső körök maximuma | 2 review (R1, R2) |
| Stop: teljesülés | Minden K teljesült és nincs nyitott blocker vagy major hiba |
| Stop: körkeret | A belső vagy a külső körkeret elfogyott |
| Stop: nincs javulás | Két egymást követő körben a K-eredmények és a rubrika nem javult |
| Stop: hiányzó döntés | A folytatáshoz üzleti döntés vagy jogosultság kell, ami nincs megadva |

## Naplósorok

A sor szerkezete szó szerint: `kör | idő | belső/külső | hiba-ID | változtatás | K-eredmények | rubrika | stop/folytatás és ok`

| kör | idő | belső/külső | hiba-ID | változtatás | K-eredmények | rubrika | stop/folytatás és ok |
|---|---|---|---|---|---|---|---|
| `<0>` | `<ÉÉÉÉ-HH-NN HH:MM>` | `<belső>` | `<a legsúlyosabb hiba azonosítója vagy: alapmérés>` | `<egyetlen fókuszált változtatás, vagy: nincs (alapmérés)>` | `<K1: ..., K2: ..., K7: ...>` | `<átlag és legalacsonyabb szempont>` | `<folytatás: ok; vagy stop: melyik szabály>` |

A külső körök (R1, R2) sorait az 5. gyakorlat a saját mappájában vezeti (`Munka/05-Reviewer/kulso-korok-naplo.md`), ugyanezzel a sorszerkezettel; a stop-döntés a két naplót együtt használja.

## Kitöltési szabályok

1. Minden körben előbb mérj, utána változtass, utána újra mérj; a sorba az újramérés eredménye kerül.
2. Egy körben egy fókuszált változtatás készül, a legsúlyosabb hibára.
3. A hiba-ID a hibajegyzék vagy a reviewer-jelentés azonosítója; belső mérésnél a mérés azonosítója.
4. A K-eredményeknél a K-azonosító és az eredmény együtt szerepel (teljesült / nem teljesült / nem ellenőrizhető), a küszöb a `kriteriumok.md` szerint.
5. Ha a stop-szabály egyike teljesül, a sorban kimondod, melyik, és több kör nem indul.
6. A „kész” minősítés nem küldési vagy publikálási engedély; ezt az utolsó sor nem állíthatja.

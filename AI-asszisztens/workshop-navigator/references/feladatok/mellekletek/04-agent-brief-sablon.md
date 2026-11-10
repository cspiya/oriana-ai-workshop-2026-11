**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Agent-brief sablon: RONDO

A 4. gyakorlat B fázisa használja. A briefet te írod meg, a saját `kriteriumok.md` fájlodra támaszkodva; ez a sablon csak a hét pontot adja. A kész brief helye: `Munka/04-Agent/agent-brief.md`. Az agent (a „RONDO 04 maker” indítóval induló, hosszabb, önálló futás) csak azt tudja, ami a briefben és a briefben megnevezett fájlokban van, ezért minden hivatkozott fájlt a nevével sorolj fel.

## A sablon (a hét pont, ahogy a terv rögzíti)

```markdown
# Agent-brief: RONDO <változat>
KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA
Mód: Work Local vagy Cloud; indok: <helyi fájl / gép nélkül fusson>.
Modell: GPT-6.1 Terra, közepes effort. DNS-verzió: <verzió és forrás>.
Ügyfélkontextus (valós, a cégadatlapból, forrással és oldalszámmal; csak Sales-Account): <öt tény: méret, trend, tulajdonos, vezetőváltás, pénzügyi erő; mindegyik mellett forrásfájl és oldalszám, vagy Nincs megadva>.
1. Cél: két kötelező kimenet, címzett és formátum.
2. Forrás: a kriteriumok.md tételes, dátumozott forráslistája.
   A Tananyag csak olvasható; mentés Munka/04-Agent/v<n>/.
3. Korlát: hiány "Nincs megadva"; javaslat nem döntés.
   Ellentmondás maradjon látható mindkét forrással.
   Újabb dátum önmagában nem felülírás; kifejezett verziódöntést jelölj.
   Nincs küldés, külső írás, éles rendszer vagy publikálás.
4. Ellenőrzés: K1-K7, mérés és küszöb a kriteriumok.md szerint.
   Determinisztikus ellenőrzés kóddal; ha nem fut, ezt jelöld.
5. Menet: legfeljebb 8 lépéses terv, a résztvevő jóváhagyása;
   kötelező kimenetek, mérés, legsúlyosabb hibára fókuszált javítás.
   Legfeljebb 2 belső kör; mérés és napló minden körben.
6. Stop: minden kritérium teljesült; vagy maximum kör;
   vagy két körben nincs javulás; vagy hiányzó döntés/jogosultság.
7. Zárás: fájlonként mentési hely, verzió és ellenőrzési mód.
```

## Kitöltési segédlet

| Pont | Mire figyelj |
|---|---|
| Ügyfélkontextus (csak Sales-Account) | Öt valós tény a `RONDO_cegadatlap.md` fájlból és a három hozzá tartozó PDF-ből: méret, trend, tulajdonos, vezetőváltás, pénzügyi erő. Mindegyik mellett forrásfájl és oldalszám; megtérülést vagy a RONDO belső költségadatát nem találunk ki („Nincs megadva”); webes keresés nem forrás. A cégadatlap tényei valósak, a projekt kitalált: ne keverd. BA-sávon a mező elmarad. |
| Mód | Cloud: a gép nélkül is fut, de a forrásokat külön elérhetővé kell tenni (a helyi fájlokat nem örökli). Local: a helyi mappából dolgozik, de a gépnek online kell maradnia és az alkalmazásnak futnia kell. Ha a munkatérben egyik sem érhető el, a tartalék a tréneri v1 (jelölve). |
| 1. Cél | A két kötelező kimenet a sávodtól függ. BA: javított KAPU I jelentés (a `kapu-I/atadas.md` státusszal) és kis FDD-egység. Sales-Account: ajánlati kalkuláció és kockázatos változásjegyzék. Mindkettőhöz címzett és formátum kell. |
| 2. Forrás | Fájlnév, dátum, verzió. A `kriteriumok.md` forráslistájával egyezzen; ami ott nincs, azt az agent nem használja. |
| 3. Korlát | A szabályokat a DNS-verziód adja: nevezd meg, melyik modul (`szabalyok/ba.md` vagy `szabalyok/sales.md`) vonatkozik rád. |
| 4. Ellenőrzés | Olyan mérés, amelyet kóddal vagy számolással le lehet futtatni. Ha egy mérést nem lehet kóddal elvégezni, a briefben írd meg, ki és hogyan végzi. |
| 5. Menet | A tervet (`terv.md`) te hagyod jóvá a futás előtt. Belső kör: készítés, mérés, a legsúlyosabb hiba, egy fókuszált változtatás, újramérés, naplósor. |
| 6. Stop | A maximális körszám a briefben szerepeljen számmal. A hiányzó üzleti döntést az agent nem pótolja. |
| 7. Zárás | Fájlonként: hely, verzió (`v1`), és hogy determinisztikusan vagy kézzel ellenőrizted. |

Amit a brief ne tartalmazzon: jelszót, hozzáférési kulcsot, valós ügyféladatot, megoldásleírást.

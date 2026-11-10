**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Kritériumok sablon (`kriteriumok.md`)

A 4. gyakorlat B fázisa használja. A kritérium rövidítése K (K1 = az első kritérium). A kritériumokat te fogalmazod meg: a sablon a szerkezetet és a hét szempontot adja, az „Elvárás” oszlop üres. A kész fájl helye: `Munka/04-Agent/kriteriumok.md`. Ezt kapja meg az agent és később a reviewer is, ezért minden elvárásnál legyen mérés és küszöb.

## 1. Fejléc

| Mező | Érték |
|---|---|
| Sáv | `<BA / Sales-Account>` |
| DNS-verzió (a vállalati tudáscsomag kiadása) és forrása | `<pl. 0.1-minta, Tananyag/04 usecase RONDO/dns-minta/README.md>` |
| Készült | `<ÉÉÉÉ-HH-NN>` |
| Körkeret | Belső kör legfeljebb 2; külső kör: R1 és R2 (legfeljebb két review) |
| Stop-szabály | Minden K teljesült és nincs blocker/major; vagy elfogyott a körkeret; vagy két körben nincs javulás; vagy hiányzó döntés/jogosultság |

## 2. Forráslista (tételes, dátumozott)

| Forrás-ID | Fájl | Dátum | Verzió | Projekt vagy tárgy | Használható-e (igen / korlátokkal / nem) |
|---|---|---|---|---|---|
| `<S1>` | `<fájlnév>` | `<ÉÉÉÉ-HH-NN>` | `<verzió vagy Nincs megadva>` | `<…>` | `<…>` |

A listán nem szereplő forrást az agent és a reviewer nem használ.

## 3. K1-K7: BA sáv

Az „Irányadó kérdés” oszlop csak rávezet; az elvárást a saját szavaiddal, mérhetően írd át.

| K | Szempont | Irányadó kérdés | Elvárás (te írod) | Mérés (mivel, ki) | Küszöb | Eredmény R1 / R2 |
|---|---|---|---|---|---|---|
| K1 | Igények lefedettsége | Minden R-azonosítójú igény megjelenik-e, és egyeznek-e az azonosítók? | `<…>` | `<…>` | `<…>` | `<…>` |
| K2 | Funkciók és értékkészletek | Minden funkcióhoz van-e Given/When/Then és forráshely, minden felsorolás típusú mezőhöz teljes értékkészlet? | `<…>` | `<…>` | `<…>` | `<…>` |
| K3 | Szerkezeti rend | Az FDD-séma kötelező fejezetei kitöltöttek-e, és a BPMN-elemtábla szerkezetileg rendben van-e? Mely szabályokat kell egy elemtáblának betartania? | `<…>` | `<…>` | `<…>` | `<…>` |
| K4 | Forráskapcsolat | Az öt kijelölt állítás a forrásban a megadott helyen megvan-e? | `<…>` | `<…>` | `<…>` | `<…>` |
| K5 | Hiány- és ellentmondáskezelés | A hiányok és az ellentmondások láthatók-e, a javaslat el van-e választva a döntéstől, és az egyik projekt eltérő értékét a másik projekten nem hibaként jelezzük-e? | `<…>` | `<…>` | `<…>` | `<…>` |
| K6 | Tartalmi rubrika (1-5) | Teljesség, pontosság, használhatóság, egyértelműség | Átlag legalább 4/5, egyik sem 3 alatt (módosíthatod, indokold) | Reviewer-pontozás, szempontonként 1-2 mondat indokkal | `<…>` | `<…>` |
| K7 | Formai rend | A fájlok megnyithatók, a hivatkozások léteznek, és nincs olyan anyag a csomagban, amely nem oda való? | `<…>` | `<…>` | `<…>` | `<…>` |

## 4. K1-K7: Sales-Account sáv

| K | Szempont | Irányadó kérdés | Elvárás (te írod) | Mérés (mivel, ki) | Küszöb | Eredmény R1 / R2 |
|---|---|---|---|---|---|---|
| K1 | Árak és összegek | Az egységárak a hatályos árlistából jönnek-e, a sor- és végösszegek pénznemenként külön újraszámolva egyeznek-e? | `<…>` | `<…>` | `<…>` | `<…>` |
| K2 | Kedvezményszabály | A kedvezmény a DNS-verziód jóváhagyási útján belül van-e? | `<…>` | `<…>` | `<…>` | `<…>` |
| K3 | Vállalás és módosítás | Minden vállalás és módosítás forráshelyes-e, a típus és a kockázat ki van-e töltve? | `<…>` | `<…>` | `<…>` | `<…>` |
| K4 | Forráskapcsolat | Az öt kijelölt ár, vállalás vagy eltérés a forrásban a megadott helyen megvan-e? | `<…>` | `<…>` | `<…>` | `<…>` |
| K5 | Hiány és vállalási szint kezelése | Ami nincs megadva, az „Nincs megadva”-e? A kért szint és a vállalt szint külön van-e? A pénznemek és a nettó/bruttó külön vannak-e? | `<…>` | `<…>` | `<…>` | `<…>` |
| K6 | Tartalmi rubrika (1-5) | Pontosság, ügyfélbiztonság, érthetőség, döntéshozói használhatóság | Átlag legalább 4/5, egyik sem 3 alatt (módosíthatod, indokold) | Reviewer-pontozás, szempontonként 1-2 mondat indokkal | `<…>` | `<…>` |
| K7 | Formai rend | A munkafüzet megnyitható-e, a számítások ellenőrzöttek-e? A képlet-újraszámolás sikerét külön rögzítsd: ne a fájl létezéséből következtess. | `<…>` | `<…>` | `<…>` | `<…>` |

## 5. Az ellenőrzésre kijelölt öt állítás

Az öt állítást nem az LLM „véletlenszerűen” választja. Két út van:

- **Kézi:** te jelölöd ki a számodra legfontosabb öt állítást, és indokolod.
- **Rögzített seeddel:** felsorolod az összes ellenőrizhető állítást egy fájlba, és egy script sorba rendezve, rögzített seeddel (`20261112`) választ ötöt. A script és az eredmény az `ellenorzes/` mappába kerül.

| # | Állítás | Forrás és hely | Hogyan választottad (kézi / seed) |
|---|---|---|---|
| 1-5 | `<…>` | `<…>` | `<…>` |

## 6. Nyitott tételek (hiányzó döntés vagy jogosultság)

| ID | Mi hiányzik | Ki dönthet | Hatás a kritériumokra |
|---|---|---|---|
| `<NY-01>` | `<…>` | `<…>` | `<…>` |

Ha a brief 12:25-ig nem teljes, a hiányt itt nyitott tételként rögzítsd; az indítást ez nem akadályozza.

## 7. Mitől lesz jó az eredmény: a három réteg

1. **Determinisztikus ellenőrzés:** kóddal vagy számolással lefuttatható mérés (a futtatott parancs és a tényleges eredmény rögzítve).
2. **Forrás-visszakeresés:** az öt kijelölt állítás megtalálható a forrásban a megadott helyen.
3. **Rubrika:** tartalmi pontozás 1-5 között, indoklással.

A gépi ellenőrzés önmagában nem bizonyítja a tartalmi helyességet; a rubrika nem váltja ki a forrást.

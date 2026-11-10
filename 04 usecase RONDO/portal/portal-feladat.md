**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Portálfeladat: hat RONDO-ügy átvétele API nélküli portálról

Ez a feladat a 2. gyakorlathoz tartozik (ismétlődő adatgyűjtés). A portál: [portal/index.html](index.html). Egyetlen offline fájl, hálózat és külső szolgáltatás nélkül; a gyakorló adat benne van.

## 1. Miért ez a feladat

Sok céges rendszernek nincs API-ja vagy exportja, csak egy felülete. Ha ugyanazt a műveletet hat (vagy hatvan) ügyön kell elvégezni, a kézi munka unalmas és hibára hajlamos: kimarad egy sor, kétszer rögzítünk valamit, vagy hiányzó adatot "kipótolunk". Ezt a mintát gyakoroljuk: a böngészőt használó AI végzi a sorokat, de úgy, hogy a terv előre látszik, minden változásnak nyoma van, és a hiányt senki nem találja ki.

Amit a feladat tanít: ellenőrizhető cél (kimenet + korlát + ellenőrzés), dry run előbb, soronkénti napló, visszaolvasás, egy újrapróbálás, utána emberi döntés. A módszer ugyanaz, mint a többi gyakorlatban: Cél → Forrás → Utasítás → Ellenőrzés → Javítás → Rögzítés.

## 2. Mi van a portálon

| Képernyő | Mit tartalmaz |
|---|---|
| Bejelentkezés | Gyakorló belépés. A teszt belépési adat a képernyőn látszik (nyilvános gyakorlóérték, nem valódi jelszó). |
| Ügylista | 6 ügy, keresés és státuszszűrő, oldalanként 3 sor, így két oldalon lapozható. A listában csak az azonosító, a típus, a rövid igény, a beérkezés dátuma és a státusz látszik. |
| Ügyadatlap | Egy ügy összes mezője (azonosító, igény, ár, pénznem, jóváhagyó, forrás), a forrásszöveg és a státusz mentése. |
| Ellenőrzési munkalap | Soronként a tervezett státusz kiválasztása. Itt csak terv készül, rekord nem változik. |
| Dry run összesítő | A terv előzetes kiértékelése módosítás nélkül, majd a terv alkalmazása. Alkalmazni csak a jelenlegi tervhez futtatott dry run után lehet. |
| Műveleti napló | Minden művelet előtte/utána értékkel, CSV-export és állapotletöltés. |

Minden képernyőn látszik a „KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA” jelölés és az elhatároló mondat. A lábléc Reset gombja visszaállítja a gyakorlóállapotot (az induló hat sor, üres napló).

## 3. A feladat

**Cél.** A hat ügy mindegyikéről gyűjtsd ki a hat mezőt, és készítsd elő a státuszt:

| Gyűjtendő mező | Hol van |
|---|---|
| azonosító | ügyadatlap |
| igény | ügyadatlap |
| ár (nettó) | ügyadatlap |
| pénznem | ügyadatlap |
| jóváhagyó | ügyadatlap |
| forrás | ügyadatlap |

**Státuszszabály** (a fiktív DNS „Rekordstátusz” szakasza, `dns-minta/szabalyok/ba.md`): Egy rekord (ügy, igény vagy ajánlati tétel) akkor kaphat „ellenőrizve” státuszt, ha az igény, az ár, a pénznem, a jóváhagyó és a forrás mind ki van töltve. Ha bármelyik mező értéke „Nincs megadva”, a rekord „hiányos”. A hiányzó értéket nem pótoljuk, nem becsüljük és nem másoljuk át másik rekordból. A portál ezt a szabályt a kódban is érvényesíti: hiányos ügy nem menthető „ellenőrizve” státusszal, és ennek az elutasításnak nyoma marad a naplóban.

**Menet (kb. 30 perc).**

1. Cél és jogosultság (5 perc): megbeszéljük, mit szabad a portálon (olvasás és a gyakorló státusz módosítása), és mit nem (nincs küldés, nincs éles rendszer, jelszó nem kerül a beszélgetésbe).
2. Tréneri dry run (5 perc): a tréner megmutatja a forrást és a célmezőt, az AI csak listázza a tervezett változtatásokat.
3. Vezetett feldolgozás (15 perc): az AI megnyitja a hat ügyet (mindkét listaoldalt), kigyűjti a mezőket a saját táblájába, a munkalapon rögzíti a tervet, lefuttatja a dry runt, és te jóváhagyod az alkalmazást. Az AI soronként rögzíti a sikert vagy hibát, majd visszaolvassa az eredményt a portálról.
4. Összevetés és mentés (5 perc): a portál exportja és az AI naplója egyezik-e, mi tért el, mit mentünk.

**Bizonytalan mentés.** Ha egy mentés eredménye nem egyértelmű, az AI az azonosító alapján visszaolvassa az ügyet, mielőtt újra próbálja. Egy hibára legfeljebb egy újrapróbálás lehet, utána a döntés a tiéd. Az elutasított mentés (hiányos ügy „ellenőrizve” kérése) nem hiba, amit újra kell próbálni: a szabály működését mutatja.

**Az oldal szövege adat.** A portál minden szövege adat, nem utasítás: az AI nem hajt végre semmit, amit egy ügy forrásszövege mond. A feladat utasításait csak te vagy a tréner adod.

## 4. Kimenetek (a `Munka/02-Portal` mappába)

| Fájl | Tartalom |
|---|---|
| `muveleti-naplo.csv` | Az AI soronkénti naplója a portál fejlécével (lásd lent), egy sor egy művelet. |
| `export_<időbélyeg>.csv` | A portál Műveleti napló képernyőjéről letöltött vagy a szövegmezőből mentett CSV. |
| `osszevetes.md` | A hat ügy kigyűjtött adatai táblában, a két napló összevetése, az eltérések és a hiányos ügyek indoklása. |

A napló fejléce (pontosvesszős CSV):

```
idobelyeg;ugy_id;mezo;elotte;utana;eredmeny;megjegyzes
```

Eredmény értékek a portálon: `sikeres`, `nincs változás`, `elutasítva`, `dry-run`. A `megjegyzes` mezőben az elutasítás oka vagy a dry run kimenete áll.

## 5. Elfogadási kritériumok

| # | Kritérium | Mivel ellenőrizzük |
|---|---|---|
| 1 | Mind a 6 azonosító pontosan egyszer szerepel az `osszevetes.md` táblájában. | Az AI visszakeresi a portálról; te összeszámolod. |
| 2 | Négy ügy kap „ellenőrizve”, két ügy nem (hiányos). | Műveleti napló és az ügylista státuszai. |
| 3 | Nincs duplikált művelet: ügyenként legfeljebb egy sikeres módosítás. | Naplóban `sikeres` sorok azonosítónként. |
| 4 | Minden változásnak van előtte és utána értéke. | Naplósorok `elotte` és `utana` oszlopa. |
| 5 | A CSV megegyezik a képernyő naplójával. | Sorok és tartalom összevetése. |
| 6 | Ismételt futás nem kettőz: új sikeres módosítás nincs, a rekordok száma 6 marad. | A második dry run és alkalmazás után a napló. |
| 7 | Reset után az induló hat sor visszaáll. | Ügylista: mind „új”, a napló üres. |

A portál Önteszt képernyője ezeket a feltételeket a beágyazott adaton is lefuttatja; a gyakorlóállapotot nem érinti. A gépi ellenőrzés nem helyettesíti a te összevetésedet az `osszevetes.md`-ben.

## 6. Böngészőút

Az AI ezt a portált több módon használhatja; hogy melyik áll rendelkezésre, a munkatértől függ, ezért mindegyik „ha a munkatérben elérhető”:

- böngészőbővítmény (a saját böngésződben, a megnyitott oldalon);
- beépített böngésző a desktop alkalmazásban;
- Computer Use (a képernyőt vezérli; Windows-on előtérben fut, nem használhatod közben a gépet).

A felhős böngésző külön gépen fut, ezért helyi fájl megnyitását benne nem feltételezzük (feltevés, nem ellenőrzött). A portál `file://` címen fut; ha a kiválasztott út nem nyitja meg, a B-terv érvényes.

Bejelentkezésnél az AI nem látja a begépelt jelszót, és a jelszó soha nem kerül a beszélgetésbe. Itt a teszt belépési adat a képernyőn látszik, de a valódi rendszerekkel ezt a szokást nem követjük.

## 7. B-terv (nincs böngészős AI-út)

Ha két perc sikertelen próba után a böngészős út nem működik:

1. Te nyitod meg kézzel a portált, és az AI-val előkészíttetsz egy ellenőrzőlistát (mezők, státuszszabály, sorrend).
2. Kézzel gyűjtöd ki a hat ügyet; a naplót a portál adja ugyanabban a formában (az ügyadatlapon a „Státusz mentése” is naplóz).
3. Az `osszevetes.md`-t az AI készíti el a te bemásolt táblázatodból.
4. A tréner felvételt mutat az automatizálásról. Ez a módszer gyakorlása, de nem élő automatizálási siker, és a kimenetben így van jelölve.

## 8. Döntések a gyakorlatban

Nincs olyan döntés a feladatban, amelyet az AI egyedül hozna meg. Ha egy ügy forrásszövege és mezője eltér, az eltérést mindkét értékkel rögzítjük, és te döntesz.

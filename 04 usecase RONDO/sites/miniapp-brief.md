**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Sites mini-alkalmazás brief: „RONDO ügykövető”

A 6. gyakorlat anyaga. A cél egy kis, közös ügykövető, amelyben egy RONDO-ügyhöz igények, ajánlati tételek és kockázatok kapcsolódnak. Csak olyan tartalom kerül bele, amely a reviewen átment, vagy egyértelműen nyitott kérdésként van jelölve. A rekordtábla nem pénzügyi rendszer és nem éles ügyfélrendszer: csak fiktív adat kerül bele.

Időkeret: 25 perc közös mag (cél és adatmodell, tréneri építés ellenőrzött tartalomból, kétfiókos adat- és jogteszt). A Sales-Account sáv további 30 perccel folytatja (verzió, a Sites-kísérlet eredménye, saját tételek rögzítése), a BA sáv ez alatt a 6b gyakorlatot végzi.

## 1. Mit állítunk és mit nem

A Sitesról csak azt tanítjuk tényként, amit a dokumentáció alapján 2026-11-09-én elolvastunk. Ami a magyar Business-munkatérben vagy a konkrét fiókban nem biztos, azt „ha a munkatérben elérhető” megjegyzéssel kezeljük, és van tartaléka.

| Funkció | Állapot | Tartalék, ha nem elérhető |
|---|---|---|
| Site létrehozása leírásból (tracker, dashboard, űrlap) | Dokumentált. | Helyi prototípus: [prototipus.html](prototipus.html). |
| Tartós adatbázis (D1, relációs) és fájltár (R2) | Dokumentált; a D1 mérete site-onként korlátos. | A prototípus helyi tára és JSON-export, a kiesett funkció jelölve. |
| Munkatérre korlátozott megosztás ChatGPT-azonosítóval | Dokumentált. | Fájlátadás az engedélyezett helyen; a hitelesítési próba a tréneri demón látszik. |
| A szerver megkapja az `oai-authenticated-user-email` (és opcionálisan az `oai-authenticated-user-full-name`) fejlécet | Dokumentált. | A prototípus szimulált felhasználója (nem hitelesítés). |
| Rekordszintű jogosultság | Nincs beépített modell: a site kódja dönti el, szerveroldalon. A közös/saját rekordszabály a dokumentált identitásból levezetett **alkalmazásterv**, nem kész jogosultsági rendszer. | A prototípus a szabályt a böngészőben szimulálja, ennek jelölésével. |
| Owner / editor / visitor | Dokumentált. Az editor módosíthat, verziót menthet, az első publikálás után publikálhat; közönséget nem változtat, nem hív meg senkit, tulajdont nem ad át. A visitor megnyitja, de nem szerkeszti a kódot. | A szerepeket a tréneri demón nézzük meg. |
| Mentett verzió és deploy külön lépés; a korábbi verziók listázhatók | Dokumentált. Automatikus visszaállítás: ha a munkatérben elérhető; nem ígérjük. | Verziót a tesztjegyzékben azonosítóval rögzítünk. |
| Kapcsolt appok használata a Site-ból | Dokumentált feltételekkel: csak munkatérre korlátozott site, csak munkatértag látogató, adminengedéllyel, a látogató saját appjogával; a látogatói apphozzáférés csak olvasásra szolgál. Ebben a gyakorlatban nem használjuk. | Nem kell. |
| Külső (nem munkatéri) látogató meghívása | Fokozatos bevezetés alatt; ha a munkatérben elérhető. Nem alapfeltétele a gyakorlatnak. | Nem kell. |
| Nyilvános publikálás | Ha a munkatérben elérhető; ebben a gyakorlatban akkor sem használjuk. | Nem kell. |
| Beépített AI-hívás (például „reviewer” gomb) | **Nincs rá dokumentált funkció.** Ha a munkatérben mégis megjelenik, külön próba; natív AI-gombot nem ígérünk. | Lásd a 8. pontot. |
| Az adatok tárolási helye | Nincs róla megbízható információ. Ezért csak kitalált projektadat és az `ugy` rekord nyilvános cégadata kerül a Site-ba. | Nem kell. |

Dokumentációs alap (elolvasva 2026-11-09): az OpenAI-dokumentáció Sites-oldalai (áttekintés, adat és kapcsolatok, a Site kezelése, létrehozás, publikálás és megosztás).

## 2. Adatmodell

| Tábla | Mező | Típus | Megjegyzés |
|---|---|---|---|
| `ugy` | `id` | szöveg, kulcs | például `U-RONDO-2027` |
| | `cim` | szöveg | az ügy rövid neve |
| | `ceg_nev` | szöveg, nem kötelező | a cég neve; valós, nyilvános cégadat (a cégadatlapról) |
| | `cegjegyzekszam` | szöveg, nem kötelező | valós, nyilvános cégadat |
| | `szekhely` | szöveg, nem kötelező | a cégkivonat szerinti székhely, valós, nyilvános cégadat |
| | `ceg_adat_jelleg` | szöveg, nem kötelező | „valós, nyilvános cégadat” |
| | `forras` | szöveg, nem kötelező | `cegadat/RONDO_cegadatlap.md, 2. szakasz` |
| `tetel` | `id` | szöveg, kulcs | például `T-01`; a három sáv közös azonosítótere |
| | `ugy_id` | szöveg | hivatkozás az `ugy.id`-re |
| | `tipus` | felsorolás | `igeny`, `ajanlati_tetel`, `kockazat` |
| | `leiras` | szöveg | a tétel tartalma |
| | `forras` | szöveg | fájl és hely; kötelező; ismeretlennél „Nincs megadva” |
| | `dns_verzio` | szöveg | a használt fiktív DNS-verzió; ismeretlennél „Nincs megadva” |
| | `statusz` | felsorolás | `review-n_atment`, `nyitott_kerdes`, `tervezet` |
| | `owner_email` | szöveg | a tétel felvevője; a szerver a hitelesített fejlécből tölti, nem a felületről |
| `review` | `tetel_id` | szöveg | hivatkozás a `tetel.id`-re |
| | `kriterium` | szöveg | például `K4 forráshely` |
| | `eredmeny` | felsorolás | `PASS`, `FAIL`, `NEM ELLENŐRIZHETŐ` |
| | `bizonyitek` | szöveg | idézett hely vagy script-kimenet |
| | `verzio` | szöveg | a felülvizsgált fájlverzió (R1, R2) |

Induló adat: [adatcsomag/](adatcsomag/) (`ugy.json`, `tetel.json`, `review.json`, `tetelek.csv`). Az induló `review` sorok előzetes mintaadatok; a gyakorlatban a saját, forrásból ellenőrzött R2-eredményed váltja őket.

## 3. A rekordjog szabálya (alkalmazásterv)

A gyakorlatban választott szabály: **a tételek mindenki számára olvashatók, írni csak a saját tételt lehet** (a `tetel.owner_email` egyezik a hitelesített `oai-authenticated-user-email` értékével). Más tulajdonos tételének módosítását a szerveroldali kód utasítja el; ezt nem elég a felületen elrejteni. A visitor jog megnyitást jelent, nem szerkesztést; a Site-szerepek (owner, editor) a kódra és a publikálásra vonatkoznak, nem a rekordokra.

## 4. Brief a Site-nak (ezt kapja a ChatGPT)

```
Hozz létre egy "RONDO ügykövető" nevű Site-ot. A "KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA" jelölés és az elhatároló mondat ("A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.") legyen látható minden oldalon.

Cél: egy RONDO-ügyhöz (ugy) igények, ajánlati tételek és kockázatok (tetel) rögzítése és közös követése, tételenként review-eredményekkel (review).
Adatmodell: ugy(id, cim, ceg_nev, cegjegyzekszam, szekhely, ceg_adat_jelleg, forras); tetel(id, ugy_id, tipus, leiras, forras, dns_verzio, statusz, owner_email); review(tetel_id, kriterium, eredmeny, bizonyitek, verzio). Értékkészletek: tipus = igeny | ajanlati_tetel | kockazat; statusz = review-n_atment | nyitott_kerdes | tervezet; eredmeny = PASS | FAIL | NEM ELLENŐRIZHETŐ.
Adattár: a Site beépített tartós adatbázisa.
Láthatóság: csak a munkatérre korlátozott; a létrehozó az owner. Nyilvános publikálás nincs.
Hitelesítés: a látogatót a munkatéri azonosító adja; a szerver az oai-authenticated-user-email fejlécből tölti az owner_email mezőt.
Rekordjog szerveroldalon: minden tétel olvasható minden bejelentkezett tagnak; írni (módosítani, törölni) csak azt lehet, amelynek az owner_email mezője egyezik a hitelesített e-mail-címmel. A szerver a más tulajdonosú tétel módosítását elutasítja; a gomb elrejtése nem elég.
Képernyők: tételek listája (szűrés típus és státusz szerint), új tétel felvétele, saját tétel szerkesztése, tétel review-sorai.
Kötelező mezők: leiras, forras. Hiányzó adat helyett az érték "Nincs megadva".
Kitöltés: csak az átadott fiktív induló adat (tetel.json, ugy.json, review.json).
Tilos: külső szolgáltatás hívása, API-kulcs létrehozása vagy használata, fizetős funkció bekapcsolása, kapcsolt app használata, valós ügyféladat. Kivétel az ugy.json cégadata (ceg_nev, cegjegyzekszam, szekhely): valós, nyilvános cégadat, a cégadatlapra hivatkozó forras mezővel; a projekt és minden tétel kitalált.
Nem kell AI-funkció a Site-ban; a review-t külön, a ChatGPT-ben futtatjuk.
Mentsd el a verziót deploy nélkül, és add meg a verzió azonosítóját.
```

A brief nem ad felhatalmazást költésre, API-kulcs létrehozására, nyilvános publikálásra vagy külső szolgáltatás használatára. Ha a Site építése ilyet kérne, megállunk, és a döntés a trénereké.

## 5. Kétfiókos tesztterv (hét próba)

Szereplők: Csaba a Site owner (Wenova-munkatér), Krisztián előbb visitor, majd editor. A résztvevők saját Oriana-csoportjukban végzik ugyanezt, ha a munkatérben elérhető. Az eredményeket a `Munka/06-Sites/tesztjegyzek.md` fájlba írjuk (sablon: `06-tesztjegyzek-sablon.md`), a rekordokat a `Munka/06-Sites/rekordok.md` fájlba.

| # | Próba | Lépések | Elfogadás | Ha nem elérhető |
|---|---|---|---|---|
| 1 | Tartós adat | A BA, a Sales és az Account nézetből felvenni egy-egy tételt; frissítés és új munkamenet után visszaolvasni. | Mindhárom tétel ugyanazzal az azonosítóval visszajön. | Prototípus: export, újratöltés, import; a „tartós adatbázis nem része” jelölve. |
| 2 | Közös használat | A második fiókkal megnyitni ugyanazt az ügyet, és felvenni egy tételt; az elsővel újratölteni. | Mindkét fiók ugyanazt az ügyet látja; a második fiók tétele az elsőnél is megjelenik. | Megfigyelés a tréneri demón; prototípus nem pótolja. |
| 3 | Hitelesítés | Meghívott taggal és meghívatlan tesztelővel megnyitni a Site-ot. | A meghívott eléri, a meghívatlan nem. A szerver az `oai-authenticated-user-email` értékét használja. | A prototípus „nem meghívott tag” szimulációja; jelölve, hogy nem hitelesítés. |
| 4 | Rekordjog | Az egyik fiókkal módosítani a másik fiók tételét (a felületen elrejtett gomb nélkül is: közvetlen kéréssel, ha a gyakorlat megengedi). | A szerver elutasítja a módosítást; a saját tétel módosítható. | A prototípus „Próba: írás” gombja; jelölve, hogy böngészőkód szimulálja. |
| 5 | Site-szerepek | Visitorként megnyitni; editorrá tett taggal módosítani, verziót menteni, publikálni. | A visitor nem szerkeszti a kódot; az editor módosít és ment, az első publikálás után publikál; közönséget nem változtat. | Demó; szerepek nem szimulálhatók. |
| 6 | Verzió | Verziót menteni deploy nélkül, előnézetben megnézni, külön deployolni; a korábbi verziókat listáztatni. | A verzió azonosítója a tesztjegyzékben van; az előnézet nem éles. Rollbacket nem ígérünk. | Verzióazonosító nélkül „nem tesztelt”. |
| 7 | Appkapcsolat | Csak akkor próbáljuk, ha van engedélyezett, fiktív forrású kapcsolat. | Minden látogató saját kapcsolatot engedélyez; a Site megosztása nem osztja meg a készítő kapcsolatát; az apphozzáférés csak olvasásra szolgál. | „Nem tesztelt” a jogmátrixban. |

## 6. A tesztjegyzék és a rekordok

A `tesztjegyzek.md`: próba száma, fiók és szerep, lépések, várt és kapott eredmény, PASS / FAIL / NEM TESZTELT, verzióazonosító, megjegyzés. A `rekordok.md`: a Site-ba vitt tételek táblázata (`id`, `tipus`, `leiras`, `forras`, `statusz`, `owner_email`), minden tételnél forráshellyel. Hiányzó adat: „Nincs megadva”.

## 7. Verzió és deploy

A mentett verzió egy deployolható jelölt; a deploy élesít, és minden deployment címe élő. Előnézethez ezért verziót mentünk deploy nélkül. Korábbi verziók a ChatGPT-től listáztathatók; automatikus visszaállítást nem ígérünk. A törölt Site nem állítható vissza.

## 8. Lehet-e reviewer a Site-ban? A Sites-kísérlet jegyzéke

A kérdést megvizsgáljuk, és az eredményt bemutatjuk; működő natív AI-gombot nem ígérünk.

- A Sites-dokumentációban beépített modellhívás nem szerepel. Hogy egy Site natívan hívhat-e modellt, azt ha a munkatérben elérhető, külön próbával nézzük meg; tartalék a lenti biztos út.
- A titkos értékek (secrets) és a kimenő HTTPS léte önmagában nem bizonyít AI-integrációt.
- Saját API-kulcsos szerverhívás levezetett kísérlet volna, külön API-elszámolással, hogy a Sites ezt engedi-e, ha a munkatérben elérhető, külön próbával derül ki. **Ez a brief nem ad felhatalmazást költésre vagy kulcs létrehozására.**
- A „Use your ChatGPT plan” a dokumentáció szerint Plus és Pro előfizetőkre vonatkozik; a Business-munkatérbeli Site-on ha a munkatérben elérhető; tartalék a biztos út.
- Egy determinisztikus „hiányzó mezők ellenőrzése” gomb nem AI-reviewer, és így nem nevezzük.

**Biztos bemutatási út:** a Site exportálja az adott verzió tartalmát, külön ChatGPT-reviewer fut a skillel (lásd 5. gyakorlat), majd te az ellenőrzött R1/R2-eredményt rögzíted a Site-ban (`review` sorok).

A kísérlet jegyzéke (`Munka/06-Sites/tesztjegyzek.md`, külön szakasz). A negatív eredmény is tanulság.

| Mező | Tartalom |
|---|---|
| Vizsgált funkció | például: modellhívás a Site-ból; kimenő HTTPS; saját secret |
| Fiók / csomag | melyik munkatér, melyik fiók, milyen csomag |
| Beállítás | milyen engedély vagy kapcsoló volt bekapcsolva |
| Eredmény | működött / nem működött / nem tesztelt, és hogyan látszott |
| Számlázási forrás | melyik keretből vagy elszámolásból futott volna; ha nem ismert: „Nincs megadva” |
| Korlát | mi akadályozott, vagy mi nem volt eldönthető |

## 9. B-terv

Ha a Site nem elérhető, vagy a próba két perc alatt sem indul: a [prototipus.html](prototipus.html) ugyanazzal az adatmodellel, JSON-exporttal és -importtal, fiktív rekordokkal. A fejlécben ki van mondva: „helyi prototípus, hitelesítés és tartós adatbázis nem része”. Ha csak a tréneri Site működik, a résztvevők a saját kimenetükből helyi prototípust készítenek, a kétfiókos hitelesítési tesztet a tréneri demón figyelik meg. Ha az előzetes Site-próba sikertelen, a funkcionális rész (tartós, közös, hitelesített használat) nyitva marad, és a tesztjegyzékben így van jelölve.

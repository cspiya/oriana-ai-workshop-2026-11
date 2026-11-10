---
id: "06"
cim: "Ügyállapot-követés és beszámoló: RONDO ügykövető (Sites)"
blokk: 6
ido: "15:10-15:35, Sales-Account: 15:35-16:05"
vezeti: "A fázis: Piya Csaba (körbejár: Kemény Krisztián); B fázis: Kemény Krisztián (körbejár: Piya Csaba)"
sav: "közös, B fázis: Sales-Account"
munkamappa: "Munka/06-Sites"
modell: "GPT-6 Luna"
ajanlott_mod: kozos
fazisok: ["A: 15:10-15:35 közös mag", "B: 15:35-16:05 Sales-Account folytatás"]
inditok: ["Kezdjük a 6. gyakorlatot", "Folytassuk a 6. gyakorlatot"]
proaktiv_elem: ["Sites mini-alkalmazás: tartós adat (D1), munkatéri hitelesítés, visitor/editor (ha a munkatérben elérhető)", "mentett verzió és deploy külön lépés", "ellenőrzött tartalom rögzítése közös ügykövetőben"]
eredmeny: ["E8"]
forrasok:
  - "Tananyag/04 usecase RONDO/sites/miniapp-brief.md"
  - "Tananyag/04 usecase RONDO/sites/adatcsomag/ (tartalék tételek)"
  - "Tananyag/04 usecase RONDO/sites/prototipus.html (tartalék)"
  - "Munka/05-Reviewer/stop-dontes.md és R2.md (ellenőrzött tételek)"
  - "Munka/04-Agent/v2/ (a saját sáv kimenete)"
  - "Munka/00-Alapozas/profil.md"
kimenetek:
  - "Munka/06-Sites/tesztjegyzek.md"
  - "Munka/06-Sites/rekordok.md"
  - "Munka/06-Sites/prototipus/ (csak tartalék útnál)"
mellekletek:
  - "Feladatok/mellekletek/06-tesztjegyzek-sablon.md"
  - "Feladatok/mellekletek/06-rekord-sablon.md"
glosszarium: ["Sites", "D1", "rekordjog", "owner / editor / visitor", "deploy", "tracker", "R2 (ellenőrzési kör)"]
fopproban_ellenorizendo: nincs
b_terv: "Nincs Sites a munkatérben: Tananyag/04 usecase RONDO/sites/prototipus.html (helyi prototípus, kiesett funkció jelölve: hitelesítés és tartós adatbázis); a kétfiókos hitelesítési tesztet a tréneri demón figyelik meg"
---

# Cél

Az ellenőrzött RONDO-eredményekből (RONDO Hullámkartongyártó Kft.: valós cég, kitalált projekt) közös ügykövetőt (trackert) készítesz: egy kis mini-alkalmazást, amelyben igények, ajánlati tételek és kockázatok forráshellyel és ellenőrzési eredménnyel szerepelnek. Azt tanulod meg, hogyan lesz egy egyszeri, ellenőrzött munkából tartós, közösen használható állapotkövetés, és hogyan ellenőrizzük két fiókkal, hogy az adat visszajön, és a más tulajdonában lévő tétel nem módosítható. A Sites (a ChatGPT mini-alkalmazás-készítő funkciója) elérése munkatérfüggő: ha a munkatérben elérhető, azzal dolgozol, különben a helyi prototípussal, azonos módszerrel.

# Indítás

A résztvevő az `Oriana AI-workshop` projekt Work-beszélgetésében ezt írja: „Kezdjük a 6. gyakorlatot.” A Sales-Account sáv a B fázisnál: „Folytassuk a 6. gyakorlatot.” Az AI ilyenkor a `Munka/06-Sites` fájljaiból állapítja meg, hol tart, és egy sorban közli, például: „6. gyakorlat, B fázis: javítás és tételek.” Fázisfelismerés: nincs `tesztjegyzek.md` → A; van `tesztjegyzek.md` és `rekordok.md` → B (csak Sales-Account). Az AI első üzenete kérdés nélkül:

1. **Cél:** az ellenőrzött RONDO-eredményekből közös, tartósan használható ügykövető, kétfiókos ellenőrzéssel.
2. **Út:** A fázis, 15:10-15:35 (közös): cél és adatmodell, tartalom előkészítése, kétfiókos adat- és jogteszt · B fázis, 15:35-16:05 (csak a Sales-Account sávnak): a próbák javítása, a Sites-kísérlet eredménye, saját tételek rögzítése. A BA-sáv (BA: üzleti elemző) 15:35-től a 6b gyakorlatot végzi.
3. **Hová jutunk:** a [tesztjegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/tesztjegyzek.md) és a [rekordok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/rekordok.md); tartalék útnál a [prototipus](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/prototipus/) mappa.
4. **Mit tanulunk:** a hat lépés Ellenőrzés és Rögzítés szakasza közös adatra; a tartós adat, a hitelesítés és a rekordjog ellenőrzése próbával, nem hittel; a csak ellenőrzött vagy nyitottnak jelölt tartalom szabálya.
5. **Hová mentek:** a kimeneteket a [Munka/06-Sites](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/) mappába mentem, a [Tananyagot](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/) nem módosítom. Csak fiktív adat kerül a Site-ba.

Ugyanebben az üzenetben egy sor a módról: „Ajánlott mód: közös. A kulcslépésnél te írod a kérést, én a hét elem szerint ellenőrzöm és futtatok. Elakadtál? Adj tippet · Mutasd a mintát · Írd meg helyettem és futtasd. Módot így váltasz: Váltsunk vezetett / önálló módra.” Ha a profilban más mód szerepel, az AI azt használja, és ezt egy sorban közli.

Az AI beolvassa a [profil.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/00-Alapozas/profil.md) fájlt (sáv, mód, DNS-verzió: a vállalati szabályok kiadása), és ✅/⚠️ jelöléssel ellenőrzi a bemeneteket (R2: az 5. gyakorlat második független ellenőrzési köre, nem a Sites fájltára): a [stop-dontes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/stop-dontes.md), az [R2.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/R2.md) és a [v2](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/v2/) mappa meglétét. Ami hiányzik, azt a [tartalék adatcsomag](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/sites/adatcsomag/tetelek.csv) pótolja, külön kérdés nélkül. Ezután azonnal jön az 1. lépés kérdése.

**Sávok:** az A fázis közös, a „BA:” és „Sales-Account:” jelölésű sorok a tételek típusában térnek el; a B fázis csak a Sales-Account sávé.

# Lépések

## 1. lépés / 10 – Cél, adatmodell és elérés (kb. 3 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 1. lépés / 10 – Cél, adatmodell és elérés. Három mondatban elmondja a [miniapp-brief.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/sites/miniapp-brief.md) lényegét: három tábla (`ugy`, `tetel`, `review`), a szabály (a tételek olvashatók mindenkinek, írni csak a saját tételt lehet), és a Site korlátja (csak fiktív adat, nyilvános publikálás nincs). Ami a Sites-ról biztos, azt tényként mondja: létrehozható leírásból, tartós adatbázist (D1) és munkatéri hitelesítést használ, a szerepek owner, editor, visitor, a mentett verzió és a deploy külön lépés. Ami a te munkatereden nem biztos, azt „ha a munkatérben elérhető” megjegyzéssel kezeli. A beépített AI-hívást nem ígéri.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): ellenőrizd a miniapp-brief tartalmát; a nyilvános publikálást, a külső látogatót és a beépített AI-hívást ne ígérd; kérdezd meg, látja-e a résztvevő a Sites-lehetőséget a munkatérben (két perc, nem több); a tartalék a helyi prototípus.
- Bekérendő paraméter(ek): Egy döntés: „Melyik úton haladsz? A: Site a munkatérben (ha elérhető; ajánlott) · B: helyi prototípus (`prototipus.html`; a kiesett funkció a hitelesítés és a tartós adatbázis) · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 1. lépésnél tartunk a 10 lépésből (A fázis); most: cél, adatmodell és elérés; utána: a Site-brief kiegészítése; a fázis végén: mentés és az A fázis lezárása.” Az adatmodell három táblája egy sorban, a két út, és a döntés.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a választott út rögzítve; a prototípus-fájl megnyitható (ha B).
- Kimenet (fájl): Nincs külön fájl; az út a tesztjegyzék fejlécébe kerül.
- Miért fontos (az AI elmondja): A tartós, közös adat nem ugyanaz, mint a beszélgetés: itt a rendszernek kell megjegyeznie és védenie az adatot, ezért próbával ellenőrizzük, nem hisszük.
- Ha nem elérhető: ha a Sites két percen belül nem érhető el, a helyi prototípussal haladsz; a kiesett funkció a tartós adatbázis és a hitelesítés, a módszer (adatmodell, szabály, próba) azonos.

## 2. lépés / 10 – A Site-brief kiegészítése (kb. 5 perc, A fázis, közös)

- Kulcslépés: igen
- Mit csinál az AI: 2. lépés / 10 – A Site-brief kiegészítése. Megmutatja a [miniapp-brief](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/sites/miniapp-brief.md) 4. pontjában álló briefet, és kéri, hogy a saját szavaiddal egészítsd ki a saját sávod tételeire: BA: igények (`igeny`); Sales-Account: ajánlati tételek és kockázatok (`ajanlati_tetel`, `kockazat`). A kiegészítést a hét elem szerint ✅/⚠️ jelöléssel értékeli.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a kiegészítés mondja ki a szabályt: kinek mi a joga a tételekhez, és hol érvényesül (szerveroldalon); a brief ne tartalmazzon költést, kulcslétrehozást, kapcsolt appot, nyilvános publikálást; az AI ne írja át a briefet a résztvevő helyett.
- Mit futtat az AI? Cél: a Site megépítéséhez elég pontos brief a saját tételtípusokra → Címzett: a Sites építő (Work) → Forrás és határ: a miniapp-brief 4. pontja és a saját sávod tételtípusai → Kimeneti séma: kiegészítő bekezdés a brief végére → Szabályok: csak fiktív adat; a rekordjog szerveroldali; AI-funkció nincs → Ellenőrzés: a hét elem megvan; a rekordjog kimondott → Mentés: nincs külön fájl, a kiegészítés a tesztjegyzék „Brief” szakaszába kerül. Miért így épül fel: egy tartós adatot kezelő alkalmazásnál a jogszabályt a szerveroldali kódnak kell betartatnia; egy elrejtett gomb nem védelem.
- Tipp-létra: 1. Ki olvashat és ki módosíthat egy tételt, és hol kell ennek érvényesülnie ahhoz, hogy egy elrejtett gomb ne legyen az egyetlen védelem? · 2. Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: … · 3. „Egészítsd ki a ‚RONDO ügykövető’ briefet a(z) <igény / ajánlati tétel és kockázat> tételtípusra: a tételek minden bejelentkezett tagnak olvashatók; módosítani és törölni csak a saját tételt lehet, amelynek az `owner_email` mezője egyezik a hitelesített e-mail-címmel; a szerver utasítsa el a más tulajdonosú tétel módosítását. Csak az átadott fiktív adat kerülhet be. Tilos: külső szolgáltatás, API-kulcs (API: programozói felület), fizetős funkció, valós adat.”
- Bekérendő paraméter(ek): A saját kiegészítésed (saját munka).
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 2. lépésnél tartunk a 10 lépésből (A fázis); most: a Site-brief kiegészítése; utána: tartalom előkészítése és betöltés; a fázis végén: mentés és az A fázis lezárása.” A kiegészítés hét elemes ✅/⚠️ értékelését és a javított változatot.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a rekordjog szerveroldalinak van kimondva; nincs tiltott elem a briefben.
- Kimenet (fájl): a [tesztjegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/tesztjegyzek.md) „Brief” szakasza.
- Miért fontos (az AI elmondja): Amit nem mondasz ki a briefben, azt az alkalmazás nem tudja: a jogosultság szabálya is egy követelmény, és előre kell leírni.

## 3. lépés / 10 – Tartalom előkészítése és betöltés (kb. 6 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 3. lépés / 10 – Tartalom előkészítése és betöltés. A [rekord sablon](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/06-rekord-sablon.md) szerint összeállítja a `rekordok.md` első változatát. A tételek forrása: a saját, ellenőrzött eredményed (a `v2/` kimenetei és az `R2.md` PASS tételei), vagy a tartalék adatcsomag. Csak olyan tétel kerül be, amelyik a reviewen átment, vagy nyitott kérdésként jelölt. Ha a Site elérhető, az AI a briefet és az induló adatot beadja a Site-építőnek; különben megnyitja a [prototipus.html](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/sites/prototipus.html) fájlt (vagy másolatát a `Munka/06-Sites/prototipus/` mappába).
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a tételek `statusz` mezője az R2 eredménye szerint `review-n_atment` vagy `nyitott_kerdes`; a forrás és a hely kötelező, hiány „Nincs megadva”; az `owner_email` fiktív cím legyen; a prototípus a tartós adat és a hitelesítés nélkül működik, ezt mondd ki; a Site építése a tréneri demón is látszik.
- Mit futtat az AI? Cél: ellenőrzött tételek betöltése az ügykövetőbe → Címzett: te és a pár → Forrás és határ: a `v2/`, az `R2.md` vagy az adatcsomag; más forrás nincs → Kimeneti séma: a rekord sablon 1-2. táblája → Szabályok: csak ellenőrzött vagy nyitottnak jelölt tartalom; hiány „Nincs megadva” → Ellenőrzés: minden tételnek van forráshelye és státusza → Mentés: `Munka/06-Sites/rekordok.md`. Miért így épül fel: egy közös ügykövető csak annyit ér, amennyire a benne lévő tételek ellenőrzöttek.
- Bekérendő paraméter(ek): Egy döntés: „A tételek forrása: A: a saját ellenőrzött eredményem (ajánlott, ha van R2) · B: a tartalék adatcsomag · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 3. lépésnél tartunk a 10 lépésből (A fázis); most: tartalom előkészítése és betöltés; utána: kétfiókos adat- és jogteszt; a fázis végén: mentés és az A fázis lezárása.” A tételek rövid táblázatát a státuszokkal, és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: az AI két tételnél a forráshelyet visszakeresi a nyers forrásban (✅/⚠️).
- Kimenet (fájl): [rekordok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/rekordok.md).
- Miért fontos (az AI elmondja): Az ügykövető azért megbízható, mert csak azt viszi be, amit az ellenőrzés igazolt; a nyitott kérdés is nyitottnak látszik.
- Ha nem elérhető: ha a Site építése nem indul két percen belül, a helyi prototípusba töltöd a tételeket (export és import a JSON-fájlon át); a kiesett funkció a tartós adatbázis és a hitelesítés.

## 4. lépés / 10 – Kétfiókos adat- és jogteszt (kb. 7 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 4. lépés / 10 – Kétfiókos adat- és jogteszt. A [tesztjegyzék sablon](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/06-tesztjegyzek-sablon.md) hét próbájából az idő szerint legalább hármat végigviszel a párral: a tartós adatot (1.), a közös használatot (2.) és a rekordjogot (4.). A tréner a Wenova-munkatérben két fiókkal demózza a hitelesítést és a szerepeket (3., 5.); te megfigyeled. Amit nem próbálsz ki, azt „NEM TESZTELT” jelzi.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a próbákat lépésenként vezesd; az elvárt eredményt a próba előtt mondd ki, a kapottat utána; a rekordjog-próbánál a szerver elutasítását kell látni, nem a gomb hiányát; prototípusnál jelöld, hogy a szabályt a böngészőkód szimulálja (nem hitelesítés); a verziómentést (6. próba) deploy nélkül végezd, ha a Site elérhető; a 7. próbát (appkapcsolat) ebben a gyakorlatban nem végezzük; ha egy próba eltér az elvárttól, FAIL, ne korrigáld.
- Mit futtat az AI? Cél: a tartós adat és a rekordjog tényleges ellenőrzése → Címzett: te és a pár → Forrás és határ: a Site vagy a prototípus, fiktív adattal, két szereppel → Kimeneti séma: a sablon próba-táblája: lépések, elvárt, kapott, PASS / FAIL / NEM TESZTELT → Szabályok: a kapott eredményt nem javítjuk meg a jegyzékben; a nem kipróbált próba nem PASS → Ellenőrzés: a kapott eredmény megfigyelt, nem feltételezett → Mentés: `Munka/06-Sites/tesztjegyzek.md`. Miért így épül fel: a hitelesítés és a jog attól működik, hogy próbával kimutattuk, nem attól, hogy a leírás szerint működnie kell.
- Bekérendő paraméter(ek): Egy döntés: „Az eltérő vagy nem kipróbált próbákat: A: FAIL / NEM TESZTELT jelzéssel rögzítem, a javítás a B fázisban (Sales-Account) vagy a gyakorlaton túl · B: még egyet most kipróbálok: melyiket? · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 4. lépésnél tartunk a 10 lépésből (A fázis); most: kétfiókos adat- és jogteszt; utána: mentés és az A fázis lezárása; a fázis végén: mentés és az A fázis lezárása.” A próba-táblát és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: minden próbasorban a kapott eredmény megfigyelésre épül; prototípus esetén a szimuláció jelölve (✅/⚠️).
- Kimenet (fájl): [tesztjegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/tesztjegyzek.md).
- Miért fontos (az AI elmondja): A „működik” állítás semmit nem ér próba nélkül; a jegyzék azt mutatja, mit ellenőriztünk és mit nem.
- Ha nem elérhető: ha a második fiók vagy a Site nem érhető el, a hitelesítési és szerepköri próbát a tréneri demón figyeled meg, a prototípuson pedig a szimulált szabályt próbálod; a jegyzékben a próba „NEM TESZTELT” vagy „szimulált”, a kiesett funkció a valódi hitelesítés.

## 5. lépés / 10 – Mentés és az A fázis lezárása (kb. 4 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 5. lépés / 10 – Mentés és az A fázis lezárása. Menti a rekordokat és a tesztjegyzéket, hozzáteszi a verzióazonosítót (ha a Site elérhető), és a tételek státuszát egyezteti az ellenőrzés eredményével: csak az R2 PASS tétel lehet `review-n_atment`. A Sales-Account sávnak megmondja, hogy 15:35-től a B fázis folytatódik; a BA-sávnak, hogy 15:35-től a 6b gyakorlat következik („Kezdjük a 6b gyakorlatot”).
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): ellenőrizd a státuszokat az R2-vel; a verzió azonosítóját a tesztjegyzékbe írd; ha nincs azonosító, „nincs”; a Site törlése nem visszaállítható: ne töröld; a prototípus exportját mentsd el.
- Mit futtat az AI? Cél: az A fázis kimeneteinek rögzítése → Címzett: te és a B fázis → Forrás és határ: a 3-4. lépés kimenete → Kimeneti séma: a sablonok táblái → Szabályok: a státusz az R2-vel egyezik; a hiány „Nincs megadva” → Ellenőrzés: a fájlok megnyithatók, a státuszok az R2-vel egyeznek → Mentés: `Munka/06-Sites/rekordok.md`, `tesztjegyzek.md`. Miért így épül fel: az ügykövető tartalmának állapota ellenőrizhető legyen a mentés után is.
- Bekérendő paraméter(ek): Egy döntés: „A tételek státusza: A: ahogy az R2 mutatja (PASS esetén review-n_atment, egyébként nyitott_kerdes; ajánlott) · B: egyet másképp látok: írd le · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 5. lépésnél tartunk a 10 lépésből (A fázis); most: mentés és az A fázis lezárása; utána: a hibás vagy nem tesztelt próba javítása; a fázis végén: mentés és az A fázis lezárása.” A státuszok táblázatát az R2-eredménnyel, és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a státusz és az R2 eredménye tételenként egyezik (✅/⚠️).
- Kimenet (fájl): [rekordok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/rekordok.md), [tesztjegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/tesztjegyzek.md).
- Miért fontos (az AI elmondja): A közös ügykövetőben a státusz kötelezettség: azt jelenti, hogy valaki ellenőrizte.

## 6. lépés / 10 – A hibás vagy nem tesztelt próba javítása (kb. 8 perc, B fázis, Sales-Account)

- Kulcslépés: igen
- Mit csinál az AI: 6. lépés / 10 – A hibás vagy nem tesztelt próba javítása. „Folytassuk a 6. gyakorlatot” után közli: „6. gyakorlat, B fázis: javítás és tételek.” Kiválasztja a tesztjegyzék egy FAIL vagy NEM TESZTELT próbáját, és kéri, hogy fogalmazz egy fókuszált javítási kérést. Az újrapróbát futtatja, és az eredményt rögzíti.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): ha minden próba PASS, a legkevésbé tesztelt próbát vedd elő (például a verziómentést); a javítási kérés egy hibára szóljon; a kérést a hét elem szerint értékeld; az újrapróba után az eredményt írd a jegyzékbe; verzióazonosító mentése deploy nélkül; ha a Site nem elérhető, a prototípus javítása és exportja.
- Mit futtat az AI? Cél: egy konkrét hiba fókuszált javítása és újrapróbája → Címzett: a Site vagy a prototípus → Forrás és határ: a tesztjegyzék és a brief; új funkció nem kerül be → Kimeneti séma: javított verzió azonosítóval, a próba új sora → Szabályok: egy hiba, egy javítás, egy újramérés → Ellenőrzés: ugyanazt a próbát futtatja újra, a kapott eredmény megfigyelt → Mentés: `Munka/06-Sites/tesztjegyzek.md`. Miért így épül fel: a javítás akkor igazolt, ha ugyanazt a próbát újra lefuttatva más eredményt kapunk.
- Tipp-létra: 1. Melyik próbán derül ki, hogy a szabály a szerveren érvényesül, és mit kell másképp kérni a Site-tól, hogy ez teljesüljön? · 2. Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: … · 3. „A tesztjegyzék <n>. próbája <FAIL / NEM TESZTELT>. Javítsd úgy a Site-ot, hogy <a kívánt viselkedés>, a szerveroldali szabály módosításával. Ne vezess be új funkciót. Mentsd a verziót deploy nélkül, add meg az azonosítóját, majd én futtatom újra ugyanazt a próbát.”
- Bekérendő paraméter(ek): A javítási kéréd (saját munka). Egy döntés: „Melyik próbát javítjuk? A: a FAIL-t (ajánlott) · B: a NEM TESZTELT-et · C: egyedi: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 6. lépésnél tartunk a 10 lépésből (B fázis); most: a hibás vagy nem tesztelt próba javítása; utána: a Sites-kísérlet eredménye; a fázis végén: mentés, export és lezárás.” A próba előtte/utána sorát és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: az újrapróba kapott eredménye megfigyelt; a verzióazonosító a jegyzékben (✅/⚠️).
- Kimenet (fájl): a frissített [tesztjegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/tesztjegyzek.md).
- Miért fontos (az AI elmondja): A javítás ugyanazzal a méréssel igazolt, mint a hiba kimutatása: így nem érzésre mondjuk, hogy kész.
- Ha nem elérhető: ha a Site nem módosítható két percen belül, a prototípuson végzed a javítást és az exportot; a próba „szimulált” jelölésű, a kiesett funkció a valódi szerveroldali szabály.

## 7. lépés / 10 – A Sites-kísérlet eredménye (kb. 5 perc, B fázis, Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 7. lépés / 10 – A Sites-kísérlet eredménye. Kemény Krisztián bemutatja, mit vizsgáltak arról, lehet-e a Site-ba beépített AI-reviewer; a negatív eredmény is tanulság. Az AI a [tesztjegyzék sablon](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/06-tesztjegyzek-sablon.md) 3. szakaszának mezőit tölti ki a bemutatott tényekből, és a „Nincs megadva” jelzést használja, ahol az adat nem ismert. A biztos bemutatási utat is leírja: a Site exportálja az adott verzió tartalmát, külön ChatGPT-reviewer fut (az 5. gyakorlat receptjével), és az ellenőrzött R2-eredményt rögzíted a Site `review` soraiban.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): natív AI-gombot ne ígérj; ami nincs kipróbálva vagy dokumentálva, azt mondd ki; a mezőket csak a bemutatott tényekből töltsd; a számlázási forrás, ha nem ismert: „Nincs megadva”.
- Mit futtat az AI? Cél: a kísérlet jegyzékének kitöltése és a biztos út leírása → Címzett: te → Forrás és határ: a tréneri bemutató és a [tesztjegyzék sablon](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/06-tesztjegyzek-sablon.md) → Kimeneti séma: hat mező: vizsgált funkció, fiók és csomag, beállítás, eredmény, számlázási forrás, korlát → Szabályok: nincs ígéret kipróbálatlan funkcióra → Ellenőrzés: minden mezőben tény vagy „Nincs megadva” → Mentés: `Munka/06-Sites/tesztjegyzek.md` 3. szakasza. Miért így épül fel: a negatív vagy nem eldönthető eredmény is rögzített tudás; így nem épül a következő lépés kipróbálatlan funkcióra.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 7. lépésnél tartunk a 10 lépésből (B fázis); most: a Sites-kísérlet eredménye; utána: ajánlati tételek rögzítése; a fázis végén: mentés, export és lezárás.” A kitöltött jegyzék-szakaszt. Kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: minden mező tényből vagy „Nincs megadva” jelzésből áll (✅/⚠️).
- Kimenet (fájl): a [tesztjegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/tesztjegyzek.md) 3. szakasza.
- Miért fontos (az AI elmondja): Egy funkció, amelyet nem próbáltunk ki vagy nem dokumentált, nem tanítható tényként; a kísérlet jegyzéke megmutatja, mit tudunk és mit nem.
- Ha nem elérhető: ha a bemutató nem tartható meg, a jegyzék mezőit „Nincs megadva” jelzéssel hagyod, és a biztos utat (export, külön reviewer, rögzítés) kézzel követed; a kiesett funkció a bemutatott kísérlet.

## 8. lépés / 10 – Ajánlati tételek rögzítése (kb. 7 perc, B fázis, Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 8. lépés / 10 – Ajánlati tételek rögzítése. A saját `v2/` kalkulációból és változásjegyzékből, valamint az R2 eredményéből kiválaszt legfeljebb három tételt (ajánlati tétel vagy kockázat), és a rekord sablon szerint felveszi a `rekordok.md` fájlba. Minden tételnek van forráshelye, státusza (`review-n_atment` csak R2 PASS esetén, különben `nyitott_kerdes`) és review-sora az R2-ből.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): csak R2 szerint ellenőrzött tételt jelölj `review-n_atment` státusszal; a hiányzó adat „Nincs megadva”; ha nincs R2, a tartalék adatcsomag megfelelő tételeit használd, jelölve; a tételeket a Site-ba vagy a prototípusba is töltsd be, és olvasd vissza újratöltés után.
- Mit futtat az AI? Cél: saját tételek rögzítése az ügykövetőben → Címzett: te és a csapat → Forrás és határ: a `v2/`, az `R2.md` vagy az adatcsomag → Kimeneti séma: a rekord sablon 1-2. táblája → Szabályok: a státusz az R2-ből jön; a hiány „Nincs megadva” → Ellenőrzés: újratöltés után a tételek visszajönnek ugyanazzal az azonosítóval → Mentés: `Munka/06-Sites/rekordok.md`. Miért így épül fel: a rekord addig nem „ellenőrzött”, amíg a review-sor és a forráshely nincs mellette.
- Bekérendő paraméter(ek): Egy döntés: „Melyik három tétel kerüljön be? A: a kalkuláció két legnagyobb hatású tétele és a legfontosabb nyitott kockázat (ajánlott) · B: egyedi lista: írd le · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 8. lépésnél tartunk a 10 lépésből (B fázis); most: ajánlati tételek rögzítése; utána: következő lépések rögzítése; a fázis végén: mentés, export és lezárás.” A három tételt forrással és státusszal, és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: újratöltés után a tételek visszajönnek; a forráshely két tételnél visszakeresett (✅/⚠️).
- Kimenet (fájl): a frissített [rekordok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/rekordok.md).
- Miért fontos (az AI elmondja): A követés attól megbízható, hogy a tétel mellett látszik, mi az ellenőrzés eredménye és honnan jön.
- Ha nem elérhető: ha a Site-ba nem tölthető be, a prototípus JSON-exportja a mentés; a kiesett funkció a tartós adatbázis.

## 9. lépés / 10 – Következő lépések rögzítése (kb. 5 perc, B fázis, Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 9. lépés / 10 – Következő lépések rögzítése. A `rekordok.md` 3. szakaszába tételenként egy következő lépést ír: ki végezné, mi a bemenete, mi a kimenete, és mi az írási határa (mit nem módosíthat). Ez javaslat, nem vállalás.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a felelőst ne találd ki: ha nincs megadva, „Nincs megadva”; a következő lépés ne legyen küldés vagy külső írás; a határidő csak akkor szerepelhet, ha forrásból jön.
- Mit futtat az AI? Cél: a tételek folytatásának rögzítése → Címzett: a csapat → Forrás és határ: a `rekordok.md` tételei és a sáv forrásai → Kimeneti séma: a sablon 3. táblája → Szabályok: javaslat nem vállalás; hiány „Nincs megadva” → Ellenőrzés: minden tételhez van következő lépés vagy „Nincs megadva” → Mentés: `Munka/06-Sites/rekordok.md`. Miért így épül fel: a rögzített következő lépés teszi a tételt folytathatóvá, az írási határ pedig megakadályozza, hogy a segéd túllépje a hatáskörét.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 9. lépésnél tartunk a 10 lépésből (B fázis); most: következő lépések rögzítése; utána: mentés, export és lezárás; a fázis végén: mentés, export és lezárás.” A következő lépések táblázatát. Kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: minden tételhez tartozik sor; a felelős vagy a határidő nincs kitalálva (✅/⚠️).
- Kimenet (fájl): a [rekordok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/rekordok.md) 3. szakasza.
- Miért fontos (az AI elmondja): A követés attól proaktív, hogy minden tételnél látszik a következő lépés, a bemenet, a kimenet és a határ.

## 10. lépés / 10 – Mentés, export és lezárás (kb. 5 perc, B fázis, Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 10. lépés / 10 – Mentés, export és lezárás. Lezárja a tesztjegyzéket (összesítő: PASS / FAIL / NEM TESZTELT darabszám), a rekordok állapotát exportálja (CSV vagy JSON), és közli, mi marad nyitva. A Site-ot nem törli és nem publikálja nyilvánosan.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): számold a próbaeredményeket a jegyzékből, ne emlékezetből; az exportot a `Munka/06-Sites/` mappába mentsd `ÉÉÉÉ-HH-NN_ugykovetes_export.csv` néven a forrás dátumával; a nyitott tételeket sorold fel; a „kész” nem publikálási engedély.
- Mit futtat az AI? Cél: az ügykövető állapotának rögzítése → Címzett: te és a következő nap → Forrás és határ: a `rekordok.md` és a `tesztjegyzek.md` → Kimeneti séma: összesítő sor, export → Szabályok: a számok a jegyzékből jönnek; nincs publikálás → Ellenőrzés: az export sorainak száma egyezik a rekordokéval → Mentés: `Munka/06-Sites/`. Miért így épül fel: az export a tartósság elleni biztosítás: ha a Site vagy a böngésző állapota elvész, az adat megvan.
- Bekérendő paraméter(ek): Egy döntés: „Az összesítés: A: ahogy van, mentsd (ajánlott) · B: egy tételt módosítok: írd le · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 10. lépésnél tartunk a 10 lépésből (B fázis); most: mentés, export és lezárás; utána: a gyakorlat zárása; a fázis végén: mentés, export és lezárás.” Az összesítő sort és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: az export sorainak száma egyezik a rekordokéval (✅/⚠️).
- Kimenet (fájl): [tesztjegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/tesztjegyzek.md), [rekordok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/rekordok.md), az export a [Munka/06-Sites](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/) mappában.
- Miért fontos (az AI elmondja): A tartós ügykövető nem a beszélgetésben él: az exportált állapot az, ami a nap után is megvan.

# Elakadás

- **A Sites nem látszik a munkatérben:** az AI két perc után a helyi prototípusra vált, megnevezi a kiesett funkciót (tartós adatbázis, hitelesítés), és a módszert azonos marad.
- **Nincs második fiók a hitelesítési próbához:** az AI a próbát a tréneri demón figyelteti meg, és „NEM TESZTELT” jelöli a saját jegyzékben.
- **A Site-építés elhúzódik:** az AI az előkészített adatcsomaggal és a prototípussal folytat; a Site építése a háttérben tovább futhat.
- **A szerver elfogadja a más tulajdonában lévő tétel módosítását:** az AI FAIL-ként rögzíti, nem korrigálja a jegyzéket, és a B fázisban (Sales-Account) javítási körre veszi.
- **Valós ügyféladat vagy jelszó került elő:** az AI nem menti, nem tölti a Site-ba; egy mondatban jelzi, hogy csak fiktív adat kerülhet bele.
- **Kapcsolt app vagy külső látogató bevonása merül fel:** az AI jelzi, hogy ez ebben a gyakorlatban nem része; a próba „nem tesztelt”.
- **Időhiány:** a 7. próba kimarad; az A fázis legalább az 1., 2. és 4. próbát tartalmazza.

# Ellenőrzés a végén

Az AI önellenőrző listája; ✅/⚠️ jelöléssel, linkekkel közli, ⚠️ esetén egy mondatban írja le, mit javít.

- A [tesztjegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/tesztjegyzek.md) és a [rekordok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06-Sites/rekordok.md) megvan, és megnyitható.
- Minden próbánál a kapott eredmény megfigyelésen alapul; a nem kipróbált próba „NEM TESZTELT”; prototípus esetén a szimuláció jelölve.
- A tételek státusza az R2 eredményével egyezik; minden tételnek van forráshelye; a hiány „Nincs megadva”.
- Nem szerepel natív AI-reviewer ígérete; a Sites-kísérlet jegyzéke tényekből vagy „Nincs megadva” jelzésből áll.
- Csak fiktív adat került a Site-ba vagy a prototípusba; a nyilvános publikálás nem történt meg.
- Minden fájl- és mappaemlítés kattintható link; a fiktív jelölés megvan; javaslat nem döntés; a Tananyag érintetlen.
- Ha prototípus vagy tréneri demó szerepelt, a kiesett funkció megnevezett.

# Zárás – mit tanultunk

Az AI összefoglal 5-8 sorban: mi készült (linkekkel: a tesztjegyzék, a rekordok, Sales-Account: az export és a kísérlet jegyzéke); a hat lépés hol jelent meg (Cél a briefben, Forrás az ellenőrzött tételekben, Utasítás a Site-brief kiegészítésben, Ellenőrzés a hét próbában, Javítás a 6. lépésben, Rögzítés az exportban); melyik proaktív elem épült be (tartós, közös, hitelesített adat, a verzió és a deploy külön lépése, ha a munkatérben elérhető); és mi vihető át. Utána egyszer felteszi a „Vidd haza” kérdést: „Melyik saját feladatodon próbálnád ki ugyanezt? A: a profilodban rögzített feladat: <feladat> · B: egy másik visszatérő feladat · C: más: írd le.”

# Vidd haza

- **BA:** a követelmények (igények) azonosítóval, forráshellyel és ellenőrzési státusszal egy közös követőben; a szerepek és a rekordjog előre leírva.
- **Sales-Account:** az ajánlati tételek és kockázatok közös követése az ellenőrzés eredményével és a következő lépéssel, exporttal mentve.
- **Közös:** minden olyan állapotkövetésnél, ahol többen írnak: a szabály, hogy ki mit módosíthat, a szerveren érvényesüljön, és próbával ellenőrizzük.

Résztvevői döntések száma ebben a gyakorlatban: A fázis 4 (út, a tételek forrása, a próbaeredmények kezelése, a tételek státusza); Sales-Account B fázis 3 (a javítandó próba, a három tétel, az összesítés); a Sales-Account sávban összesen 7, a BA-sávban (csak az A fázis, majd a 6b gyakorlat) 4. A saját kérések és a tipp-létra kérései nem döntések.

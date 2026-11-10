---
id: "05"
cim: "RONDO: független ellenőrzés (reviewer-recept, R1, R2 és stop-döntés)"
blokk: 5
ido: "13:25-13:45, 13:45-14:15, 14:50-15:10"
vezeti: "Kemény Krisztián; körbejár: Piya Csaba"
sav: "párhuzamos: BA | Sales-Account"
munkamappa: "Munka/05-Reviewer"
modell: "GPT-6.1 Sol"
ajanlott_mod: onallo
fazisok: ["A: 13:25-13:45 reviewer-recept és review-csomag", "B: 13:45-14:15 R1", "C: 14:50-15:10 R2 és stop-döntés"]
inditok: ["Kezdjük az 5. gyakorlatot", "Folytassuk az 5. gyakorlatot", "RONDO 05 reviewer R1", "RONDO 05 reviewer R2"]
proaktiv_elem: ["Skill mint újrahasználható recept (ha a munkatérben elérhető; tartalék: reviewer-brief)", "friss beszélgetés mint független kontextus", "repeat until good korlátozott körrel és stop-döntéssel"]
eredmeny: ["E6", "E7", "E10"]
forrasok:
  - "Munka/04-Agent/v1/ (és v2/) kötelező kimenetei"
  - "Munka/04-Agent/kriteriumok.md"
  - "Tananyag/04 usecase RONDO/forrasok/BA/… (BA) vagy …/Sales-Account/… (Sales-Account)"
  - "Munka/01-DNS/dns/README.md (verzió) vagy Tananyag/04 usecase RONDO/dns-minta/ (fiktív kiadás)"
  - "Tananyag/05 usecase Skill keszites/project files/SKILL_minta.md (szerkezeti minta)"
kimenetek:
  - "Munka/05-Reviewer/reviewer/SKILL.md vagy Munka/05-Reviewer/reviewer-brief.md"
  - "Munka/05-Reviewer/review/ (a szűk bemeneti csomag)"
  - "Munka/05-Reviewer/R1.md, R2.md, stop-dontes.md"
mellekletek:
  - "Feladatok/mellekletek/05-reviewer-SKILL-minta.md"
  - "Feladatok/mellekletek/05-reviewer-brief-sablon.md"
  - "Feladatok/mellekletek/05-review-csomag-sablon.md"
  - "Feladatok/mellekletek/05-R-jelentes-sablon.md"
  - "Feladatok/mellekletek/05-stop-dontes-sablon.md"
glosszarium: ["reviewer", "Skill", "R2", "rubrika", "review-csomag", "stop-döntés", "KAPU II", "blocker", "major"]
fopproban_ellenorizendo: nincs
b_terv: "Nincs Skill vagy nincs izolált friss beszélgetés: reviewer-brief szövegként és páros emberi review; nincs kódfuttatás: kézi vagy táblázatkezelős újraszámolás, a kódos cél nem teljesültként jelölve"
---

# Cél

A 4. gyakorlatban elkészült első változatot (a RONDO-eset: valós cég, kitalált projekt) egy független ellenőr vizsgálja meg, és te döntesz arról, hogy a munka lezárható-e. A BA-sávban (BA: üzleti elemző) ez a KAPU II (az FDD-egység, vagyis a funkcionális tervdokumentum ellenőrzése a fejlesztésre adás előtt), a Sales-Account sávban (értékesítés és ügyfélkapcsolat) az ajánlati számok és vállalások ellenőrzése. Az R1 és az R2 az első és a második független ellenőrzési kör; a K a kritérium rövidítése (K1-K7 a 4. gyakorlat mérhető elvárásai); a DNS a vállalati szabályok verziózott gyűjteménye. Azt tanulod meg, hogyan lesz a saját ellenőrzési szempontjaidból újrahasználható recept (Skill vagy brief), miért kell az ellenőrnek friss, szűk bemenet, és hogyan ér véget kimondott stop-feltétellel a javítási ciklus (repeat until good: ellenőrzés, javítás, újraellenőrzés korlátozott körrel).

# Indítás

A résztvevő az `Oriana AI-workshop` projekt Work-beszélgetésében ezt írja: „Kezdjük az 5. gyakorlatot.” Későbbi fázisnál: „Folytassuk az 5. gyakorlatot.” Az AI ilyenkor a `Munka/05-Reviewer` és a `Munka/04-Agent` fájljaiból állapítja meg, hol tart, és egy sorban közli, például: „5. gyakorlat, B fázis: R1.” Fázisfelismerés: nincs `review/` mappa vagy `csomag-jegyzek.md` → A; van csomag, de nincs `R1.md` → B; van `R1.md`, de nincs `R2.md` → C; van `R2.md` → a stop-döntés (13. lépés). Az AI első üzenete kérdés nélkül:

1. **Cél:** a 4. gyakorlat első változatának független ellenőrzése, majd a javított változat újraellenőrzése és a lezárási döntés a saját sávodban (BA: KAPU II; Sales-Account: számok és vállalások).
2. **Út:** A fázis, 13:25-13:45: reviewer-recept és review-csomag · B fázis, 13:45-14:15: R1, az első független ellenőrzés · C fázis, 14:50-15:10: R2, a második ellenőrzés és a stop-döntés. A 14:15-14:35 közötti időben a 4. gyakorlat D fázisa (javítás) fut.
3. **Hová jutunk:** a [reviewer-recept](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/) (Skill vagy brief), a [review-csomag](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/review/), az [R1.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/R1.md), az [R2.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/R2.md) és a [stop-dontes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/stop-dontes.md).
4. **Mit tanulunk:** a független ellenőr szabálya (nem javít, csak a szűk csomagot látja); a három réteg (determinisztikus ellenőrzés, forrás-visszakeresés, tartalmi rubrika); a hat lépés Ellenőrzés és Javítás szakasza; a prompt hét eleme a recept megírásában.
5. **Hová mentek:** a kimeneteket a [Munka/05-Reviewer](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/) mappába mentem, a [Tananyagot](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/) nem módosítom.

Ugyanebben az üzenetben egy sor a módról: „A recept elkészítését a GPT-6 Luna vezeti, a független ellenőrzést a GPT-6.1 Sol végzi. Ajánlott mód: önálló (az A fázis közös). A kulcslépésnél te írod a receptet; én futtatok és ellenőrzök. Elakadtál? Adj tippet · Mutasd a mintát · Írd meg helyettem és futtasd. Módot így váltasz: Váltsunk vezetett / közös módra.” Ha a profilban más mód szerepel, az AI azt használja, és ezt egy sorban közli.

Az AI beolvassa a [profil.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/00-Alapozas/profil.md) fájlt (sáv, mód, önállósági szint, DNS-verzió) és a 4. gyakorlat kimeneteit: az [agent-brief.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/agent-brief.md), a [kriteriumok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/kriteriumok.md) és a [v1](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/v1/) mappa megléte ✅/⚠️ jelöléssel. Ha a `v1` hiányzik, a tréneri tartalék v1 („B-terv”) a bemenet. Ezután azonnal jön az 1. lépés kérdése.

**Sávok:** a „BA:” és „Sales-Account:” jelölésű sorok közül a saját sávodét követed; a jelölés nélküli sor mindkettőre érvényes.

# Lépések

## 1. lépés / 13 – Miért külön ellenőr, és milyen formában (kb. 3 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 1. lépés / 13 – Miért külön ellenőr, és milyen formában. Egy mondatban elmondja, miért nem ellenőrizheti a készítő saját magát: ugyanazt a vakfoltot viszi tovább. Megmutatja a két formát: a Skillt (újrahasználható recept; a szerkezete a [SKILL_minta.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/05%20usecase%20Skill%20keszites/project%20files/SKILL_minta.md) mintáján alapul, vázat a [reviewer-Skill minta](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/05-reviewer-SKILL-minta.md) ad) és a reviewer-briefet (szöveges recept, a [reviewer-brief sablon](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/05-reviewer-brief-sablon.md) szerint).
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): ismertesd a két forma különbségét egy-egy mondatban; ne állítsd, hogy a Skill létrehozása vagy megosztása a munkatérben elérhető: „ha a munkatérben elérhető”; ha a résztvevő nem látja a Skill-lehetőséget, a brief a tartalék, és a módszer azonos.
- Bekérendő paraméter(ek): Egy döntés: „Melyik formában írod meg a receptet? A: Skill (ha a munkatérben elérhető; ajánlott, mert újrahasználható) · B: reviewer-brief (szöveges recept) · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 1. lépésnél tartunk a 13 lépésből (A fázis); most: miért külön ellenőr, és milyen formában; utána: a reviewer-recept megírása; a fázis végén: függetlenségi próba friss beszélgetésben.” A két forma egymás melletti leírását egy-egy sorban, majd a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a sablonok linkje megnyitható; a választás a következő lépés bemenete (✅/⚠️).
- Kimenet (fájl): Nincs külön fájl.
- Miért fontos (az AI elmondja): A recept azért érték, mert nem a te fejedben van: bármikor, bárki és bármelyik beszélgetés ugyanazt az ellenőrzést tudja elvégezni.
- Ha nem elérhető: ha a Skill létrehozása vagy mentése két percen belül nem megy, a reviewer-brief a recept; a kiesett funkció az újrahasználható Skill, a módszer azonos.

## 2. lépés / 13 – A reviewer-recept megírása (kb. 8 perc, A fázis, közös)

- Kulcslépés: igen
- Mit csinál az AI: 2. lépés / 13 – A reviewer-recept megírása. A választott forma vázát adja, és kéri, hogy a recept tartalmát te írd meg a `kriteriumok.md` K-azonosítói alapján. A leírást a hét elem szerint ✅/⚠️ jelöléssel értékeli, legfeljebb egy javítási javaslattal.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a vázat a választott sablonból töltsd elő (szerep, bemenet, kimenet); a receptnek a résztvevő szavai a tartalma; ellenőrizd, hogy szerepel benne: a reviewer nem javít; a bemenet a `review/` csomagra korlátozott; a maker chatjét, naplóját és önértékelését nem kapja; PASS / FAIL / NEM ELLENŐRIZHETŐ; parancs és tényleges eredmény idézése; öt állítás forráshelye; rubrika 1-5; findings szerkezete; R2-ben a javított tételek újraellenőrzése; PASS-szabály; a nem ellenőrizhető elem nem teljesített; a mentés R<n>.md fájlba; a megoldás vagy a hibák listája nem kerül a receptbe.
- Mit futtat az AI? Cél: egy független, újrahasználható ellenőrző recept → Címzett: a GPT-6.1 Sol reviewer friss beszélgetésben → Forrás és határ: a `kriteriumok.md` és a csomagban felsorolt források; a recept a tartalmi hibákat nem tartalmazza → Kimeneti séma: a recept fejezetei (szerep és határ, bemenet, menet, kimenet, súlyosság, PASS-szabály, R2, függetlenség korlátja) → Szabályok: a reviewer nem javít, nem találgat; ami nem ellenőrizhető, azt jelöli → Ellenőrzés: a hét elem mindegyike a receptben megtalálható → Mentés: `Munka/05-Reviewer/reviewer/SKILL.md` vagy `Munka/05-Reviewer/reviewer-brief.md`. Miért így épül fel: a recept korlátozza, mit tehet és mit láthat az ellenőr, ettől lesz független.
- Tipp-létra: 1. Ha valaki, aki sosem látta a munkát, ellenőrzi: mit kell tudnia, mit nem szabad látnia, és mit adjon vissza, hogy te el tudd dönteni, igaz-e? · 2. Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: … · 3. „Írj reviewer-receptet a(z) <KAPU II / ajánlati számok és vállalások> ellenőrzéséhez. Szerep: független reviewer, nem javít. Bemenet: a `review/` mappa; a maker beszélgetését, naplóját és önértékelését nem kapja meg. Kimenet: minden kritérium PASS / FAIL / NEM ELLENŐRIZHETŐ; determinisztikus ellenőrzés parancsa és tényleges eredménye; öt állítás forráshelye; tartalmi rubrika 1-5; findings: ID, súlyosság, hely, bizonyíték, javasolt javítás. R2-ben a javított tételek és az érintett függőségek újraellenőrzése. PASS csak teljes lefedettség, minden K teljesülése és nyitott blocker vagy major hiánya esetén. Mentés: `Munka/05-Reviewer/R<n>.md`, a vizsgált fájlok pontos verziójával.”
- Bekérendő paraméter(ek): A saját recepted (saját munka). Vezetett módban az AI írja.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 2. lépésnél tartunk a 13 lépésből (A fázis); most: a reviewer-recept megírása; utána: a review-csomag összeállítása; a fázis végén: függetlenségi próba friss beszélgetésben.” A recept hét elemes ✅/⚠️ értékelését és a javított változatot. Kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: futó ellenőrzés: a recept minden kötelező eleme megvan; a bemenet-határ és a „nem javít” szabály kimondott.
- Kimenet (fájl): [reviewer](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/reviewer/SKILL.md) vagy [reviewer-brief.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/reviewer-brief.md).
- Miért fontos (az AI elmondja): A független ellenőrzés attól független, hogy a recept szűkre szabja, mit lát és mit tehet; egy jó recept ugyanazt az ellenőrzést megismételhetővé teszi.

## 3. lépés / 13 – A review-csomag összeállítása (kb. 5 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 3. lépés / 13 – A review-csomag összeállítása. A [review-csomag sablon](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/05-review-csomag-sablon.md) szabálya szerint másolatot készít a `Munka/05-Reviewer/review/` mappába: a v1 kötelező kimenetei, a `kriteriumok.md`, a kriteriumok forráslistájában szereplő nyers források és a rögzített DNS-modul. Nem kerül bele a brief, a terv, a napló, a maker saját mérési eredményei és minden megoldókulcs. Determinisztikus scripttel ellenőrzi a csomagot, és csomagjegyzéket ír.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): másolj, ne mozgass; az eredeti `Munka/04-Agent` fájlokat ne módosítsd; script: minden kötelező elem megvan, kizárt fájl nincs, a forráslistán kívüli fájl nincs; a csomagjegyzékbe vedd fel a verziót és, ha a környezet számolja, a SHA256 ellenőrző összeget.
- Mit futtat az AI? Cél: a reviewer egyetlen, szűk bemenete → Címzett: a reviewer → Forrás és határ: a `Munka/04-Agent` és a `Tananyag` fájljai, olvasásra → Kimeneti séma: a `review/` mappa és a `csomag-jegyzek.md` → Szabályok: a kizárt fájlok listája a sablon szerint; semmi nem módosul az eredetiben → Ellenőrzés: a script kimenete, parancs és tényleges eredmény idézve → Mentés: `Munka/05-Reviewer/review/`, `Munka/05-Reviewer/csomag-ellenorzes.txt`. Miért így épül fel: a függetlenség a bemeneten múlik; amit a reviewer nem lát, azt nem tudja átvenni.
- Bekérendő paraméter(ek): Egy döntés: „A csomag tartalma: A: jóváhagyom (ajánlott) · B: egy fájlt kivennék vagy hozzáadnék: írd le, melyiket és miért · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 3. lépésnél tartunk a 13 lépésből (A fázis); most: a review-csomag összeállítása; utána: függetlenségi próba friss beszélgetésben; a fázis végén: függetlenségi próba friss beszélgetésben.” A csomagjegyzéket („bemegy / nem megy be” oszloppal), a script eredményét és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a script kimenete idézve; a kizárt fájlok nincsenek a csomagban (✅/⚠️).
- Kimenet (fájl): [review](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/review/) mappa, [csomag-jegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/review/csomag-jegyzek.md).
- Miért fontos (az AI elmondja): Az ellenőr annyit ér, amennyi igazán független bemenetet kap: ha benne van a készítő magyarázata, az ellenőr a magyarázatot ellenőrzi, nem a munkát.
- Ha nem elérhető: ha nem fut kód, a csomag-ellenőrzés kézi jegyzékkel történik, soronként „bent / nincs bent” jelöléssel; a kiesett funkció a kódos ellenőrzés, a módszer azonos.

## 4. lépés / 13 – Függetlenségi próba friss beszélgetésben (kb. 4 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 4. lépés / 13 – Függetlenségi próba friss beszélgetésben. Elmondja, hogyan próbálod ki a reviewert: új Work-beszélgetés, alapból külön review-projektben, GPT-6.1 Sol modellel; mielőtt ráküldenéd a munkát, két kérdést teszel fel neki: mit lát, és mit tud bármilyen korábbi beszélgetésből vagy projektmemóriából. A válasz egyezzen a csomagjegyzékkel.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a résztvevő beszélgetésébe nem látsz bele, a választ ő hozza vissza; a függetlenség korlátját akkor is írd le egy sorban, ha a próba sikeres (ugyanaz a fiók); ha a reviewer többet lát a csomagnál, mondd ki, és javasolj páros emberi reviewt.
- Bekérendő paraméter(ek): Egy döntés: „A próba eredménye: A: tiszta, a lista egyezik a csomagjegyzékkel · B: a reviewer többet lát: a korlátot felírjuk, és páros emberi review egészíti ki · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 4. lépésnél tartunk a 13 lépésből (A fázis); most: függetlenségi próba friss beszélgetésben; utána: az R1 indítása; a fázis végén: függetlenségi próba friss beszélgetésben.” A két próbakérdést és a csomagjegyzéket, majd a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a reviewer által felsorolt fájlok egyeznek a csomagjegyzékkel (✅/⚠️); a függetlenség korlátja egy sorban rögzítve.
- Kimenet (fájl): a [csomag-jegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/review/csomag-jegyzek.md) „Függetlenség korlátja” sora.
- Miért fontos (az AI elmondja): A „friss beszélgetés” nem bűvszó: ugyanaz a fiók és a projektmemória korlát lehet, ezért kimondjuk, mit látott az ellenőr.
- Ha nem elérhető: ha nem érhető el külön friss beszélgetés vagy review-projekt, a pár emberi review egészíti ki a gépit, és a korlát a jelentés fejlécébe kerül; a kiesett funkció az izolált gépi ellenőr.

## 5. lépés / 13 – Az R1 indítása (kb. 2 perc, B fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 5. lépés / 13 – Az R1 indítása. „Folytassuk az 5. gyakorlatot” után közli: „5. gyakorlat, B fázis: R1.” Ellenőrzi, hogy a csomag, a kritériumok és a recept megvan. Elmondja az indítás módját: friss Work-beszélgetés, a review-projektben, GPT-6.1 Sol, az első mondat: „RONDO 05 reviewer R1.”
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): futtasd újra a csomag-ellenőrző scriptet, és csak sikeres futás után engedd az indítást; a résztvevő indítja a reviewert; a külső körök naplójába (`Munka/05-Reviewer/kulso-korok-naplo.md`, a `04-naplo-sablon.md` sorszerkezetével) írj kezdősort: külső kör, R1.
- Bekérendő paraméter(ek): Nincs. Az indító mondat a „RONDO 05 reviewer R1”.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 5. lépésnél tartunk a 13 lépésből (B fázis); most: az R1 indítása; utána: a reviewer dolgozik; a fázis végén: mit mért a gép, mit a rubrika.” Az indító mondatot, a csomagjegyzék utolsó ellenőrzését, majd egy mondatot arról, mi fog történni.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a csomag-ellenőrzés újrafutott és sikeres; a recept és a kritériumok megvannak (✅/⚠️).
- Kimenet (fájl): a [kulso-korok-naplo.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/kulso-korok-naplo.md) R1 kezdősora.
- Miért fontos (az AI elmondja): Az indító mondat rövid, mert a munka a receptben és a csomagban van; a reviewer annyit tud, amennyit ott talál.

## 6. lépés / 13 – A reviewer dolgozik (kb. 10 perc, B fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 6. lépés / 13 – A reviewer dolgozik. A „RONDO 05 reviewer R1” beszélgetésben a reviewer végigmegy a recepten, és az eredményt a `Munka/05-Reviewer/R1.md` fájlba menti. Ezalatt te felkészülsz a saját visszakeresésedre: kijelölöd, a reviewer által idézett öt forráshely közül melyik kettőt fogod a következő lépésben saját kezűleg megkeresni. Az AI ezalatt a rubrika kérdéseit és a gépi mérés-értelmezés három szabályát ismerteti.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a reviewer munkájába nem avatkozol be; ismertesd a három réteget (determinisztikus ellenőrzés, forrás-visszakeresés, rubrika) egy-egy mondatban; a gépi eredmény támogatás, nem bizonyítja a tartalmi helyességet; a rubrika nem váltja ki a forrást; az R1.md elkészültéig a megállapításokra nem reagálsz.
- Mit futtat az AI? Cél: a három réteg előzetes magyarázata a futás alatt → Címzett: te → Forrás és határ: a `kriteriumok.md` K-sorai → Kimeneti séma: három rövid mondat → Szabályok: a reviewer eredményére még nem reagál → Ellenőrzés: nincs → Mentés: nincs. Miért így épül fel: a várakozási idő a megértésre szolgál, a döntés az eredmény után jön.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 6. lépésnél tartunk a 13 lépésből (B fázis); most: a reviewer dolgozik; utána: az öt kijelölt állítás visszakeresése; a fázis végén: mit mért a gép, mit a rubrika.” A három réteg rövid leírását. Kérdés nincs; a futás végén megjelenik az R1.md.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: az `R1.md` létrejött és tartalmazza a vizsgált fájlok pontos verzióját (✅/⚠️).
- Kimenet (fájl): [R1.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/R1.md).
- Miért fontos (az AI elmondja): A reviewer jelentése is csak akkor érték, ha tudod, mit mér a gép, mit a forrás-visszakeresés és mit a rubrika.
- Ha nem elérhető: ha a reviewer futás nem indul két percen belül, a pár emberi review a recept és a csomag alapján készít R1-et kézzel; a kiesett funkció a gépi független ellenőr, a módszer azonos.

## 7. lépés / 13 – Az öt kijelölt állítás visszakeresése (kb. 8 perc, B fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 7. lépés / 13 – Az öt kijelölt állítás visszakeresése. Az `R1.md` öt állításából a nyers forrásban megkeresi az idézett helyeket, és mindegyiknél egymás mellé teszi a reviewer állítását és a forrást. Te megítéled, hogy egyezik-e. Kettőt közülük a 6. lépésben kijelöltek közül magad is megnyitsz a link alapján.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): minden állításnál mutasd a reviewer idézetét és a forrást linkkel és sorszámmal (✅/⚠️); ne dönts a résztvevő helyett; ha egy hely nem található, mondd ki; az eredményt írd a `Munka/05-Reviewer/r1_visszakeres.md` fájlba.
- Mit futtat az AI? Cél: a reviewer állításainak független visszakeresése → Címzett: te → Forrás és határ: az `R1.md` és a nyers források → Kimeneti séma: állítás, reviewer-idézet, forrás, egyezés → Szabályok: nem ítél helyetted; hiány „Nincs megadva” → Ellenőrzés: minden hely linkkel megnyitható → Mentés: `Munka/05-Reviewer/r1_visszakeres.md`. Miért így épül fel: a reviewer jelentése is egy állítás, amelyet a forrás igazol vagy cáfol.
- Bekérendő paraméter(ek): Egy döntés: „Az öt állítás: A: mind egyezik a forrással · B: eltérést látok: írd le, melyiknél · C: egynél nem található a hely · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 7. lépésnél tartunk a 13 lépésből (B fázis); most: az öt kijelölt állítás visszakeresése; utána: az R1 megállapításainak osztályozása; a fázis végén: mit mért a gép, mit a rubrika.” Az öt állítás és forráshely párját, majd a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: az öt hely mindegyike linkkel megnyitható (✅/⚠️).
- Kimenet (fájl): [r1_visszakeres.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/r1_visszakeres.md).
- Miért fontos (az AI elmondja): A forrás-visszakeresés az, ami miatt nem a reviewer szavában bízunk, hanem a bizonyítékban.

## 8. lépés / 13 – Az R1 megállapításainak osztályozása (kb. 6 perc, B fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 8. lépés / 13 – Az R1 megállapításainak osztályozása. Az `R1.md` findings részét rendezi súlyosság szerint (blocker, major, minor), K-azonosítóval összekötve. Megmutatja, mely K-k teljesültek, melyek nem, és melyek nem ellenőrizhetők. Te döntesz, hogy mi kerüljön a 4. gyakorlat D fázisának javítási körébe.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): ne minősítsd a megállapításokat fontosnak vagy nem fontosnak; csak rendezd és kapcsold K-hoz; a nem ellenőrizhető elem nem teljesített; a döntésedet írd az `R1.md` mellé egy rövid „Döntés” jegyzetbe (`Munka/05-Reviewer/r1_dontes.md`); a javítási kör kijelölését a 4. gyakorlat 16. lépése végzi.
- Mit futtat az AI? Cél: az R1 megállapításainak rendezése és a döntés rögzítése → Címzett: te és a 4. gyakorlat D fázisa → Forrás és határ: az `R1.md`, a `kriteriumok.md` → Kimeneti séma: findings tábla súlyosság és K szerint; rövid döntési jegyzet → Szabályok: nem dönt helyetted → Ellenőrzés: minden finding szerepel a rendezett listában → Mentés: `Munka/05-Reviewer/r1_dontes.md`. Miért így épül fel: a rendezett lista mutatja meg, hol a legnagyobb a különbség a cél és a valóság között.
- Bekérendő paraméter(ek): Egy döntés: „A megállapításokat: A: elfogadom, javításra viszem a blockert és a majort (ajánlott) · B: egyet vitatok: írd le, melyiket · C: több információ kell · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 8. lépésnél tartunk a 13 lépésből (B fázis); most: az R1 megállapításainak osztályozása; utána: mit mért a gép, mit a rubrika; a fázis végén: mit mért a gép, mit a rubrika.” A rendezett listát és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a findings száma egyezik az `R1.md`-vel; minden finding K-hoz kötött (✅/⚠️).
- Kimenet (fájl): [r1_dontes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/r1_dontes.md).
- Miért fontos (az AI elmondja): A jó ellenőrzés után sem dől el automatikusan, mit javítunk: ez döntés, és a döntés a tiéd.

## 9. lépés / 13 – Mit mért a gép, mit a rubrika (kb. 4 perc, B fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 9. lépés / 13 – Mit mért a gép, mit a rubrika. Az `R1.md` determinisztikus ellenőrzéseit és tartalmi rubrikáját egymás mellé teszi. Megmutatja, hol mondott a gép PASS-t, miközben a rubrika alacsony volt, és fordítva. BA: például a szerkezeti ellenőrzés és az értékkészlet-lefedettség a gépi; a használhatóság és az egyértelműség a rubrikás. Sales-Account: az összegek és a kedvezmény a gépi; az ügyfélbiztonság és a döntéshozói használhatóság a rubrikás.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): készíts egy kétoszlopos összevetést; ne magyarázd el helyette, mit jelent a különbség; kérdezd meg, melyik réteg mit bizonyít; a gépi ellenőrzés nem bizonyítja a szemantikai helyességet.
- Mit futtat az AI? Cél: a három réteg munkamegosztásának megértése a saját eredményen → Címzett: te → Forrás és határ: az `R1.md` → Kimeneti séma: kétoszlopos összevetés → Szabályok: nem ítél → Ellenőrzés: nincs → Mentés: nincs. Miért így épül fel: aki érti, mit bizonyít a gép és mit nem, az nem hagyatkozik egyetlen rétegre.
- Bekérendő paraméter(ek): Egy döntés: „Szükséges-e másik vélemény a nem ellenőrizhető vagy vitatott tételekhez? A: nem, az R2 megoldja · B: igen, a párom ránéz egy tételre (páros emberi review) · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 9. lépésnél tartunk a 13 lépésből (B fázis); most: mit mért a gép, mit a rubrika; utána: az R2 csomagjának frissítése; a fázis végén: mit mért a gép, mit a rubrika.” Az összevetést és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: az összevetés soraihoz tartozik az `R1.md` hely (✅/⚠️).
- Kimenet (fájl): Nincs külön fájl.
- Miért fontos (az AI elmondja): Az eredmény azért jó és validált, mert három réteg ellenőrzi egymást: a kód a szerkezetet, a forrás a tényeket, a rubrika a használhatóságot méri.

*Szünet: 14:15-14:35 a 4. gyakorlat D fázisa (javítás), majd 14:35-14:50 szünet. Az R2 14:50-kor indul.*

## 10. lépés / 13 – Az R2 csomagjának frissítése (kb. 3 perc, C fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 10. lépés / 13 – Az R2 csomagjának frissítése. „Folytassuk az 5. gyakorlatot” után közli: „5. gyakorlat, C fázis: R2.” A review-csomagba másolja a `v2/` kötelező kimeneteit és az `R1.md` jelentést, a korábbi állapotot a csomagjegyzékben megőrzi. Újra futtatja a csomag-ellenőrző scriptet. A kizárt fájlok R2-ben is kizártak. Ellenőrzi, hogy a 4. gyakorlat 19. lépésének [v1_v2_osszevetes.txt](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/ellenorzes/v1_v2_osszevetes.txt) fájlja megvan-e (✅/⚠️). Ha nincs (a javítás a szünetbe nyúlt), most futtatja le az újramérést a `v2/` fájljain a `kriteriumok.md` szerint (kb. 2 perc), és a v1-v2 összevetést menti; a v2 továbbvitelének döntése itt születik meg (A: mehet az R2-re · B: tartalék v2, jelölve · más: írd le).
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): ellenőrizd, hogy a `v2/` létezik (ha nem, a tréneri tartalék v2 „B-terv” jelöléssel); másolj, ne mozgass; a csomagjegyzékben új verziósor; a script futtatása idézve.
- Mit futtat az AI? Cél: az R2 bemeneti csomagja → Címzett: a reviewer → Forrás és határ: a `v2/`, az `R1.md`, a korábbi csomag → Kimeneti séma: frissített `review/` és csomagjegyzék → Szabályok: a kizárt fájlok kizártak maradnak → Ellenőrzés: script, parancs és tényleges eredmény → Mentés: `Munka/05-Reviewer/review/`. Miért így épül fel: az R2 a javított változatot és az R1-et is látja, hogy a javított tételeket ellenőrizhesse.
- Bekérendő paraméter(ek): Egy döntés: „Az R2 csomagja: A: jóváhagyom (ajánlott) · B: korrekció: írd le · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 10. lépésnél tartunk a 13 lépésből (C fázis); most: az R2 csomagjának frissítése; utána: az R2 indítása és futása; a fázis végén: stop-döntés.” A frissített csomagjegyzéket és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a script kimenete idézve; a `v2/` fájljai és az `R1.md` bent vannak, a kizártak nincsenek; a v1-v2 összevetés megvan, vagy az újramérés parancsa és tényleges eredménye idézett (✅/⚠️).
- Kimenet (fájl): a frissített [csomag-jegyzek.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/review/csomag-jegyzek.md).
- Miért fontos (az AI elmondja): Az R2 csak akkor második vélemény, ha ugyanolyan szűk és tiszta a bemenete, mint az R1-é.
- Ha nem elérhető: ha nem fut kód, a csomagot kézi jegyzékkel ellenőrzöd; a kiesett funkció a kódos ellenőrzés.

## 11. lépés / 13 – Az R2 indítása és futása (kb. 8 perc, C fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 11. lépés / 13 – Az R2 indítása és futása. Elmondja az indítás módját: friss Work-beszélgetés a review-projektben, GPT-6.1 Sol, az első mondat „RONDO 05 reviewer R2.” A reviewer a receptet, a csomagot és az R1-et olvassa, ellenőrzi a javított tételeket és az érintett függőségeket, és az eredményt az `R2.md` fájlba menti. Ezalatt az AI a következő lépés kérdéseit készíti elő.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a külső körök naplójába (`Munka/05-Reviewer/kulso-korok-naplo.md`) írj kezdősort: külső kör, R2; ne avatkozz a reviewer munkájába; a futás végén ellenőrizd, hogy az `R2.md` megvan, és tartalmazza a vizsgált fájlok pontos verzióját.
- Mit futtat az AI? Cél: a javított változat független második ellenőrzése → Címzett: te és a stop-döntés → Forrás és határ: a csomag, a recept, az `R1.md`, a `v2/` → Kimeneti séma: az [R-jelentés sablon](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/05-R-jelentes-sablon.md) szerint, külön szakasszal az R1 tételeinek újraellenőrzéséről → Szabályok: a reviewer nem javít; a nem ellenőrizhető elem nem teljesített → Ellenőrzés: a parancsok és eredmények idézve → Mentés: `Munka/05-Reviewer/R2.md`. Miért így épül fel: a második kör azt mutatja meg, hogy a javítás tényleg javított-e, és nem rontott-e el mást.
- Bekérendő paraméter(ek): Nincs. Az indító mondat a „RONDO 05 reviewer R2”.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 11. lépésnél tartunk a 13 lépésből (C fázis); most: az R2 indítása és futása; utána: javított tételek és saját visszakeresés; a fázis végén: stop-döntés.” Az indító mondatot, majd a futás végén az `R2.md` fejlécét és verdiktjét.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: az `R2.md` létrejött; a vizsgált verziók fel vannak sorolva (✅/⚠️).
- Kimenet (fájl): [R2.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/R2.md).
- Miért fontos (az AI elmondja): A javítás csak akkor igazolt, ha a független ellenőr látja is, nem elég, hogy a készítő szerint megtörtént.
- Ha nem elérhető: ha a reviewer futás nem indul két percen belül, a pár emberi review készíti az R2-t a recept és a csomag alapján; a tréneri tartalék R2 „B-terv” jelöléssel áll rendelkezésre.

## 12. lépés / 13 – Javított tételek és saját visszakeresés (kb. 5 perc, C fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 12. lépés / 13 – Javított tételek és saját visszakeresés. Az R1 javított tételeit az `R2.md` újraellenőrzési szakaszából egyenként összeveti a `v2/` fájlokkal, és megmutatja, mely K változott. Az öt kijelölt állításból kettőt magad keresel vissza a forrásban; az AI csak a linkeket adja.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): készíts egy táblát: R1 finding, javítva-e az R2 szerint, a `v2/` helye; romlást vagy új hibát is mutass; a két saját visszakeresésnél csak linket adj, ne olvasd fel a választ; a döntést a résztvevő hozza.
- Mit futtat az AI? Cél: az R2 és a javítás ellenőrzése → Címzett: te és a stop-döntés → Forrás és határ: az `R2.md`, a `v2/`, a nyers források → Kimeneti séma: finding-tábla, két saját visszakeresés eredménye → Szabályok: nem dönt helyetted → Ellenőrzés: a hely linkkel megnyitható → Mentés: `Munka/05-Reviewer/r2_visszakeres.md`. Miért így épül fel: a javítás ellenőrzése a legkockázatosabb pont: könnyű elhinni, hogy ami javított, az jó.
- Bekérendő paraméter(ek): Egy döntés: „Az R2 eredményét: A: elfogadom · B: egy tételnél nem értek egyet: írd le, melyiknél · C: egynél nem dönthető el a forrásból · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 12. lépésnél tartunk a 13 lépésből (C fázis); most: javított tételek és saját visszakeresés; utána: stop-döntés; a fázis végén: stop-döntés.” A finding-táblát, a saját két visszakeresés linkjét, és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: minden R1 finding sorában szerepel az R2 megállapítása és a hely (✅/⚠️).
- Kimenet (fájl): [r2_visszakeres.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/r2_visszakeres.md).
- Miért fontos (az AI elmondja): A saját kezű visszakeresés az, ami miatt a végső döntés a tiéd, nem a reviewer szavára támaszkodik.

## 13. lépés / 13 – Stop-döntés (kb. 4 perc, C fázis, BA és Sales-Account)

- Kulcslépés: nem
- Mit csinál az AI: 13. lépés / 13 – Stop-döntés. A [stop-döntés sablon](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/05-stop-dontes-sablon.md) szerint összefoglalja a köröket (alapmérés, R1, v2, R2), a K-teljesülést, a rubrika átlagát és a nyitott blocker/major számát, és mutatja, melyik stop-szabály teljesül. Itt ér véget a „repeat until good”: a körkeret legfeljebb 2 belső kör és 2 review (R1, R2), harmadik review nem indul. Te döntesz: lezárt, feltételes vagy blokkolt.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a `Munka/04-Agent/naplo.md` (belső körök), a `kulso-korok-naplo.md` (külső körök) és az `R1.md`/`R2.md` fájlokból töltsd ki a táblát; a négy stop-szabályt egyenként értékeld; feltételes döntésnél a nyitott tételeknek legyen felelőse és határideje vagy „Nincs megadva”; a „kész” nem küldési, publikálási vagy átadási engedély; BA-sávon lezárt vagy feltételes döntésnél másold a végleges FDD-egységet a `Munka/04-Agent/fdd/` mappába, verziónévvel; a naplóba írj záró sort.
- Mit futtat az AI? Cél: a lezárási döntés rögzítése → Címzett: te és a későbbi felhasználók → Forrás és határ: a napló, az `R1.md`, az `R2.md`, a `kriteriumok.md` → Kimeneti séma: a stop-döntés sablon táblái → Szabályok: a hiányzó üzleti döntést nem pótolja; a nyitott tétel nem eltüntethető → Ellenőrzés: minden szám a naplóból és a jelentésekből idézett → Mentés: `Munka/05-Reviewer/stop-dontes.md`, BA: `Munka/04-Agent/fdd/`. Miért így épül fel: a ciklus csak akkor ér véget, ha kimondjuk, miért; ez különbözteti meg a módszert a végtelen javítgatástól.
- Bekérendő paraméter(ek): Egy döntés: „A döntés: A: lezárt (minden K teljesült, nincs nyitott blocker vagy major) · B: feltételes (a nyitott tételek tételesen felsorolva, felelőssel) · C: blokkolt (a folytatáshoz döntés vagy jogosultság hiányzik) · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 13. lépésnél tartunk a 13 lépésből (C fázis); most: stop-döntés; utána: a gyakorlat zárása; a fázis végén: stop-döntés.” A kitöltött sablont és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a számok egyeznek a naplóval és a jelentésekkel; a mentett döntés idézett (✅/⚠️).
- Kimenet (fájl): [stop-dontes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/stop-dontes.md).
- Miért fontos (az AI elmondja): A jó eredmény nem végtelen javítás, hanem kimondott, bizonyítékkal alátámasztott lezárás: ami nyitva maradt, az látszik.

# Maker/reviewer mód

Ez a fejezet a „RONDO 05 reviewer R1” és „RONDO 05 reviewer R2” indítók viselkedését írja le. Mindkettő friss Work-beszélgetésben indul, alapból külön review-projektben; ezek nem tutor-indítók. Modell: GPT-6.1 Sol. A tutor nyitóüzenete, az A/B/C-kérdezés és a döntéslimit szünetel.

- **Szerep:** független reviewer, nem javít, nem ír át, nem egészít ki.
- **Mit olvas:** a receptet (Skill vagy brief) és a `Munka/05-Reviewer/review/` csomagot: a kimenetfájlokat, a `kriteriumok.md` fájlt, a felsorolt nyers forrásokat és a rögzített DNS-verziót; R2-ben az R1 jelentést és a javított `v2` kimenetet is.
- **Mit nem kap meg:** a maker beszélgetését, naplóját, önértékelését és bármilyen megoldókulcsot. Ha mégis eléri, kimondja, és nem használja.
- **Menet:** minden kritérium PASS / FAIL / NEM ELLENŐRIZHETŐ. A determinisztikus ellenőrzésnél idézi a parancsot és a tényleges eredményt. Öt kijelölt állításnál megadja a forráshelyet. Tartalmi rubrika 1-5. Findings: azonosító, súlyosság, hely, bizonyíték, javasolt javítás. R2-ben a javított tételeket és az érintett függőségeket újraellenőrzi.
- **PASS-szabály:** PASS csak teljes kötelező lefedettség, minden K teljesülése és nyitott blocker/major hiánya esetén; a nem ellenőrizhető elem nem teljesített.
- **Mentés:** `Munka/05-Reviewer/R<n>.md`, a vizsgált fájlok pontos verziójával. A függetlenség korlátját (ugyanaz a fiók, projektmemória) egy sorban rögzíti.
- **Stop:** a reviewer nem dönt a lezárásról; a stop-döntés a résztvevőé (13. lépés).

# Elakadás

- **A Sol modell nem látszik a választóban:** az AI jelzi, hogy a trénertől kérj helyettesítést; nem találgat és nem választ másikat helyetted.
- **Nincs Skill-lehetőség a munkatérben:** a reviewer-brief a recept, a módszer azonos; a kiesett funkció az újrahasználható Skill.
- **A reviewer többet lát a csomagnál (memória, korábbi beszélgetés):** az AI kimondja, a korlátot felírja a jelentés fejlécébe, és páros emberi review egészíti ki.
- **Nem fut kód:** a determinisztikus ellenőrzés helyett kézi vagy táblázatkezelős újraszámolás készül; a jelentés kimondja, hogy a kódos cél nem teljesült. Sales-Account: a képlet-újraszámolás sikerét külön sorban rögzíted, nem a fájl létezéséből következtetsz.
- **Az R1 nem készült el 14:15-ig:** az AI a tréneri tartalék R1-et jelöli („B-terv”), és a D fázis ezzel indul.
- **Hiányzik a `v2/` az R2-höz:** az AI a tréneri tartalék v2-t jelöli; a rögzítőlapon „B-tervvel”.
- **A reviewer jelentése elképzelhetően téves:** az AI a forrásban visszakeresteti; a vitatott tétel a döntésed, nem a reviewer szavaié.
- **Valós Oriana-adat vagy jelszó került a beszélgetésbe:** az AI nem menti és nem használja; egy mondatban jelzi, hogy a valós munka a saját fiókban marad.
- **Időhiány:** a harmadik review nem indul; a stop-döntés a meglévő két körre épül, a nyitott tételek feltételes döntésben szerepelnek.

# Ellenőrzés a végén

Az AI önellenőrző listája; ✅/⚠️ jelöléssel, linkekkel közli, ⚠️ esetén egy mondatban írja le, mit javít.

- A recept megvan ([reviewer](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/reviewer/SKILL.md) vagy [reviewer-brief.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/reviewer-brief.md)), és kimondja: a reviewer nem javít, a bemenet a `review/` csomag.
- A [review-csomag](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/review/) jegyzéke megvan, a kizárt fájlok nincsenek benne, a csomag-ellenőrzés parancsa és eredménye rögzített.
- Az [R1.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/R1.md) és az [R2.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/R2.md) a sablon szerinti, a vizsgált fájlok pontos verziójával és a függetlenség korlátjával.
- Minden kritérium PASS / FAIL / NEM ELLENŐRIZHETŐ; a determinisztikus ellenőrzés parancsa és tényleges eredménye idézett; az öt állítás forráshelye megvan; a rubrika 1-5.
- A stop-döntés ([stop-dontes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/stop-dontes.md)) megnevezi a teljesült stop-szabályt; a körkeret (2 belső, 2 külső) betartva; harmadik review nem indult.
- BA: lezárt vagy feltételes döntésnél a végleges FDD-egység másolata az `fdd/` mappában van.
- A fiktív jelölés megvan, a hiány „Nincs megadva”, a javaslat nem döntés, minden lényeges állításnál van forráshely, a Tananyag érintetlen.
- Ha tartalék vagy páros emberi review szerepelt, az jelölve van („B-terv”), és nem gépi reviewerként szerepel.

# Zárás – mit tanultunk

Az AI összefoglal 5-8 sorban: mi készült (linkekkel: a recept, a csomag, az R1, az R2, a stop-döntés); a hat lépés hol jelent meg (az Ellenőrzés a három rétegben, a Javítás az R1 után a 4. gyakorlatban, a Rögzítés a receptben és a stop-döntésben); melyik proaktív elem épült be (a Skill mint újrahasználható recept, ha elérhető; a friss beszélgetés mint független kontextus; a korlátozott kör és a kimondott stop); és mi vihető át a saját munkára. Utána egyszer felteszi a „Vidd haza” kérdést: „Melyik saját feladatodon próbálnád ki ugyanezt? A: a profilodban rögzített feladat: <feladat> · B: egy másik visszatérő feladat · C: más: írd le.”

# Vidd haza

- **BA:** egy FDD-egység vagy más fejlesztés előtti dokumentum független ellenőrzése saját kritériumlistával és szűk csomaggal, két körben; a reviewer-recept újrahasználható a következő egységhez.
- **Sales-Account:** egy ajánlat vagy megújítás számainak és vállalásainak független ellenőrzése: újraszámolás pénznemenként külön, vállalás és kérés elkülönítése, öt kijelölt tétel forráshelye.
- **Közös:** minden olyan munkánál, amelynél a készítő nem ellenőrizheti önmagát: friss beszélgetés, szűk csomag, három réteg (kód, forrás, rubrika) és kimondott stop-feltétel.

Résztvevői döntések száma ebben a gyakorlatban: A fázis 3 (a recept formája, a csomag tartalma, a függetlenségi próba eredménye), B fázis 3 (az öt állítás megítélése, az R1 megállapításainak kezelése, másik vélemény szükségessége), C fázis 3 (az R2 csomagja, az R2 elfogadása, a stop-döntés); összesen 9. A saját recept és a tipp-létra kérései nem döntések; reviewer módban nincs limit.

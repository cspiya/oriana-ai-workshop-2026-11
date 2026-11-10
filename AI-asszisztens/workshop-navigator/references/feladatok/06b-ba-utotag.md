---
id: "06b"
cim: "BA-utótag: keresztreferencia-skill, képernyőterv, dokumentáció kódból"
blokk: 6
ido: "15:35-16:05"
vezeti: "Piya Csaba; körbejár: Kemény Krisztián"
sav: "BA"
munkamappa: "Munka/06b-BA-utotag"
modell: "GPT-6 Luna"
ajanlott_mod: kozos
fazisok: ["A: 15:35-15:43 önállóan szállítható dokumentum", "B: 15:43-15:55 képernyőterv", "C: 15:55-16:05 dokumentáció kódból"]
inditok: ["Kezdjük a 6b gyakorlatot", "Folytassuk a 6b gyakorlatot"]
proaktiv_elem: ["Skill meghívása determinisztikus számlálóval", "Work fájlkészítés (HTML-drótváz)", "helyi mappából kód olvasása (Work Local; repó- vagy MCP-elérés: ha a munkatérben elérhető)"]
eredmeny: ["E10"]
forrasok:
  - "Munka/04-Agent/v2/ vagy fdd/ (a saját FDD-egység; ha nincs: a mellékletek tartalék anyaga)"
  - "Tananyag/04 usecase RONDO/kod-repo/rondo-jovahagyas/ (szabalyok.py, README.md, docs/felhasznaloi_kezikonyv.md)"
  - "Tananyag/04 usecase RONDO/forrasok/BA/fdd-sema/FDD_sema_FIKTIV.md"
  - "Munka/00-Alapozas/profil.md"
kimenetek:
  - "Munka/06b-BA-utotag/ellenorzes.md"
  - "Munka/06b-BA-utotag/drotvaz/"
  - "Munka/06b-BA-utotag/dokumentacio/"
mellekletek:
  - "Feladatok/mellekletek/06b-onallo-dokumentum-SKILL.md"
  - "Feladatok/mellekletek/06b-kepernyoterv-feladat.md"
  - "Feladatok/mellekletek/06b-ellenorzes-sablon.md"
glosszarium: ["keresztreferencia", "drótváz", "Skill", "FDD", "Work Local", "MCP", "determinisztikus ellenőrzés"]
fopproban_ellenorizendo: nincs
b_terv: "Nincs Skill-betöltés: a Skill-fájl szövegét a Work kérésként követi, a számlálás kézi; nincs kódfuttatás: kézi számlálás, a kódos cél nem teljesültként jelölve; nincs helyi mappa- vagy repó-hozzáférés: ZIP vagy feltöltött három fájl, utolsó tartalék a tréneri felvétel"
---

# Cél

Az FDD-egység (funkcionális tervdokumentum) elkészülte után három rövid, gyakorlati feladatot végzel a BA-munkához (BA: üzleti elemző): egy dokumentumot önállóan szállíthatóvá teszel, vagyis megszünteted benne a feloldatlan keresztreferenciákat; egy FDD-fejezethez általános, offline HTML-drótvázat készítesz; és egy kis kódmintából felhasználói dokumentációt írsz, illetve egy elavult leírást frissítesz. Azt tanulod meg, hogyan lesz egy ismétlődő BA-feladat receptből (Skill), számlálóval ellenőrizhető, és hogyan marad a jelentés és a forrás között a visszakereshető kapcsolat. A drótváz és a dokumentáció közös kipróbálás, nem önálló tervezési vagy fejlesztési munka.

# Indítás

A résztvevő az `Oriana AI-workshop` projekt Work-beszélgetésében ezt írja: „Kezdjük a 6b gyakorlatot.” Ezután a fázisok között: „Folytassuk a 6b gyakorlatot.” Az AI ilyenkor a `Munka/06b-BA-utotag` fájljaiból állapítja meg, hol tart, és egy sorban közli, például: „6b gyakorlat, B fázis: képernyőterv.” Fázisfelismerés: nincs `ellenorzes.md` → A; van `ellenorzes.md`, de nincs fájl a `drotvaz/` mappában → B; van drótváz, de nincs fájl a `dokumentacio/` mappában → C. Az AI első üzenete kérdés nélkül:

1. **Cél:** három BA-utótag-feladat: önállóan szállítható dokumentum, képernyőterv-drótváz, dokumentáció kódból; mindegyiknél a mérhető ellenőrzés és a forrás-visszakeresés a hangsúly.
2. **Út:** A fázis, 15:35-15:43: demó, közös számlálás és friss chates értelmezési próba, majd 3 perc önálló bekezdésjavítás · B fázis, 15:43-15:55: képernyőterv, 4 perc demó, 6 perc közös mezőjavítás, 2 perc mentés · C fázis, 15:55-16:05: dokumentáció kódból, 4 perc két minta, 4 perc közös visszakeresés, 2 perc mentés.
3. **Hová jutunk:** az [ellenorzes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/ellenorzes.md), a [drotvaz](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/drotvaz/) mappa és a [dokumentacio](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/dokumentacio/) mappa.
4. **Mit tanulunk:** a hat lépés Ellenőrzés és Rögzítés szakasza gyors feladatokon; a Skill mint újrahasználható recept, determinisztikus előtte/utána számlálóval; a prompt hét eleme a drótváz kérésében.
5. **Hová mentek:** a kimeneteket a [Munka/06b-BA-utotag](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/) mappába mentem, a [Tananyagot](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/) nem módosítom. Minden minta fiktív.

Ugyanebben az üzenetben egy sor a módról: „Ajánlott mód: közös (az A fázis 3 perces bekezdésjavítása önálló). A kulcslépéseknél te írod a kérést, én a hét elem szerint ellenőrzöm és futtatok. Elakadtál? Adj tippet · Mutasd a mintát · Írd meg helyettem és futtasd. Módot így váltasz: Váltsunk vezetett / önálló módra.” Ha a profilban más mód szerepel, az AI azt használja, és ezt egy sorban közli (a `kozos` az időkeret miatt a felső határ).

Az AI beolvassa a [profil.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/00-Alapozas/profil.md) fájlt (sáv, mód, önállósági szint), és ✅/⚠️ jelöléssel ellenőrzi, hogy van-e saját FDD-egységed ([fdd](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/fdd/) vagy [v2](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/v2/)). Ha nincs, a mellékletek tartalék anyaga a bemenet; ezt egy sorban közli, és nem kérdez rá. Ezután azonnal jön az 1. lépés.

# Lépések

## 1. lépés / 9 – Demó: önállóan szállítható dokumentum (kb. 3 perc, A fázis, BA)

- Kulcslépés: nem
- Mit csinál az AI: 1. lépés / 9 – Demó: önállóan szállítható dokumentum. A tréner a kivetítőn egy rövid bekezdésen mutatja a receptet: a [06b-onallo-dokumentum-SKILL.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/06b-onallo-dokumentum-SKILL.md) szerint előbb számláló méri a feloldatlan keresztreferenciákat, majd a szükséges szöveg beépül, a forrás lábjegyzetbe kerül, és a számláló újra mér. Az AI megnyitja a recept fájlját, és három sorban összefoglalja: mit mér, mit tesz, mit nem tehet.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): olvasd be a receptet; ha a Skill betöltése a munkatérben elérhető, használd Skillként, különben a fájl szövegét kövesd utasításként; a számlálót írd meg és futtasd a demó-szövegen, vagy kézzel számolj, és ezt jelöld; a példa bekezdés a tréneré, a résztvevő a sajátjával a 3. lépésben dolgozik.
- Mit futtat az AI? Cél: a recept működésének bemutatása → Címzett: te → Forrás és határ: a recept fájlja és a tréneri minta → Kimeneti séma: hivatkozásszám előtte/utána és a beépített szöveg forrással → Szabályok: nem bővít tartalmat; a forrás lábjegyzetben → Ellenőrzés: a számláló kimenete idézve → Mentés: nincs (a demó nem a te fájlod). Miért így épül fel: a recept a szabályt, a számláló a mérést adja; a kettő együtt ellenőrizhető átalakítás.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 1. lépésnél tartunk a 9 lépésből (A fázis); most: demó: önállóan szállítható dokumentum; utána: közös validáció friss beszélgetésben; a fázis végén: önálló bekezdésjavítás.” A recept három sorát és a demó számait. Kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a számláló kimenete (előtte/utána) látszik, a parancs vagy a kézi módszer megnevezett.
- Kimenet (fájl): Nincs külön fájl.
- Miért fontos (az AI elmondja): A „kevesebb hivatkozás” mérhető: a számláló mutatja meg, mennyi maradt, és hogy mit nem ismer fel.
- Ha nem elérhető: ha a Skill betöltése nem megy, a recept szövege a kérés része, a számlálás kézi; a kiesett funkció a Skill-betöltés, a módszer azonos.

## 2. lépés / 9 – Közös validáció friss beszélgetésben (kb. 2 perc, A fázis, BA)

- Kulcslépés: nem
- Mit csinál az AI: 2. lépés / 9 – Közös validáció friss beszélgetésben. A demó eredményét közösen értelmezzétek: a számláló szerint mennyi maradt, és a friss beszélgetésben csak az átírt szöveget megkapva érthető-e más dokumentum nélkül. Te egy új beszélgetésben felteszed a kérdést; az AI megmondja, mit kérdezz, és mit várj.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a friss beszélgetésbe nem látsz bele; a kérdés: „Érthető-e ez a szöveg más dokumentum nélkül? Mit hiányolsz?”; a választ a résztvevő hozza vissza; a jelentésmegőrzést a beépített szöveg és a forrás összevetésével ellenőrizd.
- Bekérendő paraméter(ek): Egy döntés: „A demó átírása: A: a jelentés megmaradt, a hivatkozások száma csökkent (ajánlott, ha a friss beszélgetés nem hiányolt semmit) · B: elveszett egy feltétel vagy kivétel: írd le · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 2. lépésnél tartunk a 9 lépésből (A fázis); most: közös validáció friss beszélgetésben; utána: önálló bekezdésjavítás; a fázis végén: önálló bekezdésjavítás.” A friss beszélgetés válaszát a számláló mellett, majd a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a beépített szöveg és a forrás egyezik (két helyen visszakeresve); a számláló eredménye idézve (✅/⚠️).
- Kimenet (fájl): Nincs külön fájl.
- Miért fontos (az AI elmondja): Az önállóság próbája, hogy egy olvasó, aki nem ismeri a forrásdokumentumot, megérti-e; a számláló ezt nem mondja meg.
- Ha nem elérhető: ha nincs friss beszélgetés, a pár olvassa el a szöveget a forrásdokumentum nélkül (páros emberi próba); a kiesett funkció a gépi értelmezési próba.

## 3. lépés / 9 – Önálló bekezdésjavítás (kb. 3 perc, A fázis, BA)

- Kulcslépés: igen
- Mit csinál az AI: 3. lépés / 9 – Önálló bekezdésjavítás. Ez a gyakorlat 3 perces kötelező önálló része (önálló mód): kiválasztasz egy rövid bekezdést a saját FDD-egységedből (vagy a tartalék bekezdést a [06b-ellenorzes-sablon.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/06b-ellenorzes-sablon.md) mellékletből), a saját szavaiddal megfogalmazod a kérést, az AI lefuttatja, te forrásban ellenőrzöd az eredményt. Az eredményt az `ellenorzes.md` fájlba menti. Elhúzódó futásnál az előkészített részleten dolgozol.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a kérést a hét elem szerint ne minősítsd előre; futtasd a receptet a kiválasztott bekezdésen; a számláló eredményét előtte/utána add; a beépített szöveg forrását lábjegyzetben add; ellenőrizd a forrásban két beépített helyet; az `ellenorzes.md`-t a sablon szerint töltsd ki; hiányzó forrásnál „Nincs megadva”, ne találd ki a beépítendő szöveget.
- Mit futtat az AI? Cél: egy bekezdés önállóan szállíthatóvá tétele → Címzett: te és az FDD olvasója → Forrás és határ: a kiválasztott bekezdés és a hivatkozott forráshelyek; más tartalom nem → Kimeneti séma: átírt bekezdés lábjegyzettel, hivatkozásszám előtte/utána → Szabályok: nem bővíti a tartalmat; a forrás jelölt → Ellenőrzés: a számláló kimenete és két forráshely visszakeresése → Mentés: `Munka/06b-BA-utotag/ellenorzes.md`. Miért így épül fel: a recept, a számláló és a forrás-visszakeresés együtt adja meg, hogy az átírás jó-e.
- Tipp-létra: 1. Mely kifejezések jelzik a bekezdésedben, hogy másik helyre mutat, és mit kell onnan átvenned, hogy a bekezdés magában is megálljon? · 2. Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: … · 3. „Futtasd a `06b-onallo-dokumentum-SKILL.md` receptjét erre a bekezdésre: <hely>. A hivatkozott helyek szövegét építsd be, a forrást lábjegyzetben add meg. Előtte és utána számold a feloldatlan hivatkozásokat. A tartalmat ne bővítsd. Ellenőrizd két beépített szakasz forrását. Mentsd az `ellenorzes.md` fájlba az `ellenorzes-sablon` szerint.”
- Bekérendő paraméter(ek): A saját kérésed (saját munka). Egy döntés: „Melyik bekezdéssel dolgozol? A: a saját FDD-egységem egy bekezdése (ajánlott) · B: a tartalék bekezdés a sablonból · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 3. lépésnél tartunk a 9 lépésből (A fázis); most: önálló bekezdésjavítás; utána: demó: képernyőterv-drótváz; a fázis végén: önálló bekezdésjavítás.” Az átírt bekezdést a számokkal, és két forráshelyet; a döntést a bekezdésről a kérés előtt.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: futó ellenőrzés: előtte/utána szám megvan; két beépített hely a forrásban visszakeresett (✅/⚠️).
- Kimenet (fájl): [ellenorzes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/ellenorzes.md).
- Miért fontos (az AI elmondja): Az eredmény azért jó, mert mérhető (a számláló), forrással alátámasztott (a lábjegyzet) és te ellenőrizted; nem az AI szava dönt.
- Ha nem elérhető: ha a számláló nem fut, kézzel számolsz, és ezt az `ellenorzes.md` kimondja; a kódos cél nem teljesültként jelölt.

## 4. lépés / 9 – Demó: képernyőterv-drótváz (kb. 4 perc, B fázis, BA)

- Kulcslépés: nem
- Mit csinál az AI: 4. lépés / 9 – Demó: képernyőterv-drótváz. „Folytassuk a 6b gyakorlatot” után közli: „6b gyakorlat, B fázis: képernyőterv.” A tréner egy előkészített FDD-fejezettel és egy kész, általános drótvázzal mutatja be, hogy a képernyőleírásból offline HTML-fájl lesz. A [képernyőterv feladat](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/06b-kepernyoterv-feladat.md) mellékletet nyitja meg, és elmondja: a bemenet az FDD 11. fejezete (vagy a melléklet fiktív mintafejezete), a módszer skill a képernyőelem-szabályokhoz és prompt a konkrét fejezethez, a kimenet egy HTML-fájl a `drotvaz/` mappában.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a drótváz általános, fiktív képernyőelemekkel készül, nem valós termék elemeivel; ne állíts semmit konkrét termék képességeiről; a demó szövege a tréneré; a résztvevő saját FDD-fejezetét csak akkor használd, ha az 11. fejezete elkészült; a felsorolások értékkészlete a fejezetből jön.
- Mit futtat az AI? Cél: a drótváz készítésének bemutatása → Címzett: te → Forrás és határ: a feladat melléklete és az előkészített fejezet → Kimeneti séma: egy offline HTML-fájl → Szabályok: nincs külső erőforrás; FIKTÍV jelölés; a választólisták az értékkészlet elemei → Ellenőrzés: a választólisták összevetése az értékkészlettel → Mentés: nincs (a demó). Miért így épül fel: a drótváz azért érték, mert a leírásból ellenőrizhetően következik, nem azért, mert szép.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 4. lépésnél tartunk a 9 lépésből (B fázis); most: demó: képernyőterv-drótváz; utána: egy mező közös javítása; a fázis végén: drótváz mentése.” A mellékletet és az előkészített drótvázat. Kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a drótváz megnyitható böngészőben; a FIKTÍV jelölés látszik (✅/⚠️).
- Kimenet (fájl): Nincs külön fájl.
- Miért fontos (az AI elmondja): A drótváz a leírás első próbája: ha a mező nem fér bele a képernyőbe, vagy hiányzik az értékkészlet, a leírás hiányos.
- Ha nem elérhető: ha a Work nem tud fájlt készíteni, az előkészített általános drótváz megnyitása és a leírás kézi javítása a tartalék; a kiesett funkció a fájlkészítés.

## 5. lépés / 9 – Egy mező közös javítása (kb. 6 perc, B fázis, BA)

- Kulcslépés: igen
- Mit csinál az AI: 5. lépés / 9 – Egy mező közös javítása. Az első változat nem biztos, hogy jó. A közös drótvázon (vagy a sajátodon) azonosítasz egy eltérést a fejezettől, fókuszált javítási kérést fogalmazol, az AI lefuttatja, te újra összeveted a fejezettel. A kérést a hét elem szerint ✅/⚠️ jelöléssel értékeli.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a determinisztikus ellenőrzést (a választólista elemei az értékkészlettel) futtasd előtte és utána; egy mező, egy javítás; ha a drótváz hibátlan, a kötelező jelölést vagy a gomb aktivitását vizsgáld; a javítás után a mezőt a fejezet soráig kövesd vissza.
- Mit futtat az AI? Cél: egy mező pontosítása a fejezet szerint → Címzett: te és az FDD olvasói → Forrás és határ: a drótváz és az FDD-fejezet; más mező nem módosulhat → Kimeneti séma: javított HTML (új verzió) → Szabályok: egy változtatás, újramérés; külső erőforrás nincs → Ellenőrzés: az értékkészlet-összevetés kimenete idézve → Mentés: lásd a 6. lépést. Miért így épül fel: a fókuszált javítás nem ront el olyat, ami jó volt.
- Tipp-létra: 1. Melyik mezőnél tér el a drótváz a fejezet táblázatától (típus, kötelező jelölés, értékkészlet), és mit kell pontosan kérned? · 2. Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: … · 3. „A drótváz <mező> mezője eltér az FDD 11. fejezetétől: <mi>. Javítsd ezt a mezőt a fejezet szerint, mást ne módosíts. Ellenőrzésként add meg a választólista elemeit az értékkészlettel összevetve. Az új verzió ‚_v2’ utótagot kapjon.”
- Bekérendő paraméter(ek): A javítási kérés (saját munka). Egy döntés: „Melyik mezőt javítjuk? A: amelyiknél a legnagyobb az eltérés a fejezettől (ajánlott) · B: a kötelező jelölést · C: egyedi: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 5. lépésnél tartunk a 9 lépésből (B fázis); most: egy mező közös javítása; utána: drótváz mentése; a fázis végén: drótváz mentése.” A mező előtte/utána állapotát és az értékkészlet-összevetést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a javított mező a fejezet sorával egyezik; az összevetés kimenete idézve (✅/⚠️).
- Kimenet (fájl): a javított HTML a 6. lépésben mentve.
- Miért fontos (az AI elmondja): A javítási kör azért ér valamit, mert ugyanazzal a mérőszámmal ellenőrizzük: nem azt, hogy jobban néz ki, hanem hogy egyezik a leírással.
- Ha nem elérhető: ha a fájl nem módosítható a munkatérben, a javítás leírását szövegben rögzíted, és kézzel javítod; a kiesett funkció a fájlkészítés.

## 6. lépés / 9 – Drótváz mentése (kb. 2 perc, B fázis, BA)

- Kulcslépés: nem
- Mit csinál az AI: 6. lépés / 9 – Drótváz mentése. A javított drótvázat verziónévvel menti a `drotvaz/` mappába, a fejlécben „FIKTÍV OKTATÁSI MINTA” és „drótváz, nem működő alkalmazás” jelöléssel; a közös eredményt közös kipróbálásként jelöli.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a fájlnév `ÉÉÉÉ-HH-NN_kepernyo_drotvaz.html` a forrás dátumával, ütközésnél `_v2`; ellenőrizd, hogy nincs külső erőforrás (külső szkript, webbetűtípus, kép-URL) a fájlban; az eredményt írd az `ellenorzes.md` 6. szakaszába is.
- Mit futtat az AI? Cél: a drótváz mentése → Címzett: te → Forrás és határ: a javított HTML → Kimeneti séma: egy fájl → Szabályok: külső erőforrás nincs; FIKTÍV jelölés → Ellenőrzés: egy kereséssel a fájlban nincs `http` erőforrás → Mentés: `Munka/06b-BA-utotag/drotvaz/`. Miért így épül fel: az offline fájl bárhol megnyitható, ezért a teszt ugyanazt mutatja mindenkinek.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 6. lépésnél tartunk a 9 lépésből (B fázis); most: drótváz mentése; utána: demó: dokumentáció kódból; a fázis végén: drótváz mentése.” A mentett fájl linkjét. Kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a fájl megnyitható; külső erőforrás nincs; a jelölés megvan (✅/⚠️).
- Kimenet (fájl): [drotvaz](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/drotvaz/) mappa.
- Miért fontos (az AI elmondja): A kimenet közös kipróbálás, nem kész tervezés: a drótváz célja a leírás ellenőrzése, nem a képernyő végleges megtervezése.

## 7. lépés / 9 – Demó: dokumentáció kódból (kb. 4 perc, C fázis, BA)

- Kulcslépés: nem
- Mit csinál az AI: 7. lépés / 9 – Demó: dokumentáció kódból. „Folytassuk a 6b gyakorlatot” után közli: „6b gyakorlat, C fázis: dokumentáció kódból.” A tréner két rövid példát mutat a [kod-repo/rondo-jovahagyas](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/kod-repo/rondo-jovahagyas/README.md) mappából, kód alapján felhasználói szintű leírást írva: az egyik nulláról indul (a [szabalyok.py](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/kod-repo/rondo-jovahagyas/szabalyok.py) olvasásával), a másik egy elavult leírást frissít (a [felhasznaloi_kezikonyv.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/04%20usecase%20RONDO/kod-repo/rondo-jovahagyas/docs/felhasznaloi_kezikonyv.md) alapján). A kimenet felhasználói szintű leírás, nem függvénylista.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a mappát helyi fájlként olvasd (Work Local) vagy feltöltött fájlként; repó- vagy MCP-elérést (MCP: Model Context Protocol, külső rendszereket kapcsoló szabvány) ne feltételezz: „ha a munkatérben elérhető”; a kód nem módosul; a leírásban minden szabályhoz add meg a kódhelyet; a kézikönyv eltéréseit a kódhoz képest nevezd meg, de ne döntsd el, melyik a „jó”, ha a forrás nem dönt.
- Mit futtat az AI? Cél: kódból felhasználói szintű leírás → Címzett: te és a felhasználók → Forrás és határ: a három fájl, olvasásra → Kimeneti séma: leírás szabályonként kódhellyel → Szabályok: a kód nem módosul; hiány „Nincs megadva” → Ellenőrzés: minden szabálynál fájl és sor → Mentés: nincs (a demó). Miért így épül fel: a kód a viselkedés forrása; a leírás csak akkor igaz, ha a kódhelyre visszavezethető.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 7. lépésnél tartunk a 9 lépésből (C fázis); most: demó: dokumentáció kódból; utána: egy kódszabály közös visszakeresése; a fázis végén: közös eredmény mentése.” A két minta egy-egy bekezdését a kódhellyel. Kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a kódhely tényleg létezik (✅/⚠️).
- Kimenet (fájl): Nincs külön fájl.
- Miért fontos (az AI elmondja): A kódból írt dokumentáció akkor megbízható, ha minden szabálya visszakereshető a kódban.
- Ha nem elérhető: ha a helyi mappa vagy a repó-hozzáférés nem megy, a három fájlt feltöltöd vagy a tréner adta ZIP-ből bontod ki; ha az sem, a tréneri felvételt nézed; a kiesett funkció a közvetlen mappaolvasás, a módszer azonos.

## 8. lépés / 9 – Egy kódszabály közös visszakeresése (kb. 4 perc, C fázis, BA)

- Kulcslépés: nem
- Mit csinál az AI: 8. lépés / 9 – Egy kódszabály közös visszakeresése. Közösen kiválasztotok egy szabályt a leírásból, megkeresitek a kódban, és összeveted a kézikönyv állításával. Az AI mindkét helyet mutatja egymás mellett, te döntöd el, hogy egyezik-e.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): válassz egy szabályt, amelynél van számadat vagy feltétel; mutasd a kódhelyet (fájl, sor) és a kézikönyv megfelelő mondatát linkkel; ha eltérnek, nevezd meg, mi az eltérés; ne mondd meg, melyik a „helyes”: az a forrás, a kód, és a döntés a szerzőé.
- Mit futtat az AI? Cél: egy kódszabály független visszakeresése és összevetése a leírással → Címzett: te → Forrás és határ: a `szabalyok.py` és a kézikönyv → Kimeneti séma: két idézet linkkel, egyezés vagy eltérés → Szabályok: nem dönt a szerző helyett → Ellenőrzés: mindkét hely megnyitható → Mentés: lásd a 9. lépést. Miért így épül fel: a dokumentáció és a kód kapcsolata csak a konkrét visszakeresésen derül ki.
- Bekérendő paraméter(ek): Egy döntés: „A kód és a leírás: A: egyezik · B: eltér: írd le, hol · C: nem dönthető el ebből a két fájlból · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 8. lépésnél tartunk a 9 lépésből (C fázis); most: egy kódszabály közös visszakeresése; utána: közös eredmény mentése; a fázis végén: közös eredmény mentése.” A két idézetet és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a két hely linkkel megnyitható; az eltérés (ha van) megnevezett (✅/⚠️).
- Kimenet (fájl): a 9. lépés rögzíti.
- Miért fontos (az AI elmondja): A leírás elavulása csak akkor látszik, ha visszakeresed a forrásban; ezért a kód-dokumentáció módszere a visszakeresés.

## 9. lépés / 9 – Közös eredmény mentése (kb. 2 perc, C fázis, BA)

- Kulcslépés: nem
- Mit csinál az AI: 9. lépés / 9 – Közös eredmény mentése. A közös leírás másolatát a `dokumentacio/` mappába menti, közös kipróbálásként jelölve, és az `ellenorzes.md` 6. szakaszát kitölti a visszakeresés adataival.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a fájlnév `ÉÉÉÉ-HH-NN_dokumentacio_kodbol.md`, ütközésnél `_v2`; a fejlécben „FIKTÍV OKTATÁSI MINTA” és „közös kipróbálás”; a kódhelyek linkelve; a kódot ne módosítsd.
- Mit futtat az AI? Cél: a közös dokumentáció és az ellenőrzés rögzítése → Címzett: te → Forrás és határ: a 7-8. lépés eredménye → Kimeneti séma: leírás kódhelyekkel; az ellenőrzési jegyzék 6. szakasza → Szabályok: közös kipróbálás jelölve; hiány „Nincs megadva” → Ellenőrzés: a fájl megnyitható, a kódhelyek léteznek → Mentés: `Munka/06b-BA-utotag/dokumentacio/`. Miért így épül fel: a mentett, visszakereshető leírás másnap is használható.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 9. lépésnél tartunk a 9 lépésből (C fázis); most: közös eredmény mentése; utána: a gyakorlat zárása; a fázis végén: közös eredmény mentése.” A mentett fájlok linkjét. Kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a fájl megnyitható; a kódhelyek léteznek; a jelölés megvan (✅/⚠️).
- Kimenet (fájl): [dokumentacio](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/dokumentacio/) mappa, [ellenorzes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/ellenorzes.md).
- Miért fontos (az AI elmondja): A mai közös kipróbálás nem kész dokumentáció, hanem egy módszer: kódból leírás, kódhelyes visszakereséssel.

# Elakadás

- **A Skill nem tölthető be:** az AI a recept fájlját kérésként követi; a kiesett funkció a Skill-betöltés, a módszer azonos.
- **Nem fut kód:** a hivatkozásszámlálás és az értékkészlet-összevetés kézzel történik; az `ellenorzes.md` kimondja, hogy a kódos cél nem teljesült.
- **Nincs saját FDD-egység:** az AI a mellékletek tartalék anyagát használja, és ezt egy sorban közli.
- **A helyi mappa- vagy repó-hozzáférés nem működik:** három fájl feltöltése vagy ZIP; végső tartalék a tréneri felvétel. MCP-alapú elérés csak „ha a munkatérben elérhető”.
- **A 3 perces önálló rész elhúzódik:** az AI az előkészített részleten dolgoztat; a mentés a gyakorlat végéig bármikor megtörténhet.
- **A leírás és a kód eltér:** az AI nem dönti el, melyik a helyes; az eltérést megnevezi, a döntés a szerzőé.
- **Valós Oriana-kód vagy -dokumentum került elő:** az AI nem menti és nem használja; egy mondatban jelzi, hogy a valós anyag a saját fiókban marad.

# Ellenőrzés a végén

Az AI önellenőrző listája; ✅/⚠️ jelöléssel, linkekkel közli, ⚠️ esetén egy mondatban írja le, mit javít.

- Az [ellenorzes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/ellenorzes.md) megvan, és tartalmazza a hivatkozásszámot előtte és utána, a változtatásokat forrással és a jelentésmegőrzés ellenőrzését.
- A [drotvaz](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/drotvaz/) fájl megnyitható, külső erőforrás nélküli, a választólisták egyeznek az értékkészlettel.
- A [dokumentacio](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/06b-BA-utotag/dokumentacio/) fájl minden szabálynál kódhelyet ad; közös kipróbálásként jelölt.
- A fiktív jelölés megvan, a hiány „Nincs megadva”, a javaslat nem döntés, minden lényeges állításnál van forráshely, a Tananyag érintetlen.
- Nem szerepel valós termék képességére vonatkozó állítás; a drótváz és a dokumentáció általános, fiktív.

# Zárás – mit tanultunk

Az AI összefoglal 5-8 sorban: mi készült (linkekkel: ellenőrzési jegyzék, drótváz, dokumentáció); a hat lépés hol jelent meg (az Ellenőrzés a számlálóban és a forrás-visszakeresésben, a Javítás a mezőjavításban, a Rögzítés a mentett jegyzékben); melyik proaktív elem épült be (a recept mint Skill számlálóval, fájlkészítés a Workben, helyi mappából kód olvasása, ha a munkatérben elérhető); és mi vihető át a saját munkára. Utána egyszer felteszi a „Vidd haza” kérdést: „Melyik saját feladatodon próbálnád ki ugyanezt? A: a profilodban rögzített feladat: <feladat> · B: egy másik visszatérő feladat · C: más: írd le.”

# Vidd haza

- **BA:** egy meglévő, hivatkozásokkal teli dokumentum önállóan szállíthatóvá tétele recepttel és számlálóval; egy FDD-fejezet képernyőtervezésének első drótváza; egy elavult felhasználói leírás frissítése a kód alapján, kódhelyekkel.
- **Mi kell hozzá:** a forrásdokumentum, a recept (Skill vagy szöveg), egy mérés (számláló vagy értékkészlet-összevetés) és a forrás-visszakeresés szokása.

Résztvevői döntések száma ebben a gyakorlatban: 4 (a demó átírásának megítélése, a bekezdés kiválasztása, a javítandó mező, a kód és a leírás összevetésének eredménye). A saját kérések és a tipp-létra kérései nem döntések.

---
id: "07"
cim: "Saját folyamat átvitele és továbbvitele"
blokk: 7
ido: "16:05-16:30"
vezeti: "Piya Csaba; körbejár: Kemény Krisztián"
sav: "közös"
munkamappa: "Munka/07-Sajat"
modell: "GPT-6 Luna"
ajanlott_mod: onallo
fazisok: ["A: 16:05-16:20 saját brief", "B: 16:20-16:30 rögzítés és beszámoló"]
inditok: ["Kezdjük a 7. gyakorlatot", "Folytassuk a 7. gyakorlatot"]
proaktiv_elem: ["saját brief DNS-hivatkozással és ellenőrizhető céllal", "következő lépés: ütemezett feladat vagy Workspace Agent leírása (ha a munkatérben elérhető; nem élesítjük kötelezően)", "a nap íve: honnan hová, az öt fok és az első 30 nap", "5 napos gyakorló terv a másnap reggeli indításhoz"]
eredmeny: ["E1", "E9"]
forrasok:
  - "Munka/00-Alapozas/profil.md"
  - "Munka/00-Alapozas/celkartya.md (ha létezik)"
  - "Munka/04-Agent/agent-brief.md és kriteriumok.md (a mai minta)"
  - "Munka/05-Reviewer/ (a mai reviewer-recept)"
  - "Munka/01-DNS/dns/README.md (verzió; ha létezik)"
  - "Tananyag/Notebookok/07-sajat-atvitel-notebook.html (a nap íve, az öt fok, az Első 30 nap kártya)"
kimenetek:
  - "Munka/07-Sajat/agent-brief.md"
  - "Munka/07-Sajat/kovetkezo-lepes.md"
  - "Munka/07-Sajat/ot-napos-terv.md"
  - "Munka/07-Sajat/sablonok/"
  - "Munka/07-Sajat/vallalas.md"
  - "Munka/00-Alapozas/profil.md (Vállalás szakasszal egészül ki)"
mellekletek:
  - "Feladatok/mellekletek/07-sajat-brief-sablon.md"
  - "Feladatok/mellekletek/07-kovetkezo-lepes-sablon.md"
  - "Feladatok/mellekletek/07-ot-napos-terv-sablon.md"
  - "Feladatok/mellekletek/07-vallalas-sablon.md"
glosszarium: ["agent-brief", "ellenőrizhető cél", "ütemezett feladat", "Workspace Agent", "DNS", "vállalás", "5 napos gyakorló terv", "AI-natív szervezet", "érettségi szint", "a nap térképe (vezérelv-ábra)", "gazda", "champion-kör"]
fopproban_ellenorizendo: nincs
b_terv: "Nincs ütemezés vagy Agent a munkatérben: a következő lépés mentett feladatszövegként vagy kézi ismétlésként marad (forma C); nincs Local/Cloud futás: a brief és a sablonok mentve, a futás későbbi feladat; az ábra nem tölt be: a notebook szöveges felirata és az öt fok listája ugyanazt mondja"
---

# Cél

A mai módszert átviszed a saját munkádra: a profilodban rögzített, visszatérő feladathoz megírod a saját briefedet (ellenőrizhető céllal, kritériumokkal és stop-szabállyal), kijelölöd a következő lépést (ütemezett feladat vagy Workspace Agent leírása, ha elérhető), megírod az 5 napos gyakorló tervedet a másnap reggeli indításhoz, elmented a sablonjaidat, és konkrét alkalmazási vállalást teszel. A végén a csoport a nap ívén kimondja, honnan hová jutott, és melyik fokra lép a következő 30 napban. Nem fut le hosszú munka: a hosszú futás későbbi feladat, ma az előkészítés a cél. A valós Oriana-feladat a saját fiókodban és gépeden marad.

# Indítás

A résztvevő az `Oriana AI-workshop` projekt Work-beszélgetésében ezt írja: „Kezdjük a 7. gyakorlatot.” A B fázisnál: „Folytassuk a 7. gyakorlatot.” Az AI ilyenkor a `Munka/07-Sajat` fájljaiból állapítja meg, hol tart, és egy sorban közli: „7. gyakorlat, B fázis: rögzítés és beszámoló.” Fázisfelismerés: nincs `agent-brief.md` → A; van `agent-brief.md`, de nincs `kovetkezo-lepes.md` → B. Az AI első üzenete kérdés nélkül:

1. **Cél:** a saját visszatérő feladatod átvitele a mai módszerre: saját brief, következő lépés, mentett sablonok, vállalás.
2. **Út:** A fázis, 16:05-16:20: a saját brief megírása és ellenőrzése · B fázis, 16:20-16:30: a következő lépés leírása és az 5 napos terv, a sablonok és a vállalás mentése, a nap íve és a lépcső.
3. **Hová jutunk:** az [agent-brief.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/agent-brief.md), a [kovetkezo-lepes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/kovetkezo-lepes.md), az [ot-napos-terv.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/ot-napos-terv.md), a [sablonok](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/sablonok/) mappa és a [vallalas.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/vallalas.md).
4. **Mit tanulunk:** a hat lépés (Cél → Forrás → Utasítás → Ellenőrzés → Javítás → Rögzítés) és a prompt hét eleme saját feladaton; az ellenőrizhető cél három része (kimenet, korlát, ellenőrzés); a nap íve: honnan hová jutottatok, és az első 30 nap iránya; a reaktív válaszadóból proaktív segéd útja: állandó kontextus (DNS: a vállalati szabályok verziózott gyűjteménye), recept, független ellenőr, hosszú futás, ütemezés.
5. **Hová mentek:** a kimeneteket a [Munka/07-Sajat](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/) mappába mentem, a [Tananyagot](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/) nem módosítom. A valós Oriana-adat ebben a mappában marad a saját gépeden; nem kerül a Wenova-fiókba, a nyilvános tananyag-mappába vagy közös helyre a külön döntésed nélkül.

Ugyanebben az üzenetben egy sor a módról: „Ajánlott mód: önálló. A kulcslépéseknél te írod a briefet és a következő lépést; én futtatok és ellenőrzök. Elakadtál? Adj tippet · Mutasd a mintát · Írd meg helyettem és futtasd. Módot így váltasz: Váltsunk vezetett / közös módra.” Ha a profilban más mód szerepel, az AI azt használja, és ezt egy sorban közli (az időkeret miatt a felső határ a `kozos`).

Az AI beolvassa a [profil.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/00-Alapozas/profil.md) fájlt (feladat, sáv, mód, önállósági szint, DNS-verzió), a [celkartya.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/00-Alapozas/celkartya.md) fájlt, és ✅/⚠️ jelöléssel ellenőrzi a mai minták meglétét ([agent-brief.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/agent-brief.md), [kriteriumok.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/kriteriumok.md), a reviewer-recept az [05-Reviewer](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/) mappában). Ami hiányzik, azt a mellékletek sablonjai pótolják, külön kérdés nélkül. Ezután azonnal jön az 1. lépés kérdése.

# Lépések

## 1. lépés / 7 – A saját feladat kijelölése (kb. 2 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 1. lépés / 7 – A saját feladat kijelölése. A profilból kiolvassa a rögzített feladatot, és megkérdezi, ezen dolgozol-e. Közli a használt DNS-verziót is (DNS: a vállalati szabályok verziózott gyűjteménye), ha van (a `Munka/01-DNS/dns/README.md` verzió-mezője), különben „Nincs megadva”. Figyelmeztet: valós adatot nem ír a beszélgetésbe, a brief a forrás nevét és helyét tartalmazza, a tartalmát nem.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): olvasd a profil feladat- és nehézség mezőjét; ha hiányzik, kérdezz egyszer opciókkal; a DNS-verziót a fájlból idézd; ha a résztvevő valós ügyféladatot, jelszót vagy kulcsot ír, állítsd meg, ne használd, és javasolj fiktív vagy anonimizált példát.
- Bekérendő paraméter(ek): Egy döntés: „Melyik feladatra írod meg a briefet? A: a profilodban rögzített feladat: `<feladat>` (ajánlott) · B: egy másik visszatérő feladat: írd le · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 1. lépésnél tartunk a 7 lépésből (A fázis); most: a saját feladat kijelölése; utána: a saját agent-brief megírása; a fázis végén: ki ellenőrzi az eredményt.” A profil feladatmezőjét és a DNS-verziót, majd a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a feladat és a DNS-verzió a megnyitott fájlokból idézett (✅/⚠️).
- Kimenet (fájl): Nincs külön fájl.
- Miért fontos (az AI elmondja): A módszer akkor marad meg, ha azonnal egy saját, valós feladaton használod; a legkisebb, ismétlődő feladat a jó kiindulás.

## 2. lépés / 7 – A saját agent-brief megírása (kb. 8 perc, A fázis, közös)

- Kulcslépés: igen
- Mit csinál az AI: 2. lépés / 7 – A saját agent-brief megírása. A [07-sajat-brief-sablon.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/07-sajat-brief-sablon.md) hét pontját mutatja, mellé a mai [04-Agent briefedet](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/04-Agent/agent-brief.md) mintaként, és kéri, hogy írd meg a briefet a saját feladatodra. Kérdezi, melyik módban futna (Local vagy Cloud); a funkció elérését nem állítja, csak azt, amit a felületen látsz: „ha a munkatérben elérhető”.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a sablont tedd a résztvevő elé; a briefet ő írja; a hét pontot és az ellenőrizhető cél három részét (kimenet, korlát, ellenőrzés) ellenőrizd; a DNS-verzió a briefben szerepeljen; ne kerüljön bele jelszó, kulcs vagy valós ügyféladat; ha a mai kritériumok mintaként segítenek, utalj rájuk, de ne vedd át helyette.
- Mit futtat az AI? Cél: egy önállóan futtatható brief a saját feladatra → Címzett: a jövőbeli agent (vagy te holnap) → Forrás és határ: a feladat forrásainak neve és helye; a tartalom a saját gépen marad → Kimeneti séma: a sablon hét pontja, K-kritériumokkal → Szabályok: hiány „Nincs megadva”; javaslat nem döntés; írási határ kimondott; nincs küldés vagy külső írás → Ellenőrzés: a hét pont megvan, a körszám és a stop-szabály számmal szerepel → Mentés: `Munka/07-Sajat/agent-brief.md`. Miért így épül fel: a saját feladat akkor delegálható, ha a brief önmagában elég; ezért kell a kimenet, a korlát és az ellenőrzés.
- Tipp-létra: 1. Ha ezt a feladatot holnap egy új munkatársnak adnád át egyetlen oldalon, mi állna benne a célról, a forrásokról, a tiltásokról és arról, hogyan ellenőrzöd az eredményt? · 2. Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: … · 3. „Írd meg az agent-briefet a saját feladatomra (<feladat>) a sablon hét pontjára. Mód: …. DNS-verzió: …. Cél: kimenet, címzett, formátum. Forrás: …. Korlát: hiány ‚Nincs megadva’, javaslat nem döntés, írási határ …. Ellenőrzés: K1-K3 elvárás, mérés, küszöb; determinisztikus ellenőrzés kóddal vagy számolással, ahol lehet. Menet: legfeljebb 8 lépés, jóváhagyás, legfeljebb 2 belső kör. Stop: teljesülés, körkeret, nincs javulás, hiányzó döntés. Zárás: mentési hely és verzió.”
- Bekérendő paraméter(ek): A saját briefed (saját munka). Egy döntés: „Melyik módban futna ez a feladat? A: Local (helyi fájlok, online gép; ajánlott, ha a forrás a gépeden van) · B: Cloud (gép nélkül; a forrásokat külön elérhetővé kell tenni) · C: még nem döntöm el, a brief nyitott tételként jelzi · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 2. lépésnél tartunk a 7 lépésből (A fázis); most: a saját agent-brief megírása; utána: a brief gépi ellenőrzése; a fázis végén: ki ellenőrzi az eredményt.” A brief hét pontjának ✅/⚠️ ellenőrzését, a hiányzó pontokat és a döntést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: futó ellenőrzés a 3. lépésben; itt az AI a hét pontot és a három részt nézi.
- Kimenet (fájl): [agent-brief.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/agent-brief.md).
- Miért fontos (az AI elmondja): A mai módszer nem a RONDO-ügy (valós cég, kitalált projekt) sajátja: bármely visszatérő feladat delegálható, ha van brief, kritérium és stop-szabály.
- Ha nem elérhető: ha nincs Local vagy Cloud futás a munkatérben, a brief és a sablonok akkor is elkészülnek; a futás későbbi feladat, a kiesett funkció a háttérfutás.

## 3. lépés / 7 – A brief gépi ellenőrzése (kb. 3 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 3. lépés / 7 – A brief gépi ellenőrzése. Determinisztikus scripttel ellenőrzi a briefet: a hét pont megvan, a forrásnevek meg vannak adva, a DNS-verzió szerepel (vagy „Nincs megadva”), a körszám és a stop-szabály számmal szerepel, az írási határ kimondott, nincs jelszó- vagy kulcsmintázat. A scriptet és az eredményt a `Munka/07-Sajat/sablonok/` mappába menti.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): írj és futtass scriptet; hibánként egy sor; ne javítsd a briefet a résztvevő helyett; a jelszó- vagy kulcsmintázat találatát jelezd, és ne idézd; ha nem fut kód, kézi ellenőrzőlap.
- Mit futtat az AI? Cél: a brief indulásra készségének gépi ellenőrzése → Címzett: te → Forrás és határ: az `agent-brief.md`, más fájl nem → Kimeneti séma: ellenőrzési sorok, eredménnyel → Szabályok: nem módosít → Ellenőrzés: a parancs és az eredmény idézett → Mentés: `Munka/07-Sajat/sablonok/brief_ellenorzes.py`, `brief_ellenorzes_eredmeny.txt`. Miért így épül fel: a gép gyorsan látja, ha egy kötelező elem hiányzik; azt viszont nem, hogy jó-e a tartalom.
- Bekérendő paraméter(ek): Nincs.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 3. lépésnél tartunk a 7 lépésből (A fázis); most: a brief gépi ellenőrzése; utána: ki ellenőrzi az eredményt; a fázis végén: ki ellenőrzi az eredményt.” Az eredménysorokat. A hiányokat te pótolhatod; kérdés nincs.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a script kimenete idézve (✅/⚠️).
- Kimenet (fájl): [brief_ellenorzes_eredmeny.txt](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/sablonok/brief_ellenorzes_eredmeny.txt).
- Miért fontos (az AI elmondja): A determinisztikus ellenőrzés az első védvonal; a második a független ellenőr, a harmadik a forrás-visszakeresés.
- Ha nem elérhető: ha nem fut kód, a hét pont kézi ellenőrzőlapon készül; a kódos cél nem teljesültként jelölt.

## 4. lépés / 7 – Ki ellenőrzi az eredményt (kb. 2 perc, A fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 4. lépés / 7 – Ki ellenőrzi az eredményt. A brief ellenőrzési pontja mellé kijelöli az emberi ellenőrt, és javasolja a mai reviewer-recept újrahasználását a saját feladatra: friss beszélgetés, szűk csomag, a reviewer nem javít. A reviewer-brief sablonját a [mai receptedből](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/05-Reviewer/) másolja a `sablonok/` mappába, a feladathoz igazítva.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a recept másolat legyen, ne mozgatás; a feladathoz igazítandó részeket jelöld `<…>`-vel; az ellenőrző személy neve legyen a vállalásba átvehető; a névvel valós személyt ne találj ki.
- Mit futtat az AI? Cél: a független ellenőrzés kijelölése a saját feladatra → Címzett: te → Forrás és határ: a mai recept, a brief → Kimeneti séma: `reviewer-brief-sablon.md` a feladathoz igazítva; az ellenőrző megnevezése → Szabályok: a reviewer nem javít; a nem ellenőrizhető elem nem teljesített → Ellenőrzés: a sablon tartalmazza a mai recept kötelező elemeit → Mentés: `Munka/07-Sajat/sablonok/reviewer-brief-sablon.md`. Miért így épül fel: az ellenőrzés attól független, hogy más szemmel, szűk bemenettel történik.
- Bekérendő paraméter(ek): Egy döntés: „Ki ellenőrzi az eredményt? A: a közvetlen vezetőm · B: egy kolléga · C: még nincs; addig a reviewer-recept friss beszélgetésben és saját visszakeresés · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 4. lépésnél tartunk a 7 lépésből (A fázis); most: ki ellenőrzi az eredményt; utána: a következő lépés leírása; a fázis végén: ki ellenőrzi az eredményt.” A kijelölt ellenőr(ök)et és a reviewer-sablon fejlécét.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a sablon fájlja létrejött; az ellenőr megnevezése megvan (✅/⚠️).
- Kimenet (fájl): [reviewer-brief-sablon.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/sablonok/reviewer-brief-sablon.md).
- Miért fontos (az AI elmondja): Aki nem tud megnevezni ellenőrt, annak a munkája ellenőrizetlen marad; a név vagy a „még nincs” is információ.

## 5. lépés / 7 – A következő lépés leírása és az 5 napos terv (kb. 4 perc, B fázis, közös)

- Kulcslépés: igen
- Mit csinál az AI: 5. lépés / 7 – A következő lépés leírása és az 5 napos terv. „Folytassuk a 7. gyakorlatot” után közli: „7. gyakorlat, B fázis: rögzítés és beszámoló.” A [07-kovetkezo-lepes-sablon.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/07-kovetkezo-lepes-sablon.md) szerint kéri, hogy leírd, hogyan válik a mai briefből ismétlődő vagy proaktív segéd: ütemezett feladat szövege, Workspace Agent leírása vagy kézi ismétlés. Négy elem kell: input, output, kritérium, írási határ. Ma nem élesítjük kötelezően: ha a munkatérben elérhető, később, a saját döntéseddel. Ezután a [07-ot-napos-terv-sablon.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/07-ot-napos-terv-sablon.md) alapján előtölti az **5 napos gyakorló tervet** a profilodból és a briefedből: öt munkanap, naponként cél, fájl, ellenőrzés és kivel; a javasolt időablak 2026-11-13-tól 2026-11-19-ig. Órán csak az 1. nap sorát és a holnap reggeli első lépést töltöd ki a saját szavaiddal; a 2-5. nap sorai az AI előtöltött javaslatai, házi feladat: másnap reggel, a sablonban pontosítod őket. Az AI előtöltése javaslat, nem döntés.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a sablont tedd a résztvevő elé; a leírást ő írja; ellenőrizd a négy elemet; ne állítsd, hogy az ütemezés vagy az Agent elérhető; az Agentnél említsd, hogy előfordulhat, hogy csak a webes felületen látszik; üzenetküldés és külső írás csak jóváhagyással; az ütemezett futás nem végez új bejelentkezést, a hozzáférést előre kell rendezni. Az 5 napos tervet a profilból és a briefből töltsd elő a sablon öt sorával; órán az 1. napot és a holnap reggeli első lépést a résztvevő pontosítja, a 2-5. napot nem kérdezi végig; a tervbe valós ügyféladat, név vagy szám nem kerül, csak a forrás neve és helye; a dátum abszolút, hiány esetén „Nincs megadva”. A terv javaslat, nem vállalás: a vállalás a 6. lépésben születik, és ha az első használat napja eltér az 1. naptól, a terv napjait ahhoz igazítod.
- Mit futtat az AI? Cél: a briefből ismétlődő vagy proaktív segéd leírása, és az első hét napokra bontva → Címzett: te és a jövőbeli futtató → Forrás és határ: a mai brief, a profil és a sablonok; a leírás és a terv nem tartalmaz valós adatot → Kimeneti séma: a sablon táblája (név, mikor fut, input, output, kritérium, írási határ, független ellenőr, hiba esetén, állapot ma) + az 5 napos terv öt sora (nap, cél, fájl, ellenőrzés, kivel; órán az 1. nap kész, a többi előtöltött javaslat) → Szabályok: javaslat nem vállalás; hiány „Nincs megadva”; továbbküldés jóváhagyással → Ellenőrzés: mind a négy elem megvan, és az 5 napos terv 1. napja kitöltött, a 2-5. nap előtöltött → Mentés: `Munka/07-Sajat/kovetkezo-lepes.md`, `Munka/07-Sajat/ot-napos-terv.md`. Miért így épül fel: egy segéd attól lesz proaktív, hogy előre le van írva, mit kap, mit ad, mitől jó, és mit nem szabad csinálnia; a terv pedig attól indul el, hogy az első hét napokra van bontva.
- Tipp-létra: 1. Milyen gyakran és milyen forrásból ismétlődik ez a feladat, és mit szabad az ismétlődő futásnak megtennie jóváhagyás nélkül, és mit nem? · 2. Cél: … → Címzett: … → Forrás és határ: … → Kimeneti séma: … → Szabályok: … → Ellenőrzés: … → Mentés: … · 3. „Írd le a(z) <feladat> következő lépését a sablon szerint: forma <A / B / C>. Mikor fut: …. Input: …. Output: …. Kritérium: K1-K3 (kritérium) a briefből. Írási határ: csak a saját `Munka/07-Sajat` mappa; küldés és külső írás csak jóváhagyással. Független ellenőr: …. Állapot ma: mentett szöveg. Az 5 napos tervhez: töltsd elő az öt napot a briefemből, naponként cél, fájl, ellenőrzés és kivel; az 1. napot most pontosítom, a többit másnap.”
- Bekérendő paraméter(ek): A saját leírásod és az 5 napos terv sorai (saját munka). Egy döntés: „Melyik formát választod? A: ütemezett feladat szövege (ha a munkatérben elérhető) · B: Workspace Agent leírása (ha a munkatérben elérhető) · C: kézi ismétlés előkészítése (ajánlott, ha egyik sem biztos) · más: írd le.”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „Az 5. lépésnél tartunk a 7 lépésből (B fázis); most: a következő lépés leírása és az 5 napos terv; utána: sablonok és vállalás mentése; a fázis végén: a nap íve és a lépcső.” A leírás négy elemének ✅/⚠️ ellenőrzését, az 5 napos terv öt sorát és a döntést a formáról.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: futó ellenőrzés: input, output, kritérium és írási határ megvan; az állapot ma: élesítve / engedélyeztetni kell / mentett szöveg; az 5 napos terv 1. napja kitöltött (cél, fájl, ellenőrzés, kivel, vagy „Nincs megadva”), a 2-5. nap előtöltött javaslat, valós adat nélkül (✅/⚠️).
- Kimenet (fájl): [kovetkezo-lepes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/kovetkezo-lepes.md), [ot-napos-terv.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/ot-napos-terv.md).
- Miért fontos (az AI elmondja): A reaktív válaszadóból proaktív segéd akkor lesz, ha van állandó kontextusa, receptje, ellenőrizhető célja, független ellenőre és ütemezése; ezek közül a leírás az ütemezés előfeltétele. Ami nincs napokra bontva, az másnap reggel könnyen elmarad; az 5 napos terv az első hetet viszi.
- Ha nem elérhető: ha az ütemezés vagy az Agent nem érhető el a munkatérben, a leírás mentett feladatszövegként vagy kézi ismétlésként (C forma) marad; a kiesett funkció az ütemezés vagy az Agent, a módszer azonos. Az 5 napos terv funkciót nem igényel: ugyanúgy elkészül.

## 6. lépés / 7 – Sablonok és vállalás mentése (kb. 2 perc, B fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 6. lépés / 7 – Sablonok és vállalás mentése. A mai kimeneteidből sablonokat ment a `Munka/07-Sajat/sablonok/` mappába (agent-brief-sablon, kriteriumok-sablon, reviewer-brief-sablon), a saját feladatodhoz igazítva, és átmásolja a mai reviewer-receptet is (`Munka/05-Reviewer/reviewer/SKILL.md`, ha létezik). Ez rutinlépés, az AI végzi. Majd a [07-vallalas-sablon.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Feladatok/mellekletek/07-vallalas-sablon.md) mezői szerint rögzíti a vállalásodat. A vállalás a profilod „Vállalás” szakasza lesz.
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a sablonokba ne kerüljön valós adat; a másolat legyen, ne mozgatás; a vállalásban a konkrét nap legyen abszolút dátum (2026-11-13, 2026-11-16 vagy 2026-11-19), hiány esetén „Nincs megadva”; az ellenőrző személy a 4. lépés döntése; az első három valódi használatnál a teljes idő mérése a mérési szabály; a `profil.md` „Vállalás” szakaszát bővítsd, a többi mezőt ne módosítsd; ha az első használat napja eltér az 5 napos terv 1. napjától, jelezd, és igazítsd a tervet.
- Mit futtat az AI? Cél: a sablonok és a vállalás rögzítése → Címzett: te és a profilod → Forrás és határ: a mai kimeneteid és a vállalás sablon → Kimeneti séma: három sablonfájl és a reviewer-recept másolata, `vallalas.md`, a profil „Vállalás” szakasza → Szabályok: nincs kitalált dátum vagy ellenőr; a vállalás nem kényszer, hanem saját döntés → Ellenőrzés: minden mező kitöltött vagy „Nincs megadva” → Mentés: `Munka/07-Sajat/sablonok/`, `Munka/07-Sajat/vallalas.md`, `Munka/00-Alapozas/profil.md`. Miért így épül fel: a konkrét nap és a mérés teszi a vállalást ellenőrizhetővé.
- Bekérendő paraméter(ek): Két döntés egy kérdésben: „Mikorra vállalod az első valódi használatot (A: 2026-11-13 · B: 2026-11-16 · C: 2026-11-19 · más: írd le)? Mit mérsz (A: teljes idő · B: hibaszám · C: visszakérdezések)?”
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 6. lépésnél tartunk a 7 lépésből (B fázis); most: sablonok és vállalás mentése; utána: a nap íve és a lépcső; a fázis végén: a nap íve és a lépcső.” A kitöltött vállalást és a sablonok fájlnevét, majd a fenti kérdést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a fájlok léteznek; a dátum abszolút; a profil „Vállalás” szakasza kitöltött (✅/⚠️).
- Kimenet (fájl): [vallalas.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/vallalas.md), [sablonok](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/sablonok/) mappa, [profil.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/00-Alapozas/profil.md).
- Miért fontos (az AI elmondja): Ami nincs időponthoz és mércéhez kötve, az nem vállalás, csak szándék.

## 7. lépés / 7 – A nap íve, a lépcső 30 nap és egy-egy mondat (kb. 4 perc, B fázis, közös)

- Kulcslépés: nem
- Mit csinál az AI: 7. lépés / 7 – A nap íve, a lépcső 30 nap és egy-egy mondat. A tréner kivetíti a [07 notebookot](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/Notebookok/07-sajat-atvitel-notebook.html): a nap térképe nevű vezérelv-ábrát végállapotban (az AI-natív szervezet mind az öt része kigyullad: közös DNS, két szerep, munkafolyamat, kapuk, proaktív segéd), az érettségi szint öt fokának listáját „ma” és „30 nap” helyekkel, és az „Első 30 nap” kártyát. Az öt fok, egy-egy mondattal és számok nélkül (szó szerint a 0. gyakorlat szövege): eseti használat (mindenki a saját promptjaival, alkalmanként); fluens egyének (sokan magabiztosan használják, de külön-külön); megosztott tudás (közös, verziózott alap, amelyből a csapat dolgozik); beágyazott workflow (az AI a folyamat része, kapuval és gazdával); AI-natív működés (a tudás, a szerepek, a kapuk és a segéd együtt a mindennapi működés, mérve és rendszeresen felülvizsgálva). A fokot a csoport jelöli, nem a tréner és nem az AI. Az AI a profil `szint_ma` mezőjét idézi, ha ki van töltve, különben „Nincs megadva”. A csoport egyszer dönt: egy jegyző (a tréner vagy egy önként jelentkező) hangosan kimondja a csoport fokát a következő 30 napra és a gazdát (vagy „Nincs megadva”), a többiek csak megerősítik („igen” vagy a javításuk). Az AI ezután minden résztvevőnél megkérdezi, mit mondott be a jegyző, és egy sorban rögzíti a `vallalas.md` végén. Végül 3-4 önkéntes egy-egy mondatot mond: „Holnap reggel ezt indítom, és tudom, hová lépünk 30 nap alatt.”
- Utasítás, amit az AI végrehajt (belső; a résztvevő nem másolja): a fokokat ne számozd és ne pontozd; a fokot ne te válaszd; a besorolás csoportjelölés, javaslat, nem mérés és nem Oriana-tény; ne mondj piaci számot; a gazdát ne találd ki, hiány esetén „Nincs megadva”; az „Első 30 nap” kártya tervezői javaslat, nem vállalás: ne ígérd, hogy bármi megvalósul; a résztvevők mondatait ne fogalmazd meg helyettük; ha a notebook ábrája nem látszik, a szöveges felirat és az öt fok listája ugyanezt hordozza.
- Mit futtat az AI? Cél: a nap ívének kimondása és a 30 napos irány rögzítése → Címzett: a csoport és te → Forrás és határ: a 07 notebook, a profil `szint_ma` mezője és a `vallalas.md`; más forrás nincs → Kimeneti séma: egy sor a `vallalas.md` végén (fok 30 napra, gazda), 3-4 szóbeli mondat → Szabályok: számok nélkül; a csoport jelöl; javaslat nem döntés; hiány „Nincs megadva” → Ellenőrzés: a sor megvan, a gazda megnevezett vagy „Nincs megadva” → Mentés: `Munka/07-Sajat/vallalas.md` (egy sor). Miért így épül fel: aki látja, honnan hová jutott, és ki viszi tovább, az másnap reggel is tudja, mit indít.
- Bekérendő paraméter(ek): Egy döntés (a csoporté, egyszer; a jegyző mondja be, a többiek megerősítik): „Mit mondott be a jegyző: melyik fokra lép a csoport a következő 30 napban, és ki a gazdája? A: eggyel feljebb a ma jelölt foknál (a fok neve), gazda: név vagy szerepkör · B: a ma jelölt fokot megerősítjük, gazda: név vagy szerepkör · C: még nem döntünk, Nincs megadva · más: írd le.” A saját mondatod nem döntés.
- Mit mutat meg és mit kérdez a résztvevőtől: **Tájékozódás:** „A 7. lépésnél tartunk a 7 lépésből (B fázis); most: a nap íve és a lépcső; utána: a gyakorlat zárása; a fázis végén: a gyakorlat zárása.” A vetített térképet, az öt fokot „ma” és „30 nap” jelöléssel és az „Első 30 nap” kártyát, majd a fenti kérdést.
- Ellenőrzés: **Mitől jó és validált?** Elfogadási kritérium és bizonyíték: a csoport megnevezett egy fokot a következő 30 napra és egy gazdát (vagy „Nincs megadva”); a sor megvan a [vallalas.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/vallalas.md) fájlban; a 3-4 mondat a résztvevők saját szava (✅/⚠️).
- Kimenet (fájl): [vallalas.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/vallalas.md) (egy új sor a végén).
- Miért fontos (az AI elmondja): A nap célja nem az volt, hogy mindent megtanulj, hanem hogy holnaptól egy konkrét saját feladatnál használd, és tudd, merre lépünk tovább; az AI-natív irány, nem státusz.

# Elakadás

- **Nincs rögzített feladat a profilban:** az AI egyszer kérdez opciókkal (A: egy visszatérő jelentés vagy összefoglaló · B: egy ellenőrzési feladat · C: egy ajánlat vagy dokumentum előkészítése · más: írd le).
- **Valós Oriana-adat, ügyféladat vagy jelszó kerülne a beszélgetésbe:** az AI megállítja, nem használja és nem menti; a brief csak a forrás nevét és helyét tartalmazza, a tartalmat nem.
- **A feladat túl nagy a hátralévő időhöz:** az AI a legkisebb, ma befejezhető részt javasolja; a többit nyitott tételként a briefbe veszi.
- **Nincs ütemezés vagy Agent a munkatérben:** a következő lépés mentett feladatszöveg vagy kézi ismétlés; a kiesett funkció megnevezett.
- **Nincs Local vagy Cloud futás:** a brief és a sablonok akkor is elkészülnek; a futás későbbi feladat.
- **Nem fut kód:** a briefellenőrzés kézi ellenőrzőlapon készül, a kódos cél nem teljesültként jelölt.
- **Időhiány:** a 4. lépés (ellenőr), a 6. lépés (vállalás) és a 7. lépés íve védett; a gépi ellenőrzés (3. lépés) kézi ellenőrzőlapra cserélhető; a 7. lépésben az önkéntes mondatok maradnak el, az ív és a 30 napos fok nem.
- **A csoport nem ért egyet a fokban:** az AI nem dönt; a „ma” és a „30 nap” jelölés csoportjavaslat, nem mérés; ha nincs egyetértés, a sor „Nincs megadva”, és a tréner kimondja, hogy ez is információ.
- **Az ábra nem látszik a vetítésen:** a notebook szöveges felirata és az öt fok listája ugyanazt mondja; a tréner abból halad.
- **Az 5 napos terv valós ügyféladatot kérne:** az AI megállítja; a tervbe csak a forrás neve és helye kerül, a tartalma nem.

# Ellenőrzés a végén

Az AI önellenőrző listája; ✅/⚠️ jelöléssel, linkekkel közli, ⚠️ esetén egy mondatban írja le, mit javít.

- Az [agent-brief.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/agent-brief.md) hét pontja megvan; a kimenet, a korlát és az ellenőrzés külön látszik; a körszám és a stop-szabály számmal szerepel; a DNS-verzió szerepel vagy „Nincs megadva”.
- A [kovetkezo-lepes.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/kovetkezo-lepes.md) tartalmazza az inputot, az outputot, a kritériumot és az írási határt; az állapot ma őszinte (nem élesített, ha nem élesítettük).
- Az [ot-napos-terv.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/ot-napos-terv.md) mind az öt napot tartalmazza (az 1. nap kitöltve, a 2-5. nap előtöltött javaslatként, házi feladat; cél, fájl, ellenőrzés, kivel, vagy „Nincs megadva”), valós adat nélkül.
- A [sablonok](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/sablonok/) mappában három sablon van (és a reviewer-recept másolata, ha létezik), valós adat nélkül.
- A [vallalas.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/07-Sajat/vallalas.md) konkrét abszolút dátumot, ellenőrző személyt és mércét tartalmaz (vagy „Nincs megadva”); a profil „Vállalás” szakasza kitöltött; a fájl végén egy sor rögzíti a csoport 30 napos fokát és gazdáját (vagy „Nincs megadva”).
- A fiktív jelölés a sablonokon megvan; a valós adat a saját gépen marad; a javaslat nem döntés; a hiány „Nincs megadva”; a Tananyag érintetlen.
- Nem szerepel ígéret ütemezésre vagy Agent létrehozására, amelyet nem végeztünk el.

# Zárás – mit tanultunk

Az AI összefoglal 5-8 sorban: mi készült (linkekkel: a brief, a következő lépés, az 5 napos terv, a sablonok, a vállalás); a hat lépés hol jelent meg (Cél a briefben, Forrás a forráslistában, Utasítás a briefben, Ellenőrzés a gépi és független ellenőrzésben, Javítás a körkeretben, Rögzítés a sablonokban és a vállalásban); melyik proaktív elem épült be (állandó kontextus a DNS-hivatkozással, recept a sablonokban, ellenőrizhető cél, független ellenőr, a következő lépés leírása ütemezésre vagy Agentre, ha elérhető, és az 5 napos terv); és mi vihető át. Ezután a nap zárógondolatait a saját szavaival, számok nélkül mondja el:

- Három dolgot vigyél haza: egy folyamatot, amelyet újratervezel; egy kaput, amely az AI munkáját ellenőrzi; és egy szabályt, amelyet leírtál, gazdával és forrással.
- Az AI-natív nem státusz, hanem működés: közös, verziózott tudás, gazda, mérés és rendszeres felülvizsgálat. A mai nap ennek az iránynak egy szelete volt, nem az eredmény.
- Az első 30 napban: egy kis kör (champion-kör), amely kipróbálja és továbbadja; egy lista arról, mit szabad kipróbálni és mit kell továbbvinni döntésre; három recept; az első mérőszámok (átfutási idő, első körös elfogadási arány, újramunka). Ez tervezői javaslat, nem vállalás.
- A 90. napnál a csapat dönt: mi marad, mit állítunk le, és mi lehet a következő segéd (ha a munkatérben elérhető).
- A kérdés mindenkinek: „Ki a gazdája ennek a folyamatnak, és hogyan tudjuk meg, hogy jó?”

Utána egyszer felteszi a „Vidd haza” kérdést: „Melyik saját feladatodon próbálnád ki ugyanezt? A: a profilodban rögzített feladat: <feladat> · B: egy másik visszatérő feladat · C: más: írd le.”

# Vidd haza

- **BA (üzleti elemző):** egy felmérési csomag vagy FDD-egység (funkcionális tervdokumentum) ellenőrzése saját briefből és kritériumlistából, a mai reviewer-recepttel; a következő nagy anyagnál ugyanez, sablonból.
- **Sales-Account:** egy megújítási ajánlat előkészítése saját briefből, forrás-ellenőrző listával és pénznemenként újraszámolt kalkulációval; a vállalás és a kérés elkülönítése a sablonban.
- **Közös:** bármely visszatérő feladat: egy oldalas brief, mérhető kritériumok, kimondott stop-szabály, független ellenőr és egy konkrét nap, amikor először használod.
- **Másnap reggel: a hét elem.** Pipáld ki, megvan-e mind: (1) a saját agent-brief (`Munka/07-Sajat/agent-brief.md`); (2) a reviewer-recept és a kritériumsablon (`Munka/05-Reviewer/`, `Munka/07-Sajat/sablonok/`); (3) a DNS v0.1 modul, README-vel (`Munka/01-DNS/dns/`); (4) a naplósor és az átadási sablon (`Munka/04-Agent/naplo.md`, `kapu-I/atadas.md`, ha a sávodban készült); (5) a következő lépés leírása (`Munka/07-Sajat/kovetkezo-lepes.md`); (6) az 5 napos gyakorló terv (`Munka/07-Sajat/ot-napos-terv.md`); (7) az „Első 30 nap” javaslat a 7. notebookban. Valós ügyféladat a sablonokba nem kerül, csak a forrás neve és helye.

Résztvevői döntések száma ebben a gyakorlatban: 7 (a feladat, a futtatási mód, az ellenőrző személy, a következő lépés formája, az első használat napja, a mérce, a csoport 30 napos foka és gazdája). A saját brief, a saját leírás, az 5 napos terv sorai, az egy-egy mondat és a tipp-létra kérései nem döntések.

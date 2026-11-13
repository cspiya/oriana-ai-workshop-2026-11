# Notebookok (órai vonalvezetők)

Blokkonként egy rövid, offline HTML-itiner a 2026.11.12-i workshophoz. A notebook végigvezet a gyakorlaton: megmutatja, hol tartasz a napban és a gyakorlaton belül, mi a cél, honnan hová jutsz, lépésenként mit csinálsz, mit kapsz és mitől kész, végül mit vihetsz haza. A lépésenkénti vezetést a `Feladatok` mappa forgatókönyvei adják; a notebook azokat nem ismétli, csak a résztvevői tennivalót mutatja.

| Gyakorlat | Idő | Fájl | Fejezet-ábra |
|---|---|---|---|
| 0 | 09:00 | `00-halado-setup-notebook.html` | a nap térképe (Á1) és az érettségi lépcső (Á2) |
| 1 | 09:40 | `01-dns-notebook.html` | a DNS felépítése: öt réteg, egy alap, két szerep |
| Ügyfélprofil promptokkal | 10:15 | `uc1-ugyfelprofil-notebook.html` | a négy prompt lánca ugyanabban a beszélgetésben (mozgó ábra) |
| 4 | 11:25 | `04-rondo-agent-notebook.html` | az agentfutás íve: brief → ebéd alatti futás → átvétel → javítás; BA és Sales-Account sáv |
| 5 | 13:25 | `05-rondo-reviewer-notebook.html` | maker–reviewer hurok: R1, R2, stop-döntés (Á4) |
| 6b (BA-szekció) | 15:10 | `06b-ba-utotag-notebook.html` | három BA-recept: dokumentum, drótváz, dokumentáció kódból |
| Ügyfélprofil agent (Sales-Account szekció) | 15:10 | `uc2-ugyfelprofil-agent-notebook.html` | a három helyszín közti út az ügynök beállításáig (mozgó ábra) |
| 7 | 16:05 | `07-sajat-atvitel-notebook.html` | a nap térképe a végén (Á1) és a lépcső 30 napra (Á2) |
| Projekt-szabályrendszer promptokkal | 45 perc, időpont nélkül | `uc3-szabalyrendszer-notebook.html` | három mozgó ábra: így áll össze a szabálygyűjtemény; így dolgozik utána (három szerep, három kapu); projektszabály vagy céges DNS |

15:10-16:05 között két szekció dolgozik párhuzamosan: a BA-szekció a 6b gyakorlaton (vezeti: Piya Csaba), a Sales-Account szekció az Ügyfélprofil agenten (vezeti: Kemény Krisztián). A két Ügyfélprofil-blokkhoz nincs forgatókönyv: az oldal vezet, másolható promptokkal. Szünetek: 11:15-11:25, 12:30-13:15 (ebéd), 14:35-14:50.

Kiegészítő gyakorlatok: nincsenek a napi időrendben, de a tananyag részei, és ugyanúgy indíthatók („Kezdjük az N. gyakorlatot”).

| Gyakorlat | Idő | Fájl | Fejezet-ábra |
|---|---|---|---|
| 2 | 30 perc | `02-portal-notebook.html` | portál API nélkül: kézi út vagy böngésző-agent, dry run → alkalmazás → visszaolvasás |
| 3 | 25 perc | `03-kozos-munka-notebook.html` | megosztási jogok mátrixa, app-kapcsolat, csapatfeladat, hozzáférési szabály |
| 6 | 25 + 30 perc | `06-sites-notebook.html` | ügykövető: adat → app → jogosultság → megosztás |

## Szerkezet (design system v2)

Minden notebook ugyanazt a vázat követi, felülről lefelé:

1. **Felső napi navigáció:** a nap blokkjai menüként, az aktuális kiemelve a sáv színével (közös: indigó, BA: égkék, Sales-Account: bíbor, párhuzamos: kétszínű), ◀ ▶ lépkedő a szomszédos blokkra, téma-váltó (világos az alap; sötét; rendszer szerint).
2. **Session-fejléc:** Cél egy mondatban · Mit gyakorolunk (csipszek a lépéscsoportok színével) · Honnan → hová (kiinduló állapot és a mentett kimenetek) · Miért fontos.
3. **Így indítsd:** az indító mondat(ok) a Work-beszélgetésbe; maker/reviewer módban a fix indítók („RONDO 04 maker”, „RONDO 05 reviewer R1” stb.).
4. **A fejezet ábrája:** fejezetenként más, a fejezet fogalmára; a részei kattinthatók (meghatározás, hol készül).
5. **A gyakorlat lépései:** bal oldalt függőleges haladási vonal (állomások, „Hol tartok: n/N lépés”, Kész: n/N, Vissza/Előre), a görgetéssel szinkronban; jobb oldalt a lépések színes fejlécű szakaszai a fázis csoportszínével: **Mit csinálsz** (igékkel, 1–3 pont) · **Mit kapsz** · **Kész, ha …** · kiemelő dobozok (Jegyezd meg · Figyelj · Tipp · tipp-létra) · Ha nem elérhető · Miért fontos; minden lépés pipálható (a pipa csak ebben a böngészőben marad meg). Szünet (pl. ebéd, amíg az agent fut) külön kártya, nem lépés.
6. **Mitől jó az eredmény:** ellenőrzőlista és a négy szempont (forrás-visszakeresés, gépi ellenőrzés, független ellenőr, ismétlés és megállás).
7. **Ha elakadsz:** elakadás-doboz, segítség bármikor, B-terv.
8. **Vidd haza** és a **Következő** blokk kártyája.

Megnyitás: dupla kattintás a fájlra, böngészőben, internet nélkül. A közös stílus, a napi térkép és a lépésvezető a `../_assets/wenova.css` és `wenova.js`, az ábrák a `wenova-abrak.js` fájlban vannak; a sablon új notebookhoz: `../_assets/notebook-template.html`. Vetítéshez URL-kapcsolók: `?tema=dark` (sötét) és `?anim=nincs` (az ábrák azonnal végállapotban).

## Előadás-jegyzet

`chatgpt-terkep.html`: ChatGPT Business térkép a nap elejére: Chat és Work, Work Local és Cloud, felületek, modellek; projekt, skill, plugin, kapcsolat, agent, Sites, Space; csapatmunka, a közös DNS gazdája és frissítése (két másolható prompttal); token és keret, mért fogyasztási adatokkal.

## Esettanulmány

`esettanulmany-kovetelmenyek.html`: nagy követelményanyagból követhető specifikáció. Egy bediktált kérdés útja a profi kutatási megbízásig, majd ugyanaz a megbízás két modellnek; a ChatGPT és a Claude működő bemutatója egymás mellett, összehasonlító elemzéssel. A fájlok: `07 usecase Kovetelmenykovetes/`.

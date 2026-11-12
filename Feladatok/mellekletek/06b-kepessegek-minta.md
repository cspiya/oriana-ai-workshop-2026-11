**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le. A lista vezérlői és korlátai kitaláltak: **ez NEM az Effector 8.1 és nem más valós eszköz leírása.**

# Képességlista minta: milyen vezérlőkből épülhet a képernyő

A 6b gyakorlat B fázisa használja. A minta azt mutatja meg, **milyen formában** adj az asszisztensnek listát arról, mit tud az eszköz, amelyben a képernyő megépül. A tartalma kitalált.

## Mire való

A képernyőterv csak akkor használható, ha olyan elemekből áll, amelyeket az eszköz ismer. Az asszisztens ezt magától nem tudja: a képességlista ugyanolyan forrás, mint az FDD-fejezet (FDD: funkcionális tervdokumentum). A kérésedben ezt mondod ki: csak a listán szereplő vezérlőt használhatja; ami nincs a listán, azt „Nincs megadva” jelöléssel, nyitott kérdésként hozza.

## Amit a tananyag nem tud

- A valódi eszköz (az Oriana igénylistájában: az Effector 8.1) képességeit a tananyag nem ismeri, és nem állít róluk semmit.
- A valódi listát az Oriana adja: a saját munkádban ennek a fájlnak a helyére a saját, ellenőrzött képességlistád kerül, a forrás megjelölésével (ki adta, melyik verzióra érvényes, mikor).
- Ha a saját listádban valami nem szerepel, az nem azt jelenti, hogy az eszköz nem tudja: azt jelenti, hogy „Nincs megadva”, és a lista gazdájától kérdezendő.

## 1. Vezérlők (fiktív)

| Azonosító | Vezérlő | Mire használható | Megjegyzés |
|---|---|---|---|
| V-01 | Egysoros szövegmező | rövid szöveg | hosszkorlát megadható |
| V-02 | Többsoros szövegmező | hosszabb szöveg, indoklás | |
| V-03 | Számmező | szám | alsó határ megadható |
| V-04 | Dátumválasztó | dátum | |
| V-05 | Legördülő lista | felsorolás, egy érték választható | az elemek a megadott értékkészletből jönnek |
| V-06 | Jelölőnégyzet | igen / nem | |
| V-07 | Csak olvasható mező | megjelenített, nem szerkeszthető érték | bármely fenti típus megjeleníthető így |
| V-08 | Gomb | művelet indítása | lehet aktív vagy inaktív |
| V-09 | Táblázatos lista | több sor megjelenítése | csak megjelenítés, a sor nem szerkeszthető |
| V-10 | Lapfül | az űrlap tagolása | |

## 2. Korlátok (fiktív)

| Azonosító | Korlát |
|---|---|
| KO-01 | Egy űrlapon a mezők legfeljebb két oszlopban állhatnak. |
| KO-02 | A legördülő listából egyszerre egy érték választható; több érték választására nincs vezérlő. |
| KO-03 | A feltételtől függő kötelezőség nem jelölhető magán a mezőn; a szabály a mező alatt, szövegként szerepel. |
| KO-04 | Egy gomb aktivitása egyetlen mező értékéhez köthető. |

## 3. Így add meg a saját listádat

| Mező | Érték |
|---|---|
| Eszköz és verzió | `<…>` |
| A lista forrása (ki adta, melyik dokumentum) | `<…>` |
| Érvényesség dátuma | `<ÉÉÉÉ-HH-NN>` |
| Gazda (aki a lista módosításáról dönt) | `<név vagy Nincs megadva>` |

A vezérlők és a korlátok táblája a fenti két tábla formáját követi: azonosító, megnevezés, mire használható, megjegyzés. Az azonosító azért kell, hogy a drótváz megfeleltetési táblájában minden mező mellett visszakereshető legyen, melyik vezérlőt választotta az asszisztens.

## 4. Hogyan használja a kérés

- **Forrás és határ:** a mezők az FDD-fejezetből, a vezérlők és korlátok ebből a listából jönnek; más vezérlő nem használható.
- **Kimenet:** a drótváz mellett megfeleltetési tábla: `Mező | Típus a fejezetben | Választott vezérlő (azonosító) | Érintett korlát | Megjegyzés`.
- **Hiány:** ha a fejezet olyat kér, amire a listán nincs vezérlő, vagy korlátba ütközik, az asszisztens nem talál ki megoldást: a sorba „Nincs megadva” kerül, és a tétel nyitott kérdés. A döntés a fejezet szerzőjéé és a lista gazdájáé.
- **Ellenőrzés:** minden használt vezérlő azonosítója szerepel-e a listán; a választólisták elemei egyeznek-e a fejezet értékkészletével.

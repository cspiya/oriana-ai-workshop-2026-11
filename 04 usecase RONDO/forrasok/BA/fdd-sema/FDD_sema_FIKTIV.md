> FIKTÍV OKTATÁSI MINTA: az Effector 8.1 és az ODM itt csak általános, fiktív jelöléssel szerepel. Konkrét termékképességet ez a séma nem állít.

# FDD-séma (fiktív): egy funkcióblokk leírása

**Verzió:** v1, 2026-11-10
**Használat:** a séma egy FDD-egység (funkcióblokk) kitöltési váza. Minden fejezetet ki kell tölteni; ahol a forrás nem ad adatot, az érték `Nincs megadva`, és a hiány a 10. fejezetben nyitott kérdésként szerepel.

## Alapszabályok

1. **Egy egység = egy funkcióblokk.** Legfeljebb 3-5 funkció (FN-01...FN-05) tartozik hozzá.
2. **Önállóan értelmezhető.** Az egység nem hivatkozik más dokumentumra. A szükséges szöveget beépíti; a forrást lábjegyzetben vagy az 1. fejezet forráslistájában adja meg. Az egyetlen megengedett belső hivatkozás a saját szószedet (1.4).
3. **Forráshely mindenhol.** Minden állításnál megadandó a forrás: fájl és hely (fejezet, sor vagy cella).
4. **Javaslat nem döntés.** A döntésre váró pontot nem választjuk el; a 10. fejezetben nyitva marad.
5. **Azonosítók.** Az egység `FDD-<TERÜLET>-NN`; a funkció `FN-NN`; az igény a forrás szerinti `R-NN`; fit-gap sor `FG-NN`; nyitott kérdés `NK-NN`; adatmező `AD-NN`; elem a BPMN-táblában `E..` és `F..`.

## 1. Azonosítás és státusz

| Mező | Érték |
|---|---|
| FDD-ID | `FDD-<TERÜLET>-NN` |
| Cím | `<az egység címe>` |
| Verzió és dátum | `<v1, ÉÉÉÉ-HH-NN>` |
| Státusz | `<vázlat / ellenőrzésre kész / lezárt>` |
| Érintett igények | `<R-NN, R-NN>` |
| Készítő | `<név vagy Nincs megadva>` |

**1.1 Cél.** `<2-3 mondat: mit old meg az egység>`

**1.2 Forráslista.** Tábla: `Forrás-ID | Fájl | Dátum | Verzió | Használt hely`.

**1.3 Hatókör.** `<mi tartozik az egységhez, mi nem>`

**1.4 Szószedet.** Tábla: `Fogalom | Meghatározás`. Minden, az egységben használt szakszó és rövidítés ide kerül, hogy az egység más dokumentum nélkül is érthető legyen.

## 2. Csoportosítás

A felmérési anyag információit témakörök szerint csoportosítjuk.

| Csoport | Információ | Forrás és hely | Igény (R-NN) |
|---|---|---|---|
| `<csoport>` | `<információ>` | `<fájl, hely>` | `<R-NN>` |

Szabály: egy információ egy csoportba kerül; az ellentmondó információkat mindkét forrással együtt rögzítjük.

## 3. Elképzelés

A teljes elképzelés rövid leképezése: hogyan működik a kívánt megoldás, a szereplők, a lépések és a határai szerint. `<legfeljebb egy oldal>`

Szabály: az elképzelésben csak forrással alátámasztott elem szerepelhet; a hiányzó részek `Nincs megadva` jelöléssel és a 10. fejezetre mutató nyitott kérdéssel szerepelnek.

## 4. Fit-gap

| FG-ID | Igény (R-NN) | Fiktív általános alapképesség | Eltérés (gap) | Döntés |
|---|---|---|---|---|
| `FG-NN` | `<R-NN>` | `<a fiktív, általános alapképesség leírása>` | `<mi hiányzik vagy tér el>` | `<döntés vagy NK-NN>` |

Az alapképesség ebben a sémában fiktív és általános. Konkrét termék (például az Effector 8.1) képességét forrás nélkül nem állítjuk: amit forrás nem támaszt alá, az a megrendelőtől kérdezendő.

## 5. Funkciók

Funkciónként egy blokk (3-5 funkció):

**FN-NN: `<funkció neve>`**

| Mező | Érték |
|---|---|
| Szereplő | `<szerepkör>` |
| Előfeltétel | `<állapot, amelynek fenn kell állnia>` |
| Forráshely | `<fájl, hely>` |
| Igény | `<R-NN>` |

- **Given:** `<kiindulási helyzet>`
- **When:** `<esemény vagy művelet>`
- **Then:** `<elvárt eredmény, mérhetően>`

Szabály: minden funkcióhoz van Given/When/Then és forráshely (100%).

## 6. Adatok és értékkészletek

| AD-ID | Mező | Típus | Kötelező | Értékkészlet | Forráshely |
|---|---|---|---|---|---|
| `AD-NN` | `<mező neve>` | `<szöveg / szám / dátum / felsorolás>` | `<igen / nem>` | `<felsorolt értékek, vagy Nincs megadva>` | `<fájl, hely>` |

Szabály: minden felsorolás típusú mezőhöz teljes értékkészlet tartozik; ha a forrás nem adja meg, `Nincs megadva`, és a hiány a 10. fejezetben nyitott kérdés.

## 7. Folyamat (BPMN-elemtábla)

| Elem-ID | Típus | Név | Forrás | Cél | Szerepkör | Feltétel |
|---|---|---|---|---|---|---|
| `E01` | `startEvent` | `<név>` | | | `<szerepkör>` | |
| `F01` | `sequenceFlow` | `<név>` | `E01` | `E02` | | `<feltétel>` |

Szerkezeti szabályok (gépileg ellenőrizhetők, 0 hiba az elvárás):

1. Az elem-ID egyedi.
2. Minden `sequenceFlow` forrása és célja létező elem-ID.
3. Minden `exclusiveGateway`-nek legalább két kimenete van, és az egyik kimenet alapág (a feltétel mezőben: `alapág: ...`).
4. Minden `userTask` szerepkörrel rendelkezik.

## 8. Önellenőrzés az üzleti követelményekhez

| Igény (R-NN) | Lefedettség | Hol (FN-NN, fejezet) | Megjegyzés |
|---|---|---|---|
| `<R-NN>` | `<lefedve / részben / más egységben / nyitott>` | `<FN-NN>` | `<indok>` |

Szabály: a forrásban szereplő minden igény (R-01...R-08) szerepel a táblában, kihagyás nélkül; az azonosítók egyeznek a forrás azonosítóival. A „más egységben” lefedettség megjelöli, hogy melyik egységről van szó, és az ok szerepel a megjegyzésben.

## 9. Igazodás korábbi funkcióhoz és adatszerkezethez

**9.1 Igazodás egy fiktív, korábbi funkcióhoz.** `<a fiktív korábbi funkció neve és rövid leírása; mi egyezik, mi tér el>`

**9.2 Igazodás egy fiktív, általános, ODM-szerű adatszerkezethez.** Tábla: `AD-ID | Az egység mezője | Fiktív általános adatszerkezet-elem | Eltérés`.

Az Effector 8.1 és az ODM konkrét képességei ebben a sémában nem szerepelnek, mert forrás nem igazolja őket. Az eltérés vagy bizonytalanság a 10. fejezetben nyitott kérdés.

## 10. Nyitott kérdések és döntések

| NK-ID | Kérdés | Kinek szól | Forráshely | Állapot (nyitott / eldöntött) | Döntés és dátum |
|---|---|---|---|---|---|
| `NK-NN` | `<kérdés>` | `<kinek>` | `<fájl, hely>` | `<állapot>` | `<csak ha a forrás dönt>` |

Szabály: a hiányzó anyagok, az ellentmondások és a döntésre váró pontok mind itt szerepelnek. A forrásokban nyitva hagyott kérdést az egység nem dönti el.

## 11. Képernyők

Képernyőnként egy blokk:

**SC-NN: `<képernyő neve>`**

| Mező | Érték |
|---|---|
| Funkció | `<FN-NN>` |
| Képernyőelemek | `<általános elemek: űrlap, lista, gomb, szűrő>` |
| Érintett mezők | `<AD-NN>` |

A képernyőelemek általánosak és fiktívek; nem egy konkrét termék (például az Effector 8.1) felületét írják le.

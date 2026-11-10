**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Specifikációrészlet – Beszerzési igény jóváhagyási workflow

**Dokumentum:** Funkcionális specifikáció, 4.2 fejezet – Kétszintű jóváhagyás
**Verzió:** v2.3
**Dátum:** 2026-07-30
**Készítette:** Kende Bertalan (BA)
**Jóváhagyta:** Vadász Kornélia (Support Technical Lead)
**Hatály:** standard beszerzési modul, minden ügyfélpéldány

## 4.2.1 Cél

A beszerzési igény jóváhagyása értékhatártól függően egy- vagy kétszintű. A második jóváhagyó lépés célja, hogy a magasabb értékű beszerzéseknél a pénzügyi kontroll is megtörténjen a rendelés indítása előtt.

## 4.2.2 Szabály

1. Minden beszerzési igény az első jóváhagyóhoz (a költséghely vezetője) kerül.
2. Ha az igény **nettó** értéke meghaladja a második jóváhagyási küszöböt, a rendszer automatikusan létrehozza a második jóváhagyó lépést, amelyet a pénzügyi jóváhagyói szerepkörrel rendelkező felhasználó zár le.
3. A második jóváhagyás nélkül az igény nem kerülhet "Jóváhagyva" státuszba, és nem indítható belőle rendelés.
4. A küszöb alatti igény az első jóváhagyás után "Jóváhagyva" státuszba kerül.

## 4.2.3 Paraméterezés

| Paraméter | Alapérték | Leírás |
|---|---|---|
| APPROVAL_THRESHOLD_2 | **3 000 000** | A második jóváhagyó lépés küszöbértéke HUF-ban, nettó értékre vetítve. **Ügyfelenként konfigurálható**, az ügyfélpéldány adminisztrációs felületén állítható. |
| APPROVAL_ROLE_2 | FIN_APPROVER | A második jóváhagyó szerepkör azonosítója. |

## 4.2.4 Az összehasonlítás alapja

- A küszöbvizsgálat az igény **nettó** összértékére történik (az igény tételeinek nettó értékösszege, kedvezmény után).
- A bruttó érték és a szállítási költség a küszöbvizsgálatban nem vesz részt.
- A küszöbvizsgálat az igény jóváhagyásra küldésekor fut; a jóváhagyási folyamat közben módosított tételek esetén az igény visszakerül a "Szerkesztés alatt" státuszba, és a vizsgálat újra lefut.

## 4.2.5 Devizás igény

Ha az igény pénzneme nem HUF, a küszöbvizsgálathoz az igény nettó értékét a rendszer HUF-ra váltja **a mindenkori beállított árfolyammal**. Az árfolyam forrása és karbantartása a rendszeradminisztrációs fejezetben kerül leírásra.

## 4.2.6 Naplózás

A küszöbvizsgálat eredményét (vizsgált érték, alkalmazott küszöb, alkalmazott árfolyam, létrejött-e második lépés) a rendszer az igény eseménynaplójába írja.

## Verziónapló

| Verzió | Dátum | Módosítás | Szerző |
|---|---|---|---|
| v2.1 | 2026-03-12 | Naplózási követelmények (4.2.6) hozzáadása | Kende Bertalan |
| v2.2 | 2026-05-20 | Devizás igény kezelése (4.2.5) hozzáadása; **APPROVAL_THRESHOLD_2 alapérték: 5 000 000** | Kende Bertalan |
| v2.3 | 2026-07-30 | **APPROVAL_THRESHOLD_2 alapérték módosítása 5 000 000-ról 3 000 000-ra** a termékmenedzsment döntése alapján (PM-2026-041). A már telepített ügyfélpéldányok beállítását a módosítás nem írja felül automatikusan. | Kende Bertalan |

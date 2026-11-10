---
name: onallo-dokumentum
description: Keresztreferencia-csökkentő recept. Egy dokumentumot önállóan szállíthatóvá tesz úgy, hogy a belső hivatkozások helyére a szükséges szöveget építi be, a forrást lábjegyzetben adja meg, és hivatkozásleltárral méri a változást. FIKTÍV OKTATÁSI MINTA.
---

**FIKTÍV OKTATÁSI MINTA** · a példák kitaláltak.

# Önállóan szállítható dokumentum

A recept célja, hogy a dokumentum egy másik dokumentum nélkül is érthető legyen: ne tartalmazzon feloldatlan keresztreferenciát („lásd a 4.2.2 pontot”, „a fent említett táblázat”, „az előző fejezetben”). A recept szerkezete a `05 usecase Skill keszites` mappa mintáját követi: névvel és leírással induló fejléc, majd rövid, szabályos fejezetek.

## Mikor használd

- Egy FDD-egység vagy más dokumentum bekezdését kell továbbadni úgy, hogy az olvasó nem látja a forrásdokumentumot.
- A kérés: „csökkentsd a keresztreferenciákat”, „tedd önállóan szállíthatóvá”.

## Menet

1. **Hivatkozásleltár előtte.** Futtass determinisztikus számlálót a bemeneten (lásd lent). Rögzítsd a számot és a találatok helyét.
2. **Átírás.** Minden feloldatlan belső hivatkozás helyére építsd be a szükséges szöveget a forrásból. A tartalmat ne bővítsd, ne értelmezd át, és ne hagyj el olyan feltételt vagy kivételt, amely a hivatkozott helyen szerepel.
3. **Forrás.** A beépített szöveg forrását lábjegyzetben add meg: fájl és hely. A lábjegyzet a forrás megjelölése, nem feloldatlan hivatkozás.
4. **Hivatkozásleltár utána.** Futtasd ugyanazt a számlálót az eredményen. A feloldatlan hivatkozások száma csökkent-e? Mi maradt, és miért?
5. **Jelentésmegőrzés.** Ellenőrizd, hogy a beépített szöveg a forrással egyezik-e (szó szerint vagy tartalmilag, a változás jelölésével).
6. **Önállóság-próba friss chatben.** Egy új beszélgetésben csak az átírt szöveget add oda, és kérdezd meg: érthető-e más dokumentum nélkül? Mit hiányol?

## Determinisztikus számláló

A számláló a következő mintákat számolja a szövegben (a mintákat a feladathoz igazíthatod):

- „lásd” / „ld.” / „lásd még” kifejezések után álló hivatkozás;
- „fent említett”, „fentebb”, „lentebb”, „az előző” / „a következő” + fejezet, pont, táblázat, ábra;
- számozott pontra utaló szerkezet („a 4.2.2 pont”, „a 3. fejezet”);
- Markdown-hivatkozás, amely a dokumentumon kívüli vagy belső fájlra mutat.

Egyszerű, futtatható minta (Python):

```python
import re, sys
MINTAK = [
    r"\b(?:lásd|ld\.)\s+(?:még\s+)?(?!az?\s+(?:előző|következő)\b)[^.;,\n]{0,60}",
    r"\b(?:fent|fentebb|lentebb)\s+(?:említett|leírt|szereplő)\b",
    r"\baz?\s+(?:előző|következő)\s+(?:fejezet|pont|táblázat|ábra)",
    r"\baz?\s+\d+(?:\.\d+)*\.?\s*(?:pont|fejezet|szakasz)\w*",
    r"\]\((?!https?://)[^)]+\)",
]
szoveg = open(sys.argv[1], encoding="utf-8").read()
osszes = 0
for minta in MINTAK:
    talalatok = re.findall(minta, szoveg, flags=re.IGNORECASE)
    osszes += len(talalatok)
    print(minta, len(talalatok))
print("ÖSSZESEN:", osszes)
```

Ha a környezetben nem fut kód, a számlálás kézzel történik, és ezt a jelentés kimondja. A számláló tájékoztató mérőszám: a felismerhető mintákat méri, az átfedő mintákat külön számolhatja, és nem bizonyítja, hogy minden hivatkozás megszűnt; a maradék hivatkozásokat kézzel is nézd át.

## Kimenet

- Az átírt szöveg, a lábjegyzetekkel.
- Az `ellenorzes.md`: előtte és utána szám, a változtatások listája (honnan, mit építettél be), forráshely, jelentésmegőrzési megjegyzés, a friss chatben kapott kérdések.

## Határok

- Nem találsz ki forrást és nem pótolsz hiányzó szöveget; ahol a hivatkozott hely nem áll rendelkezésre, a hely mellett jelzed: „Nincs megadva”.
- Nem módosítod a forrásdokumentumot.
- Az átírás javaslat; a jóváhagyás a szerzőé.

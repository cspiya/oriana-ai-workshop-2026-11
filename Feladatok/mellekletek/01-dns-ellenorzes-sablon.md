# DNS-ellenőrzés sablon

Az 1. gyakorlat 5. lépése használja ezt a kitöltendő sablont, és a `Munka/01-DNS/ellenorzes.md` fájlt hozza létre belőle. Az ellenőrzést nem a modul szerzője végzi: a másik csoport (vagy, ha ez nem megoldható, egy másik, a modult nem író résztvevő) keres vissza egy állítást a forrásig. A DNS első említésekor: DNS (vállalati tudás) = a vállalat bemutatását, terméktudását, döntési szabályait és forrásait összefogó, verziózott tudáscsomag. Hiányzó adat: `Nincs megadva`. A `<…>` helyőrzőket kitöltéskor le kell cserélni; ez a bevezető bekezdés a kész fájlból törlendő.

# DNS-ellenőrzés

## Az ellenőrzött kiadás

| Mező | Érték |
|---|---|
| DNS-modul (fájl) | <például termek.md> |
| Verzió | <például 0.1> |
| Gazda | <név vagy Nincs megadva> |
| Státusz | <például jóváhagyásra vár> |
| Ellenőrzés dátuma | <ÉÉÉÉ-HH-NN> |
| A modul szerzője (csoport) | <…> |
| Az ellenőrző (másik csoport vagy személy) | <…> |

## Ellenőrzött állítás

| Mező | Érték |
|---|---|
| Az állítás szó szerint | <…> |
| Hol áll a DNS-ben | <fájl, szakasz, sor> |
| Megnevezett forrás | <forrásjegyzék azonosítója, például F-01, és a dokumentum neve> |
| Megtalálható-e a forrásban? | <igen / részben / nem> |
| Forráshely | <fájl, pont, sor vagy oldal> |
| Egyezik-e az állítással? | <egyezik / eltér / a forrás nem mond ilyet> |
| Eltérés rövid leírása | <…, vagy: nincs> |

## Gazda és jóváhagyás

| Kérdés | Válasz |
|---|---|
| Ki a gazda? | <név vagy Nincs megadva> |
| Ki hagyhatja jóvá? | <név vagy Nincs megadva> |
| Jóváhagyás állapota | <jóváhagyásra vár / jóváhagyva / Nincs megadva> |
| Mi a következő lépés, ha az állítás nem egyezik? | <javítás / törlés / forrás pótlása> |

## Eredmény

- Állapot: <✅ egyezik / ⚠️ eltér vagy nem igazolható>
- A DNS-modul szövegét az ellenőrző nem írja át, hanem megnevezi a hibát; a javításról a gazda dönt.
- Személyes ellenőrzés: a kiválasztott állítást a résztvevő maga kereste vissza a forrásig: <igen / nem>

## Példa a formára (FIKTÍV OKTATÁSI MINTA)

| Mező | Érték |
|---|---|
| Az állítás szó szerint | Az Oriana-minta licencet, Standard supportot és bevezetési konzultációt nyújt. |
| Hol áll a DNS-ben | ceg.md, „Szolgáltatások” |
| Megnevezett forrás | F-02, Szolgáltatáskatalógus (fiktív) |
| Megtalálható-e a forrásban? | igen |
| Egyezik-e az állítással? | egyezik |

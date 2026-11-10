**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Tesztjegyzék sablon (`tesztjegyzek.md`)

A 6. gyakorlat használja. A tesztjegyzék azt rögzíti, mit próbáltál ki a Site-on (vagy a helyi prototípuson), mit vártál, mit kaptál. A fájl helye: `Munka/06-Sites/tesztjegyzek.md`. Ami nem futott, azt „NEM TESZTELT”-nek jelöld; ne tegyél úgy, mintha kipróbáltad volna.

## 1. Környezet

| Mező | Érték |
|---|---|
| Út | `<Site a munkatérben / helyi prototípus (tartalék)>` |
| Fiókok és szerepek | `<pl. owner, második fiók: visitor / editor>` |
| Verzióazonosító | `<a mentett verzió azonosítója vagy: nincs>` |
| Kiesett funkció (ha tartalék utat használtál) | `<melyik: tartós adatbázis, hitelesítés, szerepek, …>` |

## 2. A hét próba

| # | Próba | Lépések röviden | Elvárt eredmény | Kapott eredmény | PASS / FAIL / NEM TESZTELT | Megjegyzés |
|---|---|---|---|---|---|---|
| 1 | Tartós adat | Tételek felvétele; frissítés és új munkamenet után visszaolvasás | A tételek ugyanazzal az azonosítóval visszajönnek | `<…>` | `<…>` | `<…>` |
| 2 | Közös használat | A második fiókkal ugyanaz az ügy, új tétel; az elsővel újratöltés | Mindkét fiók ugyanazt az ügyet látja | `<…>` | `<…>` | `<…>` |
| 3 | Hitelesítés | Meghívott taggal és meghívatlan tesztelővel megnyitás | A meghívott eléri, a meghívatlan nem | `<…>` | `<…>` | `<…>` |
| 4 | Rekordjog | Egyik fiókkal a másik fiók tételének módosítása | A szerver elutasítja; a saját tétel módosítható | `<…>` | `<…>` | `<…>` |
| 5 | Site-szerepek | Visitor és editor megnyitás, mentés | A visitor nem szerkeszti a kódot; az editor ment | `<…>` | `<…>` | `<…>` |
| 6 | Verzió | Verziómentés deploy nélkül, előnézet, korábbi verziók listája | A verzióazonosító rögzítve; az előnézet nem éles | `<…>` | `<…>` | `<…>` |
| 7 | Appkapcsolat | Csak engedélyezett, fiktív forrású kapcsolattal | Minden látogató saját kapcsolatot engedélyez | `<…>` | `<…>` | `<…>` |

Prototípus esetén a próbák 3-5. sora a böngészőkód szimulációját jelenti; ezt a megjegyzésben jelöld, mert nem hitelesítés.

## 3. A Sites-kísérlet jegyzéke

A kísérlet azt vizsgálja, lehet-e a Site-ba beépített AI-reviewer. Natív AI-gombot nem ígérünk; a negatív eredmény is tanulság.

| Mező | Tartalom |
|---|---|
| Vizsgált funkció | `<…>` |
| Fiók és csomag | `<…>` |
| Beállítás | `<…>` |
| Eredmény (működött / nem működött / nem tesztelt, és hogyan látszott) | `<…>` |
| Számlázási forrás | `<…, vagy: Nincs megadva>` |
| Korlát | `<…>` |

## 4. Összegzés

- Hány próba PASS / FAIL / NEM TESZTELT: `<…>`
- Mi javítható a Site-ban: `<…>`
- Mi nem dönthető el a mai körülmények között: `<…>`

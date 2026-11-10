**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Review-csomag sablon

Az 5. gyakorlat A fázisa használja. A review-csomag a reviewer egyetlen bemenete. A függetlenség azon múlik, hogy a csomagba mi kerül és mi nem. A csomag helye: `Munka/05-Reviewer/review/`.

## Mi kerül a csomagba, és mi nem

| Fájl vagy anyag | Csomagba? | Miért |
|---|---|---|
| A maker kimenetfájljai (`v1/` vagy `v2/` kötelező kimenetei) | igen | Ezt ellenőrzi a reviewer. |
| `kriteriumok.md` | igen | A mérce; a reviewer ehhez méri a kimenetet. |
| A `kriteriumok.md` forráslistájában szereplő nyers források | igen | A reviewer ezekből keres vissza. |
| A rögzített DNS-verzió (a szabályokat tartalmazó modul) | igen | A szabályok forrása. |
| R2 esetén: az R1 jelentés és a javított `v2` | igen | A javított tételek újraellenőrzéséhez. |
| `agent-brief.md`, `terv.md` | nem | A maker szándéka nem bizonyíték; a kimenetet a kritériumokhoz mérjük. |
| `naplo.md`, a maker beszélgetése, önértékelése | nem | A reviewer ne a maker magyarázatát ellenőrizze. |
| A maker saját `ellenorzes/` eredményei | nem | A reviewer a mérést a sajátjaként futtassa. |
| Bármilyen megoldókulcs vagy a szándékos hibák listája | nem | Soha nem kerülhet a csomagba. |

## Csomagjegyzék (`review/csomag-jegyzek.md`)

| Fájl | Honnan | Verzió | SHA256 (ha a környezet számolja, különben: Nincs megadva) |
|---|---|---|---|
| `<…>` | `<…>` | `<…>` | `<…>` |

## A csomag determinisztikus ellenőrzése

A csomag összeállítása után egy script ellenőrzi, hogy
1. minden kötelező elem megvan;
2. egyetlen kizárt fájl sincs benne (a fenti „nem” sorok neve alapján);
3. a `kriteriumok.md` forráslistájában szereplő minden fájl benne van, és nincs benne forráslistán kívüli fájl.

A parancs és a tényleges eredmény a `Munka/05-Reviewer/csomag-ellenorzes.txt` fájlba kerül.

## Függetlenségi próba (friss beszélgetésben)

A reviewert friss Work-beszélgetésben, alapból külön review-projektben indítod. Mielőtt a „RONDO 05 reviewer R1” indítót elküldöd, tedd fel a próbakérdést:

1. Milyen fájlokat látsz, és milyen korábbi beszélgetésből vagy projektmemóriából tudsz bármit?
2. Idézd a `review/` mappa tartalmát.

Elfogadható: a lista egyezik a csomagjegyzékkel, és a reviewer korábbi munkáról nem tud. Ha a reviewer többet lát, rögzítsd a függetlenség korlátját, és páros emberi review egészíti ki.

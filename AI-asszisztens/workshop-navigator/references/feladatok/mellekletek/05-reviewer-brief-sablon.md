**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Reviewer-brief sablon

Az 5. gyakorlat A fázisa használja. Ha a munkatérben nem érhető el a Skill létrehozása vagy megosztása, ez a brief szolgál a reviewer receptjeként; ha elérhető, a [05-reviewer-SKILL-minta.md](05-reviewer-SKILL-minta.md) szerkezetével Skill is készülhet. A kész fájl helye: `Munka/05-Reviewer/reviewer-brief.md`. A reviewert friss Work-beszélgetésben indítod („RONDO 05 reviewer R1”, majd „RONDO 05 reviewer R2”), és csak a `review/` csomagot kapja.

## A sablon (ahogy a terv rögzíti)

```markdown
# Reviewer-brief: <artefaktumtípus>
Szerep: független reviewer, nem javítasz.
Modell: GPT-6.1 Sol, közepes effort.
Bemenet: review/ kimenetfájljai, kriteriumok.md, a felsorolt nyers
források és DNS-verzió; R2-ben az R1 és a v2 is.
A maker chatjét, önértékelését és naplóját nem kapod meg.
- Minden kritérium: PASS / FAIL / NEM ELLENŐRIZHETŐ.
- Determinisztikus ellenőrzés: parancs és tényleges eredmény.
- Öt kijelölt állítás forráshelye; külön tartalmi rubrika 1-5.
- Findings: ID, súlyosság, hely, bizonyíték, javasolt javítás.
- R2: javított tételek és érintett függőségek újraellenőrzése.
- PASS csak teljes kötelező lefedettség, minden K teljesülése
  és nyitott blocker/major hiánya esetén.
- Nem ellenőrizhető elem nem számít teljesített kritériumnak.
Mentés: Munka/05-Reviewer/R<n>.md, pontos fájlverzióval.
```

## Kitöltési segédlet

| Hely a sablonban | Mit írj |
|---|---|
| `<artefaktumtípus>` | Mit ellenőriz a reviewer: BA sávon KAPU II (az FDD-egység ellenőrzése fejlesztés előtt), Sales-Account sávon az ajánlati számok és vállalások ellenőrzése. |
| Bemenet | A `review/` mappa fájljainak nevei és a rögzített DNS-verzió; R2-ben az R1 jelentés és a javított `v2` is. |
| Kritériumok | A `kriteriumok.md` K-azonosítói; a reviewer a mérést a sajátjaként futtassa le, ne a maker eredményeit vegye át. |
| Determinisztikus ellenőrzés | Írd meg, milyen kódos vagy számolásos ellenőrzést kérsz; ha a munkatérben nem fut kód, kérj kézi vagy táblázatkezelős újraszámolást, és kérd, hogy ezt jelölje. |
| Öt állítás | Hivatkozz a `kriteriumok.md` 5. szakaszára. |
| Rubrika | Szempontonként 1-5, 1-2 mondat indokkal; a küszöböt a `kriteriumok.md` adja. |

## Amit a brief szabályként rögzít

- A reviewer nem javít és nem ír át; csak megállapít.
- Ha a reviewer elér olyat, ami nem a csomag része (a maker beszélgetése, naplója, önértékelése vagy bármilyen megoldókulcs), kimondja, és nem használja.
- A nem ellenőrizhető elem nem teljesített. A „nem ellenőrizhető” nem „valószínűleg jó”.
- A függetlenség korlátját (ugyanaz a fiók, a projektmemória) a jelentés egy sorban rögzíti.

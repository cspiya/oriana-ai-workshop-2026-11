---
name: reviewer-minta
description: Szerkezeti minta egy független reviewer-Skillhez. Töltsd ki a saját feladatodra; ez a váz nem kész recept.
---

**FIKTÍV OKTATÁSI MINTA** · szerkezeti minta, a tartalmat te írod.

# Reviewer-Skill szerkezeti minta

Az 5. gyakorlat A fázisa használja. A váz a `05 usecase Skill keszites` mappa mintájának szerkezetét követi (név és leírás a fejlécben, majd rövid, szabályos fejezetek). A `<…>` helyek üresek: a saját kritériumaidból és forrásaidból töltsd ki. Kész Skill esetén a helye `Munka/05-Reviewer/reviewer/SKILL.md`.

# Reviewer

<Egy mondat: mit ellenőriz ez a Skill, és milyen típusú kimenetet.>

## Szerep és határ

- Független reviewer vagy: nem javítasz, nem írsz át, nem egészítesz ki hiányt.
- <Mit nem tehet: pl. nem keres a csomagon kívül.>

## Bemenet

- <Mely fájlok és mappák tartoznak a csomagba.>
- <Mi nem tartozhat a csomagba: a maker beszélgetése, naplója, önértékelése és bármilyen megoldókulcs. Ha mégis elérnéd, kimondod és nem használod.>

## Ellenőrzési menet

1. <A kritériumokat a nyers forrásokból, a kimenettől függetlenül vizsgáld.>
2. <Determinisztikus ellenőrzés: milyen parancs vagy számolás; a parancsot és a tényleges eredményt idézd.>
3. <Öt kijelölt állítás: forráshely megadása.>
4. <Tartalmi rubrika 1-5, szempontonként indoklással.>

## Kimenet

- Minden kritérium: PASS / FAIL / NEM ELLENŐRIZHETŐ.
- Findings tábla: ID, súlyosság, hely, bizonyíték, javasolt javítás.
- <Verdikt és lefedettség (teljes / részleges).>
- <Mentés: Munka/05-Reviewer/R<n>.md, a vizsgált fájlok pontos verziójával.>

## Súlyosság

<Blocker, major, minor: egy-egy mondatos meghatározás a saját feladatodra.>

## PASS-szabály és stop

- <PASS csak teljes kötelező lefedettség, minden K teljesülése és nyitott blocker/major hiánya esetén.>
- <A nem ellenőrizhető elem nem teljesített.>
- <Stop: maximális körszám, két körben nincs javulás, hiányzó döntés.>

## Második kör (R2)

<Mit kell újraellenőrizni: a javított tételeket és az érintett függőségeket; milyen bemenet jön még hozzá.>

## Függetlenség korlátja

<Egy sor: ugyanaz a fiók, projektmemória; hogyan ellenőrizted, mit lát a reviewer.>

**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# Tudásbázis-kivonat – Jóváhagyási küszöb konfigurációja

**Cikk azonosító:** KB-0472
**Cím:** APPROVAL_THRESHOLD_2 – második jóváhagyó küszöb beállítása és ismert problémák
**Kategória:** Beszerzési modul / Konfiguráció
**Utolsó módosítás:** 2026-06-12
**Szerző:** Support csapat (Kovács Dániel)
**Célközönség:** belső support, konzultánsok

## Összefoglaló

A beszerzési igény kétszintű jóváhagyását az APPROVAL_THRESHOLD_2 paraméter vezérli. A paraméter **alapértéke 5 000 000** (HUF, nettó). Az érték **ügyfelenként felülírható** az ügyfélpéldány adminisztrációs felületén (Rendszerbeállítások > Workflow > Jóváhagyás). Új telepítésnél az alapérték kerül be, meglévő ügyfélnél a korábban beállított érték marad.

## Beállítás lépései

1. Bejelentkezés admin szerepkörrel az ügyfélpéldányba.
2. Rendszerbeállítások > Workflow > Jóváhagyás > "Második jóváhagyó küszöb (HUF, nettó)".
3. Érték módosítása, mentés. A módosítás azonnal hatályos az ezt követően jóváhagyásra küldött igényekre; a folyamatban lévő igényekre nem.
4. A módosítás bejegyzést hoz létre a rendszer konfigurációs naplójában (ki, mikor, régi érték, új érték).

## Ellenőrzés

Az igény eseménynaplójában a "Küszöbvizsgálat" bejegyzés mutatja a vizsgált értéket, az alkalmazott küszöböt és azt, hogy létrejött-e a második jóváhagyó lépés. Ez a bejegyzés az elsődleges bizonyíték hibajegy kivizsgálásakor.

## Gyakori kérdések

**A bruttó vagy a nettó értéket vizsgálja a rendszer?**
A nettó értéket. Ügyfelek gyakran a bruttó összeget hasonlítják a küszöbhöz, ami félreértéshez vezet 27%-os áfa mellett (pl. 4 100 000 nettó = 5 207 000 bruttó).

**Több ügyfélpéldányon eltérő küszöb van. Ez hiba?**
Nem. A paraméter ügyfelenként eltérő lehet, a szerződéses vagy belső szabályzati igény szerint.

## Ismert problémák

| # | Leírás | Státusz |
|---|---|---|
| IP-1 | **Ha az igény pénzneme EUR (vagy más nem-HUF deviza) és az ügyfélpéldányban nincs beállítva árfolyam, a küszöbvizsgálat 0 értékkel fut.** Ennek következtében a második jóváhagyó lépés soha nem jön létre, az igény az első jóváhagyás után "Jóváhagyva" státuszba kerül. Az eseménynaplóban ilyenkor "vizsgált érték: 0" és "árfolyam: –" látható. **Javítás tervezett, ticket: DEV-3310, státusz: nyitott.** Átmeneti megoldás: árfolyam rögzítése az adminisztrációs felületen minden használt devizára. | Nyitott |
| IP-2 | A küszöbmódosítás nem érvényesül a már jóváhagyásra küldött igényekre. Ez tervezett viselkedés, nem hiba. | Lezárva – nem hiba |

## Kapcsolódó dokumentumok

- Funkcionális specifikáció, 4.2 fejezet – Kétszintű jóváhagyás (a cikk írásakor érvényes verzió: v2.2)
- DEV-3310 – Devizás igény küszöbvizsgálata árfolyam hiányában

*Megjegyzés: a cikk a v2.2 specifikáció alapján készült. Újabb specifikációverzió esetén ellenőrizze az alapértéket.*

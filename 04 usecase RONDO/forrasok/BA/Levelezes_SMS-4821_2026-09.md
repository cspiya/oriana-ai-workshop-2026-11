**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# E-mail-szál – SMS-4821 hibajegy egyeztetése

Exportálva a support közös postafiókjából 2026-09-23-án. Öt levél, időrendben. A szál a `SUP_ticket_SMS-4821.md`, a `SPEC_reszlet_jovahagyasi_workflow_v2.3.md` és a `KB_kivonat_jovahagyasi_konfiguracio.md` forrásokhoz kapcsolódik.

---

## 1. levél

**Feladó:** Kovács Dániel <kovacs.daniel@oriana-fiktiv.hu> – support koordinátor, Oriana
**Címzett:** pénzügyi kontroller (RONDO) <penzugyi.kontroller@mintaugyfel-fiktiv.hu>
**Dátum:** 2026-09-22 (kedd) 12:10
**Tárgy:** SMS-4821 – hiányzó adatok a kivizsgáláshoz

Tisztelt Pénzügyi Kontroller!

Köszönjük a bejelentést. A csatolt képernyőkép nem érkezett meg a rendszerünkbe. A kivizsgáláshoz kérjük:

1. a BI-2026-0917 igény nettó összegét és pénznemét;
2. az igény eseménynaplójából a „Küszöbvizsgálat” bejegyzést (vizsgált érték, alkalmazott küszöb, árfolyam);
3. az ügyfélpéldányban beállított második jóváhagyói küszöb aktuális értékét.

Üdvözlettel,
Kovács Dániel

---

## 2. levél

**Feladó:** pénzügyi kontroller (RONDO) <penzugyi.kontroller@mintaugyfel-fiktiv.hu> – RONDO Hullámkartongyártó Kft.
**Címzett:** Kovács Dániel <kovacs.daniel@oriana-fiktiv.hu>
**Dátum:** 2026-09-22 (kedd) 15:42
**Tárgy:** RE: SMS-4821 – hiányzó adatok a kivizsgáláshoz

Tisztelt Kovács Dániel!

Az igényen 5 480 000 Ft szerepel összegként, ezt láttam a listában. A beszerzés a beszállító kérésére eredetileg euróban lett rögzítve, az igénylő szerint körülbelül 13 700 EUR értékben; a forintos összeg a képernyőn jelent meg.

A küszöb nálunk 5 millió forint, ahogy a bevezetéskor beállítottuk, és a specifikációban is ez az alapérték. Az eseménynaplóhoz nincs jogosultságom, azt az admin kollégának kell kikeresnie; az ügyfél oldali admin személyét még egyeztetem.

A képernyőképet ismét csatolom.

Üdvözlettel,
pénzügyi kontroller (RONDO)

*Csatolmány: BI-2026-0917_jovahagyas.png – a rendszer naplója szerint a fájl ezúttal sem érkezett meg.*

---

## 3. levél

**Feladó:** üzleti projektvezető (RONDO) <uzleti.projektvezeto@mintaugyfel-fiktiv.hu> – RONDO Hullámkartongyártó Kft.
**Címzett:** Kovács Dániel <kovacs.daniel@oriana-fiktiv.hu>
**Másolat:** Vadász Kornélia <vadasz.kornelia@oriana-fiktiv.hu>
**Dátum:** 2026-09-23 (szerda) 08:30
**Tárgy:** SMS-4821 – sürgősség

Tisztelt Kovács Dániel!

Kérem, hogy a hibajegyet programhibaként kezeljék és soron kívül javítsák, mert a pénteki auditfelkészülésen ezt be kell mutatnunk. Úgy tudom, ugyanez a jelenség egy másik ügyfelüknél is előfordult.

Üdvözlettel,
üzleti projektvezető (RONDO)

---

## 4. levél

**Feladó:** Vadász Kornélia <vadasz.kornelia@oriana-fiktiv.hu> – Support Technical Lead, Oriana
**Címzett:** Kovács Dániel <kovacs.daniel@oriana-fiktiv.hu>
**Másolat:** Kende Bertalan <kende.bertalan@oriana-fiktiv.hu>
**Dátum:** 2026-09-23 (szerda) 10:15
**Tárgy:** RE: SMS-4821 – sürgősség

Dani,

ha az igény tényleg devizás, és az ügyfélpéldányban nincs árfolyam rögzítve, a tudásbázis IP-1 pontja szerint a küszöbvizsgálat 0 értékkel fut, és a második lépés nem jön létre. Ez ismert, nyitott fejlesztési jegy, nem új hiba.

Javaslom, hogy első lépésként az eseménynaplót és a konfigurációs naplót kérjük be, és csak utána szülessen bug vagy CR besorolás – ez javaslat, a besorolásról a triázs dönt. A RONDO példányán beállított küszöbértéket fejből nem tudom, azt a konfigurációs naplóból kell kiolvasni.

Kornélia

---

## 5. levél

**Feladó:** Kovács Dániel <kovacs.daniel@oriana-fiktiv.hu> – support koordinátor, Oriana
**Címzett:** Vadász Kornélia; Kende Bertalan
**Dátum:** 2026-09-23 (szerda) 11:05
**Tárgy:** SMS-4821 – állapot a triázs előtt

Sziasztok!

Összefoglalom, hol tartunk. Ami a bejelentőtől jött: az igényen 5 480 000 Ft látszik, az igény eredetileg euróban készült, a küszöb az ügyfél szerint 5 millió. Ami hiányzik: az eseménynapló bejegyzése, a beállított küszöb tényleges értéke, az ügyfél oldali admin személye és a képernyőkép. Az ügyfél a jegyet programhibának tekinti, ezt forrás nem támasztja alá.

Az SLA szerinti első reakció (8 munkaóra) a tegnapi 12:10-es levelemmel teljesült. A megoldási céldátum a besorolás után indul.

Dani

---

*FIKTÍV OKTATÁSI MINTA – a levelezés kitalált, a szereplők és összegek oktatási célt szolgálnak.*

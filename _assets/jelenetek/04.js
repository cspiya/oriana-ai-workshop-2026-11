/* Wenova workshop – a 4. gyakorlat (RONDO agent) mozgó ábrái. Betöltés: a wenova-motion.js UTÁN.
   Forrás: Notebookok/04-rondo-agent-notebook.html, Feladatok/04-rondo-agent.md, AGENTS.md („Maker mód”).
   KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* 1. Az agentfutás íve a napban: A fázis → B fázis → indítás 12:25 → ebéd → C átvétel → D javítás az R1 alapján */
  M.jelenet('agent-iv', {
    tipus: 'aramlas',
    cim: 'Az agentfutás íve a napban: előkészítés, ebéd alatti futás, átvétel, javítás',
    pelda: 'BA-sáv: a RONDO jóváhagyási workflow FDD-egysége (kitalált projekt, FIKTÍV OKTATÁSI MINTA)',
    meret: [1000, 640],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'cél, mérce,|döntés', ikon: 'ember', x: 120, y: 330, szin: 'jegyezd' },
      { id: 'forras', nev: 'Források', alcim: 'a RONDO-eset|forrásmappája', ikon: 'mappa', x: 480, y: 120, szin: 'tipp' },
      { id: 'mappa', nev: '04-Agent', alcim: 'brief, kritériumok,|terv, napló, v1, v2', ikon: 'naplo', x: 480, y: 540, szin: 'elakadas', w: 220 },
      { id: 'maker', nev: 'Maker', alcim: 'önállóan|dolgozik', ikon: 'keszito', x: 870, y: 190, szin: 'accent' },
      { id: 'reviewer', nev: 'Reviewer', alcim: 'független,|nem javít', ikon: 'ellenor', x: 870, y: 500, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'forras', ig: 'te', csomag: 'leltár', szin: 'tipp', szamlalo: 'A fázis · 11:25', szoveg: 'A fázis: script leltározza a forrásmappát. A gép csak a szerkezetet méri; hogy mit jelent a tartalom, azt te ítéled meg.', pelda: 'Te: „Kezdjük a 4. gyakorlatot.”\nFut: ellenorzes/leltar.py → leltar_eredmeny.txt, egy sora:\nSPEC_reszlet_jovahagyasi_workflow_v2.3.md | specifikációrészlet | 2026-07-30' },
      { tol: 'te', ig: 'reviewer', csomag: 'páros ellenőrzés', szin: 'jegyezd', iv: 0, szoveg: 'Friss beszélgetésben egy gyors páros ellenőr is ránéz a jelentésedre. Nem javít; a megállapításairól te döntesz.', pelda: 'Friss beszélgetésbe: „Olvasd el és kövesd a Munka/04-Agent/ellenorzes/paros-reviewer-keres.md fájlt.”\nVálasz, a forma: Megállapítás | Forráshely | Súlyosság → … | fájl és hely | major' },
      { tol: 'te', ig: 'mappa', csomag: 'kapu-I/', szin: 'jegyezd', szoveg: 'Az A fázis eredménye a kapu-I mappába kerül. Ez lesz a B fázis mérőpontja: erre épül a brief.', pelda: 'Mentve: kapu-I/jelentes.md és kapu-I/hibajegyzek.md\nEgy sor formája: HJ-01 | blocker / major / minor | fájl és hely | … | nyitott\nTe döntesz: „A: feltételes · B: blokkolt · C: lezárt”' },
      { tol: 'te', ig: 'mappa', csomag: 'kritériumok + brief', szin: 'jegyezd', szamlalo: 'B fázis · 11:45', szoveg: 'B fázis: megírod a K1–K7 kritériumokat és a briefet úgy, hogy az agent rád várás nélkül tudjon dolgozni.', pelda: 'kriteriumok.md, K4 sor: „Az öt kijelölt állítás a forrásban a megadott helyen megvan-e?” (elvárás, mérés, küszöb: te írod)\nagent-brief.md: „1. Cél: … javított KAPU I jelentés (a kapu-I/atadas.md státusszal) és kis FDD-egység.”' },
      { aktiv: 'te', buborek: 'jóváhagyom a tervet', szoveg: 'Jóváhagyod a legfeljebb 8 lépéses tervet. Ez a te kontrollpontod: az agent ezen a határon belül dolgozik.', pelda: 'terv.md, 1. sor: „a KAPU I jelentés javítása, determinisztikus újramérés, a kapu-I/atadas.md státusza” | Kör: belső 1\nTe: „A” (jóváhagyom, ahogy van)' },
      { tol: 'te', ig: 'maker', csomag: 'RONDO 04 maker', szin: 'jegyezd', iv: 0, szamlalo: '12:25 · indítás', szoveg: '12:25: friss beszélgetésben elindítod a makert. Védett lépés: akkor is indítunk, ha a brief nem teljes; a hiány nyitott tétel.', pelda: 'Új Work-beszélgetésbe csak ennyit írsz: „RONDO 04 maker”\nKezdősor a naplo.md fájlban: 2026-11-12 12:25 · Work Local · GPT-6.1 Terra, közepes effort · Munka/04-Agent/terv.md' },
      { tol: 'mappa', ig: 'maker', csomag: 'brief + K + terv', szin: 'elakadas', szoveg: 'A maker csak a briefet, a kritériumokat, a tervet és a briefben megnevezett fájlokat olvassa.', pelda: 'Beolvasva: agent-brief.md, kriteriumok.md, terv.md, és a forráslista fájljai, például:\nS1 | 2026-11-05_RONDO_workshop_jegyzet_jovahagyas.md | 2026-11-05 | v1' },
      { aktiv: 'maker', buborek: 'dolgozom…', szamlalo: 'Ebéd · 12:30–13:15', ido: 3600, szoveg: 'Ebéd: az agent a háttérben fut, neked nincs feladatod. Hiányzó döntésnél megáll, nem talál ki semmit.', pelda: 'A naplo.md alapmérés-sora (a sablon szerint):\n0 | ÉÉÉÉ-HH-NN ÓÓ:PP | belső | alapmérés | nincs (alapmérés) | K1: …, K2: …, K7: … | … | folytatás: …' },
      { tol: 'maker', ig: 'mappa', csomag: 'v1 + napló', szin: 'accent', iv: -0.2, jelzo: { szereplo: 'maker', szoveg: 'v1' }, szoveg: 'Elkészül a v1 és a napló. A „kész” üzenet még nem bizonyíték.', pelda: 'Munka/04-Agent/v1/: a javított KAPU I jelentés és az FDD-egység\nA napló utolsó sora például: 2 | … | belső | … | … | K1: teljesült, K2: … | … | stop: a belső körkeret elfogyott' },
      { tol: 'mappa', ig: 'te', csomag: 'átvételi mérés', szaggatott: true, szin: 'elakadas', iv: -0.2, szamlalo: 'C fázis · 13:15', szoveg: 'C fázis: átvétel. A kritériumok mérései a maker futásától függetlenül futnak a v1-en; itt nem javítunk, csak mérünk.', pelda: 'Te: „Folytassuk a 4. gyakorlatot.” → „4. gyakorlat, C fázis: átvétel.”\nellenorzes/atvetel_eredmeny.txt: K… | a futtatott parancs | a tényleges kimenet\nv1/atvetel.md: Átvételi státusz: például feltételesen átvéve' },
      { tol: 'mappa', ig: 'reviewer', csomag: 'review-csomag', szin: 'elakadas', szamlalo: '5. gyakorlat · R1', szoveg: 'Az 5. gyakorlatban egy független reviewer megvizsgálja a v1-et, és megírja az R1 jelentést.', pelda: 'Munka/05-Reviewer/review/: a v1/ kötelező kimenetei, kriteriumok.md, a nyers források, szabalyok/ba.md\nÚj beszélgetésbe: „RONDO 05 reviewer R1”' },
      { tol: 'reviewer', ig: 'te', csomag: 'R1', szaggatott: true, szin: 'figyelj', iv: 0.14, jelzo: { szereplo: 'reviewer', szoveg: 'R1' }, szamlalo: 'D fázis · 14:15', szoveg: 'D fázis: átnézed az R1 megállapításait, egyet visszakeresel a forrásban, és kijelölöd, mit javítson az agent.', pelda: 'R1.md, a forma: F-01 | blocker | a vizsgált fájl és hely | K…\nellenorzes/r1_megallapitas_visszakeres.md: a reviewer idézete és a nyers forrás sora egymás mellett → ✅ egyezik vagy ⚠️ eltér' },
      { tol: 'te', ig: 'maker', csomag: 'RONDO 04 javítás R1', szin: 'jegyezd', iv: -0.14, szoveg: 'Új beszélgetésben indítod a javítást. A maker az R1-et is beolvassa, és csak a kijelölt hibákat javítja.', pelda: 'Új beszélgetésbe: „RONDO 04 javítás R1”\nNaplósor például: 1 | ÉÉÉÉ-HH-NN ÓÓ:PP | belső | F-01 | egyetlen fókuszált változtatás: … | K1: …, K2: … | … | folytatás: …' },
      { tol: 'mappa', ig: 'te', csomag: 'v2 + összevetés', szin: 'kesz', iv: -0.2, jelzo: { szereplo: 'maker', szoveg: 'v2' }, szamlalo: 'Döntés', ido: 4200, szoveg: 'A javítás új verzióba (v2) kerül. Az újramérés megmutatja, mely K javult vagy romlott; te döntesz, mehet-e az R2 reviewerhez.', pelda: 'Munka/04-Agent/v2/ (a v1/ megmarad)\nellenorzes/v1_v2_osszevetes.txt: K… | nem teljesült | teljesült | javult\nTe: „A” (mehet az R2 reviewerhez)' }
    ]
  });

  /* 2. Mit olvas és mit ír a maker: belső körök, napló, stop-feltételek (AGENTS.md, „Maker mód”) */
  M.jelenet('maker-kor', {
    tipus: 'aramlas',
    cim: 'Mit olvas és mit ír a maker? Belső körök, napló, stop-feltételek',
    pelda: 'BA-sáv: a RONDO jóváhagyási workflow FDD-egysége a „RONDO 04 maker” futásban (FIKTÍV MINTA)',
    meret: [1000, 600],
    szereplok: [
      { id: 'be', nev: 'Bemenet', alcim: 'brief, kritériumok,|terv, források', ikon: 'dokumentum', x: 120, y: 300, szin: 'tipp', w: 200 },
      { id: 'maker', nev: 'Maker', alcim: 'készít, mér,|javít', ikon: 'keszito', x: 490, y: 150, szin: 'accent' },
      { id: 'meres', nev: 'Mérés', alcim: 'a kriteriumok.md|szerint', ikon: 'tablazat', x: 490, y: 470, szin: 'kesz' },
      { id: 'ki', nev: '04-Agent', alcim: 'v1/, ellenorzes/,|naplo.md', ikon: 'mappa', x: 870, y: 150, szin: 'elakadas' },
      { id: 'te', nev: 'Te', alcim: 'jóváhagyás,|döntés', ikon: 'ember', x: 870, y: 470, szin: 'jegyezd' }
    ],
    lepesek: [
      { tol: 'be', ig: 'maker', csomag: 'brief + K + terv', szin: 'tipp', szoveg: 'A maker beolvassa a briefet, a kriteriumok.md és a terv.md fájlt, meg a briefben felsorolt forrásokat. Mást nem.', pelda: 'Te: „RONDO 04 maker”\nBeolvasva: Munka/04-Agent/agent-brief.md, kriteriumok.md, terv.md, és a forráslista, például:\nSPEC_reszlet_jovahagyasi_workflow_v2.3.md | 2026-07-30 | v2.3' },
      { tol: 'maker', ig: 'te', csomag: 'terv: max. 8 lépés', szaggatott: true, szin: 'accent', iv: 0.1, szoveg: 'Legfeljebb 8 lépéses tervet mutat, és te jóváhagyod. Utána önállóan dolgozik.', pelda: 'A terv 1. sora: „a KAPU I jelentés javítása, determinisztikus újramérés, a kapu-I/atadas.md státusza”\nTe: „A” → terv.md: Jóváhagyta: <kezdőbetűid> · Módosítás a javaslathoz képest: nincs' },
      { aktiv: 'maker', buborek: 'készítem…', szamlalo: 'Belső kör 1 / 2', szoveg: 'Első belső kör: elkészíti a brief kötelező kimeneteit.', pelda: 'Előbb: a javított KAPU I jelentés, majd kapu-I/atadas.md: Státusz: lezárt / feltételes / blokkolt · FDD-egység indítható? igen / nem\nCsak nem blokkolt státusz után: az FDD-egység az FDD_sema_FIKTIV.md fejezeteivel' },
      { tol: 'maker', ig: 'ki', csomag: 'v1/', szin: 'accent', jelzo: { szereplo: 'ki', szoveg: 'v1' }, szoveg: 'A kimenet a v1/ mappába kerül. Meglévő verziót a maker nem ír felül.', pelda: 'Munka/04-Agent/v1/: a javított KAPU I jelentés és az FDD-egység\nAz egységben a séma azonosítói: FN-01… funkciók, R-NN igények, FG-NN fit-gap sorok, NK-NN nyitott kérdések' },
      { tol: 'maker', ig: 'meres', csomag: 'mérés K szerint', szin: 'accent', szoveg: 'Mér a kriteriumok.md szerint: melyik K teljesül, és melyik nem.', pelda: 'Például K1 irányadó kérdése: „Minden R-azonosítójú igény megjelenik-e, és egyeznek-e az azonosítók?”\nA mérés és a küszöb az, amit te írtál a kriteriumok.md K1 sorába.' },
      { tol: 'meres', ig: 'maker', csomag: 'legsúlyosabb hiba', szaggatott: true, szin: 'figyelj', szoveg: 'A javítás a legsúlyosabb hibára fókuszál.', pelda: 'A mérés eredménye, a forma: K1: teljesült · K2: nem teljesült · K3: nem ellenőrizhető · …\nA maker a nem teljesült sorokból a legsúlyosabb hibát választja: K…: …' },
      { tol: 'maker', ig: 'ki', csomag: 'naplósor', szin: 'elakadas', iv: -0.2, szoveg: 'Minden körben naplósor kerül a naplo.md fájlba: kör, idő, hiba, változtatás, K-eredmények, stop vagy folytatás és az ok.', pelda: 'naplo.md: kör | idő | belső/külső | hiba-ID | változtatás | K-eredmények | rubrika | stop/folytatás és ok\n1 | 2026-11-12 ÓÓ:PP | belső | <a mérés azonosítója> | egy fókuszált változtatás: … | K1: …, K2: … | … | folytatás: …' },
      { aktiv: 'maker', buborek: 'javítom…', szamlalo: 'Belső kör 2 / 2', szoveg: 'Második belső kör: javít és újra mér. Több belső kör nincs: a hurok nem végtelen.', pelda: 'Egy fókuszált változtatás az FDD-egységben a legsúlyosabb hibára, utána ugyanaz a mérés fut újra.\nA naplósorba az újramérés kerül: 2 | … | belső | … | … | K1: …, K2: … | … | …' },
      { tol: 'maker', ig: 'ki', csomag: 'ellenorzes/', szin: 'kesz', szoveg: 'A mérések az ellenorzes/ mappába kerülnek, a napló pedig újabb sorral bővül.', pelda: 'Munka/04-Agent/ellenorzes/: a mérő scriptek és a kimenetük (a futtatott parancs és a tényleges eredmény).\nnaplo.md: új sor a 2. körről.' },
      { aktiv: 'maker', buborek: 'megálljak?', szamlalo: 'Stop?', ido: 4200, szoveg: 'Megáll, ha minden K teljesült, ha elérte a maximális kört, ha két körben nincs javulás, vagy ha döntés vagy jogosultság hiányzik.', pelda: 'A napló utolsó sora például:\n2 | … | belső | … | … | K1: teljesült, K2: … | … | stop: a belső körkeret elfogyott' },
      { tol: 'maker', ig: 'te', csomag: 'Nincs megadva', szaggatott: true, szin: 'figyelj', iv: -0.1, szoveg: 'A hiányzó üzleti döntést nem pótolja: „Nincs megadva”, nyitott tételként a kriteriumok.md fájlban. A döntés a tiéd.', pelda: 'kriteriumok.md, 6. Nyitott tételek: NY-01 | Mi hiányzik: … | Ki dönthet: … | Hatás a kritériumokra: …\nAz FDD-egységben: „Nincs megadva”, és NK-NN nyitott kérdés a 10. fejezetben.' },
      { tol: 'ki', ig: 'te', csomag: 'fájlok + napló', szin: 'kesz', szamlalo: 'Stop', ido: 4200, szoveg: 'A végén a mentett fájlok és a napló várnak rád. Nincs küldés, külső írás, publikálás: a „kész” nem küldési engedély.', pelda: 'Rád vár: v1/ (a javított KAPU I jelentés és az FDD-egység), ellenorzes/, naplo.md\nA következő mondatod: „Folytassuk a 4. gyakorlatot.” → „4. gyakorlat, C fázis: átvétel.”' }
    ]
  });
})();

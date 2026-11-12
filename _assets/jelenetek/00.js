/* Wenova workshop – a 0. gyakorlat saját mozgó ábrája. Betöltés: a wenova-motion.js UTÁN.
   Forrás: a 0. gyakorlat notebookja (3. és 5. lépés) és a közös működési minta „írasd a promptot” része. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* Írasd a promptot: a cél és a mérce a tiéd, a megfogalmazás az AI-é, a döntés újra a tiéd */
  M.jelenet('irasd-a-promptot', {
    tipus: 'aramlas',
    cim: 'Írasd a promptot: te mondod a célt, az AI megírja, te döntesz',
    pelda: "Heti összefoglaló egy tízsoros (kitalált) egyeztetési jegyzetből: ténylegesen lefuttatott példa, szó szerinti részletekkel",
    teljes: 'pelda-hurok.html',
    meret: [1100, 600],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'cél, kritériumok,|döntés', ikon: 'ember', x: 118, y: 300, szin: 'jegyezd' },
      { id: 'ai', nev: 'AI', alcim: 'megírja, megmutatja,|futtatja', ikon: 'modell', x: 520, y: 300, szin: 'accent', w: 200 },
      { id: 'prompt', nev: 'Prompt', alcim: 'a hét elem|sorrendben', ikon: 'dokumentum', x: 950, y: 130, szin: 'elakadas' },
      { id: 'kimenet', nev: 'Kimenet', alcim: 'forráshoz|mérve', ikon: 'tablazat', x: 950, y: 470, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: 'cél + kritérium', szin: 'jegyezd', szoveg: 'Te elmondod, mit szeretnél. Elsőre ritkán teljes: itt is hiányzik a forrás, a forma és a mérce.', pelda: {"ki": "Te írod", "szoveg": "Készíts heti összefoglalót a tegnapi egyeztetés jegyzetéből a csapatnak.", "h": "k1"} },
      { aktiv: 'ai', buborek: 'Mi hiányzik?', szoveg: 'Az AI nem talál ki hiányzó kritériumot: ami nincs megadva, az „Nincs megadva”, és rákérdez.', pelda: {"ki": "A példában", "szoveg": "A kérésből nem derül ki, melyik jegyzetről van szó, milyen legyen a forma, és mitől jó az eredmény.\nAz AI ezeket nem találja ki.", "h": "k2"} },
      { tol: 'ai', ig: 'te', csomag: 'pontosító kérdés', szaggatott: true, szin: 'accent', iv: -0.2, szoveg: 'Rövid pontosító kérdéseket tesz fel, mielőtt írni kezd (a gyakorlatokban legfeljebb kettőt).', pelda: {"ki": "Az AI válasza", "szoveg": "1. Melyik jegyzetből dolgozzunk? Küldd el vagy jelöld meg, hol található.\n2. Van megkötés a formára vagy terjedelemre, illetve arra, mi maradjon ki?\n3. Mitől lesz jó az összefoglaló: elég a fő döntések és teendők kiemelése, vagy más szempontot is kövessen?", "h": "k2"} },
      { tol: 'te', ig: 'ai', csomag: 'válasz', szin: 'jegyezd', szoveg: 'Te válaszolsz a saját szavaiddal: kimenet, korlát, ellenőrzés. A mérce a tiéd marad.', pelda: {"ki": "Te írod", "szoveg": "2. Egyoldalas Markdown, három résszel: Döntések, Nyitott kérdések, Következő lépések (felelőssel és határidővel). A javaslatot ne írja döntésnek.\n3. Akkor jó, ha minden sor mellett ott a forráshely (a jegyzet pontjának száma), minden döntés szerepel benne, és semmi olyan nincs benne, ami a jegyzetben nem áll.", "h": "k3"} },
      { tol: 'ai', ig: 'prompt', csomag: 'megírja', szin: 'accent', jelzo: { szereplo: 'prompt', szoveg: '7 elem' }, szoveg: 'Az AI megírja a promptot a hét elemmel: Cél, Címzett, Forrás és határ, Kimeneti séma, Szabályok, Ellenőrzés, Mentés.', pelda: {"ki": "A megírt prompt eleje (brief.md)", "szoveg": "## Cél\nKészíts egy egyoldalas heti összefoglalót a csapatnak a megadott jegyzet alapján.\n## Címzett\nA csapat. A szöveg legyen tömör, jól áttekinthető, belső csapatkommunikációra alkalmas.", "h": "k4"} },
      { tol: 'prompt', ig: 'ai', csomag: 'kész prompt', szaggatott: true, szin: 'elakadas', iv: -0.2, szoveg: 'A prompt elkészült, de még nem fut: futtatás előtt meg kell mutatni.', pelda: {"ki": "A megírt prompt vége (brief.md)", "szoveg": "## Ellenőrzés\nLeadás előtt ellenőrizd a kész összefoglalót a kriteriumok.md K1–K8 kritériumai szerint.\n## Mentés\nAz összefoglalót ide mentsd: kimenet/2026-11-10_heti_osszefoglalo_v1.md.", "h": "k4"} },
      { tol: 'ai', ig: 'te', csomag: 'megmutatja', szaggatott: true, szin: 'elakadas', iv: -0.2, szoveg: 'Az AI futtatás előtt megmutatja neked a megírt promptot.', pelda: {"ki": "Az AI válasza", "szoveg": "Elmentettem a brief.md és a kriteriumok.md fájlt.", "h": "k4"} },
      { aktiv: 'te', buborek: 'A: futtasd így · B: javítom', szoveg: 'Te döntesz: jóváhagyod, vagy javítod. A megfogalmazás az AI-é, a döntés a tiéd.', pelda: {"ki": "A példában", "szoveg": "Elolvastuk a briefet: a „Forrás és határ” azt mondja, amit kértünk.\nEgy dolog átcsúszott: az „egyoldalas” nem mérhető. Később ezen akadt el az ellenőrzés.", "h": "k4"} },
      { tol: 'te', ig: 'ai', csomag: 'A: jó így', szin: 'kesz', szoveg: 'Jóváhagytad a promptot: most már futhat.', pelda: {"ki": "Te írod (a jóváhagyott prompt futtatása)", "szoveg": "Olvasd el a brief.md és a kriteriumok.md fájlt, és készítsd el a briefben kért összefoglalót a megadott forrásból, a megadott helyre.", "h": "k5"} },
      { tol: 'ai', ig: 'kimenet', csomag: 'futtatja', szin: 'accent', szoveg: 'Az AI lefuttatja a jóváhagyott promptot, és elkészül a kimenet.', pelda: {"ki": "A kimenet eleje", "szoveg": "## Döntések\n- A bejelentkezési oldal november 17-én élesedik; felelős: Szalai Dorka. (Forrás: 2. pont)", "h": "k5"} },
      { aktiv: 'kimenet', buborek: 'Hol a forráshely?', ido: 4200, szoveg: 'A jóváhagyás nem helyettesíti a forrásellenőrzést: a kimenetet a forráshoz kell mérni.', pelda: {"ki": "A forrás 2. pontja: ezt keresed vissza", "szoveg": "2. Döntés: a bejelentkezési oldal november 17-én élesedik. Felelős: Szalai Dorka.", "h": "forras"} }
    ]
  });
})();

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
    pelda: 'A 0. gyakorlat példafeladata: heti követelmény-összefoglaló a workshop-jegyzetekből',
    meret: [1100, 600],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'cél, kritériumok,|döntés', ikon: 'ember', x: 118, y: 300, szin: 'jegyezd' },
      { id: 'ai', nev: 'AI', alcim: 'megírja, megmutatja,|futtatja', ikon: 'modell', x: 520, y: 300, szin: 'accent', w: 200 },
      { id: 'prompt', nev: 'Prompt', alcim: 'a hét elem|sorrendben', ikon: 'dokumentum', x: 950, y: 130, szin: 'elakadas' },
      { id: 'kimenet', nev: 'Kimenet', alcim: 'forráshoz|mérve', ikon: 'tablazat', x: 950, y: 470, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: 'cél + kritérium', szin: 'jegyezd', szoveg: 'Te mondod el a célt és a kritériumokat: mi a kimenet, mi a korlát, mi az ellenőrzés.',
        pelda: 'Te írod: „Kimenet: követelménylista táblázatban.\nKorlát: a javaslat nem döntés, hiány: Nincs megadva.\nEllenőrzés: minden követelményhez forráshely (fájl, pont).”' },
      { aktiv: 'ai', buborek: 'Mi hiányzik?', szoveg: 'Az AI nem talál ki hiányzó kritériumot: ami nincs megadva, az „Nincs megadva”, és rákérdez.',
        pelda: 'A hét elemből megvan a kimenet, a korlát és az ellenőrzés.\nNincs kimondva a címzett és a forrás: ezek helyén egyelőre „Nincs megadva” áll.' },
      { tol: 'ai', ig: 'te', csomag: 'pontosító kérdés', szaggatott: true, szin: 'accent', iv: -0.2, szoveg: 'Legfeljebb két pontosító kérdést tesz fel, mielőtt írni kezd.',
        pelda: 'Példa a két kérdésre: „Ki olvassa az összefoglalót, milyen előtudással?”\n„Miből dolgozhatok, és mihez nem nyúlhatok?”' },
      { tol: 'te', ig: 'ai', csomag: 'válasz', szin: 'jegyezd', szoveg: 'Te válaszolsz a saját szavaiddal. A mérce a tiéd marad.',
        pelda: 'Te írod: „A csapatvezető olvassa, aki a jegyzeteket nem olvasta. Csak a három megadott jegyzetből dolgozz.”' },
      { tol: 'ai', ig: 'prompt', csomag: 'megírja', szin: 'accent', jelzo: { szereplo: 'prompt', szoveg: '7 elem' }, szoveg: 'Az AI megírja a promptot a hét elemmel: Cél, Címzett, Forrás és határ, Kimeneti séma, Szabályok, Ellenőrzés, Mentés.',
        pelda: 'Cél: Egyoldalas heti követelmény-összefoglaló készül; kész, ha minden követelményhez van forráshely.\nCímzett: A csapatvezető, aki a jegyzeteket nem olvasta.\n… (még öt elem)' },
      { tol: 'prompt', ig: 'ai', csomag: 'kész prompt', szaggatott: true, szin: 'elakadas', iv: -0.2, szoveg: 'A prompt elkészült, de még nem fut: futtatás előtt meg kell mutatni.',
        pelda: 'A további sorok közül kettő:\nKimeneti séma: Táblázat: azonosító, követelmény, forráshely, státusz.\nMentés: Új, dátumozott nevű fájlba; meglévőt nem ír felül, új verziónevet ad.' },
      { tol: 'ai', ig: 'te', csomag: 'megmutatja', szaggatott: true, szin: 'elakadas', iv: -0.2, szoveg: 'Az AI futtatás előtt megmutatja neked a megírt promptot.',
        pelda: 'Az AI ezt írja: „A feladatod promptja a hét elem szerint:\nCél: … Címzett: … (még öt elem)\nA: jó így · B: javítom”' },
      { aktiv: 'te', buborek: 'A: futtasd így · B: javítom', szoveg: 'Te döntesz: jóváhagyod, vagy javítod. A megfogalmazás az AI-é, a döntés a tiéd.',
        pelda: 'Végigolvasod a hét sort: a „Forrás és határ” azt mondja-e, amit te mondtál („Csak a három megadott jegyzet; ami nincs bennük: Nincs megadva.”)?\nA két válasz: „A: jó így · B: javítom”' },
      { tol: 'te', ig: 'ai', csomag: 'A: jó így', szin: 'kesz', szoveg: 'Jóváhagytad a promptot: most már futhat.',
        pelda: 'Te írod: „A”' },
      { tol: 'ai', ig: 'kimenet', csomag: 'futtatja', szin: 'accent', szoveg: 'Az AI lefuttatja a jóváhagyott promptot, és elkészül a kimenet.',
        pelda: 'A kimenet a „Kimeneti séma” szerint készül: táblázat, oszlopai: azonosító | követelmény | forráshely | státusz\nMentés: új, dátumozott nevű fájlba.' },
      { aktiv: 'kimenet', buborek: 'Hol a forráshely?', ido: 4200, szoveg: 'A jóváhagyás nem helyettesíti a forrásellenőrzést: a kimenetet a forráshoz kell mérni.',
        pelda: 'Egy sort visszakeresel a megadott jegyzetben: ott áll-e a követelmény a megnevezett helyen?\nAhol nincs forráshely, ott a jelölés: „Nincs megadva”.' }
    ]
  });
})();

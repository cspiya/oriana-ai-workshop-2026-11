/* Wenova workshop – a 7. gyakorlat (saját folyamat átvitele) mozgó ábrája. Betöltés: a wenova-motion.js UTÁN.
   Forrás: Notebookok/07-sajat-atvitel-notebook.html, Feladatok/07-sajat-atvitel.md. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* Hogyan viszed át a nap módszerét a saját feladatodra: a notebook hét lépése */
  M.jelenet('sajat-atvitel', {
    tipus: 'aramlas',
    cim: 'Hogyan viszed át a nap módszerét a saját feladatodra?',
    meret: [1000, 600],
    szereplok: [
      { id: 'minta', nev: 'Mai minták', alcim: '04-Agent brief,|reviewer-recept', ikon: 'csillag', x: 130, y: 130, szin: 'tipp', w: 210 },
      { id: 'te', nev: 'Te', alcim: 'saját feladat,|saját szavak', ikon: 'ember', x: 120, y: 460, szin: 'jegyezd' },
      { id: 'mappa', nev: '07-Sajat', alcim: 'brief, sablonok,|terv, vállalás', ikon: 'mappa', x: 510, y: 290, szin: 'accent', w: 210 },
      { id: 'ellenor', nev: 'Ellenőr', alcim: 'vezető, kolléga|vagy még nincs', ikon: 'ellenor', x: 880, y: 290, szin: 'kesz' }
    ],
    lepesek: [
      { aktiv: 'te', buborek: 'melyik feladat?', szamlalo: 'A fázis · 16:05', szoveg: 'Kijelölöd a saját visszatérő feladatodat. A legkisebb, ismétlődő feladat a jó kiindulás.' },
      { tol: 'minta', ig: 'te', csomag: 'minta: a mai brief', szin: 'tipp', szoveg: 'Mintának ott a mai 04-Agent briefed és a sablon hét pontja.' },
      { tol: 'te', ig: 'mappa', csomag: 'agent-brief.md', szin: 'jegyezd', szoveg: 'Megírod a saját briefedet: a kimenet, a korlát és az ellenőrzés külön látszik; a körszám és a stop-szabály számmal szerepel.' },
      { tol: 'mappa', ig: 'te', csomag: 'script: mi hiányzik?', szaggatott: true, szin: 'figyelj', iv: -0.2, szoveg: 'Script nézi meg, megvan-e minden kötelező elem. Azt nem látja, hogy jó-e a tartalom; a hiányt te pótolod.' },
      { tol: 'te', ig: 'ellenor', csomag: 'ki ellenőriz?', szin: 'jegyezd', iv: 0.3, szoveg: 'Megnevezed, ki ellenőrzi az eredményt: a vezetőd, egy kolléga, vagy kimondod, hogy még nincs. Ez is információ.' },
      { tol: 'minta', ig: 'mappa', csomag: 'reviewer-recept', szin: 'tipp', szoveg: 'A mai reviewer-recept másolata a feladatodhoz igazítva a sablonok mappába kerül. A reviewer nem javít.' },
      { tol: 'te', ig: 'mappa', csomag: 'kovetkezo-lepes.md', szin: 'jegyezd', szamlalo: 'B fázis · 16:20', szoveg: 'Leírod a következő lépést négy elemmel: input, output, kritérium, írási határ. Ma nem élesítünk kötelezően.' },
      { tol: 'te', ig: 'mappa', csomag: 'ot-napos-terv.md', szin: 'jegyezd', szoveg: 'Pontosítod az 5 napos terv 1. napját és a holnap reggeli első lépést. A terv javaslat, nem vállalás.' },
      { tol: 'te', ig: 'mappa', csomag: 'vallalas.md', szin: 'jegyezd', szoveg: 'Vállalást teszel: az első valódi használat napja és a mérce. Ami nincs időponthoz és mércéhez kötve, az csak szándék.' },
      { aktiv: 'te', buborek: '30 nap: melyik fok?', szamlalo: 'Zárás · 16:30', szoveg: 'A csoport kimondja, melyik fokra lép a következő 30 napban, és ki a gazdája. A fokot a csoport jelöli.' },
      { tol: 'mappa', ig: 'te', csomag: 'holnap reggel', szin: 'kesz', iv: -0.2, ido: 4200, szoveg: 'Holnap reggel innen indulsz: brief, sablonok, terv, vállalás. A valós Oriana-feladat a saját fiókodban és gépeden marad.' }
    ]
  });
})();

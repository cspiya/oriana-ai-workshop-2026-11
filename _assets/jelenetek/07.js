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
    pelda: 'A saját feladatod: <a profilodban rögzített visszatérő feladat> (helyőrző: a tartalmát te adod)',
    meret: [1000, 600],
    szereplok: [
      { id: 'minta', nev: 'Mai minták', alcim: '04-Agent brief,|reviewer-recept', ikon: 'csillag', x: 130, y: 130, szin: 'tipp', w: 210 },
      { id: 'te', nev: 'Te', alcim: 'saját feladat,|saját szavak', ikon: 'ember', x: 120, y: 460, szin: 'jegyezd' },
      { id: 'mappa', nev: '07-Sajat', alcim: 'brief, sablonok,|terv, vállalás', ikon: 'mappa', x: 510, y: 290, szin: 'accent', w: 210 },
      { id: 'ellenor', nev: 'Ellenőr', alcim: 'vezető, kolléga|vagy még nincs', ikon: 'ellenor', x: 880, y: 290, szin: 'kesz' }
    ],
    lepesek: [
      { aktiv: 'te', buborek: 'melyik feladat?', szamlalo: 'A fázis · 16:05', szoveg: 'Kijelölöd a saját visszatérő feladatodat. A legkisebb, ismétlődő feladat a jó kiindulás.', pelda: 'Te: „Kezdjük a 7. gyakorlatot.”, majd: „A: a profilomban rögzített feladat.”\nVálasz: Feladat (profil.md): „<a profilodban rögzített feladat>” ✅ · DNS-verzió: <verzió> ✅ vagy Nincs megadva ⚠️' },
      { tol: 'minta', ig: 'te', csomag: 'minta: a mai brief', szin: 'tipp', szoveg: 'Mintának ott a mai 04-Agent briefed és a sablon hét pontja.', pelda: 'Mai minták: Munka/04-Agent/agent-brief.md ✅ · kriteriumok.md ✅\nA váz (07-sajat-brief-sablon.md): 1. Cél · 2. Forrás · 3. Korlát · 4. Ellenőrzés · 5. Menet · 6. Stop · 7. Zárás' },
      { tol: 'te', ig: 'mappa', csomag: 'agent-brief.md', szin: 'jegyezd', szoveg: 'Megírod a saját briefedet: a kimenet, a korlát és az ellenőrzés külön látszik; a körszám és a stop-szabály számmal szerepel.', pelda: '# Agent-brief: <saját folyamat neve>\nMód: Work Local; indok: helyi fájl. DNS-verzió: <verzió és hely, vagy: nincs>.\n1. Cél: <kimenet, címzett és formátum>. 2. Forrás: … (a többit te írod) → Munka/07-Sajat/agent-brief.md' },
      { tol: 'mappa', ig: 'te', csomag: 'script: mi hiányzik?', szaggatott: true, szin: 'figyelj', iv: -0.2, szoveg: 'Script nézi meg, megvan-e minden kötelező elem. Azt nem látja, hogy jó-e a tartalom; a hiányt te pótolod.', pelda: 'a hét pont megvan: ✅ · a forrásnevek meg vannak adva: ✅\na körszám és a stop-szabály számmal szerepel: ⚠️ hiányzik (például)\njelszó- vagy kulcsmintázat: nincs találat ✅' },
      { tol: 'te', ig: 'ellenor', csomag: 'ki ellenőriz?', szin: 'jegyezd', iv: 0.3, szoveg: 'Megnevezed, ki ellenőrzi az eredményt: a vezetőd, egy kolléga, vagy kimondod, hogy még nincs. Ez is információ.', pelda: 'Te: „B: egy kolléga.” (A: közvetlen vezető · B: kolléga · C: még nincs)\nVálasz: „Ellenőr: egy kolléga (a nevét te mondod meg; valós személyt nem találok ki).”' },
      { tol: 'minta', ig: 'mappa', csomag: 'reviewer-recept', szin: 'tipp', szoveg: 'A mai reviewer-recept másolata a feladatodhoz igazítva a sablonok mappába kerül. A reviewer nem javít.', pelda: 'Mentve: Munka/07-Sajat/sablonok/reviewer-brief-sablon.md: a mai recept másolata, a feladatodhoz igazítandó részek <…> jelöléssel.\nBenne: friss beszélgetés, szűk csomag, a reviewer nem javít.' },
      { tol: 'te', ig: 'mappa', csomag: 'kovetkezo-lepes.md', szin: 'jegyezd', szamlalo: 'B fázis · 16:20', szoveg: 'Leírod a következő lépést négy elemmel: input, output, kritérium, írási határ. Ma nem élesítünk kötelezően.', pelda: 'Te: „C: kézi ismétlés előkészítése.”\nNév: … · Mikor fut: nincs ütemezés (kézi ismétlés) · Input: … · Output: … · Kritérium: … · Írási határ: … · Állapot ma: mentett szöveg' },
      { tol: 'te', ig: 'mappa', csomag: 'ot-napos-terv.md', szin: 'jegyezd', szoveg: 'Pontosítod az 5 napos terv 1. napját és a holnap reggeli első lépést. A terv javaslat, nem vállalás.', pelda: 'ot-napos-terv.md, 1. nap (javaslat: 2026-11-13): „A saját brief első futtatása a saját feladaton, friss beszélgetésben” | Kivel: <a 4. lépés döntése, vagy: még nincs>\n2–5. nap: előtöltött javaslat' },
      { tol: 'te', ig: 'mappa', csomag: 'vallalas.md', szin: 'jegyezd', szoveg: 'Vállalást teszel: az első valódi használat napja és a mérce. Ami nincs időponthoz és mércéhez kötve, az csak szándék.', pelda: 'Te: „A és A: 2026-11-13-ra vállalom az első valódi használatot, és a teljes időt mérem.”\nvallalas.md: Feladat: <a profilodban rögzített feladat> · Nap: 2026-11-13 · Ellenőrző személy: … · Mérce: teljes idő' },
      { aktiv: 'te', buborek: '30 nap: melyik fok?', szamlalo: 'Zárás · 16:30', szoveg: 'A csoport kimondja, melyik fokra lép a következő 30 napban, és ki a gazdája. A fokot a csoport jelöli.', pelda: 'Te: „A: eggyel feljebb a ma jelölt foknál: <a fok neve>; gazda: <név vagy szerepkör>.”\nA vallalas.md végén: a csoport foka a következő 30 napra: <a fok neve> · gazda: <név, szerepkör vagy Nincs megadva>' },
      { tol: 'mappa', ig: 'te', csomag: 'holnap reggel', szin: 'kesz', iv: -0.2, ido: 4200, szoveg: 'Holnap reggel innen indulsz: brief, sablonok, terv, vállalás. A valós Oriana-feladat a saját fiókodban és gépeden marad.', pelda: 'Munka/07-Sajat/: agent-brief.md · kovetkezo-lepes.md · ot-napos-terv.md · vallalas.md\nsablonok/: agent-brief-sablon.md · kriteriumok-sablon.md · reviewer-brief-sablon.md' }
    ]
  });
})();

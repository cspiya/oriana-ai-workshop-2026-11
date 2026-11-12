/* Wenova workshop – a „Projekt-szabályrendszer promptokkal” gyakorlat (uc3) mozgó ábrái.
   Betöltés: a wenova-motion.js UTÁN. Az ALFA csak példa az indítók jelére; a résztvevő saját jelet választ. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* uc3-epites: rövid cél → az AI kérdez → te válaszolsz → az AI megírja → te átnézed; négy szabályfájl, a végén AGENTS.md */
  M.jelenet('uc3-epites', {
    tipus: 'aramlas',
    cim: 'Így áll össze a szabálygyűjtemény: rövid cél, kérdések, kész szabály',
    meret: [1000, 640],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'célt mondasz,|válaszolsz, átnézel', ikon: 'ember', x: 118, y: 370, szin: 'jegyezd' },
      { id: 'ai', nev: 'Beszélgetés', alcim: 'egy beszélgetés,|kilenc rövid prompt', ikon: 'modell', x: 466, y: 370, szin: 'accent', w: 210 },
      { id: 'recept', nev: 'Recept', alcim: 'az AI mércéje:|mi kell a szabályba', ikon: 'szabaly', x: 846, y: 215, szin: 'tipp', w: 248 },
      { id: 'fajlok', nev: 'Szabályfájlok', alcim: 'működési minta, maker,|reviewer, orchestrator', ikon: 'mappa', x: 846, y: 370, szin: 'elakadas', w: 248 },
      { id: 'agents', nev: 'AGENTS.md', alcim: 'a projekt|belépő fájlja', ikon: 'dokumentum', x: 846, y: 525, szin: 'kesz', w: 248 }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: '1. prompt: a cél', szin: 'jegyezd', szamlalo: '1. prompt · kiindulás', szoveg: 'Egy rövid prompttal kezdesz: megmondod, melyik projekthez és milyen szerepben (BA vagy Sales) kérsz szabályrendszert, és megnevezed a receptet.' },
      { tol: 'ai', ig: 'recept', csomag: 'beolvasás', szin: 'accent', szoveg: 'Az AI beolvassa a receptet. Ezt nem te másolod be: a recept a tananyag része, az AI-nak szól.' },
      { tol: 'recept', ig: 'ai', csomag: 'a mérce', szaggatott: true, szin: 'tipp', iv: -0.2, szoveg: 'A receptből tudja az AI, melyik szabályfájlba mi kell, mit írhat meg magától, és mit kell tőled megkérdeznie.' },
      { tol: 'ai', ig: 'te', csomag: 'kérdések', szaggatott: true, szin: 'accent', iv: -0.2, buborek: 'Legfeljebb három kérdés', szoveg: 'Az AI nem találgat: kérdez. Egyszerre legfeljebb hármat, választható opciókkal; az első opció az ajánlott.' },
      { tol: 'te', ig: 'ai', csomag: 'válaszok', szin: 'jegyezd', szoveg: 'Válaszolsz: kiválasztasz egy opciót, vagy a saját szavaiddal leírod. Amit csak te tudhatsz a projektről, azt így kapja meg az AI.' },
      { tol: 'te', ig: 'ai', csomag: '2. prompt', szin: 'jegyezd', szamlalo: '2–5. prompt · négy szabályfájl', szoveg: 'A 2. prompt megint csak a célt mondja: „Írd meg a projekt működési mintáját.” A részletekre az AI kérdez rá.' },
      { tol: 'ai', ig: 'fajlok', csomag: 'működési minta', szin: 'elakadas', jelzo: { szereplo: 'fajlok', szoveg: '1 / 4' }, szoveg: 'A válaszaidból és a receptből elkészül az első szabályfájl. Az általános, profi szabályokat az AI írja; a projektre szabott részt tőled kapta.' },
      { tol: 'fajlok', ig: 'te', csomag: 'átnézed', szaggatott: true, szin: 'elakadas', iv: -0.25, buborek: 'Ezt írnád át?', szoveg: 'Megnyitod és átnézed a fájlt. Ha valamit másképp szeretnél, egy mondatban kéred: „Ezt a pontot írd át így…”' },
      { aktiv: 'ai', buborek: 'maker, reviewer, orchestrator', jelzo: { szereplo: 'fajlok', szoveg: '4 / 4' }, szoveg: 'Ugyanez a kör még háromszor: a 3. prompt a maker, a 4. a reviewer, az 5. az orchestrator szabályait kéri. Mindig rövid cél, kérdések, kész fájl.' },
      { tol: 'te', ig: 'ai', csomag: '6. prompt', szin: 'jegyezd', szamlalo: '6. prompt · összeállítás', szoveg: 'A 6. prompttal azt kéred, hogy a négy szabályfájlból álljon össze a projekt AGENTS.md fájlja. Az AI megkérdezi, mi legyen az indítók jele.' },
      { tol: 'fajlok', ig: 'agents', csomag: 'négy szabályfájl', szin: 'kesz', iv: 0, jelzo: { szereplo: 'agents', szoveg: 'kész' }, szoveg: 'Az AGENTS.md önállóan is érthető: benne van a három szerep szabálya és az indítók. Ebből dolgozik az AI, amikor a projektben új beszélgetést nyitsz.' },
      { tol: 'agents', ig: 'te', csomag: 'ellenőrzés, próba', szaggatott: true, szin: 'kesz', iv: 0.2, ido: 4400, szoveg: 'A 7–9. prompttal ellenőrizteted a csomagot, kipróbálod egy indítóval, és eldöntöd: projektszabály marad, vagy javaslatként megy a céges DNS-be.' }
    ]
  });

  /* uc3-mukodes: így dolgozik a kész csomag: indító → AGENTS.md → maker → kapuk → reviewer → napló → döntés */
  M.jelenet('uc3-mukodes', {
    tipus: 'aramlas',
    cim: 'Így dolgozik utána a szabálygyűjtemény: három szerep, három kapu, egy napló',
    meret: [1000, 640],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'orchestrator: bontasz,|kaput tartasz', ikon: 'karmester', x: 126, y: 340, szin: 'jegyezd', w: 204 },
      { id: 'agents', nev: 'AGENTS.md', alcim: 'indítók és|a három mód', ikon: 'szabaly', x: 852, y: 340, szin: 'tipp', w: 220 },
      { id: 'maker', nev: 'Maker', alcim: 'készít, mér,|javít', ikon: 'keszito', x: 500, y: 165, szin: 'accent', w: 196 },
      { id: 'reviewer', nev: 'Reviewer', alcim: 'ellenőriz,|nem javít', ikon: 'ellenor', x: 500, y: 515, szin: 'elakadas', w: 196 },
      { id: 'naplo', nev: 'Napló', alcim: 'körönként|egy sor', ikon: 'naplo', x: 500, y: 340, szin: 'kesz', w: 196 }
    ],
    lepesek: [
      { tol: 'te', ig: 'maker', csomag: 'ALFA maker', szin: 'jegyezd', szamlalo: 'Kör 1', szoveg: 'Friss beszélgetésben beírod a maker indítóját. Ennyi a prompt: a szabályok már a projektben vannak.' },
      { tol: 'agents', ig: 'maker', csomag: 'maker mód', szin: 'tipp', iv: 0, szoveg: 'Az AI az AGENTS.md fájlból tudja, hogy az indítóra a maker szabályai szerint dolgozik: mit olvashat, hogyan mér, mikor áll meg.' },
      { tol: 'maker', ig: 'te', csomag: 'terv', szaggatott: true, szin: 'accent', iv: -0.2, buborek: '1. kapu: a terv', szoveg: 'A maker legfeljebb nyolc lépéses tervet mutat. Ez az első kapu: te hagyod jóvá, mielőtt önállóan dolgozni kezd.' },
      { tol: 'te', ig: 'maker', csomag: 'jóváhagyás', szin: 'jegyezd', szoveg: 'Jóváhagyod a tervet, vagy pontosítod. Innentől a maker egyedül halad.' },
      { aktiv: 'maker', buborek: 'készít, mér, javít', jelzo: { szereplo: 'maker', szoveg: 'v1' }, szoveg: 'A maker elkészíti a kimenetet, a kritériumokhoz méri, és a legsúlyosabb hibát javítja. Új verzióba ment, semmit nem ír felül.' },
      { tol: 'maker', ig: 'naplo', csomag: 'naplósor', szin: 'kesz', iv: 0, szoveg: 'Minden körről egy sor kerül a naplóba: mi történt, mi lett az eredmény, mi a döntés és az oka.' },
      { tol: 'maker', ig: 'te', csomag: 'v1 kész', szaggatott: true, szin: 'accent', iv: -0.2, buborek: '2. kapu: átvétel', szoveg: 'A második kapu az átvétel: megnézed, megvan-e minden kimenet, és összeállítod a csomagot a reviewernek.' },
      { tol: 'te', ig: 'reviewer', csomag: 'ALFA reviewer R1', szin: 'jegyezd', iv: 0.15, szoveg: 'Másik friss beszélgetésben indítod a reviewert. Csak a csomagot kapja meg: a maker beszélgetését és naplóját nem.' },
      { tol: 'agents', ig: 'reviewer', csomag: 'reviewer mód', szin: 'tipp', iv: 0, szoveg: 'Ugyanaz az AGENTS.md most a reviewer szabályait adja: független, megállapít, de nem javít.' },
      { aktiv: 'reviewer', buborek: 'megállapít, nem javít', szoveg: 'A reviewer minden kritériumot megítél, a számokat maga számolja újra, és bizonyítékkal sorolja fel a megállapításait.' },
      { tol: 'reviewer', ig: 'te', csomag: 'R1 jelentés', szaggatott: true, szin: 'elakadas', iv: 0.15, buborek: '3. kapu: döntés', szoveg: 'A harmadik kapu a döntés, és ez a tiéd: mehet, javítani kell, vagy megállunk.' },
      { tol: 'te', ig: 'maker', csomag: 'ALFA javítás R1', szin: 'figyelj', szamlalo: 'Kör 2', jelzo: { szereplo: 'maker', szoveg: 'v2' }, szoveg: 'Ha javítani kell, a maker csak a reviewer által megnevezett hibákat javítja, új verzióba. Utána jön a második review.' },
      { tol: 'te', ig: 'naplo', csomag: 'döntés és ok', szin: 'kesz', iv: 0, ido: 4400, szoveg: 'A végén a napló megmutatja, ki mit döntött és miért. A „kész” nem küldési engedély: kifelé csak a te döntésed után megy bármi.' }
    ]
  });

  /* uc3-szint: projektszabály vagy céges DNS */
  M.jelenet('uc3-szint', {
    tipus: 'aramlas',
    cim: 'Projektszabály vagy céges DNS: hová kerül a kész csomag',
    meret: [1000, 640],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'a csomag gazdája', ikon: 'ember', x: 118, y: 370, szin: 'jegyezd' },
      { id: 'csomag', nev: 'Szabálycsomag', alcim: 'AGENTS.md|és négy szabályfájl', ikon: 'mappa', x: 466, y: 370, szin: 'accent', w: 250 },
      { id: 'projekt', nev: 'Saját projekt', alcim: 'azonnal érvényes,|de csak itt', ikon: 'csillag', x: 846, y: 215, szin: 'kesz', w: 248 },
      { id: 'gazda', nev: 'DNS-gazda', alcim: 'jóváhagy,|verziót ad', ikon: 'kapu', x: 846, y: 370, szin: 'elakadas', w: 248 },
      { id: 'dns', nev: 'Céges DNS', alcim: 'mindenkire érvényes|közös szabály', ikon: 'szabaly', x: 846, y: 525, szin: 'tipp', w: 248 }
    ],
    lepesek: [
      { tol: 'te', ig: 'csomag', csomag: '9. prompt: melyik szint?', szin: 'jegyezd', szamlalo: 'A döntés', szoveg: 'Megkérdezed: maradjon ez projektszabály, vagy javasoljuk a céges DNS-be? A DNS a vállalati szabályok verziózott, gazdával ellátott gyűjteménye.' },
      { tol: 'csomag', ig: 'te', csomag: 'kérdések', szaggatott: true, szin: 'accent', iv: -0.2, buborek: 'Más is használná?', szoveg: 'Az AI három dolgot kérdez: használná-e más projekt is, mi igaz csak erre a projektre, és ki a közös DNS gazdája.' },
      { tol: 'csomag', ig: 'projekt', csomag: 'bemásolod', szin: 'kesz', iv: -0.15, szamlalo: 'A út · projektszabály', jelzo: { szereplo: 'projekt', szoveg: 'érvényes' }, szoveg: 'A csomagot a saját projektmappád gyökerébe másolod. Projektszabályként azonnal érvényes, és te vagy a gazdája.' },
      { aktiv: 'projekt', buborek: 'ALFA maker', szoveg: 'Itt jön a valódi próba: a saját projektedben friss beszélgetést nyitsz, és csak az indítót írod be.' },
      { tol: 'csomag', ig: 'gazda', csomag: 'dns-javaslat.md', szin: 'elakadas', iv: 0, szamlalo: 'B út · javaslat a DNS-be', szoveg: 'Ha más is használná, javaslat készül a gazdának: mi általános, mi projektfüggő, melyik fájl melyik DNS-modulba illene.' },
      { aktiv: 'gazda', buborek: 'jóváhagyásra vár', szoveg: 'A javaslat nem döntés. A DNS-t a gazdája frissíti: jóváhagyja, visszakérdez, vagy elutasítja.' },
      { tol: 'gazda', ig: 'dns', csomag: 'új verzió', szin: 'tipp', iv: 0, jelzo: { szereplo: 'dns', szoveg: 'új verzió' }, szoveg: 'Jóváhagyás után a szabály új verzióval kerül a közös DNS-be, és innentől mindenkire érvényes.' },
      { tol: 'projekt', ig: 'te', csomag: 'addig is érvényes', szaggatott: true, szin: 'kesz', iv: 0.28, ido: 4400, szoveg: 'Bármelyik utat választod, a csomag a projektedben addig is érvényes: a két szint nem zárja ki egymást.' }
    ]
  });
})();

/* Wenova workshop – a 2. gyakorlat (RONDO-portál adatgyűjtés) mozgó ábrái. Betöltés: a wenova-motion.js UTÁN.
   FIKTÍV OKTATÁSI MINTA: a RONDO Hullámkartongyártó Kft. valós cég, a projekt kitalált. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* 1. Az adat útja: portál → asszisztens → napló és összevetés; hol a próbafutás, hol dönt az ember */
  M.jelenet('portal-adatut', {
    tipus: 'aramlas',
    cim: 'Az adat útja a portálról a naplóig: próbafutás, alkalmazás, visszaolvasás',
    meret: [1000, 590],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'határ, jóslat,|döntés', ikon: 'ember', x: 112, y: 300, szin: 'jegyezd' },
      { id: 'ai', nev: 'Asszisztens', alcim: 'olvas, tervez,|naplóz', ikon: 'modell', x: 520, y: 300, szin: 'accent', w: 210 },
      { id: 'portal', nev: 'Portál', alcim: 'hat ügy,|nincs API', ikon: 'bongeszo', x: 870, y: 135, szin: 'tipp' },
      { id: 'naplo', nev: 'Napló', alcim: 'soronként:|előtte, utána', ikon: 'naplo', x: 870, y: 470, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: 'a határ', szin: 'jegyezd', szoveg: 'Kimondod a határt három mondatban: kimenet, korlát, ellenőrzés. Az asszisztens csak azt teheti, amit előre jóváhagytál.' },
      { tol: 'te', ig: 'portal', csomag: 'bejelentkezés', szin: 'jegyezd', iv: -0.28, szoveg: 'A portálra te jelentkezel be; jelszó nem kerül a beszélgetésbe. Az asszisztens utána dolgozik.' },
      { tol: 'ai', ig: 'portal', csomag: 'csak olvas', szin: 'accent', szamlalo: 'Kigyűjtés', szoveg: 'Kigyűjtés: az asszisztens megnyitja mind a hat ügyet, és csak olvas. A portál minden szövege adat, nem utasítás.' },
      { tol: 'portal', ig: 'ai', csomag: 'hat sor, hat mező', szaggatott: true, szin: 'tipp', iv: -0.2, szoveg: 'Visszajön hat sor, soronként hat mezővel. Ami üres, az „Nincs megadva”: nem pótolja, nem becsüli, nem veszi át másik ügyből.' },
      { tol: 'te', ig: 'ai', csomag: 'státuszjóslat', szin: 'jegyezd', szamlalo: 'Dry run', szoveg: 'Te mondod meg előre, soronként, mi legyen a tervezett státusz. A státusz a szabályból következik, nem a megérzésből.' },
      { tol: 'ai', ig: 'portal', csomag: 'dry run', szin: 'accent', szoveg: 'Dry run (próbafutás): a portál módosítás nélkül mutatja meg, mi változna. Itt még semmit nem alkalmazunk.' },
      { tol: 'ai', ig: 'naplo', csomag: 'dry-run sorok', szin: 'kesz', szoveg: 'A naplóba ügyenként egy dry-run sor kerül, mindegyikben előtte és utána értékkel.' },
      { tol: 'ai', ig: 'te', csomag: 'eltérések', szaggatott: true, szin: 'accent', iv: -0.2, buborek: 'Mehet az alkalmazás?', szoveg: 'Látod a jóslatod és a dry run eltéréseit. Itt te döntesz: mehet az alkalmazás, vagy javítasz a terven.' },
      { tol: 'te', ig: 'ai', csomag: 'jóváhagyás', szin: 'jegyezd', szamlalo: 'Alkalmazás', szoveg: 'Jóváhagyod a tervet. Alkalmazni csak a jelenlegi tervhez futtatott dry run után lehet.' },
      { tol: 'ai', ig: 'portal', csomag: 'státuszok mentése', szin: 'accent', szoveg: 'Alkalmazás: a jóváhagyott terv a portálra kerül, és minden művelet naplósort kap.' },
      { tol: 'portal', ig: 'ai', csomag: 'visszaolvasás', szaggatott: true, szin: 'kesz', iv: -0.2, szoveg: 'Visszaolvasás azonosító alapján: a portálon tényleg az áll-e, amit a napló állít?' },
      { aktiv: 'ai', buborek: 'egy hiba, egy újrapróba', szoveg: 'Egy hibára legfeljebb egy újrapróbálás van. Utána az asszisztens megáll, és te döntesz a hibás sorról.' },
      { tol: 'portal', ig: 'te', csomag: 'export (CSV)', szaggatott: true, szin: 'tipp', iv: 0.28, szamlalo: 'Összevetés', szoveg: 'A portál saját naplóját te töltöd le (CSV-export). Ez a második, független napló.' },
      { tol: 'ai', ig: 'te', csomag: 'összevetés', szin: 'kesz', iv: -0.2, ido: 4200, szoveg: 'Az asszisztens összeveti a két naplót. Eltérésnél nem igazítja az adatot: megnevezi a tételt, a döntés a tiéd.' }
    ]
  });

  /* 2. B-terv: mi történik, ha a böngészős út nem érhető el (D út) */
  M.jelenet('portal-d-ut', {
    tipus: 'aramlas',
    cim: 'Ha a böngészős út nem érhető el: a D út, ugyanazzal a módszerrel',
    meret: [1000, 560],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'kézzel kezeled|a portált', ikon: 'ember', x: 140, y: 400, szin: 'jegyezd' },
      { id: 'ai', nev: 'Asszisztens', alcim: 'ellenőrzőlista,|összevetés', ikon: 'modell', x: 500, y: 150, szin: 'accent', w: 220 },
      { id: 'portal', nev: 'Portál', alcim: 'a naplót|ő adja', ikon: 'bongeszo', x: 860, y: 400, szin: 'tipp' }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: 'A, B vagy C út', szin: 'jegyezd', szoveg: 'Böngészőutat választasz: bővítmény, beépített böngésző vagy Computer Use. Ezek akkor működnek, ha a munkatérben elérhetők.' },
      { tol: 'ai', ig: 'portal', csomag: 'megnyitási próba', szin: 'accent', szamlalo: 'Próba: 2 perc', szoveg: 'Az asszisztens rövid próbával ellenőrzi, megnyílik-e a portál bejelentkezési képernyője. Erre legfeljebb két perc van.' },
      { aktiv: 'portal', buborek: 'nem nyílik meg', szoveg: 'Ha a böngészős út két perc után sem nyitja meg a portált, vagy egyik sem érhető el, nincs további próbálkozás.' },
      { tol: 'ai', ig: 'te', csomag: 'D út: kézi', szaggatott: true, szin: 'figyelj', iv: -0.2, szamlalo: 'D út', szoveg: 'Életbe lép a D út. A módszer marad: dry run, napló, visszaolvasás, csak kézzel.' },
      { tol: 'te', ig: 'portal', csomag: 'kézi kezelés', szin: 'jegyezd', iv: 0.22, szoveg: 'Te nyitod meg és kezeled kézzel a portált. A tréner felvételt mutat az automatizálásról.' },
      { tol: 'ai', ig: 'te', csomag: 'ellenőrzőlista', szin: 'accent', iv: -0.2, szoveg: 'Az asszisztens ellenőrzőlistát készít: mezők, státuszszabály, sorrend.' },
      { tol: 'portal', ig: 'te', csomag: 'napló', szaggatott: true, szin: 'tipp', iv: 0.22, szoveg: 'A naplót a portál adja, ugyanabban a formában.' },
      { tol: 'te', ig: 'ai', csomag: 'bemásolt táblázat', szin: 'jegyezd', szoveg: 'Bemásolod a táblázatodat. Az asszisztens ugyanazokat az ellenőrzéseket végzi el rajta, mint a böngészős úton.' },
      { tol: 'ai', ig: 'te', csomag: 'összevetés', szin: 'kesz', iv: -0.2, ido: 4400, szoveg: 'Az összevetés ugyanúgy elkészül. Ez a módszer gyakorlása, nem élő automatizálási siker, és a kimeneten így jelöljük.' }
    ]
  });
})();

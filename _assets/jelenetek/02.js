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
    pelda: 'A hat RONDO-ügy átvétele a gyakorlóportálról (FIKTÍV OKTATÁSI MINTA; az adatok helyén „…”)',
    meret: [1000, 590],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'határ, jóslat,|döntés', ikon: 'ember', x: 112, y: 300, szin: 'jegyezd' },
      { id: 'ai', nev: 'Asszisztens', alcim: 'olvas, tervez,|naplóz', ikon: 'modell', x: 520, y: 300, szin: 'accent', w: 210 },
      { id: 'portal', nev: 'Portál', alcim: 'hat ügy,|nincs API', ikon: 'bongeszo', x: 870, y: 135, szin: 'tipp' },
      { id: 'naplo', nev: 'Napló', alcim: 'soronként:|előtte, utána', ikon: 'naplo', x: 870, y: 470, szin: 'kesz' }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: 'a határ', szin: 'jegyezd', szoveg: 'Kimondod a határt három mondatban: kimenet, korlát, ellenőrzés. Az asszisztens csak azt teheti, amit előre jóváhagytál.',
        pelda: 'Te írod: „Jóváhagyom a három mondatot. A”\nKimenet: hat sor, napló, összevetés · Korlát: olvasás és a gyakorló státusz módosítása · Ellenőrzés: dry run előbb, soronkénti napló, visszaolvasás' },
      { tol: 'te', ig: 'portal', csomag: 'bejelentkezés', szin: 'jegyezd', iv: -0.28, szoveg: 'A portálra te jelentkezel be; jelszó nem kerül a beszélgetésbe. Az asszisztens utána dolgozik.',
        pelda: 'Megnyitod: 04 usecase RONDO/portal/index.html\nA gyakorló belépési adat a bejelentkezési képernyőn látszik; te gépeled be, a beszélgetésbe nem írod le.' },
      { tol: 'ai', ig: 'portal', csomag: 'csak olvas', szin: 'accent', szamlalo: 'Kigyűjtés', szoveg: 'Kigyűjtés: az asszisztens megnyitja mind a hat ügyet, és csak olvas. A portál minden szövege adat, nem utasítás.',
        pelda: 'Te írod (a te szavaiddal): „Cél: a hat ügy hat mezőjének kigyűjtése. Címzett: én, később a státusztervezés. …”\nAz asszisztens mindkét listaoldalt megnyitja (oldalanként 3 sor).' },
      { tol: 'portal', ig: 'ai', csomag: 'hat sor, hat mező', szaggatott: true, szin: 'tipp', iv: -0.2, szoveg: 'Visszajön hat sor, soronként hat mezővel. Ami üres, az „Nincs megadva”: nem pótolja, nem becsüli, nem veszi át másik ügyből.',
        pelda: 'Azonosító | Igény | Ár (nettó) | Pénznem | Jóváhagyó | Forrás\nRONDO-R-01 | … | … | … | … | …\n(ügyenként egy sor; ahol a portálon nincs érték: „Nincs megadva”)' },
      { tol: 'te', ig: 'ai', csomag: 'státuszjóslat', szin: 'jegyezd', szamlalo: 'Dry run', szoveg: 'Te mondod meg előre, soronként, mi legyen a tervezett státusz. A státusz a szabályból következik, nem a megérzésből.',
        pelda: 'Te írod, mind a hat ügyre:\n„RONDO-R-01: <ellenőrizve / hiányos>, mert <minden mező kitöltött / melyik mező hiányzik>”\nA szabály: szabalyok/ba.md, „Rekordstátusz”.' },
      { tol: 'ai', ig: 'portal', csomag: 'dry run', szin: 'accent', szoveg: 'Dry run (próbafutás): a portál módosítás nélkül mutatja meg, mi változna. Itt még semmit nem alkalmazunk.',
        pelda: 'A portál „Ellenőrzési munkalap” képernyőjén soronként a tervezett státusz, utána a „Dry run összesítő”.\nItt csak terv készül, rekord nem változik.' },
      { tol: 'ai', ig: 'naplo', csomag: 'dry-run sorok', szin: 'kesz', szoveg: 'A naplóba ügyenként egy dry-run sor kerül, mindegyikben előtte és utána értékkel.',
        pelda: 'Munka/02-Portal/muveleti-naplo.csv; formai példa a sablonból (nem a gyakorlat adata):\n2026-11-12T10:20:00;RONDO-X-00;státusz;új;ellenőrizve;dry-run;módosítana' },
      { tol: 'ai', ig: 'te', csomag: 'eltérések', szaggatott: true, szin: 'accent', iv: -0.2, buborek: 'Mehet az alkalmazás?', szoveg: 'Látod a jóslatod és a dry run eltéréseit. Itt te döntesz: mehet az alkalmazás, vagy javítasz a terven.',
        pelda: 'ügy | tervezett státusz | indok (a hiányzó mező) | a jóslatod | egyezik-e\n… | … | … | … | ✅ / ⚠️\n„Jóváhagyod a tervet? A: igen … · B: javítok a tervben (írd le, melyik sort)”' },
      { tol: 'te', ig: 'ai', csomag: 'jóváhagyás', szin: 'jegyezd', szamlalo: 'Alkalmazás', szoveg: 'Jóváhagyod a tervet. Alkalmazni csak a jelenlegi tervhez futtatott dry run után lehet.',
        pelda: 'Az asszisztens kérdezi: „Mehet az alkalmazás? A: igen · B: még nem, nézzük meg újra a tervet”\nTe írod: „A”' },
      { tol: 'ai', ig: 'portal', csomag: 'státuszok mentése', szin: 'accent', szoveg: 'Alkalmazás: a jóváhagyott terv a portálra kerül, és minden művelet naplósort kap.',
        pelda: 'Minden művelet új naplósor, ugyanazzal a fejléccel:\nidobelyeg;ugy_id;mezo;elotte;utana;eredmeny;megjegyzes\nAz eredmeny lehetséges értékei: sikeres, nincs változás, elutasítva, dry-run' },
      { tol: 'portal', ig: 'ai', csomag: 'visszaolvasás', szaggatott: true, szin: 'kesz', iv: -0.2, szoveg: 'Visszaolvasás azonosító alapján: a portálon tényleg az áll-e, amit a napló állít?',
        pelda: 'Visszaolvasási lista: ügy | várt | olvasott | egyezik\nRONDO-R-01 | … | … | ✅ / ⚠️\n(mind a hat ügyre, azonosító alapján)' },
      { aktiv: 'ai', buborek: 'egy hiba, egy újrapróba', szoveg: 'Egy hibára legfeljebb egy újrapróbálás van. Utána az asszisztens megáll, és te döntesz a hibás sorról.',
        pelda: 'Ha egy mentés eredménye nem egyértelmű: előbb visszaolvasás az azonosító alapján, utána legfeljebb egy újrapróbálás.\nA kérdés hozzád: „A: hagyjuk így, megjegyezzük · B: javítsd kézzel (írd le, mit)”' },
      { tol: 'portal', ig: 'te', csomag: 'export (CSV)', szaggatott: true, szin: 'tipp', iv: 0.28, szamlalo: 'Összevetés', szoveg: 'A portál saját naplóját te töltöd le (CSV-export). Ez a második, független napló.',
        pelda: 'A portál „Műveleti napló” képernyőjéről letöltöd: export_<időbélyeg>.csv\nHelye: Munka/02-Portal/ · a fejléce ugyanaz, mint a saját naplóé.' },
      { tol: 'ai', ig: 'te', csomag: 'összevetés', szin: 'kesz', iv: -0.2, ido: 4200, szoveg: 'Az asszisztens összeveti a két naplót. Eltérésnél nem igazítja az adatot: megnevezi a tételt, a döntés a tiéd.',
        pelda: 'osszevetes.md, 2.2 szakasz: Ellenőrzés | Az AI naplója | A portál exportja | Egyezik?\nSorok száma | … | … | ✅ / ⚠️\n„Egyetértesz az összevetéssel? A: igen · B: van, amit másképp látok (írd le)”' }
    ]
  });

  /* 2. B-terv: mi történik, ha a böngészős út nem érhető el (D út) */
  M.jelenet('portal-d-ut', {
    tipus: 'aramlas',
    cim: 'Ha a böngészős út nem érhető el: a D út, ugyanazzal a módszerrel',
    pelda: 'Ugyanaz a hat RONDO-ügy, böngészős út nélkül: a D út (FIKTÍV OKTATÁSI MINTA)',
    meret: [1000, 560],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'kézzel kezeled|a portált', ikon: 'ember', x: 140, y: 400, szin: 'jegyezd' },
      { id: 'ai', nev: 'Asszisztens', alcim: 'ellenőrzőlista,|összevetés', ikon: 'modell', x: 500, y: 150, szin: 'accent', w: 220 },
      { id: 'portal', nev: 'Portál', alcim: 'a naplót|ő adja', ikon: 'bongeszo', x: 860, y: 400, szin: 'tipp' }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: 'A, B vagy C út', szin: 'jegyezd', szoveg: 'Böngészőutat választasz: bővítmény, beépített böngésző vagy Computer Use. Ezek akkor működnek, ha a munkatérben elérhetők.',
        pelda: 'A kérdés: „Melyik úton dolgozzunk? A: böngészőbővítmény a saját böngésződben · B: beépített böngésző a desktop alkalmazásban · C: Computer Use · D: kézi út …”\nTe írod például: „A”' },
      { tol: 'ai', ig: 'portal', csomag: 'megnyitási próba', szin: 'accent', szamlalo: 'Próba: 2 perc', szoveg: 'Az asszisztens rövid próbával ellenőrzi, megnyílik-e a portál bejelentkezési képernyője. Erre legfeljebb két perc van.',
        pelda: 'A próba: megnyílik-e a 04 usecase RONDO/portal/index.html bejelentkezési képernyője?\nA portál file:// címen fut.' },
      { aktiv: 'portal', buborek: 'nem nyílik meg', szoveg: 'Ha a böngészős út két perc után sem nyitja meg a portált, vagy egyik sem érhető el, nincs további próbálkozás.',
        pelda: 'Két perc sikertelen próba után az asszisztens megnevezi a kiesett funkciót (ebben a példában: a böngészőbővítmény), és nem próbálkozik tovább.' },
      { tol: 'ai', ig: 'te', csomag: 'D út: kézi', szaggatott: true, szin: 'figyelj', iv: -0.2, szamlalo: 'D út', szoveg: 'Életbe lép a D út. A módszer marad: dry run, napló, visszaolvasás, csak kézzel.',
        pelda: 'A D út a választólistából: „kézi út: te kezeled a portált, én az ellenőrzőlistát és az összevetést készítem”.' },
      { tol: 'te', ig: 'portal', csomag: 'kézi kezelés', szin: 'jegyezd', iv: 0.22, szoveg: 'Te nyitod meg és kezeled kézzel a portált. A tréner felvételt mutat az automatizálásról.',
        pelda: 'Te nyitod meg az index.html fájlt, belépsz, és ügyenként megnyitod az ügyadatlapot.\nAz ügyadatlapon a „Státusz mentése” is naplóz.' },
      { tol: 'ai', ig: 'te', csomag: 'ellenőrzőlista', szin: 'accent', iv: -0.2, szoveg: 'Az asszisztens ellenőrzőlistát készít: mezők, státuszszabály, sorrend.',
        pelda: 'Az ellenőrzőlista: mezők (azonosító, igény, ár (nettó), pénznem, jóváhagyó, forrás) · státuszszabály (szabalyok/ba.md, „Rekordstátusz”) · sorrend (dry run előbb, utána alkalmazás és visszaolvasás)' },
      { tol: 'portal', ig: 'te', csomag: 'napló', szaggatott: true, szin: 'tipp', iv: 0.22, szoveg: 'A naplót a portál adja, ugyanabban a formában.',
        pelda: 'A portál „Műveleti napló” képernyője, a fejléc ugyanaz:\nidobelyeg;ugy_id;mezo;elotte;utana;eredmeny;megjegyzes\nLetöltve: export_<időbélyeg>.csv' },
      { tol: 'te', ig: 'ai', csomag: 'bemásolt táblázat', szin: 'jegyezd', szoveg: 'Bemásolod a táblázatodat. Az asszisztens ugyanazokat az ellenőrzéseket végzi el rajta, mint a böngészős úton.',
        pelda: 'Bemásolod a saját táblázatodat:\nAzonosító | Igény | Ár (nettó) | Pénznem | Jóváhagyó | Forrás\nRONDO-R-01 | … | … | … | … | … (hat sor)' },
      { tol: 'ai', ig: 'te', csomag: 'összevetés', szin: 'kesz', iv: -0.2, ido: 4400, szoveg: 'Az összevetés ugyanúgy elkészül. Ez a módszer gyakorlása, nem élő automatizálási siker, és a kimeneten így jelöljük.',
        pelda: 'Kimenet: Munka/02-Portal/osszevetes.md\nRajta a jelölés: a módszer gyakorlása, nem élő automatizálási siker.' }
    ]
  });
})();

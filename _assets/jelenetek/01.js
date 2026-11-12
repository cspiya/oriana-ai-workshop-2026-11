/* Wenova workshop – az 1. gyakorlat saját mozgó ábrái. Betöltés: a wenova-motion.js UTÁN.
   Forrás: az 1. gyakorlat notebookja és a fiktív DNS-minta (README.md „Verzióellenőrzés induláskor”, skills/dns-alkalmazas „Menet”).
   FIKTÍV OKTATÁSI MINTA: a DNS-minta kitalált oktatási példa, nem Oriana-tény. */
(function () {
  'use strict';
  if (!window.WenovaMotion) return;
  var M = window.WenovaMotion;

  /* 1. Hogyan használja az AI a DNS-t egy feladatnál: verzió → szerepmodul → szabály forrással → hiány kimondva */
  M.jelenet('dns-hasznalat', {
    tipus: 'aramlas',
    cim: 'Hogyan használja az AI a DNS-t egy feladatnál?',
    pelda: 'BA-kérdés a fiktív DNS-mintán: javaslat ez, vagy döntés? (FIKTÍV OKTATÁSI MINTA)',
    meret: [1100, 600],
    szereplok: [
      { id: 'te', nev: 'Te', alcim: 'kérdés,|döntés', ikon: 'ember', x: 118, y: 300, szin: 'jegyezd' },
      { id: 'ai', nev: 'AI', alcim: 'beolvas, alkalmaz,|hiányt kimond', ikon: 'modell', x: 520, y: 300, szin: 'accent', w: 200 },
      { id: 'readme', nev: 'README', alcim: 'verzió, gazda,|státusz', ikon: 'dokumentum', x: 950, y: 120, szin: 'tipp' },
      { id: 'modul', nev: 'Szerepmodul', alcim: 'BA, Sales vagy|Account szabályai', ikon: 'szabaly', x: 950, y: 300, szin: 'elakadas', w: 220 },
      { id: 'gazda', nev: 'Gazda', alcim: 'felel érte,|ő dönt', ikon: 'csillag', x: 950, y: 480, szin: 'jegyezd' }
    ],
    lepesek: [
      { tol: 'te', ig: 'ai', csomag: 'feladat', szin: 'jegyezd', szoveg: 'Olyan feladatot adsz, amelyhez vállalati szabály vagy tény kell.',
        pelda: 'Te írod: „Egy R-NN igényhez egy kolléga azt írta: »javaslom a jóváhagyási küszöb emelését«. Javaslat ez vagy döntés, és megváltozik-e az igény azonosítója, ha később átrendezzük a listát?”' },
      { tol: 'ai', ig: 'readme', csomag: 'megnyitja', szin: 'accent', szoveg: 'Az AI először a DNS README-jét nyitja meg: ez a frissességi munkamenet.',
        pelda: 'Megnyitott fájl: 04 usecase RONDO/dns-minta/README.md\n„Verzióellenőrzés induláskor: 1. Nyisd meg ezt a fájlt. 2. Olvasd le a Verzió és az Utolsó ellenőrzés mezőt.”' },
      { tol: 'readme', ig: 'ai', csomag: 'verzió + státusz', szaggatott: true, szin: 'tipp', iv: -0.2, jelzo: { szereplo: 'readme', szoveg: 'v0.1' }, szoveg: 'Kiolvassa a verziót, a gazdát, a státuszt, az érvényességet és az utolsó ellenőrzés dátumát.',
        pelda: 'Verzió: 0.1-minta · Gazda: Nincs megadva (fiktív minta)\nStátusz: oktatási minta, nem hatályos szabályzat\nÉrvényesség: 2026-11-12 (az oktatási nap) · Utolsó ellenőrzés: 2026-11-10' },
      { aktiv: 'ai', buborek: 'Hatályos ez?', szoveg: 'A „mindig a legfrissebb” nem garancia: a kiolvasott verzió bizonyít.',
        pelda: 'Az AI jelzi: „⚠️ A státusz nem hatályos.”\nA leolvasott sor: Státusz: oktatási minta, nem hatályos szabályzat' },
      { tol: 'ai', ig: 'gazda', csomag: 'kérdés a gazdának', szin: 'figyelj', szoveg: 'Ha a státusz nem hatályos, vagy az érvényesség lejárt, előbb a gazdát kell megkérdezni.',
        pelda: 'README, 3. pont: „Ha a Státusz nem hatályos vagy az Érvényesség lejárt, kérdezd meg a gazdát, mielőtt a szabályokat alkalmazod.”\nItt a gazda: Nincs megadva (fiktív minta); a mintán a használatot gyakoroljuk.' },
      { tol: 'ai', ig: 'modul', csomag: 'szerepmodul', szin: 'accent', szoveg: 'Utána kiválasztja a szerepmodult: ugyanabból az alapból dolgozik a BA és a Sales–Account is.',
        pelda: 'A kérdés igényről és azonosítóról szól, ezért a modul: szabalyok/ba.md\n(Árlistához és vállaláshoz: szabalyok/sales.md · ügyfélkockázathoz és eszkalációhoz: szabalyok/account.md)' },
      { tol: 'modul', ig: 'ai', csomag: 'szabály + forrás', szaggatott: true, szin: 'elakadas', iv: -0.2, szoveg: 'Alkalmazza a szabályt, és minden állításhoz megadja a forrást: modul, szakasz, verzió.',
        pelda: '„A »javaslom«, »szerintünk« megfogalmazás javaslat. Döntésnek csak az számít, amelyet kijelölt döntéshozó hozott, dátummal és forrással.”\nForrás: szabalyok/ba.md, „Javaslat és döntés” · verzió: 0.1-minta' },
      { aktiv: 'modul', buborek: 'Erről nem szól', szoveg: 'Amit a modul nem mond, azt az AI nem pótolja a saját szövegével.',
        pelda: 'Hogy mekkora a jóváhagyási küszöb, arról a szabalyok/ba.md nem szól.\nAz ertek-es-ugyfel.md ki is mondja: „A DNS nem rögzít küszöböt vagy szerepkört”.' },
      { tol: 'ai', ig: 'te', csomag: 'válasz forrással', szaggatott: true, szin: 'kesz', iv: -0.2, szoveg: 'A válasz mellett ott áll a modul, a szakasz és a verzió; a hiány helyén „Nincs megadva”, és az AI kérdez.',
        pelda: 'Válasz: javaslat, nem döntés. „Az azonosító nem változik és nem kerül újraszámozásra.”\nForrás: szabalyok/ba.md, „Igényazonosító és forráskövetés” · verzió: 0.1-minta\nA küszöb értéke: Nincs megadva.' },
      { aktiv: 'te', buborek: 'Melyik kiadásra épült?', ido: 4200, szoveg: 'Így minden későbbi eredményről megmondható, melyik kiadásra épült, és eltérésnél mit kell újranyitni.',
        pelda: 'A válasz alatt ott áll: verzió: 0.1-minta\nA saját DNS-ednél ugyanezt a profil dns_verzio mezője rögzíti (az 1. gyakorlat végén töltöd ki).' }
    ]
  });

  /* 2. Hogyan lesz egy állításból visszakereshető, gazdával ellátott állítás (3–5. lépés) */
  M.jelenet('allitasbol-szabaly', {
    tipus: 'aramlas',
    cim: 'Hogyan lesz egy mondatból visszakereshető, gazdával ellátott állítás?',
    pelda: 'A fiktív ceg.md „Szolgáltatások” állítása (FIKTÍV OKTATÁSI MINTA; a sajátodat te írod)',
    meret: [1000, 600],
    szereplok: [
      { id: 'szerzo', nev: 'Te', alcim: 'állítás a saját|szavaiddal', ikon: 'ember', x: 130, y: 140, szin: 'jegyezd' },
      { id: 'modul', nev: 'Modul', alcim: 'állítás, forrás,|gazda, státusz', ikon: 'dokumentum', x: 500, y: 140, szin: 'accent' },
      { id: 'jegyzek', nev: 'Jegyzék', alcim: 'forrás-|azonosítók', ikon: 'tablazat', x: 870, y: 140, szin: 'tipp' },
      { id: 'ellenor', nev: 'Ellenőr', alcim: 'másik csoport,|nem a szerző', ikon: 'ellenor', x: 130, y: 460, szin: 'kesz' },
      { id: 'forras', nev: 'Forrás', alcim: 'a megnevezett|dokumentum', ikon: 'mappa', x: 500, y: 460, szin: 'tipp' },
      { id: 'gazda', nev: 'Gazda', alcim: 'dönt és|jóváhagy', ikon: 'csillag', x: 870, y: 460, szin: 'jegyezd' }
    ],
    lepesek: [
      { tol: 'szerzo', ig: 'modul', csomag: 'állítás', szin: 'jegyezd', szoveg: 'A saját szavaiddal elmondod a modul állítását. Az asszisztens nem cseréli le a sajátjára.',
        pelda: 'A mintában az állítás: „Licenc, Standard support, bevezetési konzultáció.”\nA saját modulodban ide a te mondatod kerül, a te szavaiddal.' },
      { aktiv: 'modul', buborek: 'Mi a forrása?', szoveg: 'Minden állítás mellé forrás kell. Ha nem mondasz forrást, a helyén „Nincs megadva” áll.',
        pelda: 'Az állítás helye: ceg.md, „Szolgáltatások”. Forrás nélkül így állna:\n<állítás> (Forrás: Nincs megadva) · státusz: Jóváhagyásra vár ⚠️' },
      { tol: 'modul', ig: 'jegyzek', csomag: 'Forrás: F-xx', szin: 'tipp', szoveg: 'A forrás azonosítót kap, és bekerül a forrásjegyzékbe. Árva sor nem maradhat.',
        pelda: 'A modulban: (Forrás: F-02)\nforrasjegyzek.md: F-02 | Szolgáltatáskatalógus (fiktív) | Nincs megadva | 2026-11-10 | 0.1 | oktatási csoport | 2026-11-10' },
      { tol: 'gazda', ig: 'modul', csomag: 'gazda neve', szin: 'jegyezd', szoveg: 'Az állítás mellé gazda kerül: te, egy kollégád, vagy „Nincs megadva”.',
        pelda: 'A kérdés: „Gazda: A: te vagy a gazda · B: egy kollégád (írd le, ki) · C: még nincs gazda, »Nincs megadva«”\nA mintában: Gazda: Nincs megadva (fiktív minta)' },
      { aktiv: 'modul', buborek: 'Jóváhagyásra vár', szoveg: 'A jóváhagyatlan elem státusza „Jóváhagyásra vár”. A v0.1 a tantermi mentéstől még nem szervezeti szabály.',
        pelda: 'A saját v0.1 fejlécében: Státusz: jóváhagyásra vár · Jóváhagyó: Nincs megadva\nA mintában: Státusz: oktatási minta, nem hatályos szabályzat' },
      { tol: 'modul', ig: 'ellenor', csomag: 'egy állítás', szin: 'accent', szoveg: 'A másik csoport kiválaszt egy állítást a modulodból. Az ellenőrző nem a szerző.',
        pelda: 'A másik csoport ezt választja: „Az Oriana-minta licencet, Standard supportot és bevezetési konzultációt nyújt.”\nHol áll a DNS-ben: ceg.md, „Szolgáltatások”' },
      { tol: 'ellenor', ig: 'forras', csomag: 'visszakeresés', szin: 'kesz', szoveg: 'Az állítást a megnevezett forrásban keresik vissza: a forráshoz mérnek, nem a szerző szándékához.',
        pelda: 'Megnevezett forrás: F-02, Szolgáltatáskatalógus (fiktív)\nA kérdés: megtalálható-e benne az állítás, és pontosan hol?' },
      { tol: 'forras', ig: 'ellenor', csomag: 'forráshely', szaggatott: true, szin: 'tipp', iv: -0.2, szoveg: 'Megvan a forráshely: egyezik, eltér, vagy a forrás nem mond ilyet. Ha a forrás nem érhető el: „nem ellenőrizhető”.',
        pelda: 'Az ellenorzes.md sorai:\nMegtalálható-e a forrásban? igen · Forráshely: <fájl, pont, sor vagy oldal>\nEgyezik-e az állítással? egyezik' },
      { aktiv: 'ellenor', buborek: 'Nem javítok', szoveg: 'Az ellenőrző megnevezi az eltérést, de a modult nem írja át.',
        pelda: 'Az ellenőrző ezt írja: „A modul szövegét nem írtam át; ha eltérés volna, megnevezném, és a javításról a gazda döntene.”' },
      { tol: 'ellenor', ig: 'gazda', csomag: 'ellenorzes.md', szin: 'kesz', iv: 0.32, ido: 4200, szoveg: 'Az eredmény az ellenorzes.md fájlba kerül; a javításról és a jóváhagyásról a gazda dönt.',
        pelda: 'Mentés: Munka/01-DNS/ellenorzes.md\nKi a gazda? <név vagy Nincs megadva> · Jóváhagyás állapota: <jóváhagyásra vár / jóváhagyva / Nincs megadva>\nÁllapot: ✅ egyezik' }
    ]
  });
})();

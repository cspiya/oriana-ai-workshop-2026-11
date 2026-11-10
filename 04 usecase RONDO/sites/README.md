**KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA** · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le.

# RONDO ügykövető: Sites-anyagok

| Fájl | Mire való |
|---|---|
| [miniapp-brief.md](miniapp-brief.md) | A „RONDO ügykövető” Sites mini-alkalmazás briefje: adatmodell, szerepek, rekordjog, kétfiókos tesztterv, a Sites-kísérlet jegyzéke. |
| [prototipus.html](prototipus.html) | Offline B-terv ugyanazzal az adatmodellel (`ugy`, `tetel`, `review`), JSON-exporttal és -importtal. Helyi prototípus, hitelesítés és tartós adatbázis nem része. |
| [adatcsomag/](adatcsomag/) | Az induló fiktív tételek JSON és CSV formában (`ugy.json`, `tetel.json`, `review.json`, `tetelek.csv`). |

## A prototípus használata

1. Nyisd meg a `prototipus.html` fájlt Edge-ben vagy Chrome-ban (`file://`, hálózat nélkül).
2. A „Szimulált felhasználó” választó nem belépés. A szabály: a tételek mindenki számára olvashatók, írni csak a saját tételt lehet. A „Próba: írás” gomb mutatja az elutasítást, ha más tételét próbálod módosítani. Itt a böngészőkód szimulálja; a valódi Site-ban a szervernek kell.
3. Az adat a böngésző helyi tárában van (a tartósságot nem feltételezzük). Átadás: „Exportálás (JSON letöltése)”, majd a másik gépen „Importálás”. Az import ellenőrzi a sémát; hibás fájlnál a jelenlegi adat nem változik.
4. Reset: a lábléc Reset gombja, majd megerősítés; visszaáll az induló mintaadat.

## Az adatcsomag

Minden JSON-fájl `"_jeloles"` mezőben viseli a KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA jelölést, az `"_elhatarolas"` mezőben az elhatároló mondatot, a sorok az `"adat"` tömbben vannak; a `tetelek.csv` első sora megjegyzéssort (`# KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA`) tartalmaz, amelyet beolvasáskor át kell ugrani. A `tetel.json` nyolc fiktív tételt tartalmaz (három igény, három ajánlati tétel, két kockázat), mindegyik forráshellyel a `forrasok/` mappa fájljaira. A `dns_verzio` mezőben „Nincs megadva” áll, mert a használt fiktív DNS verzióját a gyakorlatban a résztvevő rögzíti. A `review.json` négy sora előzetes mintaadat (`verzio`: `elozetes-minta`); a gyakorlatban a saját, forrásból ellenőrzött R2-eredményed váltja.

Az e-mail-címek a lefoglalt `.example` tartományban vannak, nem valódi címek.

Az `ugy.json` egyetlen rekordja (`U-RONDO-2027`) a cég valós alapadatait tartalmazza (`ceg_nev`, `cegjegyzekszam`, `szekhely`; jelleg: „valós, nyilvános cégadat”), a `forras` mező a cégadatlapra mutat: `cegadat/RONDO_cegadatlap.md`, 2. szakasz. Az `id`, a `cim` és minden tétel kitalált. A cégkivonat szerinti székhely irányadó; a 2025. évi beszámoló fedőlapján eltérő cím áll, ezt itt nem javítjuk, a cégadatlap 5.4 pontja nyitott kérdésként kezeli.

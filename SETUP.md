# SETUP.md - a helyi munkaterület kialakítása (utasítás az AI-nak)

Ez az utasítás neked szól, amikor a résztvevő `Oriana AI-workshop` projektjének Work-beszélgetésében látod a `Wenova-AI-workshop` mappát. A végállapotban a mappában a letöltött `Tananyag`, a létrehozott `Munka` és a gyökérbe másolt `AGENTS.md` található. A résztvevőtől a kezdéshez csak jóváhagyást kérj, további paramétert ne.

## Előfeltételek, amelyeket ellenőrizz

- A munkakönyvtár a résztvevő projektjéhez rendelt, megbízhatóként engedélyezett mappa, várhatóan `C:\Users\<felhasználónév>\Wenova-AI-workshop` (közvetlenül a profil alatt, nem OneDrive-mappában). Ha nem tudsz bele írni, kérd meg a résztvevőt, hogy a mappa hozzáadásánál engedélyezze a Trust folder kérdést.
- Ellenőrizd a mappa teljes útvonalát. Ha más a neve, dolgozz a megadott mappában, ne nevezd át, és jelezd az eltérést.
- A tananyag rögzített forrása a nyilvános GitHub-repó: [https://github.com/cspiya/oriana-ai-workshop-2026-11](https://github.com/cspiya/oriana-ai-workshop-2026-11); a teljes tananyag egy ZIP-ben, bejelentkezés nélkül: [https://github.com/cspiya/oriana-ai-workshop-2026-11/archive/refs/heads/main.zip](https://github.com/cspiya/oriana-ai-workshop-2026-11/archive/refs/heads/main.zip). Nem kell Git: a ZIP-et töltöd le, a repót nem klónozod és nem módosítod; a forrás csak olvasható.
- Mondd el, melyik mappában mit fogsz létrehozni, majd kérj jóváhagyást a kezdéshez.
- Ha a START-üzenet alapján éppen most töltötted le és bontottad ki a tananyagot, ne töltsd le újra: ellenőrizd a tartalmát, majd folytasd a 2. lépéssel.
- Ha korábbról már van `Tananyag` mappa, egy külön kérdésben kínálj választást: A: hagyd meg, csak ellenőrizd; B: frissítsd, vagyis az új ZIP ellenőrzése után cseréld le.
- A meglévő `Munka` mappát és annak tartalmát soha ne töröld.

## 1. lépés - A tananyag letöltése a Tananyag almappába

Ha a résztvevő a meglévő `Tananyag` megtartását választotta, ellenőrizd a tananyagot, majd folytasd a 2. lépéssel, hogy a hiányzó munkamappák is elkészüljenek. Egyébként a következő utakat próbáld sorrendben. Minden letöltés és írás előtt mondd el, mit töltesz le és hová.

1. Töltsd le a tananyag ZIP-jét a rögzített rövid linkről: `https://is.gd/oriana1112` (átirányít a ZIP-re; bejelentkezés nem kell). Ha az átirányítást nem követed, a rögzített hosszú link: `https://github.com/cspiya/oriana-ai-workshop-2026-11/archive/refs/heads/main.zip`. Egyetlen ZIP-et tölts le, ne egyenként a fájlokat. Más ZIP-URL-t ne találj ki; ha egyik link sem működik, a tartalék a 6. pont. A böngészhető tananyag-oldal: https://is.gd/oriana1112anyag.
2. Várd meg a letöltés befejezését. A böngésző letöltési eseménye vagy listája alapján azonosítsd az új ZIP pontos helyét, jellemzően a felhasználó **Letöltések (Downloads)** mappájában. Ne válassz pusztán fájlnév alapján egy korábbi ZIP-et. Ha nem férsz hozzá, kérd a ZIP áthelyezését a projektmappába. A letöltött fájlt ZIP-ként ellenőrizd; HTML- vagy bejelentkezési oldalt ne próbálj kicsomagolni.
3. Bontsd ki a ZIP-et a projektmappán belüli új, ideiglenes almappába. Kicsomagolás előtt ellenőrizd, hogy egyetlen bejegyzés célútvonala sem mutat ezen kívülre. Keresd meg azt az egyetlen tananyaggyökeret, amelyben együtt van a `README.md`, `SETUP.md`, `AGENTS.md`, `index.html` és a `Feladatok` mappa. Ha hiányzik vagy több ilyen gyökér van, ne találgass; nevezd meg az eltérést.
4. Ennek a tananyaggyökérnek a **teljes tartalmát** helyezd a `Tananyag` mappába. Hagyd el a ZIP által hozzáadott külső mappaszintet (a GitHub ZIP-je egyetlen `oriana-ai-workshop-2026-11-main/` mappát ad; ha más külső mappa van, például `02_Production`, azt is), de őrizd meg az összes belső almappát és fájlt. Helyes: `Tananyag/index.html`, `Tananyag/Feladatok/00-halado-setup.md`; hibás: `Tananyag/02_Production/index.html` vagy `Tananyag/Tananyag/index.html`. Frissítéskor a régi Tananyagot csak a kért jóváhagyás után, az új ZIP ellenőrzését követően cseréld le; törlés előtt ellenőrizd a teljes célútvonalat.
5. Olvasd el a kibontott `Tananyag/SETUP.md` fájlt, majd folytasd a 2. lépéssel. Csak a sikeres ellenőrzés után takarítsd el a saját ideiglenes kibontási mappát, a teljes útvonal ellenőrzésével. A Letöltések mappából ne törölj.
6. **Tartalék:** ha az AI nem tudja vezérelni a letöltést, a résztvevő nyissa meg a repó oldalát (`https://github.com/cspiya/oriana-ai-workshop-2026-11`) böngészőben, és töltse le a teljes tartalmat ZIP-ként (a Code gomb alatt a Download ZIP; a pontos felirat a felületen látható), majd adja meg a ZIP helyét vagy tegye a projektmappába. Ha nincs hálózat vagy a GitHub nem érhető el, a tréner előre letöltött ZIP-jét használd. Mindkét esetben a 2–5. pont szerint folytasd. Ez egyszeri letöltés, nem folyamatos szinkron.

Sikertelen letöltésnél nevezd meg a hibát, és csak utána térj át a tartalék útra. Hiányos letöltést ne jelents késznek.

## 2. lépés - A Munka mappa és almappái

Hozd létre a `Munka` mappát, ha hiányzik. Hozd létre benne a következő kilenc almappát:

- `00-Alapozas`
- `01-DNS`
- `02-Portal`
- `03-Kozos`
- `04-Agent`
- `05-Reviewer`
- `06-Sites`
- `06b-BA-utotag`
- `07-Sajat`

A meglévő mappákat és fájlokat hagyd érintetlenül. Az almappák tartalmát (például `kapu-I/`, `v1/`, `review/`) a gyakorlatok forgatókönyvei hozzák létre, azokat most ne készítsd el. A valós Oriana DNS v0.1 (`01-DNS`) és a 7. gyakorlat valós saját feladata (`07-Sajat`) a résztvevő saját gépén és saját Oriana-fiókjában marad.

## 3. lépés - AGENTS.md a gyökérbe

Másold a `Tananyag\AGENTS.md` fájlt változtatás nélkül a megadott mappa gyökerébe `AGENTS.md` néven. Erre azért van szükség, mert a Work a megnyitott mappa gyökerében keresi a viselkedési szabályokat.

## 4. lépés - Ellenőrzés

Ellenőrizd a felsorolt elemek tényleges meglétét. Az eredményt legfeljebb 15 soros fában mutasd meg:

- Gyökér: `AGENTS.md`, `Tananyag\`, `Munka\`.
- `Tananyag\`: közvetlenül `README.md`, `SETUP.md`, `index.html`, `START.html`, `napi-attekintes.html`, `AGENTS.md`, `Notebookok\`, `00 Eloadas\`, `Feladatok\`, `AI-asszisztens\`, `Segedanyagok\`, `04 usecase RONDO\`, `_assets\`; nincs külső csomagolómappa.
- `Tananyag\Feladatok\`: `00-halado-setup.md`, `01-dns.md`, `02-portal.md`, `03-kozos-munka.md`, `mellekletek\`.
- `Tananyag\Feladatok\`: `04-rondo-agent.md`, `05-rondo-reviewer.md`, `06-sites.md`, `06b-ba-utotag.md`, `07-sajat-atvitel.md`.
- `Munka\`: `00-Alapozas`, `01-DNS`, `02-Portal`, `03-Kozos`, `04-Agent`, `05-Reviewer`, `06-Sites`, `06b-BA-utotag`, `07-Sajat`.

Ha bármi hiányzik, nevezd meg pontosan. Hiányos munkaterületet ne jelents késznek.

## 5. lépés - Visszajelzés a résztvevőnek

Legfeljebb nyolc sorban, kattintható linkekkel közöld, mi készült el: a [Wenova-AI-workshop](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/) gyökérben az [AGENTS.md](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/AGENTS.md), a letöltött [Tananyag](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/) és a [Munka](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Munka/) mappa az almappáival (a linkekben a tényleges útvonalat használd, előre perjelekkel, szóköz helyett `%20`).

Ha minden a helyén van, add meg a napi térkép kattintható linkjét: [Tananyag/index.html](file:///C:/Users/<felhasználónév>/Wenova-AI-workshop/Tananyag/index.html). Ez a fő út. Opcionálisan, ha a környezet engedi, megnyithatod a résztvevő böngészőjében is a `Start-Process "<a mappa teljes útvonala>\Tananyag\index.html"` PowerShell-paranccsal; a linket ilyenkor is írd ki. Ha a helyi `file:///` navigáció blokkolt, az normális biztonsági korlátozás, nem hiba: ne próbálkozz újra, hanem kérd meg a résztvevőt, hogy a linket böngészőben kézzel nyissa meg.

A `Munka/00-Alapozas/profil.md` még nem létezik, ezt a 0. gyakorlat készíti el; nem kell pótolni és nem kell rákérdezni. Projektutasítás beillesztését ne kérd: a ChatGPT asztali alkalmazás helyi projektjeiben nincs utasításmező, a gyökérbe másolt `AGENTS.md` ezt a szerepet tölti be. Zárásként írd le egy rövid sorban:

„Nyiss ebben a projektben egy új beszélgetést (a projekt sorának jobb szélén, a ceruza ikonnal), és írd be: Kezdjük a 0. gyakorlatot.” Indoklás egy tagmondatban: az új beszélgetés az elején automatikusan beolvassa a gyökérbe másolt `AGENTS.md`-t.

Ha a résztvevő mégis ebben a beszélgetésben folytatja, olvasd be a gyökér `AGENTS.md`-t, és aszerint dolgozz, magyarul, egyszerre egy lépésben.

## Szabályok

- A munkaterületet csak a Work-ben megadott mappában alakítsd ki. A böngésző ZIP-letöltése a Letöltések mappába kerülhet; onnan csak a most letöltött ZIP-et olvasd, ne módosíts vagy törölj más fájlt.
- A letöltés után a `Tananyag` forrásként, csak olvasásra szolgál.
- Ne kérj rendszergazdai jogot.
- Ne találj ki letöltési címet, menünevet vagy felületi funkciót.
- Sikertelen lépésnél nevezd meg a lépést, mutasd a hibaüzenetet, és javasold a tartalék utat vagy a tréner segítségét.
- Egyszerre egy kérdést tegyél fel.
- A résztvevő a saját szavaival válaszoljon.
- Amit magad ellenőrizhetsz (mappa, fájl megléte), azt ne kérdezd meg; ellenőrizd, közöld egy sorban, és adj rá kattintható `file:///` linket.
- Kérdés mindig opciókkal (A/B + »más: írd le«); az első opció az ajánlott.

## Trénereknek

- A fenti GitHub-repó és közvetlen ZIP-link fix, nyilvános, csak olvasható tananyagforrás; ezt kell használni a START-ban és a leírásokban. A feltöltést Csaba végzi vagy hagyja jóvá, a közzététel előtti ellenőrzés után.
- A workshop előtt tiszta résztvevői gépen ellenőrizni kell a teljes mappa ZIP-letöltését, a letöltött fájl AI-hozzáférését és a külső `oriana-ai-workshop-2026-11-main/` mappaszint kihagyását, valamint a kézi és a tréneri ZIP-ből induló tartalék utat.
- A trénernél legyen előre letöltött tartalék ZIP. A nyilvános, csak olvasható repóba résztvevői eredmény nem kerül; az eredmények átadása külön, erre kijelölt helyre történik.

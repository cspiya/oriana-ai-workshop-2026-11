# Orchestrator napló

Dátum: 2026-11-12 (Europe/Budapest). A napló az irányítást rögzíti, nem független tartalmi értékelés.

| Kör | Szerep | Esemény | Kapu / következő lépés |
|---|---|---|---|
| 0 | Orchestrator | Felhasználói cél és K01–K12 elfogadási kritérium rögzítve; önálló munkavégzés engedélyezett | Kutatás, adatok, vizuális bemutató külön makerhez delegálva |
| 0 | Kutató maker | SharePoint verziózott forrás + strukturált regiszter + kétirányú szemantikai ellenőrzés architektúra-javaslat | Elsődleges forráskutatás folyamatban |
| 0 | Adat maker | Közös adatcontract B0/B1/B2 snapshotokkal | Vizuális maker ugyanazt az adatcsomagot használja |
| 0 | Vizuális maker | Korai kockázat: általános csomópontcímkék nem mutatnák a tényleges funkcionális kidolgozást | Orchestrator konkrét szabályt, kivételt, elő-/utófeltételt és elfogadási példát kért az adatmakertől |
| 1 | Kutató maker | 21 elsődleges forrás és 13 osztályozott állítás; kutatás első változata elkészült | Külön tartalmi reviewerhez adva |
| 1 | Adat maker | Draft 2020-12 jsonschema engine; három baseline; 8 negatív mutáció futtatva | A maker futásállítását külön technikai reviewer ellenőrzi |
| 1 | Vizuális maker | Offline HTML, adat- és forrásjegyzék beágyazva; első változat befagyasztva | Interakciós és vizuális ellenőrzés külön reviewerben |

## Függetlenség

A maker feladatok külön ügynökökben, a reviewer új kontextusban fut. Ugyanaz a szolgáltatói fiók és közös fájlrendszer; ez nem szervezeti vagy teljes modellcsalád-szintű függetlenség. Az orchestrator nem minősíti saját maga szakmailag a csomagot. A végső kapu a reviewer és a tényleges gépi eredmény alapján kerül rögzítésre.

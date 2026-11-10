"""KITALÁLT PROJEKTFORGATÓKÖNYV – FIKTÍV OKTATÁSI MINTA · A RONDO Hullámkartongyártó Kft. valós cég; az itt leírt projekt, igények, személyek és számok kitaláltak, nem a cég valós működését írják le. · kitalált jóváhagyási szabálymotor a dokumentáció-gyakorlathoz.

Nem valós rendszer, nem Oriana-kód. A szabályok oktatási célra egyszerűsítettek.
"""

from datetime import datetime

# Konfiguráció. Az értékek ügyfélpéldányonként állíthatók.
KONFIG = {
    "masodik_kuszob_huf": 3_000_000,   # nettó érték felett második jóváhagyó kell
    "harmadik_kuszob_huf": None,       # opcionális: ha meg van adva, harmadik jóváhagyó is kell
    "arfolyamok": {"HUF": 1.0, "EUR": 395.0},  # a beállított árfolyam, HUF-ban
}

SZEREPKOROK = {1: "KOLTSEGHELY_VEZETO", 2: "PENZUGYI_JOVAHAGYO", 3: "TOVABBI_JOVAHAGYO"}


def netto_huf(netto_ertek, penznem):
    """A nettó érték forintra váltva, a beállított árfolyammal."""
    arfolyam = KONFIG["arfolyamok"].get(penznem)
    if arfolyam is None:
        raise ValueError("Ismeretlen pénznem: " + penznem)
    return netto_ertek * arfolyam


def jovahagyasi_szintek(netto_ertek, penznem="HUF"):
    """Visszaadja, hány jóváhagyási szint kell, és naplósort készít."""
    huf = netto_huf(netto_ertek, penznem)
    szintek = 1
    if huf > KONFIG["masodik_kuszob_huf"]:
        szintek = 2
        harmadik = KONFIG["harmadik_kuszob_huf"]
        if harmadik is not None and huf > harmadik:
            szintek = 3
    naplo = {
        "idopont": datetime.now().isoformat(timespec="seconds"),
        "vizsgalt_ertek_huf": huf,
        "alkalmazott_kuszob_huf": KONFIG["masodik_kuszob_huf"],
        "alkalmazott_arfolyam": KONFIG["arfolyamok"].get(penznem),
        "szintek": szintek,
    }
    return szintek, naplo


def jovahagyo_szerepkor(szint):
    """A megadott szint szerepköre."""
    return SZEREPKOROK[szint]


def jovahagyhato(igeny_szintek, lezart_szintek):
    """Az igény csak akkor kerülhet Jóváhagyva státuszba, ha minden szint lezárult."""
    return lezart_szintek >= igeny_szintek


def modositas_utan_ujravizsgalat(igeny):
    """Jóváhagyás közbeni tételmódosításnál az igény visszakerül szerkesztésre."""
    igeny["statusz"] = "Szerkesztés alatt"
    return igeny

# LOOK by Mirijana Radušin — sajt

Statičan sajt, spreman za GitHub Pages.

## Stranice
- `index.html` — Početna
- `galerija.html` — Galerija
- `nega-kose.html` — Nega kose
- `usluge.html` — Usluge i cene

Fotografije su u folderu `slike/`, a `support.js` pokreće interaktivne delove (meni, galerija, recenzije, zakazivanje).

## Jezici (SR / EN)
Sajt je dvojezičan: dugme **SR / EN** u meniju menja jezik na svim stranicama i pamti izbor. Engleska verzija se može otvoriti i direktno dodavanjem `?lang=en` na adresu (npr. `.../index.html?lang=en`). Svi prevodi su u fajlu `i18n.js` — tu se menja ili dodaje tekst.

## Objavljivanje na GitHub Pages
1. Napravite novi repozitorijum na GitHub-u (npr. `look-salon`).
2. Otpremite SAV sadržaj ovog foldera u koren repozitorijuma (Add file → Upload files).
3. Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)` → Save.
4. Za minut-dva sajt je na `https://<korisničko-ime>.github.io/look-salon/`.

Napomena: zakazivanje termina čuva podatke samo u pregledaču posetioca (demo), nije povezano sa serverom.

/* LOOK by Mirijana Radušin — SR / EN prevod sajta.
   Tekst na sajtu je napisan na srpskom; ovaj skript ga menja na engleski kada se izabere EN.
   Izbor jezika se pamti (localStorage) i važi na svim stranicama. Može i ?lang=en u adresi. */
(function () {
  if (window.__lookI18n) return; window.__lookI18n = true;

  var D = {
    // navigacija i opšte
    'O nama': 'About us', 'Galerija': 'Gallery', 'Nega kose': 'Hair care', 'Usluge': 'Services',
    'Zakaži': 'Book now', 'Novi Sad · od 1999.': 'Novi Sad · since 1999.', 'Meni': 'Menu',

    // početna — hero
    'Frizerski salon · Novi Sad': 'Hair salon · Novi Sad',
    'Doktori za frizuru': 'Hair doctors', 'u vašem gradu': 'in your city', 'Slajd': 'Slide',

    // o nama i tim
    'O nama · Naš tim': 'About us · Our team',
    'Tradicija od': 'A tradition since', ', ruke kojima': ', hands you can', 'verujete': 'trust',
    'godina': 'years of', 'iskustva': 'experience',
    'Osnivač · frizerski ekspert': 'Founder · hair expert',
    'Kolorista · pramenovi i farbanje': 'Colorist · highlights & coloring',
    'Šišanje · svečane frizure': 'Haircuts · formal styling',
    'Osnovan 1999. godine, frizerski salon LOOK ima dugogodišnju tradiciju u primeni savremenih tehnologija i proizvoda za negu kose. Svi tretmani kose, kao i hair styling po svetskim trendovima, povereni su kvalifikovanim frizerskim ekspertima sa dugogodišnjim iskustvom o čemu svedoče mnoga priznanja dobijena sa raznih svetskih takmičenja i konvencija.':
      'Founded in 1999, LOOK hair salon has a long tradition of using modern techniques and products for hair care. All hair treatments, as well as styling that follows global trends, are entrusted to qualified hair experts with many years of experience, as shown by the many awards won at international competitions and conventions.',
    'Saradnjom sa svetski renomiranim proizvođačima u mogućnosti smo da Vam ponudimo najkvalitetnije tretmane kose sa izuzetnim rezultatima, a takođe i proizvode za kućnu negu u cilju Vašeg zadovoljstva i lepote.':
      'Working with world-renowned brands, we can offer you top-quality hair treatments with outstanding results, as well as products for home care — all for your satisfaction and beauty.',
    'Zakažite termin': 'Book an appointment',

    // radovi
    'Naši radovi': 'Our work', 'Naši': 'Our', 'radovi': 'work', 'Iz naše stolice': 'From our chair',
    'Pogledaj galeriju': 'View the gallery', 'Rad salona': 'Salon work',

    // recenzije
    'Recenzije': 'Reviews', 'Šta kažu naši': 'What our', 'klijenti': 'clients say',
    'na Google-u': 'on Google', 'Sve recenzije na Google-u': 'All reviews on Google',
    'Pogledaj na Google-u →': 'View on Google →',
    'Prethodne recenzije': 'Previous reviews', 'Sledeće recenzije': 'Next reviews',

    // video
    'Iz našeg salona': 'From our salon', 'Pogledajte nas': 'See us', 'na delu': 'in action',
    'Zavirite u LOOK: atmosfera, tim i rad sa klijentima, onako kako izgleda svakog dana u salonu.':
      'Take a peek inside LOOK: the atmosphere, the team and our work with clients, just as it is every day in the salon.',
    'Pogledaj na YouTube-u': 'Watch on YouTube',
    'LOOK by Mirijana Radušin – video iz salona': 'LOOK by Mirijana Radušin – video from the salon',

    // izdvojene usluge
    'Izdvajamo iz ponude': 'Featured services', 'Brazilski keratin': 'Brazilian keratin',
    'Ispravljanje i dubinska obnova kose za sjaj i glatkoću koji traju.': 'Straightening and deep repair for shine and smoothness that last.',
    'Intenzivna, postojana boja bez amonijaka koja štiti strukturu kose.': 'Rich, long-lasting ammonia-free color that protects the hair structure.',
    'Šišanje': 'Haircuts',
    'Muško, žensko i dečije šišanje prilagođeno obliku lica i stilu.': "Men's, women's and children's cuts tailored to your face shape and style.",
    'Tretmani koji vraćaju vlagu, snagu i zdrav izgled kosi.': 'Treatments that bring back moisture, strength and a healthy look.',
    'Pramenovi i farbanje': 'Highlights & coloring',
    'Pramenovi, toniranje i boja usklađeni sa vašim tenom.': 'Highlights, toning and color matched to your skin tone.',
    'Svečane frizure': 'Formal hairstyles',
    'Koktel, večernje i dnevne frizure za posebne prilike.': 'Cocktail, evening and daytime styles for special occasions.',
    'Sve usluge': 'All services',

    // usluge (nazivi)
    'Muško šišanje': "Men's haircut", 'Žensko šišanje': "Women's haircut", 'Dečije šišanje': "Children's haircut",
    'Farbanje': 'Coloring', 'Pramenovi': 'Highlights', 'Skidanje boje': 'Color removal', 'Toniranje kose': 'Toning',
    'Blanširanje': 'Bleaching', 'Brazilska nega ispravljanja kose': 'Brazilian straightening treatment',
    'Mini-val': 'Body wave', 'Babyliss lokne': 'Babyliss curls',
    'Muško i žensko': "Men's and women's", 'Koktel, večernja, dnevna': 'Cocktail, evening, daytime',

    // zakazivanje
    'Rezervišite online': 'Book online', 'Zakažite svoj': 'Book your', 'termin': 'appointment',
    'Za klijente': 'For clients', 'Pregled za salon': 'Salon view', 'Usluga': 'Service',
    'Frizer': 'Stylist', 'Bilo koji slobodan frizer': 'Any available stylist', 'Datum i vreme': 'Date & time',
    'Pon': 'Mon', 'Uto': 'Tue', 'Sre': 'Wed', 'Čet': 'Thu', 'Pet': 'Fri', 'Sub': 'Sat', 'Ned': 'Sun',
    'Danas': 'Today', 'Nedeljom ne radimo.': 'We are closed on Sundays.', 'Vreme': 'Time',
    'Prvo izaberite dan u kalendaru.': 'First choose a day in the calendar.',
    'Za ovaj dan nema slobodnih termina. Izaberite drugi dan.': 'There are no free slots on this day. Please choose another day.',
    'Vaši podaci': 'Your details', 'Ime': 'First name', 'Prezime': 'Last name', 'Broj telefona': 'Phone number',
    'Pošalji zahtev': 'Send request', 'Izaberite dan': 'Choose a day',
    'Izaberite uslugu.': 'Please choose a service.', 'Izaberite datum i vreme.': 'Please choose a date and time.',
    'Upišite ime, prezime i broj telefona.': 'Please enter your first name, last name and phone number.',
    'Zahtev je poslat': 'Request sent', 'Hvala,': 'Thank you,', 'Primili smo zahtev za': 'We have received your request for',
    'Novi zahtev': 'New request', 'Pozvaćemo vas na': 'We will call you at', 'da potvrdimo termin.': 'to confirm your appointment.', 'Prethodni mesec': 'Previous month', 'Sledeći mesec': 'Next month',
    'Ima online rezervacija': 'Has online bookings', 'Raspored za': 'Schedule for', 'Zauzeto': 'Booked',
    'Online': 'Online', 'Slobodno': 'Free', 'Rezervisano telefonom': 'Booked by phone', 'Unos iz salona': 'Entered at the salon',
    'Oslobodi': 'Release', 'Prošlo': 'Past', 'Blokiraj': 'Block', 'Blokirano': 'Blocked',
    'Pauza / nedostupno': 'Break / unavailable', 'Odblokiraj': 'Unblock', 'Otkaži': 'Cancel',

    // lokacija i kontakt
    'Adresa': 'Address', 'Sajmište · parking na ulici, plava i crvena zona': 'Sajmište · street parking, blue and red zone',
    'Uputstva do salona →': 'Directions to the salon →', 'Kontakt': 'Contact', 'Radno': 'Opening', 'vreme': 'hours',
    'Pon – Pet 09 – 21h': 'Mon – Fri 9am – 9pm', 'Subota 09 – 17h': 'Saturday 9am – 5pm', 'Nedelja zatvoreno': 'Sunday closed',
    'Radije biste telefonom?': 'Prefer to call?', 'Pozovi nas': 'Call us', 'Kako do nas': 'How to find us',
    'Mapa – Branimira Ćosića 47, Novi Sad': 'Map – Branimira Ćosića 47, Novi Sad',
    'Mapa – LOOK by Mirjana Radušin, ugao Bulevara kralja Petra I i Branimira Ćosića, Novi Sad': 'Map – LOOK by Mirjana Radušin, corner of Bulevar kralja Petra I and Branimira Ćosića, Novi Sad',

    // galerija
    'Kliknite na sličicu ili koristite strelice da listate fotografije.': 'Click a thumbnail or use the arrows to browse the photos.',
    'Pomeri sličice levo': 'Scroll thumbnails left', 'Pomeri sličice desno': 'Scroll thumbnails right',
    'Prethodna fotografija': 'Previous photo', 'Sledeća fotografija': 'Next photo',

    // nega kose
    'Olaplex u salonu LOOK': 'Olaplex at LOOK salon', 'Olaplex –': 'Olaplex –', 'jedan molekul': 'one molecule',
    'menja sve!': 'changes everything!', 'Nema više oštećene kose prilikom farbanja –': 'No more damaged hair from coloring –',
    'posvetlite se': 'go lighter', 'Popravlja': 'Repairs', 'Jača': 'Strengthens', 'Hrani': 'Nourishes', 'Čuva': 'Protects',
    'Pomaže da se obnove oštećene veze u vlaknu kose, posebno posle farbanja i blanširanja.': 'Helps rebuild broken bonds in the hair fiber, especially after coloring and bleaching.',
    'Kosa postaje otpornija na fen, peglu i svakodnevno češljanje, pa se manje lomi.': 'Hair becomes more resistant to blow-drying, flat irons and daily brushing, so it breaks less.',
    'Pogodan je za sve tipove kose, od tanke do guste, i ne opterećuje je.': 'Suitable for all hair types, from fine to thick, and never weighs hair down.',
    'Pomaže da sjaj i boja traju duže između dva termina u salonu.': 'Helps shine and color last longer between salon visits.',
    'U salonu · tokom farbanja': 'In the salon · during coloring', 'U salonu · posle farbanja': 'In the salon · after coloring',
    'Kod kuće · jednom nedeljno': 'At home · once a week',
    'Dodaje se direktno u boju ili blanš i štiti veze u kosi dok traje farbanje, pa kosa ostaje jaka čak i kad se posvetljava.': 'Mixed straight into the color or bleach, it protects the bonds in your hair during coloring, so hair stays strong even when you go lighter.',
    'Nanosi se posle ispiranja boje i dodatno učvršćuje i obnavlja vlakno kose, za mekanu i sjajnu kosu.': 'Applied after the color is rinsed out, it further strengthens and restores the hair fiber for soft, shiny hair.',
    'Nanosi se na vlažnu kosu pre pranja i čuva rezultat tretmana do vašeg sledećeg termina. Za svakodnevno pranje tu je šampon No.4.': 'Applied to damp hair before washing, it keeps the treatment results until your next appointment. For everyday washing there is No.4 shampoo.',
    'Olaplex tretman u salonu': 'Olaplex treatment in the salon', 'Zakažite tretman': 'Book a treatment',
    'Olaplex No.4 Bond Maintenance šampon na peni': 'Olaplex No.4 Bond Maintenance shampoo lather',

    // usluge — stranica
    'Usluge i cene': 'Services & prices', 'Sve što vaša': 'Everything your', 'kosa': 'hair', 'traži': 'needs',
    'Cene zavise od dužine i gustine kose. Konačnu cenu dogovaramo u salonu.': 'Prices depend on hair length and thickness. The final price is agreed in the salon.',
    'Vaša sledeća frizura počinje ovde.': 'Your next hairstyle starts here.', 'Češljanje duge plave kose': 'Combing long blonde hair'
  };

  var MON = ['januar','februar','mart','april','maj','jun','jul','avgust','septembar','oktobar','novembar','decembar'];
  var MON_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var DAY = ['nedelja','ponedeljak','utorak','sreda','četvrtak','petak','subota'];
  var DAY_EN = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var SVC = {}; Object.keys(D).forEach(function (k) { SVC[k.toLowerCase()] = D[k]; });
  var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
  var mi = function (m) { return MON.indexOf(m.toLowerCase()); };

  function dates(s) {
    // "Ponedeljak, 9. novembar" -> "Monday, 9 November"
    s = s.replace(/(nedelja|ponedeljak|utorak|sreda|četvrtak|petak|subota), (\d{1,2})\. (januar|februar|mart|april|maj|jun|jul|avgust|septembar|oktobar|novembar|decembar)/gi,
      function (_, d, n, m) { return DAY_EN[DAY.indexOf(d.toLowerCase())] + ', ' + n + ' ' + MON_EN[mi(m)]; });
    return s.replace(/ u (\d{1,2}:\d{2})h/g, ' at $1').replace(/(\d{1,2}:\d{2})h/g, '$1');
  }

  var RULES = [
    [/^od ([\d.]+) RSD$/, function (m) { return 'from ' + m[1] + ' RSD'; }],
    [/^(\d+) recenzij[ae]$/, function (m) { return m[1] + ' reviews'; }],
    [/^Ocena ([\d,]+) od 5$/, function (m) { return 'Rated ' + m[1].replace(',', '.') + ' out of 5'; }],
    [/^(Januar|Februar|Mart|April|Maj|Jun|Jul|Avgust|Septembar|Oktobar|Novembar|Decembar) (\d{4})$/, function (m) { return MON_EN[mi(m[1])] + ' ' + m[2]; }],
    [/^(Fotografija|Rad salona|Uvećaj fotografiju|Otvori recenziju) (\d+)$/, function (m) { return ({ 'Fotografija': 'Photo', 'Rad salona': 'Salon work', 'Uvećaj fotografiju': 'Enlarge photo', 'Otvori recenziju': 'Open review' })[m[1]] + ' ' + m[2]; }],
    [/^Vreme — (.+)$/, function (m) { return 'Time — ' + dates(m[1]); }],
    [/^(.+) — izaberite vreme$/, function (m) { return dates(m[1]) + ' — choose a time'; }],
    [/^(.+?) kod (.+)$/, function (m) { var v = SVC[m[1].toLowerCase()]; return v ? v.toLowerCase() + ' with ' + m[2] : null; }],
    [/Pozvaćemo vas na (.+?) da potvrdimo termin\./, function (m, s) { return dates(s).replace(m[0], 'We will call you at ' + m[1] + ' to confirm the appointment.'); }],
    [/(nedelja|ponedeljak|utorak|sreda|četvrtak|petak|subota), \d{1,2}\. /i, function (m, s) { return dates(s); }],
    [/ · /, function (m, s) {
      var ch = false, out = s.split(' · ').map(function (p) { var t = tr(p); if (t !== p) ch = true; return t; }).join(' · ');
      return ch ? out : null;
    }]
  ];

  function tr(src) {
    var lead = src.match(/^\s*/)[0], tail = src.match(/\s*$/)[0], core = src.trim().replace(/\s+/g, ' ');
    if (!core) return src;
    var out = D[core];
    if (out === undefined) { var lc = SVC[core.toLowerCase()]; if (lc !== undefined && core === core.toLowerCase()) out = lc.toLowerCase(); }
    if (out === undefined) {
      for (var i = 0; i < RULES.length; i++) {
        var m = core.match(RULES[i][0]);
        if (m) { var r = RULES[i][1](m, core); if (r != null) { out = r; break; } }
      }
    }
    return out === undefined ? src : lead + out + tail;
  }

  var ATTRS = ['alt', 'aria-label', 'placeholder', 'title'];
  var origT = new WeakMap(), setT = new WeakMap();
  var origA = new WeakMap(), setA = new WeakMap();
  var lang = 'sr';

  function skip(el) { return !el || el.closest('script,style,noscript,[translate="no"]'); }
  function doText(n) {
    if (skip(n.parentElement)) return;
    var cur = n.nodeValue;
    if (setT.get(n) !== cur) origT.set(n, cur);       // React (ili neko drugi) je promenio tekst
    var src = origT.has(n) ? origT.get(n) : cur;
    var want = lang === 'en' ? tr(src) : src;
    if (want !== cur) n.nodeValue = want;
    setT.set(n, want);
  }
  function doAttrs(el) {
    if (skip(el)) return;
    var o = origA.get(el) || {}, s = setA.get(el) || {};
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      var cur = el.getAttribute(a);
      if (s[a] !== cur) o[a] = cur;
      var want = lang === 'en' ? tr(o[a]) : o[a];
      if (want !== cur) el.setAttribute(a, want);
      s[a] = want;
    });
    origA.set(el, o); setA.set(el, s);
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) return doText(root);
    if (root.nodeType !== 1) return;
    doAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) doText(n); else doAttrs(n); }
  }

  var busy = false;
  var mo = new MutationObserver(function (recs) {
    if (busy) return; busy = true;
    try {
      recs.forEach(function (r) {
        if (r.type === 'characterData') doText(r.target);
        else if (r.type === 'attributes') doAttrs(r.target);
        else r.addedNodes.forEach(walk);
      });
    } finally { busy = false; }
  });

  var titles = { sr: null, en: null };
  function applyTitle() {
    if (titles.sr === null) titles.sr = document.title;
    var t = titles.sr || '';
    document.title = lang === 'en' ? t.replace('Usluge i cene', 'Services & prices').replace('Nega kose', 'Hair care').replace('Galerija', 'Gallery').replace('frizerski salon', 'hair salon') : t;
  }

  function setLang(l, save) {
    lang = l === 'en' ? 'en' : 'sr';
    document.documentElement.setAttribute('lang', lang);
    if (save) { try { localStorage.setItem('look-lang', lang); } catch (e) {} }
    busy = true; try { walk(document.body); } finally { busy = false; }
    applyTitle();
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
  }

  var css = '.lang-sw{display:inline-flex;align-items:center;gap:6px;font:inherit;letter-spacing:.18em;white-space:nowrap}' +
    '.lang-sw button{background:none;border:0;padding:4px 0;margin:0;font:inherit;letter-spacing:inherit;color:inherit;cursor:pointer;opacity:.55;border-bottom:2px solid transparent;transition:opacity .25s ease,border-color .25s ease}' +
    '.lang-sw button:hover{opacity:1}' +
    '.lang-sw button[aria-pressed="true"]{opacity:1;border-bottom-color:#F7D358}' +
    '.lang-sw i{font-style:normal;opacity:.4}';

  function init() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var l = 'sr';
    try { l = localStorage.getItem('look-lang') || 'sr'; } catch (e) {}
    var q = (location.search.match(/[?&]lang=(sr|en)/) || [])[1]; if (q) l = q;
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-lang]');
      if (b) { e.preventDefault(); setLang(b.getAttribute('data-lang'), true); }
    }, true);
    window.addEventListener('storage', function (e) { if (e.key === 'look-lang' && e.newValue) setLang(e.newValue, false); });
    mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    setLang(l, false);
  }
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();

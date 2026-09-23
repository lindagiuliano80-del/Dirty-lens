# Integrare questo scaffold nel progetto DirtyLens

## 1. Copia i file
Dentro la cartella del tuo progetto Astro (quella creata con `npm create astro@latest`,
es. `segnavia/` o come l'hai chiamata), copia dentro `src/` e `public/` le cartelle
presenti in questo zip, **unendole** con quelle già esistenti (non sovrascrivere
`src/pages/index.astro` di default: sostituiscilo con quello incluso qui).

Alla fine dovresti avere:

```
tuo-progetto/
  src/
    content.config.ts
    content/
      viaggi/
        molise.md
        puglia.md
        toscana.md
        emilia-romagna.md
    data/
      italy-regions.json
    components/
      RegionMap.astro
    pages/
      index.astro
      viaggi/
        [regione].astro
  public/
    gpx/
      molise.gpx
      puglia.gpx
      toscana.gpx
      emilia-romagna.gpx
```

Nota: `content.config.ts` va nella cartella `src/` direttamente, **non** dentro `src/content/` — è una particolarità di Astro v6 (nelle versioni precedenti stava dentro `content/`).

## 2. Installa Leaflet
Nel terminale, dentro la cartella del progetto:

```
npm install leaflet
npm install -D @types/leaflet
```

## 3. Avvia il sito

```
npm run dev
```

Apri l'indirizzo che ti dà il terminale (es. `localhost:4321`): dovresti vedere
la mappa volare sull'Italia, con le quattro regioni luminescenti. Passandoci sopra
il mouse compare l'anteprima, cliccando si apre la pagina del viaggio con i dati
reali presi dal file `.md` corrispondente.

## Come aggiungere un nuovo viaggio
1. Crea un nuovo file in `src/content/viaggi/nome-regione.md`, copiando la struttura
   di uno esistente (cambia `regione`, `titolo`, `data`, `km`, `dislivelloM`, `giorni`,
   `gpxFile`, e scrivi le osservazioni come testo normale sotto il frontmatter).
2. Metti il file `.gpx` vero in `public/gpx/`.
3. Riavvia (o aspetta l'aggiornamento automatico di `npm run dev`) — la nuova regione
   si accende da sola sulla mappa, nessun'altra modifica necessaria.

Importante: il campo `regione` nel file `.md` deve corrispondere **esattamente** al
nome usato nel file `src/data/italy-regions.json` (proprietà `reg_name`), altrimenti
la regione non si illumina. I nomi validi sono quelli delle 20 regioni italiane in
italiano standard, es. "Emilia-Romagna", "Trentino-Alto Adige/Südtirol", ecc.

## Aggiungere le foto di un viaggio
La pagina di ogni viaggio ha una galleria a scorrimento orizzontale (70% a sinistra)
e una mini mappa (30% a destra): mentre scorri, sulla mappa si illumina il punto
esatto in cui è stata scattata la foto che hai davanti.

Le foto si elencano nel frontmatter del file `.md`, nell'ordine in cui vuoi vederle:

```yaml
foto:
  - src: "/foto/molise/cacciatore.jpg"   # file dentro public/foto/molise/
    luogo: "Campobasso"                  # nome che si accende sulla mappa
    didascalia: "Il cacciatore incontrato all'alba sopra Campobasso."
    lat: 41.5603                         # coordinate dello scatto
    lng: 14.6627
```

- Metti i file delle immagini in `public/foto/<regione>/`.
- Finché una foto non ha `src`, al suo posto compare un segnaposto colorato.
- Le coordinate le trovi su Google Maps (tasto destro sul punto → copia le coordinate),
  oppure nei dati EXIF della foto se il telefono ha il GPS attivo.
- Le foto verticali e orizzontali vengono mostrate intere, senza ritagli.
- Le dimensioni di ogni foto vengono lette in automatico (`src/lib/image-size.ts`),
  quindi la galleria non "salta" mentre le immagini si caricano. Formati supportati:
  JPG, PNG, WebP. Per un sito veloce, esporta le foto a circa 2000 px sul lato lungo.
- Le 7 foto attuali in `public/foto/molise/` sono ritagliate da uno screenshot, quindi a
  bassa risoluzione, e i luoghi sono assegnati a caso: sostituiscile con i file originali
  tenendo gli stessi nomi (`molise-01.jpg` …) e correggi `luogo`, `lat`, `lng` nel `.md`.

## Cosa manca ancora (prossimi passi)
- Il profilo altimetrico animato del prototipo HTML non è ancora stato riportato in
  questa pagina di dettaglio — se lo vuoi, chiedimelo e lo aggiungiamo.
- Nessun deploy configurato: quando sei pronta, colleghiamo il repository GitHub a
  Netlify o Vercel.

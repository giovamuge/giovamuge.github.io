---
title: "CantApp: A Flutter Lyrics App with Algolia Full-Text Search"
title_it: "CantApp: Un'App Flutter per Testi con Ricerca Full-Text Algolia"
excerpt: "A mobile app for browsing, searching, and displaying song lyrics — built with Flutter and Dart, with Algolia powering instant full-text search and Firebase handling content and authentication."
excerpt_it: "Un'app mobile per sfogliare, cercare e visualizzare testi di canzoni — realizzata con Flutter e Dart, con Algolia per la ricerca full-text istantanea e Firebase per contenuti e autenticazione."
date: "2022-06-01T10:00:00.000Z"
author:
    name: Giovanni Mugelli
    picture: "/blog/authors/giovamuge.jpeg"
tags:
    - "flutter"
    - "dart"
    - "firebase"
    - "algolia"
    - "mobile"
---

Music has always been central to how I think about projects. **CantApp** began as a simple idea: a clean, distraction-free app for reading lyrics. What it became was a practical education in the architecture of a production-grade Flutter application — search infrastructure, content management, monetisation, and the ergonomics of multi-screen mobile navigation.

_Cant_ is a nod to _canto_, Italian for song. The project was designed as a reusable template — a starting point that other developers could fork and adapt for their own content domains.

## Why Flutter?

At the time CantApp was built, Flutter had just passed version 2.0 and the community was exploding. The promise of a single Dart codebase that compiles to native iOS and Android — with pixel-perfect rendering that does not depend on platform UI components — was compelling. After years of working with React Native (which bridges to native components) and Xamarin (which uses native renderers), Flutter's approach of owning the entire rendering pipeline felt refreshingly direct.

Dart, too, proved a pleasant surprise. Its syntax sits comfortably between Java and JavaScript, its sound null safety system catches entire categories of runtime errors at compile time, and the hot reload cycle is the fastest I have experienced in mobile development.

## The Search Problem

Lyrics apps live or die by search. A user who cannot find a song in under two seconds will close the app. Firebase Firestore, the natural persistence choice in the Flutter ecosystem, does not support full-text search — it can query by prefix, but not by arbitrary substring or relevance ranking.

The solution is **Algolia**, a search-as-a-service platform that indexes content and provides millisecond full-text search with typo tolerance and relevance tuning. A Firebase Cloud Function syncs new and updated lyric documents to the Algolia index automatically. The Flutter client then queries Algolia directly for search, while Firestore handles authenticated reads for the full lyric content.

This split architecture — Algolia for discovery, Firestore for content — is a pattern that scales well and keeps the client code clean.

## Monetisation with AdMob

CantApp integrates **Google AdMob** for interstitial advertising between song views. Integrating AdMob in Flutter requires careful handling of the ad lifecycle — loading ads asynchronously, respecting rate limits, and ensuring ads do not interrupt the reading experience mid-lyric.

The implementation uses a dedicated ad service class that pre-loads the next ad while the user is reading the current lyric. By the time they navigate away, an ad is ready without any visible loading delay.

## App Icon and Splash Screen

The custom app icon and splash screen were among the last things added — and among the most fiddly. Flutter's icon generation tooling has improved considerably since then, but at the time, producing the correct asset sizes for the App Store and Play Store required a separate script and careful manual verification.

The icon design is clean and typographic, consistent with the app's minimal aesthetic.

## Reflections on Flutter for Production

CantApp convinced me that Flutter is a serious tool for production mobile development. The ecosystem has some rough edges — particularly around platform-specific packages and the iOS build toolchain — but the developer experience for the core UI work is excellent.

The full-text search architecture (Algolia + Firestore + Cloud Functions) has become a pattern I return to regularly. It is well worth the initial setup cost for any app where content discovery is a primary use case.

The source code and template are available on [GitHub](https://github.com/giovamuge/cantapp) under a public template licence.

<!-- LANG_IT -->

La musica ha sempre avuto un ruolo centrale nel modo in cui penso ai progetti. **CantApp** è nata come un'idea semplice: un'app pulita, priva di distrazioni, per leggere i testi. Quello che è diventata è stata un'educazione pratica nell'architettura di un'applicazione Flutter per la produzione — infrastruttura di ricerca, gestione dei contenuti, monetizzazione e l'ergonomia della navigazione mobile multi-schermata.

_Cant_ è un richiamo a _canto_, termine italiano. Il progetto è stato progettato come un template riutilizzabile — un punto di partenza che altri sviluppatori possano forkare e adattare ai propri domini di contenuto.

## Perché Flutter?

Quando CantApp è stata costruita, Flutter aveva appena superato la versione 2.0 e la community stava esplodendo. La promessa di un singolo codebase Dart che compila in applicazioni native iOS e Android — con rendering pixel-perfect che non dipende dai componenti UI della piattaforma — era convincente. Dart si è rivelato una piacevole sorpresa: la sua sintassi si colloca comodamente tra Java e JavaScript, il suo sistema di null safety cattura intere categorie di errori a runtime in fase di compilazione, e il ciclo di hot reload è il più veloce che abbia sperimentato nello sviluppo mobile.

## Il Problema della Ricerca

Le app di testi vivono o muoiono in base alla ricerca. Un utente che non riesce a trovare una canzone in meno di due secondi chiuderà l'app. Firebase Firestore non supporta la ricerca full-text — può cercare per prefisso, ma non per sottostringa arbitraria o ranking di rilevanza.

La soluzione è **Algolia**, una piattaforma search-as-a-service che indicizza i contenuti e fornisce ricerca full-text in millisecondi con tolleranza agli errori di battitura. Una Firebase Cloud Function sincronizza i documenti dei testi nuovi e aggiornati all'indice Algolia automaticamente. Il client Flutter interroga poi Algolia direttamente per la ricerca, mentre Firestore gestisce le letture autenticate per il contenuto completo del testo.

Questa architettura divisa — Algolia per la scoperta, Firestore per i contenuti — è un pattern che scala bene e mantiene il codice del client pulito.

## Monetizzazione con AdMob

CantApp integra **Google AdMob** per la pubblicità interstiziale tra le visualizzazioni delle canzoni. L'implementazione usa una classe di servizio pubblicitario dedicata che precarica il prossimo annuncio mentre l'utente legge il testo corrente. Nel momento in cui naviga via, un annuncio è pronto senza alcun ritardo di caricamento visibile.

## Riflessioni su Flutter per la Produzione

CantApp mi ha convinto che Flutter è uno strumento serio per lo sviluppo mobile in produzione. L'ecosistema ha alcuni bordi grezzi — in particolare attorno ai pacchetti specifici per piattaforma e alla toolchain di build iOS — ma l'esperienza di sviluppo per il lavoro UI principale è eccellente.

L'architettura di ricerca full-text (Algolia + Firestore + Cloud Functions) è diventata un pattern a cui torno regolarmente. Vale sicuramente il costo di configurazione iniziale per qualsiasi app in cui la scoperta dei contenuti è un caso d'uso primario.

Il codice sorgente è disponibile su [GitHub](https://github.com/giovamuge/cantapp).

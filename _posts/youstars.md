---
title: "YouStars: Browsing GitHub Starred Repositories with React Native"
title_it: "YouStars: Sfogliare i Repository GitHub Preferiti con React Native"
excerpt: "A concept mobile app that visualises the GitHub starred repositories of any user — built with React Native and TypeScript, consuming the GitHub REST API on iOS and Android."
excerpt_it: "Un'app mobile concettuale che visualizza i repository preferiti di qualsiasi utente GitHub — realizzata con React Native e TypeScript, consumando la REST API di GitHub su iOS e Android."
date: "2022-08-15T10:00:00.000Z"
author:
    name: Giovanni Mugelli
    picture: "/blog/authors/giovamuge.jpeg"
tags:
    - "react-native"
    - "typescript"
    - "github-api"
    - "mobile"
    - "ios"
    - "android"
---

GitHub's starred repositories are a form of personal curation. Over years of using the platform, a developer's stars accumulate into something that resembles a bibliography — a record of tools, libraries, projects, and ideas that caught their attention. **YouStars** is an app that treats those stars as a first-class data source.

The premise is simple: enter a GitHub username and browse what they have starred, with proper metadata, language badges, and direct links to each repository.

## The Concept App Pattern

YouStars was built as a _concept app_ — a project whose primary purpose is to explore a technology, not to solve a business problem. This is a pattern I find valuable. Without product constraints or stakeholder deadlines, a concept app lets you go deep on a specific technical area and produce something you can share and discuss.

In this case, the technology under exploration was **React Native** with **TypeScript**. At the time, React Native's reputation for performance and developer experience was mixed. I wanted to form my own view, and the best way to do that is to build something real.

## Consuming the GitHub API

The GitHub REST API is well-documented, rate-limited (60 unauthenticated requests per hour, 5,000 with authentication), and returns richly structured JSON. For a concept app, the unauthenticated limit is sufficient.

The stars endpoint — `GET /users/{username}/starred` — returns paginated arrays of repository objects with fields including name, description, language, stargazer count, last pushed date, and owner information. YouStars fetches these pages incrementally as the user scrolls, implementing infinite scroll with a loading indicator at the bottom of the list.

## TypeScript in React Native

Adding TypeScript to a React Native project in 2022 required some configuration that is now handled automatically by the `create-react-native-app` template. The type definitions for React Native are maintained in the `@types/react-native` package, and the GitHub API responses are typed against the `@octokit/types` definitions.

The discipline of typing API responses pays dividends quickly. The GitHub repository object has many optional fields (no description, no homepage, not yet pushed), and TypeScript's strict null checks force you to handle every case explicitly rather than discovering them at runtime.

## Cross-Platform Considerations

React Native renders using native platform components, so the same TypeScript code produces a genuinely native experience on both iOS and Android. The list view uses React Native's `FlatList`, which is a performant, native-scrolling list component. The header search bar maps to the native iOS search controller on iOS and a Material Design text input on Android.

One platform difference that required explicit handling: iOS status bar styling. On iOS, the status bar overlaps the app content by default; on Android, it does not. A `Platform.select` call in the container component handles this.

## What I Took Away

React Native's bridge architecture (in the version used at the time) introduced some performance caveats for heavy animations, but for a data-driven list application like YouStars, it was more than adequate. The developer experience — hot reload, the Metro bundler, the React DevTools integration — was excellent.

Most importantly, working in React Native with TypeScript confirmed that the React mental model (components, hooks, unidirectional data flow) translates naturally to mobile UI, regardless of the rendering target.

The simulation and source code are available on [GitHub](https://github.com/giovamuge/youstars).

<!-- LANG_IT -->

I repository preferiti su GitHub sono una forma di curazione personale. Nel corso degli anni di utilizzo della piattaforma, le stelle di uno sviluppatore si accumulano in qualcosa che assomiglia a una bibliografia — un registro di strumenti, librerie, progetti e idee che hanno catturato la loro attenzione. **YouStars** è un'app che tratta quelle stelle come una fonte di dati di primo livello.

La premessa è semplice: inserisci un nome utente GitHub e sfoglia ciò che hanno messo tra i preferiti, con metadati appropriati, badge del linguaggio e link diretti a ciascun repository.

## Il Pattern dell'App Concettuale

YouStars è stata costruita come _app concettuale_ — un progetto il cui scopo principale è esplorare una tecnologia, non risolvere un problema di business. Questo è un pattern che trovo prezioso. Senza vincoli di prodotto o scadenze degli stakeholder, un'app concettuale ti permette di approfondire un'area tecnica specifica e produrre qualcosa che puoi condividere e discutere.

In questo caso, la tecnologia in esplorazione era **React Native** con **TypeScript**. All'epoca, la reputazione di React Native per le prestazioni e l'esperienza dello sviluppatore era mista. Volevo formarmi una mia opinione, e il modo migliore per farlo è costruire qualcosa di reale.

## Consumare l'API GitHub

La REST API di GitHub è ben documentata, con rate limit (60 richieste non autenticate per ora, 5.000 con autenticazione), e restituisce JSON strutturato in modo ricco. L'endpoint delle stelle — `GET /users/{username}/starred` — restituisce array paginati di oggetti repository con campi che includono nome, descrizione, linguaggio, conteggio delle stelle, data dell'ultimo push e informazioni sul proprietario.

YouStars recupera queste pagine in modo incrementale mentre l'utente scorre, implementando lo scroll infinito con un indicatore di caricamento in fondo alla lista.

## TypeScript in React Native

L'aggiunta di TypeScript a un progetto React Native richiede una configurazione ora gestita automaticamente dal template `create-react-native-app`. Le definizioni di tipo per le risposte dell'API GitHub sono tipizzate rispetto alle definizioni `@octokit/types`.

La disciplina di tipizzare le risposte API paga dividendi rapidamente. L'oggetto repository GitHub ha molti campi opzionali, e i controlli null strict di TypeScript ti costringono a gestire ogni caso esplicitamente piuttosto che scoprirli a runtime.

Il codice sorgente è disponibile su [GitHub](https://github.com/giovamuge/youstars).

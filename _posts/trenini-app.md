---
title: "Trenini App: Building a Cross-Platform Train Schedule Manager with .NET MAUI"
title_it: "Trenini App: Gestore di Orari Ferroviari Cross-Platform con .NET MAUI"
excerpt: "A mobile app that brings order to Italy's notoriously complex regional rail timetables. Built with .NET MAUI, C#, and the MVVM pattern — running natively on iOS and Android from a single codebase."
excerpt_it: "Un'app mobile per mettere ordine negli orari ferroviari regionali italiani. Realizzata con .NET MAUI, C# e il pattern MVVM — eseguita nativamente su iOS e Android da un unico codebase."
date: "2025-11-15T09:00:00.000Z"
author:
    name: Giovanni Mugelli
    picture: "/blog/authors/giovamuge.jpeg"
tags:
    - "maui"
    - "dotnet"
    - "csharp"
    - "mobile"
    - "ios"
    - "android"
---

Italy has some of the most scenic rail routes in the world. It also has some of the most confusing timetables. Regional trains, high-speed intercity lines, and local commuter services all operate on different schedules — sometimes published across multiple sources with inconsistent formats. **Trenini App** is my attempt to bring a little order to that chaos.

The name is intentionally affectionate. _Trenini_ means "little trains" in Italian — the kind you played with as a child. It carries the same warmth I wanted the app itself to have.

## Why .NET MAUI?

I had been working primarily in web technologies and Flutter, and I was curious about Microsoft's answer to cross-platform mobile development. **.NET MAUI** (Multi-platform App UI) is the successor to Xamarin.Forms, introduced as part of the .NET 6 unified platform. It compiles to native iOS and Android applications from a single C# codebase, with platform-specific renderers that adapt to each OS's native controls.

The appeal is significant: if you already live in the .NET ecosystem — and I do, through years of .NET Core and C# work on backend systems — then MAUI lets you bring those skills directly to mobile without context-switching to a different language and paradigm.

## Architecture: MVVM Done Right

The app is structured around the **Model-View-ViewModel** pattern, which is the idiomatic architecture for MAUI applications. Each screen has a corresponding ViewModel that exposes observable properties and commands. The Views bind declaratively to these properties — no code-behind, no imperative UI manipulation.

The project structure reflects this cleanly:

- `Models/` — train schedule data types, route entities, timetable entries
- `ViewModels/` — one ViewModel per screen, handling state and business logic
- `Pages/` — XAML pages that bind to ViewModels
- `Services/` — data access layer, schedule parsing, network calls
- `Behaviors/` — custom XAML behaviors, including a `HapticFeedbackBehavior` that triggers haptic responses on user interactions
- `Extensions/` — C# extension methods for cleaner, more expressive code

## Haptic Feedback and Native Feel

One of the details I invested time in was haptic feedback. On iOS especially, users have come to expect physical confirmation of UI interactions — a subtle tap when selecting a departure time, a slightly stronger pulse when a train connection is missed. The `HapticFeedbackBehavior` class encapsulates this logic as a reusable XAML behavior, keeping the ViewModels free of platform concerns.

Getting haptic feedback right in MAUI required understanding the platform abstraction layer. MAUI provides a `HapticFeedback` API in the `Microsoft.Maui.Devices` namespace, but the nuances of intensity and pattern differ between iOS and Android. The behavior handles this gracefully with platform conditionals.

## What I Learned About MAUI

MAUI is a genuinely capable framework, but it is younger than Flutter and the tooling shows it. Hot reload for XAML can be unreliable. Some third-party packages have not fully caught up from Xamarin.Forms. The debugging experience on iOS simulators is excellent; on Android emulators, there is more friction.

That said, the productivity gains from writing in C# — a language I know deeply — more than compensated. The type system, the LINQ query expressions for filtering timetables, the async/await model for network calls: all of it felt immediately natural.

## Status and Roadmap

The project is under active development. Current features include timetable browsing, favourite routes, and offline caching of recently viewed schedules. On the roadmap: real-time delay data from the Trenitalia API, push notifications for departure reminders, and a widget for the iOS home screen.

The source code is available on [GitHub](https://github.com/giovamuge/trenini-app).

<!-- LANG_IT -->

L'Italia ha alcune delle tratte ferroviarie più panoramiche al mondo. Ha anche alcuni degli orari più confusi. Treni regionali, intercity ad alta velocità e servizi pendolari locali operano su orari diversi — a volte pubblicati su più fonti con formati inconsistenti. **Trenini App** è il mio tentativo di portare un po' d'ordine in quel caos.

Il nome è volutamente affettuoso. _Trenini_ — il tipo con cui giocavi da bambino. Porta la stessa calore che volevo nell'app stessa.

## Perché .NET MAUI?

Stavo lavorando principalmente con tecnologie web e Flutter, e ero curioso della risposta di Microsoft allo sviluppo mobile cross-platform. **.NET MAUI** è il successore di Xamarin.Forms, introdotto come parte della piattaforma unificata .NET 6. Compila applicazioni native iOS e Android da un unico codebase C#, con renderer specifici per piattaforma che si adattano ai controlli nativi di ciascun OS.

L'attrattiva è significativa: se già vivi nell'ecosistema .NET — e io lo faccio, attraverso anni di lavoro su sistemi backend — allora MAUI ti permette di portare quelle competenze direttamente al mobile senza cambiare linguaggio e paradigma.

## Architettura: MVVM Fatto Bene

L'app è strutturata attorno al pattern **Model-View-ViewModel**, l'architettura idiomatica per applicazioni MAUI. Ogni schermata ha un ViewModel corrispondente che espone proprietà osservabili e comandi. Le Views si legano dichiarativamente a queste proprietà — nessun code-behind, nessuna manipolazione imperativa della UI.

La struttura del progetto riflette questo chiaramente:

- `Models/` — tipi di dati degli orari, entità di rotte, voci di tabella oraria
- `ViewModels/` — un ViewModel per schermata, che gestisce stato e logica di business
- `Pages/` — pagine XAML che si legano ai ViewModel
- `Services/` — layer di accesso ai dati, parsing degli orari, chiamate di rete
- `Behaviors/` — comportamenti XAML personalizzati, incluso `HapticFeedbackBehavior`
- `Extensions/` — metodi di estensione C# per un codice più espressivo

## Feedback Aptico e Sensazione Nativa

Uno dei dettagli su cui ho investito tempo è il feedback aptico. Su iOS soprattutto, gli utenti si aspettano una conferma fisica delle interazioni — un tocco sottile alla selezione di un orario di partenza, un impulso leggermente più forte quando si perde una coincidenza. Il `HapticFeedbackBehavior` incapsula questa logica come un behavior XAML riutilizzabile, mantenendo i ViewModel liberi da preoccupazioni di piattaforma.

## Cosa Ho Imparato su MAUI

MAUI è un framework genuinamente capace, ma è più giovane di Flutter e il tooling lo mostra. Il hot reload per XAML può essere inaffidabile. Alcuni pacchetti di terze parti non si sono ancora completamente aggiornati da Xamarin.Forms.

Detto questo, i guadagni di produttività dallo scrivere in C# — un linguaggio che conosco profondamente — hanno più che compensato. Il sistema di tipi, le espressioni di query LINQ per il filtraggio degli orari, il modello async/await per le chiamate di rete: tutto si è sentito immediatamente naturale.

Il codice sorgente è disponibile su [GitHub](https://github.com/giovamuge/trenini-app).

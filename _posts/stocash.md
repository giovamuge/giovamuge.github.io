---
title: "Stocash: A Personal Finance Tracker Built for Clarity"
title_it: "Stocash: Un Tracker di Finanze Personali Costruito per la Chiarezza"
excerpt: "A personal project to track expenses, cash flows, and small portfolios in one place — without the complexity of banking integrations or subscription fees. Clean data, clear decisions."
excerpt_it: "Un progetto personale per tracciare spese, flussi di cassa e piccoli portafogli in un unico posto — senza la complessità delle integrazioni bancarie o degli abbonamenti. Dati puliti, decisioni chiare."
date: "2023-06-01T10:00:00.000Z"
author:
    name: Giovanni Mugelli
    picture: "/blog/authors/giovamuge.jpeg"
tags:
    - "finance"
    - "personal-project"
    - "typescript"
    - "mobile"
---

The name collapses two words: _stock_ and _cash_. The idea is equally direct — a single view of where your money is and where it is going, without the overhead of connecting bank accounts, authorising third-party services, or navigating an app designed for a financial institution rather than for you.

**Stocash** is a personal finance tracker built from the frustration of managing small cash flows and modest investment positions across three different apps, none of which talked to each other.

## The Problem with Personal Finance Apps

Most personal finance applications fall into one of two categories. The first category is the banking app: sophisticated, secure, but restricted to a single institution's data and optimised for the bank's interests, not the user's. The second category is the aggregation service: powerful, but requiring open banking access, which means authorising a third-party company to read every transaction across all your accounts — a privacy trade-off many people are rightly uncomfortable with.

There is a gap in between: a lightweight, private, manually-updated ledger that gives you a real-time picture of your financial position without requiring any integrations at all.

## Manual Entry as a Feature

The deliberate choice of **manual entry** runs counter to the automation trend in fintech. But manual entry has a well-documented side effect: it makes you pay attention. Typing in a coffee purchase, a fuel fill-up, or a dividend payment creates a moment of awareness that automatic import does not. Over time, that attention produces better financial habits.

Stocash is designed to make manual entry as fast as possible — a category selector, an amount field, an optional note, and a confirmation tap. The entire flow takes under five seconds.

## Portfolio Tracking Without Market Data

The portfolio tracking component takes a similar approach: prices are entered manually. You decide when to record a position and at what value. This is deliberately simple — it does not pull live quotes, it does not calculate unrealised gains in real time, and it does not aggregate across currencies automatically.

What it does do is give you a lightweight record of where your capital is deployed, updated when you choose to update it. For small, infrequently-traded positions, this is enough.

## Architecture Notes

The application uses a local-first data model with optional export to CSV. All data is stored on device; there is no cloud sync and no account creation. The interface is designed around a daily and monthly summary view that surfaces the patterns that matter: spending by category, cash in versus cash out, portfolio value over time.

This project remains a private work-in-progress — an app I actually use — which is why the repository is not publicly listed. The code reflects an iterative approach: it has been rewritten twice as my requirements evolved and as the technology stack I prefer has shifted.

## What It Taught Me

Building a finance tool for your own use is a peculiar discipline. The user is also the developer, which removes the feedback distance but introduces a different bias: the temptation to add features you think you want rather than features you actually need. Learning to resist that temptation — to ship a simpler version and live with it for a month before adding anything — has been one of the most valuable lessons this project has taught me.

<!-- LANG_IT -->

Il nome unisce due parole: _stock_ e _cash_. L'idea è ugualmente diretta — una visione unica di dove si trovano i tuoi soldi e dove stanno andando, senza l'overhead di connettere conti bancari, autorizzare servizi di terze parti, o navigare in un'app progettata per un'istituzione finanziaria piuttosto che per te.

**Stocash** è un tracker di finanze personali nato dalla frustrazione di gestire piccoli flussi di cassa e modeste posizioni di investimento su tre diverse app, nessuna delle quali comunicava con le altre.

## Il Problema con le App di Finanza Personale

La maggior parte delle applicazioni di finanza personale ricade in una di due categorie. La prima è l'app bancaria: sofisticata, sicura, ma limitata ai dati di una singola istituzione. La seconda è il servizio di aggregazione: potente, ma richiede accesso open banking — il che significa autorizzare una società di terze parti a leggere ogni transazione — un compromesso sulla privacy che molte persone giustamente evitano.

C'è un divario nel mezzo: un registro leggero, privato, aggiornato manualmente che fornisce un quadro in tempo reale della tua posizione finanziaria senza richiedere alcuna integrazione.

## L'Inserimento Manuale come Funzionalità

La scelta deliberata dell'**inserimento manuale** va contro la tendenza all'automazione nel fintech. Ma l'inserimento manuale ha un effetto collaterale ben documentato: ti fa prestare attenzione. Digitare un acquisto di caffè, un rifornimento di carburante o il pagamento di un dividendo crea un momento di consapevolezza che l'importazione automatica non dà. Nel tempo, quella attenzione produce abitudini finanziarie migliori.

Stocash è progettata per rendere l'inserimento manuale il più rapido possibile — un selettore di categoria, un campo importo, una nota opzionale e una conferma con un tap. L'intero flusso richiede meno di cinque secondi.

## Tracciamento del Portafoglio senza Dati di Mercato

Il componente di tracciamento del portafoglio adotta un approccio simile: i prezzi vengono inseriti manualmente. Non scarica quotazioni in tempo reale, non calcola guadagni non realizzati in tempo reale, e non aggrega automaticamente valute diverse.

Quello che fa è fornire un registro leggero di dove è distribuito il tuo capitale, aggiornato quando scegli di aggiornarlo. Per posizioni piccole e poco negoziate, questo è sufficiente.

## Note Architetturali

L'applicazione usa un modello di dati local-first con esportazione opzionale in CSV. Tutti i dati sono memorizzati sul dispositivo; non c'è sincronizzazione cloud e non è richiesta la creazione di un account. L'interfaccia è progettata attorno a una vista giornaliera e mensile che fa emergere i pattern che contano: spesa per categoria, entrate rispetto alle uscite, valore del portafoglio nel tempo.

## Cosa Mi Ha Insegnato

Costruire uno strumento finanziario per uso personale è una disciplina peculiare. L'utente è anche lo sviluppatore, il che elimina la distanza dal feedback ma introduce un bias diverso: la tentazione di aggiungere funzionalità che pensi di volere piuttosto che funzionalità di cui hai effettivamente bisogno. Imparare a resistere a quella tentazione — rilasciare una versione più semplice e conviverci per un mese prima di aggiungere qualsiasi cosa — è stata una delle lezioni più preziose che questo progetto mi ha insegnato.

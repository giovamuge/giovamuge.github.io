---
title: "TecIngegneria: Designing a Digital Platform for an Engineering Firm"
title_it: "TecIngegneria: Progettare una Piattaforma Digitale per uno Studio di Ingegneria"
excerpt: "A corporate web platform built to give a civil and structural engineering practice a credible, professional presence online — clean design, fast performance, and content that communicates expertise without jargon."
excerpt_it: "Una piattaforma web aziendale costruita per dare a uno studio di ingegneria civile e strutturale una presenza online credibile e professionale — design pulito, prestazioni elevate e contenuti che comunicano competenza senza gergo tecnico."
date: "2023-01-15T10:00:00.000Z"
author:
    name: Giovanni Mugelli
    picture: "/blog/authors/giovamuge.jpeg"
tags:
    - "web"
    - "angular"
    - "typescript"
    - "corporate"
    - "ux"
---

Engineering firms rarely think about their digital presence with the same rigour they apply to structural calculations. The websites they commission tend to be functional but impersonal — a list of services, a phone number, a PDF of certifications. **TecIngegneria** was an opportunity to do better.

The brief was clear: a platform that communicates competence, earns trust before the first phone call, and works flawlessly on the mobile devices that most clients use to vet a potential contractor while standing on a building site.

## The Client

TecIngegneria is a small civil and structural engineering practice with a portfolio spanning residential builds, commercial renovations, and infrastructure projects across central Italy. The firm's principals are experienced engineers with decades of project history — but their previous website was a static HTML page built in 2011, last updated in 2016.

The gap between their actual expertise and their digital representation was significant. The challenge was to close it.

## Design Philosophy: Engineering Precision in Visual Form

The visual language of the site draws deliberately from the aesthetics of technical drawing: clean lines, a restrained palette, precise typography, generous white space. There are no stock photographs of hardhat-wearing professionals grinning at clipboards. There are no gradients, no particle animations, no auto-playing video backgrounds.

What there is: a portfolio of real projects, each documented with photographs, a brief description of the structural challenge, and the solution applied. The work speaks for itself. The design's job is to get out of the way.

## Technology Stack

The platform is built with **Angular** (TypeScript), a framework I chose for this project because of its strong opinions about application structure — particularly the module system and the dependency injection container, which make large-scale refactors tractable and keep the codebase navigable as it grows.

The project portfolio section is driven by a structured content model. Each project has a set of typed fields (title, category, location, year, brief description, photograph references) that render into both the portfolio grid and individual project detail pages. Changing a project's data does not require touching any template code.

Performance was a hard constraint. The client operates in areas with variable mobile coverage. The site achieves a Lighthouse performance score above 90 on mobile through aggressive image optimisation, critical CSS inlining, and deferred loading of non-essential JavaScript.

## Content Strategy

Writing the content was as significant a challenge as the engineering. The firm's principals are experts in structural analysis, not copywriters. Working with them to produce descriptions of their projects that were accurate, engaging, and free of impenetrable technical jargon required several rounds of iteration.

The approach: start with the human story (a family extending their home, a historic building requiring seismic strengthening) before introducing the technical response. This inverts the usual engineering narrative, which leads with method and buries the outcome. For a client audience that is primarily non-technical, the human story is the entry point.

## Maintenance and Longevity

One of the most important design decisions was making the content management simple enough that the firm could update it themselves. A lightweight admin interface — protected by authentication, accessible from any browser — allows the principals to add new projects, update contact information, and publish news items without involving a developer.

This matters enormously for a small firm. A website that requires a developer to update is a website that will not be updated.

The repository is private per client agreement.

<!-- LANG_IT -->

Gli studi di ingegneria raramente pensano alla loro presenza digitale con lo stesso rigore che applicano ai calcoli strutturali. I siti web che commissionano tendono ad essere funzionali ma impersonali — un elenco di servizi, un numero di telefono, un PDF di certificazioni. **TecIngegneria** è stata un'opportunità per fare di meglio.

Il brief era chiaro: una piattaforma che comunica competenza, guadagna fiducia prima della prima telefonata, e funziona perfettamente sui dispositivi mobili che la maggior parte dei clienti usa per valutare un potenziale appaltatore mentre si trova su un cantiere.

## Il Cliente

TecIngegneria è un piccolo studio di ingegneria civile e strutturale con un portfolio che abbraccia costruzioni residenziali, ristrutturazioni commerciali e progetti infrastrutturali nel centro Italia. I soci dello studio sono ingegneri esperti con decenni di storia progettuale — ma il loro sito precedente era una pagina HTML statica costruita nel 2011, aggiornata l'ultima volta nel 2016.

Il divario tra la loro competenza effettiva e la loro rappresentazione digitale era significativo. La sfida era colmarlo.

## Filosofia di Design: Precisione Ingegneristica in Forma Visiva

Il linguaggio visivo del sito attinge deliberatamente dall'estetica del disegno tecnico: linee pulite, una palette contenuta, tipografia precisa, generoso spazio bianco. Non ci sono fotografie stock di professionisti con elmetto che sorridono agli appunti. Non ci sono gradienti, animazioni particellari, o sfondi video in riproduzione automatica.

Quello che c'è: un portfolio di progetti reali, ciascuno documentato con fotografie, una breve descrizione della sfida strutturale e la soluzione applicata. Il lavoro parla da solo. Il compito del design è farsi da parte.

## Stack Tecnologico

La piattaforma è costruita con **Angular** (TypeScript), un framework scelto per questo progetto per via delle sue opinioni forti sulla struttura dell'applicazione — in particolare il sistema di moduli e il container di dependency injection, che rendono i refactoring su larga scala praticabili e mantengono il codebase navigabile man mano che cresce.

Le prestazioni erano un vincolo rigido. Il cliente opera in aree con copertura mobile variabile. Il sito raggiunge un punteggio Lighthouse superiore a 90 su mobile attraverso un'ottimizzazione aggressiva delle immagini, l'inlining del CSS critico e il caricamento differito del JavaScript non essenziale.

## Strategia dei Contenuti

Scrivere i contenuti è stata una sfida altrettanto significativa dell'ingegneria. I soci dello studio sono esperti in analisi strutturale, non copywriter. Lavorare con loro per produrre descrizioni dei loro progetti accurate, coinvolgenti e prive di gergo tecnico impenetrabile ha richiesto diversi cicli di iterazione.

L'approccio: inizia con la storia umana (una famiglia che amplia la propria casa, un edificio storico che richiede un rinforzo sismico) prima di introdurre la risposta tecnica. Questo inverte la narrativa ingegneristica usuale, che guida con il metodo e seppellisce il risultato.

## Manutenzione e Longevità

Una delle decisioni di design più importanti è stata rendere la gestione dei contenuti abbastanza semplice affinché lo studio potesse aggiornarli autonomamente. Un'interfaccia di amministrazione leggera — protetta da autenticazione, accessibile da qualsiasi browser — consente ai soci di aggiungere nuovi progetti, aggiornare le informazioni di contatto e pubblicare notizie senza coinvolgere uno sviluppatore.

Il repository è privato per accordo con il cliente.

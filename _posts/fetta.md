---
title: "Fetta: Splitting Packages Fairly with a DFS Algorithm and Next.js 16"
title_it: "Fetta: Dividere Pacchi Equamente con un Algoritmo DFS e Next.js 16"
excerpt: "Fetta solves a deceptively simple problem: how do you divide a set of fixed-size packages among several people as fairly as possible? Built with Next.js 16, Tailwind CSS v4, and a custom depth-first search solver."
excerpt_it: "Fetta risolve un problema apparentemente semplice: come dividere un insieme di pacchi di dimensioni fisse tra più persone nel modo più equo possibile? Realizzato con Next.js 16, Tailwind CSS v4 e un motore di ricerca depth-first personalizzato."
date: "2026-03-10T10:00:00.000Z"
author:
    name: Giovanni Mugelli
    picture: "/blog/authors/giovamuge.jpeg"
tags:
    - "nextjs"
    - "typescript"
    - "algorithms"
    - "tailwind"
    - "web"
coverImage: "/blog/fetta/cover.jpg"
---

Every time a group of friends orders something in bulk — olive oil from a Tuscan cooperative, coffee beans, cured meats — the same conversation happens: how do we split the packages fairly? You cannot cut a 5 kg bag in half. The quantities are fixed, the proportions are always messy, and spreadsheets feel like overkill.

That friction is what led to **Fetta** — Italian for _slice_, as in a fair share of something larger.

## The Problem Is Harder Than It Looks

At first glance, this is a straightforward division problem. In practice, it belongs to a family of combinatorial optimization problems closely related to the bin-packing and subset-sum problems, both of which are NP-complete. The packages are indivisible. Each recipient has a target proportion (not a fixed weight). The total allocation must use only whole packages. The goal is to minimise the deviation from the ideal proportions across all recipients simultaneously.

A naive greedy approach — assign the largest available package to whoever is furthest below their target — fails quickly when the remaining packages create an irreconcilable imbalance. What you need is a solver that can look ahead.

## A DFS Solver with a Greedy Fallback

Fetta's core algorithm is a **depth-first search with backtracking**, modelled as a constraint satisfaction problem. For each package, the solver tries assigning it to each recipient in turn, prunes branches that exceed a recipient's proportional budget, and records the allocation that minimises total absolute error when all packages are exhausted.

For large inputs where the DFS search space becomes intractable, Fetta switches to a **greedy-with-swaps fallback**: assign packages greedily, then perform pairwise swaps between recipients until no swap improves the total error. The strategy used is reported transparently in the results summary.

Both algorithms run entirely in the browser — no server, no API, no data leaves the device.

## The Stack

Building Fetta was an opportunity to work with the very latest tooling:

- **Next.js 16** with the App Router and full static generation (`output: export`)
- **TypeScript** throughout, with strict mode enabled
- **Tailwind CSS v4** — the new engine is noticeably faster and the `@theme` configuration syntax is a pleasure to work with
- **shadcn/ui** built on `@base-ui/react` for accessible, headless UI primitives
- **react-hook-form** with **Zod** schemas for type-safe form validation
- **next-themes** for dark / light / system preference support

The form layer deserves special mention. The input model — packages (weight × quantity pairs) and recipients (name + relative proportion) — is dynamic: rows are added and removed at runtime. Getting react-hook-form's field array API to cooperate with Zod's discriminated union validation took some patience, but the result is a form that validates correctly at every step without a single `any` cast.

## Internationalisation from Day One

Fetta supports Italian and English out of the box, switchable at runtime without a page reload. The translation architecture mirrors the approach used on this portfolio site: a typed context that reads the user's language preference from `localStorage`, defaulting to English on the server to avoid hydration mismatches.

The Italian locale is the default for local use; the English locale makes the app useful to an international audience discovering it via GitHub or Vercel.

## Deployment

The app is deployed on **Vercel** and available at [fetta.vercel.app](https://fetta.vercel.app). Because the entire solver runs client-side and history is persisted in `localStorage`, the deployment has zero environment variables and zero server infrastructure. It is a pure static application that could be hosted on any CDN.

The source code is available on [GitHub](https://github.com/giovamuge/fetta) under the MIT licence.

## Reflections

Fetta is a small app with a specific purpose, but it forced me to think carefully about algorithm design in a constrained environment, about progressive disclosure in form UX (showing the strategy badge only when the fallback fires), and about the ergonomics of a tool people will use repeatedly — which is why the history panel persists the last 20 calculations with one-click restore.

Sometimes the most satisfying software is the kind that solves one problem completely.

<!-- LANG_IT -->

Ogni volta che un gruppo di amici ordina qualcosa all'ingrosso — olio d'oliva da una cooperativa toscana, chicchi di caffè, salumi — nasce la stessa conversazione: come dividiamo i pacchi equamente? Non puoi tagliare a metà un sacco da 5 kg. Le quantità sono fisse, le proporzioni sono sempre irregolari, e i fogli di calcolo sembrano eccessivi.

Quella frustrazione ha dato vita a **Fetta** — termine italiano per una quota equa di qualcosa di più grande.

## Il Problema è Più Difficile di Quanto Sembri

A prima vista, è un semplice problema di divisione. In pratica, appartiene a una famiglia di problemi di ottimizzazione combinatoria strettamente correlati al bin-packing e al subset-sum, entrambi NP-completi. I pacchi sono indivisibili. Ogni destinatario ha una proporzione obiettivo, non un peso fisso. L'allocazione totale deve usare solo pacchi interi. L'obiettivo è minimizzare la deviazione dalle proporzioni ideali per tutti i destinatari contemporaneamente.

Un approccio greedy ingenuo — assegna il pacco disponibile più grande a chi è più lontano dal suo obiettivo — fallisce rapidamente quando i pacchi rimanenti creano uno squilibrio irrisolvibile. Serve un algoritmo in grado di guardare avanti.

## Un Motore DFS con Fallback Greedy

L'algoritmo centrale di Fetta è una **ricerca depth-first con backtracking**, modellata come un problema di soddisfacimento dei vincoli. Per ogni pacco, il motore prova ad assegnarlo a ciascun destinatario, pota i rami che superano il budget proporzionale e registra l'allocazione che minimizza l'errore assoluto totale quando tutti i pacchi sono esauriti.

Per input grandi in cui lo spazio di ricerca DFS diventa intrattabile, Fetta passa a un **fallback greedy con scambi**: assegna i pacchi in modo greedy, poi effettua scambi a coppie tra destinatari finché nessuno scambio migliora l'errore totale. La strategia usata viene riportata trasparentemente nel riepilogo dei risultati.

Entrambi gli algoritmi girano interamente nel browser — nessun server, nessuna API, nessun dato lascia il dispositivo.

## Lo Stack Tecnologico

La costruzione di Fetta è stata un'opportunità per lavorare con le tecnologie più recenti:

- **Next.js 16** con App Router e generazione statica completa (`output: export`)
- **TypeScript** con strict mode abilitato
- **Tailwind CSS v4** — il nuovo motore è notevolmente più veloce e la sintassi `@theme` è un piacere da usare
- **shadcn/ui** basato su `@base-ui/react` per primitive UI accessibili e headless
- **react-hook-form** con schemi **Zod** per la validazione type-safe dei form

## Internazionalizzazione dal Giorno Uno

Fetta supporta italiano e inglese, commutabili a runtime senza ricaricare la pagina. L'architettura di traduzione rispecchia l'approccio usato su questo sito portfolio: un contesto tipizzato che legge la preferenza linguistica dell'utente da `localStorage`, con default inglese lato server per evitare disallineamenti di idratazione.

## Deployment

L'app è deployata su **Vercel** ed è disponibile su [fetta.vercel.app](https://fetta.vercel.app). Poiché l'intero motore gira lato client e la cronologia è persistita in `localStorage`, il deployment non ha variabili d'ambiente né infrastruttura server. È una pura applicazione statica ospitabile su qualsiasi CDN.

Il codice sorgente è disponibile su [GitHub](https://github.com/giovamuge/fetta) con licenza MIT.

## Riflessioni

Fetta è una piccola app con uno scopo preciso, ma mi ha costretto a riflettere attentamente sulla progettazione degli algoritmi in un ambiente vincolato, sulla progressive disclosure nella UX dei form, e sull'ergonomia di uno strumento che le persone useranno più volte — ecco perché il pannello cronologia persiste le ultime 20 calcoli con ripristino in un clic.

A volte il software più soddisfacente è quello che risolve un problema completamente.

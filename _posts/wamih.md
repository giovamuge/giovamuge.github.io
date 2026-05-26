---
title: "Wamih: Location-Aware Reminders for iOS, Written in Swift"
title_it: "Wamih: Promemoria Basati sulla Posizione per iOS, Scritto in Swift"
excerpt: "An iOS reminder app that fires when you arrive at or leave a specific location — not at a fixed time. Built with Swift, Core Location, and MapKit. The 'h' is silent."
excerpt_it: "Un'app iOS per promemoria che si attivano all'arrivo o alla partenza da un luogo specifico — non a un orario fisso. Realizzata con Swift, Core Location e MapKit. La 'h' è muta."
date: "2022-09-01T10:00:00.000Z"
author:
    name: Giovanni Mugelli
    picture: "/blog/authors/giovamuge.jpeg"
tags:
    - "swift"
    - "ios"
    - "core-location"
    - "mapkit"
    - "mobile"
---

Most reminder apps ask _when_ to remind you. Wamih asks _where_.

The name is a play on the Italian question _"why am I here?"_ — _perché sono qui?_ — abbreviated and respelled. The silent _h_ at the end is intentional: a small, private joke about things that go unnoticed until you pay attention. It also describes the experience of forgetting something important the moment you arrive somewhere.

## The Idea

Geolocation-based reminders are not a new concept — iOS's native Reminders app has supported location triggers since iOS 5. But the native implementation is binary: you set a radius, and the notification fires once when you enter or exit it. Wamih explores a more nuanced model: layered zones, directional awareness (am I approaching or departing?), and smarter deduplication so the same reminder does not fire three times because you circled the block looking for parking.

## Core Location and Region Monitoring

iOS exposes geolocation capabilities through the **Core Location** framework. For Wamih, the relevant API is `CLLocationManager`'s region monitoring, which allows an app to register circular geographic regions and receive callbacks when the device crosses the boundary.

Region monitoring is battery-efficient: iOS uses a combination of GPS, Wi-Fi triangulation, and cell tower data to determine location, switching between them based on accuracy requirements and power state. A well-implemented geofencing app does not drain the battery measurably.

The tricky part is managing the iOS limit of **20 simultaneously monitored regions** per app. Wamih works around this by prioritising the closest regions to the user's current location, dynamically swapping regions in and out of the monitored set as the user moves.

## MapKit for Visualisation

Users need to see their reminder zones on a map. **MapKit** provides the native iOS map component with support for custom annotations (pins) and overlays (the circular geofence areas). Each reminder is represented by a `MKCircle` overlay rendered with a semi-transparent fill, so users can see at a glance how large their trigger zone is and whether zones overlap.

Tapping a zone annotation opens an edit sheet where users can adjust the radius, rename the reminder, set whether it triggers on entry, exit, or both, and choose a notification sound.

## Privacy First

Location data is among the most sensitive personal information an app can access. Wamih requests the minimum necessary permissions: "When In Use" location access for the map view, and "Always" access (with explicit explanation) only if the user adds a reminder, since background region monitoring requires it.

The app stores all reminder data locally on device using Core Data. No reminder, no location, and no usage data leaves the device. The privacy notice is a single, plain-language sentence.

## Swift and Native iOS Development

Building Wamih in **Swift** — Apple's native language for iOS — meant working with the full richness of the platform APIs without any abstraction layer. Compared to cross-platform frameworks, the developer experience for Core Location and MapKit integration was notably smoother: the documentation is excellent, the APIs are cohesive, and the simulator supports simulating location scenarios and region boundary crossings.

The trade-off is that the code runs only on Apple devices. For a location app that benefits from deep OS integration, that trade-off is worth it.

The source code is available on [GitHub](https://github.com/giovamuge/wamih) under the MIT licence.

<!-- LANG_IT -->

La maggior parte delle app per i promemoria chiede _quando_ ricordartelo. Wamih chiede _dove_.

Il nome è un gioco sulla domanda italiana _"perché sono qui?"_ — abbreviata e ridisegnata. La _h_ muta alla fine è intenzionale: una piccola battuta privata sulle cose che passano inosservate finché non si presta attenzione. Descrive anche l'esperienza di dimenticare qualcosa di importante nel momento in cui si arriva da qualche parte.

## L'Idea

I promemoria basati sulla geolocalizzazione non sono un concetto nuovo — l'app nativa Promemoria di iOS supporta i trigger di posizione fin da iOS 5. Ma l'implementazione nativa è binaria: imposti un raggio e la notifica si attiva una volta quando entri o esci. Wamih esplora un modello più sfumato: zone stratificate, consapevolezza direzionale (mi sto avvicinando o allontanando?), e deduplicazione più intelligente affinché lo stesso promemoria non si attivi tre volte perché hai girato l'isolato cercando parcheggio.

## Core Location e Monitoraggio delle Regioni

iOS espone le funzionalità di geolocalizzazione attraverso il framework **Core Location**. Per Wamih, l'API rilevante è il monitoraggio delle regioni di `CLLocationManager`, che permette a un'app di registrare regioni geografiche circolari e ricevere callback quando il dispositivo attraversa il confine.

Il monitoraggio delle regioni è efficiente in termini di batteria: iOS usa una combinazione di GPS, triangolazione Wi-Fi e dati delle torri cellulari per determinare la posizione, alternando tra di essi in base ai requisiti di precisione e allo stato dell'alimentazione.

La parte difficile è gestire il limite iOS di **20 regioni monitorate simultaneamente** per app. Wamih aggira questo problema dando priorità alle regioni più vicine alla posizione attuale dell'utente, scambiando dinamicamente le regioni nel set monitorato man mano che l'utente si sposta.

## MapKit per la Visualizzazione

Gli utenti devono vedere le proprie zone di promemoria su una mappa. **MapKit** fornisce il componente mappa nativo iOS con supporto per annotazioni personalizzate (pin) e overlay (le aree di geofence circolari). Ogni promemoria è rappresentato da un overlay `MKCircle` con un riempimento semi-trasparente, così gli utenti possono vedere a colpo d'occhio quanto è grande la loro zona di trigger e se le zone si sovrappongono.

## Privacy Prima di Tutto

I dati di posizione sono tra le informazioni personali più sensibili che un'app può accedere. Wamih richiede i permessi minimi necessari: accesso "Solo quando in uso" per la visualizzazione della mappa, e accesso "Sempre" (con spiegazione esplicita) solo se l'utente aggiunge un promemoria, poiché il monitoraggio delle regioni in background lo richiede.

L'app memorizza tutti i dati dei promemoria localmente sul dispositivo usando Core Data. Nessun promemoria, nessuna posizione e nessun dato di utilizzo lascia il dispositivo.

Il codice sorgente è disponibile su [GitHub](https://github.com/giovamuge/wamih) con licenza MIT.

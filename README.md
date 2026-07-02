# Profolio

The personal portfolio of **Abdullah Sayed** — AI Engineer, Dallas–Fort Worth, TX.
A static site (hand-written HTML/CSS + a touch of vanilla JS) covering selected work,
an engineering through-line, and off-duty wildlife photography.

> A visual tour of every page follows. Screenshots are full-page captures rendered at
> 1280px wide (2× DPI) and live in [`assets/screenshots/`](assets/screenshots).

---

## Home — `index.html`

Hero, selected work (5 project cards with inline SVG diagrams), the "one continuous
stack" through-line map, range/timeline, and contact.

[![Home page](assets/screenshots/home.png)](index.html)


---

## Projects

### HIVE — `projects/hive.html`
A self-hosted AI second brain: a private, cited RAG assistant for HoneyBridge.

[![HIVE case study](assets/screenshots/hive.png)](projects/hive.html)

### Code-Atlas — `projects/code-atlas.html`
An intelligent codebase visualizer — semantic zoom from architecture to statements.

[![Code-Atlas case study](assets/screenshots/code-atlas.png)](projects/code-atlas.html)

### TrackRecord — `projects/trackrecord.html`
An agentic web-intelligence platform: plan → collect → analyze → synthesize.

[![TrackRecord case study](assets/screenshots/trackrecord.png)](projects/trackrecord.html)

### OCI Cluster Evaluation — `projects/oci-cluster-evaluation.html`
A GPU cluster validation toolkit held to SemiAnalysis' ClusterMAX 2.0 criteria.

[![OCI Cluster Evaluation case study](assets/screenshots/oci-cluster-evaluation.png)](projects/oci-cluster-evaluation.html)

### DDP Training — `projects/ddp-training.html`
16-GPU distributed PyTorch DDP training on Kubernetes (2 nodes × 8 NVIDIA B200s).

[![DDP Training case study](assets/screenshots/ddp-training.png)](projects/ddp-training.html)

---

## Structure

```
Profolio/
├── index.html              # Home
├── photography.html        # Wildlife collection
├── styles.css              # Shared styles
├── main.js                 # Reveal-on-scroll + niceties
├── projects/               # Five case-study pages
│   ├── hive.html
│   ├── code-atlas.html
│   ├── trackrecord.html
│   ├── oci-cluster-evaluation.html
│   └── ddp-training.html
├── photos/                 # Drop photography exports here (see photos/README.md)
└── assets/screenshots/     # Page screenshots used in this README
```

## Running locally

No build step. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Regenerating the screenshots

The captures were produced with Playwright (Chromium, full-page, 2× DPI). Re-run after
any visual change so this README stays current.

---


## Photography — `photography.html`

Wildlife collection — a grid of multi-frame Instagram posts with species titles and
field notes. 

---

© 2026 Abdullah Sayed · [github.com/abdullahasayed](https://github.com/abdullahasayed)

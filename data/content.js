// Central content source for the site. Edit this file to update the page —
// index.html and js/main.js render everything from the SITE object below.
// No build step: just save and refresh.

const SITE = {
  profile: {
    name: "Alessio Martini",
    tagline: "Theoretical & Mathematical Physics — Master's Student",
    location: "University of Amsterdam (ITFA)",
    photo: "foto_alessio.jpg",
    cv: "pdfs/CV.pdf",
    intro: "Bridging quantum field theory and geometric physics with the quantitative study of complex social systems.",
  },

  bio: {
    paragraphs: [
      "<p>Hello! My name is Alessio Martini. I am a Master&rsquo;s student in Theoretical Physics at the University of Amsterdam (ITFA), after completing my Bachelor&rsquo;s degree in Physics at the University of Milano-Bicocca.</p>",
      "<p>My academic path has been shaped by a strong interest in geometric and structural approaches to physics. During my Bachelor&rsquo;s and Master&rsquo;s I focused on quantum field theory, string theory, differential geometry, and topology in physics, culminating in a Master&rsquo;s thesis on generalized symmetries and modern symmetry structures in quantum field theory and gravity. This training has given me a rigorous background in abstract modelling, mathematical methods, and conceptual aspects of quantum theory.</p>",
      "<p>In parallel, I have always been deeply interested in social and political questions: how collective behaviour emerges, how institutions shape individual choices, and how crises and inequalities propagate through societies. Over time, this has led me to look for ways to connect my theoretical and computational skills with the quantitative study of social phenomena.</p>",
      "<p>My main interest is now in socio-physics and the quantitative modelling of complex social systems. I am particularly drawn to questions such as:</p>",
      "<ul><li>How attitudes, beliefs, and perceptions spread on social and institutional networks;</li><li>How feedback between individual behaviour and social structure can generate tipping dynamics and phase transitions in collective outcomes;</li><li>How tools from statistical physics, dynamical systems, and information theory can be adapted to study phenomena like distrust, polarization, cooperation, and governance under stress.</li></ul>",
      "<p>I am interested in building and analysing models that remain structurally grounded&mdash;using geometric, field-theoretic, and complex-systems perspectives&mdash;while being empirically informed and relevant to real-world social and political issues.</p>",
      "<p>More broadly, I see my work as an attempt to bridge rigorous theoretical physics with socially oriented research, contributing quantitative tools and structural insight to the understanding of contemporary social challenges.</p>",
    ],
  },

  cvs: [
    {
      title: "General CV",
      description: "Comprehensive overview of education, experience, and skills.",
      href: "pdfs/CV.pdf",
    },
    {
      title: "Quant Research CV",
      description: "Tailored CV for quantitative research and finance applications.",
      href: "pdfs/CV_QuantResearch.pdf",
    },
    {
      title: "Europass CV",
      description: "Official Europass e-Portfolio profile, kept up to date online.",
      href: "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/alessio-martini/975572a7-4607-4c3d-a6b0-5efd54024fad?view=html",
      linkText: "View Online",
    },
  ],

  education: [
    {
      group: "Master's Seminars",
      place: "University of Amsterdam",
      years: "2024–",
      items: [
        "Asymptotic symmetries, Soft Theorems, and Memory Effects: The Infrared Triangle — Mitra Prahar",
        "Introduction to higher form symmetries and their applications — Nabil Iqbal",
        "Quantum Mechanics in the everyday world — J. van Wezel",
      ],
    },
    {
      group: "Master's Courses",
      place: "University of Amsterdam",
      years: "2024–",
      items: [
        "<strong>Master's Thesis</strong> — Non-invertible Symmetries in QFT and Gravity (<a href=\"https://github.com/alessiomartini/msc-thesis-non-invertible-symmetries\" target=\"_blank\" rel=\"noopener noreferrer\">repo</a>)",
        "Generalised Symmetries in QFT and Gravity — Nabil Iqbal (Jena TPI School on QFT & Holography)",
        "Exploring artificial intelligence for (quantum) physics (Adv. Topics in Theo. Phys.) — <a href=\"https://www.linkedin.com/in/evert-van-nieuwenburg/\" target=\"_blank\" rel=\"noopener noreferrer\">Evert van Nieuwenburg</a> (<a href=\"https://www.drstp.nl/events/advanced-topics-in-theoretical-physics-autumn-2025/\" target=\"_blank\" rel=\"noopener noreferrer\">course page</a>, <a href=\"https://github.com/everthemore/ATTP-2025\" target=\"_blank\" rel=\"noopener noreferrer\">materials</a>)",
        "Topological Order and Quantum Information (Adv. Topics in Theo. Phys.) — <a href=\"https://www.linkedin.com/in/kareljan-schoutens-39b30849/\" target=\"_blank\" rel=\"noopener noreferrer\">Kareljan Schoutens</a> (<a href=\"https://www.drstp.nl/events/advanced-topics-in-theoretical-physics-autumn-2025/\" target=\"_blank\" rel=\"noopener noreferrer\">course page</a>)",
        "Lattice Gauge Theory (Adv. Topics in Theo. Phys.) — <a href=\"https://jvanwezel.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Jasper van Wezel</a> (<a href=\"https://www.drstp.nl/events/advanced-topics-in-theoretical-physics/\" target=\"_blank\" rel=\"noopener noreferrer\">course page</a>)",
        "Condensed Matter Theory Advanced — Vladimir Gritsev",
        "String Theory I & II — Lorenz Eberhardt",
        "Topology in Physics — Marcel Vonk, Hessel Posthuma",
        "Hydrodynamics — Mazi Jalaal, Pedro Cosme",
        "Quantum Field Theory III & Advanced — Andrea Puhm",
        "Quantum Field Theory I & II — Diego Hofman",
        "Non-equilibrium Statistical Physics — Edan Lerner",
        "Algebraic Topology 1 — Inbar Klang, Lennart Meier (Mastermath)",
        "Differential Geometry — Marius Crainic (Mastermath)",
        "Categories and Modules — Bas Edixhoven, David Holmes, Rob de Jeu, Arno Kret, Steffen Sagave (Mastermath)",
      ],
    },
    {
      group: "In Between",
      place: "Wien / UniMiB",
      years: "2024",
      items: [
        "Geometrical Anatomy of Theoretical Physics — Frederic Schuller (Wien)",
        "General Relativity — Frederic Schuller (Wien)",
        "Fisica Teorica 1 — Alberto Zaffaroni (UniMiB)",
        "Quantum Information Theory & Computing — Alberto Zaffaroni (UniMiB)",
      ],
    },
    {
      group: "Bachelor's Courses — Third Year",
      place: "University of Milano-Bicocca",
      years: "2021–2024",
      items: [
        "<strong>Bachelor's Thesis</strong> — Anomalies in Quantum Mechanics (<a href=\"https://github.com/alessiomartini/bsc-thesis-scale-anomaly-in-qm\" target=\"_blank\" rel=\"noopener noreferrer\">repo</a>)",
        "Quantum Mechanics — Carlo Oleari",
        "Special Relativity — Emanuele Re",
        "Nuclear and Subnuclear Physics — Francesco Terranova, Luca Gironi",
        "Structure of Matter — Francesco Montalenti",
        "Geometry 3 — Alberto Della Vedova",
        "Computational Physics — Michele Pepe (<a href=\"https://elearning.unimib.it/course/view.php?id=42985\" target=\"_blank\" rel=\"noopener noreferrer\">course page</a>)",
      ],
    },
    {
      group: "Bachelor's Courses — Second Year",
      place: "University of Milano-Bicocca",
      years: "2021–2024",
      items: [
        "Classical Mechanics — Giampaolo Cristadoro",
        "Electromagnetism — Tommaso Tabarelli de Fatis",
        "Mathematical Methods for Physics — Silvia Penati (<a href=\"https://elearning.unimib.it/course/info.php?id=29588#en\" target=\"_blank\" rel=\"noopener noreferrer\">course page</a>)",
        "Geometry 1 — Alberto Della Vedova",
        "Physics Laboratory 2 — Pietro Govoni (<a href=\"https://elearning.unimib.it/course/view.php?id=36328\" target=\"_blank\" rel=\"noopener noreferrer\">course page</a>)",
      ],
    },
    {
      group: "Bachelor's Courses — First Year",
      place: "University of Milano-Bicocca",
      years: "2021–2024",
      items: [
        "Mathematical Analysis 1 — Simone Secchi",
        "Linear Algebra and Geometry — Sonia Brivio",
        "Physics Laboratory 1 — Claudia Riccardi (<a href=\"https://elearning.unimib.it/course/info.php?id=32534#en\" target=\"_blank\" rel=\"noopener noreferrer\">course page</a>)",
        "Laboratory of Computer Science — Federico Nati (<a href=\"https://elearning.unimib.it/course/info.php?id=29579#en\" target=\"_blank\" rel=\"noopener noreferrer\">course page</a>)",
      ],
    },
    {
      group: "High School Courses",
      place: "ITIS Greppi",
      years: "2015–2021",
      items: [
        "Introduction to Cryptography — Andrea Previtali (Math Professor at Univ. of Milano-Bicocca)",
        "Sistemi e Reti — Vincenzo Villa",
        "Telecomunicazioni — Calogero Cancellieri",
        "Theory of Coding — Samuele Redaelli",
        "History and Italian Literature — Paola Fumagalli",
      ],
    },
  ],

  teaching: {
    assistant: [
      { role: "Teacher Assistant", course: "Quantum Field Theory I & II", person: "Diego Hofman", place: "University of Amsterdam", year: "2025" },
      { role: "Teacher Assistant", course: "Electrodynamics", person: "Kareljan Schoutens", place: "University of Amsterdam", year: "2025" },
    ],
    note: "Not teaching independently yet — stay tuned.",
  },

  projects: [
    {
      category: "Finance",
      items: [
        {
          name: "Markets from First Principles",
          description: "A single-author learning site that teaches finance and economics to someone who already thinks like a theoretical physicist. Eight tracks, 51 pages, one concept per page.",
          type: "Website",
          href: "https://alessiomartini.github.io/markets-first-principles/",
          repo: "https://github.com/alessiomartini/markets-first-principles",
          status: "In progress",
        },
        {
          name: "Wikipedia Attention & ETF Volatility",
          description: "A quantitative research prototype asking whether a spike in public attention (Wikipedia pageviews) to a company predicts the next day's realized volatility on a related ETF — with lagged features and walk-forward validation to avoid fooling itself.",
          type: "Research",
          repo: "https://github.com/alessiomartini/wikipedia-attention-etf-volatility",
        },
      ],
    },
    {
      category: "Maps & Data",
      items: [
        {
          name: "Geopolitics Atlas",
          description: "A personal reference site on ongoing conflicts, with an interactive world map — historical context, verified facts, and contested narratives, each with cited sources.",
          type: "Website",
          href: "https://alessiomartini.github.io/geopolitics-atlas/",
          repo: "https://github.com/alessiomartini/geopolitics-atlas",
        },
        {
          name: "Mountain Huts Map",
          description: "A map of alpine huts and bivouacs, starting from the Italian Alps and the Bergen (Norway) area, built so new regions are a one-line config change rather than a refactor.",
          type: "Website",
          href: "https://mountain-huts-map.alemarti-2001.workers.dev/",
          repo: "https://github.com/alessiomartini/mountain-huts-map",
          status: "In progress",
        },
        {
          name: "Eating Amsterdam",
          description: "A collaborative map of places to eat well and cheap in and around Amsterdam — snack bars, döner, falafel, budget restaurants — with filters for price, rating, cuisine, and vegetarian/vegan options.",
          type: "Website",
          href: "https://alessiomartini.github.io/eating-amsterdam/",
          repo: "https://github.com/alessiomartini/eating-amsterdam",
        },
        {
          name: "Amsterdam Events",
          description: "Aggregates events happening in Amsterdam — jazz & live music, free museum entry, demonstrations, clubbing — from multiple source websites into one filterable static site.",
          type: "Website",
          href: "https://alessiomartini.github.io/amsterdam-events/",
          repo: "https://github.com/alessiomartini/amsterdam-events",
        },
        {
          name: "The Real-Time Earth",
          description: "A modular catalog of live global data feeds, shown unmodified — no interpolation, no placeholders, gaps shown as gaps.",
          type: "Website",
          href: "https://realtime-earth.alemarti-2001.workers.dev",
          repo: "https://github.com/alessiomartini/realtime-earth",
          status: "In progress",
        },
      ],
    },
    {
      category: "Useful Apps",
      items: [
        {
          name: "Pantry",
          description: "Native Android app for managing groceries, pantry inventory, product expiration dates, and recipe ideas generated from what you have available.",
          type: "App",
          repo: "https://github.com/alessiomartini/grocery-list",
        },
        {
          name: "Health Log",
          description: "A private, password-protected personal health tracker: weight, blood pressure, symptoms, medical visits, blood tests, and an AI assistant for symptom triage. Built to be self-hosted on a private network, not exposed publicly — shown here as a portfolio piece, source only.",
          type: "Website",
          repo: "https://github.com/alessiomartini/personal-healthcare",
        },
        {
          name: "EngVocab",
          description: "Superseded by Anki once it became clear this project was reinventing Anki's spaced repetition and note types — vocabulary now lives there day to day. Kept as a reference/prototype for language-learning ideas Anki doesn't cover.",
          type: "App",
          repo: "https://github.com/alessiomartini/flash-cards-app",
          status: "Outdated",
        },
      ],
    },
    {
      category: "Music",
      items: [
        {
          name: "Song Library",
          description: "Personal song library in lead-sheet form with melody, chord symbols, lyrics, transposition, vocal range, and Spotify/YouTube links.",
          type: "Website",
          href: "https://alessiomartini.github.io/music-library/",
          repo: "https://github.com/alessiomartini/music-library",
        },
        {
          name: "Harmonic Ear Training",
          description: "On hold: two existing apps, MyEarTraining and Functional Ear Trainer, already cover harmonic ear training well, so building a third has little point. Kept as a reference implementation in case a specific gap shows up later.",
          type: "Website",
          href: "https://alessiomartini.github.io/ear-training/",
          repo: "https://github.com/alessiomartini/ear-training",
          status: "Outdated",
        },
      ],
    },
  ],

  resources: {
    educators: [
      { name: "Frederic Schuller", href: "https://people.utwente.nl/f.p.schuller?tab=education" },
      { name: "David Skinner", href: "https://www.damtp.cam.ac.uk/user/dbs26/teaching.html" },
      { name: "Tobias Osborne", href: "https://www.youtube.com/channel/UCpHjg_Qmzxm3xaAWRrwQPCA" },
      { name: "John McGreevy", href: "https://mcgreevy.physics.ucsd.edu/" },
      { name: "David Tong", href: "https://www.damtp.cam.ac.uk/user/tong/teaching.html" },
      { name: "Mehran Kardar", href: "https://www.mit.edu/~kardar/teaching/index.html" },
      { name: "EigenChris", href: "https://www.youtube.com/@eigenchris" },
      { name: "Alberto Zaffaroni", href: "https://virgilio.mib.infn.it/~zaffaron/" },
      { name: "Luca Delacrétaz", href: "https://scholar.google.com/citations?user=1E8Z9iYAAAAJ&hl=en" },
      { name: "Shu-Heng Shao", href: "https://scholar.google.com/citations?user=U9it6rEAAAAJ&hl=en" },
      { name: "Sakura Schäfer-Nameki", href: "https://scholar.google.com/citations?user=uOuzik8AAAAJ&hl=en" },
    ],
  },

  contacts: [
    { label: "Email", value: "alemarti.2001@gmail.com", href: "mailto:alemarti.2001@gmail.com?subject=%5BWEBSITE%20CONTACT%5D", icon: "mail" },
    { label: "GitHub", value: "github.com/alessiomartini", href: "https://github.com/alessiomartini", icon: "github" },
    { label: "LinkedIn", value: "linkedin.com/in/alessio-martini", href: "https://www.linkedin.com/in/alessio-martini-a329181b4/", icon: "linkedin" },
    { label: "Stack Overflow", value: "stackoverflow.com/users/32032937/alessio", href: "https://stackoverflow.com/users/32032937/alessio", icon: "stackoverflow" },
    { label: "SoloLearn", value: "sololearn.com/en/profile/8992711", href: "https://www.sololearn.com/en/profile/8992711", icon: "code" },
  ],

  elsewhere: [
    {
      title: "Extra Things I Did",
      description: "Sports, music, builds, hacks, hikes and other adventures outside physics.",
      href: "extra-things.html",
      linkText: "Explore",
    },
    {
      title: "Daniele Martini",
      description: "My brother — transportation engineer and business consultant, now running his own consulting startup.",
      href: "https://www.danielemartini.eu/",
      linkText: "Visit site",
      external: true,
    },
  ],

  extraThings: {
    sports: [
      "Krav Maga — KMA Milano Cimiano (Simone di Lello)",
      "Kungfu — Accademia Arti Marziali Biassono",
      {
        text: "Artistic Gymnastics — Oratorio Bernate, Palaunimec Arcore, Milano Gym Lab",
        note: "My first (failed) back twist",
        noteHref: "https://photos.app.goo.gl/M572xp32oTgCxtEJ9",
        noteLinkText: "Video",
      },
      "Breakdance — Arte e Spettacolo Lesmo",
      "Basketball — ProLoco Arcore, Ausonia Oreno",
      "Equestrian vaulting — ??? Villasanta",
      "Juggling — self-taught",
    ],
    music: [
      "Cello (I don't remember anymore how to play it)",
      "Piano",
      "Clarinet",
      "Guitar (self-taught)",
      "Trumpet (very bad player but self-taught)",
      "Voice — Singing (took a few lessons)",
    ],
    projects: [
      {
        title: "Opel Corsa 2006",
        items: ["Replacement of the timing chain on my Opel Corsa 2006, plus deep customization"],
      },
      {
        title: "Handstands all around",
        items: [],
        note: "Photos coming soon — handstands from various trips, with date and location.",
      },
      {
        title: "Bivouacs",
        items: [
          "Walter e Chiara",
          { text: "Bivacco Zeb", href: "https://photos.app.goo.gl/L6UrkwAq6U2edpKY8" },
          { text: "Bivacco del Piero — Monte Confinale", href: "https://photos.app.goo.gl/Eq5rht6sez8xmucs7" },
          { text: "Military-based 1-night hike (Simone di Lello)", href: "https://photos.app.goo.gl/1FpmxvmkCKjj8RZh7" },
          "2 hikes of 1 night in the Dolomites with gymnastics friends",
        ],
      },
      {
        title: "???",
        items: [{ text: "Copenhagen Downtown hostel volunteering (Morten)", href: "https://photos.app.goo.gl/91Qh7HEg5husxhsA9" }],
      },
      { title: "Guitar", description: "Fixing my new classical-gipsy guitar bridge, which was detaching." },
      { title: "Shelf", description: "Built a customized shelf of copper and wood for S******'s mum." },
      { title: "TV", description: "Rudimentary TV-hanging system." },
      { title: "Drink dispenser", description: "Built with S****** an automatic dispenser for soft drinks." },
      { title: "Bike", description: "Built (assembled) a fixie / single-speed bike." },
      { title: "Motorbike", description: "Fixing my first motorbike, a Honda CBF125, after my first accident." },
      { title: "Music LED", description: "LED system that turned on following the music (using a mic and a transistor)." },
      { title: "Swimming Pool", description: "Repaired S******'s pool's electrical filtering system (digging 1m deep for 5–10 meters)." },
      {
        title: "Proxy Hacking",
        description:
          "Hacked my high school's proxy firewall by redirecting internet traffic through HTTP port 22 via a personal proxy at home, built with a Raspberry Pi (the school used a proxy instead of a firewall, leaving us a way to do it — without telling us).",
      },
      { title: "RFID", description: "RFID-based system for the self-organized week at high school, from assembly to HTML/PHP to Python (3rd year of high school)." },
      { title: "Domotic House", description: "Miniature of a domotic house, as a school project (4th year of high school)." },
      { title: "Piano Tuning", description: "Failed piano tuning at my grandparents' place." },
      { title: "Wine", description: "Wine-making at my grandparents' place." },
      { title: "IPhone", description: "Failed replacement of S***'s iPhone battery/screen (I don't remember which one)." },
      { title: "Desk", description: "Building my own desk at a cost of €0." },
      {
        title: "Wardrobe",
        description: "Team effort: moving a wardrobe at high school.",
        note: "proof",
        noteHref: "https://photos.app.goo.gl/dTbDUr6nNFxTZ6BW9",
      },
      { title: "Plants", description: "Hanging plant system: the Vertical Forest of Amsterdam." },
      { title: "Bathroom", description: "I demolished my dad's upstairs bathroom (intending to renovate it), and he had to repair it afterwards." },
      { title: "Headset", description: "Replaced the battery (3.7V, 300mAh) in my Sony WH-CH510." },
    ],
    adventures: [
      { title: "Dishwasher", description: "Walked from Amsterdam, above Artis Zoo, to Diemen with a trolley found on the street, carrying a mini dishwasher." },
      { title: "Bakfiets", description: "Bakfiets (cargo bike) in the Rotterdam suburbs, with a Volkswagen electric car." },
      { title: "BATA vieren race", description: "Ran almost 8k around midnight in Germany, as a participant with the STAH-Saturnus gymnastics association." },
      { title: "Zaandvort", description: "By bike to Zandvoort with UvA friends — only V*****, C***** and S**** made it back the same way (very fast)." },
      { title: "BeOne Bike", description: "Went by bike to a small village between Haarlem and Leiden to buy a race bike for €60, then biked with two bikes to Haarlem for lunch at N****'s place with UvA friends." },
      { title: "KMA Cimiano to Arcore", description: "Walked and biked from Sesto San Giovanni to Arcore in the middle of the night." },
    ],
  },
};

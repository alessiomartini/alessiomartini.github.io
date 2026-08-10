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
    cvExternal: "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/alessio-martini/975572a7-4607-4c3d-a6b0-5efd54024fad?view=html",
    intro: "Bridging quantum field theory and geometric physics with the quantitative study of complex social systems.",
  },

  bio: {
    paragraphs: [
      "Hello! My name is Alessio Martini. I am a Master&rsquo;s student in Theoretical Physics at the University of Amsterdam (ITFA), after completing my Bachelor&rsquo;s degree in Physics at the University of Milano-Bicocca.",
      "My academic path has been shaped by a strong interest in geometric and structural approaches to physics. During my Bachelor&rsquo;s and Master&rsquo;s I focused on quantum field theory, string theory, differential geometry, and topology in physics, culminating in a Master&rsquo;s thesis on generalized symmetries and modern symmetry structures in quantum field theory and gravity. This training has given me a rigorous background in abstract modelling, mathematical methods, and conceptual aspects of quantum theory.",
      "In parallel, I have always been deeply interested in social and political questions: how collective behaviour emerges, how institutions shape individual choices, and how crises and inequalities propagate through societies. Over time, this has led me to look for ways to connect my theoretical and computational skills with the quantitative study of social phenomena.",
    ],
  },

  research: {
    intro: "My main interest is now in socio-physics and the quantitative modelling of complex social systems. I am particularly drawn to questions such as:",
    bullets: [
      "How attitudes, beliefs, and perceptions spread on social and institutional networks;",
      "How feedback between individual behaviour and social structure can generate tipping dynamics and phase transitions in collective outcomes;",
      "How tools from statistical physics, dynamical systems, and information theory can be adapted to study phenomena like distrust, polarization, cooperation, and governance under stress.",
    ],
    outro: [
      "I am interested in building and analysing models that remain structurally grounded&mdash;using geometric, field-theoretic, and complex-systems perspectives&mdash;while being empirically informed and relevant to real-world social and political issues.",
      "More broadly, I see my work as an attempt to bridge rigorous theoretical physics with socially oriented research, contributing quantitative tools and structural insight to the understanding of contemporary social challenges.",
    ],
  },

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
        "Generalised Symmetries in QFT and Gravity — Nabil Iqbal (Jena TPI School on QFT & Holography)",
        "Exploring artificial intelligence for (quantum) physics (Adv. Topics in Theo. Phys.) — Evert van Nieuwenburg",
        "Topological Order and Quantum Information (Adv. Topics in Theo. Phys.) — Kareljan Schoutens",
        "Lattice Gauge Theory (Adv. Topics in Theo. Phys.) — Jasper van Wezel",
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
        "Quantum Mechanics — Carlo Oleari",
        "Special Relativity — Emanuele Re",
        "Nuclear and Subnuclear Physics — Francesco Terranova, Luca Gironi",
        "Structure of Matter — Francesco Montalenti",
        "Geometry 3 — Alberto Della Vedova",
        "Computational Physics — Michele Pepe",
      ],
    },
    {
      group: "Bachelor's Courses — Second Year",
      place: "University of Milano-Bicocca",
      years: "2021–2024",
      items: [
        "Classical Mechanics — Giampaolo Cristadoro",
        "Electromagnetism — Tommaso Tabarelli de Fatis",
        "Mathematical Methods for Physics — Silvia Penati",
        "Geometry 1 — Alberto Della Vedova",
        "Physics Laboratory 2 — Pietro Govoni",
      ],
    },
    {
      group: "Bachelor's Courses — First Year",
      place: "University of Milano-Bicocca",
      years: "2021–2024",
      items: [
        "Mathematical Analysis 1 — Simone Secchi",
        "Linear Algebra and Geometry — Sonia Brivio",
        "Physics Laboratory 1 — Claudia Riccardi",
        "Laboratory of Computer Science — Federico Nati",
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

  publications: {
    intro: "Currently, I am working on research projects and preparing manuscripts. Check back soon for updates on my publications!",
    items: [
      { title: "Preliminary notes of Master's Thesis", href: "https://www.overleaf.com/read/rnkjkvqzdtxq#2dc6ca", external: true },
      { title: "Bachelor's Thesis — Anomalies in Quantum Mechanics", href: "pdfs/Tesi_Martini_867624_v3.pdf", external: true },
    ],
  },

  projects: [
    {
      name: "Geopolitics Atlas",
      description: "A personal reference map of ongoing conflicts — historical context, verified facts, and contested narratives, with sources.",
      href: "https://alessiomartini.github.io/geopolitics-atlas/",
      repo: "https://github.com/alessiomartini/geopolitics-atlas",
    },
  ],

  resources: {
    lectureNotes: [
      { title: "Quantum Field Theory", author: "David Tong" },
      { title: "String Theory", author: "David Tong" },
      { title: "Advanced QFT", author: "David Skinner" },
      { title: "Supersymmetry", author: "David Skinner" },
      { title: "QFT I, II & III", author: "John McGreevy" },
    ],
    articles: [
      { title: "Quantum mechanics of the $\\frac{1}{x^2}$ potential", author: "Andrew M. Essin, David J. Griffiths" },
      { title: "Generalized Symmetries", author: "Gaiotto, Kapustin, Seiberg, et al." },
    ],
    educators: [
      { name: "Frederic Schuller", href: "https://people.utwente.nl/f.p.schuller?tab=education" },
      { name: "David Skinner", href: "https://www.damtp.cam.ac.uk/user/dbs26/teaching.html" },
      { name: "Tobias Osborne", href: "https://www.youtube.com/channel/UCpHjg_Qmzxm3xaAWRrwQPCA" },
      { name: "John McGreevy", href: "https://mcgreevy.physics.ucsd.edu/" },
      { name: "David Tong", href: "https://www.damtp.cam.ac.uk/user/tong/teaching.html" },
      { name: "Mehran Kardar", href: "https://www.mit.edu/~kardar/teaching/index.html" },
      { name: "EigenChris", href: "https://www.youtube.com/@eigenchris" },
      { name: "Alberto Zaffaroni", href: "https://virgilio.mib.infn.it/~zaffaron/" },
    ],
  },

  contacts: [
    { label: "Email", value: "alemarti.2001@gmail.com", href: "mailto:alemarti.2001@gmail.com", icon: "mail" },
    { label: "GitHub", value: "github.com/alessiomartini", href: "https://github.com/alessiomartini", icon: "github" },
    { label: "Stack Overflow", value: "stackoverflow.com/users/32032937/alessio", href: "https://stackoverflow.com/users/32032937/alessio", icon: "stackoverflow" },
    { label: "SoloLearn", value: "sololearn.com/en/profile/8992711", href: "https://www.sololearn.com/en/profile/8992711", icon: "code" },
  ],
};

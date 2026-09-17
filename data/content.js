// Central content source for the site. Edit this file to update the page —
// index.html and js/main.js render everything from the SITE object below.
// No build step: just save and refresh.

const SITE = {
  profile: {
    name: "Alessio Martini",
    tagline: "Theoretical & Mathematical Physics — MSc",
    location: "University of Amsterdam (ITFA)",
    photo: "foto_alessio.jpg",
    cv: "pdfs/CV.pdf",
    intro: "Bridging quantum field theory and geometric physics with the quantitative study of complex social systems.",
  },

  // Detail pages for individual courses, rendered by course.html?id=<slug>.
  // Linked to from the matching entry in `education` below.
  courses: {
    "exploring-ai-for-q-physics": {
      title: "Exploring AI for (Q) physics",
      subtitle: "Exploring artificial intelligence for (quantum) physics",
      professor: "Evert van Nieuwenburg",
      professorHref: "https://www.linkedin.com/in/evert-van-nieuwenburg/",
      meta: "Adv. Topics in Theoretical Physics — DRSTP",
      links: [
        { label: "DRSTP course page", href: "https://www.drstp.nl/events/advanced-topics-in-theoretical-physics-autumn-2025/" },
        { label: "Materials (GitHub)", href: "https://github.com/everthemore/ATTP-2025" },
      ],
      sections: [
        {
          heading: "Abstract",
          body: "<p>As the complexity of (quantum) experiments grows, control methods that tune, optimize and design those experiments have to keep up. When full characterisation is no longer possible, machine learning methods may be able to extract control schemes from data. In this set of lectures we will explore several machine learning techniques and optimisation algorithms in their application to physics. We will also touch upon the topic of quantum games, both from a theoretical point of view and for their use as a playground for developing quantum machine learning models and AI agents.</p>",
        },
        {
          heading: "When & where",
          body: "<p>October–November 2025, at Leiden University.</p>",
        },
      ],
    },
    "topological-order-and-quantum-information": {
      title: "Topological Order and Quantum Information",
      professor: "Kareljan Schoutens",
      professorHref: "https://www.linkedin.com/in/kareljan-schoutens-39b30849/",
      meta: "Adv. Topics in Theoretical Physics — DRSTP",
      links: [{ label: "DRSTP course page", href: "https://www.drstp.nl/events/advanced-topics-in-theoretical-physics-autumn-2025/" }],
      sections: [
        {
          heading: "Abstract",
          body: "<p>Two-dimensional quantum systems with topological order are characterized by ground state degeneracies and anyonic excitations. The local indistinguishability of degenerate states makes them ideal candidates for storing quantum information. This course gives a detailed account of topological order in (fractional and non-abelian) quantum Hall systems and in lattice models (toric code and quantum double models), elucidating connections with Quantum Error Correction (QEC), Quantum Memory and schemes for Topological Quantum Computing (TQC).</p>",
        },
        {
          heading: "When & where",
          body: "<p>September–October 2025, at the University of Amsterdam.</p>",
        },
        {
          heading: "Prerequisites",
          body: "<p>It will be helpful if students have seen elements of quantum many-body theory, conformal field theory and mathematical structures such as fusion and braiding categories — but this prior knowledge is not required.</p>",
        },
      ],
    },
    "lattice-gauge-theory": {
      title: "Lattice Gauge Theory",
      subtitle: "Symmetry, duality, and topology in lattice gauge theories",
      professor: "Jasper van Wezel",
      professorHref: "https://jvanwezel.com/",
      meta: "Adv. Topics in Theoretical Physics — DRSTP",
      links: [{ label: "DRSTP course page", href: "https://www.drstp.nl/events/advanced-topics-in-theoretical-physics/" }],
      sections: [
        {
          heading: "Abstract",
          body: "<p>Lattice gauge theories are prevalent both in high and low energy physics, either as discrete approximations to a continuous field theory, or as a direct implementation of lattice models. Besides their inherent interest, they also provide a particularly nice background for illustrating the correspondence between quantum dynamics and classical equilibrium descriptions, the presence or absence of symmetry-breaking phase transitions, the use of duality transformations, and the role of topological defects in mediating phase transitions.</p><p>In this lecture series, we follow one of the classic texts on lattice gauge theory and discover how all these aspects emerge from very simple building blocks, starting from the famous Kramers–Wannier duality in the Ising model and, time permitting, ending up with accessible lattice descriptions of confinement and the Kosterlitz–Thouless phase transition.</p>",
        },
        {
          heading: "When & where",
          body: "<p>February–March 2025, at the University of Amsterdam.</p>",
        },
        {
          heading: "Recommended prior knowledge",
          body: "<ul><li><strong>Necessary</strong> — working knowledge of basic Quantum Field Theory.</li><li><strong>Useful</strong> — some familiarity with spin systems in condensed matter theory.</li></ul>",
        },
      ],
    },
    "computational-physics-lab": {
      title: "Computational Physics Lab",
      professor: "Michele Pepe",
      professorHref: "https://inspirehep.net/authors/993845",
      meta: "University of Milano-Bicocca",
      links: [{ label: "e-learning course page", href: "https://elearning.unimib.it/course/view.php?id=42985" }],
      sections: [
        { heading: "Aims", body: "<p>Learning the basis of numerical calculus and how to solve scientific problems with a computer.</p>" },
        {
          heading: "Contents",
          body: "<p>Basic concepts of numerical analysis; deterministic methods for computing integrals; Monte Carlo methods and stochastic integration; probability distributions and the central limit theorem; numerical solution of differential equations; zeros of a function.</p>",
        },
        {
          heading: "Detailed program",
          body: "<ul><li><strong>Basic concepts</strong> — rounding and truncation error, storing numbers in a computer, conditioning and stability.</li><li><strong>Deterministic integration</strong> — trapezoidal rule, Simpson, Bode, Romberg and Gauss methods, with a focus on expected numerical accuracy.</li><li><strong>Monte Carlo methods</strong> — stochastic integration compared with deterministic techniques.</li><li><strong>Differential equations</strong> — Euler, leap-frog and Runge-Kutta methods.</li><li><strong>Zeros of a function</strong> — bisection and Newton-Raphson methods.</li></ul>",
        },
        { heading: "Prerequisites", body: "<p>Teachings of previous years. No special prerequisites beyond very basic coding concepts (variables, arrays, functions, loops). The coding language can be chosen between C and Fortran.</p>" },
        { heading: "Teaching form", body: "<p>Activity carried out in the computer lab: a few initial theoretical lectures present the numerical techniques, then each student works individually with the teacher's support.</p>" },
        { heading: "Textbook and teaching resource", body: "<p>Teacher's notes on the e-learning page; <em>Numerical Recipes</em> — Press, Teukolsky, Vetterling, Flannery (Cambridge University Press).</p>" },
        { heading: "Semester", body: "<p>Twice a week, first semester.</p>" },
        { heading: "Assessment method", body: "<p>Lab exercises write-up as a report (PDF, sent in advance), plus an oral exam discussing the exercises, the lab activity and the report.</p>" },
        { heading: "Office hours", body: "<p>Anytime, after an e-mail appointment.</p>" },
      ],
    },
    "mathematical-methods-for-physics": {
      title: "Mathematical Methods for Physics",
      professor: "Silvia Penati",
      professorHref: "https://scholar.google.com/citations?user=DRw8L7oAAAAJ&hl=en",
      meta: "University of Milano-Bicocca",
      links: [{ label: "e-learning course page", href: "https://elearning.unimib.it/course/info.php?id=29588#en" }],
      sections: [
        { heading: "Aims", body: "<p>Generalize the basic notions of analysis to the complex plane. Introduce the mathematical concepts required in the formulation of Quantum Mechanics.</p>" },
        {
          heading: "Contents",
          body: "<ol><li>Complex analysis: holomorphic functions, power series in the complex domain, Cauchy theorem, Laurent series, residue theorem, analytic continuation.</li><li>Linear, topological and Banach spaces; Hilbert spaces; Lp spaces; orthonormal bases; Fourier series; linear operators in Hilbert spaces; self-adjoint and unitary operators; spectral decomposition; Fourier and Laplace transforms.</li><li>Distributions.</li></ol>",
        },
        { heading: "Prerequisites", body: "<p>Contents of Analysis I, II, and \"Algebra and Geometry\".</p>" },
        { heading: "Teaching form", body: "<p>Class lectures (5 CFU) and tutorials (3 CFU).</p>" },
        {
          heading: "Textbook and teaching resource",
          body: "<p>Michela Petrini, Gianfranco Pradisi, Alberto Zaffaroni — <em>A Guide to Mathematical Methods for Physicists</em> (World Scientific); J. Bak, D.J. Newman — <em>Complex Analysis</em> (Springer); L. Debnath, P. Mikusiński — <em>Hilbert Spaces with Applications</em> (Elsevier); G. Cicogna — <em>Metodi Matematici della Fisica</em> (Springer). Exercises: M.R. Spiegel, <em>Complex Variables</em> and <em>Fourier Analysis</em> (Schaum Outline Series).</p>",
        },
        { heading: "Semester", body: "<p>Second semester.</p>" },
        { heading: "Assessment method", body: "<p>Written exercises plus a compulsory oral part covering the whole program.</p>" },
        { heading: "Office hours", body: "<p>By appointment — sara.pasquetti@unimib.it, silvia.penati@unimib.it.</p>" },
      ],
    },
    "physical-lab-1": {
      title: "Physics Laboratory 1",
      professor: "Claudia Riccardi",
      professorHref: "https://scholar.google.com/citations?user=GJCUZC0AAAAJ&hl=en",
      meta: "University of Milano-Bicocca",
      links: [{ label: "e-learning course page", href: "https://elearning.unimib.it/course/info.php?id=32534#en" }],
      sections: [
        {
          heading: "Aims",
          body: "<p>Get a deeper understanding of the laws of mechanics and thermodynamics from direct observation of phenomena. Learn how to perform physics measurements, elaborate data and critically evaluate the uncertainties in the results. Teamworking.</p>",
        },
        {
          heading: "Contents",
          body: "<p><strong>Lectures:</strong> statistical methods in experimental physics — laws of probability, statistical analysis of random errors, frequency distribution, probability density function, Gaussian/Binomial/Poisson distributions, error propagation, maximum likelihood, fits to data, χ² test, weighted mean.</p><p><strong>Experiments:</strong> motion, elastic and inelastic collisions, friction, pendulum, springs, elasticity, torsion, moments of inertia, standing waves, acoustic waves and speed of sound, harmonic oscillator, resonance, the gravitational constant, Coulomb's law, density/viscosity/fluid dynamics, calorimetry, gas expansion/compression, geometric optics.</p>",
        },
        {
          heading: "Detailed program",
          body: "<ul><li>Acceleration of gravity — Kater pendulum, free-fall motion.</li><li>General gravity — measurements with a Cavendish balance.</li><li>Elastic and inelastic collisions; inclined plane.</li><li>Torsion pendulum and moments of inertia.</li><li>Hooke's law; spring and harmonic oscillations.</li><li>Forced and damped oscillations, resonance.</li><li>Steady waves on a string, and in a pipe filled with various gases (speed of sound).</li><li>Stokes' law and viscosity of glycerol.</li><li>Archimedes' principle and density measurements.</li><li>Bernoulli's principle and the Venturi pipe.</li><li>Calorimetry.</li><li>Thermodynamics — adiabatic and isothermic compression/expansion.</li><li>Electrostatics — Coulomb balance.</li><li>Geometric optics — reflection, refraction, thin lenses.</li></ul>",
        },
        { heading: "Prerequisites", body: "<p>Basic knowledge of the contents of Physics I.</p>" },
        { heading: "Teaching form", body: "<p>Lectures on lab content and statistics, followed by exercises with tutors; experiments in the lab in groups of three, discussed in class afterwards.</p>" },
        {
          heading: "Textbook and teaching resource",
          body: "<p>M. Loreti, <em>Teoria degli errori e fondamenti di statistica</em> (Decibel, Zanichelli); J.R. Taylor, <em>An Introduction to Error Analysis</em> (Zanichelli); reference: W.J. Metzger, <em>Statistical Methods in Data Analysis</em>.</p>",
        },
        { heading: "Semester", body: "<p>First and second semesters.</p>" },
      ],
    },
    "physical-lab-2": {
      title: "Physics Laboratory 2",
      professor: "Pietro Govoni",
      professorHref: "https://inspirehep.net/authors/1062192",
      meta: "University of Milano-Bicocca",
      links: [{ label: "e-learning course page", href: "https://elearning.unimib.it/course/view.php?id=36328" }],
      sections: [
        {
          heading: "Course description",
          body: "<p><strong>Module I (1st semester)</strong> — Probability and statistics, introduction to C++ programming and data analysis.</p><p><strong>Module II (2nd semester)</strong> — Optics and electromagnetism measurements, applying the data-analysis techniques from Module I to interpret and discuss the results.</p>",
        },
      ],
    },
    "laboratory-of-computer-science": {
      title: "Laboratory of Computer Science",
      professor: "Federico Nati",
      professorHref: "https://federiconati.it/",
      meta: "University of Milano-Bicocca",
      links: [{ label: "e-learning course page", href: "https://elearning.unimib.it/course/info.php?id=29579#en" }],
      sections: [
        {
          heading: "Aims",
          body: "<p>Acquire the conceptual basis of computer programming and fundamental notions about the structure of digital computers and operating systems. Acquire the ability to design and implement, in C, data structures and algorithms for scientific and general problems.</p>",
        },
        {
          heading: "Contents",
          body: "<p>The notion of an algorithm and its computational cost; basics of imperative programming (data structures and algorithms); the functional structure of computers and operating systems; data representation, errors and approximations in numerical computation; strategies for algorithm design.</p>",
        },
        {
          heading: "Detailed program",
          body: "<p>The functional structure of digital computers and the role of operating systems. Imperative programming: variables and types, control structures, functions and parameter passing (in C). Structured types — arrays, matrices, records; dynamic types — linked lists, trees (in C). Data representation — binary notation, integers, floating point, approximation and errors. Strategies for algorithm and data-structure design, with relevant examples.</p>",
        },
        { heading: "Prerequisites", body: "<p>Basic propositional logic; basic mathematics (functions and relations, simple combinatorics).</p>" },
        { heading: "Teaching form", body: "<p>Lectures (2 CFU) and lab activity (2 CFU), given in Italian.</p>" },
        {
          heading: "Textbook and teaching resource",
          body: "<p>Teacher's notes and commented exercises; J.G. Brookshear, S.G. Kochan, <em>Fondamenti di informatica e programmazione in C</em> (Pearson, 2014); B.W. Kernighan, D.M. Ritchie, <em>Il linguaggio C</em>, 2nd ed. (Pearson, 2004).</p>",
        },
        { heading: "Semester", body: "<p>Second semester.</p>" },
        { heading: "Assessment method", body: "<p>Written exam (a C program solving a given problem) followed by an oral exam discussing it.</p>" },
        { heading: "Office hours", body: "<p>Every Tuesday, 10:30–12:00, or by appointment.</p>" },
      ],
    },
  },

  bio: {
    intro: [
      "<p>Hello! My name is Alessio Martini. I hold a Master&rsquo;s degree in Theoretical Physics from the University of Amsterdam (ITFA), graduating on 24 June 2026, after completing my Bachelor&rsquo;s degree in Physics at the University of Milano-Bicocca.</p>",
      "<p>My academic path has been shaped by a strong interest in geometric and structural approaches to physics. During my Bachelor&rsquo;s and Master&rsquo;s I focused on quantum field theory, string theory, differential geometry, and topology in physics, culminating in a Master&rsquo;s thesis on generalized symmetries and modern symmetry structures in quantum field theory and gravity. This training has given me a rigorous background in abstract modelling, mathematical methods, and conceptual aspects of quantum theory.</p>",
      "<p>In parallel, I have always been deeply interested in social and political questions: how collective behaviour emerges, how institutions shape individual choices, and how crises and inequalities propagate through societies. Over time, this has led me to look for ways to connect my theoretical and computational skills with the quantitative study of social phenomena.</p>",
    ],
    researchHeading: "Research Interests",
    research: [
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
        { name: "Asymptotic symmetries, Soft Theorems, and Memory Effects: The Infrared Triangle", professor: "Mitra Prahar", professorHref: "https://scholar.google.com/citations?user=_4w2bqcAAAAJ&hl=en" },
        { name: "Introduction to higher form symmetries and their applications", professor: "Nabil Iqbal", professorHref: "https://www.nabiliqbal.com/" },
        { name: "Quantum Mechanics in the everyday world", professor: "Jasper van Wezel", professorHref: "https://jvanwezel.com/" },
        { name: "Introduction to advanced statistical physics for neural networks", courseHref: "https://www.drstp.nl/events/advanced-topics-in-theoretical-physics-autumn-2026/", professor: "Tuan Pham", professorHref: "https://scholar.google.com/citations?user=LKzkz-kAAAAJ&hl=en" },
      ],
    },
    {
      group: "Master's Courses",
      place: "University of Amsterdam",
      years: "2024–2026",
      items: [
        "<strong>Master's Thesis</strong> — Non-invertible Symmetries in QFT and Gravity (<a class=\"text-link\" href=\"https://github.com/alessiomartini/msc-thesis-non-invertible-symmetries\" target=\"_blank\" rel=\"noopener noreferrer\">repo</a>)",
        { name: "Generalised Symmetries in QFT and Gravity (Jena TPI School on QFT & Holography)", professor: "Nabil Iqbal", professorHref: "https://www.nabiliqbal.com/" },
        { name: "Exploring artificial intelligence for (quantum) physics (Adv. Topics in Theo. Phys.)", courseHref: "course.html?id=exploring-ai-for-q-physics", professor: "Evert van Nieuwenburg", professorHref: "https://www.linkedin.com/in/evert-van-nieuwenburg/" },
        { name: "Topological Order and Quantum Information (Adv. Topics in Theo. Phys.)", courseHref: "course.html?id=topological-order-and-quantum-information", professor: "Kareljan Schoutens", professorHref: "https://www.linkedin.com/in/kareljan-schoutens-39b30849/" },
        { name: "Lattice Gauge Theory (Adv. Topics in Theo. Phys.)", courseHref: "course.html?id=lattice-gauge-theory", professor: "Jasper van Wezel", professorHref: "https://jvanwezel.com/" },
        { name: "Condensed Matter Theory Advanced", professor: "Vladimir Gritsev", professorHref: "https://scholar.google.com/citations?user=Xw_CHScAAAAJ&hl=en" },
        { name: "String Theory I & II", professor: "Lorenz Eberhardt", professorHref: "https://scholar.google.com/citations?user=eL5X9zMAAAAJ&hl=en" },
        "Topology in Physics — <a class=\"text-link\" href=\"https://www.uva.nl/en/profile/v/o/m.l.vonk/m.l.vonk.html\" target=\"_blank\" rel=\"noopener noreferrer\">Marcel Vonk</a>, <a class=\"text-link\" href=\"https://scholar.google.com/citations?user=PyTE1DIAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener noreferrer\">Hessel Posthuma</a>",
        "Hydrodynamics — <a class=\"text-link\" href=\"https://scholar.google.com/citations?user=FE8TQeUAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener noreferrer\">Mazi Jalaal</a>, <a class=\"text-link\" href=\"https://scholar.google.com/citations?user=FLVIUUEAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener noreferrer\">Pedro Cosme</a>",
        { name: "Quantum Field Theory III & Advanced", professor: "Andrea Puhm", professorHref: "https://scholar.google.com/citations?user=gZX3C2oAAAAJ&hl=en" },
        { name: "Quantum Field Theory I & II", professor: "Diego Hofman", professorHref: "https://www.uva.nl/en/profile/h/o/d.m.hofman/d.m.hofman.html" },
        { name: "Non-equilibrium Statistical Physics", professor: "Edan Lerner", professorHref: "https://scholar.google.com/citations?user=fNQJKtUAAAAJ&hl=en" },
        "Algebraic Topology 1 — <a class=\"text-link\" href=\"https://research.vu.nl/en/persons/inbar-klang/\" target=\"_blank\" rel=\"noopener noreferrer\">Inbar Klang</a>, <a class=\"text-link\" href=\"https://scholar.google.com/citations?user=JanZktsAAAAJ&hl=en\" target=\"_blank\" rel=\"noopener noreferrer\">Lennart Meier</a> (Mastermath)",
        { name: "Differential Geometry (Mastermath)", professor: "Marius Crainic", professorHref: "https://scholar.google.com/citations?user=HSmygYcAAAAJ&hl=en" },
        "Categories and Modules — <a class=\"text-link\" href=\"https://www.math.leidenuniv.nl/~edix/\" target=\"_blank\" rel=\"noopener noreferrer\">Bas Edixhoven</a>, <a class=\"text-link\" href=\"https://davidholmes.nl/\" target=\"_blank\" rel=\"noopener noreferrer\">David Holmes</a>, <a class=\"text-link\" href=\"https://research.vu.nl/en/persons/rob-de-jeu/\" target=\"_blank\" rel=\"noopener noreferrer\">Rob de Jeu</a>, <a class=\"text-link\" href=\"https://staff.fnwi.uva.nl/a.l.kret/\" target=\"_blank\" rel=\"noopener noreferrer\">Arno Kret</a>, <a class=\"text-link\" href=\"https://www.math.ru.nl/~sagave/\" target=\"_blank\" rel=\"noopener noreferrer\">Steffen Sagave</a> (Mastermath)",
      ],
    },
    {
      group: "In Between",
      place: "Wien / UniMiB",
      years: "2024",
      items: [
        { name: "Geometrical Anatomy of Theoretical Physics (Wien)", professor: "Frederic Schuller", professorHref: "https://people.utwente.nl/f.p.schuller?tab=education" },
        { name: "General Relativity (Wien)", professor: "Frederic Schuller", professorHref: "https://people.utwente.nl/f.p.schuller?tab=education" },
        { name: "Fisica Teorica 1 (UniMiB)", professor: "Alberto Zaffaroni", professorHref: "https://virgilio.mib.infn.it/~zaffaron/" },
        { name: "Quantum Information Theory & Computing (UniMiB)", professor: "Alberto Zaffaroni", professorHref: "https://virgilio.mib.infn.it/~zaffaron/" },
      ],
    },
    {
      group: "Bachelor's Courses — Third Year",
      place: "University of Milano-Bicocca",
      years: "2021–2024",
      items: [
        "<strong>Bachelor's Thesis</strong> — Anomalies in Quantum Mechanics (<a class=\"text-link\" href=\"https://github.com/alessiomartini/bsc-thesis-scale-anomaly-in-qm\" target=\"_blank\" rel=\"noopener noreferrer\">repo</a>)",
        { name: "Quantum Mechanics", professor: "Carlo Oleari", professorHref: "https://inspirehep.net/authors/994959" },
        { name: "Special Relativity", professor: "Emanuele Re", professorHref: "https://inspirehep.net/authors/1058529" },
        "Nuclear and Subnuclear Physics — <a class=\"text-link\" href=\"https://www.dunescience.org/facesofdune/francesco-terranova/\" target=\"_blank\" rel=\"noopener noreferrer\">Francesco Terranova</a>, <a class=\"text-link\" href=\"https://scholar.google.com/citations?hl=en&user=hWsp_owAAAAJ\" target=\"_blank\" rel=\"noopener noreferrer\">Luca Gironi</a>",
        { name: "Structure of Matter", professor: "Francesco Montalenti", professorHref: "https://lness.como.polimi.it/francescomontalenti.php" },
        { name: "Geometry 3", professor: "Alberto Della Vedova", professorHref: "https://www.researchgate.net/profile/Alberto-Della-Vedova" },
        { name: "Computational Physics", courseHref: "course.html?id=computational-physics-lab", professor: "Michele Pepe", professorHref: "https://inspirehep.net/authors/993845" },
      ],
    },
    {
      group: "Bachelor's Courses — Second Year",
      place: "University of Milano-Bicocca",
      years: "2021–2024",
      items: [
        { name: "Classical Mechanics", professor: "Giampaolo Cristadoro", professorHref: "https://scholar.google.com/citations?user=-lNxulgAAAAJ&hl=en" },
        { name: "Electromagnetism", professor: "Tommaso Tabarelli de Fatis", professorHref: "https://inspirehep.net/authors/1010312" },
        { name: "Mathematical Methods for Physics", courseHref: "course.html?id=mathematical-methods-for-physics", professor: "Silvia Penati", professorHref: "https://scholar.google.com/citations?user=DRw8L7oAAAAJ&hl=en" },
        { name: "Geometry 1", professor: "Alberto Della Vedova", professorHref: "https://www.researchgate.net/profile/Alberto-Della-Vedova" },
        { name: "Physics Laboratory 2", courseHref: "course.html?id=physical-lab-2", professor: "Pietro Govoni", professorHref: "https://inspirehep.net/authors/1062192" },
      ],
    },
    {
      group: "Bachelor's Courses — First Year",
      place: "University of Milano-Bicocca",
      years: "2021–2024",
      items: [
        { name: "Mathematical Analysis 1", professor: "Simone Secchi", professorHref: "https://scholar.google.com/citations?hl=en&user=KWW--qUAAAAJ" },
        { name: "Linear Algebra and Geometry", professor: "Sonia Brivio", professorHref: "https://en.unimib.it/sonia-brivio" },
        { name: "Physics Laboratory 1", courseHref: "course.html?id=physical-lab-1", professor: "Claudia Riccardi", professorHref: "https://scholar.google.com/citations?user=GJCUZC0AAAAJ&hl=en" },
        { name: "Laboratory of Computer Science", courseHref: "course.html?id=laboratory-of-computer-science", professor: "Federico Nati", professorHref: "https://federiconati.it/" },
      ],
    },
    {
      group: "High School Courses",
      place: "ITIS Greppi",
      years: "2015–2021",
      items: [
        { name: "Introduction to Cryptography", professor: "Andrea Previtali (Math Professor at Univ. of Milano-Bicocca)", professorHref: "https://scholar.google.com/citations?user=9qJGd8YAAAAJ&hl=en" },
        { name: "Sistemi e Reti", professor: "Vincenzo Villa", professorHref: "https://www.vincenzov.net/" },
        { name: "Telecomunicazioni", professor: "Calogero Cancellieri", professorHref: "https://www.linkedin.com/in/calogero-cancellieri-718b3523/" },
        { name: "Theory of Coding", professor: "Samuele Redaelli", professorHref: "https://www.linkedin.com/in/samuele-redaelli-b837ab14b/" },
        "History and Italian Literature — Paola Fumagalli",
      ],
    },
  ],

  teaching: {
    assistant: [
      { role: "Teacher Assistant", course: "Quantum Field Theory I & II", person: "Diego Hofman", personHref: "https://www.uva.nl/en/profile/h/o/d.m.hofman/d.m.hofman.html", place: "University of Amsterdam", year: "2025" },
      { role: "Teacher Assistant", course: "Electrodynamics", person: "Kareljan Schoutens", personHref: "https://www.linkedin.com/in/kareljan-schoutens-39b30849/", place: "University of Amsterdam", year: "2025" },
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
          screenshots: ["images/projects/markets-first-principles/1.png"],
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
          screenshots: ["images/projects/geopolitics-atlas/1.png"],
        },
        {
          name: "Mountain Huts Map",
          description: "A map of alpine huts and bivouacs, starting from the Italian Alps and the Bergen (Norway) area, built so new regions are a one-line config change rather than a refactor.",
          type: "Website",
          href: "https://mountain-huts-map.alemarti-2001.workers.dev/",
          repo: "https://github.com/alessiomartini/mountain-huts-map",
          status: "In progress",
          screenshots: ["images/projects/mountain-huts-map/1.png"],
        },
        {
          name: "Eating Amsterdam",
          description: "A collaborative map of places to eat well and cheap in and around Amsterdam — snack bars, döner, falafel, budget restaurants — with filters for price, rating, cuisine, and vegetarian/vegan options.",
          type: "Website",
          href: "https://alessiomartini.github.io/eating-amsterdam/",
          repo: "https://github.com/alessiomartini/eating-amsterdam",
          screenshots: ["images/projects/eating-amsterdam/1.png"],
        },
        {
          name: "Amsterdam Events",
          description: "Aggregates events happening in Amsterdam — jazz & live music, free museum entry, demonstrations, clubbing — from multiple source websites into one filterable static site.",
          type: "Website",
          href: "https://alessiomartini.github.io/amsterdam-events/",
          repo: "https://github.com/alessiomartini/amsterdam-events",
          screenshots: ["images/projects/amsterdam-events/1.png"],
        },
        {
          name: "The Real-Time Earth",
          description: "A modular catalog of live global data feeds, shown unmodified — no interpolation, no placeholders, gaps shown as gaps.",
          type: "Website",
          href: "https://realtime-earth.alemarti-2001.workers.dev",
          repo: "https://github.com/alessiomartini/realtime-earth",
          status: "In progress",
          screenshots: ["images/projects/realtime-earth/1.png"],
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
          screenshots: [
            "images/projects/grocery-list/1.jpg",
            "images/projects/grocery-list/2.jpg",
            "images/projects/grocery-list/3.jpg",
            "images/projects/grocery-list/4.jpg",
          ],
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
          screenshots: [
            "images/projects/flash-cards-app/1.jpg",
            "images/projects/flash-cards-app/2.jpg",
            "images/projects/flash-cards-app/3.jpg",
            "images/projects/flash-cards-app/4.jpg",
          ],
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
          screenshots: ["images/projects/music-library/1.png"],
        },
        {
          name: "Harmonic Ear Training",
          description: "On hold: two existing apps, MyEarTraining and Functional Ear Trainer, already cover harmonic ear training well, so building a third has little point. Kept as a reference implementation in case a specific gap shows up later.",
          type: "Website",
          href: "https://alessiomartini.github.io/ear-training/",
          repo: "https://github.com/alessiomartini/ear-training",
          status: "Outdated",
          screenshots: ["images/projects/ear-training/1.png"],
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
      description: "My brother, Daniele Martini, is a transportation engineer and business consultant who now runs his own consulting startup —",
      href: "https://www.danielemartini.eu/",
      linkText: "his site",
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

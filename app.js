const projects = [
  {
    title: "Carbon Crumbs",
    repoName: "carbon-crumbs",
    url: "https://cosmicbubblegumgirl.github.io/carbon-crumbs/",
    repo: "https://github.com/cosmicbubblegumgirl/carbon-crumbs",
    category: "Climate",
    language: "JavaScript",
    accent: "#00a6a6",
    featured: true,
    summary: "I built a carbon emissions calculator with a creative spin, turning sustainability into an approachable browser tool."
  },
  {
    title: "Mind Check",
    repoName: "mind-check",
    url: "https://cosmicbubblegumgirl.github.io/mind-check/",
    repo: "https://github.com/cosmicbubblegumgirl/mind-check",
    category: "Wellness",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: true,
    summary: "I created a self-reflection experience around ADHD and anxiety awareness with a knowledge-first tone."
  },
  {
    title: "Deductomatic",
    repoName: "deductomatic",
    url: "https://cosmicbubblegumgirl.github.io/deductomatic/",
    repo: "https://github.com/cosmicbubblegumgirl/deductomatic",
    category: "Finance",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: true,
    summary: "I built a tax calculator presented as SA Tax Studio 3D, combining practical calculations with a memorable interface."
  },
  {
    title: "e-Plant Shopping",
    repoName: "e-plantShopping",
    url: "https://cosmicbubblegumgirl.github.io/e-plantShopping/",
    repo: "https://github.com/cosmicbubblegumgirl/e-plantShopping",
    category: "Commerce",
    language: "JavaScript",
    accent: "#4f9b36",
    featured: true,
    summary: "I created a Paradise Nursery storefront project for browsing plant products through a front-end shopping flow."
  },
  {
    title: "Whimsical Simple Interest Calculator",
    repoName: "whimsical-simple-interest-calculator",
    url: "https://cosmicbubblegumgirl.github.io/whimsical-simple-interest-calculator/",
    repo: "https://github.com/cosmicbubblegumgirl/whimsical-simple-interest-calculator",
    category: "Finance",
    language: "HTML",
    accent: "#ffbd4a",
    featured: true,
    summary: "I built a simple interest calculator with a playful visual direction and clear form-based interaction."
  },
  {
    title: "Normal Is Overrated",
    repoName: "normal_is-_overrated",
    url: "https://cosmicbubblegumgirl.github.io/normal_is-_overrated/",
    repo: "https://github.com/cosmicbubblegumgirl/normal_is-_overrated",
    category: "Wellness",
    language: "JavaScript",
    accent: "#a76cff",
    featured: true,
    summary: "I designed a Moonbeam Mind experience that frames neurodiversity and self-understanding through a distinctive UI."
  },
  {
    title: "Travel Recommendations",
    repoName: "travel_recommendations",
    url: "https://cosmicbubblegumgirl.github.io/travel_recommendations/",
    repo: "https://github.com/cosmicbubblegumgirl/travel_recommendations",
    category: "Travel",
    language: "HTML",
    accent: "#00a6a6",
    featured: true,
    summary: "I created a magical travel recommendation website with destination discovery and themed content presentation."
  },
  {
    title: "FlowForge Exam Lab",
    repoName: "flowforge-exam-lab",
    url: "https://cosmicbubblegumgirl.github.io/flowforge-exam-lab/",
    repo: "https://github.com/cosmicbubblegumgirl/flowforge-exam-lab",
    category: "SAP + Learning",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: true,
    summary: "I built an SAP Integration Suite practical exam simulator with 118 original questions and a study-focused flow."
  },
  {
    title: "SAP Spellbook Academy",
    repoName: "the-plan-of-action",
    url: "https://cosmicbubblegumgirl.github.io/the-plan-of-action/",
    repo: "https://github.com/cosmicbubblegumgirl/the-plan-of-action",
    category: "SAP + Learning",
    language: "JavaScript",
    accent: "#c7ff5b",
    featured: true,
    summary: "I created a SAP C_CPI_2601 study planner and system-based assessment simulator."
  },
  {
    title: "Incident Management",
    repoName: "cld200-incident-management",
    url: "https://cosmicbubblegumgirl.github.io/cld200-incident-management/",
    repo: "https://github.com/cosmicbubblegumgirl/cld200-incident-management",
    category: "SAP + Learning",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I built a CLD200 incident management exercise and GitHub Pages demo."
  },
  {
    title: "Zemira's Pixels",
    repoName: "zemiras-pixels",
    url: "https://cosmicbubblegumgirl.github.io/zemiras-pixels/",
    repo: "https://github.com/cosmicbubblegumgirl/zemiras-pixels",
    category: "Creative",
    language: "JavaScript",
    accent: "#a76cff",
    featured: false,
    summary: "I created a pixel-forward creative site with a visual identity built for exploration."
  },
  {
    title: "DoodleFlow",
    repoName: "doodleflow",
    url: "https://cosmicbubblegumgirl.github.io/doodleflow/",
    repo: "https://github.com/cosmicbubblegumgirl/doodleflow",
    category: "Creative",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: false,
    summary: "I built a standalone creative community web app and doodle feed experience."
  },
  {
    title: "DoodleFlow Creative Community",
    repoName: "vercel-apps-github-pages",
    url: "https://cosmicbubblegumgirl.github.io/vercel-apps-github-pages/",
    repo: "https://github.com/cosmicbubblegumgirl/vercel-apps-github-pages",
    category: "Creative",
    language: "JavaScript",
    accent: "#00a6a6",
    featured: false,
    summary: "I built an interactive GitHub Pages launchpad for Vercel-style app experiments."
  },
  {
    title: "FocusFlux",
    repoName: "focusflux",
    url: "https://cosmicbubblegumgirl.github.io/focusflux/",
    repo: "https://github.com/cosmicbubblegumgirl/focusflux",
    category: "Productivity",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I created a focus-oriented browser app with a direct, task-friendly interface."
  },
  {
    title: "Cadance.exe: Portal After Midnight",
    repoName: "cadance-portal-after-midnight",
    url: "https://cosmicbubblegumgirl.github.io/cadance-portal-after-midnight/",
    repo: "https://github.com/cosmicbubblegumgirl/cadance-portal-after-midnight",
    category: "Creative",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a characterful interactive portal with a late-night digital mood."
  },
  {
    title: "Neon Tide",
    repoName: "neon-tide-game",
    url: "https://cosmicbubblegumgirl.github.io/neon-tide-game/",
    repo: "https://github.com/cosmicbubblegumgirl/neon-tide-game",
    category: "Game",
    language: "JavaScript",
    accent: "#00a6a6",
    featured: false,
    summary: "I built a browser game that brings motion, score-chasing, and arcade energy into my portfolio."
  },
  {
    title: "LearnLoop",
    repoName: "learnloop",
    url: "https://cosmicbubblegumgirl.github.io/learnloop/",
    repo: "https://github.com/cosmicbubblegumgirl/learnloop",
    category: "Product",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I created a standalone adaptive learning studio with a dynamic front end and JSON data layer."
  },
  {
    title: "ReturnReady",
    repoName: "returnready",
    url: "https://cosmicbubblegumgirl.github.io/returnready/",
    repo: "https://github.com/cosmicbubblegumgirl/returnready",
    category: "Product",
    language: "HTML",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a returns control tower concept for operational product storytelling."
  },
  {
    title: "Nimbus Nook",
    repoName: "nimbus-nook",
    url: "https://cosmicbubblegumgirl.github.io/nimbus-nook/",
    repo: "https://github.com/cosmicbubblegumgirl/nimbus-nook",
    category: "Wellness",
    language: "JavaScript",
    accent: "#00a6a6",
    featured: false,
    summary: "I built an anxiety calming web app with a soothing product concept and focused interface."
  },
  {
    title: "LedgerLift",
    repoName: "ledgerlift",
    url: "https://cosmicbubblegumgirl.github.io/ledgerlift/",
    repo: "https://github.com/cosmicbubblegumgirl/ledgerlift",
    category: "Finance",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I created a cash-flow foresight product website for small business decision support."
  },
  {
    title: "PantryPilot",
    repoName: "pantrypilot",
    url: "https://cosmicbubblegumgirl.github.io/pantrypilot/",
    repo: "https://github.com/cosmicbubblegumgirl/pantrypilot",
    category: "Product",
    language: "HTML",
    accent: "#4f9b36",
    featured: false,
    summary: "I built a pantry management product concept with dynamic front-end content."
  },
  {
    title: "DwellKit",
    repoName: "dwellkit",
    url: "https://cosmicbubblegumgirl.github.io/dwellkit/",
    repo: "https://github.com/cosmicbubblegumgirl/dwellkit",
    category: "Product",
    language: "HTML",
    accent: "#00a6a6",
    featured: false,
    summary: "I created a home-focused product website as a standalone front-end experience."
  },
  {
    title: "HireSignal",
    repoName: "hiresignal",
    url: "https://cosmicbubblegumgirl.github.io/hiresignal/",
    repo: "https://github.com/cosmicbubblegumgirl/hiresignal",
    category: "Product",
    language: "HTML",
    accent: "#2f6bff",
    featured: false,
    summary: "I designed a hiring-signal product website with a sharp operational narrative."
  },
  {
    title: "Resume Radar",
    repoName: "resume-radar",
    url: "https://cosmicbubblegumgirl.github.io/resume-radar/",
    repo: "https://github.com/cosmicbubblegumgirl/resume-radar",
    category: "Productivity",
    language: "JavaScript",
    accent: "#a76cff",
    featured: true,
    summary: "I built an ATS-aware resume lab for matching my CV to job posts, checking keywords, repairing PDFs, and tracking applications."
  },
  {
    title: "GreenGrid",
    repoName: "greengrid",
    url: "https://cosmicbubblegumgirl.github.io/greengrid/",
    repo: "https://github.com/cosmicbubblegumgirl/greengrid",
    category: "Product",
    language: "HTML",
    accent: "#4f9b36",
    featured: false,
    summary: "I built a product landing experience organized around green systems and structured content."
  },
  {
    title: "CivicLink",
    repoName: "civiclink",
    url: "https://cosmicbubblegumgirl.github.io/civiclink/",
    repo: "https://github.com/cosmicbubblegumgirl/civiclink",
    category: "Product",
    language: "HTML",
    accent: "#00a6a6",
    featured: false,
    summary: "I created a civic product concept with a clean information architecture."
  },
  {
    title: "ShiftMate",
    repoName: "shiftmate",
    url: "https://cosmicbubblegumgirl.github.io/shiftmate/",
    repo: "https://github.com/cosmicbubblegumgirl/shiftmate",
    category: "Product",
    language: "HTML",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a shift coordination product website with practical workflow framing."
  },
  {
    title: "CareFlow",
    repoName: "careflow",
    url: "https://cosmicbubblegumgirl.github.io/careflow/",
    repo: "https://github.com/cosmicbubblegumgirl/careflow",
    category: "Product",
    language: "HTML",
    accent: "#2f6bff",
    featured: false,
    summary: "I built a hospital command center concept for healthcare operations."
  },
  {
    title: "Product Design Portfolio Pages",
    repoName: "product-design-client-portfolio-pages",
    url: "https://cosmicbubblegumgirl.github.io/product-design-client-portfolio-pages/",
    repo: "https://github.com/cosmicbubblegumgirl/product-design-client-portfolio-pages",
    category: "Portfolio",
    language: "HTML",
    accent: "#c7ff5b",
    featured: false,
    summary: "I created a portfolio-oriented site presenting full stack, UX, and product design positioning."
  },
  {
    title: "NovaBite",
    repoName: "Nova-bite",
    url: "https://cosmicbubblegumgirl.github.io/Nova-bite/",
    repo: "https://github.com/cosmicbubblegumgirl/Nova-bite",
    category: "Creative",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a quirky tasting experience site with a distinct brand mood."
  },
  {
    title: "Coaster's Cabs",
    repoName: "coasterscabsfinal",
    url: "https://cosmicbubblegumgirl.github.io/coasterscabsfinal/",
    repo: "https://github.com/cosmicbubblegumgirl/coasterscabsfinal",
    category: "Client",
    language: "HTML",
    accent: "#00a6a6",
    featured: false,
    summary: "I built a South Coast private cab service website with local business presentation."
  },
  {
    title: "Permit - AI Agent Governance",
    repoName: "Leash",
    url: "https://cosmicbubblegumgirl.github.io/Leash/",
    repo: "https://github.com/cosmicbubblegumgirl/Leash",
    category: "Product",
    language: "JavaScript",
    accent: "#2f6bff",
    featured: false,
    summary: "I created a product concept around AI agent governance and permissioning."
  },
  {
    title: "QuantumCupCakeCreations",
    repoName: "QUantumcreations_simone-govender-portfoio",
    url: "https://cosmicbubblegumgirl.github.io/QUantumcreations_simone-govender-portfoio/",
    repo: "https://github.com/cosmicbubblegumgirl/QUantumcreations_simone-govender-portfoio",
    category: "Portfolio",
    language: "HTML",
    accent: "#a76cff",
    featured: false,
    summary: "I built a colorful portfolio experiment with a playful creative identity."
  },
  {
    title: "GiftWrapped",
    repoName: "GiftWrapped",
    url: "https://cosmicbubblegumgirl.github.io/GiftWrapped/",
    repo: "https://github.com/cosmicbubblegumgirl/GiftWrapped",
    category: "Creative",
    language: "JavaScript",
    accent: "#ff6b4a",
    featured: false,
    summary: "I designed a gift-themed web experience with celebratory visual language."
  },
  {
    title: "GiftLink Sparkle",
    repoName: "giftlink-sparkle",
    url: "https://cosmicbubblegumgirl.github.io/giftlink-sparkle/",
    repo: "https://github.com/cosmicbubblegumgirl/giftlink-sparkle",
    category: "Creative",
    language: "JavaScript",
    accent: "#a76cff",
    featured: false,
    summary: "I created a polished gift-link project with a bright, social product direction."
  },
  {
    title: "Moonbeam Mind",
    repoName: "moonbeammind",
    url: "https://cosmicbubblegumgirl.github.io/moonbeammind/",
    repo: "https://github.com/cosmicbubblegumgirl/moonbeammind",
    category: "Wellness",
    language: "JavaScript",
    accent: "#a76cff",
    featured: false,
    summary: "I built a spectrum-test concept focused on self-knowledge and reflective interaction."
  },
  {
    title: "Nursery Paradise",
    repoName: "final-project-nursery-paradise",
    url: "https://cosmicbubblegumgirl.github.io/final-project-nursery-paradise/",
    repo: "https://github.com/cosmicbubblegumgirl/final-project-nursery-paradise",
    category: "Commerce",
    language: "JavaScript",
    accent: "#4f9b36",
    featured: false,
    summary: "I created a nursery storefront final project with plant shopping presentation."
  },
  {
    title: "Nusery Paradise",
    repoName: "final-project-nusery-paradise",
    url: "https://cosmicbubblegumgirl.github.io/final-project-nusery-paradise/",
    repo: "https://github.com/cosmicbubblegumgirl/final-project-nusery-paradise",
    category: "Commerce",
    language: "JavaScript",
    accent: "#4f9b36",
    featured: false,
    summary: "I kept this alternate nursery storefront deployment as part of my live project archive."
  },
  {
    title: "Pixie Petal Patch",
    repoName: "fixed-pixie-petal-patch-garden-shop",
    url: "https://cosmicbubblegumgirl.github.io/fixed-pixie-petal-patch-garden-shop/",
    repo: "https://github.com/cosmicbubblegumgirl/fixed-pixie-petal-patch-garden-shop",
    category: "Commerce",
    language: "CSS",
    accent: "#4f9b36",
    featured: false,
    summary: "I built a Vite and React plant nursery storefront with a complete shopping feel."
  }
];

const categories = [
  "All",
  "SAP + Learning",
  "Product",
  "Creative",
  "Commerce",
  "Wellness",
  "Finance",
  "Climate",
  "Travel",
  "Game",
  "Client",
  "Portfolio",
  "Productivity"
];

const state = {
  category: "All",
  query: "",
  selectedIndex: 0
};

const FLIGHT_KEYS = new Set([
  "arrowup",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "w",
  "a",
  "s",
  "d"
]);

const LAUNCH_STEPS = [
  "Ignition armed",
  "Star field calibrated",
  "Project destinations online",
  "Entering my portfolio universe"
];

const DOCK_MESSAGE_MS = 2400;
const DOCK_ANIMATION_MS = 1400;
const PROJECT_GLYPHS = {
  "SAP + Learning": "SAP",
  Product: "UX",
  Creative: "ART",
  Commerce: "SHOP",
  Wellness: "CALM",
  Finance: "R",
  Climate: "CO2",
  Travel: "MAP",
  Game: "PLAY",
  Client: "BRIEF",
  Portfolio: "CV",
  Productivity: "FOCUS"
};

const elements = {
  filters: document.querySelector("#categoryFilters"),
  list: document.querySelector("#projectList"),
  search: document.querySelector("#projectSearch"),
  frame: document.querySelector("#sandboxFrame"),
  stageTitle: document.querySelector("#stageTitle"),
  stageSummary: document.querySelector("#stageSummary"),
  stageCategory: document.querySelector("#stageCategory"),
  stageUrl: document.querySelector("#stageUrl"),
  stageLive: document.querySelector("#stageLive"),
  stageRepo: document.querySelector("#stageRepo"),
  stageDisengage: document.querySelector("#stageDisengage"),
  shuffle: document.querySelector("#shuffleProject"),
  loadVisible: document.querySelector("#loadVisiblePreviews"),
  copyEmail: document.querySelector("#copyEmail"),
  missionControl: document.querySelector(".mission-control"),
  galaxyCanvas: document.querySelector("#galaxyCanvas"),
  beginExploration: document.querySelector("#beginExploration"),
  autoPilot: document.querySelector("#autoPilot"),
  audioToggle: document.querySelector("#audioToggle"),
  launchSequence: document.querySelector("#launchSequence"),
  launchStep: document.querySelector("#launchStep"),
  launchMeter: document.querySelector("#launchMeter"),
  missionPhase: document.querySelector("#missionPhase"),
  missionObjective: document.querySelector("#missionObjective"),
  missionProgress: document.querySelector("#missionProgress"),
  destinationPanel: document.querySelector("#destinationPanel"),
  holoTitle: document.querySelector("#holoTitle"),
  holoSummary: document.querySelector("#holoSummary"),
  holoCategory: document.querySelector("#holoCategory"),
  holoTech: document.querySelector("#holoTech"),
  holoPreview: document.querySelector("#holoPreview"),
  holoLive: document.querySelector("#holoLive"),
  holoRepo: document.querySelector("#holoRepo"),
  enterSandbox: document.querySelector("#enterSandbox"),
  targetNext: document.querySelector("#targetNext"),
  sparkleTrigger: document.querySelector("#sparkleTrigger"),
  dockProject: document.querySelector("#dockProject"),
  disengageProject: document.querySelector("#disengageProject"),
  closeControls: document.querySelector("#closeControls"),
  showControls: document.querySelector("#showControls"),
  quickToggle: document.querySelector("#quickToggle"),
  quickDestinationList: document.querySelector("#quickDestinationList"),
  touchFlightButtons: document.querySelectorAll("[data-flight]"),
  dockButton: document.querySelector("[data-dock]"),
  targetName: document.querySelector("#targetName"),
  shipStatus: document.querySelector("#shipStatus"),
  destinationCount: document.querySelector("#destinationCount")
};

const cosmicState = {
  activeIndex: 2,
  autoPilot: true,
  launched: false,
  launching: false,
  dockedUntil: 0,
  lastPreviewIndex: null,
  destinations: [],
  destinationMeshes: [],
  sparkleShots: [],
  impactBursts: [],
  keys: new Set(),
  pointer: { x: 0, y: 0 },
  dragging: false,
  velocity: null,
  ship: null,
  sparkleGroup: null,
  impactGroup: null,
  disengaged: false,
  docking: false,
  docked: false,
  audio: null
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getFilteredProjects() {
  const query = state.query.trim().toLowerCase();
  return projects.filter((project) => {
    const inCategory =
      state.category === "All" || project.category === state.category;

    const haystack = [
      project.title,
      project.repoName,
      project.category,
      project.language,
      project.summary
    ]
      .join(" ")
      .toLowerCase();

    return inCategory && (!query || haystack.includes(query));
  });
}

function renderFilters() {
  elements.filters.innerHTML = categories
    .map((category) => {
      const count =
        category === "All"
          ? projects.length
          : projects.filter((project) => project.category === category).length;

      return `
        <button class="filter-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === state.category}">
          ${escapeHtml(category)} <span aria-hidden="true">${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderProjects() {
  const filtered = getFilteredProjects();
  if (!filtered.length) {
    elements.list.innerHTML = `
      <div class="project-card">
        <h3>I could not find a matching project yet</h3>
        <p>Try a broader search term or switch back to all of my projects.</p>
      </div>
    `;
    return;
  }

  elements.list.innerHTML = filtered
    .map((project) => {
      const index = projects.indexOf(project);
      return `
        <article class="project-card ${index === state.selectedIndex ? "active" : ""}" data-index="${index}" style="--accent: ${project.accent}">
          <header>
            <div>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.summary)}</p>
            </div>
            <span class="pill">${escapeHtml(project.language)}</span>
          </header>
          <div class="pill-row">
            <span class="pill">${escapeHtml(project.category)}</span>
            <span class="pill">Live</span>
          </div>
          <div class="sandbox-preload" aria-hidden="true">
            <iframe
              title="${escapeHtml(project.title)} mini sandbox"
              data-src="${escapeHtml(project.url)}"
              loading="eager"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
            ></iframe>
            <span class="preview-status">Loading sandbox</span>
          </div>
          <div class="stage-actions">
            <button class="button small primary launch-button" type="button" data-launch="${index}">Launch in stage</button>
            <a class="button small" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">Open live</a>
            <a class="button small ghost" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">Repo</a>
          </div>
        </article>
      `;
    })
    .join("");
  preloadRenderedSandboxes();
}

function syncSandboxStage(index, scrollStage = false) {
  const project = projects[index] || projects[0];
  state.selectedIndex = projects.indexOf(project);
  elements.stageTitle.textContent = project.title;
  elements.stageSummary.textContent = project.summary;
  elements.stageCategory.textContent = `${project.category} - ${project.language}`;
  elements.stageUrl.textContent = project.url;
  elements.stageLive.href = project.url;
  elements.stageRepo.href = project.repo;
  if (elements.frame.getAttribute("src") !== project.url) {
    elements.frame.src = project.url;
  }
  elements.frame.title = `${project.title} live sandbox`;

  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.index) === state.selectedIndex);
  });

  if (scrollStage) {
    document.querySelector(".sandbox-stage").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function selectProject(index, scrollStage = false) {
  syncSandboxStage(index, scrollStage);

  updateHologram(state.selectedIndex, false);
  highlightDestination(state.selectedIndex);
}

function loadMiniPreview(button) {
  const card = button.closest(".project-card");
  const frame = card.querySelector(".sandbox-preload iframe");
  frame.src = frame.dataset.src;
}

function preloadRenderedSandboxes() {
  document.querySelectorAll(".project-card .sandbox-preload iframe").forEach((frame, index) => {
    const status = frame.closest(".sandbox-preload")?.querySelector(".preview-status");
    frame.addEventListener(
      "load",
      () => {
        if (status) status.textContent = "Sandbox live";
      },
      { once: true }
    );
    window.setTimeout(() => {
      if (!frame.getAttribute("src")) {
        frame.src = frame.dataset.src;
      }
    }, 180 + index * 90);
  });
}

function loadVisiblePreviews() {
  document.querySelectorAll(".project-card .sandbox-preload iframe").forEach((frame) => {
    frame.src = frame.dataset.src;
  });
  elements.loadVisible.textContent = "Previews refreshed";
  window.setTimeout(() => {
    elements.loadVisible.textContent = "Refresh previews";
  }, 1600);
}

function wireProjectEvents() {
  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderFilters();
    renderProjects();
  });

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProjects();
  });

  elements.list.addEventListener("click", (event) => {
    const previewButton = event.target.closest("[data-preview]");
    if (previewButton) {
      event.stopPropagation();
      loadMiniPreview(previewButton);
      return;
    }

    const launchButton = event.target.closest("[data-launch]");
    const card = event.target.closest(".project-card");
    if (launchButton) {
      selectProject(Number(launchButton.dataset.launch), true);
      return;
    }

    if (card && !event.target.closest("a")) {
      selectProject(Number(card.dataset.index));
    }
  });

  elements.shuffle.addEventListener("click", () => {
    const filtered = getFilteredProjects();
    const next = filtered[Math.floor(Math.random() * filtered.length)] || projects[0];
    selectProject(projects.indexOf(next), true);
  });

  elements.loadVisible.addEventListener("click", loadVisiblePreviews);
}

function animateCounts() {
  const counters = document.querySelectorAll("[data-count]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    if (reduceMotion) {
      counter.textContent = target;
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.ceil(target / 42));
    const interval = window.setInterval(() => {
      current = Math.min(target, current + step);
      counter.textContent = current;
      if (current >= target) {
        window.clearInterval(interval);
      }
    }, 28);
  });
}

function wireClipboard() {
  elements.copyEmail.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("simon3m3ll3m@gmail.com");
      elements.copyEmail.textContent = "I copied my email";
    } catch {
      elements.copyEmail.textContent = "My email: simon3m3ll3m@gmail.com";
    }
  });
}

function setMissionHud(phase, objective, progress) {
  if (elements.missionPhase) elements.missionPhase.textContent = phase;
  if (elements.missionObjective) elements.missionObjective.textContent = objective;
  if (elements.missionProgress && Number.isFinite(progress)) {
    elements.missionProgress.style.width = `${Math.max(0, Math.min(100, progress))}%`;
  }
}

function setAutoPilot(enabled) {
  cosmicState.autoPilot = enabled;
  document.body.classList.toggle("manual-flight", !enabled);
  elements.autoPilot.textContent = enabled ? "Autopilot on" : "Manual flight";
  elements.autoPilot.setAttribute("aria-pressed", String(enabled));
  setMissionHud(
    enabled ? "Autopilot route active" : "Manual flight active",
    enabled ? "I am guiding the ship toward the next project destination." : "Use WASD, arrows, touch controls, or pointer movement to fly.",
    enabled ? 48 : 18
  );
}

function closeLaunchSequence() {
  if (!elements.launchSequence) return;
  elements.launchSequence.classList.remove("active");
  elements.launchSequence.classList.remove("docking-sequence");
  elements.launchSequence.setAttribute("aria-hidden", "true");
  cosmicState.launching = false;
  cosmicState.docking = false;
}

function dockActiveProject() {
  beginDocking(cosmicState.activeIndex, "Manual dock requested");
}

function updateTargetDisplay() {
  const project = projects[cosmicState.activeIndex] || projects[0];
  if (elements.targetName) {
    elements.targetName.textContent = `Target: ${project.title}`;
  }
}

function targetNextProject() {
  const next = (cosmicState.activeIndex + 1) % projects.length;
  cosmicState.activeIndex = next;
  updateHologram(next, true);
  highlightDestination(next);
  setAutoPilot(true);
  setMissionHud("Target locked", `I locked onto ${projects[next].title}. Fire sparkles or dock when ready.`, 62);
  playSoftSignal();
}

function beginDocking(index = cosmicState.activeIndex, reason = "Docking route active") {
  const project = projects[index] || projects[0];
  cosmicState.activeIndex = projects.indexOf(project);
  cosmicState.docking = true;
  cosmicState.docked = false;
  cosmicState.disengaged = false;
  document.body.classList.add("mission-launched", "docking-active");
  document.body.classList.remove("project-docked", "project-disengaged");
  updateHologram(cosmicState.activeIndex, true);
  highlightDestination(cosmicState.activeIndex);

  if (elements.launchSequence) {
    const label = elements.launchSequence.querySelector("span");
    if (label) label.textContent = "Docking sequence";
    elements.launchSequence.classList.add("active", "docking-sequence");
    elements.launchSequence.setAttribute("aria-hidden", "false");
    elements.launchStep.textContent = `Aligning with ${project.title}`;
    elements.launchMeter.style.width = "38%";
  }

  setMissionHud("Docking approach", `${reason}: aligning my ship with ${project.title}.`, 72);
  if (elements.shipStatus) {
    elements.shipStatus.textContent = `Docking with ${project.title}`;
  }
  playSoftSignal();

  window.setTimeout(() => {
    if (!cosmicState.docking) return;
    elements.launchStep.textContent = `Docked with ${project.title}`;
    elements.launchMeter.style.width = "100%";
    selectProject(cosmicState.activeIndex, true);
    cosmicState.dockedUntil = Date.now() + DOCK_MESSAGE_MS;
    cosmicState.docked = true;
    cosmicState.docking = false;
    document.body.classList.add("project-docked");
    document.body.classList.remove("docking-active");
    setMissionHud("Docking complete", "I opened the selected live sandbox in the project bay below.", 100);
    window.setTimeout(closeLaunchSequence, 520);
  }, DOCK_ANIMATION_MS);
}

function disengageProject() {
  cosmicState.docking = false;
  cosmicState.docked = false;
  cosmicState.disengaged = true;
  closeLaunchSequence();
  document.body.classList.remove("docking-active", "project-docked");
  document.body.classList.add("project-disengaged", "mission-launched");
  cosmicState.dockedUntil = Date.now() + DOCK_MESSAGE_MS;
  setAutoPilot(false);
  setMissionHud("Disengaged", "I pulled away from the sandbox. Choose another target or fly manually.", 26);
  if (elements.shipStatus) {
    elements.shipStatus.textContent = "Disengaged - choose another target or fly manually";
  }
  elements.missionControl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function fireSparkleSignal() {
  cosmicState.launched = true;
  document.body.classList.add("mission-launched");
  setAutoPilot(false);
  const project = projects[cosmicState.activeIndex] || projects[0];
  setMissionHud("Sparkle trigger armed", `I fired a sparkle signal toward ${project.title}.`, 70);
  if (elements.shipStatus) {
    elements.shipStatus.textContent = `Sparkle signal flying toward ${project.title}`;
  }
  if (typeof cosmicState.shootSparkles === "function") {
    cosmicState.shootSparkles(cosmicState.activeIndex);
  } else {
    beginDocking(cosmicState.activeIndex, "Sparkle signal reached target");
  }
  playSoftSignal();
}

function runLaunchSequence() {
  if (!elements.launchSequence) return;

  cosmicState.launching = true;
  const label = elements.launchSequence.querySelector("span");
  if (label) label.textContent = "Launch sequence";
  elements.launchSequence.classList.add("active");
  elements.launchSequence.classList.remove("docking-sequence");
  elements.launchSequence.setAttribute("aria-hidden", "false");
  LAUNCH_STEPS.forEach((step, index) => {
    window.setTimeout(() => {
      if (!cosmicState.launching) return;
      elements.launchStep.textContent = step;
      elements.launchMeter.style.width = `${((index + 1) / LAUNCH_STEPS.length) * 100}%`;
      setMissionHud("Launch sequence", step, ((index + 1) / LAUNCH_STEPS.length) * 100);
    }, index * 520);
  });

  window.setTimeout(() => {
    if (!cosmicState.launching) return;
    closeLaunchSequence();
    setMissionHud("Exploration mode", "Approach a glowing destination, then dock into its live sandbox.", 55);
  }, LAUNCH_STEPS.length * 520 + 720);
}

function updatePointerFromEvent(event) {
  const rect = elements.galaxyCanvas.getBoundingClientRect();
  cosmicState.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  cosmicState.pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
}

function isFlightInputBlocked(event) {
  return Boolean(
    event.target.closest(
      "a, button, input, textarea, select, iframe, .hologram-panel, .quick-destinations, .flight-deck"
    )
  );
}

function updateHologram(index, loadPreview = true) {
  const project = projects[index] || projects[0];
  cosmicState.activeIndex = projects.indexOf(project);
  syncSandboxStage(cosmicState.activeIndex, false);
  elements.holoTitle.textContent = project.title;
  elements.holoSummary.textContent = project.summary;
  elements.holoCategory.textContent = project.category;
  elements.holoTech.textContent = project.language || "Live web";
  elements.holoLive.href = project.url;
  elements.holoRepo.href = project.repo;

  if (elements.holoPreview.getAttribute("src") !== project.url) {
    elements.holoPreview.src = project.url;
    elements.holoPreview.title = `${project.title} mini demo`;
    cosmicState.lastPreviewIndex = cosmicState.activeIndex;
  }

  updateTargetDisplay();

  document.querySelectorAll(".quick-destination").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.index) === cosmicState.activeIndex);
  });

  if (elements.shipStatus) {
    elements.shipStatus.textContent = `Scanning ${project.title}`;
  }
}

function highlightDestination(index) {
  cosmicState.destinationMeshes.forEach((mesh) => {
    const active = mesh.userData.index === index;
    mesh.scale.setScalar(active ? 1.45 : 1);
    if (mesh.material?.emissive) {
      mesh.material.emissiveIntensity = active ? 1.45 : 0.55;
    }
  });
  cosmicState.destinations.forEach((destination, destinationIndex) => {
    if (destination.reticle) {
      destination.reticle.visible = destinationIndex === index;
    }
  });
}

function renderQuickDestinations() {
  elements.quickDestinationList.innerHTML = projects
    .map((project, index) => `
      <button class="quick-destination ${index === cosmicState.activeIndex ? "active" : ""}" type="button" data-index="${index}">
        ${escapeHtml(project.title)}
        <span>${escapeHtml(project.category)} - ${escapeHtml(project.language || "Live web")}</span>
      </button>
    `)
    .join("");

  elements.destinationCount.textContent = `${projects.length} destinations online`;
}

function wireCosmicControls() {
  elements.beginExploration.addEventListener("click", () => {
    cosmicState.launched = true;
    document.body.classList.add("mission-launched");
    setAutoPilot(true);
    runLaunchSequence();
    elements.destinationPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    updateHologram(cosmicState.activeIndex, true);
    playSoftSignal();
  });

  elements.autoPilot.addEventListener("click", () => {
    setAutoPilot(!cosmicState.autoPilot);
    elements.shipStatus.textContent = cosmicState.autoPilot ? "Autopilot scanning destinations" : "Manual controls active";
    playSoftSignal();
  });

  elements.audioToggle.addEventListener("click", async () => {
    const enabled = await toggleAmbientAudio();
    elements.audioToggle.textContent = enabled ? "Ambient audio on" : "Ambient audio off";
    elements.audioToggle.setAttribute("aria-pressed", String(enabled));
  });

  elements.enterSandbox.addEventListener("click", () => {
    dockActiveProject();
  });

  elements.targetNext.addEventListener("click", targetNextProject);

  elements.sparkleTrigger.addEventListener("click", fireSparkleSignal);

  elements.dockProject.addEventListener("click", dockActiveProject);

  elements.disengageProject.addEventListener("click", disengageProject);

  elements.stageDisengage.addEventListener("click", disengageProject);

  elements.closeControls.addEventListener("click", () => {
    document.body.classList.add("controls-hidden");
    elements.showControls.hidden = false;
  });

  elements.showControls.addEventListener("click", () => {
    document.body.classList.remove("controls-hidden");
    elements.showControls.hidden = true;
  });

  elements.quickToggle.addEventListener("click", () => {
    const open = elements.quickToggle.getAttribute("aria-expanded") !== "true";
    elements.quickToggle.setAttribute("aria-expanded", String(open));
    elements.quickToggle.closest(".quick-destinations").classList.toggle("open", open);
  });

  elements.quickDestinationList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    const index = Number(button.dataset.index);
    cosmicState.activeIndex = index;
    setAutoPilot(true);
    updateHologram(index, true);
    highlightDestination(index);
    playSoftSignal();
  });

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (FLIGHT_KEYS.has(key)) {
      cosmicState.launched = true;
      document.body.classList.add("mission-launched");
      cosmicState.keys.add(key);
      setAutoPilot(false);
    }
  });

  window.addEventListener("keyup", (event) => {
    cosmicState.keys.delete(event.key.toLowerCase());
  });

  const flightSurface = elements.missionControl || elements.galaxyCanvas;

  flightSurface.addEventListener("pointermove", (event) => {
    updatePointerFromEvent(event);
    if (cosmicState.dragging) {
      setAutoPilot(false);
    }
  });

  flightSurface.addEventListener("pointerdown", (event) => {
    if (isFlightInputBlocked(event)) return;
    updatePointerFromEvent(event);
    cosmicState.dragging = true;
    cosmicState.launched = true;
    document.body.classList.add("mission-launched");
    setAutoPilot(false);
    flightSurface.setPointerCapture?.(event.pointerId);
    setMissionHud("Manual flight active", "Drag through space to pilot my ship toward a project destination.", 24);
  });

  flightSurface.addEventListener("pointerup", (event) => {
    cosmicState.dragging = false;
    flightSurface.releasePointerCapture?.(event.pointerId);
  });

  flightSurface.addEventListener("pointercancel", () => {
    cosmicState.dragging = false;
  });

  elements.touchFlightButtons.forEach((button) => {
    const key = button.dataset.flight;
    const start = (event) => {
      event.preventDefault();
      cosmicState.launched = true;
      document.body.classList.add("mission-launched");
      cosmicState.keys.add(key);
      setAutoPilot(false);
    };
    const stop = (event) => {
      event.preventDefault();
      cosmicState.keys.delete(key);
    };
    button.addEventListener("pointerdown", start);
    button.addEventListener("pointerup", stop);
    button.addEventListener("pointerleave", stop);
    button.addEventListener("pointercancel", stop);
  });

  elements.dockButton.addEventListener("click", () => {
    dockActiveProject();
  });
}

async function toggleAmbientAudio() {
  if (!cosmicState.audio) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return false;
    const context = new AudioContext();
    const gain = context.createGain();
    gain.gain.value = 0.018;
    gain.connect(context.destination);

    const oscillators = [82, 123, 185].map((frequency) => {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      oscillator.start();
      return oscillator;
    });

    cosmicState.audio = { context, gain, oscillators, enabled: true };
    return true;
  }

  if (cosmicState.audio.context.state === "suspended") {
    await cosmicState.audio.context.resume();
    cosmicState.audio.enabled = true;
    return true;
  }

  await cosmicState.audio.context.suspend();
  cosmicState.audio.enabled = false;
  return false;
}

function playSoftSignal() {
  if (!cosmicState.audio?.enabled || cosmicState.audio.context.state !== "running") return;
  const oscillator = cosmicState.audio.context.createOscillator();
  const gain = cosmicState.audio.context.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.value = 620;
  gain.gain.setValueAtTime(0.0001, cosmicState.audio.context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.05, cosmicState.audio.context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, cosmicState.audio.context.currentTime + 0.28);
  oscillator.connect(gain);
  gain.connect(cosmicState.audio.context.destination);
  oscillator.start();
  oscillator.stop(cosmicState.audio.context.currentTime + 0.3);
}

function startCosmicScene() {
  if (!elements.galaxyCanvas || !window.THREE) {
    document.body.classList.add("no-webgl");
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const THREE = window.THREE;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050711, 0.012);

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 900);
  const renderer = new THREE.WebGLRenderer({
    canvas: elements.galaxyCanvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true
  });
  renderer.setClearColor(0x03040d, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));

  const ambient = new THREE.AmbientLight(0x8ecfff, 0.52);
  const keyLight = new THREE.PointLight(0xc7ff5b, 1.2, 160);
  keyLight.position.set(10, 24, 18);
  scene.add(ambient, keyLight);

  const ship = createShip(THREE);
  ship.position.set(0, 0, 14);
  cosmicState.ship = ship;
  cosmicState.velocity = new THREE.Vector3();
  scene.add(ship);

  const starField = createStarField(THREE, reduceMotion ? 680 : 1400);
  const nebula = createNebula(THREE, reduceMotion ? 160 : 360);
  scene.add(starField, nebula);

  const sparkleGroup = new THREE.Group();
  const impactGroup = new THREE.Group();
  scene.add(sparkleGroup, impactGroup);
  cosmicState.sparkleGroup = sparkleGroup;
  cosmicState.impactGroup = impactGroup;

  const destinationGroup = new THREE.Group();
  scene.add(destinationGroup);
  const destinations = createDestinations(THREE, destinationGroup);
  cosmicState.destinations = destinations;
  cosmicState.shootSparkles = (index) => launchSparkleShot(THREE, index, ship, destinations);

  const raycaster = new THREE.Raycaster();
  const clickMouse = new THREE.Vector2();

  (elements.missionControl || elements.galaxyCanvas).addEventListener("click", (event) => {
    if (isFlightInputBlocked(event)) return;
    const rect = elements.galaxyCanvas.getBoundingClientRect();
    clickMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    clickMouse.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    raycaster.setFromCamera(clickMouse, camera);
    const hits = raycaster.intersectObjects(cosmicState.destinationMeshes, true);
    if (!hits.length) return;
    const index = hits[0].object.userData.index ?? hits[0].object.parent?.userData.index;
    if (Number.isInteger(index)) {
      cosmicState.activeIndex = index;
      setAutoPilot(true);
      updateHologram(index, true);
      highlightDestination(index);
      playSoftSignal();
    }
  });

  function resize() {
    const rect = elements.galaxyCanvas.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function animate(time = 0) {
    resize();
    const t = time * 0.001;
    starField.rotation.y = t * 0.015;
    nebula.rotation.y = -t * 0.01;
    destinationGroup.rotation.y = Math.sin(t * 0.08) * 0.08;

    moveShip(ship, destinations, reduceMotion);
    updateSparkleShots(THREE, reduceMotion);
    updateImpactBursts();
    updateNearestDestination(ship, destinations);

    ship.rotation.z = THREE.MathUtils.lerp(ship.rotation.z, -cosmicState.pointer.x * 0.34, 0.04);
    ship.rotation.x = THREE.MathUtils.lerp(ship.rotation.x, cosmicState.pointer.y * 0.16, 0.04);
    ship.traverse((thruster) => {
      if (!thruster.userData.thruster) return;
      const pulse = 1 + Math.sin(t * 18) * 0.18 + (cosmicState.autoPilot ? 0.16 : 0.32);
      thruster.scale.set(1, pulse, 1);
      thruster.material.opacity = cosmicState.autoPilot ? 0.72 : 0.9;
    });

    const follow = new THREE.Vector3(ship.position.x, ship.position.y + 5.8, ship.position.z + 18);
    camera.position.lerp(follow, 0.075);
    const lookTarget = destinations[cosmicState.activeIndex]?.position || ship.position;
    camera.lookAt(lookTarget.x, lookTarget.y, lookTarget.z);

    destinations.forEach((destination, index) => {
      destination.group.rotation.y += 0.004 + (index % 5) * 0.0007;
      destination.group.children.forEach((child) => {
        if (child.userData.orbit) child.rotation.z += 0.008;
      });
    });

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  resize();
  highlightDestination(cosmicState.activeIndex);
  updateHologram(cosmicState.activeIndex, true);
  animate();
}

function createShip(THREE) {
  const ship = new THREE.Group();
  ship.scale.setScalar(1.7);

  const hullMaterial = new THREE.MeshStandardMaterial({
    color: 0xf4fbff,
    metalness: 0.46,
    roughness: 0.28,
    emissive: 0x103d66,
    emissiveIntensity: 0.22
  });
  const trimMaterial = new THREE.MeshStandardMaterial({
    color: 0x61f4ff,
    metalness: 0.34,
    roughness: 0.24,
    emissive: 0x1fb8ff,
    emissiveIntensity: 0.62
  });
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: 0x9bf7ff,
    metalness: 0.08,
    roughness: 0.08,
    emissive: 0x61f4ff,
    emissiveIntensity: 0.85,
    transparent: true,
    opacity: 0.84
  });
  const engineMaterial = new THREE.MeshStandardMaterial({
    color: 0x1b2848,
    metalness: 0.58,
    roughness: 0.26,
    emissive: 0xa76cff,
    emissiveIntensity: 0.42
  });

  const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.58, 3.2, 28), hullMaterial);
  fuselage.rotation.x = Math.PI / 2;

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.48, 1.02, 28), hullMaterial);
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = -2.08;

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.34, 22, 14), glassMaterial);
  cockpit.scale.set(1, 0.62, 1.25);
  cockpit.position.set(0, 0.42, -0.8);

  const leftWing = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.08, 0.64), trimMaterial);
  leftWing.position.set(-0.86, -0.05, 0.18);
  leftWing.rotation.z = 0.2;
  leftWing.rotation.y = -0.18;
  const rightWing = leftWing.clone();
  rightWing.position.x = 0.86;
  rightWing.rotation.z = -0.2;
  rightWing.rotation.y = 0.18;

  const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.86, 0.54), trimMaterial);
  tailFin.position.set(0, 0.5, 1.26);
  tailFin.rotation.x = -0.22;

  const leftFin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.52, 0.5), trimMaterial);
  leftFin.position.set(-0.52, -0.38, 1.32);
  leftFin.rotation.z = -0.52;
  const rightFin = leftFin.clone();
  rightFin.position.x = 0.52;
  rightFin.rotation.z = 0.52;

  const engineCore = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.4, 0.8, 22), engineMaterial);
  engineCore.rotation.x = Math.PI / 2;
  engineCore.position.z = 1.86;
  const leftEngine = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.72, 18), engineMaterial);
  leftEngine.rotation.x = Math.PI / 2;
  leftEngine.position.set(-0.48, -0.08, 1.68);
  const rightEngine = leftEngine.clone();
  rightEngine.position.x = 0.48;

  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 8), glassMaterial);
  beacon.position.set(0, 0.86, 0.52);

  const flameMaterial = new THREE.MeshBasicMaterial({
    color: 0xa76cff,
    transparent: true,
    opacity: 0.78
  });
  const mainFlame = new THREE.Mesh(new THREE.ConeGeometry(0.34, 1.52, 22), flameMaterial.clone());
  mainFlame.rotation.x = Math.PI / 2;
  mainFlame.position.z = 2.55;
  mainFlame.userData.thruster = true;
  const leftFlame = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.92, 16), flameMaterial.clone());
  leftFlame.rotation.x = Math.PI / 2;
  leftFlame.position.set(-0.48, -0.08, 2.22);
  leftFlame.userData.thruster = true;
  const rightFlame = leftFlame.clone();
  rightFlame.material = flameMaterial.clone();
  rightFlame.position.x = 0.48;
  rightFlame.userData.thruster = true;

  const engineGlow = new THREE.PointLight(0xa76cff, 0.75, 16);
  engineGlow.position.set(0, 0, 2.35);

  ship.add(
    fuselage,
    nose,
    cockpit,
    leftWing,
    rightWing,
    tailFin,
    leftFin,
    rightFin,
    engineCore,
    leftEngine,
    rightEngine,
    beacon,
    mainFlame,
    leftFlame,
    rightFlame,
    engineGlow
  );
  return ship;
}

function createStarField(THREE, count) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const radius = 80 + Math.random() * 310;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[index * 3 + 1] = radius * Math.cos(phi) * 0.62;
    positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 120;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: 0xeaf9ff,
      size: 0.9,
      transparent: true,
      opacity: 0.82,
      sizeAttenuation: true
    })
  );
}

function createNebula(THREE, count) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [
    new THREE.Color(0x61f4ff),
    new THREE.Color(0xa76cff),
    new THREE.Color(0xa76cff),
    new THREE.Color(0xc7ff5b)
  ];

  for (let index = 0; index < count; index += 1) {
    const radius = 18 + Math.random() * 130;
    const angle = index * 0.21;
    positions[index * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 18;
    positions[index * 3 + 1] = (Math.random() - 0.5) * 26;
    positions[index * 3 + 2] = Math.sin(angle) * radius - 80 + (Math.random() - 0.5) * 30;
    const color = palette[index % palette.length];
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 3.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.62,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
}

function createProjectLabel(THREE, text, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(5, 8, 19, 0.72)";
  context.strokeStyle = color.getStyle();
  context.lineWidth = 5;
  roundRect(context, 14, 24, 228, 74, 18);
  context.fill();
  context.stroke();
  context.fillStyle = "#ffffff";
  context.font = "800 34px Inter, Arial, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, 128, 62, 202);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(4.4, 2.2, 1);
  return sprite;
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function addProjectIdentity(THREE, group, project, color) {
  const glyph = PROJECT_GLYPHS[project.category] || "WEB";
  const label = createProjectLabel(THREE, glyph, color);
  label.position.set(0, 2.55, 0);
  group.add(label);

  const accentMaterial = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.72,
    wireframe: true
  });

  if (project.category === "Finance") {
    const coin = new THREE.Mesh(new THREE.TorusGeometry(0.78, 0.05, 8, 42), accentMaterial);
    coin.rotation.y = Math.PI / 2;
    coin.position.set(0, -1.15, 0);
    coin.userData.orbit = true;
    group.add(coin);
  } else if (project.category === "Commerce") {
    const leafA = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), accentMaterial);
    leafA.scale.set(1.8, 0.72, 0.48);
    leafA.position.set(-0.62, 1.18, 0);
    const leafB = leafA.clone();
    leafB.position.x = 0.62;
    group.add(leafA, leafB);
  } else if (project.category === "SAP + Learning") {
    [-0.74, 0, 0.74].forEach((x, step) => {
      const node = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.28), accentMaterial);
      node.position.set(x, -1.25, step === 1 ? 0.32 : -0.18);
      node.userData.orbit = true;
      group.add(node);
    });
  } else if (project.category === "Wellness") {
    const calmRing = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.025, 8, 52), accentMaterial);
    calmRing.rotation.x = Math.PI / 2;
    calmRing.position.y = -0.98;
    calmRing.userData.orbit = true;
    group.add(calmRing);
  } else if (project.category === "Travel") {
    const compass = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.72, 4), accentMaterial);
    compass.rotation.x = Math.PI / 2;
    compass.position.set(0, -1.2, 0);
    compass.userData.orbit = true;
    group.add(compass);
  } else if (project.category === "Game") {
    const token = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.28, 0.18), accentMaterial);
    token.position.set(0, -1.18, 0);
    token.userData.orbit = true;
    group.add(token);
  }
}

function createTargetReticle(THREE, color) {
  const reticle = new THREE.Group();
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.72,
    wireframe: true
  });
  const outer = new THREE.Mesh(new THREE.TorusGeometry(2.32, 0.035, 8, 80), material);
  const inner = new THREE.Mesh(new THREE.TorusGeometry(1.84, 0.024, 8, 70), material.clone());
  inner.rotation.x = Math.PI / 2;
  outer.userData.orbit = true;
  inner.userData.orbit = true;
  reticle.add(outer, inner);
  reticle.visible = false;
  return reticle;
}

function launchSparkleShot(THREE, index, ship, destinations) {
  const destination = destinations[index];
  if (!destination || !cosmicState.sparkleGroup) return;

  const start = ship.position.clone().add(new THREE.Vector3(0, 0.18, -2.75));
  const target = destination.position.clone();
  const color = new THREE.Color(destination.project.accent || "#a76cff");
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.95
  });
  const group = new THREE.Group();
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 10), material.clone());
  group.add(core);

  for (let step = 0; step < 10; step += 1) {
    const sparkle = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), material.clone());
    sparkle.position.set((Math.random() - 0.5) * 0.9, (Math.random() - 0.5) * 0.9, step * 0.18);
    sparkle.material.opacity = 0.72 - step * 0.045;
    group.add(sparkle);
  }

  group.position.copy(start);
  cosmicState.sparkleGroup.add(group);
  cosmicState.sparkleShots.push({
    group,
    start,
    target,
    targetIndex: index,
    progress: 0
  });
}

function updateSparkleShots(THREE, reduceMotion) {
  const stepSize = reduceMotion ? 0.09 : 0.035;
  cosmicState.sparkleShots = cosmicState.sparkleShots.filter((shot) => {
    shot.progress = Math.min(1, shot.progress + stepSize);
    const eased = 1 - Math.pow(1 - shot.progress, 3);
    shot.group.position.lerpVectors(shot.start, shot.target, eased);
    shot.group.position.y += Math.sin(eased * Math.PI) * 5.2;
    shot.group.rotation.z += 0.18;
    shot.group.scale.setScalar(1 + Math.sin(eased * Math.PI) * 0.55);

    if (shot.progress >= 1) {
      cosmicState.sparkleGroup.remove(shot.group);
      createImpactBurst(THREE, shot.target, shot.targetIndex);
      beginDocking(shot.targetIndex, "Sparkle signal reached target");
      return false;
    }
    return true;
  });
}

function createImpactBurst(THREE, position, index) {
  if (!cosmicState.impactGroup) return;
  const project = projects[index] || projects[0];
  const color = new THREE.Color(project.accent || "#61f4ff");
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.86,
    wireframe: true
  });
  const burst = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 8, 48), material);
  burst.add(ring);
  for (let step = 0; step < 14; step += 1) {
    const shard = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), material.clone());
    const angle = (step / 14) * Math.PI * 2;
    shard.position.set(Math.cos(angle) * 0.28, Math.sin(angle) * 0.28, (Math.random() - 0.5) * 0.4);
    burst.add(shard);
  }
  burst.position.copy(position);
  cosmicState.impactGroup.add(burst);
  cosmicState.impactBursts.push({ burst, progress: 0 });
}

function updateImpactBursts() {
  cosmicState.impactBursts = cosmicState.impactBursts.filter((impact) => {
    impact.progress += 0.035;
    impact.burst.scale.setScalar(1 + impact.progress * 9);
    impact.burst.rotation.z += 0.03;
    impact.burst.children.forEach((child) => {
      if (child.material) child.material.opacity = Math.max(0, 0.86 - impact.progress);
    });
    if (impact.progress >= 1) {
      cosmicState.impactGroup.remove(impact.burst);
      return false;
    }
    return true;
  });
}

function createDestinations(THREE, parent) {
  const categoryShapes = {
    "SAP + Learning": "station",
    Product: "satellite",
    Creative: "nebula",
    Commerce: "planet",
    Wellness: "moon",
    Finance: "station",
    Climate: "planet",
    Travel: "planet",
    Game: "asteroid",
    Client: "satellite",
    Portfolio: "station",
    Productivity: "moon"
  };

  return projects.map((project, index) => {
    const angle = index * 0.58;
    const radius = 22 + index * 0.82;
    const position = new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(index * 0.74) * 6,
      Math.sin(angle) * radius - 68 - index * 0.18
    );
    const group = new THREE.Group();
    group.position.copy(position);
    group.userData.index = index;

    const color = new THREE.Color(project.accent || "#61f4ff");
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.42,
      metalness: 0.16,
      emissive: color,
      emissiveIntensity: 0.55
    });
    const wireMaterial = new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity: 0.34
    });

    const shape = categoryShapes[project.category] || "planet";
    let core;
    if (shape === "station") {
      core = new THREE.Mesh(new THREE.OctahedronGeometry(1.05, 1), material);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.035, 8, 64), wireMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.userData.orbit = true;
      group.add(ring);
    } else if (shape === "satellite") {
      core = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.0, 1.0), material);
      const panel = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.05, 0.78), wireMaterial);
      panel.userData.orbit = true;
      group.add(panel);
    } else if (shape === "asteroid") {
      core = new THREE.Mesh(new THREE.DodecahedronGeometry(1.12, 0), material);
    } else if (shape === "nebula") {
      core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 1), material);
      const halo = new THREE.Mesh(new THREE.SphereGeometry(2.05, 24, 12), wireMaterial);
      halo.userData.orbit = true;
      group.add(halo);
    } else if (shape === "moon") {
      core = new THREE.Mesh(new THREE.SphereGeometry(0.92, 22, 16), material);
      const orbit = new THREE.Mesh(new THREE.TorusGeometry(1.52, 0.02, 8, 50), wireMaterial);
      orbit.rotation.y = Math.PI / 2.6;
      orbit.userData.orbit = true;
      group.add(orbit);
    } else {
      core = new THREE.Mesh(new THREE.SphereGeometry(1.18, 24, 16), material);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.72, 0.04, 8, 60), wireMaterial);
      ring.rotation.x = Math.PI / 2.5;
      ring.userData.orbit = true;
      group.add(ring);
    }

    core.userData.index = index;
    core.userData.project = project.title;
    addProjectIdentity(THREE, group, project, color);
    const reticle = createTargetReticle(THREE, color);
    reticle.userData.orbit = true;
    group.add(reticle);
    group.add(core);
    group.scale.setScalar(project.featured ? 1.55 : 1.35);
    parent.add(group);
    cosmicState.destinationMeshes.push(core);
    return { project, group, core, reticle, position };
  });
}

function moveShip(ship, destinations, reduceMotion) {
  const THREE = window.THREE;
  if (!cosmicState.velocity) cosmicState.velocity = new THREE.Vector3();
  if (!cosmicState.launched) {
    cosmicState.velocity.multiplyScalar(0.88);
    ship.position.lerp(new THREE.Vector3(0, 0, 14), reduceMotion ? 0.05 : 0.025);
    return;
  }

  const target = destinations[cosmicState.activeIndex]?.position;
  if (cosmicState.autoPilot && target) {
    const desired = target.clone().add(new THREE.Vector3(0, 1.2, 8));
    const force = desired.clone().sub(ship.position).multiplyScalar(reduceMotion ? 0.018 : 0.012);
    cosmicState.velocity.lerp(force, reduceMotion ? 0.12 : 0.07);
    cosmicState.velocity.clampLength(0, reduceMotion ? 0.38 : 0.74);
    ship.position.add(cosmicState.velocity);
    if (ship.position.distanceTo(desired) < 3.2 && !reduceMotion) {
      const next = (cosmicState.activeIndex + 1) % projects.length;
      if (Math.random() > 0.988) {
        cosmicState.activeIndex = next;
        updateHologram(next, false);
        highlightDestination(next);
      }
    }
    return;
  }

  const speed = reduceMotion ? 0.1 : 0.18;
  const forward = cosmicState.keys.has("w") || cosmicState.keys.has("arrowup") ? -speed : 0;
  const back = cosmicState.keys.has("s") || cosmicState.keys.has("arrowdown") ? speed : 0;
  const left = cosmicState.keys.has("a") || cosmicState.keys.has("arrowleft") ? -speed : 0;
  const right = cosmicState.keys.has("d") || cosmicState.keys.has("arrowright") ? speed : 0;
  const thrust = new THREE.Vector3(
    left + right + cosmicState.pointer.x * (cosmicState.dragging ? 0.06 : 0.024),
    cosmicState.pointer.y * (cosmicState.dragging ? 0.05 : 0.018),
    forward + back
  );
  cosmicState.velocity.add(thrust);
  cosmicState.velocity.multiplyScalar(reduceMotion ? 0.82 : 0.9);
  cosmicState.velocity.clampLength(0, reduceMotion ? 0.34 : 0.82);
  ship.position.add(cosmicState.velocity);
  ship.position.x = THREE.MathUtils.clamp(ship.position.x, -72, 72);
  ship.position.y = THREE.MathUtils.clamp(ship.position.y, -20, 24);
  ship.position.z = THREE.MathUtils.clamp(ship.position.z, -140, 34);
}

function updateNearestDestination(ship, destinations) {
  let nearest = cosmicState.activeIndex;
  let nearestDistance = Infinity;
  destinations.forEach((destination, index) => {
    const distance = ship.position.distanceTo(destination.position);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = index;
    }
  });

  if (!cosmicState.launched) {
    if (elements.shipStatus) {
      elements.shipStatus.textContent = "Mission Control ready - press Launch Portfolio";
    }
    setMissionHud("Mission Control online", "Launch when ready, then pilot toward a glowing destination.", 8);
    return;
  }

  if (!cosmicState.autoPilot && nearest !== cosmicState.activeIndex && nearestDistance < 13) {
    cosmicState.activeIndex = nearest;
    updateHologram(nearest, false);
    highlightDestination(nearest);
  }

  if (elements.shipStatus) {
    const project = projects[cosmicState.activeIndex];
    const distance = Math.max(0, Math.round(nearestDistance));
    const speed = cosmicState.velocity ? Math.round(cosmicState.velocity.length() * 100) : 0;
    const dockReady = nearestDistance < 8;
    const mode = cosmicState.autoPilot ? "Autopilot" : "Manual";
    elements.shipStatus.textContent = dockReady
      ? `${mode} docking range: ${project.title} - press Dock`
      : `${mode} approaching ${project.title} - ${distance} AU - speed ${speed}`;
    if (!cosmicState.launching && Date.now() > cosmicState.dockedUntil) {
      setMissionHud(
        dockReady ? "Docking range" : `${mode} navigation`,
        dockReady ? `I am close enough to enter ${project.title}.` : `Approaching ${project.title} through my project universe.`,
        dockReady ? 100 : Math.max(10, Math.min(92, 100 - nearestDistance * 2.4))
      );
    }
  }
}

renderFilters();
renderProjects();
selectProject(2);
wireProjectEvents();
renderQuickDestinations();
wireCosmicControls();
wireClipboard();
animateCounts();
startCosmicScene();

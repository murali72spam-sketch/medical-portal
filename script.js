/* =========================================================
   Clinical Portal 2026
   Global JavaScript for Dr. Murali Gopal's paediatric portal
   ========================================================= */

(() => {
  "use strict";

  const categoryOrder = [
    "Respiratory",
    "Gastrointestinal",
    "Nutrition & Feeding",
    "Vaccination",
    "Fever & Infections",
    "Skin & Allergy",
    "Growth & Development",
    "Medication Information",
    "Parent Education"
  ];

  const typeLabels = {
    "parent-guide": "Parent Guide",
    "interactive-tool": "Interactive Tool",
    "reference-chart": "Reference Chart",
    "calculator": "Calculator"
  };

  const allSubgroupsLabel = "All in this category";

  const subgroupDefinitions = {
    "Growth & Development": [
      "Development, Speech & Behaviour",
      "School, Learning & Stress",
      "Puberty & Teen Health",
      "Growth, Thyroid & Endocrine",
      "Sleep, Habits & Toileting",
      "Bones, Posture & Movement"
    ],
    "Fever & Infections": [
      "Fever, Viral Illnesses & Rashes",
      "Respiratory, Ear & Throat Infections",
      "Skin & Eye Infections",
      "Serious Warning-Sign Illnesses",
      "Mosquito, Tropical & Seasonal Infections",
      "Urine, Bone & Other Infections"
    ],
    "Parent Education": [
      "Newborn & Baby Care",
      "Safety, First Aid & Injury",
      "Everyday Parenting & Hygiene",
      "Digital, Teen & Travel Guidance",
      "Urgent Care & Red Flags"
    ],
    "Vaccination": [
      "Vaccine Basics & FAQs",
      "Missed Doses, Records & Catch-up",
      "Vaccine Aftercare & Reactions",
      "Special Situation Vaccines",
      "Travel & Adolescent Vaccines"
    ],
    "Nutrition & Feeding": [
      "Infant Feeding",
      "Weaning & Complementary Feeding",
      "Toddler and Preschool Feeding",
      "School-age and Teen Nutrition",
      "Growth, Weight & Micronutrients"
    ]
  };

  const subgroupOverrides = {
    "Growth & Development": {
      "adolescent-mental-health-warning-signs": "Puberty & Teen Health",
      "healthy-teen-independence-parent-guide": "Puberty & Teen Health",
      "positive-behaviour-guidance-parent-guide": "Development, Speech & Behaviour",
      "thumb-sucking-parent-guide": "Sleep, Habits & Toileting"
    },
    "Parent Education": {
      "child-travel-health": "Digital, Teen & Travel Guidance",
      "red-flags-urgent-care": "Urgent Care & Red Flags"
    },
    "Vaccination": {
      "vaccination-faq": "Vaccine Basics & FAQs",
      "vaccination-why-it-matters": "Vaccine Basics & FAQs"
    }
  };

  const state = {
    resources: [],
    activeCategory: "All",
    activeSubgroup: allSubgroupsLabel,
    searchTerm: ""
  };

  const searchContexts = {};

  const premiumPilotSlugs = [
    "fever-in-children",
    "dengue-fever",
    "eczema",
    "asthma-in-children",
    "complementary-feeding-after-6-months"
  ];

  document.addEventListener("DOMContentLoaded", () => {
    markResourcePage();
    setupDraftResourceNotice();
    setupNavigation();
    setCurrentYear();
    setupSearch();
    setupFilters();
    setupSubgroupFilters();
    setupClearFilters();
    setupHeroSearch();
    setupCategoryJumps();
    setupLaneFilters();
    loadResources();
  });

  function markResourcePage() {
    if (getMetaContent("resource_type")) {
      document.body.classList.add("resource-page");
    }
  }

  function setupDraftResourceNotice() {
    const status = getMetaContent("status").toLowerCase();
    const medicalReviewStatus = getMetaContent("medical_review_status").toLowerCase();
    const title = getMetaContent("title");

    if (!status && !medicalReviewStatus && !title) return;

    const isDraftResource =
      status === "draft" ||
      medicalReviewStatus === "pending-clinician-review" ||
      medicalReviewStatus === "needs-verification";

    if (!isDraftResource) return;

    ensureDraftNoindex();
    document.body.classList.add("resource-is-draft");

    if (document.querySelector("[data-draft-resource-notice]")) return;

    const notice = document.createElement("aside");
    const container = document.createElement("div");
    const lead = document.createElement("p");
    const followup = document.createElement("p");

    notice.className = "draft-resource-notice";
    notice.setAttribute("role", "note");
    notice.setAttribute("aria-label", "Draft resource notice");
    notice.setAttribute("data-draft-resource-notice", "");

    container.className = "draft-resource-notice-inner";

    lead.textContent =
      "Draft resource — clinician review pending. This page is under development for Dr. Murali Gopal’s Clinical Portal 2026. It is provided for internal review only and should not be used as final medical advice.";
    followup.textContent =
      "Please confirm all medical decisions with a qualified clinician.";

    container.append(lead, followup);
    notice.appendChild(container);

    const main = document.querySelector("main");
    if (main) {
      main.prepend(notice);
      return;
    }

    const header = document.querySelector(".site-header, header");
    if (header && header.parentNode) {
      header.insertAdjacentElement("afterend", notice);
      return;
    }

    document.body.prepend(notice);
  }

  function getMetaContent(name) {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta ? (meta.getAttribute("content") || "").trim() : "";
  }

  function ensureDraftNoindex() {
    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }

    robots.setAttribute("content", "noindex, nofollow");
  }

  function setupNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-site-nav]");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach((item) => {
      item.textContent = String(new Date().getFullYear());
    });
  }

  function setupSearch() {
    const input = document.querySelector("[data-resource-search]");
    const panel = document.querySelector('[data-search-results="library"]');
    if (!input) return;

    registerSearchContext("library", input, panel);

    input.addEventListener("input", (event) => {
      state.searchTerm = normalizeQuery(event.target.value);
      state.activeSubgroup = allSubgroupsLabel;
      renderResources();
      renderSearchResults("library");
    });
  }

  function setupFilters() {
    const buttons = document.querySelectorAll("[data-category-filter]");
    if (!buttons.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.disabled) return;

        setActiveCategory(button.dataset.categoryFilter || "All");
        renderResources();
      });
    });
  }

  function setupSubgroupFilters() {
    const row = document.querySelector("[data-subgroup-filter-row]");
    if (!row) return;

    row.addEventListener("click", (event) => {
      const button = event.target.closest("[data-subgroup-filter]");
      if (!button || !row.contains(button)) return;

      state.activeSubgroup = button.dataset.subgroupFilter || allSubgroupsLabel;
      renderResources();
    });
  }

  function setupClearFilters() {
    const button = document.querySelector("[data-clear-filters]");
    if (!button) return;

    button.addEventListener("click", () => {
      clearSearchAndFilters({ focus: true });
    });
  }

  function setupHeroSearch() {
    const form = document.querySelector("[data-hero-search-form]");
    const input = document.querySelector("[data-hero-resource-search]");
    const panel = document.querySelector('[data-search-results="hero"]');
    const libraryInput = document.querySelector("[data-resource-search]");

    if (!form || !input) return;

    registerSearchContext("hero", input, panel);

    input.addEventListener("input", () => {
      renderSearchResults("hero");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const value = input.value.trim();
      const query = normalizeQuery(value);

      if (libraryInput) {
        libraryInput.value = value;
      }

      state.searchTerm = query;
      setActiveCategory("All");
      renderResources();
      handleSearchSubmit("hero");
    });
  }

  function registerSearchContext(name, input, panel) {
    searchContexts[name] = {
      input,
      panel,
      activeIndex: -1,
      results: []
    };

    input.addEventListener("keydown", (event) => {
      handleSearchKeydown(name, event);
    });

    input.addEventListener("focus", () => {
      if (normalizeQuery(input.value).length >= 2) {
        renderSearchResults(name);
      }
    });
  }

  function handleSearchKeydown(name, event) {
    const context = searchContexts[name];
    if (!context) return;

    if (event.key === "Escape") {
      event.preventDefault();
      hideSearchResults(name, { clear: true });
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (!context.results.length) renderSearchResults(name);
      if (!context.results.length) return;

      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        context.activeIndex === -1
          ? direction === 1
            ? 0
            : context.results.length - 1
          : (context.activeIndex + direction + context.results.length) %
            context.results.length;

      setActiveSearchResult(name, nextIndex);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchSubmit(name);
    }
  }

  function handleSearchSubmit(name) {
    const context = searchContexts[name];
    if (!context) return;

    const query = normalizeQuery(context.input.value);
    if (query.length < 2) {
      renderSearchResults(name);
      return;
    }

    const results = findMatchingResources(query);
    context.results = results;

    if (context.activeIndex >= 0 && results[context.activeIndex]) {
      openResource(results[context.activeIndex]);
      return;
    }

    const exactMatch = results.find((resource) => isExactTitleMatch(resource, query));
    if (exactMatch) {
      openResource(exactMatch);
      return;
    }

    if (results.length === 1) {
      openResource(results[0]);
      return;
    }

    renderSearchResults(name, results);
  }

  function renderSearchResults(name, suppliedResults) {
    const context = searchContexts[name];
    if (!context || !context.panel) return;

    const query = normalizeQuery(context.input.value);
    context.activeIndex = -1;

    if (query.length < 2) {
      hideSearchResults(name);
      return;
    }

    const results = suppliedResults || findMatchingResources(query);
    const visibleResults = results.slice(0, 8);
    context.results = visibleResults;
    context.panel.replaceChildren();
    context.panel.classList.remove("hidden");
    context.input.setAttribute("aria-expanded", "true");
    context.input.removeAttribute("aria-activedescendant");

    const summary = document.createElement("p");
    summary.className = "search-results-summary";

    if (!results.length) {
      summary.textContent =
        "No matching resource found. Try another keyword or browse by category.";
      context.panel.appendChild(summary);
      return;
    }

    summary.textContent =
      results.length === 1
        ? "1 matching resource"
        : `${results.length} matching resources`;

    const list = document.createElement("div");
    list.className = "search-results-list";
    list.setAttribute("role", "list");

    visibleResults.forEach((resource, index) => {
      list.appendChild(createSearchResultItem(resource, name, index));
    });

    context.panel.append(summary, list);
  }

  function createSearchResultItem(resource, name, index) {
    const item = document.createElement("article");
    const link = document.createElement("a");
    const meta = document.createElement("span");
    const title = document.createElement("strong");
    const description = document.createElement("span");
    const action = document.createElement("span");

    item.className = "search-result-item";
    item.setAttribute("role", "listitem");

    link.className = "search-result-link";
    link.id = `${name}-search-result-${index}`;
    link.href = resourceUrl(resource);
    link.dataset.searchResultIndex = String(index);

    meta.className = "search-result-meta";
    meta.textContent = [
      resource.category || "Clinical resource",
      typeLabels[resource.resource_type] || resource.resource_type || "Resource"
    ]
      .filter(Boolean)
      .join(" • ");

    title.textContent = resource.title || "Untitled resource";
    description.className = "search-result-description";
    description.textContent =
      resource.description || "Description will be added after review.";
    action.className = "search-result-action";
    action.textContent = "Open guide";

    link.append(meta, title, description, action);
    item.appendChild(link);

    return item;
  }

  function setActiveSearchResult(name, index) {
    const context = searchContexts[name];
    if (!context || !context.panel) return;

    context.activeIndex = index;

    context.panel.querySelectorAll("[data-search-result-index]").forEach((link) => {
      const active = Number(link.dataset.searchResultIndex) === index;
      link.classList.toggle("is-active", active);
      if (active) {
        context.input.setAttribute("aria-activedescendant", link.id);
        link.scrollIntoView({ block: "nearest" });
      }
    });
  }

  function hideSearchResults(name, options = {}) {
    const context = searchContexts[name];
    if (!context) return;

    if (options.clear) {
      context.input.value = "";
      if (name === "library") {
        state.searchTerm = "";
        renderResources();
      }
    }

    context.activeIndex = -1;
    context.results = [];

    if (context.panel) {
      context.panel.replaceChildren();
      context.panel.classList.add("hidden");
    }

    context.input.setAttribute("aria-expanded", "false");
    context.input.removeAttribute("aria-activedescendant");
  }

  function clearSearchAndFilters(options = {}) {
    state.searchTerm = "";
    state.activeSubgroup = allSubgroupsLabel;
    setActiveCategory("All");

    Object.keys(searchContexts).forEach((name) => {
      hideSearchResults(name, { clear: true });
    });

    renderResources();

    if (options.focus) {
      const input = document.querySelector("[data-resource-search]");
      if (input) input.focus();
    }
  }

  function findMatchingResources(query) {
    const safeQuery = normalizeQuery(query);
    if (safeQuery.length < 2) return [];

    return state.resources
      .map((resource) => ({
        resource,
        score: scoreResourceMatch(resource, safeQuery)
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.resource.title.localeCompare(b.resource.title);
      })
      .map((item) => item.resource);
  }

  function scoreResourceMatch(resource, query) {
    const title = normalizeQuery(resource.title);
    const slug = normalizeSlug(resource.slug);
    const querySlug = normalizeSlug(query);
    const keywords = normalizeQuery(resource.keywords);
    const category = normalizeQuery(resource.category);
    const description = normalizeQuery(resource.description);
    const resourceType = normalizeQuery(
      `${resource.resource_type} ${typeLabels[resource.resource_type] || ""}`
    );

    if (title === query) return 100;
    if (slug && slug === querySlug) return 90;
    if (title.startsWith(query)) return 80;
    if (keywords.includes(query)) return 70;
    if (title.includes(query)) return 65;
    if (category.includes(query)) return 60;
    if (slug.includes(querySlug)) return 55;
    if (description.includes(query)) return 50;
    if (resourceType.includes(query)) return 40;

    return 0;
  }

  function isExactTitleMatch(resource, query) {
    return normalizeQuery(resource.title) === normalizeQuery(query);
  }

  function openResource(resource) {
    const url = resourceUrl(resource);
    if (!url || url === "#") return;
    window.location.href = url;
  }

  function normalizeQuery(value) {
    return text(value).toLowerCase().replace(/\s+/g, " ");
  }

  function normalizeSlug(value) {
    return normalizeQuery(value)
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function setupCategoryJumps() {
    document.querySelectorAll("[data-category-jump]").forEach((card) => {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");

      const applyCategory = () => {
        setActiveCategory(card.dataset.categoryJump || "All");
        renderResources();
        const resources = document.querySelector("#resources");
        if (resources) resources.scrollIntoView({ behavior: "smooth" });
      };

      card.addEventListener("click", applyCategory);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          applyCategory();
        }
      });
    });
  }

  function setupLaneFilters() {
    document.querySelectorAll("[data-lane-filter]").forEach((link) => {
      link.addEventListener("click", () => {
        setActiveCategory(link.dataset.laneFilter || "All");
        renderResources();
      });
    });
  }

  function setActiveCategory(category) {
    state.activeCategory = category || "All";
    state.activeSubgroup = allSubgroupsLabel;

    document.querySelectorAll("[data-category-filter]").forEach((button) => {
      const active = (button.dataset.categoryFilter || "All") === state.activeCategory;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    updateClearFiltersButton();
  }

  async function loadResources() {
    const grid = document.querySelector("[data-resource-grid]");
    if (!grid) return;

    try {
      const response = await fetch("data/conditions-index.json", {
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error(`Unable to load resource index: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Resource index must be an array.");
      }

      state.resources = data
        .map(normalizeResource)
        .sort(sortResources);

      updateResourceStats();
      updateCategoryCounts();
      renderResources();
      renderFeaturedResources();
      renderHomepageSections();
      renderRecentUpdates();
    } catch (error) {
      console.error(error);
      renderLoadError();
    }
  }

  function normalizeResource(resource) {
    return {
      title: text(resource.title),
      slug: text(resource.slug),
      category: text(resource.category),
      resource_type: text(resource.resource_type),
      description: text(resource.description),
      keywords: text(resource.keywords),
      audience: text(resource.audience),
      last_reviewed: text(resource.last_reviewed),
      medical_review_status: text(resource.medical_review_status),
      featured: resource.featured === true || resource.featured === "true",
      status: text(resource.status),
      hero_image: text(resource.hero_image),
      hero_alt: text(resource.hero_alt),
      visual_context: text(resource.visual_context),
      url: text(resource.url)
    };
  }

  function text(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function sortResources(a, b) {
    const aIndex = categoryOrder.indexOf(a.category);
    const bIndex = categoryOrder.indexOf(b.category);
    const safeA = aIndex === -1 ? categoryOrder.length : aIndex;
    const safeB = bIndex === -1 ? categoryOrder.length : bIndex;

    if (safeA !== safeB) return safeA - safeB;
    return a.title.localeCompare(b.title);
  }

  function getFilteredResources() {
    return state.resources.filter((resource) => {
      const categoryMatch =
        state.activeCategory === "All" ||
        resource.category === state.activeCategory;

      const subgroupMatch =
        !shouldApplySubgroupFilter() ||
        getResourceSubgroup(resource) === state.activeSubgroup;

      const searchableText = [
        resource.title,
        resource.description,
        resource.keywords,
        resource.category,
        typeLabels[resource.resource_type] || resource.resource_type
      ]
        .join(" ")
        .toLowerCase();

      const searchMatch =
        !state.searchTerm || searchableText.includes(state.searchTerm);

      return categoryMatch && subgroupMatch && searchMatch;
    });
  }

  function renderResources() {
    const grid = document.querySelector("[data-resource-grid]");
    const empty = document.querySelector("[data-empty-state]");
    const count = document.querySelector("[data-resource-count]");

    if (!grid) return;

    const resources = getFilteredResources();
    grid.replaceChildren();
    renderSubgroupFilters();

    resources.forEach((resource) => {
      grid.appendChild(createResourceCard(resource));
    });

    if (empty) {
      empty.classList.toggle("hidden", resources.length !== 0);
    }

    if (count) {
      count.textContent =
        resources.length === 1
          ? "1 resource"
          : `${resources.length} resources`;
    }

    updateClearFiltersButton();
  }

  function renderSubgroupFilters() {
    const row = document.querySelector("[data-subgroup-filter-row]");
    if (!row) return;

    const subgroups = subgroupDefinitions[state.activeCategory];
    const showSubgroups = Boolean(subgroups) && !state.searchTerm;

    row.replaceChildren();
    row.classList.toggle("hidden", !showSubgroups);

    if (!showSubgroups) return;

    const categoryResources = state.resources.filter(
      (resource) => resource.category === state.activeCategory
    );

    const allButton = createSubgroupButton(
      allSubgroupsLabel,
      categoryResources.length,
      state.activeSubgroup === allSubgroupsLabel
    );

    row.appendChild(allButton);

    subgroups.forEach((subgroup) => {
      const count = categoryResources.filter(
        (resource) => getResourceSubgroup(resource) === subgroup
      ).length;

      row.appendChild(
        createSubgroupButton(subgroup, count, state.activeSubgroup === subgroup)
      );
    });
  }

  function createSubgroupButton(label, count, active) {
    const button = document.createElement("button");
    const countLabel = document.createElement("span");

    button.className = "filter-button";
    button.type = "button";
    button.dataset.subgroupFilter = label;
    button.setAttribute("aria-pressed", String(active));
    button.classList.toggle("is-active", active);

    countLabel.textContent = ` (${count})`;
    button.append(label, countLabel);

    return button;
  }

  function shouldApplySubgroupFilter() {
    return Boolean(subgroupDefinitions[state.activeCategory]) &&
      !state.searchTerm &&
      state.activeSubgroup !== allSubgroupsLabel;
  }

  function getResourceSubgroup(resource) {
    const subgroups = subgroupDefinitions[resource.category];
    if (!subgroups) return "";

    const override = subgroupOverrides[resource.category]?.[resource.slug];
    if (override) return override;

    const primaryText = normalizeQuery(`${resource.title} ${resource.slug}`);
    const keywordText = normalizeQuery(resource.keywords);
    const fallbackText = normalizeQuery(resource.description);

    return deriveResourceSubgroup(
      resource.category,
      primaryText,
      keywordText,
      fallbackText
    ) || subgroups[0];
  }

  function deriveResourceSubgroup(category, primaryText, keywordText, fallbackText) {
    switch (category) {
      case "Growth & Development":
        return deriveGrowthSubgroup(primaryText, keywordText, fallbackText);
      case "Fever & Infections":
        return deriveInfectionSubgroup(primaryText, keywordText, fallbackText);
      case "Parent Education":
        return deriveParentEducationSubgroup(primaryText, keywordText, fallbackText);
      case "Vaccination":
        return deriveVaccinationSubgroup(primaryText, keywordText, fallbackText);
      case "Nutrition & Feeding":
        return deriveNutritionSubgroup(primaryText, keywordText, fallbackText);
      default:
        return "";
    }
  }

  function deriveGrowthSubgroup(primaryText, keywordText, fallbackText) {
    if (hasAny(primaryText, ["puberty", "menstrual", "teen", "adolescent", "body image", "physical activity"])) {
      return "Puberty & Teen Health";
    }

    if (hasAny(primaryText, ["short stature", "thyroid", "growth faltering", "weight gain"])) {
      return "Growth, Thyroid & Endocrine";
    }

    if (hasAny(primaryText, ["sleep", "bedwetting", "daytime wetting", "thumb sucking", "tantrum", "tics"])) {
      return "Sleep, Habits & Toileting";
    }

    if (hasAny(primaryText, ["back pain", "posture", "clubfoot", "hip", "flat feet", "intoeing", "growing pains", "osgood", "scoliosis", "sever", "scfe", "sufe"])) {
      return "Bones, Posture & Movement";
    }

    if (hasAny(primaryText, ["school", "learning", "exam", "bullying", "anxiety", "refusal"])) {
      return "School, Learning & Stress";
    }

    if (hasAny(`${primaryText} ${keywordText}`, ["development", "speech", "language", "autism", "behaviour", "milestone", "stuttering"])) {
      return "Development, Speech & Behaviour";
    }

    if (hasAny(fallbackText, ["school", "learning", "stress"])) {
      return "School, Learning & Stress";
    }

    return "";
  }

  function deriveInfectionSubgroup(primaryText, keywordText, fallbackText) {
    if (hasAny(primaryText, ["dengue", "malaria", "rickettsial", "scrub typhus", "typhoid"])) {
      return "Mosquito, Tropical & Seasonal Infections";
    }

    if (hasAny(primaryText, ["meningitis", "encephalitis", "kawasaki", "mis-c", "diphtheria"])) {
      return "Serious Warning-Sign Illnesses";
    }

    if (hasAny(primaryText, ["impetigo", "ringworm", "scabies", "conjunctivitis"])) {
      return "Skin & Eye Infections";
    }

    if (hasAny(primaryText, ["tonsillitis", "ear infection", "otitis", "whooping cough", "tuberculosis"])) {
      return "Respiratory, Ear & Throat Infections";
    }

    if (hasAny(primaryText, ["urinary tract", "uti", "osteomyelitis"])) {
      return "Urine, Bone & Other Infections";
    }

    if (hasAny(`${primaryText} ${keywordText}`, ["fever", "viral", "rash", "chickenpox", "covid", "hand foot mouth", "mononucleosis", "measles", "febrile seizure"])) {
      return "Fever, Viral Illnesses & Rashes";
    }

    if (hasAny(fallbackText, ["urgent", "warning signs"])) {
      return "Serious Warning-Sign Illnesses";
    }

    return "";
  }

  function deriveParentEducationSubgroup(primaryText, keywordText, fallbackText) {
    if (hasAny(primaryText, ["newborn", "baby", "colic", "crying", "premature", "jaundice", "safe sleep", "umbilical", "breastfeeding"])) {
      return "Newborn & Baby Care";
    }

    if (hasAny(primaryText, ["burns", "scalds", "dog bite", "animal bite", "foreign body", "head injury", "concussion", "nosebleed", "poisoning"])) {
      return "Safety, First Aid & Injury";
    }

    if (hasAny(primaryText, ["teen", "vaping", "tobacco", "alcohol", "travel", "consent", "boundaries"])) {
      return "Digital, Teen & Travel Guidance";
    }

    if (hasAny(primaryText, ["red flags", "danger signs"])) {
      return "Urgent Care & Red Flags";
    }

    if (hasAny(`${primaryText} ${keywordText}`, ["hygiene", "cough etiquette", "mosquito", "safe food", "safe water", "deworming", "vulvovaginitis"])) {
      return "Everyday Parenting & Hygiene";
    }

    if (hasAny(fallbackText, ["urgent care", "warning signs"])) {
      return "Urgent Care & Red Flags";
    }

    return "";
  }

  function deriveVaccinationSubgroup(primaryText, keywordText, fallbackText) {
    if (hasAny(primaryText, ["missed", "delayed", "catch-up", "records", "doses"])) {
      return "Missed Doses, Records & Catch-up";
    }

    if (hasAny(primaryText, ["side effects", "aftercare", "fever after", "scar", "lump"])) {
      return "Vaccine Aftercare & Reactions";
    }

    if (hasAny(primaryText, ["special medical", "asthma", "allergy"])) {
      return "Special Situation Vaccines";
    }

    if (hasAny(primaryText, ["travel", "hpv", "influenza", "adolescent"])) {
      return "Travel & Adolescent Vaccines";
    }

    if (hasAny(`${primaryText} ${keywordText} ${fallbackText}`, ["faq", "why it matters", "myths", "misconceptions", "vaccine safety", "vaccination"])) {
      return "Vaccine Basics & FAQs";
    }

    return "";
  }

  function deriveNutritionSubgroup(primaryText, keywordText, fallbackText) {
    if (hasAny(primaryText, ["breastfeeding", "formula", "infant feeding"])) {
      return "Infant Feeding";
    }

    if (hasAny(primaryText, ["weaning", "complementary feeding", "6 months"])) {
      return "Weaning & Complementary Feeding";
    }

    if (hasAny(primaryText, ["1 to 2", "2 to 5", "toddler", "preschool", "picky"])) {
      return "Toddler and Preschool Feeding";
    }

    if (hasAny(primaryText, ["school-age", "adolescent", "teen"])) {
      return "School-age and Teen Nutrition";
    }

    if (hasAny(`${primaryText} ${keywordText} ${fallbackText}`, ["growth", "weight", "obesity", "iron", "vitamin", "mineral", "micronutrient"])) {
      return "Growth, Weight & Micronutrients";
    }

    return "";
  }

  function hasAny(value, terms) {
    return terms.some((term) => value.includes(term));
  }

  function renderFeaturedResources() {
    const grid = document.querySelector("[data-featured-grid]");
    if (!grid) return;

    const featured = state.resources
      .filter((resource) => resource.featured)
      .slice(0, 3);

    grid.replaceChildren();

    if (!featured.length) {
      grid.appendChild(
        createInfoCard(
          "Featured resources will appear here",
          "Selected reviewed resources will be highlighted after publication."
        )
      );
      return;
    }

    featured.forEach((resource) => {
      grid.appendChild(createResourceCard(resource));
    });
  }

  function renderHomepageSections() {
    renderPopularGuides();
    renderCategoryLane("[data-feeding-grid]", "Nutrition & Feeding", 3);
    renderCategoryLane("[data-infection-grid]", "Fever & Infections", 3);
    renderCategoryLane("[data-respiratory-grid]", "Respiratory", 3);
    renderTools();
  }

  function renderPopularGuides() {
    const grid = document.querySelector("[data-popular-guides]");
    if (!grid) return;

    const selected = premiumPilotSlugs
      .map((slug) => state.resources.find((resource) => resource.slug === slug))
      .filter(Boolean);

    grid.replaceChildren();
    selected.forEach((resource) => grid.appendChild(createResourceCard(resource, { premium: true })));
  }

  function renderCategoryLane(selector, category, limit) {
    const grid = document.querySelector(selector);
    if (!grid) return;

    const resources = state.resources
      .filter((resource) => resource.category === category)
      .sort(sortByVisualThenDate)
      .slice(0, limit);

    grid.replaceChildren();

    if (!resources.length) {
      grid.appendChild(createInfoCard("Resources coming soon", "This section will fill as the portal grows."));
      return;
    }

    resources.forEach((resource) => {
      grid.appendChild(createMiniResourceCard(resource));
    });
  }

  function renderTools() {
    const section = document.querySelector("[data-tools-section]");
    const grid = document.querySelector("[data-tools-grid]");
    if (!section || !grid) return;

    const tools = state.resources
      .filter((resource) =>
        ["interactive-tool", "reference-chart", "calculator"].includes(resource.resource_type)
      )
      .slice(0, 4);

    section.classList.toggle("hidden", tools.length === 0);
    grid.replaceChildren();

    tools.forEach((resource) => {
      grid.appendChild(createResourceCard(resource));
    });
  }

  function renderRecentUpdates() {
    const list = document.querySelector("[data-recent-updates]");
    if (!list) return;

    const updates = [...state.resources]
      .filter((resource) => resource.last_reviewed)
      .sort((a, b) => b.last_reviewed.localeCompare(a.last_reviewed))
      .slice(0, 7);

    list.replaceChildren();

    if (!updates.length) {
      const item = document.createElement("li");
      item.textContent =
        "Reviewed resources will appear here as the portal grows.";
      list.appendChild(item);
      return;
    }

    updates.forEach((resource) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      const date = document.createElement("span");

      link.href = resourceUrl(resource);
      link.textContent = resource.title;

      date.className = "text-small text-muted";
      date.textContent = ` — reviewed ${formatDate(resource.last_reviewed)}`;

      item.append(link, date);
      list.appendChild(item);
    });
  }

  function createResourceCard(resource, options = {}) {
    const card = document.createElement("article");
    const media = createResourceMedia(resource);
    const body = document.createElement("div");
    const meta = document.createElement("div");
    const typeBadge = document.createElement("span");
    const categoryBadge = document.createElement("span");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const details = document.createElement("p");
    const actions = document.createElement("div");
    const link = document.createElement("a");

    card.className = options.premium
      ? "card resource-card resource-card-premium"
      : "card resource-card";
    body.className = "resource-card-body";
    meta.className = "resource-meta";
    typeBadge.className = `badge badge-${resource.resource_type || "parent-guide"}`;
    typeBadge.textContent = typeLabels[resource.resource_type] || "Resource";
    categoryBadge.className = "badge badge-category";
    categoryBadge.textContent = resource.category || "Clinical resource";
    title.textContent = resource.title || "Untitled resource";
    description.textContent =
      resource.description || "Description will be added after review.";
    details.className = "text-small text-muted";
    details.textContent = resourceDetails(resource);
    actions.className = "resource-actions";
    link.className = "button button-secondary";
    link.href = resourceUrl(resource);
    link.textContent = "Open resource";

    meta.append(typeBadge, categoryBadge);

    if (resource.medical_review_status === "reviewed") {
      const reviewed = document.createElement("span");
      reviewed.className = "badge badge-reviewed";
      reviewed.textContent = "Reviewed";
      meta.appendChild(reviewed);
    }

    if (resource.status && resource.status !== "published") {
      const status = document.createElement("span");
      status.className = "badge badge-draft";
      status.textContent = labelFromSlug(resource.status);
      meta.appendChild(status);
    } else if (resource.status === "published") {
      const status = document.createElement("span");
      status.className = "badge badge-published";
      status.textContent = "Published";
      meta.appendChild(status);
    }

    actions.appendChild(link);
    body.append(meta, title, description, details, actions);
    card.append(media, body);

    return card;
  }

  function createResourceMedia(resource) {
    const wrap = document.createElement("div");
    const addFallback = () => {
      wrap.className = "resource-card-media resource-card-media-fallback";
      wrap.replaceChildren(createResourceFallbackIcon(resource));
    };

    wrap.className = resource.hero_image
      ? "resource-card-media"
      : "resource-card-media resource-card-media-fallback";

    if (resource.hero_image) {
      const image = document.createElement("img");
      image.src = homepageAssetUrl(resource.hero_image);
      image.alt = resource.hero_alt || "";
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", addFallback, { once: true });
      wrap.appendChild(image);
      return wrap;
    }

    addFallback();
    return wrap;
  }

  function createResourceFallbackIcon(resource) {
    const icon = document.createElement("span");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = categoryIcon(resource.category);
    return icon;
  }

  function createMiniResourceCard(resource) {
    const card = document.createElement("article");
    const link = document.createElement("a");
    const title = document.createElement("strong");
    const meta = document.createElement("span");

    card.className = "mini-resource-card";
    link.href = resourceUrl(resource);
    title.textContent = resource.title || "Untitled resource";
    meta.textContent = resourceDetails(resource);

    if (resource.hero_image) {
      const image = document.createElement("img");
      image.src = homepageAssetUrl(resource.hero_image);
      image.alt = resource.hero_alt || "";
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", () => {
        const fallback = document.createElement("span");
        fallback.className = "mini-resource-icon";
        fallback.setAttribute("aria-hidden", "true");
        fallback.textContent = categoryIcon(resource.category);
        image.replaceWith(fallback);
      }, { once: true });
      link.appendChild(image);
    } else {
      const fallback = document.createElement("span");
      fallback.className = "mini-resource-icon";
      fallback.setAttribute("aria-hidden", "true");
      fallback.textContent = categoryIcon(resource.category);
      link.appendChild(fallback);
    }

    link.append(title, meta);
    card.appendChild(link);
    return card;
  }

  function createInfoCard(titleText, descriptionText) {
    const card = document.createElement("article");
    const body = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    card.className = "card resource-card";
    body.className = "resource-card-body";
    title.textContent = titleText;
    description.textContent = descriptionText;

    body.append(title, description);
    card.appendChild(body);
    return card;
  }

  function resourceDetails(resource) {
    const items = [];

    if (resource.category) items.push(resource.category);
    if (resource.medical_review_status) {
      items.push(labelFromSlug(resource.medical_review_status));
    }
    if (resource.last_reviewed) {
      items.push(`Last reviewed ${formatDate(resource.last_reviewed)}`);
    }

    return items.join(" • ") || "Medical review details pending";
  }

  function homepageAssetUrl(value) {
    if (!value) return "";
    if (/^(https?:)?\/\//.test(value) || value.startsWith("data:")) return value;
    return value.replace(/^\.\.\//, "");
  }

  function categoryIcon(category) {
    const icons = {
      "Respiratory": "🫁",
      "Gastrointestinal": "🥣",
      "Nutrition & Feeding": "🍎",
      "Vaccination": "💉",
      "Fever & Infections": "🌡️",
      "Skin & Allergy": "🧴",
      "Growth & Development": "📈",
      "Medication Information": "💊",
      "Parent Education": "📘"
    };

    return icons[category] || "✚";
  }

  function labelFromSlug(value) {
    return text(value)
      .split(/[-_]/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  function sortByVisualThenDate(a, b) {
    if (Boolean(a.hero_image) !== Boolean(b.hero_image)) {
      return a.hero_image ? -1 : 1;
    }

    if (a.last_reviewed !== b.last_reviewed) {
      return b.last_reviewed.localeCompare(a.last_reviewed);
    }

    return a.title.localeCompare(b.title);
  }

  function resourceUrl(resource) {
    if (resource.url) return resource.url;
    if (resource.slug) return `html-conditions/${resource.slug}.html`;
    return "#";
  }

  function formatDate(value) {
    const date = new Date(`${value}T00:00:00`);

    if (Number.isNaN(date.getTime())) return value;

    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    }).format(date);
  }

  function updateCategoryCounts() {
    const counts = getCategoryCounts();

    categoryOrder.forEach((category) => {
      const count = counts.get(category) || 0;

      document.querySelectorAll(
        `[data-category-count="${category}"]`
      ).forEach((element) => {
        element.textContent = String(count);
      });

      document.querySelectorAll(
        `[data-category-filter-count="${category}"]`
      ).forEach((element) => {
        element.textContent = `(${count})`;
      });
    });

    document.querySelectorAll('[data-category-filter-count="All"]').forEach((element) => {
      element.textContent = `(${state.resources.length})`;
    });

    updateEmptyCategoryFilters(counts);
  }

  function getCategoryCounts() {
    return state.resources.reduce((counts, resource) => {
      if (!resource.category) return counts;
      counts.set(resource.category, (counts.get(resource.category) || 0) + 1);
      return counts;
    }, new Map());
  }

  function updateEmptyCategoryFilters(counts) {
    document.querySelectorAll("[data-category-filter]").forEach((button) => {
      const category = button.dataset.categoryFilter || "All";
      if (category === "All") return;

      const count = counts.get(category) || 0;
      const isEmpty = count === 0;

      button.disabled = isEmpty;
      button.classList.toggle("is-disabled", isEmpty);
      button.setAttribute("aria-disabled", String(isEmpty));

      if (isEmpty) {
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
        button.innerHTML = `${button.dataset.categoryLabel || category} <span class="coming-soon-label">Coming soon</span>`;
      } else {
        button.innerHTML = `${button.dataset.categoryLabel || category} <span data-category-filter-count="${category}">(${count})</span>`;
      }
    });

    if (state.activeCategory !== "All" && (counts.get(state.activeCategory) || 0) === 0) {
      setActiveCategory("All");
    }
  }

  function updateClearFiltersButton() {
    const button = document.querySelector("[data-clear-filters]");
    if (!button) return;

    const hasActiveSearch = Boolean(state.searchTerm);
    const hasActiveCategory = state.activeCategory !== "All";
    const hasActiveSubgroup = state.activeSubgroup !== allSubgroupsLabel;
    button.classList.toggle(
      "hidden",
      !hasActiveSearch && !hasActiveCategory && !hasActiveSubgroup
    );
  }

  function renderLoadError() {
    const grid = document.querySelector("[data-resource-grid]");
    const empty = document.querySelector("[data-empty-state]");
    const count = document.querySelector("[data-resource-count]");

    if (grid) {
      grid.replaceChildren();
      grid.appendChild(
        createInfoCard(
          "Resources could not be loaded",
          "The resource index is not available at the moment."
        )
      );
    }

    if (empty) empty.classList.add("hidden");
    if (count) count.textContent = "Resource index unavailable";
  }

  function updateResourceStats() {
    document.querySelectorAll("[data-total-resource-count]").forEach((item) => {
      item.textContent = String(state.resources.length);
    });
  }
})();

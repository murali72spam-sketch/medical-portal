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

  const state = {
    resources: [],
    activeCategory: "All",
    searchTerm: ""
  };

  const premiumPilotSlugs = [
    "fever-in-children",
    "dengue-fever",
    "eczema",
    "asthma-in-children",
    "complementary-feeding-after-6-months"
  ];

  document.addEventListener("DOMContentLoaded", () => {
    setupDraftResourceNotice();
    setupNavigation();
    setCurrentYear();
    setupSearch();
    setupFilters();
    setupHeroSearch();
    setupCategoryJumps();
    setupLaneFilters();
    loadResources();
  });

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
    if (!input) return;

    input.addEventListener("input", (event) => {
      state.searchTerm = event.target.value.trim().toLowerCase();
      renderResources();
    });
  }

  function setupFilters() {
    const buttons = document.querySelectorAll("[data-category-filter]");
    if (!buttons.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        state.activeCategory = button.dataset.categoryFilter || "All";

        buttons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        renderResources();
      });
    });
  }

  function setupHeroSearch() {
    const form = document.querySelector("[data-hero-search-form]");
    const input = document.querySelector("[data-hero-resource-search]");
    const libraryInput = document.querySelector("[data-resource-search]");

    if (!form || !input) return;

    form.addEventListener("submit", () => {
      const value = input.value.trim();
      state.searchTerm = value.toLowerCase();

      if (libraryInput) {
        libraryInput.value = value;
      }

      setActiveCategory("All");
      renderResources();
    });
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

    document.querySelectorAll("[data-category-filter]").forEach((button) => {
      const active = (button.dataset.categoryFilter || "All") === state.activeCategory;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
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

      return categoryMatch && searchMatch;
    });
  }

  function renderResources() {
    const grid = document.querySelector("[data-resource-grid]");
    const empty = document.querySelector("[data-empty-state]");
    const count = document.querySelector("[data-resource-count]");

    if (!grid) return;

    const resources = getFilteredResources();
    grid.replaceChildren();

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
    wrap.className = resource.hero_image
      ? "resource-card-media"
      : "resource-card-media resource-card-media-fallback";

    if (resource.hero_image) {
      const image = document.createElement("img");
      image.src = homepageAssetUrl(resource.hero_image);
      image.alt = resource.hero_alt || "";
      image.loading = "lazy";
      image.decoding = "async";
      wrap.appendChild(image);
      return wrap;
    }

    const icon = document.createElement("span");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = categoryIcon(resource.category);
    wrap.appendChild(icon);
    return wrap;
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
    categoryOrder.forEach((category) => {
      const count = state.resources.filter(
        (resource) => resource.category === category
      ).length;

      const element = document.querySelector(
        `[data-category-count="${category}"]`
      );

      if (element) element.textContent = String(count);
    });
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

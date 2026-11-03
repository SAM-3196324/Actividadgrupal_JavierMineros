(function () {
  "use strict";

  const modules = Array.isArray(window.MODULOS) ? window.MODULOS : [];
  const storagePrefix = "hub3dsa:";
  const grid = document.getElementById("module-grid");
  const search = document.getElementById("module-search");
  const categoryFilter = document.getElementById("category-filter");
  const ownerFilter = document.getElementById("owner-filter");
  const emptyState = document.getElementById("empty-state");
  const progressValue = document.getElementById("progress-value");
  const progressCaption = document.getElementById("progress-caption");
  const progressBar = document.getElementById("progress-bar");
  const progressFill = document.getElementById("progress-fill");
  const liveRegion = document.getElementById("results-count");
  const technologyList = Array.isArray(window.TECNOLOGIAS) ? window.TECNOLOGIAS : [];
  const tiltBound = new WeakSet();

  if (!modules.length) {
    console.error("No se cargaron módulos desde data/modulos.js.");
    emptyState.hidden = false;
    emptyState.textContent = "No se pudieron cargar los módulos. Revisa que data/modulos.js esté disponible.";
    liveRegion.textContent = "Error al cargar los módulos";
    return;
  }

  function readStorage(key, fallback) {
    try {
      const value = localStorage.getItem(storagePrefix + key);
      return value === null ? fallback : value;
    } catch (error) {
      console.warn("No se pudo leer el progreso guardado.", error);
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(storagePrefix + key, value);
    } catch (error) {
      console.warn("No se pudo guardar el progreso en este navegador.", error);
    }
  }

  function make(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function makeTechnologyCard(technology, index) {
    const article = make("article", "technology-card");
    article.style.setProperty("--card-index", String(index));
    const mark = make("span", "technology-mark", technology.marca);
    mark.setAttribute("aria-hidden", "true");
    const category = make("span", "technology-category", technology.categoria);
    const title = make("h3", "technology-title");
    title.setAttribute("aria-label", technology.nombre);
    let characterIndex = 0;
    technology.nombre.split(/(\s+)/).forEach((part) => {
      if (/^\s+$/.test(part)) {
        title.append(document.createTextNode(part));
        return;
      }
      const word = make("span", "title-word");
      Array.from(part).forEach((character) => {
        const letter = make("span", "title-character", character);
        letter.setAttribute("aria-hidden", "true");
        letter.style.setProperty("--letter-index", String(characterIndex));
        characterIndex += 1;
        word.append(letter);
      });
      title.append(word);
    });
    article.append(mark, category, title, make("p", "technology-description", technology.descripcion));
    return article;
  }

  function setupTechnologyCarousel() {
    const viewport = document.getElementById("technology-viewport");
    const track = document.getElementById("technology-track");
    const filterBox = document.getElementById("technology-filters");
    const dotsBox = document.getElementById("carousel-dots");
    const status = document.getElementById("carousel-status");
    const count = document.getElementById("technology-count");
    const categories = [...new Set(technologyList.map((item) => item.categoria))];
    let activeCategory = "Todas";
    let dotCount = 0;
    let dragStart = null;
    let animationFrame = 0;

    if (!technologyList.length) {
      status.textContent = "No se pudieron cargar las tecnologías.";
      console.error("No se cargaron tecnologías desde data/tecnologias.js.");
      return;
    }

    function renderFilters() {
      filterBox.replaceChildren();
      ["Todas", ...categories].forEach((category) => {
        const button = make("button", "technology-filter", category);
        button.type = "button";
        button.setAttribute("aria-pressed", String(category === activeCategory));
        button.addEventListener("click", () => {
          activeCategory = category;
          renderFilters();
          renderCards();
        });
        filterBox.append(button);
      });
    }

    function updateDots() {
      const pageWidth = viewport.clientWidth;
      const maxScroll = Math.max(0, track.scrollWidth - pageWidth);
      const pageCount = Math.min(7, Math.max(1, Math.ceil(maxScroll / pageWidth) + 1));
      const currentPage = maxScroll
        ? Math.round((viewport.scrollLeft / maxScroll) * (pageCount - 1))
        : 0;
      if (dotCount !== pageCount) {
        dotsBox.replaceChildren();
        dotCount = pageCount;
        for (let page = 0; page < pageCount; page += 1) {
          const dot = make("button", "carousel-dot");
          dot.type = "button";
          dot.setAttribute("aria-label", "Ir a la posición " + (page + 1) + " de " + pageCount);
          dot.addEventListener("click", () => {
            const currentMaxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth);
            const currentDotCount = dotsBox.childElementCount;
            viewport.scrollTo({
              left: currentDotCount === 1 ? 0 : (page / (currentDotCount - 1)) * currentMaxScroll,
              behavior: scrollBehavior()
            });
          });
          dotsBox.append(dot);
        }
      }
      Array.from(dotsBox.children).forEach((dot, index) => {
        dot.setAttribute("aria-current", String(index === currentPage));
      });
    }

    function scrollBehavior() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    }

    function renderCards() {
      const visibleItems = activeCategory === "Todas"
        ? technologyList
        : technologyList.filter((item) => item.categoria === activeCategory);
      track.replaceChildren(...visibleItems.map(makeTechnologyCard));
      count.textContent = visibleItems.length + " / " + technologyList.length + " tecnologías";
      status.textContent = activeCategory === "Todas"
        ? "Todas las categorías · " + visibleItems.length + " tecnologías"
        : activeCategory + " · " + visibleItems.length + (visibleItems.length === 1 ? " tecnología" : " tecnologías");
      viewport.scrollLeft = 0;
      dotCount = 0;
      dotsBox.replaceChildren();
      requestAnimationFrame(updateDots);
      observeReveals(track);
      bindTilt(track.querySelectorAll(".technology-card"));
    }

    document.getElementById("technology-previous").addEventListener("click", () => {
      viewport.scrollBy({ left: -viewport.clientWidth * 0.85, behavior: scrollBehavior() });
    });
    document.getElementById("technology-next").addEventListener("click", () => {
      viewport.scrollBy({ left: viewport.clientWidth * 0.85, behavior: scrollBehavior() });
    });
    viewport.addEventListener("scroll", () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateDots);
    }, { passive: true });
    window.addEventListener("resize", () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateDots);
    }, { passive: true });

    viewport.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragStart = { x: event.clientX, scrollLeft: viewport.scrollLeft };
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add("is-dragging");
    });
    viewport.addEventListener("pointermove", (event) => {
      if (!dragStart) return;
      viewport.scrollLeft = dragStart.scrollLeft - (event.clientX - dragStart.x);
    });
    const endDrag = () => {
      dragStart = null;
      viewport.classList.remove("is-dragging");
    };
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("lostpointercapture", endDrag);

    filterBox.replaceChildren();
    renderFilters();
    renderCards();
    count.textContent = technologyList.length + " tecnologías";
  }

  function appendList(parent, title, values, className) {
    const section = make("section", "detail-block");
    section.append(make("h4", "", title));
    const list = make("ul", className || "");
    values.forEach((value) => list.append(make("li", "", value)));
    section.append(list);
    parent.append(section);
  }

  function makeEvidenceSection(module) {
    const section = make("section", "detail-block evidence-block");
    const heading = make("h4", "", "Evidencias");
    heading.id = "evidence-title-" + module.id;
    heading.tabIndex = -1;
    section.append(heading);

    const list = make("ul", "evidence-list");
    module.evidencias.forEach((evidence) => list.append(make("li", "", evidence)));
    section.append(list);

    const gallery = make("div", "evidence-gallery");
    const images = Array.isArray(module.evidenceImages) ? module.evidenceImages : [];
    if (images.length) {
      images.forEach((evidence) => {
        const figure = make("figure", "evidence-figure");
        const image = document.createElement("img");
        image.src = evidence.src;
        image.alt = evidence.alt;
        image.loading = "lazy";
        figure.append(image);
        if (evidence.caption) figure.append(make("figcaption", "", evidence.caption));
        gallery.append(figure);
      });
    } else {
      const placeholder = make("p", "evidence-placeholder");
      placeholder.append(make("span", "evidence-placeholder-mark", "+"));
      placeholder.append(make("span", "", "Espacio reservado para capturas de este módulo."));
      placeholder.append(make("small", "", "Cuando compartas las imágenes, las agregamos aquí."));
      gallery.append(placeholder);
    }
    section.append(gallery);
    return section;
  }

  function makeQuiz(module) {
    const details = make("details", "quiz-details");
    const summary = make("summary", "", "Poner a prueba lo aprendido · 3 preguntas");
    const form = make("form", "quiz-form");
    form.dataset.moduleId = module.id;

    module.quiz.forEach((item, index) => {
      const fieldset = make("fieldset", "quiz-question");
      const legend = make("legend", "", (index + 1) + ". " + item.pregunta);
      fieldset.append(legend);
      item.opciones.forEach((option, optionIndex) => {
        const label = make("label", "quiz-option");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = module.id + "-q" + index;
        input.value = String(optionIndex);
        input.required = true;
        label.append(input, make("span", "", option));
        fieldset.append(label);
      });
      form.append(fieldset);
    });

    const actions = make("div", "quiz-actions");
    const submit = make("button", "button button-primary button-small", "Revisar respuestas");
    submit.type = "submit";
    const feedback = make("p", "quiz-feedback");
    feedback.setAttribute("aria-live", "polite");
    actions.append(submit, feedback);
    form.append(actions);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const answers = new FormData(form);
      let score = 0;
      module.quiz.forEach((question, index) => {
        if (Number(answers.get(module.id + "-q" + index)) === question.respuesta) score += 1;
      });
      feedback.textContent = "Resultado: " + score + " de " + module.quiz.length + ". " +
        (score === module.quiz.length ? "¡Excelente, dominio demostrado!" : "Revisa la ficha e inténtalo de nuevo.");
      feedback.classList.toggle("is-success", score === module.quiz.length);
      writeStorage("quiz:" + module.id, String(score));
    });

    const savedScore = readStorage("quiz:" + module.id, null);
    if (savedScore !== null) {
      const feedback = form.querySelector(".quiz-feedback");
      feedback.textContent = "Último resultado guardado: " + savedScore + " de " + module.quiz.length + ".";
    }
    details.append(summary, form);
    return details;
  }

  function makeCard(module) {
    const article = make("article", "module-card accent-" + module.color);
    article.dataset.category = module.area;
    article.dataset.owner = module.responsable;

    const header = make("div", "card-topline");
    header.append(make("span", "category-tag", module.area.toUpperCase()));
    header.append(make("span", "module-id", module.id));
    article.append(header);

    article.append(make("h3", "module-title", module.titulo));
    article.append(make("p", "module-summary", module.resumen));

    const chips = make("ul", "technology-list");
    chips.setAttribute("aria-label", "Tecnologías");
    module.herramientas.forEach((tool) => chips.append(make("li", "", tool)));
    article.append(chips);

    const footer = make("div", "card-footer");
    const owner = make("span", "module-owner", "Ficha: " + module.responsable);
    const evidenceButton = make("button", "evidence-trigger", "Evidencias");
    evidenceButton.type = "button";
    evidenceButton.setAttribute("aria-controls", "evidence-title-" + module.id);
    const reviewedLabel = make("label", "review-label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "review-checkbox";
    checkbox.checked = readStorage("review:" + module.id, "false") === "true";
    checkbox.setAttribute("aria-label", "Marcar " + module.titulo + " como revisado");
    checkbox.addEventListener("change", () => {
      writeStorage("review:" + module.id, String(checkbox.checked));
      updateProgress();
    });
    reviewedLabel.append(checkbox, make("span", "", "Revisado"));
    footer.append(owner, evidenceButton, reviewedLabel);
    article.append(footer);

    const details = make("details", "module-details");
    const summary = make("summary", "", "Abrir ficha del módulo");
    const body = make("div", "module-detail-content");
    body.append(make("p", "teacher-line", "Docentes: " + module.docentes.join(" · ")));
    appendList(body, "Lo que aprendimos", module.aprendizajes);
    appendList(body, "Programas", module.programas);
    appendList(body, "Herramientas", module.herramientas, "inline-list");
    appendList(body, "Instrumentos", module.instrumentos);
    const evidenceSection = makeEvidenceSection(module);

    const resources = make("section", "detail-block");
    resources.append(make("h4", "", "Recursos para continuar"));
    const resourceLinks = make("div", "resource-links");
    module.recursos.forEach((resource) => {
      const link = make("a", "", resource.nombre);
      link.href = resource.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      resourceLinks.append(link);
    });
    resources.append(resourceLinks);
    body.append(evidenceSection, resources, makeQuiz(module));
    details.append(summary, body);
    article.append(details);
    evidenceButton.addEventListener("click", () => {
      details.open = true;
      const heading = evidenceSection.querySelector("h4");
      heading.focus({ preventScroll: true });
      evidenceSection.scrollIntoView({
        block: "center",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
    return article;
  }

  function fillFilters() {
    const categories = [...new Set(modules.map((module) => module.area))].sort((a, b) => a.localeCompare(b, "es"));
    categories.forEach((category) => categoryFilter.append(new Option(category, category)));
    const owners = [...new Set(modules.map((module) => module.responsable))].sort((a, b) => a.localeCompare(b, "es"));
    owners.forEach((owner) => ownerFilter.append(new Option(owner, owner)));
  }

  function renderModules() {
    const query = search.value.trim().toLocaleLowerCase("es");
    const category = categoryFilter.value;
    const owner = ownerFilter.value;
    const filtered = modules.filter((module) => {
      const searchable = [
        module.titulo, module.area, module.resumen, module.responsable,
        ...module.docentes, ...module.aprendizajes, ...module.programas,
        ...module.herramientas, ...module.instrumentos
      ].join(" ").toLocaleLowerCase("es");
      return searchable.includes(query) &&
        (category === "all" || module.area === category) &&
        (owner === "all" || module.responsable === owner);
    });
    grid.replaceChildren(...filtered.map(makeCard));
    emptyState.hidden = filtered.length !== 0;
    liveRegion.textContent = filtered.length + (filtered.length === 1 ? " módulo" : " módulos");
    updateProgress();
    observeReveals(grid);
    bindTilt(grid.querySelectorAll(".module-card"));
  }

  function updateProgress() {
    const checked = modules.filter((module) => readStorage("review:" + module.id, "false") === "true").length;
    const percentage = modules.length ? Math.round((checked / modules.length) * 100) : 0;
    progressValue.textContent = percentage + "%";
    progressCaption.textContent = checked + " de " + modules.length + " módulos revisados";
    progressFill.style.width = percentage + "%";
    progressBar.setAttribute("aria-valuenow", String(percentage));
  }

  function setupTheme() {
    const button = document.getElementById("theme-toggle");
    const savedTheme = readStorage("theme", "light");
    document.documentElement.dataset.theme = savedTheme;
    updateThemeButton(button, savedTheme);
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      document.querySelector('meta[name="theme-color"]').content = nextTheme === "light" ? "#F7F3EE" : "#292326";
      writeStorage("theme", nextTheme);
      updateThemeButton(button, nextTheme);
    });
  }

  function updateThemeButton(button, theme) {
    const label = button.querySelector(".theme-label");
    const lightMode = theme === "light";
    label.textContent = lightMode ? "Modo oscuro" : "Modo claro";
    button.setAttribute("aria-label", lightMode ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
    button.querySelector("[aria-hidden]").textContent = lightMode ? "☾" : "☼";
  }

  function setupNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.getElementById("nav-links");
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? "Abrir navegación" : "Cerrar navegación");
      links.classList.toggle("is-open", !expanded);
    });
    links.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir navegación");
        links.classList.remove("is-open");
      }
    });
  }

  function observeReveals(scope) {
    const items = (scope || document).querySelectorAll(".module-card, .technology-card");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    items.forEach((item) => {
      item.classList.remove("is-visible");
      observer.observe(item);
    });
  }

  function bindTilt(elements) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches && !prefersReducedMotion;
    if (!canTilt) return;
    elements.forEach((card) => {
      if (tiltBound.has(card)) return;
      tiltBound.add(card);
      let frame = 0;
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          card.style.setProperty("--pointer-x", (x * 100) + "%");
          card.style.setProperty("--pointer-y", (y * 100) + "%");
          card.style.setProperty("--tilt-x", ((0.5 - y) * 3) + "deg");
          card.style.setProperty("--tilt-y", ((x - 0.5) * 3) + "deg");
        });
      });
      card.addEventListener("pointerleave", () => {
        cancelAnimationFrame(frame);
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
        card.style.removeProperty("--pointer-x");
        card.style.removeProperty("--pointer-y");
      });
    });
  }

  function setupEditorialMotion() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = document.querySelectorAll(".section-heading, .team-card, .rubric-list article, .timeline li");
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12 });
      sections.forEach((section) => {
        section.classList.add("reveal-on-scroll");
        observer.observe(section);
      });
    }

    bindTilt(document.querySelectorAll(".team-card, .module-card, .technology-card"));
  }

  function setupScrollEffects() {
    const header = document.querySelector(".site-header");
    let queued = false;
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const updateScrollEffects = () => {
      const scrollShift = prefersReducedMotion ? 0 : window.scrollY * 0.12;
      root.style.setProperty("--scroll-shift", scrollShift.toFixed(1) + "px");
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      queued = false;
    };
    window.addEventListener("scroll", () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(updateScrollEffects);
    }, { passive: true });
    updateScrollEffects();

    const canTrackPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canTrackPointer || prefersReducedMotion) return;
    let frame = 0;
    document.addEventListener("pointermove", (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--ambient-x", event.clientX + "px");
        root.style.setProperty("--ambient-y", event.clientY + "px");
      });
    }, { passive: true });
  }

  function setupActions() {
    [search, categoryFilter, ownerFilter].forEach((control) => {
      control.addEventListener(control === search ? "input" : "change", renderModules);
    });
    document.getElementById("clear-filters").addEventListener("click", () => {
      search.value = "";
      categoryFilter.value = "all";
      ownerFilter.value = "all";
      renderModules();
      search.focus();
    });
    document.getElementById("reset-progress").addEventListener("click", () => {
      const confirmed = window.confirm("¿Quieres borrar las fichas revisadas y los resultados de quiz guardados en este navegador?");
      if (!confirmed) return;
      modules.forEach((module) => {
        try {
          localStorage.removeItem(storagePrefix + "review:" + module.id);
          localStorage.removeItem(storagePrefix + "quiz:" + module.id);
        } catch (error) {
          console.warn("No se pudo borrar el progreso guardado.", error);
        }
      });
      renderModules();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        event.preventDefault();
        search.focus();
      }
    });
  }

  document.getElementById("module-count").textContent = String(modules.length).padStart(2, "0");
  fillFilters();
  setupTheme();
  setupNavigation();
  setupTechnologyCarousel();
  setupActions();
  renderModules();
  setupEditorialMotion();
  setupScrollEffects();
  observeReveals(document);
})();

(function () {
  "use strict";

  const modules = Array.isArray(window.MODULOS) ? window.MODULOS : [];
  const storagePrefix = "hub3dsa:";
  const progressStorageKey = "hub3dsa_dia2_v05_progress";
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
  const selfEvaluationTeam = [
    { id: "daniela", name: "Daniela Yamileth Rodriguez Zepeda", role: "Diseñadora UI" },
    { id: "marcela", name: "Marcela Abigail Mata Escobar", role: "Curadora de contenido" },
    { id: "nestor", name: "Nestor Eduardo Deodanes Martinez", role: "QA y accesibilidad" },
    { id: "samuel", name: "Samuel Eliseo Mendoza Gonzalez", role: "Líder Git" }
  ];
  const tiltBound = new WeakSet();
  const moduleCards = new Map();
  const evidenceDialog = document.getElementById("evidence-dialog");
  const evidenceGallery = document.getElementById("evidence-gallery");
  const evidenceModuleName = document.getElementById("evidence-module-name");
  const evidencePreviewDialog = document.getElementById("evidence-preview-dialog");
  const evidencePreviewImage = document.getElementById("evidence-preview-image");
  const evidencePreviewCaption = document.getElementById("evidence-preview-caption");
  const quizDialog = document.getElementById("quiz-dialog");
  const quizDialogTitle = document.getElementById("quiz-dialog-title");
  const quizDialogContent = document.getElementById("quiz-dialog-content");
  const quizProgress = document.getElementById("quiz-progress");
  let reviewState = loadReviewState();
  let evidenceReturnFocus = null;
  let previewReturnFocus = null;
  let quizReturnFocus = null;
  let activeQuiz = null;

  if (!modules.length) {
    console.error("No se cargaron módulos desde js/modulos.js.");
    emptyState.hidden = false;
    emptyState.textContent = "No se pudieron cargar los módulos. Revisa que js/modulos.js esté disponible.";
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
      return true;
    } catch (error) {
      console.warn("No se pudo guardar el progreso en este navegador.", error);
      return false;
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
      console.error("No se cargaron tecnologías desde js/tecnologias.js.");
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
    if (!values.length) {
      list.append(make("li", "", "Pendiente de confirmar en la guía del módulo."));
    } else {
      values.forEach((value) => {
        const item = make("li");
        if (typeof value === "string") {
          item.textContent = value;
        } else {
          item.append(make("strong", "", value.nombre || value.titulo || ""));
          if (value.descripcion) item.append(make("p", "detail-description", value.descripcion));
        }
        list.append(item);
      });
    }
    section.append(list);
    parent.append(section);
  }

  function loadReviewState() {
    try {
      const saved = localStorage.getItem(progressStorageKey);
      if (!saved) return {};
      const parsed = JSON.parse(saved);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new TypeError("El progreso guardado no tiene el formato esperado.");
      }
      return Object.fromEntries(
        modules
          .filter((module) => parsed[module.codigo] === true)
          .map((module) => [module.codigo, true])
      );
    } catch (error) {
      console.warn("No se pudo leer el progreso del Día 2.", error);
      return {};
    }
  }

  function saveReviewState() {
    try {
      localStorage.setItem(progressStorageKey, JSON.stringify(reviewState));
    } catch (error) {
      console.warn("No se pudo guardar el progreso del Día 2 en este navegador.", error);
    }
  }

  function normalizedText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("es");
  }

  function safeExternalUrl(value) {
    try {
      const url = new URL(value);
      return ["http:", "https:"].includes(url.protocol) ? url.href : null;
    } catch (error) {
      console.warn("Se omitió un enlace con formato no válido.", error);
      return null;
    }
  }

  function safeLocalPath(value) {
    if (typeof value !== "string" || !value.trim() || value.startsWith("/") ||
      value.startsWith("\\") || value.includes("..") || /^[a-z][a-z\d+.-]*:/i.test(value)) {
      return null;
    }
    return value;
  }

  function makeEvidenceSection(module) {
    const section = make("section", "evidence-block");
    const button = make("button", "evidence-trigger", "Evidencias");
    button.type = "button";
    button.setAttribute("aria-label", "Ver evidencias de " + module.codigo);
    button.addEventListener("click", () => openEvidenceGallery(module, button));
    section.append(button);
    return section;
  }

  function makeEvidenceCard(evidence, module) {
    const article = make("article", "evidence-item");
    article.append(make("span", "evidence-type", evidence.tipo || "Evidencia"));
    article.append(make("h3", "evidence-item-title", evidence.titulo));
    if (evidence.descripcion) article.append(make("p", "evidence-item-description", evidence.descripcion));

    if (evidence.tipo === "imagen") {
      const path = safeLocalPath(evidence.ruta);
      if (!path) {
        console.warn("Se omitió una ruta de imagen no válida.", evidence.ruta);
        return null;
      }
      const previewButton = make("button", "evidence-preview-trigger");
      previewButton.type = "button";
      previewButton.setAttribute("aria-label", "Ampliar imagen: " + evidence.titulo);
      const image = document.createElement("img");
      image.src = path;
      image.alt = evidence.alt || evidence.titulo;
      image.addEventListener("error", () => {
        if (!evidenceGallery.contains(article)) return;
        console.error("No se pudo cargar la evidencia: " + path);
        article.remove();
        if (!evidenceGallery.querySelector(".evidence-item")) {
          const message = make("p", "dialog-empty", "No se pudieron cargar las evidencias. Comprueba la conexión e inténtalo de nuevo.");
          const retry = make("button", "evidence-trigger evidence-retry", "Reintentar");
          retry.type = "button";
          retry.addEventListener("click", () => renderEvidenceGallery(module));
          evidenceGallery.replaceChildren(message, retry);
        }
      }, { once: true });
      previewButton.append(image);
      previewButton.addEventListener("click", () => openEvidencePreview(evidence, previewButton));
      article.append(previewButton);
      return article;
    }

    const href = evidence.url ? safeExternalUrl(evidence.url) : safeLocalPath(evidence.ruta);
    if (!href) {
      console.warn("Se omitió una evidencia sin una ruta o enlace válido.", evidence.titulo);
      return null;
    }
    const link = make("a", "evidence-link", evidence.tipo === "documento" ? "Abrir documento" : "Abrir recurso");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    article.append(link);
    return article;
  }

  function renderEvidenceGallery(module) {
    evidenceModuleName.textContent = module.codigo + " · " + module.nombre;
    evidenceGallery.replaceChildren();
    if (!module.evidencias.length) {
      evidenceGallery.append(make("p", "dialog-empty", "Aún no se han agregado evidencias para este módulo."));
    } else {
      module.evidencias.forEach((evidence) => {
        const card = makeEvidenceCard(evidence, module);
        if (card) evidenceGallery.append(card);
      });
      if (!evidenceGallery.childElementCount) {
        evidenceGallery.append(make("p", "dialog-empty", "Aún no se han agregado evidencias para este módulo."));
      }
    }
  }

  function openEvidenceGallery(module, trigger) {
    evidenceReturnFocus = trigger;
    renderEvidenceGallery(module);
    evidenceDialog.showModal();
    document.getElementById("evidence-dialog-close").focus();
  }

  function openEvidencePreview(evidence, trigger) {
    previewReturnFocus = trigger;
    evidencePreviewImage.src = evidence.ruta;
    evidencePreviewImage.alt = evidence.alt || evidence.titulo;
    evidencePreviewCaption.textContent = evidence.titulo + (evidence.descripcion ? " · " + evidence.descripcion : "");
    evidencePreviewDialog.showModal();
    document.getElementById("evidence-preview-close").focus();
  }

  function setupEvidenceDialogs() {
    document.getElementById("evidence-dialog-close").addEventListener("click", () => evidenceDialog.close());
    document.getElementById("evidence-preview-close").addEventListener("click", () => evidencePreviewDialog.close());
    [evidenceDialog, evidencePreviewDialog].forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
      dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        if (dialog.open) dialog.close();
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const topDialog = evidencePreviewDialog.open
        ? evidencePreviewDialog
        : evidenceDialog.open ? evidenceDialog : null;
      if (!topDialog) return;
      event.preventDefault();
      topDialog.close();
    });
    evidenceDialog.addEventListener("close", () => {
      if (evidenceReturnFocus && evidenceReturnFocus.isConnected) evidenceReturnFocus.focus();
    });
    evidencePreviewDialog.addEventListener("close", () => {
      evidencePreviewImage.removeAttribute("src");
      if (previewReturnFocus && previewReturnFocus.isConnected) previewReturnFocus.focus();
    });
  }

  function getBestQuizScore(id) {
    const stored = readStorage("quiz-best:" + id, null);
    if (!stored) return null;
    try {
      const score = JSON.parse(stored);
      if (!score || !Number.isInteger(score.score) || !Number.isInteger(score.total)) return null;
      return score;
    } catch (error) {
      console.warn("No se pudo interpretar el mejor puntaje guardado del quiz.", error);
      return null;
    }
  }

  function saveBestQuizScore(id, score, total) {
    const best = getBestQuizScore(id);
    if (best && best.score >= score) return best;
    const result = {
      score,
      total,
      percent: Math.round((score / total) * 100),
      date: new Date().toISOString()
    };
    return writeStorage("quiz-best:" + id, JSON.stringify(result)) ? result : false;
  }

  function bestScoreLabel(score) {
    if (score === false) return "No se pudo guardar el mejor puntaje en este navegador.";
    if (!score) return "Aún no hay un puntaje guardado.";
    const date = score.date && Number.isFinite(Date.parse(score.date))
      ? " · " + new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(score.date))
      : "";
    return "Mejor resultado: " + score.score + " de " + score.total + " (" + score.percent + "%)" + date;
  }

  function shuffleQuestions(items) {
    const shuffled = items.slice();
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  }

  function startQuiz(title, questions, storageId, trigger, shuffle) {
    activeQuiz = {
      title,
      questions: shuffle ? shuffleQuestions(questions) : questions.slice(),
      storageId,
      index: 0,
      score: 0,
      answered: false
    };
    quizReturnFocus = trigger;
    quizDialogTitle.textContent = title;
    renderQuizQuestion();
    quizDialog.showModal();
    document.getElementById("quiz-dialog-close").focus();
  }

  function renderQuizQuestion() {
    const question = activeQuiz.questions[activeQuiz.index];
    activeQuiz.answered = false;
    quizProgress.textContent = "Pregunta " + (activeQuiz.index + 1) + " de " + activeQuiz.questions.length;
    quizDialogContent.replaceChildren();

    const form = make("form", "quiz-form");
    const fieldset = make("fieldset", "quiz-question");
    const questionLabel = question.module
      ? question.module + " · " + question.pregunta
      : question.pregunta;
    fieldset.append(make("legend", "", (activeQuiz.index + 1) + ". " + questionLabel));
    question.opciones.forEach((option, optionIndex) => {
      const label = make("label", "quiz-option");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "quiz-answer";
      input.value = String(optionIndex);
      input.required = true;
      label.dataset.optionIndex = String(optionIndex);
      label.append(input, make("span", "", option));
      fieldset.append(label);
    });
    form.append(fieldset);

    const actions = make("div", "quiz-actions");
    const submit = make("button", "button button-primary button-small", "Comprobar respuesta");
    submit.type = "submit";
    actions.append(submit);
    form.append(actions);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const selected = form.querySelector('input[name="quiz-answer"]:checked');
      if (!selected) {
        form.reportValidity();
        return;
      }

      activeQuiz.answered = true;
      const isCorrect = Number(selected.value) === question.respuesta;
      if (isCorrect) activeQuiz.score += 1;
      fieldset.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
        const label = input.closest(".quiz-option");
        if (Number(input.value) === question.respuesta) label.classList.add("is-answer-correct");
        if (input === selected && !isCorrect) label.classList.add("is-answer-incorrect");
      });

      const feedback = make("p", "quiz-feedback" + (isCorrect ? " is-success" : ""));
      feedback.setAttribute("role", "status");
      feedback.textContent = (isCorrect ? "Respuesta correcta. " : "Respuesta incorrecta. Respuesta correcta: " + question.opciones[question.respuesta] + ". ") +
        "Explicación: " + question.explicacion;
      form.append(feedback);

      submit.remove();
      const next = make("button", "button button-primary button-small",
        activeQuiz.index === activeQuiz.questions.length - 1 ? "Ver resultado" : "Siguiente pregunta");
      next.type = "button";
      next.addEventListener("click", () => {
        if (activeQuiz.index === activeQuiz.questions.length - 1) {
          renderQuizResult();
          return;
        }
        activeQuiz.index += 1;
        renderQuizQuestion();
        quizDialogContent.querySelector('input[name="quiz-answer"]').focus();
      });
      actions.append(next);
    });
    quizDialogContent.append(form);
    form.querySelector('input[name="quiz-answer"]').focus();
  }

  function renderQuizResult() {
    const total = activeQuiz.questions.length;
    const percentage = Math.round((activeQuiz.score / total) * 100);
    const best = saveBestQuizScore(activeQuiz.storageId, activeQuiz.score, total);
    writeStorage("quiz:" + activeQuiz.storageId, String(activeQuiz.score));
    quizProgress.textContent = "Intento completado";
    quizDialogContent.replaceChildren();

    const result = make("section", "quiz-result");
    result.setAttribute("aria-live", "polite");
    result.append(make("p", "quiz-result-score", activeQuiz.score + " / " + total));
    result.append(make("p", "quiz-result-percent", percentage + "%"));
    result.append(make("p", "quiz-result-message", percentage === 100
      ? "¡Excelente! Respondiste correctamente todas las preguntas."
      : percentage >= 70
        ? "Buen repaso. Revisa las explicaciones para consolidar lo aprendido."
        : "Vuelve a revisar la ficha y practica de nuevo."));
    result.append(make("p", "quiz-best-readout", bestScoreLabel(best)));

    const actions = make("div", "quiz-actions");
    const retry = make("button", "button button-primary button-small", "Repetir intento");
    retry.type = "button";
    retry.addEventListener("click", () => startQuiz(
      activeQuiz.title,
      activeQuiz.questions,
      activeQuiz.storageId,
      quizReturnFocus,
      activeQuiz.storageId === "general"
    ));
    const close = make("button", "button button-secondary button-small", "Cerrar");
    close.type = "button";
    close.addEventListener("click", () => quizDialog.close());
    actions.append(retry, close);
    result.append(actions);
    quizDialogContent.append(result);
    updateBestScoreDisplays();
  }

  function updateBestScoreDisplays() {
    document.querySelectorAll("[data-quiz-best]").forEach((element) => {
      element.textContent = bestScoreLabel(getBestQuizScore(element.dataset.quizBest));
    });
  }

  function makeQuiz(module) {
    const details = make("details", "quiz-details");
    const summary = make("summary", "", "Autoevaluación · " + module.quiz.length + " preguntas");
    const best = make("p", "quiz-best-readout", bestScoreLabel(getBestQuizScore(module.id)));
    best.dataset.quizBest = module.id;
    const start = make("button", "button button-primary button-small", "Iniciar quiz de " + module.codigo);
    start.type = "button";
    start.addEventListener("click", () => startQuiz(module.codigo + " · " + module.nombre, module.quiz, module.id, start, false));
    details.append(summary, best, start);
    return details;
  }

  function makeSelfEvaluation(member) {
    const details = make("details", "self-evaluation-card");
    const summary = make("summary");
    summary.append(make("span", "diary-role", member.role.toUpperCase()), make("strong", "", member.name));
    const form = make("form", "self-evaluation-form");
    const storageKey = "self-evaluation:" + member.id;
    const feedback = make("p", "self-evaluation-feedback");
    feedback.setAttribute("aria-live", "polite");

    const strengths = make("fieldset", "self-evaluation-fieldset");
    strengths.append(make("legend", "", "Tres cosas que consideras que realizaste bien"));
    ["Primera cosa", "Segunda cosa", "Tercera cosa"].forEach((labelText, index) => {
      const label = make("label", "self-evaluation-label", labelText);
      const input = document.createElement("textarea");
      input.name = "fortaleza" + (index + 1);
      input.rows = 2;
      input.maxLength = 400;
      label.append(input);
      strengths.append(label);
    });
    form.append(strengths);

    const improvementLabel = make("label", "self-evaluation-label", "Una cosa que mejorarías");
    const improvement = document.createElement("textarea");
    improvement.name = "mejora";
    improvement.rows = 2;
    improvement.maxLength = 400;
    improvementLabel.append(improvement);
    form.append(improvementLabel);

    const ratings = make("fieldset", "self-evaluation-fieldset");
    ratings.append(make("legend", "", "Puntuación personal de cada criterio (1 a 10)"));
    [
      "Contenido por módulo",
      "Interactividad",
      "Diseño y accesibilidad",
      "Control de versiones",
      "Dominio individual"
    ].forEach((criterion, index) => {
      const label = make("label", "self-evaluation-rating", criterion);
      const input = document.createElement("input");
      input.type = "number";
      input.name = "criterio" + (index + 1);
      input.min = "1";
      input.max = "10";
      input.step = "1";
      input.inputMode = "numeric";
      input.setAttribute("aria-label", criterion + ", puntuación del 1 al 10");
      label.append(input);
      ratings.append(label);
    });
    form.append(ratings);

    const reflectionLabel = make("label", "self-evaluation-label", "Reflexión sobre tu aprendizaje y contribución al equipo");
    const reflection = document.createElement("textarea");
    reflection.name = "reflexion";
    reflection.rows = 4;
    reflection.maxLength = 1000;
    reflectionLabel.append(reflection);
    form.append(reflectionLabel);

    const actions = make("div", "quiz-actions");
    const save = make("button", "button button-primary button-small", "Guardar en este navegador");
    save.type = "submit";
    const clear = make("button", "button button-secondary button-small", "Borrar mi reflexión");
    clear.type = "button";
    actions.append(save, clear, feedback);
    form.append(actions);
    details.append(summary, form);

    const stored = readStorage(storageKey, null);
    if (stored) {
      try {
        const values = JSON.parse(stored);
        Object.entries(values).forEach(([name, value]) => {
          const field = form.elements.namedItem(name);
          if (field && typeof value === "string") field.value = value;
        });
      } catch (error) {
        console.warn("No se pudo interpretar la autoevaluación guardada.", error);
      }
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form).entries());
      feedback.textContent = writeStorage(storageKey, JSON.stringify(values))
        ? "Tu reflexión quedó guardada en este navegador."
        : "No se pudo guardar. Comprueba la configuración de almacenamiento del navegador.";
    });
    clear.addEventListener("click", () => {
      try {
        localStorage.removeItem(storagePrefix + storageKey);
        form.reset();
        feedback.textContent = "Se borró la reflexión guardada en este navegador.";
      } catch (error) {
        console.warn("No se pudo borrar la autoevaluación guardada.", error);
        feedback.textContent = "No se pudo borrar la reflexión guardada.";
      }
    });
    return details;
  }

  function setupSelfEvaluations() {
    const grid = document.getElementById("self-evaluation-grid");
    grid.replaceChildren(...selfEvaluationTeam.map(makeSelfEvaluation));
  }

  function setupQuizDialog() {
    document.getElementById("quiz-dialog-close").addEventListener("click", () => quizDialog.close());
    quizDialog.addEventListener("click", (event) => {
      if (event.target === quizDialog) quizDialog.close();
    });
    quizDialog.addEventListener("close", () => {
      activeQuiz = null;
      if (quizReturnFocus && quizReturnFocus.isConnected) quizReturnFocus.focus();
      quizReturnFocus = null;
    });
  }

  function makeCard(module) {
    const article = make("article", "module-card");
    article.dataset.category = module.categoria;

    const header = make("div", "card-topline");
    header.append(make("span", "category-tag", module.categoria.toUpperCase()));
    header.append(make("span", "module-id", module.codigo));
    article.append(header);

    article.append(make("h3", "module-title", module.nombre));
    article.append(make("p", "module-summary", module.resumen));

    const chips = make("ul", "technology-list");
    chips.setAttribute("aria-label", "Programas y herramientas");
    [...new Set([...module.programas, ...module.herramientas])].forEach((tool) => {
      chips.append(make("li", "", tool));
    });
    if (chips.childElementCount) article.append(chips);

    const footer = make("div", "card-footer");
    const ownerText = module.docente.length === 1 && module.docente[0] === "Por confirmar"
      ? "Docente por confirmar"
      : "Docente: " + module.docente.join(" · ");
    const owner = make("span", "module-owner", ownerText);
    const reviewedLabel = make("label", "review-label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "review-checkbox";
    checkbox.checked = reviewState[module.codigo] === true;
    checkbox.setAttribute("aria-label", "Marcar " + module.codigo + " como revisado");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) reviewState[module.codigo] = true;
      else delete reviewState[module.codigo];
      article.classList.toggle("is-reviewed", checkbox.checked);
      saveReviewState();
      updateProgress();
    });
    reviewedLabel.append(checkbox, make("span", "", "Marcar como revisado"));
    footer.append(owner, reviewedLabel);
    article.append(footer);
    article.classList.toggle("is-reviewed", checkbox.checked);
    article.append(makeEvidenceSection(module));

    const details = make("details", "module-details");
    const summary = make("summary", "", "Ver ficha completa");
    const body = make("div", "module-detail-content");
    appendList(body, "Aprendizajes clave", module.aprendizajesClave);
    appendList(body, "Instrumentos", module.instrumentos);
    appendList(body, "Programas", module.programas);
    appendList(body, "Herramientas", module.herramientas, "inline-list");

    const resources = make("section", "detail-block");
    resources.append(make("h4", "", "Recursos oficiales para continuar"));
    const resourceLinks = make("div", "resource-links");
    module.recursos.forEach((resource) => {
      const href = safeExternalUrl(resource.url);
      if (!href) return;
      const item = make("article", "resource-item");
      const link = make("a", "", resource.titulo);
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      item.append(link, make("p", "resource-description", resource.descripcion));
      resourceLinks.append(item);
    });
    if (!resourceLinks.childElementCount) {
      resourceLinks.append(make("p", "pending-note", "Recurso específico pendiente de confirmar con la guía del módulo."));
    }
    resources.append(resourceLinks);
    body.append(resources);
    if (Array.isArray(module.quiz) && module.quiz.length) body.append(makeQuiz(module));
    details.append(summary, body);
    article.append(details);
    return article;
  }

  function fillFilters() {
    const categories = [...new Set(modules.map((module) => module.categoria))].sort((a, b) => a.localeCompare(b, "es"));
    categories.forEach((category) => categoryFilter.append(new Option(category, category)));
    const owners = [...new Set(modules.flatMap((module) => module.docente))].sort((a, b) => a.localeCompare(b, "es"));
    owners.forEach((owner) => ownerFilter.append(new Option(owner, owner)));
  }

  function renderModules() {
    if (!moduleCards.size) {
      modules.forEach((module) => {
        const card = makeCard(module);
        moduleCards.set(module.codigo, card);
      });
      grid.replaceChildren(...moduleCards.values());
      observeReveals(grid);
      bindTilt(grid.querySelectorAll(".module-card"));
    }

    const query = normalizedText(search.value.trim());
    const category = categoryFilter.value;
    const owner = ownerFilter.value;
    let visibleCount = 0;
    modules.forEach((module) => {
      const card = moduleCards.get(module.codigo);
      const searchable = normalizedText([
        module.codigo, module.nombre, module.categoria, module.resumen,
        ...module.docente, ...module.programas, ...module.herramientas,
        ...module.aprendizajesClave,
        ...module.instrumentos.flatMap((item) => [item.nombre, item.descripcion]),
        ...module.recursos.flatMap((item) => [item.titulo, item.descripcion]),
        ...module.evidencias.flatMap((item) => [item.titulo, item.descripcion])
      ].join(" "));
      const matches = searchable.includes(query) &&
        (category === "all" || module.categoria === category) &&
        (owner === "all" || module.docente.includes(owner));
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    emptyState.hidden = visibleCount !== 0;
    liveRegion.textContent = "Mostrando " + visibleCount + " de " + modules.length + " módulos";
    updateProgress();
  }

  function updateProgress() {
    const checked = modules.filter((module) => reviewState[module.codigo] === true).length;
    const percentage = modules.length ? Math.round((checked / modules.length) * 100) : 0;
    progressValue.textContent = percentage + "%";
    progressCaption.textContent = checked + " de " + modules.length + " módulos revisados";
    progressFill.style.width = percentage + "%";
    progressBar.setAttribute("aria-valuenow", String(percentage));
  }

  function setupTheme() {
    const button = document.getElementById("theme-toggle");
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const savedTheme = readStorage("theme", null);
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    metaThemeColor.content = theme === "light" ? "#E1E8DA" : "#18241B";
    updateThemeButton(button, theme);
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      metaThemeColor.content = nextTheme === "light" ? "#E1E8DA" : "#18241B";
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
      const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      const flowShift = prefersReducedMotion ? 0 : (scrollProgress - 0.5) * Math.min(window.innerHeight * 0.3, 240);
      root.style.setProperty("--scroll-shift", scrollShift.toFixed(1) + "px");
      root.style.setProperty("--flow-shift", flowShift.toFixed(1) + "px");
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
    setupQuizDialog();
    setupSelfEvaluations();
    document.getElementById("general-quiz-start").addEventListener("click", (event) => {
      const questions = modules.flatMap((module) => module.quiz.map((question) => ({
        ...question,
        module: module.codigo
      })));
      startQuiz("Quiz general · los nueve módulos", questions, "general", event.currentTarget, true);
    });
    [search, categoryFilter, ownerFilter].forEach((control) => {
      control.addEventListener(control === search ? "input" : "change", renderModules);
    });
    const clearFilters = () => {
      search.value = "";
      categoryFilter.value = "all";
      ownerFilter.value = "all";
      renderModules();
      search.focus();
    };
    document.getElementById("clear-filters").addEventListener("click", clearFilters);
    document.getElementById("clear-empty-filters").addEventListener("click", clearFilters);
    document.getElementById("reset-progress").addEventListener("click", () => {
      const confirmed = window.confirm("¿Quieres reiniciar el progreso y las autoevaluaciones del Día 2 guardados en este navegador?");
      if (!confirmed) return;
      reviewState = {};
      try {
        localStorage.removeItem(progressStorageKey);
        modules.forEach((module) => {
          localStorage.removeItem(storagePrefix + "quiz:" + module.id);
          localStorage.removeItem(storagePrefix + "quiz-best:" + module.id);
        });
        localStorage.removeItem(storagePrefix + "quiz-best:general");
      } catch (error) {
        console.warn("No se pudo borrar por completo el progreso del Día 2.", error);
      }
      moduleCards.forEach((card) => {
        card.classList.remove("is-reviewed");
        card.querySelector(".review-checkbox").checked = false;
        const feedback = card.querySelector(".quiz-feedback");
        if (feedback) {
          feedback.textContent = "";
          feedback.classList.remove("is-success");
        }
      });
      updateBestScoreDisplays();
      updateProgress();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && !evidenceDialog.open && !evidencePreviewDialog.open &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
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
  setupEvidenceDialogs();
  setupActions();
  renderModules();
  setupEditorialMotion();
  setupScrollEffects();
  observeReveals(document);
})();

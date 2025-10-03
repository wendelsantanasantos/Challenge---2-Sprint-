(function () {
  function findMissionText(checkbox) {
    if (checkbox.nextElementSibling && checkbox.nextElementSibling.tagName === "LABEL") {
      return checkbox.nextElementSibling;
    }
    const container = checkbox.closest(".d-flex, .missao-item, .list-group-item, .row, .mission, .missao");
    if (container) {
      const p = container.querySelector("p, .texto-missao, span");
      if (p) return p;
    }
    if (checkbox.nextElementSibling && checkbox.nextElementSibling.firstElementChild) {
      const maybeP = checkbox.nextElementSibling.querySelector("p, .texto-missao, span");
      if (maybeP) return maybeP;
    }
    return null;
  }

  function applyStyle(checkbox) {
    const missionText = findMissionText(checkbox);
    if (missionText) {
      if (checkbox.checked) {
        missionText.style.textDecoration = "line-through";
        missionText.style.opacity = "0.6";
      } else {
        missionText.style.textDecoration = "none";
        missionText.style.opacity = "1";
      }
    }
    const cont = checkbox.closest('.list-group-item, li, .missao-item, .mission');
    if (cont) {
      if (checkbox.checked) cont.classList.add('concluida');
      else cont.classList.remove('concluida');
    }
  }

  function updateCounter() {
    const checkboxes = Array.from(document.querySelectorAll("input.missao-checkbox[type='checkbox']"));
    const total = checkboxes.length;
    const done = checkboxes.filter(cb => cb.checked).length;
    const counters = document.querySelectorAll(".stat-number, .missoes-contador, .contador-missoes");
    counters.forEach(c => (c.textContent = `${done}/${total}`));
  }

  function storageKeyFor(cb, index) {
    if (cb.id) return "missoes:" + cb.id;
    return "missoes:objetivos:" + index;
  }

  function init() {
    const checkboxes = Array.from(document.querySelectorAll("input.missao-checkbox[type='checkbox']"));
    checkboxes.forEach((cb, idx) => {
      const key = storageKeyFor(cb, idx);
      const saved = localStorage.getItem(key);
      if (saved === "true" || saved === "false") cb.checked = (saved === "true");
      applyStyle(cb);
      cb.addEventListener("change", () => {
        localStorage.setItem(key, cb.checked ? "true" : "false");
        applyStyle(cb);
        updateCounter();
      });
    });
    updateCounter();
  }

  document.addEventListener("DOMContentLoaded", init);

  function updateCounter() {
  const checkboxes = Array.from(document.querySelectorAll("input.missao-checkbox[type='checkbox']"));
  const total = checkboxes.length;
  const done = checkboxes.filter(cb => cb.checked).length;

  // Atualizar contadores X/Y
  const counters = document.querySelectorAll(".stat-number, .missoes-contador, .contador-missoes");
  counters.forEach(c => (c.textContent = `${done}/${total}`));

  // Calcular percentual
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  // Atualizar elementos que mostram percentual (se existirem)
  const percentLabels = document.querySelectorAll(".missoes-progress small.fw-bold, .percentual-missoes");
  percentLabels.forEach(el => (el.textContent = `${percent}%`));

  // Atualizar barra de progresso
  const bar = document.querySelector(".missoes-progress .progress-bar");
  if (bar) {
    bar.style.width = percent + "%";
    bar.setAttribute("aria-valuenow", percent);
  }
}
})();
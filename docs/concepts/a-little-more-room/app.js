// Selections are explicit requests, not inferred nervous-system states.
// The unenhanced document shows every invitation and its ordinary links.
const options = Array.from(
  document.querySelectorAll('input[name="beginning"]'),
);
const panels = Array.from(document.querySelectorAll("[data-panel]"));
const picker = document.querySelector("#picker");
const ending = document.querySelector("#ending");
const status = document.querySelector("#choice-status");
const quiet = document.querySelector("#quiet");
const selected = () => options.find((option) => option.checked);
document.querySelector(".choices").hidden = false;
const showSelection = (announce) => {
  const choice = selected();
  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== choice.value;
  });
  if (announce)
    status.textContent = `Invitation: ${panels.find((panel) => panel.dataset.panel === choice.value).querySelector("h3").textContent}`;
};

options.forEach((option) =>
  option.addEventListener("change", () => showSelection(true)),
);
document.querySelectorAll(".done").forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", () => {
    picker.hidden = true;
    ending.hidden = false;
    status.textContent = "";
    document.querySelector("#ending-title").focus();
  });
});
document.querySelector("#restart").addEventListener("click", () => {
  ending.hidden = true;
  picker.hidden = false;
  selected().focus();
});
quiet.hidden = false;
quiet.addEventListener("click", () => {
  const active = quiet.getAttribute("aria-pressed") !== "true";
  quiet.setAttribute("aria-pressed", String(active));
  document.body.classList.toggle("quiet", active);
});
showSelection(false);

// These are requests the visitor selects, not inferred health states.
// All invitations remain available if enhancement JavaScript is unavailable.
export {};

const options = Array.from(
  document.querySelectorAll<HTMLInputElement>('input[name="beginning"]'),
);
const panels = Array.from(
  document.querySelectorAll<HTMLElement>("[data-panel]"),
);
const choices = document.querySelector<HTMLFieldSetElement>(".choices");
const picker = document.querySelector<HTMLElement>("#picker");
const ending = document.querySelector<HTMLElement>("#ending");
const endingTitle = document.querySelector<HTMLElement>("#ending-title");
const status = document.querySelector<HTMLElement>("#choice-status");
const restart = document.querySelector<HTMLButtonElement>("#restart");
const quiet = document.querySelector<HTMLButtonElement>("#quiet");

if (
  choices &&
  picker &&
  ending &&
  endingTitle &&
  status &&
  restart &&
  options.length
) {
  const selected = () => options.find((option) => option.checked) ?? options[0];
  const showSelection = (announce = false) => {
    const activePanel = panels.find(
      (panel) => panel.dataset.panel === selected().value,
    );
    panels.forEach((panel) => {
      panel.hidden = panel !== activePanel;
    });
    if (announce && activePanel) {
      status.textContent = `Invitation: ${activePanel.querySelector("h3")?.textContent ?? ""}`;
    }
  };

  options.forEach((option) =>
    option.addEventListener("change", () => showSelection(true)),
  );
  document.querySelectorAll<HTMLButtonElement>(".done").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", () => {
      picker.hidden = true;
      ending.hidden = false;
      status.textContent = "";
      endingTitle.focus();
    });
  });
  restart.addEventListener("click", () => {
    ending.hidden = true;
    picker.hidden = false;
    selected().focus();
  });
  showSelection();
  choices.hidden = false;
}

if (quiet) {
  quiet.hidden = false;
  quiet.addEventListener("click", () => {
    const active = quiet.getAttribute("aria-pressed") !== "true";
    quiet.setAttribute("aria-pressed", String(active));
    document.body.classList.toggle("quiet", active);
  });
}

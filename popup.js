import { compareListings } from "./codes.mjs";
import { releases } from "./releases.mjs";

const form = document.querySelector("#compare-form");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const results = document.querySelector("#results");
const status = document.querySelector("#status");
const matches = document.querySelector("#matches");

function renderMatches(event) {
  event.preventDefault();
  const codes = compareListings(first.value, second.value);
  const shared = codes.filter(item => item.inFirst && item.inSecond).length;
  const isComparison = Boolean(first.value.trim() && second.value.trim());

  matches.replaceChildren();
  results.hidden = false;

  if (codes.length === 0) {
    status.textContent = "No complete style code found. Try a code such as CT8012-047.";
    return;
  }

  if (isComparison) {
    const bothHaveCodes = codes.some(item => item.inFirst) && codes.some(item => item.inSecond);
    status.textContent = bothHaveCodes
      ? (shared ? `${shared} exact style code${shared === 1 ? "" : "s"} shared.` : "The listings share no exact style codes.")
      : "Only one listing contains a complete style code.";
  } else {
    status.textContent = `${codes.length} style code${codes.length === 1 ? "" : "s"} found.`;
  }

  for (const item of codes) {
    const row = document.createElement("li");
    const code = document.createElement("strong");
    const location = item.inFirst && item.inSecond ? "Both listings" : item.inFirst ? "First listing" : "Second listing";
    code.textContent = item.code;
    row.append(code, ` · ${location}`);

    const detail = document.createElement("p");
    const record = releases[item.code];
    if (record) {
      const source = document.createElement("a");
      source.href = record.source;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = "Nike record";
      detail.append(`${record.name} · ${record.size} · `, source);
    } else {
      detail.textContent = "Outside the six-release reference. Check the full code with the manufacturer.";
    }
    row.append(detail);
    matches.append(row);
  }
}

form.addEventListener("submit", renderMatches);
form.addEventListener("reset", () => {
  matches.replaceChildren();
  status.textContent = "";
  results.hidden = true;
});

document.querySelector("#example").addEventListener("click", () => {
  first.value = "Air Jordan 11 Gamma, adult · CT8012-047";
  second.value = "Air Jordan 11 Gamma, Big Kids · 378038-047";
  form.requestSubmit();
});

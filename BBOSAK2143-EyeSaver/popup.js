const btn = document.getElementById("toggle");
const status = document.getElementById("status");

function render(enabled) {
  status.textContent = enabled ? "Status: Protecting Eyes" : "Status: Paused";
  btn.textContent = enabled ? "Pause Eye-Saver" : "Enable Eye-Saver";
  btn.className = enabled ? "on" : "";
}

chrome.storage.local.get({ enabled: true }, (data) => render(data.enabled));

btn.addEventListener("click", () => {
  chrome.storage.local.get({ enabled: true }, (data) => {
    const next = !data.enabled;
    chrome.storage.local.set({ enabled: next }, () => render(next));
  });
});

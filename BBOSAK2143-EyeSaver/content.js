function applyState(enabled) {
  if (enabled) {
    document.documentElement.classList.add("bbosak-active");
  } else {
    document.documentElement.classList.remove("bbosak-active");
  }
}

chrome.storage.local.get({ enabled: true }, (data) => {
  applyState(data.enabled);
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    applyState(changes.enabled.newValue);
  }
});

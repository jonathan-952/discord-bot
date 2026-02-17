let hasTriggered = false;

function checkForAccepted() {
  const resultEl = document.querySelector(
    '[data-e2e-locator="submission-result"]'
  );

  if (!resultEl) return;

  const statusText = resultEl.textContent?.trim();

  if (statusText === "Accepted" && !hasTriggered) {
    hasTriggered = true;
    console.log("✅ Accepted detected!");
  }
}

function startObserver() {
  const observer = new MutationObserver(() => {
    checkForAccepted();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  console.log("👀 Observer started");
}

startObserver();

let lastUrl = location.href;

setInterval(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    hasTriggered = false;
    console.log("🔄 URL changed, reset trigger");
  }
}, 1000);

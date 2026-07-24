// Minimal service worker — its only job is to exist so the app is installable
// and can register as an Android share target. It doesn't cache anything.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {
  // Intentionally empty: let the network handle every request normally.
});

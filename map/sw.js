// Minimal service worker — exists so the app is installable and can register
// as an Android share target. It caches nothing (the Google map needs network).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {
  // Intentionally empty: let the network handle every request normally.
});

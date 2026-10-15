import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Pages saved by `npm run build:prerender` arrive with their content already in #root.
// Keep that saved copy on screen while the app builds itself in a hidden sibling,
// then swap once the app has drawn a page. Nothing is hydrated, so the two never clash.
if (container.hasChildNodes()) {
  const snapshot = document.createElement("div");
  snapshot.append(...Array.from(container.childNodes));
  const live = document.createElement("div");
  live.style.display = "none";
  container.append(snapshot, live);

  let swapped = false;
  const swap = () => {
    if (swapped) return;
    swapped = true;
    observer.disconnect();
    snapshot.remove();
    live.style.display = "";
  };
  const observer = new MutationObserver(() => {
    if (live.querySelector("h1, main")) requestAnimationFrame(swap);
  });
  observer.observe(live, { childList: true, subtree: true });
  setTimeout(swap, 5000);

  createRoot(live).render(<App />);
} else {
  createRoot(container).render(<App />);
}

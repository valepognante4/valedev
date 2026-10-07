export function trackSpot(event) {
  const node = event.currentTarget;
  const rect = node.getBoundingClientRect();
  node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  node.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function isItTab() {
  return window.matchMedia("(min-width: 500px) and (max-width: 600px)").matches;
}

export function isItPc() {
  return window.matchMedia("(min-width: 650px)").matches;
}

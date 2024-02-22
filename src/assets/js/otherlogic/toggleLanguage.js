const JP = document.querySelectorAll('[data-lang="jp"]');
const EN = document.querySelectorAll('[data-lang="en"]');
const ALL = document.querySelectorAll("[data-lang]");

function removeClasses() {
  ALL.forEach((element) => {
    element.classList.remove("hidden");
  });
}

export default function toggleLanguage(current) {
  removeClasses();
  const ALL = document.querySelectorAll("[data-lang]");
  ALL.forEach((element) => {
    if (current === "jp" && element.dataset.lang === "en") {
      element.classList.add("hidden"); // Add 'hidden' class to elements with lang "jp" if current is "jp"
    } else if (current === "en" && element.dataset.lang === "jp") {
      element.classList.add("hidden"); // Add 'hidden' class to elements with lang "en" if current is "en"
    }
  });
}

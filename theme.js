try {
  document.documentElement.dataset.theme =
    localStorage.getItem("jm-theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
} catch (e) {}

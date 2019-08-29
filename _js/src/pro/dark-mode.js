// # src / dark-mode.js
// Copyright (c) 2018 Florian Klampfer <https://qwtel.com/>

import { importTemplate, webComponentsReady } from "../common";

webComponentsReady.then(() => {
  const darkMode = importTemplate("_dark-mode-template");
  if (darkMode) {
    const navbarEl = document.querySelector(
      "#_navbar > .content > .nav-btn-bar"
    );
    navbarEl.appendChild(darkMode);

    document.body.classList.remove("no-color-transition");

    document.getElementById("_dark-mode").addEventListener("click", e => {
      e.preventDefault();
      const cl = document.body.classList;
      if (
        cl.contains("dark-mode") ||
        (!cl.contains("light-mode") &&
          matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        cl.remove("dark-mode");
        cl.add("light-mode");
      } else {
        cl.remove("light-mode");
        cl.add("dark-mode");
      }
    });
  }
});

const iconScript1 = document.createElement("script");
iconScript1.type = "module";
iconScript1.src =
  "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const iconScript2 = document.createElement("script");
iconScript2.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

const body = document.querySelector("body");

body.appendChild(iconScript1);
body.appendChild(iconScript2);

import templateHtml from "../template/index.html?raw"; // raw-loader
import "../template/css/index.scss"; // SCSS
import "../template/js/index.js"; // JS

const app = document.getElementById("app");

// Пример замены плейсхолдера в шаблоне
// const htmlWithProps = templateHtml.replace("{{ title }}", "Preview Header");

app.innerHTML = templateHtml;

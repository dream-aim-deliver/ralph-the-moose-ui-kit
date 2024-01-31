// script.js
document.addEventListener("DOMContentLoaded", function () {
  const repoNameElement = document.getElementById("repoName");
  const url = window.location.href;
  const pathItems = url.split("/");
  const lastItem = pathItems[pathItems.length - 1];
  repoNameElement.textContent = lastItem || "Ralph the Moose UI kit";
});

function redirectTo(path) {
  const home = window.location.href;
  window.location.href = home + path;
}

const showVisiBtn = document.getElementById("showVisi");
const showMisiBtn = document.getElementById("showMisi");
const visiContent = document.getElementById("visiContent");
const misiContent = document.getElementById("misiContent");

function toggleContent(showElement, hideElement) {
  if (showElement.classList.contains("show")) {
    showElement.classList.remove("show");
    setTimeout(() => showElement.classList.add("hidden"), 300);
  } else {
    hideElement.classList.remove("show");
    hideElement.classList.add("hidden");

    showElement.classList.remove("hidden");
    setTimeout(() => showElement.classList.add("show"), 10);
  }
}

showVisiBtn.addEventListener("click", () => toggleContent(visiContent, misiContent));
showMisiBtn.addEventListener("click", () => toggleContent(misiContent, visiContent));

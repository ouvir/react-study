let count = 0;
const countBtn = document.getElementById("count_click");
const countSpan = document.querySelector("span");

function Count() {
  count = count + 1;

  countSpan.innerText = `Total clicks: ${count}`;
}

countBtn.addEventListener("click", Count);

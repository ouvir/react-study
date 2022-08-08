var countBtn = document.getElementById("count_click");

function Count() {
  var A = countBtn.innerText;
  A = Number(A) + 1;
  countBtn.innerText = A;
}

countBtn.addEventListener("click", Count);

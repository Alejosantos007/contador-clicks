let count = 0;

const countDisplay = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

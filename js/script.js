let count = 0;

const countDisplay = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

clickBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () =>{
  if (count > 0) {
  count--;
  countDisplay.textContent = count;
}});

resetBtn.addEventListener("click", () => {
  count=0;
  countDisplay.textContent = count;
});
// Active Zkr
let azkar = document.querySelectorAll(".center-azkar .box");

azkar.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    azkar.forEach((ele) => {
      ele.classList.remove("active-zkr");
    });
    e.currentTarget.classList.add("active-zkr");
  });
});

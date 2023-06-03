let select = document.querySelector("select");
let cityName = document.querySelector(".city-name");

select.addEventListener("input", () => {
  cityName.innerHTML = select.value;
});

let prayTime = document.querySelector(".left-time-pray");
setInterval(() => {
  prayTime.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}, 1000);

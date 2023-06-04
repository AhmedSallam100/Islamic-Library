let select = document.querySelector("select");
let cityName = document.querySelector(".city-name");

select.addEventListener("input", () => {
  cityName.innerHTML = select.value;
});

let prayTime = document.querySelector(".left-time-pray");

setInterval(() => {
  prayTime.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}, 1000);

// Api Pray Time
let api;
let d = new Date();
let m = d.getMonth() - 2;

api = `https://api.aladhan.com/v1/timingsByCity/${m}-${d.getDay()}-${d.getFullYear()}?city=${
  select.value
}&country=egypt&method=8`;

let myApi = new XMLHttpRequest();
myApi.open("GET", api);
myApi.send();

myApi.onreadystatechange = function () {
  if (myApi.status === 200 && myApi.readyState === 4) {
    let prayObj = JSON.parse(myApi.responseText);
    console.log(prayObj);

    let timePray = document.querySelectorAll(".time-pray p");
    console.log(timePray);
    timePray[0].textContent = prayObj.data.timings.Fajr + "م";
    timePray[1].textContent = prayObj.data.timings.Sunrise + "م";
    timePray[2].textContent = prayObj.data.timings.Dhuhr + "م";
    timePray[3].textContent = prayObj.data.timings.Asr + "م";
    timePray[4].textContent = prayObj.data.timings.Maghrib + "م";
    timePray[5].textContent = prayObj.data.timings.Isha + "م";
  }
};

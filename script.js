gsap.from("#header", {y:-300, delay:0.2, duration:3, opacity:0.5, ease:"power4.out"})
gsap.from("#city", {y:-300, delay:1.2, duration:3, opacity:0.5, ease:"power4.out"})
gsap.from("#date", {y:-300, delay:2.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#temperature", {y:-300, delay:3.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#feelsLike", {y:-300, delay:4.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#conditions", {y:-300, delay:5.2, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#variation", {y:300, delay:6.2, duration:3, opacity:0, ease:"power4.out"})


const api = {
    endpoint: "http://api.openweathermap.org/data/2.5/",
    key: "bac9ac3d98649b318d11627f2e4318ad"
}

const input= document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter (e){
    if (e.keyCode === 13){
      getInfo(input.value)
    }  
}

async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const resReceived= await res.json();

displayResult(resReceived);

}

function   displayResult(resReceived){
let city= document.querySelector("#city");
city.textContent= `${resReceived.name}, ${resReceived.sys.country}`;


getOurDate();



let temperature= document.querySelector("#temperature");
temperature.innerHTML= `${Math.round(resReceived.main.temp)}<span>°</span>`;

let feelsLike = document.querySelector("#feelsLike");
feelsLike.innerHTML=` Feels like: ${Math.round(resReceived.main.feels_like)}<span>°</span>`;

let conditions= document.querySelector("#conditions");
conditions.textContent= `${resReceived.weather[0].main}`;

let variation= document.querySelector("#variation");
variation.innerHTML="Min: " +` ${Math.round(resReceived.main.temp_min)}<span>°</span>`+ " " + "Min: " + `${Math.round(resReceived.main.temp_max)}<span>°</span>`
}



function getOurDate(){

const myDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
let day = days[myDate.getDay()];


let todayDate=myDate.getDate();


let month = months[myDate.getMonth()];


let year= myDate.getFullYear();

let showDate= document.querySelector("#date");
 showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`
}
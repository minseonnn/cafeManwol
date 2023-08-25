//이 함수는 사용자의 위치를 줘 화면에 날씨를 보여 줄거야

const API_KEY = "05eb16ed77549a9a7d07ed3d3e82ccc5";

function onGeoSucess(position) {
  const lati = position.coords.latitude;
  const longi = position.coords.longitude; 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
  
}


function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSucess,onGeoError)

/*
getCurrentPosition()는 인자가 2개 필요해
하나는 모든 게 잘 됐을 때 실행 될 함수.
또 하나는 에러가 발생했을 때 함수

getCurrentPosition()는 성공했을 때와 그렇지 않을때 함수를 부르고 객체를 전달해줘, 함수 안에 인자(=객체)로 전달해줘 그러니 인자가 들어갈 자리를 마련해줘야해

lati와 longi는 숫자로 나와(내가 위치한 경도와 위도), 그리고 이 숫자들을 장소로 바꿔 줄 서비스를 사용해야 돼.  -->> openwheatherMAp API

fetch() : 
실제로 URL에 갈 필요없이 js가 대신 URL을 부를거야 - f12/network
fetch()는 사실 promise야, promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는거야, 서버에 어떤것을 물어봤는데 서버가 응답하는 시간이 5분 걸린다고 하면, 우리는 서버의 응답을 기다려야해 ==> then 사용
내 좌표를 얻어서 API로 DB에 질문을 던질거야
*/  
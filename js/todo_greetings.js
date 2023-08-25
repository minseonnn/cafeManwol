const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  
} else {
  paintGreetings();
}


/*
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  이 두개가 지금 중복되고 있음 -> function으로 만드는게 나을듯
  function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


*/

/*
링크의 기본동작은 클릭시 다른 페이지로 이동하는 것
alert은 좀 특이함, 모든 동작을 막음

유저가 이름을 입력하면 form이 사라지게 하고 싶음.
1. html 자체를 없애기
2. css를 이용해서 없애기

local Storage는 우리가 브라우저에 뭔가를 저장할 수 있게 해줘, 그리고 나중에 가져다 쓸 수 있어
개발자 도구의 application에서 확인할 수 있다.
set(저장) : localStorage.setItem("userName", "minseon")
get(불러오기) : localStorage.getItem("userName")
remove(삭제) : localStorage.removeItem("userName")

새로고침 하면 form이 살아남 userName을 저장했으면 form이 나타나지 않게 하고 싶음 (저장 후에는 form이 살아나긴 하지만 userName이 localStorage에 저장은 되어 있는 상태)

 -> form을 보여주기 전에, addeventListener하기 전에 유저정보가 있는지 알아보고, localStorage에 유저정보가 없다면 form이 나타나고 있으면 안보이게 하고싶음. 하지만 유저정보가 있다면 h1요소가 나타나게 하고싶음 
 ->그러면 처음에 form과 h1 모두 숨기고 시작해야함
*/

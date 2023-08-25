const images = ["todo_01.jpg", "todo_02.jpg", "todo_03.jpg"];

const chosenImg =images[Math.floor(Math.random() * images.length)];

//console.log(chosenImg);

// 우리는 항상 html을 먼저 작성하고 javascript를 사용해서 작성한 html을 다뤄왔지만 이번에는 javascript를 먼저 생성하고 html에 적용하는 것을 해보자

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`

// console.log(bgImg);

document.body.appendChild(bgImg);

// appendChild() : body에 html을 추가
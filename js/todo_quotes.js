const quotes = [
  {
    quote: "내 사랑이 이겨.",
    authoer: " - INFINITE - ",
  },
  {
    quote: "넌 날 사랑하게 될거야. 난 너의 전부가 되고 말거니까.",
    authoer: " - ON/OFF - ",
  },
  {
    quote: "내 우주는 전부 너야.",
    authoer: " - EXO - ",
  },
  {
    quote: "안녕 한 번쯤은 날 들어 봤겠지, 너의 사랑니.",
    authoer: " - F(x) - ",
  },
  {
    quote: "날 밀어내도 깊어지는 이 사랑을 봐. 내 입을 막아도 세상이 다 아는데.",
    authoer: " - Buzz - ",
  },
  {
    quote: "나만 사랑한다고 말해 나 밖에 없다고 말해.",
    authoer: " - EXO - ",
  },
  {
    quote: "황홀하게 말 없이 쳐다볼 때 마다 너한테 반해 난.  ",
    authoer: " - DAY6 - ",
  },
  {
    quote: "니가 등장하면서부터 내 삶과 꿈 미래 그 모든게 바뀌어.",
    authoer: " - DAY6 - ",
  },
  {
    quote: "이 밤은 짧고 넌 당연하지 않아.",
    authoer: " - SEVENTEEN - ",
  },
  {
    quote: "너와 같은 하늘 아래 숨쉬는 매 순간이 좋아, 난.",
    authoer: " - DAY6 - ",
  },
]

const quote = document.querySelector("#quote span:first-child");
const authoer = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todaysQuote.quote;
authoer.innerText = todaysQuote.authoer;

/*
quotes라는 변수는 배열이고 그 안에는 객체가 들어있어(object) 
각 객체들은 콤마로 구분해야해.
그리고 이 객체들은 string으로 된 명언을 가지고 있어 {a:string, b:string,}

배열의 길이에서 -1을 해야해 컴퓨터는 0부터 읽기 때문에

randomness

Math module은 이미 javascript에서 이미 load 되어서 제공하고 있어
Math.PI ...등
Math.random()도 그 중 하나, 0부터 1 사이의 랜덤한 숫자를 제공해
Math.random() * 10 이렇게 하면 0-10 사이의 숫자를 얻을 수 있음
Math.random()은 정수가 아닌 실수로 나옴
Math.round(1.1) -> 1 Math.round(1.5) -> 2 반올림함
Math.ceil(1) -> 1   Math.ceil(1.1) -> 2  Math.ceil(1.01) -> 2  올림
Math.floor(1.9) -> 1  Math.floor(1.99999) -> 1  내림

*/
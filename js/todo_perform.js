const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];
//console.log('{"name":"minse"}');

function saveToDos(){
  //localStorage.setItem("todos", toDos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  //클릭했던 li의 id를 가지고 있는 toDo를 지우고 싶어 -> toDo의 id가 li의 id와 다른걸 남기고 싶어. 내가 클릭한 li의 id와 다른 id가 있는 li는 남기겠다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove(); 
  saveToDos(); // 삭제하고 싶은 li를 삭제하고 새로 만들 배열을 다시 localStorage에 저장하기 위해서
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span); 
  li.appendChild(button)
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id : Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  //paintToDo는 오직 newToDo를 가지고 있어(string의 형태로) 이걸 오브젝트로 바꿀거임
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //parsedToDos.forEach(sayHello);
  //parsedToDos.forEach((item) => console.log(`hello ${item}`));
  parsedToDos.forEach(paintToDo);
}

/*
paintTodo(newTodoObj);
를 실행 시켰을때  [object Object] 라고 뜨는 이유가 뭔가요?
->`object Object`는 우리가 객체를 string으로 변환하려고 할때 객체가 보이는 모양임

js로 html태그에 id 만드는게 .id로 만든다는거 첨알았네요 ㅎㅎㅎㅎ
전 id값을 랜덤함수로 쓰실줄알았는데
Date.now()를 쓸줄이야 !!! 기발해요 ㅎ

id가 있는 이유 : id로 각각의 li item을 구별하고 싶어서

paintToDo()에서 li.id = newToDo.id;를 넣어서 li에 id를 부여한다.
사용자가 어떤 id를 지우길 원하는지 알려줘야해

deleteToDo()에서 보면 화면에서 li를 삭제하기 전에!! 어떤 li인지 알게돼, 그럼 삭제하기 전에 li의 id도 얻어.

li.remove();로 li element가 삭제 됐는데 어떻게 li의 id값을 참조할 수 있는건지? 
  혹시 li.remove()는 HTML에서만 element를 삭제하는거고 JS에서는 삭제되지않고 메모리에 남아있는건가요?
    -> li.remove() deletes it from the UI but we can still access the variable :)

forEach() 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행해.
그 배열의 요소는(=item) 오브젝트야

배열에서 item 삭제하기  -> 실제로는 item을 지우는 것이 아닌, 지우고싶은 item을 제외한 새 배열을 만드는 것. -->> filter() 사용
filter()는 forEach()와 비슷하다. 하지만 filter는 배열을 반환하고 forEach는 배열 내부의 각 항목에 대해서 작업을 수행한다. 비슷하지만 작업의 결과물은 다르다.

function funnyfilter() {

}
[1,2,3,4].filter(funnyfilter)
  -> funnyfilter(1), funnyfilter(2)... 이런식으로 forEach와 비슷하게 작동함 
  만약 새 배열에서 이 객체를 유지하고 싶으면, funnyfilter()가 true를 반환해야함 --> 만약 새 배열에서도 1,2,3,4를 포함하고 싶으면 funnyfilter는 반드시 true를 반환해야함. (false 리턴 시 전과 같은 item은 새 배열에 포함되지 않음.)

3을 제회한 새 배열을 만들고 싶다면
function funnyFilter(item){
  return item !== 3
} 
-> itme이 무엇인지 알려주기 위해서 인자를 받음 (item은 배열의 항목)
-> item이 3이 아니라면 true를 반환해.

<1000보다 작은 숫자만 배열에 남겨라>
const arr = [123, 4545, 45, 5, 542, 566];
function aFilter (item) {
  return item < 1000
}
arr.filter(aFilter);
-> [123, 45, 5, 542, 566]

<>
const todos = [ {text : a, id:34234, }, { text : b, id: 43432 }];
function aFilter(item) {
  return text !== a
}
todos.filter(aFilter);
-> todos = [{text: b, id: 43432}];

const arr = [1,2,3,4];
arr.filter(item => item > 2);
[3,4]
const newArr = arr.filter(item => item > 2);
  여기서 arr를  찾으면 arr = [1,2,3,4] 이렇게 되어있어 filter는 배열을 변경해주는 함수가 아니라 배열을 새로 만들어 주는 함수이기 때문. newArr = [3,4] 로 새로 만들어져있는 것을 확인할 수 있어.

  li.id의 데이터 타입은 string 왜냐하면 document안의 element라서( DOM의 id는 문자열)
  toDo.id의 데이터 타입은 number, newToDoObj.id = Date.now() 에서 얻은 숫자는 int형 
  데이터 타입이 맞지 않기 때문에 정상적으로 작동하지 않음 (비교불가)

*/
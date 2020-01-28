// 스텍, 큐, 팝?

// 배열은 인덱스가 있어야하는 단점이 있음
// 객체는 속성명이 있어야하는 단점이 있음

const colors = ["red", "green", "blue"];
console.log("원래의 배열 : "+colors);
colors.push("yellow"); // .push 배열 추가
console.log("요소를 추가한 후 : "+colors);
colors.pop();
console.log("요소를 제거한 후 : "+colors);
colors.sort(); // .sort는 abc순으로 정렬
console.log("요소를 정렬한 후 : "+colors);
colors.reverse();
console.log("요소를 역순으로 바꾼 후 :"+colors);
colors.push("black");
const splColor = colors.splice(0, 2); // 시작부터 두번째까지를 분할
console.log("스플라이스 한 후 splColor : "+splColor);
console.log("스플라이스 한 후 colors : "+colors);
const newColor = colors.join("-");
console.log("join을 한 후 : "+newColor);
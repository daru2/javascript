var txt1 = 'text1';
console.log(txt1);

if(true){
    var txt2 = "text2";
    console.log(txt2);
}

let txt3 = "text3"; // 같은 블록에서만 통용되는 선언
const txt4 = "kim"; // const는 변경을 할 수 없는 선언

console.log(txt3);
console.log(txt4);
txt3 = "lee";
console.log(txt3);
txt3 = 500;
//txt4 = "park"; // const라 바뀌지 않음 (아예 오류 )
//console.log(txt4);
if(true){
    let txt5 = "yang";
    console.log(txt5);
}
//console.log(txt5); // 같은 블록이 아니라 오류가 뜸



/*

 노드 자바스크립트
 확인은 터미널을을 열고 node 파일명.js
 
 */

console.log("for문1");
const colors = ["skyblue", "pink", "crimson"];
for ( let i=0; i<colors.length; i++ ){ // .length는 배열의 갯수
    console.log(colors[i]);
}

console.log("for문2");
for ( let key in colors ){ // 키는 배열의 인덱스번호
    console.log(key+" : "+colors[key]);
}

console.log("while문");
var i = 0;
while(colors[i] != null ){
    console.log(colors[i]);
    i++;
}

console.log("forEach문1");
colors.forEach(function(value){ // 배열명.forEach(function(value #꼭 벨류가 아니어도 됨){ 반복할 내용 });
    console.log(value);
});

console.log("forEach문2");
colors.forEach(value => console.log(value)); // 마찬가지로 value가 꼭 아니어도 됨
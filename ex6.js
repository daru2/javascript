var num1 = [10, 20, 30, 40, 50, 60];
var num2 = new Array(90, 80, 70, 60, 50, 40);
console.log("num1 배열의 요소 갯수 : "+num1.length);
var mixArr = ['a', 10, 'b', 20, new Date(), "youngsoo"];
var objArr = [ // 배열 안에 객체
    { "id":20202801, "name":"sungho", "dept":"developer" },
    { "id":20202802, "name":"donguk", "dept":"desiner" },
    { "id":20202803, "name":"hyunwoo", "dept":"frontend" },
];
var obj = { "num":1004, "name":"seulgi", "position":"publisher"};
console.log(num1);
console.log(num2);
console.log(mixArr);
console.log("NAME : "+objArr[2].name+", DEPT : "+objArr[2].dept);
console.log(obj);

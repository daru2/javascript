// 스위치문

let level = "A";

switch(level){
    case "A" : // case의 마무리는 반드시 break 포함
        console.log("VIP LEVEL");
        break;
    case "B" :
        console.log("Basic LEVEL");
        break;
    default : // default엔 break를 사용하지 않아도 됨
        console.log("Nothing LEVEL");
}
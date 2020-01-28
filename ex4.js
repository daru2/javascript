// for문을 이용한 구구단
for( let dan=2; dan<=9; dan++ ){
    console.log("# "+dan+"단 #");
    for ( let i=1; i<=9; i++ ){
        console.log(dan+"x"+i+"="+(dan*i));
    }
}
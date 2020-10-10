var variableVar = "123";
console.log(`variableVar : ${variableVar}`);

variableVar = "321";
console.log(`variableVar : ${variableVar}`);

let vL = "123";
vL = "321";
// let vL = "1234" let 은 재선언할 시 오류가 난다 
console.log("variableLet : " + vL);

const vC = "123";
// vC = "321"; const 는 재할당도 불가능하다 -> 상수라고 생각X object
console.log("variableConst : " + vC);
// const vCtest;
// const 는 선언시 할당을 안해주면 오류가 난다

if(true){
    var x = 'var';
}
console.log("var : " + x);
// 잘 출력된다 function scope

if(true){
    let y = 'let';
}
// console.log(`let :  ${y}`);
// 출력 X block scpoe -> if 블록 내에서만 (밖에선 X)

function colorF(){
    if(true){
        var color = 'blue';
        console.log("함수 내에 블록내에 출력 : " + color);
    }
    console.log("함수 내에 블록밖 출력 : " + color);
}

colorF();
// console.log("함수 밖에 출력 : " + color);
// var => function scope 이므로 function 밖에선 X 




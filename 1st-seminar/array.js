var arr1 = [];
console.log(arr1);
console.log(typeof arr1);

var arr2 = new Array(1,2,3,4,5);
console.log(arr2);
console.log(typeof arr2);

var arr3 = ['찬기',1,2,3,null,{name: 'CG', age:26}];
console.log(arr3);
console.log(typeof arr3);

//위에 세가지 배열모두 object type

console.log('Array 기본 함수')
var arr = [1, 2, 3, 4];

console.log(`arr의 길이: ${arr.length}`);

//push, pop
arr.push('new item');
console.log('arr push:', arr);
arr.pop();
console.log('arr pop:', arr);

//shift,unshift
arr.unshift('first item');
console.log('arr unshift:', arr);
arr.shift();
console.log('arr shift:', arr);

//includes 포함여부
console.log('arr.includes(4):', arr.includes(4));
console.log('arr.includes(1000):', arr.includes(1000));

//indexOf -> 있으면 index 없으면 -1
console.log('arr.indexOf(4):', arr.indexOf(4));
console.log('arr.indexOf(100):', arr.indexOf(100));

//concat  배열을 합쳐줌
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var concatArr = arr1.concat(arr2);
console.log('arr1.concat(arr2):', concatArr);

//join
var location = ["서울", "대전", "대구", "부산"];
console.log(location.join('-> '));

//reverse 
console.log(location.reverse().join('-> '));

//sort
var countries = ['Korea', 'Japan', 'China'];
console.log(countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (제대로 정렬이 되지 않았습니다.)
console.log(countries.sort( function(a, b) { return a.localeCompare(b); })); // Andorra,Österreich,Vietnam (제대로 정렬되었네요!) 유니코드 기준으로 문자 정렬
console.log('오름차순 정렬:', concatArr.sort((a, b) => a - b));
console.log('내림차순 정렬:', concatArr.sort(function(a, b) { return  b - a; }));

//filter 필터는 배열 요소 전체를 대상으로 조건을 걸어서 그 조건을 충족하는 결과를 새로운 배열을 반환해줌.
var number = [100, 234, -125, 1, 23, -637, -123];
var minusNumber = number.filter( item => item < 0);
console.log('minusNumber: ', minusNumber); 

//map  map은 배열 요소 전체를 대상으로 함수를 호출하고, 그 결과를 새로운 배열을 반환할때 주로 사용 -> 자주쓰임
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
var countriesLengths = countries.map( item => item.length );
console.log('countriesLengths: ',countriesLengths);


//reduce map은 배열을 반환할때 사용했지만 reduce는 값 하나를 반환할때 주로 사용 대표적인 예시로 1 ~ n 까지 더하기
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = number.reduce( (previousValue, currentValue) => {
  console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
  return previousValue + currentValue;
});

console.log('sum = ', sum);


var serverPart = ["김현기", "석영현", "강준우", "송정우", "신지혜", "이영은", "이진호"];
let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. ';
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩만 불러주세요~ '

for(let item in serverPart){ // in serverPart => index 출력
  serverIndexStr += item + '! ';
}
console.log(serverIndexStr);

for(let item of serverPart) { // of serverPart => 배열값 출력
  serverPartMemberNameStr += item + '! ';
}
console.log(serverPartMemberNameStr);

serverPart.forEach( item => {
  console.log(item);
})
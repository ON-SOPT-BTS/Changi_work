// 자신의 팀원들을 소개할 수 있는 json Array 만들기
// (팀원들의 이름, 사는곳, 나이, 취미, 정보를 출력하는 함수를 포함!) 

const team_member = [
    {
        name: "임찬기",
        location: "서울",
        age: 24,
        hobby: "Drink",
        info: "숙취"
    },
    {
        name: "김정재",
        location: "서울",
        age: 25,
        hobby: "Dance",
        info: "지민"
    },
    {
        name: "최선욱",
        location: "서울",
        age: 25,
        hobby: "스쿼시",
        info: "아디다스"
    },
    {
        name: "안재은",
        location: "서울",
        age: 24,
        hobby: "요리",
        info: "MVP"
    },
    {
        name: "김가영",
        location: "서울",
        age: 24,
        hobby: "꽃",
        info: "원예"
    },

];

const introduce = (members) =>{
    const name = members.map(item => item.name);
    const location = members.map(item => item.location);
    const age = members.map(item => item.age);
    const hobby = members.map(item => item.hobby);
    const info = members.map(item => item.info);
 
    console.log("팀원이름: " + name);
    console.log("팀원사는곳: " +location);
    console.log("팀원나이: " +age);
    console.log("팀원취미: " +hobby);
    console.log("팀원정보: " +info);

}

introduce(team_member);
//


const member = [
    {
        "name": "최정재",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "박남선",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "신민상",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "강효원",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "류세훈",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이가영",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이영현",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "남궁찬",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "김민주",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "최정훈",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "박주은",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이현준",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김수민",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김현상",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김채림",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이현상",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "홍혜진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "오승준",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "양재욱",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "최선준",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "박상수",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "임찬기",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "박진호",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "신지한",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김영은",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "송정훈",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "강준수",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "김중현",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김기찬",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "김우영",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "윤가인",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "이예진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "박수진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "최다슬",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "한승아",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김재은",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    }
]

const make_team = (members,teams) => {
    members.sort(()=>Math.random() -0.5);
    const OB_male = members.filter(item => item.status === "OB" && item.gender === "남");
    const OB_female = members.filter(item => item.status === "OB" && item.gender === "여");
    const YB_male = members.filter(item => item.status === "YB"&& item.gender === "남");
    const YB_female = members.filter(item => item.status === "YB"&& item.gender === "여");
    // console.log(OB_male);
    // console.log(OB_female);
    // console.log(YB_male);
    // console.log(YB_female);
    const length = [OB_male.length,OB_female.length,YB_male.length,YB_female.length];
    const longest = Math.max.apply(null, length);
    
    let i = 0;
    let j = 0;
    while(i < teams){
        eval("team_"+i+"= []");
        i++;
    }
    i=0;
    while(j < longest){
        if(OB_male[j] !== undefined) eval("team_"+i).push(OB_male[j]);
        if(YB_female[j] !== undefined) eval("team_"+i).push(YB_female[j]);
        if(OB_female[j] !== undefined) eval("team_"+i).push(OB_female[j]);
        if(YB_male[j] !== undefined) eval("team_"+i).push(YB_male[j]);
        i++;
        j++;
        if(i === teams) i = 0;    
    };
    i=0;
    while(i < teams){
        console.log(eval("team_"+i),eval("team_"+i).length);
        i++;
    }
    
}


//make_team(서버멤버,만들고 싶은 팀의 갯수)
//비율위주로 팀을짜서 팀원 수는 조금씩 불균등합니다ㅜㅜ
make_team(member,5);

const members = require('./member.js');

function getFemale(members){
    return new Promise((resolve, reject)=>{
        const female_members = members.filter(m => m.gender === "여");        
        setTimeout(()=>{
            resolve(female_members);
        },500);        
    })
}

function getYB(members){
    return new Promise((resolve, reject)=>{
        const YB_members = members.filter(m => m.status === "YB");        
        setTimeout(()=>{
            resolve(YB_members);
        },500);
    })
}

function getiOS(members){
    return new Promise((resolve, reject)=>{
        const iOS_members = members.filter(m => m.part === "iOS");        
        setTimeout(()=>{
            resolve(iOS_members);
        },500);

    })
}
getFemale(members)
    .then(members => getYB(members))
    .then(members => getiOS(members))
    .then(members => console.log(members))

const calculator = require('./calculator.js');
const a = 172;
const b = 74;
console.log(calculator.add(a,b));
console.log(calculator.substract(a,b));
console.log(calculator.multiply(a,b));
console.log(calculator.divide(a,b));


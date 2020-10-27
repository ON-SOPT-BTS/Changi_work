const fs = require('fs');
const crypto = require('crypto');

// const dir = 'Password_Files';
// if(!fs.existsSync(`/${dir}`)){
//     fs.mkdirSync(`/${dir}`);
// }

const numArr = [1, 2, 3, 4, 5];
const fileCommonName = 'PassWord';

numArr.forEach((num) => {
    const fileName = fileCommonName + num;
    const password = new Promise((resolve,reject)=>{
        crypto.randomBytes(64, (err, buf) => {
            const salt = buf.toString('base64');
            crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
                resolve(key.toString('base64'));
            });
        });
    })    
    password.then((pw)=>{
        fs.writeFile(`${fileName}.txt`,pw,()=>{
            console.log(`${fileName} 작성 완료`)
        })
    })
})
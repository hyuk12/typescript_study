import readLine from 'readline';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// // 1차 객체 표현법
// const user = {
//     name: rl.input ? rl.input : "이름 없음",
//     age: 20,
// };

// 2차 객체 표현법
const name1 = rl.on("name", (nameTest)=> nameTest ? nameTest : "이름 없음");

const user1 = {
    name: name1,
    age: 20,
}

// 3차 객체 표현법
const user2 = {
    name1,
    age: 20,
}

console.log(user1.name);
console.log(user2.name1);
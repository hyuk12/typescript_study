import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const dataType = "int";

rl.question('숫자를 입력해 주세요: ', (line) => {
    
    const num = Number(line);
    for(let i = 0; i < num; i++) {
        if(i % 4 === 0) {
            const byteNumber = i / 4;
            for(let j = 0; j - 1 < byteNumber; j++) {
                const result = "long " + dataType;
                console.log(result);
            }
        }
    }
    rl.close();
});
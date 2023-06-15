import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('숫자를 입력해 주세요: ', (line) => {
    // const result = line + 1000; 암묵적으로 변환
    // 숫자가 들어가야 하는 타입에 문자가 들어가거나 다른 타입이 들어가면 NaN반환
    // 그리고 true가 들어가면 1 false 0, null은 0, undefined는 NaN
    // BigInt도 변환은 가능하지만 NaN이라는 값이 존재하지 않기 때문에 런타임 에러가 발생한다.
    const num = Number(line);
    console.log(`입력된 숫자 더하기 1000: ${num + 1000}`);
    rl.close();
});
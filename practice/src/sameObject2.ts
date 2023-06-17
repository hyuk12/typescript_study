const foo1 = {num : 1234};
const bar1 = { ...foo1 };
// 여기서는 foo1을 복사하여 새로운 객체를 생성한다.
console.log(bar.num);
bar.num = 0;
console.log(foo.num);
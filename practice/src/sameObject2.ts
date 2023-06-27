
const foo = {num : 1235};
const bar1 = { ...foo };
// 여기서는 foo1을 복사하여 새로운 객체를 생성한다.
console.log(bar1.num);
bar1.num = 0;
console.log(foo.num);
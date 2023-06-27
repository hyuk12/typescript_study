
const foo = {num : 1234};
const bar = foo;
console.log();
bar.num = 0;
console.log(foo.num);
    
//  현재 이 것은 변수에 객체 하나를 가지고 둘다 가리키고 있는 셈이다 {num: 1234}라는 객체를 각각 foo와 bar 두개의 변수가 접근하고 있기 때문에
// 밑에서 bar.num 을 바꾸면 객체자체의 num이 바뀌는 것이다.

export{}




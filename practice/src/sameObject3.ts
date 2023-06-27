class FooObj {
    constructor() {
        const foo = { num: 1234 };
        const bar = foo;    
        const baz = { num: 1234 };

        console.log(foo === bar);
        console.log(foo === baz);
    }
}

new FooObj();
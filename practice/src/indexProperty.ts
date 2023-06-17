type PriceData = {
    [key: string] : number;
}

const data : PriceData = {
    apple: 220,
    coffee: 120,
    lunch: 500,
}

data.chicken = 250;
console.log(data.chicken);
// 이곳은 오류 number가 와야 하는데 string값이옴
// data.점심 = "foo";
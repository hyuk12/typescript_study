// public class Operation3 {
// 	public static void main(String[] args) {
// 		int num = 11;
		
// 		boolean flag1 = true;
// 		boolean flag2 = true;
// 		boolean flag3 = num % 2 == 0;
		
		
// 		System.out.println(flag1 && flag2);
// 		System.out.println(flag1 && flag3);
		
// 		System.out.println(!(flag1 || flag3 && flag2));
// 	}
// }

//boolean 이 작동하는 것은 자바와 다른점이 없다. 
// 다만 등호가 == 에서 ===으로 바뀌는 정도가 다른점이며 변수를 정의할 때 
// 타입을 줄 때의 모양이 다르다

const operationNumber = 11;

const flag1: boolean = true;
const flag2: boolean = true;
const flag3: boolean = operationNumber % 2 === 0;

console.log(flag1 && flag2);
console.log(flag1 && flag3);
console.log(!(flag1 || flag3 && flag2));

// public class Variable1 {
// 	public static void main(String[] args) {
// 		// 정수의 변수 선언과 초기화
// 		int num = -10; // 변수의 선언과 초기화를 동시에 한 것
// 		int num2; // 변수의 선언 num2 라는 4byte의 메모리공간을 할당 한다.
		
// 		num2 = 20; // 변수의 초기화 num2라는 메모리 공간에 있는 데이터를 비우고 
// 		//20이라는 값을 넣겠다.
		
// 		System.out.println("num: " + (num + 1));
// 		System.out.println("num: " + (num2 + 1));
// 	}
// }

// 자바의 코드를 ts에서 사용한다면?!

const num: number = -10;
let num2: number;

num2 = 20;
console.log("num: " + (num + 1));
console.log("num: "  + (num2 + 1));
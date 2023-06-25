/*
		 * 	시험 성적을 학점으로 계산하는 프로그램
		 * 	
		 * 	정수 자료형 score 변수 선언
		 * 	88 점으로 초기화
		 * 
		 * 	문자 자료형 grade 변수 선언
		 * 
		 * 	조건 
		 * 	score 가 0점보다 작거나 100점보다 크면  X를 출력
		 * 	score 가 90에서 100점이면 A학점
		 * 	score 가 80에서 89점이면 B학점
		 * 	score 가 70에서 79점이면 C학점
		 * 	score 가 60에서 69점이면 D학점
		 * 	score 가 0에서 59점이면 F학점
		 * 
		 * 
		 */

let score: number;

score = 88;

// if( 0 > score || score > 101 ) {
//     console.log("X");
// }else if(89 < score && score < 101) {
//     console.log("A");
// }else if(79 < score && score < 90) {
//     console.log("B");
// }else if(69 < score && score < 80) {
//     console.log("C");
// }else if(59 < score && score < 70) {
//     console.log("D");
// }else {
//     console.log("F");
// }

let grade : string = score > 100 || score < 0 ? "X" 
                    : score > 89 ? "A" 
                    : score > 79 ? "B"
                    : score > 69 ? "C"
                    : score > 59 ? "D" : "F";

console.log(grade);
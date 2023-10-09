/*
    1부터 N까지 합 출력하기

    자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

    단, N은 20 이하의 자연수입니다.

        input    output
    -------------------------
    N
    -------------------------
    6            21
*/

function solution(N) {
  return new Array(N).fill(1).reduce((acc, cur, i) => {
    const num = cur + i
    return acc + num
  }, 0)
}

solution(6)

/*
    연필 개수

    연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명의 학생 수를
    입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

    단, N은 1000 이하의 자연수 입니다.

        input    output
    -------------------------
    N
    -------------------------
    25           3
*/

function solution(N) {
  return Math.ceil(N / 12)
}

solution(25)

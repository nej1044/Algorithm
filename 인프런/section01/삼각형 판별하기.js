/*
    삼각형 판별하기

    길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

    단, 100이하의 서로 다른 A, B, C 막대의 길이가 주어집니다.

        input       output
    -------------------------
    A  B  C
    -------------------------
    6  7  11         YES
    13 33 17         NO
*/

function solution(a, b, c) {
  // 삼각형의 성립 조건
  // 가장 긴 선의 길이 < 남은 두 선의 길이의 합
  const long = Math.max(a, b, c) // 가장 긴 선의 길이
  const sum = a + b + c - long // 남은 두 선의 길이의 합

  // 삼각형의 성립 조건에 맞으면 'YES' 아니면 'NO'
  return sum > long ? 'YES' : 'NO'
}

solution(6, 7, 11)

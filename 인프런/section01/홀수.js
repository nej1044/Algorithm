/*
    홀수

    7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값
    을 찾는 프로그램을 작성하세요.
    예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53,
    85이므로 그 합은

    77 + 41 + 53 + 85 = 256

    이 되고,

    41 < 53 < 77 < 85

    이므로 홀수들 중 최소값은 41이 됩니다.

    단, 주어지는 자연수는 100보다 작으며, 홀수가 한 개 이상 반드시 존재합니다.

             input                   output
    ------------------------------------------
    numArr
    ------------------------------------------
    [12, 77, 38, 41, 53, 92, 85]    [256, 41]
*/

function solution(numArr) {
  let min = Number.MAX_SAFE_INTEGER
  let sum = 0
  for (const num of numArr) {
    if (num % 2 !== 0) {
      if (num < min) min = num
      sum += num
    }
  }
  return [sum, min]
}

solution([12, 77, 38, 41, 53, 92, 85])

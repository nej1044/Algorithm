function solution(my_string) {
  return [...my_string]
    .filter(c => !isNaN(c) && c !== ' ')
    .reduce((sum, n) => sum + Number(n), 0);
}

function solution(my_string) {
  return [...my_string]
    .map(c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())
    .join('');
}

function solution(num_list) {
  let even = 0;
  let odd = 0;
  
  for (let num of num_list) {
    num % 2 === 0 ? even++ : odd++;
  }
  
  return [even, odd];
}

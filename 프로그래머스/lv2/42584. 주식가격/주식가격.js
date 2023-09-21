function solution(prices) {
   const answer = []
   for(let i=0; i<prices.length; i++){
     let second = 0
     const num = prices[i]
     for(let j=i; j<prices.length; j++){
       if(num > prices[j] || j+1 === prices.length) {
         answer.push(second)
         break;
       }
      second++
     }
   }
  return answer
}
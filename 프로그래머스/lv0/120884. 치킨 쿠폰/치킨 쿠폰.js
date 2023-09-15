function solution(chicken) {
    let coupon = Math.floor(chicken / 10) + chicken % 10
    let answer = Math.floor(chicken / 10)
    while(coupon >= 10){
        answer += Math.floor(coupon / 10)
        coupon = Math.floor(coupon / 10) + coupon % 10
    }
   return answer
}

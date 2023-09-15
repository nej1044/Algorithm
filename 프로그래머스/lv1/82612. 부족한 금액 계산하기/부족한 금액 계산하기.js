function solution(price, money, count) {
    var fee = 0;
    
    for(var i=1; i<=count; i++) {
        var numberCharge = price * i;
        fee += numberCharge;
    }
    
    var charge = money-fee;
    
    if (charge < 0) {
        var answer = (charge * -1);
        return answer;
    } else {
        return 0;
    }
}
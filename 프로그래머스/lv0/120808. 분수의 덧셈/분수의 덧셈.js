function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1*denom2
    const numer = denom1*numer2 + denom2*numer1
    
    let min;
    for(let i=1; i<=numer; i++){
        if(denom%i===0 && numer%i===0) {
            min = i
        }
    }
    
    return [numer/min, denom/min]
}
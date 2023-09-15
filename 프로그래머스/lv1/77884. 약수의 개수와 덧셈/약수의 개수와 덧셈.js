function solution(left, right) {
    const arr =[]
    for(let i=left; i<=right; i++) {
        let number = 0;
        for(let j=1; j<=i; j++) {
            if(i%j === 0) number++
        }
        number%2===0 ? arr.push(i) : arr.push(i*(-1))
    }
    return arr.reduce((a,b)=> a+b)
}
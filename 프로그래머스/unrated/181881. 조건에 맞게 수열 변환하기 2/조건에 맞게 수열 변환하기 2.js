function solution(arr) {
    let x = 0;
    while(arr.some(el => (el >= 50 && el%2 ===0) || (el<50 && el%2!==0))) {
        x++
        arr = arr.map(el => {
            if(el >= 50 && el%2 ===0) return el/2
            else if(el<50 && el%2!==0) return el*2 + 1
            else return el
        })
    }
    return x
}
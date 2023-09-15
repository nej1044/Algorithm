function solution(absolutes, signs) {
    const arr = []
    signs.map((el, idx)=> {
        if(el===false) {
            arr[idx] = absolutes[idx] * -1
        } else {
            arr[idx] = absolutes[idx] 
        }
    })
    return arr.reduce((a,b)=> a+b)
}
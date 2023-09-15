function solution(n) {
    const arr = new Set();
    let index = 2;
    while(n>1){
        if(n%index===0){
            n = n/index
            arr.add(index)
        }else {
          index++;
        }
    }
  return Array.from(arr)
}
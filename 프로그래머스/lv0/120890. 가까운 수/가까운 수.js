function solution(array, n) {
    array = [...array, n].sort((a,b)=> a-b)
    const index = array.indexOf(n)
    if(array[index-1]===undefined) {
        return array[index+1]
    }else if(array[index+1]===undefined){
        return array[index-1]
    }
    return n-array[index-1] <= Math.abs(n-array[index+1]) ? array[index-1] : array[index+1]
}
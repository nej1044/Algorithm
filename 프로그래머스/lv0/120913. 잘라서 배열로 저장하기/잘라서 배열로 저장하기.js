function solution(my_str, n) {
    const arr = []
    my_str = my_str.split("")
    while(my_str.length > 0){
        if(my_str.length < n) {
            arr.push(my_str.join(''))
            return arr
        }
        arr.push(my_str.splice(0, n).join(""))
    }
    return arr
}
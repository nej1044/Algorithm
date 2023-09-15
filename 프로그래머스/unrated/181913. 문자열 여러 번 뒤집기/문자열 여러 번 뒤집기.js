function solution(my_string, queries) {
    for(const query of queries) {
        const [s, e] = query
        const front = my_string.slice(0, s)
        const mid = my_string.slice(s, e+1).split('').reverse().join('')
        const back = my_string.slice(e+1)
        my_string = front+mid+back
    }
    return my_string
}
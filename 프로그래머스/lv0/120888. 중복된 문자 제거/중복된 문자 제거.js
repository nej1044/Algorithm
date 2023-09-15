function solution(my_string) {
    return my_string.split('').reduce((str, el)=> {
        return str + (str.includes(el) ? '' : el)
    }, '')
}
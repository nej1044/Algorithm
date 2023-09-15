function solution(my_string, m, c) {
    return my_string.split('').filter((el, i)=> i%m===c-1).join('')
}
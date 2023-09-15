function solution(my_string) {
    return my_string.split('').map(el => el.charCodeAt() > 96 ? el.toUpperCase() : el.toLowerCase()).join('')
}
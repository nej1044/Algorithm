function solution(my_string, indices) {
    my_string = my_string.split('')
    indices.forEach(el => my_string[el] = '')
    return my_string.join('')
}
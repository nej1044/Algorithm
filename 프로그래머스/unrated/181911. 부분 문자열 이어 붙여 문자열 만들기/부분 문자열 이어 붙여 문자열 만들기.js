function solution(my_strings, parts) {
    return my_strings.map((el, i) => el.slice(parts[i][0], parts[i][1]+1)).join('')
}
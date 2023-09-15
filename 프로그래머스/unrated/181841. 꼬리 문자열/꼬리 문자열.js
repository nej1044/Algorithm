function solution(str_list, ex) {
    return str_list.map(el => el.includes(ex) ? '' : el).join('')
}
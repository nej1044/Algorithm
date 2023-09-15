function solution(num_list, n) {
    const new_list = num_list.splice(n)
    return new_list.concat(num_list)
}
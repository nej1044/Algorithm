function solution(num_list) {
    const last = num_list.at(-1)
    const before = num_list.at(-2)
    return [...num_list, last > before ? last-before : last*2]
}
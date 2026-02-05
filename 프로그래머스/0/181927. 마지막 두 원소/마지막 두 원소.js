function solution(num_list) {
    const last = num_list.at(-1)
    const atLast = num_list.at(-2)
    if(last> atLast) num_list.push(last - atLast)
    else num_list.push(last * 2)
    
    return num_list
}
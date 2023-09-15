function solution(num_list, n) {
    const answer = []
    while(num_list.length !== 0){
        const arr = num_list.splice(0, n)
        answer.push(arr)
    }
    return answer
}
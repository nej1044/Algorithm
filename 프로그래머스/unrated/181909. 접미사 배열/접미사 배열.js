function solution(my_string) {
    const answer = []
    for(let i=my_string.length-1; i>=0; i--){
        const string = my_string.slice(i)
        if(!answer.includes(string)) answer.push(string)
    }
    return answer.sort()
}
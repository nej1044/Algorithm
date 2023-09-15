function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    const answer = participant.filter((name, i)=> {
        return name !== completion[i]
    })
    return answer[0]
}
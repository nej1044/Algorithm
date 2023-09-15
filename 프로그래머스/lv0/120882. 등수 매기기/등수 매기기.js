function solution(score) {
    let scores = []
    score = score.map((student, i) => {
        const [eng, math] = student
        const avg = (eng+math)/2
        scores.push(avg)
        return avg
    })
    scores = scores.sort((a,b)=> b-a)
    return score.map(el => scores.indexOf(el)+1)
}
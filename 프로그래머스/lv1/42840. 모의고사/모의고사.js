const answerTable = [
    // 1번 수포자가 찍는 방식
    [1,2,3,4,5], // 5개의 패턴
    // 2번 수포자가 찍는 방식
    [2,1,2,3,2,4,2,5], // 8개의 패턴
    // 3번 수포자가 찍는 방식
    [3,3,1,1,2,2,4,4,5,5] // 10개의 패턴
]

function solution(answers) {
    const scoreList = answerTable.map((el, i)=> {
        const score = answers.reduce((acc, cur, j)=>{
            return acc + (el[j%el.length] === cur ? 1 : 0)
        }, 0)
        return {student: i+1 , score} // score: score
    })
    // 최대로 맞춘 문제의 수가 가져온다.
    const biggest = Math.max(...scoreList.map(el => {
        return el.score // 결과값: [5,0,0]
    }))
    const answer = scoreList.filter(el=> {
        return biggest === el.score
    }).map(el => el.student)
    
    return answer
}
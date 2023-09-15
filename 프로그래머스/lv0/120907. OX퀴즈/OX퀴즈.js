function solution(quiz) {
    return quiz.map(el => {
        el = el.split(" = ")
        const num = eval(el[0])
        return num===Number(el[1]) ? "O" : "X"
    })
}
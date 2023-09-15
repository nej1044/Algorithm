function solution(rank, attendance) {
    const [a, b, c] = rank.map((el, i) => ({[i]: el})).filter((el, i) => attendance[i])
        .sort((a,b)=> Object.values(a)[0]-Object.values(b)[0]).splice(0, 3)
        .map(el => Number(Object.keys(el)[0]))
    return 10000 * a + 100 * b + c
}
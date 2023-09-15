function solution(t, p) {
    let answer = 0
    for(let i=0; i<t.length-p.length+1; i++){
        const standard = t.slice(i, p.length+i)
        if(Number(standard) <= Number(p)) answer++
    }   
    return answer
}
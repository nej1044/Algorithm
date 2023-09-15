function solution(q, r, code) {
    return code.split('').reduce((acc,cur,i)=> acc + (i%q===r ? cur : ''), '')
}
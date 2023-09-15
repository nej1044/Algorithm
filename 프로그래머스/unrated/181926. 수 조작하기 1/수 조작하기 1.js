function solution(n, control) {
    return control.split('').reduce((acc,cur)=> {
        if(cur==='w') cur = 1
        if(cur==='s') cur = -1
        if(cur==='d') cur = 10
        if(cur==='a') cur = -10
        return acc + cur
    }, n)
}
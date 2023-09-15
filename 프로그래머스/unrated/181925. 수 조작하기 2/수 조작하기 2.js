function solution(numLog) {
    return numLog.reduce((acc,cur,i)=> {
        let str = ''
        const diff = numLog[i+1]-cur
        if(diff>9) str = 'd'.repeat(diff/10)
        else if(diff>0) str = 'w'.repeat(diff)
        else if(diff>-2) str = 's'.repeat(Math.abs(diff))
        else str = 'a'.repeat(Math.abs(diff)/10)
        return acc + str
    }, '')
}
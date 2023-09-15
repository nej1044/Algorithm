function solution(polynomial) {
    const answer = [a, b] =  polynomial.split('+').reduce((acc, cur)=> {
        let [x, num] = acc
        if(cur.includes('x')) {
            cur = cur.replaceAll('x', '').trim()
            x += cur ? Number(cur) : 1
        }else{
            num += Number(cur)
        }
        return [x, num]
    }, [0, 0])
    if(a && !b){
        return `${a==1 ? '' : a}x`
    }else if(!a && b){
        return String(b)
    }else{
        return `${a==1 ? '' : a}x + ${b}`
    }
}
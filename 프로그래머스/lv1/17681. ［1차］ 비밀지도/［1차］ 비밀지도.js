function solution(n, arr1, arr2) {
    const answer = arr1.map((map1, i)=>{
        map1 = map1.toString(2).padStart(n, '0')
        const map2 = arr2[i].toString(2).padStart(n, '0')
        
        return map1.split('')
                   .reduce((acc, cur, j)=>{
                    return acc + (cur === '1' || map2[j] === '1'
                                 ? '#'
                                 : ' ')
                }, '')
    })
    return answer;
}
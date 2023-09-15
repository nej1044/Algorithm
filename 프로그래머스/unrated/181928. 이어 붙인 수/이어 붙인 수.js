function solution(num_list) {
    const [even, odd] = num_list.reduce((acc,cur)=> {
        let [even, odd] = acc
        if(cur%2===0) even += cur
        else odd += cur
        return [even, odd]
    }, ['', ''])
    return Number(even) + Number(odd)
}
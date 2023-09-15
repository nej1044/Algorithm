function solution(num_list) {
    const odd = num_list.reduce((acc,cur,i)=> acc + (i%2===0 ? cur : 0),0)
    const even = num_list.reduce((acc,cur,i)=> acc + (i%2!==0 ? cur : 0),0)
    return odd > even ? odd : even
}
function solution(num_list) {
    const even = num_list.filter(el => el%2===0).length;
    const odd = num_list.filter(el => el%2!==0).length;
    return [even, odd]
}
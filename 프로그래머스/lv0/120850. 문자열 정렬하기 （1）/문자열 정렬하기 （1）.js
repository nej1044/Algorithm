function solution(my_string) {
    return my_string.split('')
                    .filter(el => !isNaN(el))
                    .sort((a,b)=>a-b)
                    .map(el => Number(el))
}
function solution(my_string) {
    return my_string.split('')
                    .reduce((acc,cur)=>{
        return acc + (!isNaN(cur) ? Number(cur) : 0)
    }, 0)
}
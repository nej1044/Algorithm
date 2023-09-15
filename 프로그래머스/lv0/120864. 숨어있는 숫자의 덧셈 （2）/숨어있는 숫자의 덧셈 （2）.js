function solution(my_string) {
    const regExp = new RegExp(/[a-zA-Z]/, 'g')
    return my_string.replaceAll(regExp, ' ')
             .split(' ')
             .reduce((acc,cur)=> {
        return acc + (!cur ? 0 : Number(cur))
    }, 0)
    
}
function solution(order) {
    return String(order).split('').filter((el, i)=> {
        return Number(el)%3===0 && el!=='0'
    }).length;
}
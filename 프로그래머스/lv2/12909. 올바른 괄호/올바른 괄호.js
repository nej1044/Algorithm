function solution(s){
    const stack = [];
    
    for(let item of s){
        if(item === '(') {
            stack.push(item);
        }else {
            if(stack.length === 0) return false;
            stack.pop()
        }
    }
    return stack.length === 0
}
function solution(numbers, target) {
    let answer = 0;
    
    function dfs(level, node){
        if(level < numbers.length){
            dfs(level+1, node+numbers[level])
            dfs(level+1, node-numbers[level])
        }else{
            if(node === target) answer++;
        }
    }
    
    dfs(0,0);
    return answer;
}
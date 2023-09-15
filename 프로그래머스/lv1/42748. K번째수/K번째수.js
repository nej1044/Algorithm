function solution(array, commands) {
    const answer = commands.map( num => {
        const result = array.slice(num[0]-1, num[1])
                            .sort((a,b)=> a-b);
        return result[num[2]-1];
    })
    return answer
//     const answer = [];
    
//     for(let idx=0; idx<commands.length; idx++){
//         const i = commands[idx][0];
//         const j = commands[idx][1];
//         const k = commands[idx][2];
        
//         const result = array.slice(i-1, j)
//                             .sort((a,b)=> a-b);
//         answer.push(result[k-1])
//     }
//     return answer
}
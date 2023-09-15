function solution(N, stages) {
    stages.sort((a,b)=> a-b);
    
    let allUsers = stages.length; // 총 유저의 수
    const answer = new Array(N).fill(1)
                               .map((num, i)=>{
                                   const stage = num + i;
                                   const arr = stages.slice(stages.indexOf(stage)
                                                            , stages.lastIndexOf(stage)+1);
                                   const fail = arr.length / allUsers;
                                   allUsers -= arr.length;
                                   
                                   return {stage, fail}
                               }).sort((a,b)=> b.fail-a.fail)
                                 .map(el => el.stage)
    return answer
}
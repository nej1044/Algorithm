const isBonus = ['S', 'D', 'T'] // 보너스를 구분하기 위해 저장

function solution(dartResult) {
    let score = '' // 문자열에 있는 점수 데이터를 저장
    let currentScore = 0; // 현재 게임(턴)의 점수를 저장
    let last = false; // 점수를 최종 저장할 시점을 찾는 변수
    
    const answer = dartResult.split('')
                             .reduce((acc, cur, i)=>{
                                 if(!isNaN(cur)) {
                                     score += cur;
                                     last = false; // 새 턴이 시작
                                 }else if(isBonus.includes(cur)){
                                     score = Number(score);
                                     const squared = isBonus.indexOf(cur) +1;
                                     
                                     currentScore = score ** squared;
                                     score = '';
                                     if(!isNaN(dartResult[i+1]) || (i+1) === dartResult.length){
                                         last = true // 현재 턴이 종료 되었다.
                                     }
                                 }else{
                                     last = true;
                                     if(cur === '*'){
                                         currentScore *= 2;
                                         if(acc.length > 0) acc[acc.length-1] *= 2;
                                     }else{
                                         currentScore *= -1;
                                     }
                                 }
                                 if(last){
                                     acc.push(currentScore);
                                 }
                                 return acc;
                             }, []).reduce((acc, cur)=> acc+cur)
    return answer
}
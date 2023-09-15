const filter = 'qwertyuiopasdfghjklzxcvbnm1234567890-_.';

function solution(new_id) {
    // 1단계: 대문자를 소문자로 치환
    new_id = new_id.toLowerCase().split('');
    // 2단계
    let answer = new_id.filter(str => {
        return filter.includes(str)
    })
    // 3단계
    answer = answer.filter((str, i)=>{
        return (str === '.' && answer[i+1] !== '.') || str !== '.'
    })
    // 4단계
    if(answer[0]==='.') answer = answer.slice(1);
    function removeLastDot(){
        if(answer[answer.length-1] === '.') answer = answer.slice(0, answer.length-1);
    }
    removeLastDot();
    // 5단계
    if(answer.length === 0) answer.push('a'); // answer = ['a']
    // 6단계
    if(answer.length >= 16){ 
        answer = answer.slice(0,15);
        removeLastDot();
    }
    // 7단계
    if(answer.length <= 2) {
        const add = new Array(3-answer.length).fill(answer[answer.length-1])
        answer = answer.concat( add ) // answer = [...answer, ...add]
    }
    return answer.join('')
}
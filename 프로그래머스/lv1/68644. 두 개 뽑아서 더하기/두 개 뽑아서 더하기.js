function solution(numbers) {
    const answer = new Set([]);
    
    numbers.forEach((num1, i)=> {
        numbers.slice(i+1)
               .forEach(num2=> {
            const sum = num1 + num2;
            answer.add(sum) // answer.push()
        })
    })
    
    return Array.from(answer).sort((a,b)=> a-b) // 오름차순
    
    // for(let i=0; i<numbers.length; i++){
    //     for(let j=i+1; j<numbers.length; j++){
    //        const sum = numbers[i]+numbers[j]
    //        answer.add(sum)
    //        // answer.includes(sum) === false
    //        // if(!answer.includes(sum)) answer.push(sum) 
    //     }
    // }
    // return Array.from(answer).sort((a,b)=> a-b) // 오름차순
}
const NUMBER_ARR = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function solution(numbers) {
    for(let i=0; i<NUMBER_ARR.length; i++){
        
        const regExp = new RegExp(NUMBER_ARR[i], 'g');
        numbers = numbers.replaceAll(regExp, i)
    }
    return Number(numbers)
}
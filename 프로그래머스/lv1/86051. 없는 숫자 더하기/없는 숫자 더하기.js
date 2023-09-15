function solution(numbers) {
    const arr = [0,1,2,3,4,5,6,7,8,9]
    
    numbers.forEach(el => {if(arr.includes(el)) arr.splice(arr.indexOf(el),1)})
    return arr.reduce((a,b)=> a+b)
}
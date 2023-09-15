function solution(picture, k) {
    let answer = []
    for(let pic of picture) {
        const arr = []
        pic = pic.split('')
        for(let i=0; i<pic.length; i++){
            if(pic[i] !== pic[i+1]) {
             arr.push(pic.splice(0, i+1).join(''))   
             i= -1
            }
        }
        answer = answer.concat(new Array(k).fill(arr.map(el => el.repeat(k)).join('')))
    }
    return answer
}
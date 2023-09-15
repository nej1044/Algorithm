function solution(food) {
    const foods = food.map((el, i)=> {
        return i.toString().repeat(Math.floor(el/2))
    })
    return foods.join('') + '0' + foods.reverse().join('')
}
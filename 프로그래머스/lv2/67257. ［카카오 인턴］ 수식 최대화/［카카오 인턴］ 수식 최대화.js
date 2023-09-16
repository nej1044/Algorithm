function solution(expression) {
	const priors = [
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['*', '-', '+'],
    ['*', '+', '-'],
    ['+', '*', '-'],
    ['+', '-', '*']
  ]
  const answer = []
  
  priors.forEach(prior => {
  	const temp = expression.split(/(\D)/)
    prior.forEach(el => {
      while(temp.includes(el)) {
        const i = temp.indexOf(el)
        temp.splice(i-1, 3, eval(temp.slice(i-1, i+2).join('')))
      }
    })
    answer.push(Math.abs(temp[0]))
  })
  return Math.max(...answer)
}
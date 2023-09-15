function solution(a, b, c, d) {
  const dice = new Array(6).fill(0);
  [a,b,c,d].forEach(num => dice[num-1]++)
  if(dice.includes(4)) return (dice.indexOf(4)+1) * 1111
  else if(dice.includes(3)) {
    const p = dice.indexOf(3) +1
    const q = dice.indexOf(dice.filter(num => num && num !== 3)[0]) + 1
    return (10 * p + q) ** 2
  }
  else if(dice.includes(2)) {
    if(dice.filter(num => num).length===2) {
      const p = dice.indexOf(2) +1
      const q = dice.lastIndexOf(2) +1
      return (p+q) * Math.abs(p-q)
    }else {
       const q = dice.indexOf(1) +1
       const r = dice.lastIndexOf(1)+1
       return q * r
    }
  }else return Math.min(a,b,c,d)
}
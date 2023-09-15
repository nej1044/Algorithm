function solution(order) {
    const obj = {
      americano: 4500,
      cafelatte: 5000,
      anything: 4500
    }
    
    return order.reduce((acc, cur)=> {
      cur = cur.replace('ice', '')
      cur = cur.replace('hot', '')
      return acc + obj[cur]
    }, 0)
}
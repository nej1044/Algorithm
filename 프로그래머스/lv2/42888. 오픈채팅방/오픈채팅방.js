function solution(record) {
  const member = {}
  const answer = []
  for(const el of record) {
    const [state, id, name] = el.split(' ')
    if(state === 'Enter'){
      member[id] = name
      answer.push(`${id}/님이 들어왔습니다.`)
    }else if(state === 'Leave'){
      answer.push(`${id}/님이 나갔습니다.`)
    }else if(state === 'Change'){
      member[id] = name
    }
  }
  return answer.map(el => {
    let [id, string] = el.split('/')
    return member[id] + string
  })
}
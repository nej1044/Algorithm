function solution(s){
    const obj = {};
    const answer = s.toLowerCase()
                    .split('')
                    .forEach(letter => {
                        obj[letter] === undefined ? obj[letter] = 1
                                                  // 기존에 알파벳이 없다면 1을 초기값으로 설정
                                                  : obj[letter]++
                                                  // 기존의 알파벳의 개수만 1 증가
                    })
    return obj.p === obj.y
}
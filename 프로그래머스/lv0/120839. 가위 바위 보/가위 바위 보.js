function solution(rsp) {
    return rsp.split('')
              .map(el => el==="2" ? "0" : (el==="0" ? "5" : "2" ))
              .join('')
}
function solution(strs, t) {
  // 편의를 위해 t의 길이 +1만큼 배열을 만든다
  const dp = Array.from({length: t.length+1}, () => 0)
  // 문자열 검사를 빠르게 하기 위해서 문자열 리스트를 set으로 만든다.
  const strsSet = new Set(strs)
  
  // 1부터 문자열의 길이+1까지 루프를 돈다
  for(let i=1; i<=t.length; i++){
    // 일단 해당 문자열의 최솟값은 무한으로 설정한다.
    dp[i] = Infinity;
    // 문자열을 자르면서 단어 조각을 찾기 위해 루프를 돈다.
    // 단어 조각은 5 이하이기 때문에 마지막까지 자를 필요는 없다.
    for(let j=1; j<Math.min(i+1, 6); j++){
      const start = i-j;
      const end = i;
      // 단어 조각이 있다면 이전 조합과 더해서 최솟값인지 체크 후 대입한다
      if(strsSet.has(t.slice(start, end))) dp[i] = Math.min(dp[i], dp[i-j]+1)
    }
  }
  return dp.at(-1) === Infinity ? -1 : dp.at(-1)
}
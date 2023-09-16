function solution(places){
    return places.map(place => {
        return place.some((el, i)=> (
            el.split('').some((letter, j, arr)=> {
            	if(letter === 'X') return false
              
              const personCount = [
                arr[j-1] || null,
                arr[j+1] || null,
                (place[i-1] || '').charAt(j),
                (place[i+1] || '').charAt(j)
              ].filter(letter => letter === 'P').length
              
              if((letter === 'P' && personCount > 0) || (letter === 'O' && personCount >= 2)) {
                return true
              }
              return false
            }, '')
        )) ? 0 : 1
      })
}
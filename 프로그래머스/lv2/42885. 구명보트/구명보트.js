function solution(people, limit) {
    people.sort( (a, b) => b - a );
    
    let last = people.length - 1;
    return people.reduce( (acc, cur, i) => {
        if( i <= last ) {
            const weight = limit - cur;
            if( weight >= people[last] ) {
                last--;
            }
            acc++;
        }
        return acc;
    }, 0)
}
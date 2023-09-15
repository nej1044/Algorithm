function solution(board, moves) {
    let answer = 0;
    const bucket = [];
    
    moves.forEach( move => {
        // 반복문을 실행하지 않게 하는 변수
        // (check가 false라면 forEach 실행)
        let check = false;
        board.forEach(location => {
            const doll = location[move-1];
            
            if(check === false) {
                if(doll !== 0){
                    location[move-1] = 0;
                    if(doll === bucket.at(-1)){
                        answer += 2;
                        bucket.pop();
                    }else {
                        bucket.push(doll);
                    }
                    check = true;
                }
            }
        })
    })
    return answer;
}
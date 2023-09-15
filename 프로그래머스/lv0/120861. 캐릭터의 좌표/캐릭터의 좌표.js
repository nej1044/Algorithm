function solution(keyinput, board) {
    const X = (board[0]-1)/2
    const Y = (board[1]-1)/2
    let [x, y] = [0,0]
    for(const direction of keyinput){
      if(direction === 'up' && y < Y){
        y++;
      }else if(direction === 'down' && y > -Y){
        y--;
      }else if(direction === 'right' && x < X){
        x++;
      }else if(direction === 'left' && x > -X){
        x--
      }
    }
  return [x,y]
}
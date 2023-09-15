function solution(lottos, win_nums) {
    const rank =[6,6,5,4,3,2,1]
    const hightemp =[];
    const lowtemp = []
    lottos.forEach(el=> win_nums.includes(el) || el===0 ? hightemp.push(el) : '')
    lottos.forEach(el=> win_nums.includes(el)  ? lowtemp.push(el) : '')
    
    return [rank[hightemp.length], rank[lowtemp.length]]
    
//     if (hightemp.length === 6) {
//         high = 1
//     } else if (hightemp.length === 5) {
//         high = 2
//     } else if (hightemp.length === 4) {
//         high = 3
//     } else if (hightemp.length === 3) {
//         high = 4
//     } else if (hightemp.length === 2) {
//         high = 5
//     }  else {
//         high = 6
//     }
    
//     if (lowtemp.length === 6) {
//         low = 1
//     } else if (lowtemp.length === 5) {
//         low = 2
//     } else if (lowtemp.length === 4) {
//         low = 3
//     } else if (lowtemp.length === 3) {
//         low = 4
//     } else if (lowtemp.length === 2) {
//         low = 5
//     }  else {
//         low = 6
//     }
    
    return [high, low]
}
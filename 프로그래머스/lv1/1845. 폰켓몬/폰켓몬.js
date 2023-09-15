function solution(nums) {
    const answer = new Set(nums).size
    const limit = nums.length / 2
    
    return limit >= answer ? answer : limit
    
//     const answer = new Set([])

//     for(let i=0; i<nums.length; i++){
//         if(nums.length/2 !== answer.size) answer.add(nums[i])
//     }
//     return answer.size
}
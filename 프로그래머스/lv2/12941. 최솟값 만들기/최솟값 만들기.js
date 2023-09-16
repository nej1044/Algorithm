function solution(A,B){
    A = A.sort((a,b)=> a-b)
    return B.sort((a,b)=> b-a)
         .map((el, i)=> el*A[i])
         .reduce((acc, cur)=> {
        return acc+cur
    }, 0)
}
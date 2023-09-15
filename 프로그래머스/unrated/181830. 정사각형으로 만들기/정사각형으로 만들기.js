function solution(arr) {
    return new Array(Math.max(arr.length, arr[0].length))
        .fill(new Array(Math.max(arr.length, arr[0].length)).fill(0))
                .map((col, i) => col.map((row, j)=> arr[i]?.[j] || row))
}
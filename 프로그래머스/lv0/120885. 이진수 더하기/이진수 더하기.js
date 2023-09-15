function solution(bin1, bin2) {
    const num = Number.parseInt(bin1, 2) + Number.parseInt(bin2, 2)
    return num.toString(2)
}
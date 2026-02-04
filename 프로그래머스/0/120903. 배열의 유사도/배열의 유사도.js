function solution(s1, s2) {
    return s2.filter(string => s1.includes(string)).length;
}
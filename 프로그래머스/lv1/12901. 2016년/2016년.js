const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function solution(a, b) {
    const answer = new Date(2016, a-1, b).getDay();
    return week[answer]
}
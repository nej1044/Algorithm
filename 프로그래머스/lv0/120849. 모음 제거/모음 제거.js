const vowels = ['a','e','i','o','u']

function solution(my_string) {
    return my_string.split('')
                    .filter(el => !vowels.includes(el))
                    .join('')
}
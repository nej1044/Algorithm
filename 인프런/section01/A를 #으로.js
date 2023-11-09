/*
    A를 #으로

    대문자로 이루어진 영어단어가 입력되면 단어에 포한된 'A'를 모두 '#'으로 바꾸어 출력하는
    프로그램을 작성하세요.


    input    output
    -----------------
    word
    -----------------
    BANANA   B#N#N#
*/

function solution(word) {
  return word.replaceAll('A', '#')
}

solution('BANANA')

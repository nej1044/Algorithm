function solution(name, yearning, photo) {
  const score = {}
  name.forEach((el, i) => score[el] = yearning[i])
  return photo.map(el => el.reduce((acc, cur) =>  acc + (score[cur] !== undefined ? score[cur] : 0), 0))
}
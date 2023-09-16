function solution(skill, skill_trees) {
  const regExp = new RegExp(`[^${skill}]`, 'g')
  return skill_trees.map(el => el.replace(regExp, ''))
                    .filter(el => skill.indexOf(el) === 0 || el === "")
                    .length
}
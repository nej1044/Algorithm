function solution(spell, dic) {
    for(let i=0; i<dic.length; i++){
        if(dic[i].length < spell.length) continue
        for(let j=0; j<spell.length; j++){
            const regExp = new RegExp(spell[j])
            dic[i] = dic[i].replace(regExp, '')
            console.log(dic[i], regExp)
        }
        if(!dic[i]) return 1
    }
    return 2
}
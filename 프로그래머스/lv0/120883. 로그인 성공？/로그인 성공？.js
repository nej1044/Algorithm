function solution(id_pw, db) {
    const [id, pw] = id_pw
    for(const info of db){
        if(info[0]=== id && info[1]===pw) return 'login' 
        if(info[0]===id) return 'wrong pw'
    }
    return 'fail'
}
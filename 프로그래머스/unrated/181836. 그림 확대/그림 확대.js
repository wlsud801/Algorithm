function solution(picture, k) {
    var answer = [];
    let pic = picture.map(string => string.split('').map(a => a.repeat(k)).join(''))
    for(let a of pic){
        for(let i = 1;i<=k;i++){
            answer.push(a)
        }
    }
    return answer;
}
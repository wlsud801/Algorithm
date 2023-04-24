function solution(absolutes, signs) {
   let i = 0;
   var answer = 0;
    while(i<absolutes.length){
        if(signs[i] === true){
            let int = absolutes[i]
            answer += int
        } else {
            let int = absolutes[i] * -1
            answer += int
        }
        i++
        
    }
    return answer;
}
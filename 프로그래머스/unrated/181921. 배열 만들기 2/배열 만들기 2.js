function solution(l, r) {
    var answer = [];
    for(let i = l;i<=r;i++){
        if(String(i).includes('1') == false &&
           String(i).includes('2') == false && 
           String(i).includes('3') == false &&
           String(i).includes('4') == false && 
           String(i).includes('6') == false && 
           String(i).includes('7') == false &&
           String(i).includes('8') == false &&
           String(i).includes('9') == false
          ){
            answer.push(i);
        }
    }
    if(answer.length === 0){
            answer.push(-1);
        }
    return answer;
}
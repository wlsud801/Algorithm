function solution(n) {
    var answer = 0;
    for(let i =1;i<=n;i++){
        answer += 1;
        
        while(answer % 3 === 0 || String(answer).includes("3") === true){
            answer += 1;
        }
        
        console.log(i,answer)
    }
    
    return answer;
}
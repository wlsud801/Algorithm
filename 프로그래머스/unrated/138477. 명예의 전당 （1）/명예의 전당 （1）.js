function solution(k, score) {
    var answer = [];
    let ownerShip = [];
    
   for(let a of score){
        ownerShip.push(Number(a));
        ownerShip.sort((a, b) => b - a);
        if(ownerShip.length < k){
            answer.push(ownerShip[ownerShip.length - 1])
        } else {
            answer.push(ownerShip[k - 1]);
        }
        
        
   }
      
    
    console.log(ownerShip)
    return answer;
}
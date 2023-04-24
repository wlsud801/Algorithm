function solution(n, m) {
    var answer = [];
    let small = '';
    let big = 1;
    
    for(let i = 0;i<= Math.min(n,m);i++){
        if(n % i === 0 && m % i === 0){
            small = i;
        }
    }
    
    while(true){
      if((big % n == 0) && (big % m == 0)){
        break;
      }
      big++;
    }
    return [small, big];
}
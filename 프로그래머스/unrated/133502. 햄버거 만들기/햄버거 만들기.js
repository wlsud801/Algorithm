function solution(ingredient) {
   var answer = 0;
  let burger=[];
    
    ingredient.forEach((ele)=>{
        // 일단 4개를(하나씩 돌면서 4개가 될 때까지?) 임의의 burger통에 담는다
        burger.push(ele) //[2,1,1,2]

        if(burger.length >= 4){
            if(burger[burger.length-1] === 1 && burger[burger.length-2] === 3 && burger[burger.length-3] === 2 && burger[burger.length-4] === 1){
               for(let i=0; i<4; i++){
                console.log('y')
                 burger.pop()
               }
               answer += 1
               
            }
        }
    })
    return answer;
    
}
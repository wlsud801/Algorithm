function solution(array) {
    let newArray = array.reduce((prev, curr) => {
      prev[curr] = ++prev[curr] || 1;
      return prev;
    }, {});
    
   
    let arr = Object.entries(newArray);
     
    arr.sort((a, b) => b[1] - a[1])
    if(arr.length > 1 && arr[0][1] === arr[1][1]){
        return -1;
    } else {
        return Number(arr[0][0]);
    }
}
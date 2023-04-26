function solution(a, b) {
    let x = String(a) + String(b);
  let y = 2 * a * b;

  if(x >= y){
    return Number(x);
  } else {
    return y
  }
}
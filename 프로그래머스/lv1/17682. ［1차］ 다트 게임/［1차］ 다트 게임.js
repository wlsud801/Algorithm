function solution(dartResult) {
    let answer = 0;
    let score = 0;
    let games = [];
    for(let i=0; i<dartResult.length; i++) {
      if(!isNaN(dartResult[i])) {
        score = (Number(dartResult[i-1]) === 1) ? 10 : Number(dartResult[i]);
      }
      if (dartResult[i] === "S") games.push(score);
      if (dartResult[i] === "D") games.push(Math.pow(score, 2));
      if (dartResult[i] === "T") games.push(Math.pow(score, 3));
  
      if (dartResult[i] === "*") {
        games[games.length - 2] = games[games.length - 2] * 2;
        games[games.length - 1] = games[games.length - 1] * 2;
      }
      if (dartResult[i] === "#") {
        games[games.length - 1] = -1 * games[games.length - 1];
      }
    }
    answer = games.reduce((a, b) => a + b);
    return answer;
  }
  
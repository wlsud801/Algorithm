function solution(n, numlist) {
    var answer = [];
    numlist.map((a) => a % n === 0 ? answer.push(a) : null)
    return answer;
}
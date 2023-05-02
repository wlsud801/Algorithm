function solution(q, r, code) {
    var answer = '';
    answer = code.split('').map((a, idx) => idx % q == r ? a : '' ).join('');
   
    return answer;
}
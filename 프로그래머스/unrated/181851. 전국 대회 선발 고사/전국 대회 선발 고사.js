function solution(rank, attendance) {
    var answer = 0;
    let newRank = [];
    rank.map((student, idx) => attendance[idx] === true ? newRank.push(rank[idx]) : null);
    newRank.sort((a,b) => a - b)
    let student = [];
    for(let a of newRank){
        student.push(rank.indexOf(a))
    }
    
    answer = student[0] * 10000 + student[1] * 100 + student[2]
    
    return answer;
}
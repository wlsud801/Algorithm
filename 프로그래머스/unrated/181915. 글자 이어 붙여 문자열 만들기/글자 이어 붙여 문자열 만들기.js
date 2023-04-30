function solution(my_string, index_list) {
    var answer = [];
    index_list.map((a,idx) => answer.push(my_string[a]));

    return answer.join('');
}
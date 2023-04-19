function solution(letter) {
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    var answer = '';
    
    let str = letter.split(" ");
    let {key, value} = morse;
    answer = str.map((a) => morse[a]).join('');
    
    return answer;
}
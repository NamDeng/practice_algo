/**
 *  프로그래머스 다른 사람 풀이
 *  javascript replace 2번재 인자값으로 function을 넘길수도 있음.
 *  function toWeirdCase(s){
 *      return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
 *  }
 */

function solution(s) {
    let excludeSpaceLength = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i] !== " ") excludeSpaceLength++;
        else excludeSpaceLength = 0;

        if(excludeSpaceLength % 2 === 1) s = replaceAt(s, i, s[i].toUpperCase());
        else s = replaceAt(s, i, s[i].toLowerCase());
    }

    return s;
}
function replaceAt(string, index, charater) {
    return string.substr(0, index) + charater + string.substr(index + charater.length);
}

console.log(solution("try hello world"));

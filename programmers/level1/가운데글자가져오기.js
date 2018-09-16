function solution(s) {
    const length = s.length;
    const start = Math.floor(length/2);
    if(length%2 === 0) return s.substring(start-1, start+1);
    
    return s.substring(start, start+1);
}
console.log(solution("weone"));
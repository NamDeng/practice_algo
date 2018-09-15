function solution(n) {
    return n.toString().split("").reverse().map(v => Number(v));
}
console.log(solution(12345));
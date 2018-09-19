function solution(strings, index) {
    return strings.sort((pre, next) => {
        return sort(pre, next, index);
    });
}
function sort(pre, next, index) {
    const preCharAt = pre.substring(index, index + 1);
    const nextCharAt = next.substring(index, index + 1);
    
    if(preCharAt < nextCharAt) return 1;
    else if(preCharAt > nextCharAt) return -1;
    else sort(pre, next, index + 1);
}
console.log(solution(["abce", "abcd", "cdx"], 2));
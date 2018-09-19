function solution(arr, divisor) {
    const divisorList = arr.filter(element => element % divisor === 0);
    
    return divisorList.length === 0 ? [-1] : divisorList((pre, next) => a - b);
}
console.log(solution([3,2,6], 10));
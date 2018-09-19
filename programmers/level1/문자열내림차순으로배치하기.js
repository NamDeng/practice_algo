function solution(s) {
    const upper = s.match(/[A-Z]/g);
    const lower = s.match(/[a-z]/g);

    return sort(lower) + sort(upper);
}
function sort(array) {
    return array.sort((pre, next) => {
        if(pre < next) return 1;
        else if(pre > next) return -1;
        return 0;
    }).join('');
}
console.log(solution("ZbcasdfasdfasdfdsfSZZZasdADDdefg"));
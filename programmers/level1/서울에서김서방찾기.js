function solution(seoul) {
    if(seoul.length < 1 && seoul.length > 1000) return;

    const place = seoul.findIndex(element => element === 'Kim')
    return `김서방은 ${place}에 있다`
}
console.log(solution(['Jane', 'Kim']);
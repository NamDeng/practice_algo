function solution(participant, completion) {
    let answer = "";

    for(let i=0; i<participant.length; i++) {
        if(!completion.includes(participant[i])) {
            answer = participant[i];
            break;
        } 
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    return answer;
}
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));

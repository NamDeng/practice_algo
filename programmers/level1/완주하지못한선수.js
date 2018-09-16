function solution(participant, completion) {
    let answer = "";

    for(let i=0; i<participant.length; i++) {
        const curParticipant = participant[i];
        
        const index = completion.indexOf(curParticipant);
        if(index === -1) {
            answer = curParticipant;
            break;
        }
        completion[index] = 0;
    }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));

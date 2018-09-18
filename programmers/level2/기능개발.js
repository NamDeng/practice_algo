// progresses 기능 개발 진행률 %
// speeds 하루 작업률 %

// 각 기능별로 하루 작업률을 더해서 100% 완성이 될때까지의 시간을 구한다.
// 뒤에 기능이 완성이 되더라도 앞에 기능이 완성되지 않으면 배포할 수 없다.
// 앞에 기능이 완성이 되면 뒤에 완성된 기능을 같이 배포한다.
function solution(progresses, speeds) {
    const completeDayList = progresses.reduce((init, value, index) => {
        init.push(Math.ceil((100 - value)/speeds[index]));

        return init;
    }, []);

    return completeDayList.reduce((init, value) => {
        ergyh  
        return init;
    }, []);
}
solution([93,30,55],[1,30,5]);
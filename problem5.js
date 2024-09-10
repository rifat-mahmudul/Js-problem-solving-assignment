function  waitingTime(waitingTimes  , serialNumber) {

    if(Array.isArray(waitingTimes) !== true || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }

    let sumTime = 0
    for(const num of waitingTimes){
        sumTime += num;
    }

    const avgTime = Math.round(sumTime / waitingTimes.length);

    const serialNumbers = serialNumber - 1;
    const perticipants = serialNumbers - waitingTimes.length;
    const needTime = avgTime * perticipants;

    return needTime;

}
function calculateFinalScore(obj) {

    if(typeof obj !== 'object'){
        return 'Invalid Input'
    }

    const finalScore = obj.testScore + obj.schoolGrade + 20;

    if(typeof obj.name === 'string' && obj.testScore <= 50 && obj.schoolGrade <= 30 && obj.isFFamily === true && finalScore >= 80){
        return true;
    }

    else{
        return false;
    }

}
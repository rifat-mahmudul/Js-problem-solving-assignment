function checkDigitsInName(name) {

    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    
    const numbers = '1234567890';

    for(i = 1; i < numbers.length; i++){

        if(!name.includes(numbers[i])){
            return false;
        }

        else{
            return true;
        }
    }

}
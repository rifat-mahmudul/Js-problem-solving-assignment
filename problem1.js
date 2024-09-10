function calculateTax(income, expenses){

    if(expenses > income || income < 0 || expenses < 0 ){
        return 'Invalid Input';
    }

    
    const difference = income - expenses;
    const tax = difference * 0.2;
    return tax;
    
}
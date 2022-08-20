document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = inputFieldValue('income-field');
    const foodField = inputFieldValue('food-field');
    const rentField = inputFieldValue('rent-field');
    const clothesField = inputFieldValue('clothes-field');

    // Total Expenses
    const totalExpenses = foodField + rentField + clothesField;
    setValue('total-expenses', totalExpenses);

    // Total Balance
    const totalBalance = incomeField - totalExpenses;
    setValue('total-balance', totalBalance);
});

document.getElementById('seve-btn').addEventListener('click', function () {
    // Saving Amount
    const incomeField = inputFieldValue('income-field');
    const saveAmountPercentage = inputFieldValue('save-amount-persent');
    const percentage = (incomeField / 100) * saveAmountPercentage;
    setValue('saving-amount', percentage);

    // Remaining Balance
    const balanceAmount = isInnerTextValue('total-balance');
    const savingAmount = isInnerTextValue('saving-amount');
    const remainingBalance = balanceAmount - savingAmount;
    setValue('remining-balance', remainingBalance);
});
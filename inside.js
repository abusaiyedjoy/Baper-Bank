document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);


    depositField.value = "";


    if (isNaN(depositAmount)) {
        alert('Please provied a valid number!')
        return;
    }


    const totalDeposit = document.getElementById('total-deposit')
    const totalAmountString = totalDeposit.innerText;
    const totalAmount = parseFloat(totalAmountString);
    const currentDepositAmount = depositAmount + totalAmount;
    totalDeposit.innerText = currentDepositAmount;


    const depositBalance = document.getElementById('total-balance');
    const balanceAmountString = depositBalance.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    const currentBalanceTotal = balanceAmount + depositAmount;
    depositBalance.innerText = currentBalanceTotal;



    

})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);


    withdrawField.value = "";


    if (isNaN(withdrawAmount)) {
        alert('Please provied a valid number!')
        return;
    }


    const totalWithdraw = document.getElementById('total-withdraw')
    const fullAmountString = totalWithdraw.innerText;
    const fullAmount = parseFloat(fullAmountString);
    


    const withdrawBalance = document.getElementById('total-balance');
    const withdrawBalanceString = withdrawBalance.innerText;
    const withdrawFullBalane = parseFloat(withdrawBalanceString);


    

    if (withdrawAmount > withdrawFullBalane) {
        alert("Invalied amount of your baper bank!")
        return;
    }

    
    const withdrawTotal = withdrawAmount + fullAmount;
    totalWithdraw.innerText = withdrawTotal;


    const currentWithdrawBalanceTotal = withdrawFullBalane - withdrawAmount;
    withdrawBalance.innerText = currentWithdrawBalanceTotal;



})
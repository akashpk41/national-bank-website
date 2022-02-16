// function for input value
function getInputValue(inputId){
   const inputField = document.getElementById( inputId + '-input');
   const inputAmount = parseFloat(inputField.value);
   console.log(inputAmount);
   // clear input field
   inputField.value = '';
   return inputAmount
}

// function for update total field
function updateTotalField(fieldId,amount){
   const previousTotalField = document.getElementById( fieldId +  '-amount');
   const totalFieldAmount = parseFloat(previousTotalField.innerText);
  
      
   previousTotalField.innerText = totalFieldAmount +  amount
   return totalFieldAmount
   
}

// update total balance
function updateTotalBalance(balance,isAdd){
   const previousBalance = document.getElementById('balance-total');
   const balanceTotal = parseFloat( previousBalance.innerText);

   if(isAdd){
      previousBalance.innerText = balanceTotal + balance
   } else {
      previousBalance.innerText = balanceTotal - balance
   };
   
  
};

   // validation
   function getCurrentBalance(){
      const previousBalance = document.getElementById('balance-total');
   const balanceTotal = parseFloat( previousBalance.innerText);
   return balanceTotal
      
   }


// handler for deposit button
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function(){
   const depositAmount = getInputValue('deposit');
   if( depositAmount > 0 ){
updateTotalField('deposit',depositAmount);
   updateTotalBalance(depositAmount,true)
   }
   
   
});

// handler for withdraw button
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function(){
   const withdrawAmount = getInputValue('withdraw');
   const currentBalance = getCurrentBalance();

   if( withdrawAmount > 0 && withdrawAmount < currentBalance ){
      updateTotalField('withdraw',withdrawAmount)
   updateTotalBalance(withdrawAmount,false)
   } else {
      alert( ` you don't have balance $${withdrawAmount} ` )
   }
   

});

$('#submit').click(function(){
    const name =$('#name').val();
let balance =parseFloat($('#balance').val());
let depositAmount=parseFloat($('#deposit').val());
let withdrawAmount =parseFloat($("#withdraw").val());

if(!name || isNaN(balance) || isNaN(depositAmount)||isNaN(withdrawAmount)){
    $('#result').html('Please fill all fields corrextly');
    return;
}

const acc =new BankAccount(name,balance);
let result =acc.deposite(depositAmount);
result +='<br>'+acc.withdraw(withdrawAmount);

$('#result').html(result);
})


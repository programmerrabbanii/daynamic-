document.getElementById('deposit').addEventListener('click',function(){
 const deposit=document.getElementById('deposit-text')
 const totaldepositstring=deposit.value;
 const totaldeposit=parseFloat(totaldepositstring)
 const amount=document.getElementById('total-amount'); 
 const allamountstring = amount.innerText;
 const  allamount=parseFloat(allamountstring)
const currentDposit = allamount + totaldeposit;
amount.innerText=currentDposit;

const blance=document.getElementById('blance-deposit')
const getblancestring = blance.innerText;
const getblance=parseFloat(getblancestring)

const totalblance=getblance + totaldeposit;
blance.innerText=totalblance;


















 deposit.value=' ';
})
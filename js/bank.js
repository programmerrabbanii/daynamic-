document.getElementById('sumbmit').addEventListener('click',function(){
const myemail=document.getElementById('email')
const emaill = myemail.value ;   
const myinput=document.getElementById('input')
const password=myinput.value;
if(emaill=='rabbanisarkar642@gmail.com'&& password=='rabbi'){
    console.log('this is valid')
    window.location.href = 'web.html';
}else{
    console.log('not valid')
}
})
document.getElementById('widthdraw').addEventListener('click',function(){
    const widthdrawinput=document.getElementById('widthdraw-input')
    const widtdrawstring = widthdrawinput.value ;
    const widtdraw=parseFloat(widtdrawstring)

    const widthdrawElement=document.getElementById('widthdraw-total')
    const windhrawElementstring=widthdrawElement.innerText;
    const windgrawEl=parseFloat(windhrawElementstring)
    const currentwidthdaw=windgrawEl + widtdraw;
    widthdrawElement.innerText = currentwidthdaw;

    const newBlancTotal=document.getElementById('blance-deposit')
    const newBlancTotalstring=newBlancTotal.innerText;
    const newBlancee = parseFloat(newBlancTotalstring)
    const newblancAll=newBlancee - widtdraw;
    newBlancTotal.innerText=newblancAll;






    widthdrawinput.value=' ';


})
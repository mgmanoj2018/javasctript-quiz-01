console.log("hello");
const dob = document.querySelector("#Date-birth");
const luckyNO= document.querySelector("#Lucky-no");
const clickBtn = document.querySelector("#check");
const outPutdiv = document.querySelector("#outPut")

function calculationNo(){
    const stringDob = dob.value;
    let sum = stringDob.replaceAll("-","");
    let sumOfdov = 0;
    for(let i=0; i<sum.length; i++){
        sumOfdov = sumOfdov + Number(sum.charAt(i));
    }
    console.log(sumOfdov);
    console.log(luckyNO.value);
    if(sumOfdov === luckyNO.value){
        outPutdiv.innerText = "you are lucky "
       }else{
        outPutdiv.innerText = "oh oh! y r not"
       }
   

  

}
// function calculateSum(stringDob){
//     stringDob = stringDob.replaceAll("-","");
//     console.log(stringDob);
// }
function isLuckyNo(){
    calculationNo()
}
clickBtn.addEventListener("click", isLuckyNo);
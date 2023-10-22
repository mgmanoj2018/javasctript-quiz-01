console.log("hello")
const cashinput = document.querySelector("#Cash");
const billinput = document.querySelector("#bill");
const btn = document.querySelector("#submit-btn");
const outputdiv = document.querySelector("#output");

function calculateNoOfNotes(bill,cash){
    if(bill>0){
        if(cash >= bill){
            const returnamount = cash-bill
            console.log("return amount" + " " + returnamount )
        }else{
            console.log("cash should be greater then bill or equal")
        }
    }else{
        console.log("bill should be greater then 0")
    }
    const calculation = cash-bill
   // console.log(calculation)
}
 function calculateNoOfNoteReturn(){
    
 }
function calculateCash(){
    const outputvalue = calculateNoOfNotes(billinput.value,cashinput.value)
    //console.log("click");
}
btn.addEventListener("click", calculateCash);



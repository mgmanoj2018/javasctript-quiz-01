console.log("hello")

const billAmount = document.querySelector("#bill");
const cashinput = document.querySelector("#Cash");
const btn = document.querySelector("#submit-btn");
const errMassage = document.querySelector("#error-msg") 
const numberOfNotes = document.querySelectorAll(".noOfNotes")
const availableNotes = [2000,500,200,100,50,20,1]
function validationOfAmount(){

    if(billAmount.value>0){
        if(billAmount.value <= cashinput.value){
            const returnamount =cashinput.value - billAmount.value 
            calculateCash(returnamount)
        }else{
            errMassage.innerText = "Bill amount should be big amount";
        }
    }else{
        errMassage.innerText = "Bill amount should be positive amount";
    }
   
}
 
function calculateCash(returnamount){
    for(let i=0; i<availableNotes.length;i++){
        const noOfNotes = Math.trunc(returnamount/availableNotes[i]);
        returnamount%=availableNotes[i];
    numberOfNotes[i].innerText = noOfNotes
    }
    
}
btn.addEventListener("click", validationOfAmount);



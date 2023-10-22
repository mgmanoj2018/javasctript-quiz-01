const selectInputbox = document.querySelectorAll(".inputBox");
const calculatBtn = document.querySelector("#btn");
const output = document.querySelector("#outPut");

function valueOfSquer(input1, input2){
    const sumOfvalue = input1*input1+input2*input2;
    //console.log(Math.sqrt(sumOfvalue))
    return sumOfvalue
    
}

function calculateOutPut(){
    const finaloutput = valueOfSquer(Number(selectInputbox[0].value), Number(selectInputbox[1].value));
    const finalOutputvalue =Math.sqrt(finaloutput);
    output.innerText = "Your put result" + finalOutputvalue

        //console.log(typeof selectInputbox[0].value);
    
}
calculatBtn.addEventListener("click", calculateOutPut);
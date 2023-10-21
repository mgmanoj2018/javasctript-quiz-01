console.log("hello");
const input  = document.querySelectorAll(".angle-input");
const itTangleBtn = document.querySelector("#isTrangle_btn");
const outPut = document.querySelector("#outPut");
function sumOfAngleCalculate(angle1,angle2,angle3){
    const sumOfTrangle = angle1+angle2+angle3
    console.log(sumOfTrangle)
}

function calculateIsTrangle(){
    const finalSum = sumOfAngleCalculate(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    if(finalSum===180){
        outPut.innerText = "yay, this is trangle"
        console.log("Yay, this is trangle")
    }else{
        outPut.innerText = "oh oh this is not form is trangle"
        console.log("oh oh! this is not form is trangle")
    }
    
}
itTangleBtn.addEventListener("click", calculateIsTrangle)
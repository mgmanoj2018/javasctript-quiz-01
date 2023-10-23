const input = document.querySelectorAll(".input-angle");
const isTrangleBtn = document.querySelector("#isTrangle-btn");
const outputAngle = document.querySelector("#outPut");
function calculateSumAngle(angle1,angle2,angle3){
    const angleOfAngle = angle1+angle2+angle3
    return angleOfAngle;
    //console.log(angleOfAngle)
}
function isTrangle(){
    const sumOfAngle = calculateSumAngle(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    if(sumOfAngle ===180){
        outputAngle.innerText= "Yay, The angle of form is a Trangle";
    }else{
        outputAngle.innerText = "Oh Oh! The angle don't form a triangle";
    }

    //console.log(typeof input[0].value)
   // console.log(sunOfAngle)
}
isTrangleBtn.addEventListener("click", isTrangle);

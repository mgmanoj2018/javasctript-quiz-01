console.log("hello");
const formAll = document.querySelector("#formAll");
const submitBtn = document.querySelector("#submit-btn");
const outPut = document.querySelector("#outPut");

const answare = ["JS", "alert('Hello World')"]
function ansWareFunction() {
    let score = 0;
    let index = 0
    const formData  = new FormData(formAll);
    for(let key of formData.values()){
        if(key === answare[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    console.log(score);
    outPut.innerText = " The score is "  + score;
}
submitBtn.addEventListener("click", ansWareFunction)
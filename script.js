let string="";

const buttons=document.querySelectorAll(".button");
const displayResult=document.getElementById("resultDisplay");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            string=eval(string);
        }else if(e.target.innerText=="AC"){
            string="";
        }else{
            string=string+e.target.innerText;
        }
        console.log(string);
        displayResult.innerHTML=string;
    })
})
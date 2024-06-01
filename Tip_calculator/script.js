let nameInput= document.querySelector("#name")
let billInput= document.querySelector("#bill")
let btn= document.querySelector(".submit")

let output= document.querySelector(".output")


//events
// addEventListener()
// document.addEventListener()

btn.addEventListener("click",hello)

function hello(eventDetails){
    eventDetails.preventDefault()
    // console.log(eventDetails.target);
    console.log(nameInput.value);
    console.log(billInput.value);
    let tip=billInput.value*0.05
    output.innerHTML=`
    <h1>Hey ${nameInput.value} your tip is ${tip}</h1>
    `
    
}
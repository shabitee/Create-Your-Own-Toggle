const toggleButton1 = document.querySelector(".accordion1");
const toggleButton2 = document.querySelector(".accordion2");
const toggleButton3 = document.querySelector(".accordion3");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
toggleButton1.addEventListener("click", () =>{
    text1.classList.toggle("text1");
})
toggleButton2.addEventListener("click", () =>{
    text2.classList.toggle("text2");
})
toggleButton3.addEventListener("click", () =>{
    text3.classList.toggle("text3");
})
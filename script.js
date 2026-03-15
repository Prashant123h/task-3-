// NAVBAR SCROLL EFFECT

window.addEventListener("scroll",function(){

const navbar=document.getElementById("navbar");

if(window.scrollY>50){
navbar.classList.add("navbar-scrolled");
}
else{
navbar.classList.remove("navbar-scrolled");
}

});


// ACTIVE MENU

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(pageYOffset>=sectionTop-100){
current=section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){
link.classList.add("active");
}

});

});


// CONTACT FORM VALIDATION

document.getElementById("contactForm").addEventListener("submit",function(e){

let valid=true;

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();

document.getElementById("nameError").innerText="";
document.getElementById("emailError").innerText="";
document.getElementById("messageError").innerText="";

if(name===""){
document.getElementById("nameError").innerText="Name is required";
valid=false;
}

if(email===""){
document.getElementById("emailError").innerText="Email is required";
valid=false;
}
else{

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
document.getElementById("emailError").innerText="Enter valid email";
valid=false;
}

}

if(message===""){
document.getElementById("messageError").innerText="Message is required";
valid=false;
}

if(!valid){
e.preventDefault();
}

});


// DARK MODE

const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
localStorage.setItem("theme","light");
}
else{
localStorage.setItem("theme","dark");
}

});


if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light-mode");
}
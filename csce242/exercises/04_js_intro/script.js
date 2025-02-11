//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML="Hi Jeffrey";
};

document.getElementById("btn-color").onclick = () => {
   const messageP = document.getElementById("message").innerHTML="Goodbye";
   messageP.innerHTML = "Good bye";
   messageP.classList.toggle("sad");
};
//Happy Script
document.getElementById("btn-happy").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("happy");
    displayP.innerHTML = "Good Times";
};
//Sad Script
document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("sad");
    displayP.innerHTML = "Sad Times";
};

document.getElementById("btn-clear").onclick = () => {
    document.getElementById("display").classList.add("hidden");
};

//key down
document.getElementById("txt-emotion").onkeydown = (event) =>{
    //const emotion = document.getElementById("txt-emotion").value;   
    document.getElementById("emotional-message").innerHTML =
    "You are feeling " + event.currentTarget.value;
}
//toggling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};
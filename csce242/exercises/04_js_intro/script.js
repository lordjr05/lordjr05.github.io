//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML="Hi Jeffrey";
};

document.getElementById("btn-color").onclick = () => {
   const messageP = document.getElementById("message").innerHTML="Goodbye";
   messageP.innerHTML = "Good bye";
   messageP.classList.toggle("sad");
}
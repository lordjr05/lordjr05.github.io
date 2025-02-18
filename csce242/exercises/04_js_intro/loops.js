document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = ""; 
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = ""; //clear out any previous error
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = "";

    if(parseInt(endNum) < parseInt(startNum)) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //stops you if you already have an error
    }

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);
        //attach event to onclick li
        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`
        }
    }
}

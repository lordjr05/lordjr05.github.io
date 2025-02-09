//Hello Button
const addHello = () => {
    const container = document.getElementById("hello-container");
    const hello = document.createElement("div");
    hello.textContent = "hello";
    container.appendChild(hello);
};
//Pick a Color
const toggleColorPicker = () => {
    const colorPicker = document.getElementById("colorPicker");
    colorPicker.style.display = colorPicker.style.display === "none" ? "block" : "none";
};

const changeColor = () => {
    const colorPicker = document.getElementById("colorPicker");
    const shape = document.getElementById("shape");
    shape.style.backgroundColor = colorPicker.value;
};

//Image Change
function refreshImage() 
{
    document.getElementById("randomImage").src = "https://picsum.photos/200?random=" + new Date().getTime();
};
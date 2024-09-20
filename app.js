const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    // console.log("X: ",event.offsetX);
    // console.log("Y", event.offsetY);

    const xPos  = event.offsetX;
    const yPos = event.offsetY;

    const spanEl = document.createElement("span");
    // const OneSpan = document.querySelector(".CenterSpan").style.display = "none";
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() *100;
    spanEl.style.height = size + "px";
    spanEl.style.width = size + "px";
    bodyEl.appendChild(spanEl);


    setTimeout(()=>{
        spanEl.remove();
    }, 3000)
})
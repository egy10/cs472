alert("Hello, world!")
function buttonTimer() {
    let timer = setInterval(fromButton, 500);
    document.getElementById("stopTimerBtn").onclick = function () { clearInterval(timer) };
}
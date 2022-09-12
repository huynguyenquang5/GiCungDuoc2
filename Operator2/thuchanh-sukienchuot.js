let ImgBall= null;
ImgBall = document.getElementById("ImageBall");
function init() {
    ImgBall= document.getElementById("ImageBall");
    ImgBall.style.position = "relative";
    ImgBall.style.left = "0px";
}
function MoveRight() {
    ImgBall.style.left = parseInt(ImgBall.style.left) + 10 + "px";
}
window.onload=init;


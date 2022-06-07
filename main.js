color=""
var line_width=""
mouse_event=""
last_x=""
last_y=""
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    color=document.getElementById("colour").value
    line_width=document.getElementById("width").value
    radius=document.getElementById("radius").value
    mouse_event="mousedown"
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouse_event="mouseup"
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
    mouse_event="mouseleave"
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){

    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    if(mouse_event=="mousedown"){
    console.log("current position of x and y coordinates =");
    console.log("x = "  + mousex + "y = " + mousey);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width
    ctx.arc(mousex, mousey, radius, 0, 2* Math.PI);
ctx.stroke();
}
last_x=mousex
last_y=mousey
}
function clear_canvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}











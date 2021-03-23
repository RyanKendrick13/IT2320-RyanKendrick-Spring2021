/*********************************************************************/
//Global Area




/***************** Function definition area *************/
//write a function to change the size of the box (css)
window.onload=function(){

    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click",createLink);

    var btn2= document.getElementById("btn2");
    btn2.addEventListener("click",removeLink);
    document.getElementById("btn3").addEventListener("click",changeColor);
    var btn4 = document.getElementById("btn4");
    btn4.addEventListener("click",changeSquares);
    var btn5=document.getElementById("btn5");
    btn5.addEventListener("click",changeShape);
function createLink(){
    var parent = document.getElementById("parentLink");
    var child=document.createElement("a");
child.href="https://www.tri-c.edu";
child.innerHTML="www.tri-c.edu";

   

    parent.appendChild(child);


}

function removeLink()
{
var parent = document.getElementById("parentLink");
var child = parent.lastElementChild;
parent.removeChild(child);



}
function changeSquares()
{
var square1 = document.getElementsByClassName("square1");
        var square2 = document.getElementsByClassName("square2");
for(var i=0; i<square1.length;i++)
    {
        square1[i].style.backgroundColor = "black";
square1[i].style.color = "white";

       

    }
for(var i=0; i<square2.length;i++)
{
square2[i].style.backgroundColor = "white";
square2[i].style.color = "black";
        }


}

function changeShape()

{
var radius = document.getElementById("inputRadius").value;
        var square1 = document.getElementsByClassName("square1");
for(var i=0; i<square1.length;i++)
    {
        square1[i].style.borderRadius = radius;
       

    }



}

function changeColor()
{
var inputColor = document.getElementById("inputColor").value;
var box = document.getElementById("box");
box.style.backgroundColor=inputColor;


}

}
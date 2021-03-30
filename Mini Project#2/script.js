//Global area
window.onload=function() {
//Try and use classname to get a group of divs instead of getting them one by one by id
//if you are writing the same type of code multiple times, you are doing it incorrect

//Attach events using eventlistener here


var x= document.getElementsByClassName("col");
for(var i=0;i<x.length;i++)
{
x[i].addEventListener("click",function(){
    userTurn(this);
});
}
var square= document.getElementsByClassName("col");
/************** Function area *******************/

//function provided. Add parameter(s) if needed
function userTurn(x)
{
    //Add code here
    x.innerHTML="X";
    computerTurn();
}

//function provided. Add parameter(s) if needed
function computerTurn()
{
    //Add code here

    for(var i =0;i<square.length;i++)
    {
       if(square[i].innerHTML==!"X"||square[i].innerHTML==!"O")
       {
        square[i].innerHTML="O";
        break;
       }
       else
       {
           continue;
       }
    }

}
}

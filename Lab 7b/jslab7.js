/*********************************************************************/
//Global Area




/***************** Function definition area *************/

window.onload=function(){



var y =  document.getElementsByClassName("square3");

for(var i=0;i<y.length;i++)
{
    y[i].addEventListener("click",function()
    {
        ChangeSquare(this);
    })
}
function ChangeSquare(sqObj)
{
    sqObj.style.backgroundColor="green";
}

var x = document.getElementsByClassName("btnOrig");

for(var i=0;i<x.length;i++)
{
        x[i].addEventListener("click", function(){
        ChangeButtonText(this);
    })
}

function ChangeButtonText(btnObj)
{
    btnObj.innerHTML = "Active";
}










}

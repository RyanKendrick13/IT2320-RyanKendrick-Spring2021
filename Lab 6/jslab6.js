/*********************************************************************/
//Global Area

createLink();


/***************** Function definition area *************/
//write a function to change the size of the box (css)

function createLink(){
    var parent = document.getElementById("parentLink");
    var child=document.createElement("a");
    child.href="www.tri-c.edu";
    parent.appendChild(child);
    

}
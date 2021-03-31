//Global area
var winningPos=[[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[2,5,8],
		[0,4,8],
		[2,4,6]];
window.onload=function() {
//Try and use classname to get a group of divs instead of getting them one by one by id
//if you are writing the same type of code multiple times, you are doing it incorrect

//Attach events using eventlistener here
var squares= document.getElementsByClassName("col");

for(var i=0; i<squares.length;i++)
{
	squares[i].addEventListener("click",function(){
	userTurn(this);

});
}









/************** Function area *******************/

//function provided. Add parameter(s) if needed
function userTurn(square)
{
    //Add code here
	

	 square.innerHTML="X";
	computerTurn();
	DetermineWinner(square);
	
	

 

	

}

//function provided. Add parameter(s) if needed
function computerTurn()
{
    //Add code here
for(var i=0;i<squares.length;i++)
{

	if(squares[i].innerHTML==!"O"||squares[i].innerHTML==!"X")
	

{
	squares[i].innerHTML="O";
	DetermineWinner(squares);
	break;
		
}

	else
{
	continue;
	
}
}

	

}




	function DetermineWinner(elem)
{
    var squares= document.getElementsByClassName("col");

	for(var i=0;i<=winningPos.length;i++)

{
    console.log(winningPos[i][0]);
    console.log(winningPos[i][1]);
    console.log(winningPos[i][2]);
	/*if(elem[i]==winningPos[i])
{
	var message = document.getElementById("message");
	message.innerHTML="Computer is the winner";
	
}
	else if(elem[i]==winningPos[i])
{
	var message = document.getElementById("message");
	message.innerHTML="User is the winner";
	
}
	else
{
	break;
}
*/
}


}
}
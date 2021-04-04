//Global area
var winningPos=[[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[2,5,8],
		[0,4,8],
		[2,4,6],
        [1,4,7]];
var win = false;
        
window.onload=function() {
//Try and use classname to get a group of divs instead of getting them one by one by id
//if you are writing the same type of code multiple times, you are doing it incorrect

//Attach events using eventlistener here
var squares= document.getElementsByClassName("col");
var reset=document.getElementById("reset");
reset.addEventListener("click",ResetGameBoard);

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
	
    if((square.innerHTML==!"O")||(square.innerHTML==!"X")){
	 if(win==false){
    square.innerHTML="X";
     computerTurn();
	DetermineWinner(square);
    
}
	}
	

 

	

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
    

for(var i=0;i<winningPos.length;i++)

{
if((squares[winningPos[i][0]].innerHTML=="X")&&(squares[winningPos[i][1]].innerHTML=="X")&&(squares[winningPos[i][2]].innerHTML=="X")){
    var message = document.getElementById("message");
	message.innerHTML="User is the winner";
    win=true;
	
}

    if((squares[winningPos[i][0]].innerHTML=="O")&&(squares[winningPos[i][1]].innerHTML=="O")&&(squares[winningPos[i][2]].innerHTML=="O")){
        var message = document.getElementById("message");
        message.innerHTML="Computer is the winner";
		win = true;
        
    }
}
} 

 function ResetGameBoard(){

	var squares= document.getElementsByClassName("col");
	document.getElementById("status").innerHTML="This is a new game!!! Click on any of the squares to start the game";
	document.getElementById("message" ).innerHTML=" ";
	win=false;
	

	for(var i=0;i<squares.length;i++)
	{
		squares[i].innerHTML="";
		

	}


}

}


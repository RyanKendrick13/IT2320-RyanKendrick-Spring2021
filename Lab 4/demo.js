
  
//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
    var topCommission = 0;
    var topSalesPerson = "Nobody yet";

    var topCommission=0;
    var topSalesPerson =" ";
    var salesperson=["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon","Miller"];
    var Dec =[1500, 15000,30000,12000,45000,25000,8000];
    var Jan=[10000, 25000, 20000, 14000, 30000, 16000, 30000];
   var Feb=[8000, 7500, 45000, 10000, 38000, 22000, 15000];
   var totalsales=[];
   var commission=[];
   var avgcommission=[];
   for(var i=0;i<=6;i++)
   {
      totalsales[0] = Dec[0]+Jan[0]+Feb[0];
      totalsales[1] = Dec[1]+Jan[1]+Feb[1];
      totalsales[2] = Dec[2]+Jan[2]+Feb[2];
      totalsales[3] = Dec[3]+Jan[3]+Feb[3];
      totalsales[4] = Dec[4]+Jan[4]+Feb[4];
      totalsales[5] = Dec[5]+Jan[5]+Feb[5];
      totalsales[6] = Dec[6]+Jan[6]+Feb[6];
   
    if(totalsales[i]<=5000){
       commission[i]=totalsales[i]*.01;
     
   }
   else if(totalsales[i]<=10000){
     commission[i]=totalsales[i]*.02;
   }
   else if(totalsales[i]<=15000)
   {
      commission[i]=totalsales[i]*.03;
   }
   else if(totalsales[i]<=30000)
   {
      commission[i]=totalsales[i]*.05;
   }
   else
   {
      commission[i]=totalsales[i]*.08;
      
     
   }
   avgcommission[i]=commission[i]/3;
   
   console.log(salesperson[i]+" "+commission[i]+" "+ avgcommission[i]);
   
   if(topCommission<=commission[i]){
     topCommission=commission[i];
     topSalesPerson=salesperson[i];
   }
   }
   alert(topSalesPerson+" " +topCommission);

}


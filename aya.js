// var counter=0;
// var timerID=setInterval("timerFun()",1000);

// function timerFun(){
// document.title=++counter;
// //scrollBy(10,10);
// document.body.style="background-color:rgb(100,100,"+(counter*20)+")"}

//var MaxW = 8, MaxH = 12;
//document.write("<table noborder cellpadding=0 style='margin: 0 35%;' cellspacing=0 bgcolor=#FFFFFF><tr><td>");
//for (j = 0; j < MaxH; j++) {
    //for (i = 0; i < MaxW; i++)
       //document.write("<IMG src=\"ball0.gif\" border='1'>");
   //document.write("<BR>");
//}
 //document.write("</td></tr></table>");    

//function welcom with aya.html
function login(){

   var userName= document.getElementById("user").value;
	window.location.href = 'fallball.html' + '#' + userName;
}

function myfunction(){
	var text = window.location.hash.substring(1);
	var title= document.getElementById("title");
	title.innerHTML="welcome "+text;
}





/*
*
* 1- initilization var "box,play,pause"
* 2- add first ball fixed
* 3-make random ball
*
* */


var  myplay =document.getElementById("play"),
     pause = document.getElementById("pause"),
     playagin = document.getElementById("playagain"),
     boxball = document.getElementById("boxball"),
     imgball = document.createElement("img"),
     idball = document.createAttribute("id"),  // for give id to img
    divcounter   = document.getElementById('counter');

//add Ball firt one
/***/
idball.value = "ball"; // for give id value img

boxball.appendChild(imgball); // to add "img" to  box>>div
imgball.setAttributeNode(idball); // to add "id" to  img

imgball.src = 1 + ".gif"; // add src

imgball.style.position = "absolute"; // to be imgball swimming in the box
imgball.style.top = "2px"; // start imgball in 2px of top
imgball.style.left =  "220px";// start imgball in 2px of bottom

/***/

var count = 1;
var ballcolum =7; // start ball in colum 7
/*
* if click left
* ballcolum--
*
* if click right
* ballcolum++
*
* */



var counter = 0,
     counter2 = 59,
     countermin = 0,
     countermin2 = 2;

divcounter.innerHTML = "Timer " + countermin+""+countermin2+":"+counter2 ;

var clicked = false; //make flag to stop force speed
width =[360,360,360,360,360,360,360,360,360,360,360,360,360,360,360,360];
//make array of width == [16 ball]


function randomImgball() {
    //make random number
    var x = Math.random();
    var y = Math.floor((x *4)+1);

      //the same last ball but this ball is random
    imgball = document.createElement("img");
    idball = document.createAttribute("id");
    idball.value = "ball";

    boxball.appendChild(imgball);
    imgball.setAttributeNode(idball);

    imgball.src = y + ".gif";

    imgball.style.position = "absolute";
    imgball.style.top = "2px"
    imgball.style.left =  "220px";
    ballcolum=7;
}




function moveBallLeft() {
    if (parseInt(imgball.style.left)> 30){  // if( (num of img) > 30)

        ballcolum--;   /*if click left ballcolum-- */
        if(width[ballcolum] > parseInt( imgball.style.top) ){

        imgball.style.left = (parseInt(imgball.style.left) - 30) + "px"; // every click left ((num of img.left ) - 30 )

        }else{
            ballcolum++;
            imgball.style.left = (parseInt(imgball.style.left)) + "px";
        }

    }
}


function moveBallRight() {
    if(parseInt(imgball.style.left)<450){  // if( (num of img) > 450) 450 >> width box
        ballcolum++;/*if click right ballcolum++ */
        if(width[ballcolum] > parseInt( imgball.style.top) ) {
            imgball.style.left = (parseInt(imgball.style.left) + 30) + "px";
        }else {
            ballcolum--;
            imgball.style.left = (parseInt(imgball.style.left)) + "px";
        }
    }
}




function movementKey(event){  //movementKey

    if(event.keyCode == 39) { //right
        moveBallRight();
    }
    else if(event.keyCode == 37) { //left
        moveBallLeft();
    }

}

function moveDown(ballcolum) {
    if (count <= width[ballcolum]) { /// if(count of (top ball) < number inside width arr )
        count++;
        imgball.style.top = count + "px";
        document.onkeyup = movementKey;
    }
    else if(count ==  (width[ballcolum]+1)){ /// if(count of (top ball) = number inside width arr + 1 )
        width[ballcolum] -=30; ///  ( number inside width arr -=  30 (size ball) )
        randomImgball();
        count = 0;
    }
    else if(width[ballcolum] <= 0){ // if number inside width arr == 0 >> out of the box
        window.clearInterval(mycounter);
        window.clearInterval(timeid);
        boxball.style.display = "none";
        divcounter.style.display = "none";
        myplay.style.display = "none";
        pause.style.display = "none";
        playagin.style.display = "block";
        clicked = false;

    }
}








myplay.onclick = function () {

    if(!clicked) {
        clicked = true;
        timeid = setInterval(function () {
            moveDown(ballcolum);

        }, 10);

        //*** Counter **///
        mycounter = window.setInterval(function () {


            if (counter2 < 60) {
                if (counter2 < 11 && counter2 > 0) {
                    counter2--;
                    if (countermin2 == 2 || countermin2 == 1 || countermin2 == 0)
                        divcounter.innerHTML = "Timer " +countermin + "" + countermin2 + ":" + counter + "" + counter2;
                }
                else if (counter2 == 0) {
                    countermin2--;
                    if (countermin2 < 0) {

                        counter2 = 0;
                        countermin2 = 0;
                        divcounter.innerHTML = "Timer " +countermin + "" + countermin2 + ":" + counter + "" + counter2;
                        window.clearInterval(mycounter);
                        window.clearInterval(timeid);


                        boxball.style.display = "none";
                        boxtime.style.display = "block";

                        myplay.style.display = "none";
                        pause.style.display = "none";

                        playagin.style.display = "block";
                        clicked = false;

                    }
                    else {
                        counter2 = 59;

                        divcounter.innerHTML = "Timer " +countermin + "" + countermin2 + ":" + +counter2;
                    }

                }

                else {
                    counter2--;
                    if (countermin2 == 2 || countermin2 == 1 || countermin2 == 0)
                        divcounter.innerHTML = "Timer " +countermin + "" + countermin2 + ":" + +counter2;

                }
            }


        },1000);



    }

};

pause.onclick = function () {
   clearInterval(mycounter);
    window.clearInterval(timeid);
        clicked = false;
       };

playagin.onclick  = function () {
    location.reload();
}


















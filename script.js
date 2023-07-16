"use strict"

/*Will get the id of the buttons*/
var startBtn=document.getElementById("start-btn");
var pauseBtn=document.getElementById('pause-btn')
var resetBtn=document.getElementById('reset-btn');

/*get the id of the screen(mins,sec,milisecs)*/
var mins=document.getElementById('mins');
var secs=document.getElementById('secs');
var milisecs=document.getElementById('milisecs');

/*It will store milisec,sec,min after resuming the timer*/
var milisecsAfterResuming=0;
var secsAfterResuming=0;
var minsAfterResuming=0;


startBtn.addEventListener('click',startTimer);
/*Starting timer*/
function startTimer(){
	console.log("Started");
	let seconds=secsAfterResuming;
	let minutes=minsAfterResuming;
	let startMili=milisecsAfterResuming;
	let endMili=99;
	let timeInterval=setInterval(function(){
		if(startMili==endMili){
			seconds=seconds+1;
			secs.innerHTML=seconds
			startMili=0;
		}
		else if(seconds==60){
			minutes=minutes+1;
			mins.innerHTML=minutes;
			seconds=0;
		}
		startMili=startMili+1;
		milisecs.innerHTML=startMili;
	},10)

	pauseBtn.addEventListener('click',pauseTimer);
	/*when timer is paused*/
	function pauseTimer(){
		/*will store the time */
		milisecsAfterResuming=startMili;
		secsAfterResuming=seconds;
		minsAfterResuming=minutes;
		clearInterval(timeInterval);
		
	}

	resetBtn.addEventListener('click',resetTimer);
	/*when timer is reset*/
	function resetTimer(){
		clearInterval(timeInterval);

		/*reset the time*/
		milisecs.innerHTML="00";
		secs.innerHTML="00";
		mins.innerHTML="00";
		milisecsAfterResuming=0;
		secsAfterResuming=0;
		minsAfterResuming=0;
	
	}

	
}


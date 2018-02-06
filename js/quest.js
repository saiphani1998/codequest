//sticky header
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}

//exam started time;
function time()
{
	var starttime=document.getElementById("start-time");
	starttime.innerHTML=new Date().toLocaleTimeString();
	document.form.start.value=new Date().toLocaleTimeString();
}

//timer start
document.getElementById('time').innerHTML= 01 + ":" + 30;
startTimer();

function startTimer()
{
	var presentTime = document.getElementById('time').innerHTML;
	var timeArray = presentTime.split(/[:]+/);
	var m = timeArray[0];
	var s = checkSecond((timeArray[1] - 1));
	if(s==59)
	{
		m=m-1;
	}
//change color from green to red
	if (m>0)
	{
		document.getElementById('time').style.color = "#51f90e";
	}
	else
	{
		document.getElementById('time').style.color = "#ff0000";
	}
//To submit form after timeout
	if(m<0)
	{
		//document.form.submit();
		startTimer();
	}
	document.getElementById('time').innerHTML = m + ":" + s;
	setTimeout(startTimer, 1000);
}
function checkSecond(sec)
{
	if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
	if (sec < 0) {sec = "59"};
	return sec;
}
//end of timer

// number of questions answered
var yes=[0,0,0,0,0,0,0,0,0,0];

function count(num)
{
	yes[num]=1;
	var noq=document.getElementById("noq");
	var count=0;
	for(var i=0;i<10;i++)
	{
		count+=yes[i]
	}
	noq.innerHTML=count;
}
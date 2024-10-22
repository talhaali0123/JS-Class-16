var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");


var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer() {

    msec++;
    msecHeading.innerHTML = msec;

    if (msec >= 100) {

        sec++;
        secHeading.innerHTML = sec;
        msec = 0;

    }

    if (sec >= 60) {

        min++;
        minHeading.innerHTML = min;
        sec = 0;
        
    }

    if (min >= 60) {

        hour++;
        hourHeading.innerHTML = hour;
        min = 0;
       
    }
}

// setInterval(timer, 10);

    function start() {
        
        interval = setInterval(timer, 10);
        var dis = document.getElementById("disabled");
        dis.disabled = true;
        

       
        
      }
      
      function stop() {

        clearInterval(interval);
        var dis = document.getElementById("disabled");
        dis.disabled = false;

      }
      
      function reset() {

        hour = 0;
        min = 0;
        sec = 0;
        msec = 0;
        msecHeading.innerHTML = msec;
        secHeading.innerHTML = sec;
        minHeading.innerHTML = min;
        hourHeading.innerHTML = hour;
        stop();
        
      }


    


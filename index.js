var timer = document.getElementById("timer");
var toggleBtn = document.getElementById("toggle");
var resetBtn = document.getElementById("reset");


resetBtn.addEventListener("click",function(){
  watch.reset();
});

class Stopwatch {
    constructor() {
        this.sec = 0;
        this.min = 0;
        this.hrs = 0;
        this.countStart = 0;
        this.countStop = 0;
        this.time = 0;
        this.duration = 0;
    }
    this.prototype.start() {
        if(this.countStart == 1) {
            throw new Error("Stopwatch already started");
        }
        this.countStart++;
        this.countStop = 0;
        this.time = setInterval(this.incrementTime,1000);
    }
    incrementTime() {
        this.sec++;
        if (this.sec >= 60){
            this.sec=0;
            this.min++;
        }
        if(this.min >= 60) {
            this.min=0;
            this.hrs++;
        }
        displayTime();
    }
    stop() {
        if(countStop == 1)
            throw new Error("Stopwatch already stopped");
        if(countStart == 0)
            throw new Error("Stopwatch is not started");
        countStop++;
        countStart = 0;
        clearInterval(time);
    }
    reset() {
        if(countStop == 0)
            this.stop();
        sec = 0;
        min = 0;
        hrs = 0;
        countStart = 0;
        countStop = 0;
        duration = 0;
    }
    displayTime() {
        console.log("" + this.hrs + " : "+ this.min + " : " + this.sec + "");
    }
    
    // Object.defineProperty(this, 'duration', {
    //     get: function() {
    //         duration = (hrs * 3600) + (min * 60) + sec;
    //         return duration;
    //     }
    // });
}
// Stopwatch.start();
var watch = new Stopwatch();
watch.start();

// toggleBtn.addEventListener("click",function () {
//   if(watch.isOn){
//     watch.stop();
//     toggleBtn.textContent = "Start";
//   }else {
//     watch.start();
//     toggleBtn.textContent = "Stop";
//   }
// });
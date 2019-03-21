function Stopwatch() {
    let sec=0, min=0, hrs=0, countStart=0,countStop=0, time, duration;
    this.start = function() {
        if(countStart == 1) {
            throw new Error("Stopwatch already started");
        }
        countStart++;
        countStop = 0;
        time = setInterval(this.incrementTime,1000);
    };
    this.incrementTime = function() {
        sec++;
        if (sec >= 60){
            sec=0;
            min++;
        }
        if(min >= 60) {
            min=0;
            hrs++;
        }
    };
    this.stop = function() {
        if(countStop == 1)
            throw new Error("Stopwatch already stopped");
        if(countStart == 0)
            throw new Error("Stopwatch is not started");
        countStop++;
        countStart = 0;
        clearInterval(time);
    };
    this.reset = function() {
        if(countStop == 0)
            this.stop();
        sec = 0;
        min = 0;
        hrs = 0;
        countStart = 0;
        countStop = 0;
        duration = 0;
    };
    this.displayTime = function() {
        console.log("" + hrs + " : "+ min + " : " + sec + "");
    };
    Object.defineProperty(this, 'duration', {
        get: function() {
            duration = (hrs * 3600) + (min * 60) + sec;
            return duration;
        }
    });
}

const sw = new Stopwatch();
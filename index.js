function Stopwatch() {
    let sec=0, min=0, hrs=0, countStart=0,countStop=0, time;
    this.start = function() {
        if(countStart==1) {
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
        if(countStop==1) {
            throw new Error("Stopwatch already stopped");
        }
        countStop++;
        countStart = 0;
        clearInterval(time);
    };
    this.reset = function() {
        this.stop();
        sec = 0;
        min = 0;
        hrs = 0;
        countStart = 0;
        countStop = 0;
    };
    this.displayTime = function() {
        console.log("" + hrs + " : "+ min + " : " + sec + "");
    }
    this.duration = function() {
        this.duration = function() {
            let totalTime = (hrs * 3600) + (min * 60) + sec;
            return totalTime;
        }
    }
}

var sw = sw.Stopwatch();
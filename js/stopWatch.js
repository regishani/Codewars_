function StopWatch (){
    let startTime, stopTime, duration, running = 0
    this.start = function (){
        if(running){
            throw new Error ("It has already started")
        }
        running = true
        startTime = new Date()
    },
    this.stop = function (){
        if(running = false){
            throw new Error ("It has already stopped!")
        }
        running = false
        stopTime = new Date()
        const seconds = (stopTime.getTime() - startTime.getTime())/1000
        duration=+seconds
    },
    this.reset = function (){
        startTime = null
        stopTime = null
        running = null
        duration = 0
    },
    Object.defineProperty(this, "duration", {
        get:function () { return duration}
    })
}
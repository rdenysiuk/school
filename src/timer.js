var _seconds = 0;
var timerInterval;

function startTimer(min, callback){
    _seconds = 60 * min || 0;
    
    timerInterval = setInterval(function(){        
        _seconds--
        drawTimer(_seconds);
        if(!_seconds){
            clearInterval(timerInterval);
            if(callback != null) callback();
        }
    }, 1000);
}

function drawTimer(sec){
    var min = Math.floor(sec/60);
    var remain = sec % 60;
    if(remain < 10) remain = '0' + remain;
    $('#timer').text(min + ":" + remain);
}
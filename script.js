let sec = 0;
let min = 0;
let hr = 0;
let interval;

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

document.getElementById("button-start").onclick = function start(){
    watch()
    interval= setInterval(watch,10)
}

document.getElementById("button-stop").onclick = function stop(){
    clearInterval(interval)
}

document.getElementById("button-reset").onclick = function reset(){
    clearInterval(interval)
    sec=0
    min=0
    window.alert("Você deseja parar no: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'

}

function watch(){
    sec++
    if(sec==60){
        sec=0
        min++
        if(min==60){
            min=0
            hr++
        }
    }
    
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}


const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId
const startInterval = function(){
    if(!intervalId){
        intervalId = setInterval(startIt,1000)
    }
    function startIt(){
        document.body.style.backgroundColor = randomColor()
    }
    
}

const stopInterval = function() {
    clearInterval(intervalId)
    intervalId = null
}

document.getElementById('start').addEventListener('click' , startInterval)
document.getElementById('stop').addEventListener('click' , stopInterval)
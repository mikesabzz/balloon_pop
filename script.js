
window.onload = function() {
    const body = document.body;
    
    function createBalloons() {
       const createBalloon = document.createElement('div')
       createBalloon.className = 'balloon'
       body.appendChild(createBalloon)
    

    let moveBalloons = function(balloon) {
        balloon.style.top = Math.random() * window.innerHeight + 'px'
        balloon.style.left = Math.random() * window.innerWidth + 'px'
    }
    setInterval(function(){
        moveBalloons(createBalloon)
    }, 1000);
    
    function checkWinner() {
        let balloons = document.getElementsByClassName('balloon')
        if (balloons.length === 0){
            alert('You popped 10 balloons. Hit refresh to reset.')
        }
    }
    createBalloon.addEventListener('click', function(e){
        createBalloon.classList.add('pop')
        let poppedBalloon = e.target
        setTimeout(function() {
            poppedBalloon.parentNode.removeChild(poppedBalloon)
            checkWinner()
        }, 1000);
    })
    }


    for(let i = 0; i < 10; i++) {
        createBalloons()
    }
}


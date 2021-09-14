const btnStart = document.getElementById('btn-start');
const canvas = document.getElementById('canvas');
const gamer = document.getElementById('gamer');
const barrier = document.getElementById('barrier');
const score = document.querySelector('#core span');
let scoreDefault =  0;

// Event 
btnStart.addEventListener('click', () => {
    scoreDefault = 0;
    score.innerHTML = scoreDefault;
    btnStart.style.display = 'none';
    canvas.classList.add('canvas-moving');
    barrier.classList.add('barrier-moving');
});


document.addEventListener('keydown', (e) => {
    if(e.code == 'Space' || e.code == 'ArrowUp' || e.code == 'KeyW') {
        if(btnStart.style.display == 'none') gamerJump();
    }
    
});


// Function

function gamerJump() {
    if(gamer.classList != 'gamer-moving') {
    gamer.classList.add('gamer-moving');
    }
    setTimeout(() => {
        gamer.classList.remove('gamer-moving');
        rendersCore();
    }, 800);
}

function rendersCore() {
    scoreDefault ++;
    score.innerHTML = scoreDefault;
}

// Alive func
setInterval(() => {
    // Get current gamer Y position
    let gamerBottom = parseInt(window.getComputedStyle(gamer).getPropertyValue('bottom'));
    // Get current barrier X position
    let barrierLeft =  parseInt(window.getComputedStyle(barrier).getPropertyValue('left'));
    console.log(barrierLeft)
    if(barrierLeft <= 100  && gamerBottom < 200) {
        btnStart.innerHTML = 'game over';
        btnStart.style.display = 'inline-block';
        canvas.classList.remove('canvas-moving');
        barrier.classList.remove('barrier-moving');
    }
}, 100);
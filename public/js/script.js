const btnStart = document.getElementById('btn-start');
const canvas = document.getElementById('canvas');
const gamer = document.getElementById('gamer');
const barrier = document.getElementById('barrier');
const core = document.querySelector('#core span');
let coreDefault =  0;

// Event 
btnStart.addEventListener('click', () => {
    coreDefault = 0;
    core.innerHTML = coreDefault;
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
        renderCore();
    }, 800);
}

function renderCore() {
    coreDefault ++;
    core.innerHTML = coreDefault;
}

// Alive func
setInterval(() => {
    // Get current gamer Y position
    let gamerBottom = parseInt(window.getComputedStyle(gamer).getPropertyValue('bottom'));
    // Get current barrier X position
    let barrierRight =  parseInt(window.getComputedStyle(barrier).getPropertyValue('right'));

    if(barrierRight > 1350  && gamerBottom < 200) {
        btnStart.innerHTML = 'game over';
        btnStart.style.display = 'inline-block';
        canvas.classList.remove('canvas-moving');
        barrier.classList.remove('barrier-moving');
    }
}, 100);
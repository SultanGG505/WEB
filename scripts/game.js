const game = document.querySelector('#game');
const square = document.querySelector('#square');
let squareLeft = 175;
let squareTop = 275;
let gameRunning = true;

function moveSquare(event) {
    if (event.key === 'ArrowLeft') {
        squareLeft -= 10;
    } else if (event.key === 'ArrowRight') {
        squareLeft += 10;
    } else if (event.key === 'ArrowUp') {
        squareTop -= 10;
    } else if (event.key === 'ArrowDown') {
        squareTop += 10;
    }
    checkCollision();
    updateSquarePosition();
}

function checkCollision() {
    const obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach((obstacle) => {
        if (squareLeft < obstacle.offsetLeft + obstacle.offsetWidth &&
            squareLeft + square.offsetWidth > obstacle.offsetLeft &&
            squareTop < obstacle.offsetTop + obstacle.offsetHeight &&
            squareTop + square.offsetHeight > obstacle.offsetTop) {
            gameRunning = false;
            alert('Вы проиграли!');
        }
    });
}

function updateSquarePosition() {
    if (gameRunning) {
        square.style.left = squareLeft + 'px';
        square.style.top = squareTop + 'px';
    }
}

function generateObstacle() {
    if (gameRunning) {
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        obstacle.style.left = Math.floor(Math.random() * 350) + 'px';
        obstacle.style.top = '-50px';
        game.appendChild(obstacle);
        moveObstacle(obstacle);
    }
}

function moveObstacle(obstacle) {
    let obstacleTop = -50;
    const obstacleInterval = setInterval(() => {
        if (gameRunning) {
            obstacleTop += 10;
            obstacle.style.top = obstacleTop + 'px';
            if (obstacleTop > 600) {
                clearInterval(obstacleInterval);
                game.removeChild(obstacle);
            }
        }
    }, 50);
}

document.addEventListener('keydown', moveSquare);

setInterval(generateObstacle, 1000);
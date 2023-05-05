const gameButton = document.getElementById('game_butt');
gameButton.addEventListener('click', startGame);

function startGame() {
    const gameContainer = document.createElement('div');
    gameContainer.id = 'game-container';
    document.body.appendChild(gameContainer);

    const game = document.createElement('div');
    game.id = 'game';
    gameContainer.appendChild(game);

    const square = document.createElement('div');
    square.id = 'square';
    game.appendChild(square);

    const script = document.createElement('script');
    script.src = 'game.js';
    gameContainer.appendChild(script);

    gameButton.style.display = 'none';
}

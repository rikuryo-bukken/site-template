const iframeElementForGame = document.getElementById("game_frame");

document.getElementById("fullscreen_game").addEventListener('click', event => {
    iframeElementForGame.requestFullscreen();
});

iframeElementForGame.addEventListener('fullscreenchange', event => {
    iframeElementForGame.contentWindow.location.reload();
});
start.addEventListener('mouseover',startGame);
//console.log(start.addEventListener('mouseover',startGame))
boundaries.forEach((boundary )=> {
    boundary.addEventListener('mouseover', loseGame);
});

end.addEventListener('mouseover', winGame); 
function startGame() {
    gameStarted = true;
    start.style.background='green';
    
}
function loseGame() {
    //console.log('lost the game')
    if (gameStarted) {
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = 'red';
            gameStarted=false;
        });
        //alert('you lost');
        
    }
}
function winGame() {
    if (gameStarted) {
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = 'green';
            gameStarted=false;
        });
        
    }
}
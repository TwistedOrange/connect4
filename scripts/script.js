console.log('hi js');


function selectToken(token) {
  token == 'token1' ? console.log('selected green token') : console.log('selected purple token');

}

/*
Manages the game data: score, player name, current player, player's token
*/
const manageData = {
  currentPlayer: 1,
  tokens: [ 'green', 'purple'],
  currentToken: 0,       // tokens[0],
  gameWon: false,
  score: [ 0, 0 ],
  playerNames: ['player1', 'player2'],

  resetGame: function () {
    // clears all game data for new game
    this.currentPlayer = 1;
    this.currentToken = token[0];
    gameWon = false;
    score = Array(2).fill(0);
    $('#board').html();
  }
};

const managePlayer = {
  savePlayerName: function(pname) {
    console.log('savePlayerName() for player: ' + pname);
  }
};

const manageBoard = {

};

const manageUI = {

};

/*
// Initiate events to listen for various actions when on each page load
*/
window.onload = function() {
  // $('#colMarker').
}

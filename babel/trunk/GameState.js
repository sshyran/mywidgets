/**
 * GameState object
 */

// CONSTRUCTOR
// GameState(board)
function GameState(board) {
	
	if (board instanceof Board) {
		this.board = board.copy();
	}
	
	this.players = [];
	
	this.bag = new Bag();
}


GameState.prototype = {
	// PUBLIC PROPERTIES
	board: null,
	players: null,
	bag: null,
	lastPlay: null,
	previousState: null,
	nextState: null,
	currentPlayer: 0,
	firstPasser: null,
	
	
	// PUBLIC METHODS
	copy: function() {
		var ret = new GameState(this.board);
		for (var i in this.players) {
			ret.players[i] = this.players[i].copy();
		}
		ret.bag = this.bag.copy();
		ret.currentPlayer = this.currentPlayer;
		ret.firstPasser = this.firstPasser;
		
		// don't copy over "lastPlay"
		
		return ret;
	},
	
	eraseFuture: function() {
		/*
		state = this;
		while (state = state.nextState) {
			state
		}
		*/
		// If automatic garbage collection is amazing, this should be all we need to do...
		this.nextState = null;
	},
	
	stepForward: function(redo) {
		if (!redo) {
			this.eraseFuture();
		}
		if (!this.nextState) {
			this.nextState = this.copy();
			this.nextState.previousState = this;
		}
		return this.nextState;
	},
	
	stepBackward: function() {
		assert(this.previousState, 'Tried to go back to a negative gameState');
		return this.previousState;
	},
	
	toString: function() {
		var ret = [], show = { board: "Board", players: "Players", bag: "Bag" };
		for (var i in show) {
			ret.push(show[i] + ":\n" + this[i]);
		}
		return ret.join("\n");
	},
	
	unserialize: function() {
	
	},
	
	/**
	 * serialize()
	 * Returns a string suitable for saving a gameState to a file/registry
	 * String is in the following format:
	 * {board}{[player][player]...}{}
	 */
	serialize: function() {
		// serialize does not save lastPlay or previous/nextStates.
		var ret = '{' + this.board.serialize() + '}{';
	}
	
	
};

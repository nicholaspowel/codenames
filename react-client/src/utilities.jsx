
var Utilities = {

	randomize(array, callback){
		//takes in an array of values and returns a randomized array
		callback === undefined ? callback = (item)=>{return item;}: callback = callback;
		for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // console.log('shuffled', array);
    array.forEach(callback);
    // console.log('calledback', array);
    return array;
	},

	GET(req, res){
    //retrieve a board from the database
	},

	POST(req, res){
    //save a board to the database
	},

	generate(theme){
		if(theme === 'CAH' || theme === 'Cards Against Humanity'){
      //create theme by calling the randomize function on the CAH white card array
    }
    else{
    //initiates a get request to WordNik, returns an array
    }
  },

	lockBoard(){
		// switches the board to be uneditable and saves
    // called when a post is made
	},

  tileClick(tile){
    console.log(tile);
    //changes the tile to reveal color/team image when not in spymaster mode
    if(tile.color === 'blue'){
      console.log('blue');
    }
    else if(tile.color === 'red'){
      console.log('red');
    }

    else if(tile.color === 'yellow'){
      console.log('yellow');
    }
    else if(tile.color === 'black'){
      console.log('black');
    }
  }

};

export default Utilities;
// functions
// request from database
// 	retrieve boards 
// 	retrieve board state
// post to database
// 	save boards 
// 	save board state
// request from webnix
// lockBoard
// 

// random place on board
//--variables--
// color array
// var tile = {
//	word: '',
// 	color: ''
//}
// word array

// store word to word array

// disable modification

// <pre><code>{JSON.stringify(JSON-DATA, null, 4)}</code></pre>

// display colors(spymaster)(toggle)

// board array(array of objects, ish?)

//####Cards Against Humanity cards
//https://www.crhallberg.com/cah/json/
//https://github.com/amaldare93/cards-for-humanity
//https://github.com/vdel26/cah-node-api



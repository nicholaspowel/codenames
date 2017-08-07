
var Utilities = {

	this.randomize = (array, callback)=>{
		var newArray = [];
		//takes in an array of values and returns a randomized array
		callback === undefined ? callback= (item)=>{return item;}: callback = callback;
		for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log('shuffled', array);
    array.forEach(callback(item));
    console.log('calledback', array);
    return array;
	}

	GET(req, res){

	}

	POST(req, res){

	}

	generate(theme){
		//initiates a get request to WordNik, returns an array
	}

	lockBoard(){
		// switches the board to be uneditable and saves
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


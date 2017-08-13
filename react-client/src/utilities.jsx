import $ from 'jquery';
import cardList from './data/CardsAgainstHumanity.js';
import API_KEY from './config/wordNik';

var whiteCards = cardList.cards.whiteCards;

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
      console.log('will make a list from CAH');
      var data = Utilities.randomCAH(whiteCards);
        data = this.colorize(data);
        this.setState({
          board: data,
        })
      //create theme by calling the randomize function on the CAH white card array
    }
    else{
      console.log('theme', theme);
      $.ajax({
      url: `http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&excludePartOfSpeech=proper-noun&minCorpusCount=700&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=12&limit=25&api_key=${API_KEY}`, 
      success: (data) => {
        console.log('data', data);
        data = Utilities.randomize(data);
        data = this.colorize(data);
        this.setState({
          board: data,
        })
      },
      error: (err) => {
        console.log('err', err);
        var data = Utilities.randomCAH(whiteCards);
        data = this.colorize(data);
        this.setState({
          board: data,
        })
      }
    })
    //initiates a get request to WordNik, returns an array
    }
  },

	saveBoard(array, callback){
		// switches the board to be uneditable and saves
    // called when a post is made
	},

  tileClick(tile){
    console.log(tile);
    //changes the tile to reveal color/team image when not in spymaster mode
    if(tile.color === 'blue'){
      console.log('blue');
      console.log(this);
      tile.isClicked = 1;
      return tile;
    }
    else if(tile.color === 'red'){
      console.log('red');
      console.log(this);
      tile.isClicked = 1;
      return tile;
    }

    else if(tile.color === 'yellow'){
      console.log('yellow');
      console.log(this);
      tile.isClicked = 1;
      return tile;
    
    }
    else if(tile.color === 'black'){
      console.log('black');
      console.log(this);
      tile.isClicked = 1;
      return tile;
    }
  }, 

  spyMaster(){
    console.log('spyMaster has been clicked');
    var newBoard = this.state.board.slice();
    newBoard.forEach((obj)=>{
      obj.display = 1;
    });
    this.setState({
      board: newBoard,
    });
    //runs tileClick on all tiles, or otherwise sets every tile to show items color
  },

  randomCAH(array, callback){
    //takes in an array of values and returns an array of 25 random values
    var results = [];
    var arr1=array.slice(0);
    callback === undefined ? callback = (item)=>{return item;}: callback = callback;
    for(var i =0; i < 25; i++) {
      var j = Math.floor(Math.random() * (arr1.length + 1));
      var content = arr1.splice(j, 1);
      results.push({"word": content, "id": i});
    }
    // console.log('shuffled', array);
    array.forEach(callback);
    // console.log('calledback', array);
    return results;
  },

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
// .whiteCards[i] gives access to ith white card text


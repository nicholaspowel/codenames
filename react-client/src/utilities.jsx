import $ from 'jquery';
import cardList from './data/CardsAgainstHumanity.js';
import API_KEY from './config/wordNik';
var axios = require('axios');

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

	retrieveBoard(boardID){
    console.log('frontend retrieve', boardID)//retrieve a board from the database
    var that = this;
    axios.get('/boards', {
      params: {boardId: boardID}
    })
    .then(function(response){
      console.log('loadBoard', response.data);
      that.setState({
        board: response.data[0].board,
        boardID: response.data[0].boardId,
        theme: response.data[0].theme
      });
    });
	},

  handleThemeChange(event){
    this.setState({
        theme: event,
      })
  },

  setDisplay(array){
    array.forEach((obj)=>{ obj.display = 0});
    return array;
  },

	generate(theme){
		if(theme === 'CAH' || theme === 'Cards Against Humanity'){
      var data = Utilities.randomCAH(whiteCards);
        data = this.colorize(data);
        this.setState({
          board: data,
          theme: theme,
          boardID: 'NA'
        })
      //create theme by calling the randomize function on the CAH white card array
    }
    else{
      $.ajax({
      url: `http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&excludePartOfSpeech=proper-noun&minCorpusCount=700&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=12&limit=25&api_key=${API_KEY}`, 
      success: (data) => {
        data = Utilities.randomize(data);
        data = this.colorize(data);
        this.setState({
          board: data,
          theme: theme,
          boardID: 'NA'
        })
      },
      error: (err) => {
        console.log('err', err);
        var data = Utilities.randomCAH(whiteCards);
        data = this.colorize(data);
        data = Utilities.setDisplay;
        this.setState({
          board: data,
          theme: theme,
          boardID: 'NA'
        })
      }
    })
    //initiates a get request to WordNik, returns an array
    }
  },

	saveBoard(theme){
		console.log('saving the state', this.state, theme);
    var saveBoard = this.state.board;
    saveBoard.forEach((obj)=>{
      obj.display = 0;
    });
    var that = this;
    console.log('axios', saveBoard);
    axios.post('/boards', {
      board: saveBoard,
      theme: theme
    })
    .then(function(response){
      console.log('saveboard', response.data);
      that.setState({
        boardID: response.data.boardId
      });
    });
    // switches the board to be uneditable and saves
    //makes a post
	},

  tileClick(tile){
    //changes the tile to reveal color/team image when not in spymaster mode
    if(tile.color === 'blue'){
      tile.isClicked = 1;
      return tile;
    }
    else if(tile.color === 'red'){
      tile.isClicked = 1;
      return tile;
    }

    else if(tile.color === 'yellow'){
      tile.isClicked = 1;
      return tile;
    
    }
    else if(tile.color === 'black'){
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


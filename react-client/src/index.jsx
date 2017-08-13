import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Swagger from 'swagger-client';
import Options from './components/Options.jsx';
// import wordRequest from './lib/wordRequest.js';
import API_KEY from './config/wordNik';
import axios from 'axios';
import Utilities from './utilities.jsx';
import cardList from './data/CardsAgainstHumanity.js';
var whiteCards = cardList.cards.whiteCards;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: []
    },
    Utilities.randomCAH = Utilities.randomCAH.bind(this),
    Utilities.generate = Utilities.generate.bind(this),
    Utilities.tileClick = Utilities.tileClick.bind(this),
    Utilities.spyMaster = Utilities.spyMaster.bind(this),
    Utilities.saveBoard = Utilities.saveBoard.bind(this)
  } 

  colorize(array){
    var colors=['blue0','blue1','blue2','blue3','blue4','blue5','blue6','blue7','blue8','red0','red1','red2','red3','red4','red5','red6','red7','yellow0','yellow1','yellow2','yellow3','yellow4','yellow5','yellow6','black'];
    var colOrder = Utilities.randomize(colors);
    for (var i = 0; i < array.length; i++) {
      array[i].color=colOrder[i];
    }
    return array;
  }

  componentDidMount() {
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
    });
  }

  render () {
    return (<div>
      <h1>Code Names Against Humanity</h1>
      <Options Utilities = {Utilities}/>
      <List board={this.state.board} Utilities = {Utilities}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
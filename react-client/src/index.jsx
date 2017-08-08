import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Swagger from 'swagger-client';
import Options from './components/Options.jsx';
// import API_KEY from './lib/wordRequest.js';
import API_KEY from './config/wordNik';
// import axios from 'axios';
import Utilities from './utilities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }
  
  randomize(array, callback){
    var newArray = [];
    //takes in an array of values and returns a randomized array
    callback === undefined ? callback= (item)=>{return item;}: callback = callback;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    array.forEach(callback);
    return array;
  }

  colorize(array){
    var colors=['blue','blue','blue','blue','blue','blue','blue','blue','blue','red','red','red','red','red','red','red','red','yellow','yellow','yellow','yellow','yellow','yellow','yellow','black'];
    var colOrder = Utilities.randomize(colors);
    for (var i = 0; i < array.length; i++) {
      array[i].color=colOrder[i];
    }
    console.log('colors', array);
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
          items: data,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Code Names Against Humanity</h1>
      <Options/>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
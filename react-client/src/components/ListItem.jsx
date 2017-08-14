import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.tile.color,
      display: this.props.tile.display,
      displayCustom: {display: 'none'}
    }
  }
  

  toggleTyping(){
    if( this.state.displayCustom.display==='none'){
      this.setState({
        displayCustom: {display: 'table-row'}
        });
    } else {
        this.setState({
          displayCustom: {display: 'none'}
        });
    }
  }

  toggleTile(){
    console.log('i was clicked');
    this.setState({
      display: 1
    });
    this.props.tile.display = 1;
  }

  render() {
    var displayObj= {
      display: 'table-row'
    };
    var styleObj = {
      background: 'black',
    };
    var tileClass = 'tile';

    if(this.props.tile.display){
      tileClass = 'revealed tile ' + this.props.tile.color;
    }
      return(
        <div className={tileClass} >
          <div className='word' onClick={this.toggleTile.bind(this)}>
            { this.props.tile.word }
          </div>
          <button className="editText btn hidden-sm-down" style={{zIndex: 2}}onClick={this.toggleTyping.bind(this)}>
            <span className="glyphicon glyphicon-pencil"></span>
          </button>
          <div className='customWord' style={this.state.displayCustom}>
            <input className="customWordForm form-control" type="text" onChange={(e) => this.props.tile.word = e.target.value} />
          </div>
        </div>      
    	)}
  }

  export default ListItem;
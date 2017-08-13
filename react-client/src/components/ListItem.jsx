import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.tile.color
    }
  }
  

  toggleType(){
    if( displayObj.display==='none'){
      displayObj.display = 'table-row';
    } else {
      displayObj.display = 'none';
    }
  }

  toggleTile(){
    console.log('i was clicked', this)
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
      tileClass = 'tile ' + this.props.tile.color;
    }
      return(
        <div className={tileClass} onClick={(e) => this.toggleTile.bind(this)}>
          <div className='word'>
            { this.props.tile.word }
          </div>
          <button className="editText btn hidden-sm-down" style={{zIndex: 2}}onClick={(e)=> this.toggleType.bind(this)}>
            <span className="glyphicon glyphicon-pencil"></span>
          </button>
          <div className='customWord' style={displayObj}>
            <input className="customWordForm form-control" type="text" onChange={(e) => this.props.tile.word = e.target.value} />
          </div>
        </div>      
    	)}
  }

  export default ListItem;
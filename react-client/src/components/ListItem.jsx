import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    }
  }
  

render(){

  const styleObj = {
    background: "black",
  }
  if(this.props.tile.isClicked){
    styleObj.background = this.props.color;
  }
    return(
      <div className='tile' style={styleObj} onClick={(e) => this.props.Utilities.tileClick(this.props.tile)}>
        <div className='word'>
          { this.props.tile.word }
        </div>
      </div>      
  	)}
}

export default ListItem;
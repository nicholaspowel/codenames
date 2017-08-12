import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    }
  }
  

  toggleType(){
    if( displayObj.display==='none'){
      displayObj.display = 'flex';
    } else {
      displayObj.display = 'none';
    }
  }

  render() {
    var displayObj= {
      display: "none"
    };
    var styleObj = {
      background: "black",
    };
    var classObj = 'tile';

    if(this.props.tile.display){
      classObj = 'tile ' + this.props.tile.color;
    }
      return(
        <div className={classObj} style={styleObj} onClick={(e) => this.props.Utilities.tileClick(this.props.tile)}>
          <div className='word'>
            { this.props.tile.word }
          </div>
          <button className="btn hidden-sm-down" style={{zIndex: 2}}onClick={(e)=> this.toggleType.bind(this)}>
            <span className="glyphicon glyphicon-search"></span>
          </button>
          <div className='customWord'>
            <input className="form-control" style={displayObj} type="text" onChange={(e) => props.handleInputChange(e.target.value)} />
          </div>
        </div>      
    	)}
  }

  export default ListItem;
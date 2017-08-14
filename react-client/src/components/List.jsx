import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
	
  render(){ 
    console.log('board', this.props.board);
		return(
		  <div>
		  	<h4> Board: {this.props.boardID}</h4>
		  	<div id='Board'>
		    	{ this.props.board.map((tile, index) => <ListItem Utilities={this.props.Utilities} tile={tile} key={index}/>)}
		  	</div>
		  </div>
		)
	}
}
export default List;
import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
  	<h4> Board </h4>
  	<div id='Board'>
    	{ props.board.map((tile, index) => <ListItem Utilities={props.Utilities} tile={tile} key={index}/>)}
  	</div>
  </div>
)

export default List;
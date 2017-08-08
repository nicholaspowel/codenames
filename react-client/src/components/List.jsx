import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div id='Board'>
    <h4> Board </h4>
    { props.board.map(tile => <ListItem Utilities={props.Utilities} tile={tile} key={tile.id}/>)}
  </div>
)

export default List;
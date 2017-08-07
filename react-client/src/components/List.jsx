import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div id='Board'>
    <h4> Board </h4>
    { props.items.map(item => <ListItem item={item} key={item.id}/>)}
  </div>
)

export default List;
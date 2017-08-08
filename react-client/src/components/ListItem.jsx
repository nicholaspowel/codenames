import React from 'react';

const ListItem = (props) => (
  <div className='tile' onClick={(e) => props.tileClick(e.target.value)}>
  	<div className='word'>
    { props.item.word }
    </div>
  </div>
)

export default ListItem;
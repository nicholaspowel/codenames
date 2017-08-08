import React from 'react';

const ListItem = (props) => (
  <div class='tile' onClilck={(e) => props.tileClick(e.target.value)}>
  	<div className='word'>
    { props.item.word }
    </div>
  </div>
)

export default ListItem;
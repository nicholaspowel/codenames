import React from 'react';

const ListItem = (props) => (
  <div className='tile' onClick={(e) => props.Utilities.tileClick(props.tile)}>
  	<div className='word'>
    { props.tile.word }
    </div>
  </div>
)

export default ListItem;
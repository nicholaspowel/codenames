import React from 'react';

const ListItem = (props) => (
  <div class='tile'>
  	<div className='word'>
    { props.item.word }
    </div>
  </div>
)

export default ListItem;
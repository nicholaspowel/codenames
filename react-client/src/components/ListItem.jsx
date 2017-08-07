import React from 'react';

const ListItem = (props) => (
  <div class='tile'>
  	<div>
    { props.item.word }
    </div>
  </div>
)

export default ListItem;
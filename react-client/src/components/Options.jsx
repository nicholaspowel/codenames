import React from 'react';

const Options = (props) => (
  <div id='Options'>
    <h4> Options </h4>
    <div></div>
    <input className="form-control" type="text" onChange={(e) => props.handleInputChange(e.target.value)} />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search">Search</span>
    </button>
    <div className="viewMode">
      <button className="btn hidden-sm-down">
      	 <span className="Spy">Spymaster</span>
      </button>
    </div>
  </div>
)

export default Options;
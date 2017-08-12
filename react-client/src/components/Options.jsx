import React from 'react';

const Options = (props) => (
  <div id='Options'>
    <h4> Options </h4>
    <div className="boardSearch">
      <input className="form-control" type="text" onChange={(e) => props.handleInputChange(e.target.value)} />
    </div>
    <button className="btn hidden-sm-down" onClick={(e)=> props.handleClick('search')}>
      <span className="glyphicon glyphicon-search">Search</span>
    </button>
    <div className="boardGen">
      <input className="form-control" type="text" onChange={(e) => props.handleInputChange(e.target.value)} />
    </div>
    <div className="generate" onClick={(e)=> props.Utilities.generate()}>
      <button className="btn hidden-sm-down">
         <span className="spawn">Generate Board</span>
      </button>
    </div>
    <div className="viewMode" onClick={(e)=> props.Utilities.spyMaster()}>
      <button className="btn hidden-sm-down">
      	 <span className="Spy">Spymaster</span>
      </button>
    </div>
  </div>
)

export default Options;
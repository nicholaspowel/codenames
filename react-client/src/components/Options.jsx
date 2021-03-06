import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBoardID: ''
    }
  }

  handleBoardID(event){
    this.setState({
        newBoardID: event,
      })
  }

  render(){
    return(
      <div id='Options'>
        <h4> Options: </h4>
        <div className="boardSearch">
          <input className="form-control" type="text" onChange={(e) => this.handleBoardID(e.target.value)} />
        </div>
        <button className="btn hidden-sm-down" onClick={(e)=> this.props.Utilities.retrieveBoard(this.state.newBoardID)}>
          <span className="glyphicon glyphicon-search">Load</span>
        </button>
        <div className="boardGen">
          <input className="form-control" type="text" onChange={(e) => this.props.Utilities.handleThemeChange.call(this, e.target.value)} />
        </div>
        <div className="generate" value={this.state.theme} onClick={(e)=> this.props.Utilities.generate(this.props.theme)}>
          <button className="btn hidden-sm-down">
             <span className="spawn">Generate Board</span>
          </button>
        </div>
        <div className="saveBoard" onClick={(e)=> this.props.Utilities.saveBoard(this.props.theme)}>
          <button className="btn hidden-sm-down">
             <span className="spawn">Save Board</span>
          </button>
        </div>

        <div className="viewMode" onClick={(e)=> this.props.Utilities.spyMaster()}>
          <button className="btn hidden-sm-down">
          	 <span className="Spy">Spymaster</span>
          </button>
        </div>
      </div>
    )
  }
}
export default Options;
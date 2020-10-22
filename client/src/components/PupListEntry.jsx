//TODO
/*
  <div className="pupEntry">
    <h2>Name: "FILL_ME_IN"</h2>
    <img src="FILL_ME_IN" />
  </div>
*/
import React from 'react';

class PupEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pupName: ''
    }
  }

  setName(e) {
    this.setState({pupName: e.target.value});
  }

  render() {
    return (
    <div className="pupEntry">
      <form>
        <input type="text" class="input" onChange={
          (e) => this.setState({pupName: e.target.value})
          }
        />
      </form>
      <h2>Name: {this.state.pupName || 'Name this pup!'}</h2>
      <img src={this.props.pupImg} />
    </div>
    )
  }
}

export default PupEntry;
//TODO
/*
<div>
  <h1>Name That Pup!</h1>
  <<PupList goes here>>
</div>
*/
import React from 'react';
import ReactDOM from 'react-dom'
import PupList from './PupList.jsx'
import examplePupData from '../../../data/examplePupData.js';
import getPups from '../../../lib/getPups.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pupArray: examplePupData.message
    }
    this.getNewPups = this.getNewPups.bind(this);
  }

  getNewPups() {
    getPups((data) => {
      this.setState({pupArray: data.data.message})});
  }

  componentDidMount() {
    this.getNewPups();
  }

  render() {
  return (
    <div>
      <h1 class="title">Name That Pup!</h1>
      <PupList pupArray={this.state.pupArray}/>
    </div>
  )
  }
}

export default App;
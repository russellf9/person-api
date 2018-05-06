import React from 'react';
import Person from './person/person'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { person: ''};
  }

  componentWillMount() {
    const URL = 'https://randomuser.me/api/?seed=foobar';
    const setPerson = (data) => { this.setState({ person: data })}

    fetch(URL)
      .then(response => { return response.json()})
      .then(data => {       
        setPerson(data.results[0]);
      })
  }

   render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Person API</h1>
        </header>
        <div className="App-intro">
          <Person person={this.state.person}/>
        </div>
      </div>
    );
  }
}

export default App;

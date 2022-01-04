import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
 import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      term: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }


  render() {

    const {monsters, term} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(term.toLowerCase())
    )

    return (
      <div className="ui container">
        <h2 className="">
          <i className="search icon"></i>
           Searching Robots
        </h2>
        <SearchBox
          term={term}
          handleChange={e => this.setState({term: e.target.value})}
        />
        <div className="ui hidden divider"></div>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

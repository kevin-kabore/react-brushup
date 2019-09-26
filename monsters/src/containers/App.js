import React , { Component }from 'react';
import './App.css';
import { CardList } from '../components/card-list/CardList';
import { SearchBox } from '../components/search-box/SearchBox';



class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value }, () => console.log(this.state));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeholder="Search monsters" handleChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
    )}
}

export default App;

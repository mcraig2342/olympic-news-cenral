import { React, Component } from 'react';
import './App.css';
import { fetchAllArticles } from '../../api-calls.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
    articles: [],
    selectedArticle: {},
    error: '',
    }
  }

  componentDidMount = () => {

  }



  render() {
    return (

    )
  }
}

export default App;

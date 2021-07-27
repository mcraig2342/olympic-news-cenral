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
    this.fetchArticles();
  }

  fetchArticles = async () => {
    const response = await fetchAllArticles();
    const articles = await response.json()
    await this.setState({articles: articles.results})
  }

  viewDetails = async (event) => {
    let selectedId = event.target.id
    let selectedArticle = this.state.articles.find(article =>
      article.uri === selectedId)
    await this.setState({selectedArticle: selectedArticle})

  }

  render() {
    return (

    )
  }
}

export default App;

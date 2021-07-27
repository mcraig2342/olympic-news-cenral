import { React, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleArea from '../ArticleArea/ArticleArea.js';
import ExpandedDetails from '../ExpandedDetails/ExpandedDetails.js'
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

  viewDetails = (event) => {
    let selectedId = event.target.id
    let selectedArticle = this.state.articles.find(article =>
      article.uri === selectedId)
    this.setState({selectedArticle: selectedArticle})

  }

  render() {
    return (
      <Switch>
<Route exact path ='/'
  render={() => (

    !this.state.articles.length && !this.state.error ?
    <div className='loading'>
    <h1>LOADING</h1>
    </div>

    : this.state.error ?
     <h1>Sorry, no articles found</h1>

    : !this.state.error &&
    <ArticleArea
      allArticles={this.state.articles}
      viewDetails={this.viewDetails}
      />
  )}
/>
<Route path={`/nyt:id`}
  render={() => (
    <ExpandedDetails
    selectedArticle={this.state.selectedArticle}
    />
  )}
/>
</Switch>

    )
  }
}

export default App;

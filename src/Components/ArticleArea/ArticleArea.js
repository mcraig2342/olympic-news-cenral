import ArticleCard from '../ArticleCard/ArticleCard.js'
import './ArticleArea.css'
import { React, useState, useEffect } from 'react'



const ArticleArea = ({ allArticles, viewDetails }) => {

  const [searchBar, setSearchBar] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(allArticles);

  const handleKeyPress = (event) => {
    setSearchBar(event.target.value);
  }

  useEffect(() => {
    const filteredArticles = allArticles.filter(article => article.title.includes(searchBar))
    setFilteredArticles(filteredArticles)
  }, [searchBar]);

  const renderArticles = (articles) => {
      return articles?.map(article => {
        return (
          <ArticleCard
            id={article.uri}
            key={article.uri}
            title={article.title}
            image_url={article.multimedia[0].url}
            image_caption={article.multimedia[0].caption}
            byline={article.byline}
            abstract={article.abstract}
          />
        )
      })
    }

  return (
    <div>
      <input className='input' type='text' onKeyUp={handleKeyPress}></input>
      <section onClick={viewDetails} className='articleContainer'>
          {renderArticles(filteredArticles)}
      </section>
  );
}

export default ArticleArea;

import ArticleCard from '../ArticleCard/ArticleCard.js'
import './ArticleArea.css'
import { React } from 'react'



const ArticleArea = ({ allArticles, viewDetails }) => {

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
    <div onClick={viewDetails} className='articleContainer'>
        {renderArticles(allArticles)}
    </div>
  );
}

export default ArticleArea;

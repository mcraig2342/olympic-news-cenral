import ArticleCard from '../ArticleCard/ArticleCard.js'
import './ArticleArea.css'
import { React } from 'react'



const ArticleArea = ({ allArticles, viewDetails }) => {



  return (
    <div onClick={viewDetails} className='articleContainer'>

    </div>
  );
}

export default ArticleArea;

import { React } from 'react'
import { Link } from 'react-router-dom';
import './ArticleCard.css'

const ArticleCard = ({ id, title, image_url, image_caption, byline, abstract }) => {

    return (
      <article id={id} key={id} className='article-card'>
          <h1 id={id}>{title}</h1>
          <img id={id} className='image' src={image_url} alt={image_caption}/>
          <Link className='link' to={`/${id}`}>
          <h3 id={id}>{abstract}</h3>
          </Link>
          <p id={id}>{byline}</p>
      </article>
    );
}

export default ArticleCard;

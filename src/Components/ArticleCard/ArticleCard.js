import { React } from 'react'
import { Link } from 'react-router-dom';
import './ArticleCard.css'

const ArticleCard = ({ id, title, image_url, image_caption, byline, abstract }) => {

    return (
      <article id={id} key={id} className='articleCard'>
       <Link className='link' to={`/${id}`}>
          <img id={id} className='image' src={image_url} alt={image_caption}/>
          <h1 className='title' id={id}>{title}</h1>
       </Link>
          <p id={id}>{byline}</p>
      </article>
    );
}

export default ArticleCard;

import { React } from 'react'
import { NavLink } from 'react-router-dom';
import './ArticleCard.css'

const ArticleCard = ({ id, title, image_url, image_caption, byline, abstract }) => {

    return (
      <article id={id} key={id} className='articleCard'>
       <NavLink style={{ textDecoration: 'none' }} className='link' to={`/${id}`}>
          <img id={id} className='image' src={image_url} alt={image_caption}/>
          <h1 className='title' id={id}>{title}</h1>
       </NavLink>
          <p id={id}>{byline}</p>
      </article>
    );
}

export default ArticleCard;

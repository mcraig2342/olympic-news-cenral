import { React } from 'react'
import { NavLink } from 'react-router-dom';
import './ExpandedDetails.css'

const ExpandedDetails = ({ selectedArticle }) => {

    return (
      <article className='details' id={selectedArticle.uri} key={selectedArticle.uri} className='article-expanded'>
        <NavLink className='link' to={`/`}>
          <button className='back'>Back</button>
        </NavLink>
        <a className='link' target='_blank' href={selectedArticle.url}>Link to the NYT article</a>
          <h1 className='title'>{selectedArticle.title}</h1>
          <img className='detailImage' src={selectedArticle.multimedia[0].url} alt={selectedArticle.multimedia[0].caption}/>
          <div className='abstractContainer'>
            <p className='abstract'>{selectedArticle.abstract}</p>
          </div>
          <p className='byline'>{selectedArticle.byline}</p>
      </article>
    );
}

export default ExpandedDetails;

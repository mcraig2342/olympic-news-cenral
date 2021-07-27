import { React } from 'react'
import './ExpandedDetails.css'

const ExpandedDetails = ({ selectedArticle }) => {

    return (
      <article id={selectedArticle.uri} key={selectedArticle.uri} className='article-expanded'>
          <h1>{selectedArticle.title}</h1>
          <img className='image' src={selectedArticle.multimedia[0].url} alt={selectedArticle.multimedia[0].caption}/>
          <h3>{selectedArticle.abstract}</h3>
          <p>{selectedArticle.byline}</p>
      </article>
    );
}

export default ExpandedDetails;

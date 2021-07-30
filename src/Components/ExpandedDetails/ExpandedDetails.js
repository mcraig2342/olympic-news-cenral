import { React } from 'react'
import './ExpandedDetails.css'

const ExpandedDetails = ({ selectedArticle }) => {

    return (
      <article id={selectedArticle.uri} key={selectedArticle.uri} className='article-expanded'>
          <h1>{selectedArticle.title}</h1>
          <img className='image' src={selectedArticle.multimedia[0].url} alt={selectedArticle.multimedia[0].caption}/>
          <h3>{selectedArticle.abstract}</h3>
          <p>{selectedArticle.byline}</p>
          <a target='_blank' href={selectedArticle.url}>Link to the NYT article</a>
      </article>
    );
}

export default ExpandedDetails;

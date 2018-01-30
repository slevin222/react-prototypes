import React from 'react';
import './scrapbook.css';
import ScrapbookImage from './scrapbook_images'
import imageData from './image_data';



export default props => {
    return(
        <div className="scrapbook-container">
            <ScrapbookImage about={imageData[0]}/>
        </div>
    )
}

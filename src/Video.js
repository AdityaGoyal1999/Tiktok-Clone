import React from 'react';
import './Video.css';

function Video() {
    return (
        <div className="video">
            <iframe src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            
            <video 
                loop 
                width="800px"
                height="500px"
                className="video__player"  
                src="">
            </video>
            

            {/* VideoFooter */}
            {/* Video */}
        </div>
    )
}

export default Video

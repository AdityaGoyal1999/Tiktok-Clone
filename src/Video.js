import React from 'react';
import './Video.css';

function Video() {
    return (
        <div className="video">
            This is coming
            <br />
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

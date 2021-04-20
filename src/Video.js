import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ channel, description, song, likes, shares, messages }) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        // If video is playing, stop it
        if (playing) {
            videoRef.current.pause();
        }
        //  otherwise, stop it
        else{
            videoRef.current.play();
        }
        
    }

    return (
        <div className="video">
            <iframe src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            
            {/* <video 
                loop 
                width="800px"
                onClick = {handleVideoPress}
                ref = {videoRef}
                height="500px"
                className="video__player"  
                src="">
            </video> */}
            

            {/* VideoFooter */}

            {/* Video */}

            <VideoFooter 
                channel={ channel }
                description={ description }
                song={ song }
            />
            <VideoSidebar likes={ likes } shares={ shares } messages={ messages } />
        </div>
    )
}

export default Video

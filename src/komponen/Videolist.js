import React from 'react';
import Videoitem from './Videoitem'

const Videolist = props =>{
    const video = props.video.map((video)=>{
        return<Videoitem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video}/>

    })
    return(
    <div>{video}</div>
    )
}

export default Videolist
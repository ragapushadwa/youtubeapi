import React from 'react';
import './Videoitem.css';

const Videoitem = props =>{
    return(
    <div onClick={()=>props.onVideoSelect(props.video)}className='video-item item'>
        
        <img className='ui image' src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}/>
        <div className='content'>
        <div className='header'>{props.video.snippet.title}</div>
        </div>
        
        
    </div>
    )
}

export default Videoitem
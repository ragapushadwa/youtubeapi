import React from 'react';
import Searchbar from './Searchbar'
import youtube from '../api/youtube'
import Videolist from './Videolist';
import Videodetail from './Videodetail'

class App extends React.Component{
    state= {term:'',
            video:[],
            selectedVideo:null
            }
    
    componentDidMount(){
        this.onSubmitTerm('cars')
    }
    onValueChange(key, event) {
        this.setState({[key]: event.target.value})
     }
     onVideoSelect=(video)=>{
         this.setState({selectedVideo:video})

     }
    
     onSubmitTerm = async (term) => {
        console.log(term)
      const hasil= await youtube.get('/search',{
            params:{
                q:term
            }
        })
        this.setState({video:hasil.data.items,
            selectedVideo:hasil.data.items[0]});
     }
    render(){
        
        return (
            <div className='ui container'>
            Search Result of {this.state.term} Shown {this.state.video.length} Videos
            <Searchbar onFormSubmit={this.onSubmitTerm} value={this.state.term} onChange={this.onValueChange.bind(this, 'term')} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                    <Videodetail video={this.state.selectedVideo}/>
                    </div>
                     <div className='five wide column'>
                    <Videolist onVideoSelect={this.onVideoSelect} video={this.state.video}/>
                    </div>
          
                </div>
            </div>
            
            </div>
        )
    }
}

export default App
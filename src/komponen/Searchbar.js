import React from 'react';

class Searchbar extends React.Component{
    onFormSubmit=event=>{
        event.preventDefault()
        this.props.onFormSubmit(this.props.value)
    }
    render(){
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit}className='ui form'>
                    <div className='field'>
                        <label>Video Input</label>
                        <input 
                        type='text' 
                        value={this.props.value}
                        onChange={this.props.onChange}
                        />
                    </div>
                </form>
            </div>
        )
        
    }
}

export default Searchbar
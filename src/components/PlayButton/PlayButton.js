import React from 'react'
import './PlayButton.css'


class PlayButton extends React.Component{

buttonClick(){
    this.props.onPlayButton(true)  
}

render(){
    return(
        
        <div className='PlayButton'>  
            <button className='start__button' onClick= {this.buttonClick}>
                start
            </button>   
        </div>   
    )
}
}

export default PlayButton

import React from 'react';
import axios from 'axios';

class GetCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cards: ""
        };
        this.getCards = this.getCards.bind(this);
    }

    componentDidMount() {
        this.getCards()
    }

    getCards() {
        // Send the request
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
          // Extract the DATA from the received response
          .then(response => response.data)
          // Use this data to update the state
          .then(data => {
            this.setState({
              cards: data
            });
        });
    }
    
    render() {
        const { cards } = this.state
        return (
            <div className="GetCards">
                <DisplayCards cards={cards} />
            </div>
        )
    }
}


export default GetCards;
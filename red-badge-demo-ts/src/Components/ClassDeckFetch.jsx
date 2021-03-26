import React, { Component } from 'react';

class ClassDeckFetch extends Component {

    constructor(props) {
        super(props);
        this.state = {deckID: "", cardUrl: ""};
    };

    fetchDeck() {
        // What's the URL to fetch?
        const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

        // Store the data from the fetch.
        fetch(url)
        .then (res => res.json())
        .then (data => this.setState({ deckID: data.deck_id }))
    }

    fetchCard() {
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`;

        // Store the data from the fetch.
        fetch(url)
        .then (res => res.json())
        .then (data => this.setState( {cardUrl: data.cards[0].image}))
    }

    componentDidMount() {
        this.fetchDeck();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.deckID != this.state.deckID) {
            this.fetchCard();
        }
    }

    render() {

        return(
            <div>
                <h2>Hello from ClassDeckFetch</h2>
                <img src={this.state.cardUrl} />
            </div>
        );
    };
};

export default ClassDeckFetch;

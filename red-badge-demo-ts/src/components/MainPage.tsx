import * as React from 'react';
import { Component } from 'react';
import Dice from "./Dice";
import RollButton from "./Button";

export interface MainPageProps {
    
}
 
export interface MainPageState {
    headerText: string;
    diceRoll1: number;
    diceRoll2: number
}
 
class MainPage extends React.Component<MainPageProps, MainPageState> {
    constructor(props: MainPageProps) {
        super(props);
        this.state = { headerText: "", diceRoll1: 3, diceRoll2: 5 };
    }

    rollDice1 = (roll: number) => {
        this.setState({diceRoll1: roll})
    }

    rollDice2 = (roll: number) => {
        this.setState({diceRoll2: roll})
    }

    render() { 

        return (
            <div>
                <p>{this.state.headerText}</p>
                <br />
                <Dice playerName="Player 1" diceRoll={this.state.diceRoll1}/>
                <Dice playerName="Player 2" diceRoll={this.state.diceRoll2}/>
                <RollButton rollDice1={this.rollDice1} rollDice2={this.rollDice2}/>
            </div>
        );
    }
}
 
export default MainPage;
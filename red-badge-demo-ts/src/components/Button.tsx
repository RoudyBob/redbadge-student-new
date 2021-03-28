import * as React from 'react';

export interface RollButtonProps {
    rollDice1(rollNumber: number): void,
    rollDice2(rollNumber: number): void
}
 
const RollButton: React.SFC<RollButtonProps> = (props) => {

    function handleClick() {
        let randNum1: number = Math.floor((Math.random() * (6-1) + 1));
        let randNum2: number = Math.floor((Math.random() * (6-1) + 1)); 
        props.rollDice1(randNum1);
        props.rollDice2(randNum2);
    }

    return ( 
        <div>
            <br />
            <button onClick={handleClick}>Roulez</button>
        </div>
    );
}
 
export default RollButton;
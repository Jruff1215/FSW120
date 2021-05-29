import React from  './react'
import diceBox from './DiceBox'

class Randomizer extends React.Component{
    constructor() {
        super()
        this.state = {
            randomNum: Math.floor(Math.random(diceBox) * 6)
        }
    }
}


export default Randomizer 
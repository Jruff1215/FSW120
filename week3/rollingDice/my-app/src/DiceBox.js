import React from 'react'
import Die from './Die'


class diceBox extends React.Component {
    constructor() {
    super()
    this.state = {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0
        }
    }

    handleRoll() {
        let d1= [this.state.num1]
        let d2 = [this.state.num2]
        let d3 = [this.state.num3]
        let d4 = [this.state.num4]
        let d5 = [this.state.num5]
        d1 = Math.ceil(Math.random() * 6)
        d2 = Math.ceil(Math.random() * 6)
        d3 = Math.ceil(Math.random() * 6)
        d4 = Math.ceil(Math.random() * 6)
        d5 = Math.ceil(Math.random() * 6)
        this.setState(prevState=>{
            return {
                num1: d1,
                num2: d2,
                num3: d3,
                num4: d4,
                num5: d5
            }
        })
    }

    handleReset() {
        this.setState({
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
         })
    }

    render() {
        return (
            <div>
                <Die number = {this.state.num1} />
                <Die number = {this.state.num2} />
                <Die number = {this.state.num3} />
                <Die number = {this.state.num4} />
                <Die number = {this.state.num5} />
                <button onClick = {this.handleRoll}>Roll Dice</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>
        )
    }
}
export default diceBox



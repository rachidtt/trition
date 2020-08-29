import React, { Component } from 'react'
import Food from './Food'


class FoodSlide extends Component{

    constructor(){
        super()
        this.state = {
            breakfastChildren: [],
            lunchChildren: [],
            dinnerChildren: []

        }

        this.handleBreakfast = this.handleBreakfast.bind(this)
        this.handleLunch = this.handleLunch.bind(this)
        this.handleDinner = this.handleDinner.bind(this)
        
    }

    handleBreakfast(){
        this.props.addConsumed(500)

        this.setState(prevState => ({
            breakfastChildren: [...prevState.breakfastChildren, <Food/>]
          }))

    }

    handleLunch(){
        this.props.addConsumed(500)

        this.setState(prevState => ({
            lunchChildren: [...prevState.lunchChildren, <Food/>]
          }))

    }

    handleDinner(){
        this.props.addConsumed(500)

        this.setState(prevState => ({
            dinnerChildren: [...prevState.dinnerChildren, <Food/>]
          }))

    }


    render(){


        return(
            <div >
                <h2> Breakfast: </h2>
                {this.state.breakfastChildren}
                <button onClick= {this.handleBreakfast}>Add Food</button>
                <br/>
                <h2> Lunch: </h2>
                {this.state.lunchChildren}
                <button onClick= {this.handleLunch}>Add Food</button>
                <br/>
                <h2> Dinner: </h2>
                {this.state.dinnerChildren}
                <button onClick= {this.handleDinner}>Add Food</button>


            </div>
        )

    }

}

export default FoodSlide
import React, { Component } from 'react'
import Food from './Food'



class FoodSlide extends Component{

    constructor(){
        super()
        this.state = {
            breakfastChildren: [],
            lunchChildren: [],
            dinnerChildren: [],
            breakfastChildrenNumber: 0

        }

        this.handleBreakfast = this.handleBreakfast.bind(this)
        this.handleLunch = this.handleLunch.bind(this)
        this.handleDinner = this.handleDinner.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleBreakfast(event){
        event.preventDefault();//prevents page refresh

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


     handleRemove = (cal,id) => {
        this.props.addConsumed(-cal)

        this.setState(prevState => ({
            breakfastChildren: prevState.breakfastChildren.splice(id,0)

            
          }))

    }



    handleSubmit(event) {
        event.preventDefault();//prevent page refresh
        const data = new FormData(event.target);// then reference by form input's `name` tag


        this.setState(prevState => ({
            breakfastChildren: [
                                ...prevState.breakfastChildren,
                                 <Food 
                                    calories = {data.get('calories1')} 
                                    name={data.get('foodname1')} 
                                    id={this.state.breakfastChildrenNumber}
                                    rm = {this.handleRemove}/>]
          }))

          this.setState(prevState => ({
            breakfastChildrenNumber: prevState.breakfastChildrenNumber + 1
        }))

        

        this.props.addConsumed(parseInt(data.get('calories1')))
        document.getElementById('breakfastForm').reset()//Clears the form

    }



    render(){
        

        return(
            <div >
                <h2> Breakfast: </h2>

                <form id= "breakfastForm" onSubmit={this.handleSubmit}>
                    <input id="foodname1" name="foodname1" type="text" placeholder="Food Name"/>
                    <input id="calories1" name="calories1" type="text" placeholder="Calories"/>
                    <button>Add Food</button>
                </form>


                {this.state.breakfastChildren}

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
import React, { Component } from 'react'
import Food from './Food'
import FoodForm from './FoodForm'



class FoodSlide extends Component{

    constructor(){
        super()
        this.state = {
            breakfastChildren: [],
            lunchChildren: [],
            dinnerChildren: [],
            foodnNumber: 0,

        }
        this.handleSubmit = this.handleSubmit.bind(this)   
    }

     handleRemove = (cal,id, meal) => {
        this.props.addConsumed(-cal)

        if(meal === "breakfast"){
            let items = this.state.breakfastChildren
            let i = items.findIndex(item => item.id === id)
            items.splice(i,1)
            this.setState({
                breakfastChildren: items
             })
        }
        if(meal === "lunch"){
            let items = this.state.lunchChildren
            let i = items.findIndex(item => item.id === id)
            items.splice(i,1)
            this.setState({
                lunchChildren: items
             })
        }
        if(meal === "dinner"){
            let items = this.state.dinnerChildren
            let i = items.findIndex(item => item.id === id)
            items.splice(i,1)
            this.setState({
                dinnerChildren: items
             })
        }


    }



    handleSubmit(event) {
        event.preventDefault();//prevent page refresh
        const data = new FormData(event.target);// then reference by form input's `name` tag
        let meal = event.target.name

        if(meal === "breakfastForm" ){
            this.setState(prevState => ({
                breakfastChildren: [
                                    ...prevState.breakfastChildren,{
                                        calories: data.get('calories1') ,
                                        name:data.get('foodname1'), 
                                        id: this.state.foodnNumber,
                                        rm: this.handleRemove
                                    }]
              }))
              this.setState(prevState => ({
                foodnNumber: prevState.foodnNumber + 1
            }))
            this.props.addConsumed(parseInt(data.get('calories1')))//Adds calories to your daily
            document.getElementById('breakfastForm').reset()//Clears the form
        }

        else if(meal === "lunchForm" ){
            this.setState(prevState => ({
                lunchChildren: [
                                    ...prevState.lunchChildren,{
                                        calories: data.get('calories1') ,
                                        name:data.get('foodname1'), 
                                        id: this.state.foodnNumber,
                                        rm: this.handleRemove
                                    }]
              }))
              this.setState(prevState => ({
                foodnNumber: prevState.foodnNumber + 1
            }))
            this.props.addConsumed(parseInt(data.get('calories1')))//Adds calories to your daily
            document.getElementById('lunchForm').reset()//Clears the form

        }

        else if(meal === "dinnerForm" ){
            this.setState(prevState => ({
                dinnerChildren: [
                                    ...prevState.dinnerChildren,{
                                        calories: data.get('calories1') ,
                                        name:data.get('foodname1'), 
                                        id: this.state.foodnNumber,
                                        rm: this.handleRemove
                                    }]
              }))
              this.setState(prevState => ({
                foodnNumber: prevState.foodnNumber + 1
            }))
            this.props.addConsumed(parseInt(data.get('calories1')))//Adds calories to your daily
            document.getElementById('dinnerForm').reset()//Clears the form
        }
    }



    render(){
        

        return(
            <div >
                <h2> Breakfast: </h2>
                <FoodForm id= "breakfastForm" onSubmit={this.handleSubmit} name="breakfastForm"/>
                {this.state.breakfastChildren.map( entry => (
                    <Food name={entry.name} calories={entry.calories} id={entry.id} rm={entry.rm}  key={entry.id} meal ="breakfast" />
                ))}
                <br/>

                <h2> Lunch: </h2>
                <FoodForm id= "lunchForm" onSubmit={this.handleSubmit} name="lunchForm"/>
                {this.state.lunchChildren.map( entry => (
                    <Food name={entry.name} calories={entry.calories} id={entry.id} rm={entry.rm}  key={entry.id} meal ="lunch"/>
                ))}
                <br/>

                <h2> Dinner: </h2>
                <FoodForm id= "dinnerForm" onSubmit={this.handleSubmit} name="dinnerForm"/>
                {this.state.dinnerChildren.map( entry => (
                    <Food name={entry.name} calories={entry.calories} id={entry.id} rm={entry.rm}  key={entry.id} meal ="dinner"/>
                ))}
                
            </div>
        )

    }

}

export default FoodSlide
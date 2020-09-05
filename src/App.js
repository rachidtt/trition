import React,{Component} from 'react';
import './App.css';
import Balance from './Components/Balance'
import FoodSlide from './Components/FoodSlide'

import mock from './mock.json' //mock json fetch

class App extends Component{

  constructor(){
    super()
    this.state = {
      caloriesGoal: 2500,
      caloriesConsumed: 0
    }
    this.addConsumed = this.addConsumed.bind(this)
  }

  addConsumed(Cal){
    this.setState((prevState) => ({ caloriesConsumed: prevState.caloriesConsumed + Cal }))
  }

  componentDidMount(){
    console.log(mock) //mock json fetch
  }
  
  render(){
    return(
      <div>
        <Balance goal={this.state.caloriesGoal} consumed={this.state.caloriesConsumed}/>
        <br/>
        <FoodSlide addConsumed = {this.addConsumed}/>

      </div>
    )
  }

}

export default App

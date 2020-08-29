import React from 'react'
import './Balance.css'

function Balance(props){
    let balance = props.goal - props.consumed 
    let balanceColor = balance>0?{color: "green"}:{color: "red"}
    if(balance == 0) balanceColor={color: "grey"}

    return(
        <div >
            <h2 className="caloriesRemainingText">Calories Remaining</h2>
            <br/>
            <h3 className="subtraction">{props.goal} - {props.consumed} =  </h3>
            <h3 style={balanceColor}>{balance}</h3> 
        </div>
    )
}

export default Balance
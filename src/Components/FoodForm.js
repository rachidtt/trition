import React from 'react'



function FoodForm(props){


    return(
        <form id= {props.id} onSubmit={props.onSubmit} name={props.name}>
                <input id="foodname1" name="foodname1" type="text" placeholder="Food Name"/>
                <input id="calories1" name="calories1" type="text" placeholder="Calories"/>
                <button>Add Food</button>
        </form>
    )
}




export default FoodForm
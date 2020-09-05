import React from 'react'


function Food(props){

    const handleRemove = () => {
        props.rm(props.calories, props.id)
    }

    return(
        <div >
            <h3>{props.name}: {props.calories}, id: {props.id}</h3>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default Food
import React, {useState}from "react";
function Counter(){
    const[number, setnumber] = useState(0)
    const onIncrease = () => {
        setnumber(prevnumber => prevnumber +1)
    }
    const onDecrese = () => {
        setnumber(prevnumber => prevnumber -1)
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrese}>-1</button>
        </div>

    )
}
export default Counter
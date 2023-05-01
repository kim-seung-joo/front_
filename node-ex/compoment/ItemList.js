import React, { useState } from "react";

const ItemList = () => {
    const itemDateArray = [
        {
            name: "cpu", price: "162984", quantity: 1,  
        },
        {
            name:"mainboard", price: "112853", quantity:2,
        },
        {
            name:"mamory", price:"79608", quantity:2,
        }
    
    
    ]
    const[items] = useState(itemDateArray)
    return(
        <ul>
            {items.map((item) => (
                <Item key={item.name} item={item}/>
            ))}

        </ul>

    )

}
export default ItemList;

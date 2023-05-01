import Item from './ItemList'

const Item = ({item}) => {
    return(
        <li key={item.name}>
            {item.name} : {item.price} x {item.quary}

        </li>

    )

}


import React from "react";
import './List.css'


function List (props: { items:any[] }) {
    return <ul className="List">
        {
            props.items.map (item => <li> {item} </li> )
        }
    </ul>

}

export default List;
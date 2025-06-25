import { useState, useEffect } from "react";
import {useParams} from 'react-router';
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const [item, setITem] = useState()
    const {id} = useParams()

    useEffect(() =>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setITem(res));
    }, [id])
 
    return (
        <ItemDetail item = {item}/>
    )
}

export default ItemDetailContainer;
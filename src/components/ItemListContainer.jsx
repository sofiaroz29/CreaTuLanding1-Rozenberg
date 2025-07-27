import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { withLoading } from "../hoc/withLoading";
import {getProducts, getProductsByCategory } from "../firebase/db"

const ItemListWithLoading = withLoading (ItemList)

function ItemListContainer (){
    const [items, setItems] = useState ([])
    const {categoryName} = useParams()

    useEffect (() =>{
        if (categoryName) {
            getProductsByCategory(categoryName).then (res => setItems(res))
        }
        else {
            getProducts().then(res => setItems(res))
        }
    }, [categoryName]);

    return (
       <ItemListWithLoading items = {items} />
    );

}

export default ItemListContainer;
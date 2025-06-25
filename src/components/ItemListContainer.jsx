import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";


function ItemListContainer (){
    const [items, setItems] = useState ([])
    const {categoryName} = useParams()

    useEffect (() =>{

        if (categoryName) {
            const urlCategory = `https://dummyjson.com/products/category/${categoryName}`;
            fetch(urlCategory)
            .then((res) => res.json())
            .then((data) => setItems(data.products))
            
        } else {
            const categories = ["tops", "mens-shirts","beauty","womens-jewellery",];

            Promise.all(categories.map(cat =>
                fetch(`https://dummyjson.com/products/category/${cat}`).then(res => res.json())
            ))
            .then(results => {
                const allProducts = [];
                results.forEach(res => {
                allProducts.push(...res.products);
                });

                setItems(allProducts);
            })
     
        }
    }, [categoryName]);

    return (
       <ItemList items = {items} />
    );

}

export default ItemListContainer;
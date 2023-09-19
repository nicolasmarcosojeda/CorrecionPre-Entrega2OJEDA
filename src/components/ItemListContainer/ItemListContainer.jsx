import { useEffect, useState } from "react";
import { getall, getByCategory } from "../../mocks/servicesData";
import { useParams } from 'react-router-dom'
import ProductList from "../Product/ProductList";


const ItemListContainer = () => {
    const [items, setItems] = useState ([])
    const { categoryId } = useParams()

    useEffect(() => {
        const getData = categoryId ? getByCategory : getall
        getData(categoryId)
            .then((data) => {
                setItems(data)
            })
    }, [categoryId])

    return (
        <ProductList productListData={items} />
    )
}

export default ItemListContainer
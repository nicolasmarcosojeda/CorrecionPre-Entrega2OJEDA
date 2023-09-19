import { useState, useEffect } from "react";
import ProductDetails from "../Product/ProductDetails";
import { useParams } from "react-router-dom";
import { getById } from "../../mocks/servicesData";


function ItemDetailContainer() {
    const [Product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getById(Number(id))
            .then(data => {
                setProduct(data)
            })
    }, [id])
    return (
        <ProductDetails Product={Product} />
    )
}

export default ItemDetailContainer;
import React from "react";
import { useGetProductsQuery, type ProductType} from "../../../services/productApi";

const ProductsList: React.FC = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    console.log("🔹 useGetProductsQuery:", useGetProductsQuery);


    return (
        <>
            <h1>So Be Store</h1>
            {products?.map((item: ProductType) => (
                <li key={item.id}>
                    {item.name}
                    <br />
                    <span>
                    <span>{item.price ? item.price : 'Ціна не вказана'}</span>
                    </span>
                </li>
            ))}
        </>
    )
};

export default ProductsList;
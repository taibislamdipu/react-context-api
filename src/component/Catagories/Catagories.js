import React, { useContext, useState, useEffect } from 'react';
import CatagoryDetail from '../CatagoryDetail/CatagoryDetail';
import { CatagoryContext } from '../../App';

const allProducts = [
    { name: 'Lenovo', category: 'Laptop' },
    { name: 'Asus', category: 'Laptop' },
    { name: 'Dell', category: 'Laptop' },
    { name: 'HP', category: 'Laptop' },

    { name: 'Samsung', category: 'Mobile' },
    { name: 'Nokia', category: 'Mobile' },
    { name: 'Apple', category: 'Mobile' },

    { name: 'Canon', category: 'Camera' },
    { name: 'Nikon', category: 'Camera' },
    { name: 'Sony', category: 'Camera' },
]

const Catagories = () => {

    const [category] = useContext(CatagoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);

    }, [category])
    return (
        <div>
            <h2>Select your category: {category} </h2>
            {
                products.map(pd => <CatagoryDetail product={pd}></CatagoryDetail>)
            }
        </div>
    );
};

export default Catagories;
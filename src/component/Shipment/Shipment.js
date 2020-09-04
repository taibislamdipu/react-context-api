import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const Shipment = () => {

    const [category, setCategory] = useContext(CatagoryContext);

    return (
        <div>
            <h1>This is a Shipment page</h1>
            <button onClick={() => setCategory(category + 1)}>Incement from category</button>
        </div >
    );
};

export default Shipment;
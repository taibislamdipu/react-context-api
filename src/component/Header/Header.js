import React, { useContext } from 'react';
import { useState } from 'react';
import { CatagoryContext } from '../../App';

const Header = (props) => {

    const [category, setCategory] = useContext(CatagoryContext);

    return (
        <div>
            <p>count value={category}</p>
            <h1>This is a Header: {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div >
    );
};

export default Header;
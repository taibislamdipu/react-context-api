import React, { useContext } from 'react';
import Catagories from '../Catagories/Catagories';
import { CatagoryContext } from '../../App';

const Home = () => {

    const count = useContext(CatagoryContext)
    return (
        <div style={{ border: '1px solid purple' }}>
            <h1>This is the home page {count}</h1>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;
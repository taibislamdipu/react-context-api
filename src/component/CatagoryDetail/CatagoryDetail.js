import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const CatagoryDetail = (props) => {

    const { name } = props.product;

    return (
        <div>
            <h4>This is your catagory details</h4>
            <h5>Selected Product: {name}</h5>
        </div>
    );
};

export default CatagoryDetail;
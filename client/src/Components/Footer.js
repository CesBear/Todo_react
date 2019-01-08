import React from 'react';
import { Footer } from 'react-materialize';

const CustomFooter = () => {
    return (
        <div>
            <Footer className='red black-text'>
                <h6> Made with love by: <i className="fas fa-heart black-text"> </i> Ces Bear </h6>
                <p >You ask, we design</p>
            </Footer>
        </div>
    );
};

export default CustomFooter;
import React from 'react';
import { Parallax } from 'react-materialize';

const HeroComponent = () => {
    return (
        <div>
            <div>
                <Parallax imageSrc="./todo-list.jpg"/>
                <div className="section red borderElement">
                    <div className="row container">
                        <h2 className="header centered" >To-Do <span><a className="black-text" href="https://unsplash.com"><i className="far fa-check-circle space-left icon"></i></a></span></h2>
                    </div>
                </div>
                <Parallax imageSrc="./to-do.jpg"/>
            </div>
        </div>
    );
};

export default HeroComponent;
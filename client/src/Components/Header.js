import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';

const Header = () => {
    return (
        <div>
            <Navbar className="redbck"
                    brand={
                        <i className="fas fa-check space-left black-text"></i>

            } right>
                <NavItem href='get-started.html'><Icon className="black-text">search</Icon></NavItem>
                <NavItem href='get-started.html'><Icon className="black-text">view_module</Icon></NavItem>
                <NavItem href='get-started.html'><Icon className="black-text">refresh</Icon></NavItem>
                <NavItem href='get-started.html'><Icon className="black-text">more_vert</Icon></NavItem>
            </Navbar>
        </div>
    );
};

export default Header;
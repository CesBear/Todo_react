import React, {Component} from 'react';
import {SideNav, SideNavItem } from 'react-materialize';

class LeftColumn extends Component {
    render() {
        return (
            <SideNav className='fixedHeader fixedBottom cyan lighten-4'>
                <SideNavItem
                             userView
                             user={{
                                 name: 'Today'
                             }}
                />
                <SideNavItem href='#!icon' icon='list'>Your Lists</SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
            </SideNav>
        );
    }
}

export default LeftColumn;
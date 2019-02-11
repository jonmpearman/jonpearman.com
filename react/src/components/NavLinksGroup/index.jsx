import React, {Component} from 'react';
import AppConnector from '../../store/connect.jsx';
import NavLink from '../NavLink/index.jsx';
import './index.css';

class NavLinksGroup extends Component {
    constructor(props) {
        super(props);
    }

    static get navLinkItems() {
        return ['home', 'résumé', 'about me', 'contact me']
    }

    render() {
        return (
            <div className={'navLinks-group'}>
                {NavLinksGroup.navLinkItems.map((item, index) => {
                    return <NavLink key={index} navName={item}/>;
                })}
            </div>
        );
    }
}

export default AppConnector(NavLinksGroup);
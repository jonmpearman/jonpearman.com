import React, {Component} from 'react';
import NavLinksGroup from '../NavLinksGroup/index';
import './index.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'headerContainer'}>
                <NavLinksGroup />
            </div>
        );
    }
}

export default Header;
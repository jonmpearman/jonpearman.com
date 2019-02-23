import React, {Component} from 'react';
import NavLinksGroup from '../../components/NavLinksGroup/index';
import './index.css';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'headerContainer'}>
                <div className={'page-headline-text'}>Jon Pearman | Frontend Engineer</div>
                <NavLinksGroup />
                <div className={'background-img-container'}>
                    <div className={'header-background-img'}></div>
                </div>
            </div>
        );
    }
}

export default HeaderContainer;
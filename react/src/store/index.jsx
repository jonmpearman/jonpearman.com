import React, {Component} from 'react';
import {AppProvider} from './context.js';

export default class PresentationProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'home'
        }
    }

    render() {
        return (<AppProvider value={{...this.state}}>{this.props.children}</AppProvider>);
    }
}

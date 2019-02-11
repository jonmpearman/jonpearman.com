import React, {Component} from 'react';
import {AppConsumer} from './context.js';

const AppConnector = (AppComponent) => class extends Component {
    render() {
        return (
            <AppConsumer>
                {store => <AppComponent {...this.props} {...store} />}
            </AppConsumer>
        );
    }
}

export default AppConnector;
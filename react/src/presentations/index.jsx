import React, {Component} from 'react';
import PresentationProvider from '../store/index';
import App from '../App';

class AppPresentation extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <PresentationProvider>
                <App />
            </PresentationProvider>
        );
    }
}

export default AppPresentation;
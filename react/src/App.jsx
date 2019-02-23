import React, {Component} from 'react';
import HeaderContainer from './containers/Header/index';
import AppConnector from './store/connect.jsx';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={'pageContainer'}>
                <HeaderContainer />
                <div className={'appContainer'}>
                    My name is Jon Pearman and I am a frontend engineer.
                    <p>More coming soon!</p>
                </div>
            </div>
        );
    }
}

export default AppConnector(App);
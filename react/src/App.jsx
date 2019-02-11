import React, {Component} from 'react';
import HelloBtn from './components/HelloBtn';
import Header from './components/Header/index';
import AppConnector from './store/connect.jsx';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={'pageContainer'}>
                <Header />
                <div className={'appContainer'}>
                    <HelloBtn {...this.props} />
                </div>
            </div>
        );
    }
}

export default AppConnector(App);
import React from 'react';

class HelloBtn extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(e) {
        e.preventDefault();
        alert(`${this.props.activeTab} clicked it!`);
    }

    render() {
        return(<div onClick={(e) => this._handleClick(e)}>Button you should click!</div>);
    }
}

export default HelloBtn;
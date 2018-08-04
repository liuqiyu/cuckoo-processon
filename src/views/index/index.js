import React, { Component } from 'react';
import bg from './../../assets/images/index.jpg';
import './index.less';

class Index extends Component {
    render() {
        return (
            <div className="index">
                <img src={bg} className="index-bg" alt="logo" />
            </div>
        );
    };
}

export default Index;
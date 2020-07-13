import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    render() {
        return (
            <div>
                <div className="search-bar">
                    <div className="search-container">
                        <input className="search-area" placeholder="Search by Title"/>
                        <button className="search-button">Search</button>
                        <button className="reset-button"> Reset </button>
                    </div>
                    <div className="check-box">
                        <p> My Posts </p>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard;
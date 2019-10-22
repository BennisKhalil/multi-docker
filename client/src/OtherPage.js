import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class OtherPage extends Component {
    render() {
        return (
            <div>
                I'm some other page!
                <Link to="/">go back home</Link>
                
            </div>
        )
    }
}

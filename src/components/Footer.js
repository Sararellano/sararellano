import React, { Component } from 'react';

import '../style/Footer.css';
import '../style/index.css';


class Footer extends Component {
    // constructor(){
    //     super();

    // }

    render() {
        return(
            <div className="footer">
                <span>© Sara Arellano Blázquez - {new Date().getFullYear()}</span>
            </div>
        );
    }
}

export default Footer;

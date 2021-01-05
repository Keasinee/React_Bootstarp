import { render } from "@testing-library/react";
import React,{ Component } from 'react';
import Navitem from './Navitems'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'NavitemActive': ''
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    
                    <Navitem item="Home" tolink="/"></Navitem>
                    <Navitem item="About Us" tolink="/about"></Navitem>
                    <Navitem item="News" tolink="/news"></Navitem>
                    <Navitem item="Contact Us" tolink="/contact"></Navitem>

                </ul>
            </nav>
        )
    }
}

export default Navbar;
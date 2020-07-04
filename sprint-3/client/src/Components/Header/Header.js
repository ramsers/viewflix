import React from 'react';
import Form from '../HeaderForm/Form';
import './Header.scss';
import logo from './HeaderAssets/viewflix-logo.png';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <header className="header">
               <Link to="/"> <img className="header__logo" src={logo} alt=""/> </Link>
                <Form />
            </header>
        )
    }
}

export default Header;

import React from 'react';
import './Form.scss';
import search from './FormAssets/Icon-search.png';
import upload from './FormAssets/Icon-upload.png';
import userImg from './FormAssets/persona-pic.jpg';
import {Link} from 'react-router-dom';

function Form (){
        return(
            <div className="header__form-ctn">
                <form className="header__form" action="Post">
                    <img className="header__search" src={search} alt="Brainflix Logo"/>
                    <input className="header__input" type="text" name="Search" placeholder="Search"/>
                       <Link to="/upload">
                            <button className="header__button">
                                <img className="header__upload" src={upload} alt="Upload Icon"/>
                                    Upload
                            </button>
                        </Link>
                    <span>
                        <img className="header__user-img"  src={userImg} alt="User Account"/>
                    </span>
                </form>
            </div>
        )
}

export default Form;


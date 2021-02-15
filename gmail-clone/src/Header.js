import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png' alt='' />
            </div>

            <div className='header__middle'>
                <SearchIcon />
                <input placeholder='Search mail' type='text'/>
                <ArrowDropDownIcon className='header__inputCaret' />
            </div>

            <div className='header__right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
            </div>
            
            
        </div>
    )
}

export default Header
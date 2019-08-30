import React from 'react';

//Get the parth of the image for webpack to resolve
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.scss';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurgerLogo"/>
    </div>
);

export default logo;
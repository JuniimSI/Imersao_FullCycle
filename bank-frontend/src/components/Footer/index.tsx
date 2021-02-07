// @flow 
import * as React from 'react';
import classes from './Footer.module.scss';
console.log(classes);

export const Footer: React.FunctionComponent = (props) => {
    return (
        <footer className={classes.root}>
            <img src="/img/logo_pix.png" alt="Code Pix" />
        </footer>
    );
};

export default Footer;
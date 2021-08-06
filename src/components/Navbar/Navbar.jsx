import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import userStyles from './styles';

const Navbar = () => {
    const mergeClasses = userStyles();
    return(
        <>
            <AppBar position="fixed" className={mergeClasses.appBar} color="inherit">
                <Toolbar>
                    <Typography>
                        <img  alt="" height="25px" className={mergeClasses.image} />
                        Commerce.js
                    </Typography>
                    <div className={mergeClasses.grow} />
                    <div className={mergeClasses.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="Secondary">
                                <ShoppingCart />
                            </Badge>
                            
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
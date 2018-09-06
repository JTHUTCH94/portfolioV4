import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1,
        textAlign: 'center',
        backgroundColor: '#575a5e'
    },
    button: {
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Acme'
    }
}

function Header(props) {
    const { classes } = props;
    return (
        <AppBar className={classes.root}>
            <Grid container spacing={12} container justify='center'>
                <Grid item xs={3}>
                    <Button className={classes.button}><Link to='/' className={classes.link}>Home</Link></Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}><Link to='/aboutMe' className={classes.link}>Bio</Link></Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.button}><Link to='/projects' className={classes.link}>Projects</Link></Button>
                </Grid>
            </Grid>
        </AppBar >
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
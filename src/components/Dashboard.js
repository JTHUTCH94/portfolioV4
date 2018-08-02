import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles ={
    dashboard: {
        width: '50%',
        textAlign: 'center',
        marginTop: 150,
        margin: 'auto',
        padding: 25,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Acme'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Montserrat'
    }
}

function Dashboard(props) {
    const { classes } = props;
    return (
        <Paper className={classes.dashboard}>
            <Typography className={classes.title}>Joshua Hutchinson</Typography>
            <Typography className={classes.text}>Junior Web Developer</Typography>
            <Typography className={classes.text}>Tech Enthusiast, Avid Gamer, Big Time Nerd</Typography>
            <img
                className="computer" src="https://s8.postimg.cc/xesezd1c5/Computer.png" alt="Computer Pixel Image"/>
        </Paper>
    )
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Dashboard);
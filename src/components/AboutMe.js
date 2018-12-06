import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1,
    },
    backing:{
        marginTop: 60,
        marginBottom: 20,
        textAlign: 'center',
        padding: 25,
        width: '60%',
        margin: 'auto',
        backgroundColor: '#575A5E'
    },
    paper: {
        width: '75%',
        textAlign: 'center',
        margin: 'auto',
        padding: 25,
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: 18
    },
    image: {
        marginBottom: 10,
        margin: 'auto',
        padding: 0,
    }
}

function AboutMe(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <Paper className={classes.backing}>
        <Grid container spacing={24}>
        <Grid item xs>
        <Paper className={classes.paper}>
            <img
                className={classes.image} src="https://s33.postimg.cc/9eycndygf/Linked_In_Pic.jpg" alt="Joshua Hutchinson Profile Picture"/>
            <Typography className={classes.text}>I'm Josh, but most of my friends call me Hutch. After graduating from The University of Georgia with an Agricultural Business degree, I was left without much of an idea of what to do next. I have always had an interest in the technology we all use everyday, so I enrolled with Thinkful and began learning to become a web developer. Now I am searching for my next big opportunity to work with a team of developers in order to improve my skills and make a name for myself in this ever growing industry.</Typography>
        </Paper>
        </Grid>
        </Grid>
        </Paper>
        </div>
    )
}

AboutMe.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(AboutMe);
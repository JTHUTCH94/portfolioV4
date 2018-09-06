import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';

const styles = {
    paper: {
        marginTop: 100,
        marginBottom: 20,
        textAlign: 'center',
        padding: 25,
        width: '75%',
        margin: 'auto',
        backgroundColor: '#575A5E'
    },
    card: {
        width: '90%',
        margin: 'auto',
        marginBottom: 50,
        textAlign: 'center',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    text: {
        fontSize: 18,
        marginBottom: 15,
        fontFamily: 'Montserrat'
    },
    title: {
        fontSize: 25,
        textDecoration: 'none',
        color: 'white',
        fontFamily: 'Acme',
        marginBottom: 10        
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: 18,
        fontFamily: 'Montserrat',
        marginLeft: 2
    },
    button: {
        margin: 'auto',
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        borderColor: 'black',
        backgroundColor: '#575A5E'
    }
};

function Projects(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography className={classes.title}>My Projects</Typography>
                <Typography className={classes.title}>Click the titles to view the live projects</Typography>
                <Card className={classes.card}>
                    <CardContent>
                        <Button className={classes.button} variant="outlined" size="large"><a className={classes.title} href="https://schedulr.netlify.com/">Schedulr</a></Button>
                        <Typography className={classes.text}>Schedulr is a quick and easy way to schedule and manage appointments for small business owners and business professionals alike. With both a web based application and a mobile application, users are able to keep track of their appointments with the added benefit of an automated notification system to keep clients in the loop. The application was built using React.js, Redux, React-Native, Express, and Node.</Typography>
                        <CardMedia
                            className={classes.media} image="https://s8.postimg.cc/63et0j3p1/Schedulr-_Screenshot.png" title="Schedulr Screenshot" />
                            <Button size="large" variant="outlined" className={classes.button}>
                                <SvgIcon>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </SvgIcon>
                                <a className={classes.link} href="https://github.com/thinkful-ei19/Final-CS-ctrl-alt-elite-client">Frontend</a></Button>
                
                            <Button size="large" variant="outlined" className={classes.button}>
                                <SvgIcon>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </SvgIcon>
                                <a className={classes.link} href="https://github.com/thinkful-ei19/Final-CS-ctrl-alt-elite-server">Server</a></Button>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Button size="large" variant="outlined" className={classes.button}><a className={classes.title} href="https://dothrak-tionary.netlify.com/"> Dothrak-tionary</a></Button>
                        <Typography className={classes.text}>Dothrak-tionary is a spaced repetition application made for the sole purpose of learning the fictional language Dothraki from the popular HBO television series Game of Thrones. The application was built using React.js, Redux, Express, and Node.</Typography>
                        <CardMedia
                            className={classes.media}
                            image="https://s8.postimg.cc/yvlkk5vyt/Dothraki-_Screenshot.png" title="Learn Dothraki Screenshot" />
                            <Button size="large" variant="outlined" className={classes.button}>
                                <SvgIcon>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </SvgIcon>
                                <a className={classes.link} href="https://github.com/thinkful-ei19/Josh-Ray-Spaced-Repitition-App-Client">Frontend</a></Button>
                            <Button size="large" variant="outlined" className={classes.button}>
                                <SvgIcon>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </SvgIcon>
                                <a className={classes.link} href="https://github.com/thinkful-ei19/Josh-Ray-Spaced-Repetition-App-Server">Server</a></Button>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Button size="large" variant="outlined" className={classes.button}>
                            <a className={classes.title} href="https://character-builder.netlify.com/">Character Builder</a></Button>
                        <Typography className={classes.text}>The Character Builder is a full stack web application designed to allow users to choose from a preset list of options in order to create custom characters. The application is built using React.js, Redux, Express, and Node.</Typography>
                        <CardMedia
                            className={classes.media}
                            image="https://s8.postimg.cc/t7f9td72t/Screenshot_44.png" title="Character Builder Screenshot" />
                        <CardActions>
                            <Button size="large" variant="outlined" className={classes.button}>
                                <SvgIcon>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </SvgIcon><a className={classes.link} href="https://github.com/JTHUTCH94/Character-Builder-Client">GitHub</a></Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Paper>
        </div>
    )
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
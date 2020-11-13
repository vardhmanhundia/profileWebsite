import React from 'react';
import './header.css';
import { Typography, Box, IconButton, Avatar, Grid} from '@material-ui/core';
import ProfilePhoto from '../Images/vardhman.jpg'
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title:{
        color: "white",
        textAlign: "center"
    },
    subtitle:{
        color: "tan",
        margin: "3rem",
        textAlign: "center"
    },
    typedContainer: {
        position: "absolute",
        top: "20%",
        left: "50%",
        right: "50%",
        transform: "translate(-50%,-50%}",
        textAlign: "center",
        zIndex: 1
    },
    pariclesCanva: {
        position: "absolute",
        opacity: "0.3"
    },
    margin: {
        margin: theme.spacing(1)
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className= {classes.typedContainer}>
                <Grid container justify="center">
                    <Avatar
                        alt="ProfilePhoto"
                        className= {classes.avatar}
                        src= {ProfilePhoto}
                    />
                    <Typography className= {classes.title} variant="h2" >
                        <Typed strings={["Vardhman Hundia"]} typeSpeed={40} />
                    </Typography>
                    <Typography className= {classes.subtitle} variant="h4" >
                        <Typed strings={["IoT Engineer","MERN Developer","Web Developer"]} typeSpeed={40} loop/>
                    </Typography>
                    <ButtonGroup size="large" variant="text" color="white" style={{background:"transparent"}} aria-label="text primary button group">
                        <IconButton className={classes.margin} color="primary" onClick={"https://github.com/vardhmanhundia"} > <GitHubIcon fontSize="large" /> </IconButton>
                        <IconButton className={classes.margin} color="primary" onClick={"https://www.linkedin.com/in/vardhman-hundia/"} > <LinkedInIcon fontSize="large"  /> </IconButton>
                        <IconButton className={classes.margin} color="primary" onClick={"https://www.facebook.com/vardhman.hundia"} > <FacebookIcon fontSize="large"  /> </IconButton>
                    </ButtonGroup>
                </Grid>
            </Box>
            
        </Box>
    
    );
}

export default Header;


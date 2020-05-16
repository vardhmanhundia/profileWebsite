import React from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../title/title';
import Profile from '../Images/vardhman2.jpg';
const useStyles = makeStyles(theme => ({
    heading: {
        color: "white"
    },
    box:{
        padding:"6rem"
    },
    content_Heading:{
        color: "white"
    },
    content_para:{
        color: "grey"
    }
}));

const AboutInfo = () => {
    const classes = useStyles();

    return (
        <>
        <Box className={classes.box}>
            <Title title={ "ABOUT ME" } />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <img width="70%" height="auto" src={Profile} alt="profile"></img>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography className={classes.content_Heading} variant="h3" gutterBottom>
                    <b>I am <span style={{color: "blue"}}>Vardhman Hundia</span></b>
                </Typography>
                <Typography className={classes.content_para} variant="h6" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                
                <Typography className={classes.content_para} variant="h5" gutterBottom>
                    <b>Full Name:</b> Vardhman Mahesh Hundia
                </Typography>
                <Typography className={classes.content_para} variant="h5" gutterBottom>
                    <b>Age:</b> Vardhman Mahesh Hundia
                </Typography>
                <Typography className={classes.content_para} variant="h5" gutterBottom>
                    <b>Nationality:</b> Vardhman Mahesh Hundia
                </Typography>
                <Typography className={classes.content_para} variant="h5" gutterBottom>
                    <b>Languages:</b> Vardhman Mahesh Hundia
                </Typography>
                <Typography className={classes.content_para} variant="h5" gutterBottom>
                    <b>Address:</b> Vardhman Mahesh Hundia
                </Typography>
                <br></br>
                <Button size="large" variant="contained" color="primary" >
                    DOWNLOAD CV
                </Button>
                </Grid>
            </Grid>
        </Box>
        </>
    );
};

export default AboutInfo;

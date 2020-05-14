import React from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles(theme => ({
    heading: {
        color: "white"
    },
    box:{
        padding:"6rem"
    }
}));

const Skills = () => {
    const classes = useStyles();

    return (
        <>
        <Box className={classes.box}>
            <Typography className={classes.heading} color="primary" variant="h3" component="h2">
                MY SKILLS
            </Typography>
            <Typography color="primary" variant="h2" component="h2" spacing="3" >
               <b>MY SKILLS</b>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <LinearProgress variant="determinate" value={30} color="secondary" />
                </Grid>
                <Grid item xs={12} sm={6}>
                </Grid>
            </Grid>
        </Box>
        </>
    );
};

export default Skills;

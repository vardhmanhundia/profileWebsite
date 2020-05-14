import React from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import AboutInfo from '../Components/aboutInfo/aboutInfo';
import Skills from '../Components/Skills/skills';
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

const AboutMe = () => {
    const classes = useStyles();

    return (
        <>
        <AboutInfo/>
        <Skills />
        </>
    );
};

export default AboutMe;

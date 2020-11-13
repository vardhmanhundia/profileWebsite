import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    heading: {
        color: "white",

    },
    reflection: {
        color: "#141722",
    }
}));

const Title = ({ title }) => {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.heading} variant="h3" component="h2">
                <b>{title}</b>
            </Typography>
            <Typography className={classes.reflection} variant="h2" component="h2" >
                <b>{title}</b>
            </Typography>
        </>
    )
}

export default Title;

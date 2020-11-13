import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../title/title.component';

import './skills.css';

const useStyles = makeStyles(theme => ({
    heading: {
        color: "white"
    },
    box: {
        padding: "6rem"
    }
}));

const Skills = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.box}>
                <Title title={"MY SKILLS"} />
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <div className="container">
                            <ul>
                                <li className='html'>HTML</li>
                                <li className='css'>CSS</li>
                                <li className='html'>JAVAScript</li>
                                <li className='html'>JAVAScript</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="container">
                            <ul>
                                <li className='html'>HTML</li>
                                <li className='css'>CSS</li>
                                <li className='html'>JAVAScript</li>
                                <li className='html'>JAVAScript</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Skills;

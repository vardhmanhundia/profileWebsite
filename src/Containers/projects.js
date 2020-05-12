import React from 'react';
import {Tabs, Tab, Box, Typography, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Project_card from '../Components/project_card/project_card';



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    }
  });

const Projects = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <>
            <Box className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    aria-label="icon tabs example"
                    style={{color: "white"}}
                    >
                    <Tab label="React" icon={<PhoneIcon />} aria-label="phone" />
                    <Tab label="React"  icon={<FavoriteIcon />} aria-label="favorite" />
                    <Tab label="React"  icon={<PersonPinIcon />} aria-label="person" />
                    
                </Tabs>
            </Box>
            <Grid style={{ padding: 20 }} container spacing={5}>
                <Grid item xs={12} sm={3}>
                    <Project_card/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Project_card/>                
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Project_card/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Project_card/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Project_card/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Project_card/>                
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Project_card/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Project_card/>
                </Grid>
            </Grid>
        </>
    );
}

export default Projects;

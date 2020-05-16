import React from 'react';
import { Box, Grid} from '@material-ui/core';
import Title from '../Components/title/title';
import { makeStyles } from '@material-ui/core/styles';
import Project_card from '../Components/project_card/project_card';



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    box:{
        padding:"6rem"
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
        <Box className={classes.box}>
            <Title title={"MY PROJECTS"} />
                <Grid style={{ padding: 20 }} container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Project_card/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project_card/>                
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project_card/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project_card/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project_card/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project_card/>                
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project_card/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Project_card/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Projects;

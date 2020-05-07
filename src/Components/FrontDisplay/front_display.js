import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const front_display = () => {
    return (
        <Container maxWidth="false" disableGutters="true">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper >xs=12</Paper>   
                    </Grid>
                </Grid>
             
        </Container>
    );
}

export default front_display;
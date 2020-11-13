import React from 'react';

import Title from '../Components/title/title.component';
import { Grid, Box, TextField, Button, Typography, ButtonGroup, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import SendIcon from '@material-ui/icons/Send';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
const useStyles = makeStyles(theme => ({
    box: {
        padding: "6rem",
        position: "static"
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%',
        margin: "15px",
        backgroundColor: "white",
        borderRadius: "1000px"
    },
    textArea: {
        width: '100%',
        margin: "15px",
        backgroundColor: "white",
        borderRadius: "40px"
    },
    button: {
        width: '50%',
        margin: "15px",
        height: "50px",
        borderRadius: "30px"
    },
    contactInfo: {
        color: "white",
        padding: "10px",
        paddingLeft: "60px"
    }
}));

const ContactMe = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.box}>
                <Title title={"CONTACT ME"} />
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <form >
                            <FormControl required color="secondary" variant="filled" className={classes.textField}>
                                <InputLabel htmlFor="component-filled">Your Name</InputLabel>
                                <FilledInput id="component-filled" />
                            </FormControl>
                            <FormControl required color="secondary" variant="filled" className={classes.textField}>
                                <InputLabel htmlFor="component-filled">Your Email Id</InputLabel>
                                <FilledInput id="Email" />
                            </FormControl>
                            <FormControl required color="secondary" variant="filled" className={classes.textField}>
                                <InputLabel htmlFor="component-filled">Subject</InputLabel>
                                <FilledInput id="Subject" />
                            </FormControl>
                            <TextField
                                id="Message"
                                label="Message"
                                multiline
                                variant="filled"
                                className={classes.textArea}
                                rows={5}
                            />
                            <Button variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<SendIcon />} >
                                Send Message
                        </Button>

                        </form>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography className={classes.contactInfo} variant="h4" component="h2" gutterBottom>
                            <b>Let's talk about everything!</b>
                        </Typography>
                        <Typography className={classes.contactInfo} variant="h5" component="h2" gutterBottom>
                            <PhoneIcon fontSize="large" /> +91-9638400815
                    </Typography>
                        <Typography className={classes.contactInfo} variant="h5" component="h2" gutterBottom>
                            <EmailIcon fontSize="large" /> vardhmanhundia@gmail.com
                    </Typography>
                        <Typography className={classes.contactInfo} variant="h5" component="h2" gutterBottom>
                            <WhatsAppIcon fontSize="large" /> 91-9638400815
                    </Typography>
                        <ButtonGroup className={classes.contactInfo} size="large" variant="text" color="white" style={{ background: "transparent" }} aria-label="text primary button group">
                            <IconButton className={classes.margin} color="primary" onClick={"https://github.com/vardhmanhundia"} > <GitHubIcon fontSize="large" /> </IconButton>
                            <IconButton className={classes.margin} color="primary" onClick={"https://www.linkedin.com/in/vardhman-hundia/"} > <LinkedInIcon fontSize="large" /> </IconButton>
                            <IconButton className={classes.margin} color="primary" onClick={"https://www.facebook.com/vardhman.hundia"} > <InstagramIcon fontSize="large" /> </IconButton>
                            <IconButton className={classes.margin} color="primary" onClick={"https://www.facebook.com/vardhman.hundia"} > <FacebookIcon fontSize="large" /> </IconButton>
                            <IconButton className={classes.margin} color="primary" onClick={"https://www.facebook.com/vardhman.hundia"} > <WhatsAppIcon fontSize="large" /> </IconButton>
                        </ButtonGroup>

                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default ContactMe;

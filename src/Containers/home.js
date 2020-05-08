import React from 'react'
import Header from '../Components/Header/header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    pariclesCanva: {
        position: "absolute",
        opacity: "0.3"
    }
}));
const Home = () => {
    const classes = useStyles();
    return (

        <>
            <Particles 
                    canvasClassName={classes.pariclesCanva}
                    params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: false,
                                value_area: 900
                            }
                        },
                        shape:{
                            type: "circle",
                            stroke:{
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min : 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            amim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                    }} 
                />
            <Header />
        </>
    )
}

export default Home;

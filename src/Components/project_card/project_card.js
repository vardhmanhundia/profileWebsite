import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';

const userStyles = makeStyles(theme => ({
    card:{
        transition: '0.3s',
        maxWidth: 304,
        margin: 'auto',
        borderRadius: 16,
        padding: theme.spacing(3),
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        '&:hover': { boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'}
    },
    head:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'   
    },
    avatar:{
        width: 60,
        height: 60,
        backgroundColor: '#ffffff',
        transform: 'translateY(50%)',
    },
    headLabel:{
        color: theme.palette.grey[500]
    },
    divider:{
        marginLeft: -theme.spacing(3),
        marginRight: -theme.spacing(3)
    },
    Content: {
        textAlign: 'left',
        padding: 0,
        paddingTop: theme.spacing(6)
    },
    overline: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.palette.grey[500],
    },
    Typography_heading: {
        fontWeight: 900,
    },
    Typography_subheading: {
        lineHeight: 1.8,
    }
}));


const project_Card = () => {

    const classes = userStyles();
    return (
        <Card className={classes.card}>
        <div className={classes.head}>
            <Avatar
            className={classes.avatar}
            src={'http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png'}
            />
            <Typography
            className={classes.headLabel}
            variant={'overline'}
            gutterBottom
            >
            7 Minutes
            </Typography>
        </div>
        <Divider className={classes.divider} light />
        <CardContent className={classes.Content}>
            <Typography
            className={classes.overline}
            variant={'overline'}
            gutterBottom
            >
            </Typography>
            <Typography
            className={classes.Typography_heading}
            variant={'h5'}
            gutterBottom
            >
            Project Polymer
            </Typography>
            <Typography className={classes.Typography_subheading} gutterBottom>
            Web components usher in a new era of web development based on
            encapsulated and interoperable custom
            </Typography>
        </CardContent>
        </Card>
  );
};

export default project_Card;


import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function BreakingNewsAlert(props) {
    const {text} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: "red"}}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Breaking News: <span>{text}</span>
                    </Typography>
                    <CloseIcon/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontSize: 18,
        flexGrow: 1,
    },
}));
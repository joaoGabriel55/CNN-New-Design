import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import logo from '../../logo.svg'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function AppToolbar() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <img src={logo} className={classes.logo} />
                    <Button color="">Login</Button>
                </Toolbar>
            </AppBar>
            <Divider className={classes.divider} />
            <AppBar position="static">
                <Toolbar className={classes.toolbarSections}>
                    <Button startIcon={<FiberManualRecordIcon />}
                        color="inherit" className={classes.liveBtn}>Ao vivo</Button>
                    <Button color="inherit">Política</Button>
                    <Button color="inherit">Nacional</Button>
                    <Button color="inherit">Business</Button>
                    <Button color="inherit">Internacional</Button>
                    <Button color="inherit">Saúde</Button>
                    <Button color="inherit">Tecnologia</Button>
                    <Button color="inherit">Esporte</Button>
                    <Button color="inherit">Entretenimento</Button>
                    <Button color="inherit">Estilo</Button>
                    <Button color="inherit">Viagem</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    country: {
        color: 'red',
        backgroundColor: "white",
        textAlign: 'center',
    },
    toolbar: {
        backgroundColor: "white"
    },
    toolbarSections: {
        backgroundColor: "#252525"
    },
    logo: {
        flexGrow: 1,
        height: 45,
        textAlign: 'center',
        color: 'red'
    },
    liveBtn: {
        backgroundColor: "red",
        marginRight: 8
    },
    divider: {
        backgroundColor: "red",
        padding: 2
    }

}));
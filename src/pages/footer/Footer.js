import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

import { makeStyles } from '@material-ui/core/styles';

import logo from '../../logo.svg'

export default function Footer() {
    const classes = useStyles();

    return (
        <footer style={{ width: '100%', backgroundColor: 'black', color: 'white' }}
        >
            <Grid className={classes.contentFooter} container item xs={12} sm={10}>
                <Grid item xs={12} sm={1}>
                    <img src={logo} className={classes.logo} />
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Typography variant="h6">Editoria</Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Ao Vivo
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Política
                    </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Nacional
                    </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Business
                    </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Internacional
                    </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Saúde
                    </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Tecnologia
                    </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Esporte
                    </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Entretenimento
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Estilo
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                            Viagem
                        </Link>
                    </Typography>
                </Grid >
                <Grid item style={{ marginLeft: 50 }} xs={12} sm={1}>
                    <Typography variant="h6">Mais</Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="none" color="inherit">
                            Equipe CNN Brasil
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="none" color="inherit">
                            Grade de Programação
                        </Link>
                    </Typography>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 14 }} underline="none" color="inherit">
                            Colunistas
                        </Link>
                    </Typography>
                </Grid>
                <Grid container item xs={12} sm={8} direction="row-reverse">
                    <Grid container item xs={12} sm={1} direction="column">
                        <Typography variant="h6">
                            Siga
                        </Typography>
                        <Typography variant="h5" component="h5">
                            <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                                Twitter
                            </Link>
                        </Typography>
                        <Typography variant="h5" component="h5">
                            <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                                Facebook
                            </Link>
                        </Typography>
                        <Typography variant="h5" component="h5">
                            <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                                Youtube
                            </Link>
                        </Typography>
                        <Typography variant="h5" component="h5">
                            <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                                Instagram
                            </Link>
                        </Typography>
                        <Typography variant="h5" component="h5">
                            <Link href="#" style={{ fontSize: 14 }} underline="hover" color="inherit">
                                Linkedin
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid >
            <Divider
                style={{ backgroundColor: 'white', padding: 0.2, marginLeft: 18, marginRight: 18, marginTop: 18 }} />
            <Grid container justify="center" style={{ textAlign: 'center' }} alignItems="center">
                <Grid item xs={12} sm={2}>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 12 }} underline="hover" color="inherit">
                            Sobre a CNN Brasil
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 12 }} underline="hover" color="inherit">
                            Termos de Uso
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 12 }} underline="hover" color="inherit">
                            Políticas de Privacidade
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 12 }} underline="hover" color="inherit">
                            Mapa do site
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h5" component="h5">
                        <Link href="#" style={{ fontSize: 12 }} underline="hover" color="inherit">
                            Fale com a CNN
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </footer >
    )
}

const useStyles = makeStyles(theme => ({
    contentFooter: {
        marginTop: 18
    },
    logo: {
        paddingTop: 8,
        paddingLeft: 18,
        flexGrow: 1,
        height: 20,
        textAlign: 'center',
        color: 'red'
    }
}));
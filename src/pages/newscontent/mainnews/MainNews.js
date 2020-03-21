import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
        label: 'Partido Comunista Chinês pede desculpas aos povos do globo afetados pelo Coronavirus ',
        imgPath:
            'https://media2.s-nbcnews.com/i/newscms/2020_12/3276296/200319-coronavirus-china-medical-worker-embrace-se-1112a_6ff1a5c3150a47cb91a79761d7a078da.jpg',
    },
    {
        label: 'Itália tenta se recuperar dos trágicos efeitos do COVID-19',
        imgPath:
            'https://static01.nyt.com/images/2020/03/20/science/20VIRUS-MEN1/merlin_170588286_b07ab661-2704-4b7e-b5ba-5b24ee604d5d-superJumbo.jpg',
    },
    {
        label: 'AO VIVO: país registra 18 mortos e atinge 1.028 casos de Coronavirus',
        imgPath:
            'https://www.jj.com.br/arquivos/2020/03/2020-03-08t152231z_1708130605_rc2rff95m4b7_rtrmadp_3_health-coronavirus-brazil.jpg',
    },
];

export default function MainNews() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStepChange = step => {
        setActiveStep(step);
    };
    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            //<img className={classes.img} src={step.imgPath} alt={step.label} />
                            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${step.imgPath})` }}>
                                {/* Increase the priority of the hero background image */}
                                {<img style={{ display: 'none' }} src={step.imgPath} alt={step.label} />}
                                <div className={classes.overlay} />
                                <Grid container direction="column-reverse">
                                    <Grid item md={6}>
                                        <div className={classes.mainFeaturedPostContent}>
                                            <Typography component="h2" variant="h4" color="inherit" gutterBottom>
                                                {step.label}
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                }
            />
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    /*img: {
        height: 325,
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        objectFit: 'cover'
    },*/
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 396
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        textShadow: '2px 2px #0000003b',  
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

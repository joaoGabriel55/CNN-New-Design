import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function BusinessCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardHeader
                    title="CNN Brasil Business"
                />
                <Divider style={{ padding: 2, marginBottom: 8, backgroundColor: "green" }}></Divider>
                <CardMedia
                    className={classes.media}
                    image="https://d.newsweek.com/en/full/1574193/us-stock-markets-coronavirus-economy-recession.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                        Em quanto tempo a Bolsa se recuperará? Entenda
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        É hora de comprar ações? Especialistas respondem
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" style={{ color: 'red' }}>
                    Ver mais
                </Button>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        maxHeight: 500
    },
    media: {
        height: 140,
    },
});

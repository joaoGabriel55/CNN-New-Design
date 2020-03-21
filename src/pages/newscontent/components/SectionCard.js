import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function SectionCard(props) {
    const { title, imageURL, links } = props
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardHeader
                    title={title}
                />
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                />
                <CardContent>
                    {links.map(news => (
                        news.exclusive ?
                            <>
                                <Typography gutterBottom variant="h6" component="h3">
                                    <Link href="#" onClick={preventDefault} underline="none" color="inherit">
                                        {news.title}
                                    </Link>
                                </Typography>
                            </> :
                            <>
                                <Typography
                                    style={{ marginBottom: 8, marginTop: 8 }}
                                    variant="body2"
                                    color="textSecondary"
                                    component="p">
                                    {news.title}
                                </Typography>
                                <Divider />
                            </>

                    ))}

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
        minHeight: 610
    },
    media: {
        height: 200,
    },
});

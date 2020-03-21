import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { sportsLinks, politicsLinks, techLinks, economyLinks, entreLinks, styleLinks } from '../models/News.js'

import AppToolbar from './apptoolbar/AppToolbar'
import BreakingNewsAlert from '../components/BreakingNewsAlert'
import MainNews from './newscontent/mainnews/MainNews';
import BusinessCard from './newscontent/secondarynews/BusinessCard';
import SectionCard from '../pages/newscontent/components/SectionCard'
import Footer from './footer/Footer.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignContent: 'center'
  },
  paper: {
    margin: 8,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} style={{ marginBottom: 18 }}>
          <AppToolbar />
          <BreakingNewsAlert text="São Paulo decreta quarentena por 15 dias a partir de terça" />
        </Grid>
        <Grid container spacing={3} item xs={12} sm={10} alignItems="center">
          <Grid item xs={12} sm={9}>
            <MainNews />
          </Grid>
          <Grid item xs={12} sm={3}>
            <BusinessCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SectionCard
              title="Política"
              imageURL="https://stream.aljazeera.com/sites/default/files/styles/fb_og_image/public/1461356914-BrazilPolitics.jpg?itok=ZFBN_vjp"
              links={politicsLinks} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SectionCard
              title="Esportes"
              imageURL="https://www.thisisanfield.com/wp-content/uploads/P2020-03-11-Liverpool_Atletico-84.jpg"
              links={sportsLinks} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SectionCard
              title="Tecnologia"
              imageURL="https://cdn.vox-cdn.com/thumbor/kkiYXsNoK1JJcx52_Dy0NYHQVG8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19526235/xboxseriesx.jpg"
              links={techLinks} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SectionCard
              title="Economia"
              imageURL="https://www.theneweconomy.com/wp-content/uploads/2014/09/Brazilian-Market.jpg"
              links={economyLinks} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SectionCard
              title="Entretenimento"
              imageURL="https://odia.ig.com.br/_midias/jpg/2019/08/14/000_1jj0ca-12611015.jpg"
              links={entreLinks} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SectionCard
              title="Estilo"
              imageURL="https://www.rollingstone.com/wp-content/uploads/2019/10/shutterstock_editorial_10101309cd.jpg"
              links={styleLinks} />
          </Grid>
        </Grid>
        <Grid style={{ marginTop: 28 }} container item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

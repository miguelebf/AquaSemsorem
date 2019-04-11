import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Tarjeta from '../Components/Tarjeta';

const styles = theme => ({
    root: {
        flexGrow: 1,
        
      },
});

class HomeView extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <div>
        <Grid container spacing={24} className={classes.grid}>
            
            <Grid item xs={4} className={classes.grid}>
              <Tarjeta title="Dispositivos Activos" valor="35" color="Green"></Tarjeta>
            </Grid>
            <Grid item xs={4} className={classes.grid}>
              <Tarjeta  title="Dispositivos Inactivos" valor="3" color="Red"></Tarjeta>
            </Grid>
            <Grid item xs={4} className={classes.grid}>
              <Tarjeta  title="Alertas Totales" valor="6" color="Red"></Tarjeta>
            </Grid>
            <Grid item xs={6} >
              {/* <TablaCamaronera titulo="Camaroneras" data="data"></TablaCamaronera> */}
            </Grid>
            <Grid item xs={6}>
              {/* <TablaPiscina titulo="Piscina" handleRender={this.props.handleRender}></TablaPiscina>  */}
            </Grid>     
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomeView);
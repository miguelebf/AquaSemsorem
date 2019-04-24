import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Tarjeta from '../Components/Tarjeta';
import TablaPiscinas from '../Components/TablaPiscinas';
import TablaCamaroneras from '../Components/TablaCamaroneras';
import on from '../Images/dispositivo_on.png';
import off from '../Images/dispositivo_off.png';
import alert from '../Images/alert.png';

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
        <Grid container spacing={24}>
            
            <Grid item xs={4} >
              <Tarjeta titulo="Dispositivos Activos" image={on} valor="35" color="Green"></Tarjeta>
            </Grid>
            <Grid item xs={4} className={classes.grid}>
              <Tarjeta  titulo="Dispositivos Inactivos" image={off} valor="3" color="Red"></Tarjeta>
            </Grid>
            <Grid item xs={4} className={classes.grid}>
              <Tarjeta  titulo="Alertas Totales" image={alert} valor="6" color="Red"></Tarjeta>
            </Grid>
            <Grid item xs={6} >
              <TablaCamaroneras/>
            </Grid>
            <Grid item xs={6}>
              <TablaPiscinas/>
            </Grid>     
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomeView);
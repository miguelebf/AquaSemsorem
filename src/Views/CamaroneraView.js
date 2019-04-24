import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Tarjeta from '../Components/Tarjeta';
import temp from '../Images/018-thermometer.png';
import alert from '../Images/alert.png';
import on from '../Images/dispositivo_on.png';
import off from '../Images/dispositivo_off.png';
import { Paper } from '@material-ui/core';
import TablaPiscinas from '../Components/TablaPiscinas';

//Own Components 

const styles = theme => ({
    title: {
        fontSize:22,
        fontWeight: "bold",
        padding: 15,
    },
  });

class CamaroneraView extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <div>
        <Grid container spacing={24}>
            <Grid item xs={12} >
                <Paper className={classes.title}> Camaronera 1 </Paper>
            </Grid>
            <Grid item xs={3} >
                <Tarjeta titulo="Dispositivos Actvios" image={on} valor="3" color="Green"  />
            </Grid> 
            <Grid item xs={3} >
                <Tarjeta titulo="Dispositivos Inactivos" image={off} valor="3" color="Red"  />   
            </Grid> 
            <Grid item xs={3} >
                <Tarjeta titulo="Temperatura Promedio" image={temp} valor="35°C" color="Green"  />
            </Grid> 
            <Grid item xs={3} >
                <Tarjeta titulo="Alertas" image={alert} valor="5" color="Red"  />
            </Grid>
            <Grid item xs={12} >
                <TablaPiscinas></TablaPiscinas>
            </Grid> 

        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CamaroneraView);

import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Tarjeta from '../Components/Tarjeta';
import temp from '../Images/018-thermometer.png';
import alert from '../Images/alert.png';
import on from '../Images/dispositivo_on.png';
import off from '../Images/dispositivo_off.png';
import baterry from '../Images/battery.png';
import signal from '../Images/signal.png';

import { Paper } from '@material-ui/core';
import TablaPiscinas from '../Components/TablaPiscinas';
import GraficoLineal from '../Components/GraficoLineal';

//Own Components 

const styles = theme => ({
    title: {
        fontSize:22,
        fontWeight: "bold",
        padding: 15,
    },
    textfield:{
        width:'100%',
    }
  });

class PiscinaView extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <div>
        <Grid container spacing={24}>
            <Grid item xs={12} >
                <Paper className={classes.title}> Piscina ps-001 
                    <Grid container spacing={24}>
                        <Grid item xs={6} >
                            <Grid container spacing={24}>
                            <Grid item xs={6} >
                            <TextField
                                className={classes.textfield}
                                label="Codigo"
                                value="ps-001"
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={6} >
                            <TextField
                                className={classes.textfield}
                                label="Camaronera"
                                value="Camaronera 1"
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} >
                        <Grid container spacing={24}>
                            <Grid item xs={6} >
                            <TextField
                                className={classes.textfield}
                                label="Dimension"
                                value="100 m2"
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>
                            <Grid item xs={6} >
                            <TextField
                                className={classes.textfield}
                                label="Profundidad"
                                value="3 m"
                                margin="normal"
                                variant="outlined"
                            />
                            </Grid>
                            </Grid>
                           
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={3} >
                <Tarjeta titulo="Estado" image={on} valor="Activo" color="Green"  />
            </Grid> 
            <Grid item xs={3} >
                <Tarjeta titulo="Señal" image={signal} valor="-132 dBm" color="Red"  />   
            </Grid> 
            <Grid item xs={3} >
                <Tarjeta titulo="Battery" image={baterry} valor="4000 mAh" color="Green"  />
            </Grid> 
            <Grid item xs={3} >
                <Tarjeta titulo="Alertas" image={alert} valor="5" color="Red"  />
            </Grid>
            <Grid item xs={12} >
                <GraficoLineal titulo={"Temperatura"} unit={"°C"} mayor={40} menor={38}></GraficoLineal>
            </Grid> 
            <Grid item xs={12} >
                <GraficoLineal titulo={"PH"} unit={"°C"} mayor={40} menor={38}></GraficoLineal>
            </Grid>
            <Grid item xs={12} >
                <GraficoLineal titulo={"Oxigeno Disuelto OD"} unit={"°C"} mayor={40} menor={38}></GraficoLineal>
            </Grid>
            <Grid item xs={12} >
                <GraficoLineal titulo={"Temperatura"} unit={"°C"} mayor={40} menor={38}></GraficoLineal>
            </Grid>
            <Grid item xs={12} >
                <GraficoLineal titulo={"Temperatura"} unit={"°C"} mayor={40} menor={38}></GraficoLineal>
            </Grid>
             

        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PiscinaView);

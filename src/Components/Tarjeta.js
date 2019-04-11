import React from 'react';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
     
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

class Tarjeta extends React.Component {
    
    render () {
      const { classes } = this.props;
    return (
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom >
        {this.props.title}  
        </Typography>
        <Typography className={classes.title} align="center" style={{ fontSize: '32px' ,color:this.props.color }}>
        {this.props.valor}  
        </Typography>    
      </CardContent>
      <CardActions>
        <Button size="small" style={{ fontSize: '10px'}}>Ver más...</Button>
      </CardActions>
    </Card>
      );
    }
  }
  
  
  export default withStyles(styles)(Tarjeta);
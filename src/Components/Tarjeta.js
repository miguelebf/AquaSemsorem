import React from 'react';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
     
      
    },
    bullet: {
      display: 'inline-block',
      
      transform: 'scale(0.8)',
    },
    title: {
      fontSize:18,
      fontWeight: "bold",

    },
    avatar: {
      margin: 10,
      width: 40,
      height: 40,
    },
  };

class Tarjeta extends React.Component {
    
    render () {
      const { classes,titulo,image  } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader 
          classes={{
            title: classes.title,
          }}
          title={titulo}
          avatar={<Avatar src={image} className={classes.avatar} />}
        />

        <CardContent>
          <Typography className={classes.title} align="center" style={{ fontSize: '32px' ,color:this.props.color }}>
            {this.props.valor}  
          </Typography>    
        </CardContent>
      </Card>
      );
    }
  }
  
  
  export default withStyles(styles)(Tarjeta);
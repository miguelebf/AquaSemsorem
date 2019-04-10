import React from 'react'

//Material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css'
 

//Own Components
import AppBarSimple from '../Components/AppBarSimple'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
        width: 275,
        
    },
    title: {
        fontSize: 18,
      },
    space:{marginTop:30},
  });

class LoginView extends React.Component{
    render(){
        const { email, password , error , onChange, onClick, onKeyPress,loading } = this.props;
        return(
            <div className="App-background">
                <AppBarSimple/>
                <div className={this.props.classes.root}/>
                <Grid
                    container spacing={24} 
                    direction="column"
                    alignItems="center">
            
                    <Grid item xs={12}>
                        <Card className={this.props.classes.card} >
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Bienvenido
                                </Typography>
                                <TextField
                                    name="email"
                                    label="Email"
                                    type="email"
                                    value={email}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={onChange}
                                    onKeyPress={onKeyPress}
                                    />
                                <TextField
                                    name="password"
                                    label="Contraseña"
                                    value={password}
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={onChange}
                                    onKeyPress={onKeyPress}
                                    />
                                <Button variant="contained"  color="primary" onClick={onClick} className={this.props.classes.space}>
                                    Ingresar
                                </Button>
                                <div>
                                {error && <p style={{color : "red"}} >{error.message}</p>}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(LoginView)
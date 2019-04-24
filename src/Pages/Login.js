import React from 'react'

//Own Components
import {withFirebase} from '../Firebase'
import LoginView from '../Views/LoginView'
import { withRouter } from 'react-router-dom';


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    loading:false,
  };

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }
      onChange = event => {
        this.setState({ error:null });
        this.setState({ [event.target.name]: event.target.value });
      };
    
      onClick = event => {
      
        const { email, password } = this.state;
        this.setState({loading:true})
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push("/home")
          })
          .catch(error => {
            this.setState({ error ,loading:false,});
          });
    
        event.preventDefault();
      };
      onKeyPress = (event) => {
        if (event.key === 'Enter') {
        const { email, password } = this.state;
        this.setState({ loading:true });
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push("/home")
          })
          .catch(error => {
            this.setState({ error });
            this.setState({ loading:false });
          });
    
        event.preventDefault();
        }
      };
    render(){
        return(
            <LoginView {...this.state} onChange={this.onChange} onClick={this.onClick} onKeyPress={this.onKeyPress} />
        );
    }
}

export default withRouter(withFirebase(Login))
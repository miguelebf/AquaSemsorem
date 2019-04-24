import React from 'react';

import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { withFirebase } from './Firebase/index';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Loading from './Pages/Loading';
import Camaroneras from './Pages/Camaroneras';
import Camaronera from './Pages/Camaronera';
import Piscinas from './Pages/Piscinas';
import Piscina from './Pages/Piscina';
import './App.css'

//Components
import Layout from './Components/Layout'




class Router extends React.Component{

    constructor(props) {
        super(props);   
        this.state = {
          authUser: 'init',
        };
    }
      
    componentWillMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
          authUser => {
            authUser
              ? this.setState({ authUser })
              : this.setState({ authUser: null });
          },
        );
    }
    
    componentWillUnmount() {
        this.listener();
    }
    
    render(){
        return( 
            <div className="App-Main">
                
                <ReactRouter>
                        <Switch>
                            { this.state.authUser==='init' ?   
                                    <Route path="/" component={Loading}/>                          
                                    : 
                                    this.state.authUser ?
                                            <Layout>
                                                <Route exact path="/" component={ Home }/>
                                                <Route exact path="/home" component={Home}/>
                                                <Route exact path="/camaroneras" component={Camaroneras}/>
                                                <Route exact path="/camaronera" component={Camaronera}/>
                                                <Route exact path="/piscinas" component={Piscinas}/>
                                                <Route exact path="/piscina" component={Piscina}/>
                                            </Layout>
                                    :   
                                    <div> 
                                        <Route exact path="/" component={ Login }></Route>
                                    </div>
                            }
                        </Switch>
                </ReactRouter>
            </div>
        );

    }
}

export default withFirebase(Router)
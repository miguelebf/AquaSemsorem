import React from 'react';

import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { withFirebase } from './Firebase/index';
import Home from './Pages/Home';
import Login from './Pages/Login';

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
                
                <ReactRouter>
                        <Switch>
                            { this.state.authUser==='init' ?   
                                    <Route path="/" component={Home}/>                          
                                    : 
                                    this.state.authUser ?
                                            <Layout>
                                                <Route exact path="/" component={ Home }/>
                                                <Route exact path="/home" component={Home}/>
                                            </Layout>
                                    :   
                                    <div> 
                                        <Route exact path="/" component={ Login }></Route>
                                    </div>
                            }
                        </Switch>
                </ReactRouter>
        );

    }
}

export default withFirebase(Router)
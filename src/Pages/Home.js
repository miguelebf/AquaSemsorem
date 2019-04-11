import React from 'react';

//Own Components 
import { withFirebase } from '../Firebase';
import HomeView from '../Views/HomeView';

class Home extends React.Component{
  render(){
    return(
      <div>
        <HomeView/>
      </div>
    );
  }
}

export default withFirebase(Home);

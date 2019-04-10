import React from 'react';

//Own Components 
import { withFirebase } from '../Firebase';

class Home extends React.Component{
  render(){
    return(
      <div>
        Home
      </div>
    );
  }
}

export default withFirebase(Home);
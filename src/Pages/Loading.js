import React from 'react'

//Own Components
import {withFirebase} from '../Firebase'

class Loading extends React.Component{
    render(){
        return(
            <div>Loading</div>
        );
    }
}

export default withFirebase(Loading)
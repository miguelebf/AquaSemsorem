import React from 'react'

//Material Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class LoadingView extends React.Component{
    render(){
        return(
            <div>
                Loading View
            </div>
        );
    }
}

export default withStyles(LoadingView)
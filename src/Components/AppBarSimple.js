import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//Styles
const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

class AppBarSimple extends React.Component {

  render () {
  const { classes } = this.props;
  return (
    <div >
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap >
            Aquasensorem
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppBarSimple);
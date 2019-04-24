import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';

//Icons 
import Assignment from '@material-ui/icons/Assignment';
import Home from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DonutLarge from '@material-ui/icons/DonutLarge';
import BarChartIcon from '@material-ui/icons/BarChart';
import  ListAlt     from '@material-ui/icons/ListAlt';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MobileFriendly from '@material-ui/icons/MobileFriendly';
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode';
import Work from '@material-ui/icons/Work';
import { Divider } from '@material-ui/core';

import { withFirebase } from '../Firebase/index';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ListItems extends React.Component {

  state = {
    openApp: false,
    openOperaciones: false,
  };

  handleClickOp = () => {
    this.setState(state => ({ openOperaciones: !state.openOperaciones }));
  };

  handleClickApp = () => {
    this.setState(state => ({ openApp: !state.openApp }));
  };

  render() {
    const { classes,onMouseOver } = this.props;

    return (
      <div>
        <Divider/>
          <List
            component="nav"
            className={classes.root}
            
          >
          <ListItem button component={Link} to='/home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText inset primary="Inicio" />
          </ListItem>

          <ListItem button component={Link} to='/camaroneras'>
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText inset primary="Camaroneras" />
          </ListItem>

          <ListItem button component={Link} to='/piscinas'>
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText inset primary="Piscinas" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <NotificationImportant />
            </ListItemIcon>
            <ListItemText inset primary="Alertas" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText inset primary="Estadisticas" />
          </ListItem>

          <ListItem button >
            <ListItemIcon>
              <ChromeReaderMode />
            </ListItemIcon>
            <ListItemText inset primary="Reportes" />
          </ListItem>
          </List>
          
        <Divider/>

        <List onMouseOver={onMouseOver}>
          <ListItem button>
            <ListItemIcon>
            <Settings />
            </ListItemIcon>
            <ListItemText inset primary="Confguracion" />
          </ListItem>

          <ListItem button onClick={this.props.firebase.doSignOut} component={Link} to='/'>
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText inset primary="Salir" />
          </ListItem>
        </List>
      </div>
      );
    }
}

ListItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withFirebase(withStyles(styles)(ListItems));
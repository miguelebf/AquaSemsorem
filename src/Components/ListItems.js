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
import Receipt from '@material-ui/icons/Receipt';
import Money from '@material-ui/icons/AttachMoney';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MobileFriendly from '@material-ui/icons/MobileFriendly';
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
    const { classes } = this.props;

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

          <ListItem button>
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText inset primary="Facturacion" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Money />
            </ListItemIcon>
            <ListItemText inset primary="Financiero" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText inset primary="Contabilidad" />
          </ListItem>

          <ListItem button onClick={this.handleClickOp}>
            <ListItemIcon>
              <DonutLarge />
            </ListItemIcon>
            <ListItemText inset primary="Operaciones" />
            {this.state.openOperaciones ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.openOperaciones} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to="/home/operations/">
                  <ListItemIcon>
                    <Receipt />
                  </ListItemIcon>
                  <ListItemText inset primary="Operaciones" />
              </ListItem>
              <ListItem button className={classes.nested} component={Link} to="/home/operations/ships">
                  <ListItemIcon>
                    <Receipt />
                  </ListItemIcon>
                  <ListItemText inset primary="Barcos" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText inset primary="Reportes" />
          </ListItem>

          <ListItem button onClick={this.handleClickApp}>
            <ListItemIcon>
              <MobileFriendly />
            </ListItemIcon>
            <ListItemText inset primary="App" />
            {/* Ojo ... condition ? value-if-true : value-if-false */}
            {this.state.openApp ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          
          <Collapse in={this.state.openApp} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested} component={Link} to="/home/app/reports">
                <ListItemIcon>
                  <Receipt />
                </ListItemIcon>
                <ListItemText inset primary="Reportes"/>
              </ListItem>
            </List>
          </Collapse>
          
          </List>
          
        <Divider/>

        <List>
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
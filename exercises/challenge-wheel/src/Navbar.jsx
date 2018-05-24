import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class Navbar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle style={{padding: "25px"}} text="Challenge Wheel" />
        </ToolbarGroup>
        <ToolbarGroup>
          <FontIcon className="muidocs-icon-custom-sort" />
          <Link to="/create"><RaisedButton label="Create Challenge" primary={true} /></ Link>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
           >
            <MenuItem primaryText="Other Menu" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

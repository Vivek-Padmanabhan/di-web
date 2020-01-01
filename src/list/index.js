import React from 'react';

import { makeStyles } from '@material-ui/styles';

import MaterialList from '@material-ui/core/List';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemText from '@material-ui/core/ListItemText';

const merge = require('lodash.merge');

const style = {};

const List = (props) => {
  let list = props[props.value];

  let key = props.child_key;

  return (
    <MaterialList>
      { list.map((item) => {
          let key = props.child_key;

          let component_props = merge({}, props, { key: item[key], value: item });

          return React.createElement(ListItem, component_props, null);
      }) }
    </MaterialList>
  )
}

const ListItem = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ primary: (typeof props.primary_style === 'undefined') ? style : props.primary_style,
                                 secondary: (typeof props.secondary_style === 'undefined') ? style : props.secondary_style });
  const classes = useStyles();

  // Event Handler
  //
  const handleClick = (event) => {
    let config = props.onClick;

    let action = props[config['action']];
    let container = config['container'];

    action({ props, container });

    event.preventDefault();
  }

  return (
    <MaterialListItem onClick={ (e) => handleClick(e) }>
      <MaterialListItemText primary={ props.value[props.primary_text] } primaryTypographyProps={ { className: classes.primary } } secondary={ props.value[props.secondary_text] } secondaryTypographyProps={ { className: classes.secondary } }/>
    </MaterialListItem>
  )
}

export default List;

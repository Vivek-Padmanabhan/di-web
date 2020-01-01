import React from 'react';

import { makeStyles } from '@material-ui/styles';

import MaterialIcon from '@material-ui/core/Icon';

const style = {};

const Icon = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ icon: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  // Event Handler
  //
  const handleClick = (event) => {
    let config = props.onClick;

    let action = props[config['action']];
    let container = config['container'];

    action({ props, container });

    event.preventDefault();
  };

  return (
    <MaterialIcon className={ classes.icon } {...child_props} onClick={ (e) => handleClick(e) }>{ props.icon }</MaterialIcon>
  )
}

export default Icon;

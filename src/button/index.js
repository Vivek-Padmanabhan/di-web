import React from 'react';

import { makeStyles } from '@material-ui/styles';

import MaterialButton from '@material-ui/core/Button';

const style = {};

function Button(props) {
  // Styles
  //
  const useStyles = makeStyles({ button: (typeof props.style === 'undefined') ? style : props.style });
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
    <MaterialButton className={ classes.button } {...child_props} onClick={ (e) => handleClick(e) }>{ props.label }</MaterialButton>
  );
}

export default Button;

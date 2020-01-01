import React from 'react';

import { makeStyles } from '@material-ui/styles';

import TextField from '@material-ui/core/TextField';

const merge = require('lodash.merge');

const style = {};

const Input = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ input: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  // Event Handler
  //
  let prop_value = (typeof props[props.value] === 'undefined') ? "" : props[props.value];

  const handleChange = (event) => {
    let config = props.onChange;
    let value = event.target.value;

    let action = props[config['action']];
    let container = config['container'];

    let component_props = merge({}, props, { value });

    action({ props: component_props, container });
  }

  return (
    <TextField label={ props.label } value={ prop_value } className={ classes.input } {...child_props} onChange={ (e) => handleChange(e) }/>
  )
}

export default Input;

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const merge = require('lodash.merge');

const style = {};

const DateField = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ date: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  // Event Handler
  //
  let date = new Date();
  let today = [String(date.getFullYear()), String(date.getMonth()).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-')
  let props_value = (typeof props[props.value] === 'undefined') ? today : props[props.value];

  const handleChange = (event) => {
    let config = props.onChange;
    let value = event.target.value;

    let action = props[config['action']];
    let container = config['container'];

    let component_props = merge({}, props, { value });

    action({ props: component_props, container });
  };

  return (
    <TextField type="date" label={ props.label } value={ props_value } className={ classes.date } {...child_props} onChange={ (e) => handleChange(e) }/>
  )
}

export default DateField;

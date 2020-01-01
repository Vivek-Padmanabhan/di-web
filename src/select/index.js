import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MaterialSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const merge = require('lodash.merge');

const style = {};

const Select = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ select: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  // Event Handler
  //
  let options = props[props.options];


  const handleChange = (event) => {
    let config = props.onChange;
    let value = event.target.value;

    let action = props[config['action']];
    let container = config['container'];

    let component_props = merge({}, props, { value: options[value][props.input] });

    action({ props: component_props, container });
  }

  const findOption = (option) => {
    let option_key = option[props.input];
    let option_value = props[props.value];

    if (typeof option_value === 'undefined') {
      return option_key === "";
    } else {
      return option_key === option_value;
    }
  }

  const findValue = () => {
    let option = options.find(findOption);
    return (typeof option === 'undefined') ? "" : options.indexOf(option);
  }

  return (
    <FormControl className={ classes.select } {...child_props}>
      <InputLabel htmlFor={ props.option }>{ props.label }</InputLabel>
      <MaterialSelect value={ findValue() } onChange={ (e) => handleChange(e) } input={ <Input name={ props.options } id={ props.option } /> }>
        { options.map((option, index) => <MenuItem key={ index } value={ index }>{ option[props.option] }</MenuItem>) }
      </MaterialSelect>
    </FormControl>
  )
}

export default Select;

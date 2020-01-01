import React from 'react';

import { makeStyles } from '@material-ui/styles';

import MaterialTypography from '@material-ui/core/Typography';

const style = {};

const Typography = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ text: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  // Text
  //
  const text = (typeof props.value === 'undefined') ? props.text : props[props.value];

  return (
    <MaterialTypography className={ classes.text } {...child_props}>{ text }</MaterialTypography>
  )
}

export default Typography;

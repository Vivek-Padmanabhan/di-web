import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const style = {};

const Progress = (props) => {

  // Styles
  //
  const useStyles = makeStyles({ progress: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  return (
    <CircularProgress className={ classes.progress } {...child_props}/>
  )
}

export default Progress;

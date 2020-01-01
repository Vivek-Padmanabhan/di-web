import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const style = {};

const Card = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ card: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  return (
    <Paper className={ classes.card } {...child_props}>
      { props.children }
    </Paper>
  )
}

export default Card;

import React from 'react';

import { makeStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import MaterialGrid from '@material-ui/core/Grid';
import MaterialBox from '@material-ui/core/Box';

const style = {};

const Box = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ box: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  return (
    <MaterialBox className={ classes.box } {...child_props}>
      { props.children }
    </MaterialBox>
  )
}

const Grid = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ grid: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  return (
    <Container className={ classes.grid } {...child_props}>
      { props.children }
    </Container>
  )
}

const Row = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ row: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  return (
    <MaterialGrid className={ classes.row } {...child_props} container>
      { props.children }
    </MaterialGrid>
  )
}

const Cell = (props) => {
  // Styles
  //
  const useStyles = makeStyles({ cell: (typeof props.style === 'undefined') ? style : props.style });
  const classes = useStyles();

  // Props
  //
  const child_props = (typeof props.child_props === 'undefined') ? {} : props.child_props;

  return (
    <MaterialGrid className={ classes.cell } {...child_props} item>
      { props.children }
    </MaterialGrid>
  )
}

export { Box, Grid, Row, Cell };

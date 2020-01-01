import React from 'react';

const Form = (props) => {
  const handleSubmit = (event) => {
    let config = props.onSubmit;

    let action = props[config['action']];
    let container = config['container'];

    action({ props, container });

    event.preventDefault();
  }

  return (
    <form onSubmit={ (e) => handleSubmit(e) }>
      { props.children }
    </form>
  );
}

export default Form;

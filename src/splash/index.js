import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let props = this.props;
    let config = props.onMount;

    let action = props[config['action']];
    let container = config['container'];

    action({ props, container });
  }

  render() {
    return (
      <div>
        <p>Loading..</p>
      </div>
    )
  }
}

export default Splash;

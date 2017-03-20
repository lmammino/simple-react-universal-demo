/* eslint react/forbid-prop-types: "off" */

import React from 'react';

export class NotFound extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.is404 = true;
    }
  }

  render() {
    return (<div>
      <h1>404!</h1>
      <h2>Page not found</h2>
    </div>);
  }
}

NotFound.propTypes = {
  staticContext: React.PropTypes.object,
};

NotFound.defaultProps = {
  staticContext: {
    is404: false,
  },
};

export default NotFound;

import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import throttle from 'lodash.throttle';
// import actionCreators from './redux/actionCreators';
import Page from './styled/page';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleClick = () => {
  }

  render() {
    return (
      <Page
      />
    );
  }
}

export default App;

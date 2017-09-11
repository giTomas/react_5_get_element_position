import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Page from './styled/page';
import debounce from 'lodash.debounce';
import actionCreators from './redux/actionCreators';

class App extends PureComponent {

  componentDidMount() {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.props.updateWindowWidth(width);

    window.addEventListener('resize', debounce(this.handleWindowResize, 100));
  }

  componentWillUnmount() {
    window.addEventListener('resize', debounce(this.handleWindowResize, 100));
  }

  handleWindowResize = () => {
    const width = Math.max(document.documentElement.clientWidth);
    this.props.updateWindowWidth(width);
  }

  render() {
    return (
      <Page />
    );
  }
}

const mapStateToProps = (state) => ({
  // ...state,
});

const mapDispatchToProps = (dispatch) => ({
  updateWindowWidth: (wWidth) => { dispatch(actionCreators.updateWindowWidth(wWidth))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

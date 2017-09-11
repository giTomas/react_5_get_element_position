import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Page from './styled/page';
import getGridCoords from './grid/';
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

  // handleClickOnTarget = (ref, target) => {
  //   const coords = ref.getBoundingClientRect();
  //
  //   this.props.updateXYCoords(coords);
  //   this.props.setActive(target);
  // }

  handleWindowResize = () => {
    const width = Math.max(document.documentElement.clientWidth);
    this.props.updateWindowWidth(width);

  }

  render() {
    return (
      <Page
        // {...this.state}
        // handleClick={this.handleClickOnTarget}
        // handleGenerateNewGrid={this.handleGenerateNewGrid}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  // ...state,
});

const mapDispatchToProps = (dispatch) => ({
  updateWindowWidth: (wWidth) => {dispatch(actionCreators.updateWindowWidth(wWidth))},
  updateXYCoords: (coords) => {dispatch(actionCreators.updateXYCoords(coords))},
  updateGridCoords: () => {dispatch(actionCreators.updateGridCoords())},
  setActive: (target) => {dispatch(actionCreators.setActive(target))},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

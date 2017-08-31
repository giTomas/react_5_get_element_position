import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import throttle from 'lodash.throttle';
import actionCreators from './redux/actionCreators';
import Page from './styled/page';

class App extends PureComponent {

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 100), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll, 100), false);
  }

  handleScroll = () => {
    const scrollY = parseInt(window.pageYOffset);
    const height = this.refElem.offsetHeight
    const wHeight = window.innerHeight
    const progress = Math.ceil(scrollY / ((height-wHeight)/100))
    // this.setState({progress});
    this.props.updateProgress(progress);
  }

  render() {
    return (
      <Page
        progress={this.props.progress}
        parentRef={(elem) => {this.refElem = elem}}
      />
    );
  }
}

const mapStateToProps = state => ({
  progress: state.progress,
});

const mapDispatchToProps = dispatch => ({
  updateProgress: progress => {
    dispatch(actionCreators.updateProgress(progress));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

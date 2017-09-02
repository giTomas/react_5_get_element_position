import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import throttle from 'lodash.throttle';
// import actionCreators from './redux/actionCreators';
import Page from './styled/page';

// const range = (amount) => {
//   let range = [];
//   for (let i = 1; i < amount+1; i++ ) {
//     range.push(`target-${i}`);
//   }
//   return range;
// }
//
// class getCoords {
//   constructor() {
//
//   }
//
//
// }

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      coordinates: {
        x: null,
        y: null,
        top: null,
        bottom: null,
        right: null,
        left: null,
      },
      targets: Array.from({length: 8}, (_,i) => `target-${i+1}`),
      active: null,
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  handleClickOnTarget = (ref, target) => {
    const coords = ref.getBoundingClientRect();
    this.setState({
      coordinates: {
        x: Math.round(coords.x),
        y: Math.round(coords.y),
        top: Math.round(coords.bottom) || null,
        left: Math.round(coords.left) || null,
        bottom: Math.round(coords.bottom) || null,
        right: Math.round(coords.right) || null,
      },
      active: target,
      showModal: true,
    })
  }

  handleCloseModal = () => {
    this.setState({showModal: false, active: null})
  }

  render() {
    return (
      <Page
        {...this.state}
        handleClick={this.handleClickOnTarget}
      />
    );
  }
}

export default App;

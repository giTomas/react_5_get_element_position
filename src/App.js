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
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(`
      w: ${w}
      h: ${h}
    `)
  }

  componentWillUnmount() {
  }

  handleClickOnTarget = (ref, target) => {
    const coords = ref.getBoundingClientRect();
    this.setState({
      coordinates: {
        x: Math.round(coords.x),
        y: Math.round(coords.y),
        width: coords.width,
        top: Math.round(coords.bottom) || null,
        left: Math.round(coords.left) || null,
        // cssBottom = viewpor.height - coords.y
        bottom: Math.round(coords.bottom) || null,
        // cssRight = viewpport.width - coords.x
        right: Math.round(coords.right) || null,
      },
      active: target,
      showModal: true,
    });
  }

  handleCloseModal = () => {
    this.setState({showModal: false, active: null})
  }

  render() {
    return (
      <Page
        {...this.state}
        handleClick={this.handleClickOnTarget}
        handleCloseModal={this.handleCloseModal}
      />
    );
  }
}

export default App;

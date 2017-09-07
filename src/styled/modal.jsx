import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import actionCreators from '../redux/actionCreators';

const show = keyframes`
  from {
    opacity: 0;
  }
`;

const ModalContent = styled.div`
  font-size: 2em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(400px + var(--vertical-rhytm) * 4);
  min-width: 250px;
  padding: calc(var(--vertical-rhytm) * 2) calc(var(--vertical-rhytm) * 4);
  line-height: var(--line-height);
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  animation: 0.5s ${show} ease-out;
  z-index: 400;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 1em;
  width: 1em;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    left: 49%;
    width: 3px;
    height: 1em;
    background-color: black;
    transform: rotate(-45deg);
  }
  &::after {
    content: '';
    position: absolute;
    left: 49%;
    width: 3px;
    height: 1em;
    background-color: black;
    transform: rotate(45deg);
  }
`;

export const Orange = styled.span`
  color: orange;
`;

const matchNumber = str => (parseInt(str.match(/\d+/),10)+1);

const Modal = ({coordinates, handleCloseModal, active}) => (
    <ModalContent>
        <p>Target: <Orange>{matchNumber(active)}</Orange></p>
        <p>x: <Orange>{coordinates.x}px</Orange></p>
        <p>y: <Orange>{coordinates.y}px</Orange></p>
      <ModalClose onClick={handleCloseModal} />
    </ModalContent>
);

const mapStateToProps = (state) => ({
  coordinates: state.coordinates,
  active: state.active,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseModal: () => {dispatch(actionCreators.closeModal())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

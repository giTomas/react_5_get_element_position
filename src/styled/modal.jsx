import React from 'react';
import styled, { keyframes } from 'styled-components';

const showModal = keyframes`
  from {
    ${'' /* transform: scale(0); */}
    opacity: 0;
  }
`
// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(255, 255, 255, 0);
//
//   z-index: 400;
// `;

const ModalContent = styled.div`
  font-size: 2em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  min-width: 250px;
  padding: var(--vertical-rhytm) calc(var(--vertical-rhytm)*2);
  line-height: var(--line-height);
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);
  animation: 0.5s ${showModal} ease-out;
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
    ${'' /* transform-origin: top; */}
    transform: rotate(-45deg);
  }
  &::after {
    content: '';
    position: absolute;
    left: 49%;
    width: 3px;
    height: 1em;
    background-color: black;
    ${'' /* transform-origin: top; */}
    transform: rotate(45deg);
  }
`;

const matchNumber = str => (parseInt(str.match(/\d+/),10)+1);

const Modal = ({coordinates, handleCloseModal, active}) => (
    <ModalContent>
        <p>Target: {matchNumber(active)}</p>
        <p>x: {coordinates.x}px</p>
        <p>y: {coordinates.y}px</p>
      <ModalClose onClick={handleCloseModal} />
    </ModalContent>
);

export default Modal;

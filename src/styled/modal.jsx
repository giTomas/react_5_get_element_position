import React from 'react';
import styled, { keyframes } from 'styled-components';

const showModal = keyframes`
  from {
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
  max-width: 350px;
  padding: var(--vertical-rhytm) calc(var(--vertical-rhytm)*2);
  line-height: var(--line-height);
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);
  animation: 0.5s ${showModal} ease-out;
  z-index: 400;
`;

const Modal = ({coordinates, handleCloseModal}) => (
    <ModalContent
      onClick={handleCloseModal}>
        <p>x: {coordinates.x}px</p>
        <p>y: {coordinates.y}px</p>
    </ModalContent>
);

export default Modal;

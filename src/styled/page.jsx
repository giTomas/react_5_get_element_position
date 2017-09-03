import styled, { keyframes } from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: var(--vertical-rhytm);
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  ${'' /* grid-auto-columns: 100px; */}
  grid-auto-rows: 5em;
`;

// const Instructions = styled.h2`
//   font-size: 2em;
//   color: var(--color);
//   font-weight: 200;
//   margin-bottom: calc(var(--vertical-rhytm)/2);
// `;


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

const AttachedRef = ({className, children, handleClick, number, target}) => {
  let ref = null;
  return (
    <div
      ref={(elem) => {ref = elem;}}
      onClick={() => handleClick(ref, target)}
      className={className}>
      {children}
    </div>
  );
}

const TargetElement = styled(AttachedRef)`
  height: 4em;
  width: 4em;
  --color-active: ${props => props.active ? 'orange' : 'black'};
  background-color: var(--color-active);
  margin: 0.5em;
  position: relative;
  border-radius: 50%;
  z-index: 1;
  align-self: ${props => props.even ? 'flex-end' : 'auto'};
  transition: background-color 0.2s linear;
  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 66.66%;
    width: 66.66%;
    background-color: orange;
    z-index: 50;
    border-radius: 50%;
  }
  &::after {
    position: absolute;
    ${props => `content: '${props.number || 0}';`};
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.active ? 'black' : 'white'};
    height: 33.33%;
    width: 33.33%;
    ${'' /* line-height: 2; */}
    background-color: var(--color-active);
    z-index: 100;
    border-radius: 50%;
    transition: background-color 0.1s linear,
    color 0.1s linear;
  }
`;

const Page = ({
  showModal,
  handleCloseModal,
  coordinates,
  targets,
  active,
  handleClick,
}) => (
  <Wrapper>
    <Container>
      <GridContainer>
        {
          targets.map((target,i) => (
          <TargetElement
            key={target}
            handleClick={handleClick}
            number={i+1}
            target={target}
            even={i%2}
            active={active === target}/>
          ))
        }

      </GridContainer>
      {
        showModal &&
        <Modal
          coordinates={coordinates}
          handleCloseModal={handleCloseModal}>
        </Modal>
      }
    </Container>
  </Wrapper>
);

export default Page;

import React from 'react';
import styled from 'styled-components';

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
  grid-column-start: ${props => props.grid[0] || 'auto'};
  grid-column-end: ${props => props.grid[0]+1 || 'auto'};
  grid-row-start: ${props => props.grid[1] || 'auto'};
  grid-row-end: ${props => props.grid[1]+1 || 'auto'};
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

export default TargetElement;

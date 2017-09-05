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
  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &:nth-child(3) {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &:nth-child(4) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &:nth-child(5) {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &:nth-child(6) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  &:nth-child(7) {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  &:nth-child(8) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;

export const TargetElement2 = styled(AttachedRef)`
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

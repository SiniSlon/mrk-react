import React from 'react';
import styled from 'styled-components';
import { SvgIconTypeMap } from '@mui/material';

type ButtonColor = 'blue' | 'green' | 'red';
type ButtonSize = 'small' | 'medium' | 'large';

interface IProps {
  icon: SvgIconTypeMap,
  title: string,
  color: ButtonColor,
  size: ButtonSize,
  hover: boolean,
  func: () => void,
}

const ButtonWhitIcon: React.FC<IProps> = ({ icon, title, size, color, hover, func }) => {

  return (
    <Body size={size} color={color} hover={hover} onClick={() => func()}>
      {icon} {title}
    </Body>
  )
}

export default ButtonWhitIcon;

interface IStylesProps {
  color?: ButtonColor,
  size?: ButtonSize,
  hover: boolean,
}

const Body = styled.button<IStylesProps>`
  display: flex;
  align-items: center;
  padding: 0.3em 0.6em;
  color: ${(props) => props.color === 'blue' ? '#005aff' : props.color === 'green' ? 'green' : props.color === 'red' ? 'red' : 'black'};
  border: 2px solid ${(props) => props.color === 'blue' ? '#005aff' : props.color === 'green' ? 'green' : props.color === 'red' ? 'red' : 'black'};
  border-radius: 5px;
  font-size: ${(props) => props.size === 'small' ? '14px' : props.size === 'medium' ? '16px' :  props.size === 'large' ? '18px' : '14px'};
  margin: 0 10px 0 0;  
  background: white;
  cursor: pointer;
  
  :hover {
    color: ${(props) => props.hover && props.color};
  }

  svg:first-of-type {
    margin-right: 0.3em;
  }
`;

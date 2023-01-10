import React from 'react';
import styled from 'styled-components';
import { mainFontFamily } from '../../../utils/stylesSettings';


interface IProps {
	section: string,
	names: String[],
	setSection: Function,	
	backColor?: string,
	fontColor?: string,
}

const AsideMenu: React.FC<IProps> = ({ section, names, setSection, backColor, fontColor }) => {

  return (
    <Aside
			backColor={backColor}
			fontColor={fontColor}
		>
			{names.map((item, index) => (
				<div 
					key={index} 
					className={section === item? 'button active' : 'button'}
					onClick={() => setSection(item)}
				>
					{item}
				</div>
			))}
		</Aside>
	)
}

export default AsideMenu;

interface IStylesProps {
	backColor?: string,
	fontColor?: string,
}

const Aside = styled.aside<IStylesProps>`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
	width: 300px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #186ddd;
    cursor:pointer;
		padding: 15px;
    color: white;
    font-family: ${mainFontFamily};
    font-size: 18px;
    border-bottom: 1px solid #00000034;

    :last-child {
      border-bottom: none;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    :first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    :hover{
      background-color:#4785d6;
    } 
  }

    .active {
      background-color:#4785d6;
    }
`;

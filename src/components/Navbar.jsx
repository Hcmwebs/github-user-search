import React from 'react'
import styled from 'styled-components'
import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'
import { LightBtn, DarkBtn } from './index'

const Navbar = ({ toggleTheme, theme }) => {
	return (
		<Wrapper className='sectionCenter'>
			<a href='#' className='logo'>
				devfinder
			</a>
			{theme === 'lightTheme' ? (
				<DarkBtn toggleTheme={toggleTheme} />
			) : (
				<LightBtn toggleTheme={toggleTheme} />
			)}
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		font-size: 1.625rem;
		line-height: 2.4375rem;
		font-weight: var(--bold);
		color: var(--logoColor);
	}

	.toggleBtn {
		padding: 0.75rem 1.5rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;
		text-transform: uppercase;
		background-color: transparent;
		font-size: 0.8125rem;
		font-weight: var(--bold);
		line-height: 1.1875rem;
		color: var(--themeBtnColor);
		transition: var(--transition-3);
		&:hover {
			color: var(--themeBtnHoverColor);
		}

		/* svg {
			width: 20px;
			height: 20px;
			color: var(--themeBtnColor);
			&:hover {
				color: var(--themeBtnHoverColor);
			}
		} */
	}
`

export default Navbar

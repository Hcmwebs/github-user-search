import React from 'react'
import styled from 'styled-components'
import sun from '../assets/icon-sun.svg'
const Navbar = () => {
	return (
		<Wrapper className='sectionCenter'>
			<a href='#' className='logo'>
				devfinder
			</a>
			<button className='toggleBtn'>
				<small>light</small>
				<img src={sun} alt='light icon' />
			</button>
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
		color: white;
	}

	.toggleBtn {
		padding: 0.75rem 1.5rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;
		text-transform: uppercase;
		background-color:transparent;

		small {
			font-size: 0.8125rem;
			font-weight: var(--bold);
			line-height: 1.1875rem;
		}
		img{
			width: 20px;
			height: 20px;
		}
	}
`

export default Navbar

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
				light
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
		color: white;
	}

	.toggleBtn {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;
		text-transform: uppercase;
	}
`

export default Navbar

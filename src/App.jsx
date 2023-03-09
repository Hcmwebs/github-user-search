import React from 'react'
import { Info, Navbar, Search } from './components'
import { GlobalStyles } from './styles'
import styled from 'styled-components'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Wrapper className='App'>
				<Navbar />
				<Search />
				<Info />
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	&.App {
		width: 375px;
		padding-block:2rem;
		outline: 1px solid white;
		display: grid;
		place-items: center;
		gap: 2.25rem;
		@media (min-width: 768px) {
			width: 573px;
			gap: 2.8rem;
		}
		@media (min-width: 1440px) {
			width: 730px;
			gap: 2.25rem;
		}
	}
`

export default App

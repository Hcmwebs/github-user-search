import React from 'react'
import { Info, Navbar, Search } from './components'
import { GlobalStyles } from './styles'
import styled from 'styled-components'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Wrapper className='App'>
				<header className='sectionCenter' >
					<Navbar />
				</header>
				<main className='sectionCenter'>
					<Search />
					<Info />
				</main>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	&.App {
		width: 375px;
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

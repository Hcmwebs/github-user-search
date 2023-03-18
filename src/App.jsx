import React from 'react'
import { Info, Loading, Navbar, Search } from './components'
import styled from 'styled-components'
import { useGithubContext } from './context/useGithubContext'
import { GlobalStyles } from './styles'

const App = () => {
	const { isLoading } = useGithubContext()

	if (isLoading) {
		return (
			<>
				<GlobalStyles />
				<Wrapper className='App'>
					<Navbar />
					<Search />
					<Loading />
				</Wrapper>
			</>
		)
	}

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

const Wrapper = styled.main`
	&.App {
		width: min(100%, 327px);
		padding-block:2rem;
		display: grid;
		place-items: center;
		gap: 2.25rem;
		@media (min-width: 768px) {
			width: min(100%,573px);
			gap: 2.8rem;
			padding: 0;
		}
		@media (min-width: 1440px) {
			width: min(100%,730px);
			gap: 2.25rem;
		}
	}
`

export default App

import React from 'react'
import { Info, Navbar, Search } from './components'
import { GlobalStyles } from './styles'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<div className='App'>
        <Navbar />
        <Search />
        <Info />
			</div>
		</>
	)
}

export default App

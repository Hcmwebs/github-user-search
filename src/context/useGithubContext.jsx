import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import mockUser from '../data/Data'
const rootUrl = 'https://api.github.com'

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(mockUser)

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState({ show: false, msg: '' })

	const getLocalStorageTheme = () => {
		let theme = 'lightTheme'
		if (localStorage.getItem('theme')) {
			theme = localStorage.getItem('theme')
		}
		return theme
	}
	const [theme, setTheme] = useState(getLocalStorageTheme())

	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		if (theme === 'lightTheme') {
			setTheme('darkTheme')
		} else {
			setTheme('lightTheme')
		}
	}

	const searchGithubUser = async (user) => {
    toggleError()
		setIsLoading(true)
		const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
			console.log(err)
		)
		if (response) {
			setGithubUser(response.data)
		} else {
			toggleError(true, 'No Results!')
		}
		setIsLoading(false)
	}

	const toggleError = (show = false, msg = '') => {
		setError({ show, msg })
	}

	return (
		<GithubContext.Provider
			value={{
				toggleTheme,
				theme,
				githubUser,
				error,
				isLoading,
				searchGithubUser,
			}}>
			{children}
		</GithubContext.Provider>
	)
}

const useGithubContext = () => {
	return useContext(GithubContext)
}

export { useGithubContext, GithubProvider }

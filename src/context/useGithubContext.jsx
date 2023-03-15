import React, {createContext,useContext, useState, useEffect} from 'react'
const rootUrl = 'https://api.github.com'

const GithubContext = createContext()

const GithubProvider = ({children}) =>{

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
  return <GithubContext.Provider value = {{toggleTheme,theme,}}>{children}</GithubContext.Provider>
}

const useGithubContext = () => {
  return useContext(GithubContext)
}

export {useGithubContext, GithubProvider}
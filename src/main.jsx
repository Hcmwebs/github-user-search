import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GithubProvider } from './context/useGithubContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GithubProvider>
			<App />
		</GithubProvider>
	</React.StrictMode>
)

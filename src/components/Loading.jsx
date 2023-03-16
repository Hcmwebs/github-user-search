import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

const Loading = () => {
	return (
		<>
			<MagnifyingGlass
				visible={true}
				height='120'
				width='120'
				ariaLabel='MagnifyingGlass-loading'
				wrapperStyle={{}}
				wrapperClass='MagnifyingGlass-wrapper'
				glassColor='transparent'
				color='#0079FF'
			/>
		</>
	)
}

export default Loading

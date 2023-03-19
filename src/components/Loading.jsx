import React from 'react'
import { MagnifyingGlass, RevolvingDot } from 'react-loader-spinner'

const Loading = () => {
	return (
		<>
			<RevolvingDot
				height='100'
				width='100'
				radius='50'
				color='#0079FF'
				secondaryColor=''
				ariaLabel='revolving-dot-loading'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
			/>
		</>
	)
}

export default Loading

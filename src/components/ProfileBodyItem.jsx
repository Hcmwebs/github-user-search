import React from 'react'

const ProfileBodyItem = ({ label, value }) => {
	return (
		<div>
			<h2>{label}</h2>
			<p>{value}</p>
		</div>
	)
}

export default ProfileBodyItem

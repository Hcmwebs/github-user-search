import React from 'react'

const ProfileBodyItem = ({ label, value }) => {
	return (
		<div>
			<h3>{label}</h3>
			<p>{value}</p>
		</div>
	)
}

export default ProfileBodyItem

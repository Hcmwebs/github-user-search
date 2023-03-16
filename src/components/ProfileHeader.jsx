import moment from 'moment'
import React from 'react'
import { useGithubContext } from '../context/useGithubContext'

const ProfileHeader = () => {
	const { githubUser } = useGithubContext()

	const { avatar_url, name, twitter_username, created_at } = githubUser
	return (
		<div className='profileHeader'>
			<img src={avatar_url} alt={name || 'github user'} />
			<div className='profileInfo'>
				<div>
					<h1>{name || 'The Octocat'}</h1>
					<p>@{twitter_username || 'theoctocat'}</p>
				</div>
				<small>joined {moment(created_at).format('Do MMM YYYY')}</small>
			</div>
		</div>
	)
}

export default ProfileHeader

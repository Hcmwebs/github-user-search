import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { useGithubContext } from '../context/useGithubContext'

const ProfileHeader = () => {
	const { githubUser } = useGithubContext()

	const { avatar_url, name, twitter_username, created_at } = githubUser
	return (
		<Wrapper className='profileHeader'>
			<img src={avatar_url} alt={name || 'github user'} />
			<div className='profileInfo'>
				<div>
					<h1>{name || 'The Octocat'}</h1>
					<p>@{twitter_username || 'theoctocat'}</p>
				</div>
				<small>joined {moment(created_at).format('Do MMM YYYY')}</small>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	&.profileHeader {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 2rem;

		img {
			width: 70px;
			height: 70px;
			border-radius: 50%;

			@media (min-width: 768px) {
				width: 117px;
				height: 117px;
			}
		}
		.profileInfo {
			width: 100%;
			align-self: flex-start;
			display: grid;
			justify-content: start;
			grid-template-columns: 1fr;
			gap: 0.375rem;
			@media (min-width: 1024px) {
				grid-template-columns: repeat(2, 1fr);
			}
			h1 {
				font-size: 1rem;
				font-weight: var(--bold);
				line-height: 1.5rem;
			}
			p {
				font-size: 0.8125rem;
				font-weight: var(--regular);
				line-height: 1.1875rem;
				color: var(--btnBgColor);
			}
			small {
				font-size: 0.8125rem;
				font-weight: var(--regular);
				line-height: 1.1875rem;
				text-transform: capitalize;
				@media (min-width: 1024px) {
					justify-self: center;
				}
			}
		}
	}
`
export default ProfileHeader

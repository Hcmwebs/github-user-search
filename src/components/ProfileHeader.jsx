import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { useGithubContext } from '../context/useGithubContext'

const ProfileHeader = () => {
	const { githubUser } = useGithubContext()

	const { avatar_url, name, login, created_at } = githubUser
	return (
		<Wrapper className='profileHeader'>
			<img src={avatar_url} alt={name || 'github user'} />
			<div className='profileInfo'>
				<div>
					<h1>{name || 'The Octocat'}</h1>
					<p>@{login || 'theoctocat'}</p>
				</div>
				<small>joined {moment(created_at).format('Do MMM YYYY')}</small>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	&.profileHeader {
		width: 100%;
		padding-inline: 1.5rem;
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
			@media (min-width: 1440px) {
				position: absolute;
				top: 3rem;
				left: 3rem;
			}
		}
		.profileInfo {
			width: 100%;
			align-self: flex-start;
			display: grid;
			justify-content: start;
			grid-template-columns: 1fr;
			gap: 0.375rem;
			@media (min-width: 1440px) {
				grid-template-columns: repeat(2, 1fr);
			}
			h1 {
				font-size: 1rem;
				font-weight: var(--bold);
				line-height: 1.5rem;
				@media (min-width: 768px) {
					font-size: 1.625rem;
					line-height: 2.4375rem;
				}
			}
			p {
				font-size: 0.8125rem;
				font-weight: var(--regular);
				line-height: 1.1875rem;
				color: var(--btnBgColor);
				@media (min-width: 768px) {
					font-size: 1rem;
					line-height:1.5rem;
				}

			}
			small {
				font-size: 0.8125rem;
				font-weight: var(--regular);
				line-height: 1.1875rem;
				text-transform: capitalize;
				@media (min-width: 768px) {
					font-size: 0.9375rem;
					line-height:1.375rem;
				}
				@media (min-width: 1440px) {
					justify-self: center;
				}
			}
		}
	}
`
export default ProfileHeader

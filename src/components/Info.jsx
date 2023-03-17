import React from 'react'
import styled from 'styled-components'
import { useGithubContext } from '../context/useGithubContext'
import twitterIcon from '../assets/icon-twitter.svg'
import locationIcon from '../assets/icon-location.svg'
import websiteIcon from '../assets/icon-website.svg'
import companyIcon from '../assets/icon-company.svg'
import { ProfileHeader, ProfileBody } from './index'

const Info = () => {
	const { githubUser } = useGithubContext()

	const {
		twitter_username,
		location,
		company,
		blog,
	} = githubUser

	return (
		<Wrapper className='sectionCenter'>
			<ProfileHeader />
			<ProfileBody />
			<div className='profileFooter'>
				<ul>
					<li>
						<img src={locationIcon} alt='location' />
						{location || 'earth'}
					</li>
					<li>
						<img src={websiteIcon} alt='website' />
						<a href={blog} target='_blank' rel='noopener noreferrer'>
							{blog}
						</a>
					</li>
					<li>
						<img src={twitterIcon} alt='twitter' />
						{twitter_username}
					</li>
					<li>
						<img src={companyIcon} alt='company' />
						{company || 'company'}
					</li>
				</ul>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	justify-content: start;
	align-items: center;
	gap: 2rem;
	padding-block: 2rem;
	border-radius: var(--borderRadius);
	background-color: var(--appBgColor);
	box-shadow: var(--boxShadow-1);
	position: relative;
	@media (min-width: 1024px) {
		padding-block: 2.75rem;
	}

	.profileFooter {
		width: 100%;
		padding-inline: 1rem;
		display: grid;
		place-items: center;
		ul {
			width: 100%;
			list-style: none;
			padding: 0;
			display: grid;
			align-items: center;
			justify-content: start;
			grid-template-columns: 1fr;
			gap: 1rem;
			@media (min-width: 768px) {
				justify-content: center;
				grid-template-columns: repeat(2, 1fr);
			}
		}
		li {
			width: 100%;
			display: flex;
			gap: 1rem;
			@media (min-width: 768px) {
				width: 50%;
			}
		}

		a {
			color: var(--fontColor);
		}
		img {
			height: 20px;
		}
	}
`
export default Info

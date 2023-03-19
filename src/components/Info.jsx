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

	const { twitter_username, location, company, blog } = githubUser

	return (
		<Wrapper>
			<ProfileHeader />
			<ProfileBody />
			<div className='profileFooter'>
				<ul>
					<li>
						<img src={locationIcon} alt={location} />
						{location || 'Not available'}
					</li>
					<li>
						<img src={websiteIcon} alt={blog} />
						<a href={blog} target='_blank' rel='noopener noreferrer'>
							{blog || 'Not available'}
						</a>
					</li>
					<li>
						<img src={twitterIcon} alt={twitter_username} />@
						{twitter_username || 'notavailable'}
					</li>
					<li>
						<img src={companyIcon} alt={company} />@{company || 'notavailable'}
					</li>
				</ul>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
width: 100%;
	display: grid;
	place-items: center;
	gap: 2rem;
	padding-block: 2rem;
	border-radius: var(--borderRadius);
	background-color: var(--appBgColor);
	box-shadow: var(--boxShadow-1);
	position: relative;
	@media (min-width: 1024px) {
		padding-block: 3rem;
		justify-content: end;
	}

	.profileFooter {
		padding-inline: 1.5rem;
		display: grid;
		place-items: center;
		ul {
			width: 279px;
			list-style: none;
			padding: 0;
			display: grid;
			align-items: center;
			justify-content: start;
			grid-template-columns: 1fr;
			gap: 1rem;
			@media (min-width: 768px) {
				width: 493px;
				justify-content: center;
				grid-template-columns: repeat(2, 1fr);
			}
			@media (min-width: 1024px) {
				width: 480px;
			}
		}
		li {
			font-size: 0.8125rem;
			font-weight: var(--regular);
			line-height: 1.1875rem;
			width: 100%;
			display: flex;
			gap: 1rem;
		}

		a {
			color: var(--fontColor);
		}
		img {
			width: 20px;
			height: 20px;
			object-fit: contain;
		}
	}
`
export default Info

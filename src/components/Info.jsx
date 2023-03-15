import React from 'react'
import styled from 'styled-components'
import { useGithubContext } from '../context/useGithubContext'
import twitterIcon from '../assets/icon-twitter.svg'
import locationIcon from '../assets/icon-location.svg'
import websiteIcon from '../assets/icon-website.svg'
import companyIcon from '../assets/icon-company.svg'

const Info = () => {
	const { githubUser } = useGithubContext()

	const {
		public_repos,
		followers,
		following,
		avatar_url,
		name,
		twitter_username,
		created_at,
		bio,
		login,
		location,
		company,
		html_url,
	} = githubUser

	const items = [
		{
			id: 1,
			label: 'Repos',
			value: public_repos,
		},
		{
			id: 2,
			label: 'Followers',
			value: followers,
		},
		{
			id: 3,
			label: 'Following',
			value: following,
		},
	]

	return (
		<Wrapper className='sectionCenter'>
			<div className='profileHeader'>
				<img src={avatar_url} alt={name || 'the octocat'} />
				<div className='profileInfo'>
					<h1>{name || 'The Octocat'}</h1>
					<p>{login || 'theoctocat'}</p>
					<h2>joined{created_at}</h2>
				</div>
			</div>
			<div className='profileBody'>
				<p>
					{bio ||
						'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam iure illum, earum assumenda eligendi mollitia vero minima neque nemo praesentium.'}
				</p>
				<div className='stats'>
					{items.map((item) => {
						return <Item key={item.id} {...item} />
					})}
				</div>
			</div>
			<div className='profileFooter'>
				<ul>
					<li>
						<img src={locationIcon} alt='location' />
						{location || 'earth'}
					</li>
					<li>
							<img src={websiteIcon} alt='website' />
						<a href={html_url} target='_blank' rel='noopener noreferrer'>
							{html_url}
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

const Item = ({ label, value }) => {
	return (
		<div>
			<h3>{label}</h3> <p>{value}</p>
		</div>
	)
}

const Wrapper = styled.div`
	display: grid;
	place-content: center;
	gap: 2rem;
	padding-block: 1rem;
	border-radius: var(--borderRadius);
	background-color: var(--appBgColor);
	box-shadow: var(--boxShadow-1);
	position: relative;

	.profileHeader {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 2rem;

		img {
			width: 70px;
			height: 70px;

			@media (min-width: 768px) {
				width: 117px;
				height: 117px;
			}
		}
		.profileInfo {
			align-self: flex-start;
			display: flex;
			justify-content: start;
			flex-direction: column;
			@media (min-width: 1024px) {
				width: 375px;
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
	.profileBody {
		width: 100%;
		display: grid;
		place-content: center;
		gap: 1rem;
		padding-inline: 1.5rem;
		p {
			text-align: justify;
		}
		.stats {
			display: flex;
			justify-content: space-between;
			padding: 1rem 0.9rem;
			border-radius: var(--borderRadius);
			background-color: var(--bgColor);

			div {
				display: grid;
				place-items: center;
			}
		}
	}
	.profileFooter {
		width: 100%;
		padding-inline: 1rem;
		display: grid;
		justify-content: start;
		align-items: center;
		grid-template-columns: 1fr;
		@media (min-width: 768px) {
			justify-content: center;
			grid-template-columns: repeat(2, 1fr);
		}
		ul {
			list-style: none;
			padding:0;
			display: grid;
			align-items: center;
			gap: 1rem;
		}
		li{
			width: 100%;
			display:flex;
			gap:1rem;
		}

		a {
			color: var(--fontColor);
		}
		img{
			height: 20px;
		}
	}
`
export default Info

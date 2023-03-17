import React from 'react'
import styled from 'styled-components'
import { useGithubContext } from '../context/useGithubContext'
import { ProfileBodyItem } from './index'

const ProfileBody = () => {
	const { githubUser } = useGithubContext()
	const { public_repos, followers, following, bio } = githubUser
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
		<Wrapper className='profileBody'>
			<p>
				{bio ||
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam iure illum, earum assumenda eligendi mollitia vero minima neque nemo praesentium.'}
			</p>
			<div className='stats'>
				{items.map((item) => {
					return <ProfileBodyItem key={item.id} {...item} />
				})}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	&.profileBody {
		width: 100%;
		display: grid;
		justify-content: start;
		gap: 1rem;
		padding-inline: 1.5rem;
		p {
			font-size: 0.8125rem;
			font-weight: var(--regular);
			line-height: 1.5625rem;
			@media (min-width: 768px) {
				font-size: 0.9375rem;
			}
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

				h3 {
					font-size: 0.6875rem;
					font-weight: var(--regular);
					line-height: 1rem;
					text-transform: capitalize;
					@media (min-width: 768px) {
						font-size: 0.8125rem;
						line-height: 1.1875rem;
					}
				}
				p {
					font-size: 1rem;
					font-weight: var(--bold);
					line-height: 1.5rem;
					text-transform: uppercase;
					text-align: center;
					@media (min-width: 768px) {
						font-size: 1.375rem;
						line-height: 2.0625rem;
					}
				}
			}
		}
	}
`

export default ProfileBody
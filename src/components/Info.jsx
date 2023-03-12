import React from 'react'
import styled from 'styled-components'

const Info = () => {
	return (
		<Wrapper className='sectionCenter'>
			<div className='profileHeader'>
				<img src='user Image' alt='' />
				<div className='profileInfo'>
					<h1>
						user name
						<div>userHandle</div>
					</h1>
					<h3>joined</h3>
				</div>
			</div>
			<div className='profileBody'>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam iure
					illum, earum assumenda eligendi mollitia vero minima neque nemo
					praesentium.
				</p>
				<div className='stats'>
					<div>
						Repos <span>125</span>
					</div>
					<div>
						followers <span>4000</span>
					</div>
					<div>
						following <span>15</span>
					</div>
				</div>
			</div>
			<div className='profileFooter'>
				<a href=''>location</a>
				<a href=''>website</a>
				<a href=''>twitter</a>
				<a href=''>company</a>
			</div>
		</Wrapper>
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
		padding-inline: 1.5rem;
		display: grid;
		justify-content: start;
		align-items: center;
		grid-template-columns: 1fr;
		@media (min-width: 768px) {
			justify-content: center;
			grid-template-columns:repeat(2,1fr)
		};

		a {
			color: var(--fontColor);
		}
	}
`
export default Info

import React from 'react'
import styled from 'styled-components'
import { ProfileHeader, ProfileBody, ProfileFooter } from './index'

const Info = () => {
	return (
		<Wrapper>
			<ProfileHeader />
			<ProfileBody />
			<ProfileFooter />
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
`
export default Info

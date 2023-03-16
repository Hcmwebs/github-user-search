import React, { useState } from 'react'
import styled from 'styled-components'
import { useGithubContext } from '../context/useGithubContext'

const Search = () => {
	const [user, setUser] = useState('')
	const { isLoading, error, searchGithubUser } = useGithubContext()
	const { show, msg } = error
	const handleChange = (e) => {
		setUser(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (user) {
			searchGithubUser(user)
		}
	}
	return (
		<Wrapper className='sectionCenter' onSubmit={handleSubmit}>
			<div className='form-group'>
				<svg height='24' width='25' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z'
						fill='currentColor'
					/>
				</svg>
				<input
					type='text'
					aria-label='search'
					placeholder='Search User'
					value={user}
					onChange={handleChange}
				/>
				{!isLoading && (
					<button className='search' type='submit'>
						Search
					</button>
				)}
				{show && <small className='error'>{msg}</small>}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.form`
	width: 100%;
	display: grid;
	place-items: center;
	border-radius: var(--borderRadius);
	background-color: var(--appBgColor);
	box-shadow: var(--boxShadow-1);

	.form-group {
		width: 100%;
		display: flex;
		position: relative;
	}

	input {
		font-size: 0.8125rem;
		font-weight: var(--regular);
		line-height: 1.5625rem;
		width: 100%;
		padding: 1rem 3rem;
		border: none;
		outline: none;
		color: var(--fontColor);
		background-color: transparent;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 0.75rem;
		transform: translateY(-50%);
		color: var(--btnBgColor);
		transition: var(--transition-3);
		cursor: pointer;

		&:hover {
			color: var(--btnHoverBgColor);
		}
	}
	.search {
		position: absolute;
		top: 50%;
		right: -1rem;
		transform: translateY(-50%);
	}
	.error {
		font-size: 0.9rem;
		font-weight: var(--bold);
		line-height: 1.375rem;
		color: var(--errorColor);
		position: absolute;
		top: 50%;
		right: 8rem;
		transform: translateY(-50%);
	}
`

export default Search

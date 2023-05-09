import './index.css';
import {NavLink} from 'react-router-dom';
import {type ReactNode} from 'react';

function PureButton(props: {
	to?: string;
	children?: JSX.Element | ReactNode | string;
	onClick?: () => void;
}) {
	const {to, children, onClick} = props;

	if (to) {
		return (
			<NavLink to={to} className='button-link link' onClick={onClick}>
				{children}
			</NavLink>
		);
	}

	return (
		<button type='button' className='button-link' onClick={onClick}>
			{children}
		</button>
	);
}

export default PureButton;
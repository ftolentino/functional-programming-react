// partial application is, a way to specify a set number of props on a component without having to create a new component (this is a higher order component)
export const partiallyApply = (Component, partialProps) => {
  // partial props is a props is an object that contains some subset of the props that we want to pass to a given component
	return props => {
    // allows to specify some of the props for a component ahead of time
		return <Component {...partialProps} {...props} />
	}
}

export const Button = ({ size, color, text, ...props }) => {
	return (
		<button style={{
			padding: size === 'large' ? '32px' : '8px',
			fontSize: size === 'large' ? '32px' : '16px',
			backgroundColor: color,
		}} {...props}>{text}</button>
	);
}

export const DangerButton = partiallyApply(Button, { color: 'red' });
export const BigSuccessButton = partiallyApply(Button, { color: 'green', size: 'large' });
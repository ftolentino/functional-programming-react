// composition is the functioning programming analog to inheritance in OOP
// composition allows to create different version of this button by creating different components that use it.
export const Button = ({ size, color, text, ...props }) => {
	return (
		<button style={{
			padding: size === 'large' ? '32px' : '8px',
			fontSize: size === 'large' ? '32px' : '16px',
			backgroundColor: color,
		}} {...props}>{text}</button>
	);
}

// create a new component that inherits all of the existing props
export const DangerButton = props => {
	return (
		<Button {...props} color="red" />
	);
}

export const BigSuccessButton = props => {
	return (
		<Button {...props} size="large" color="green" />
	);
}
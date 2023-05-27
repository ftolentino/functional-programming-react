// composition is the functioning programming analog to inheritance in OOP
// composition allows to create different version of this button by creating different components that use it.
// Composition allows you to create different versions of a component by creating new components that use the original component. For example, you can create a danger button that automatically has the color set to red, or a big success button with the padding set to large and the color set to green. This allows you to avoid code duplication and makes a code more maintainable.
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
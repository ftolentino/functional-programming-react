const isObject = x => typeof x === 'object' && x !== null;

export const RecursiveComponent = ({ data }) => {
  // define a stopping case: stop recursing and return some value that doesn't refer recursively to the component itself (when the data this component receives is not an object, just a value)
	if (!isObject(data)) {
		return (
			<li>{data}</li>
		);
	}
  // return an array of all of the key and value pairs from the object
	const pairs = Object.entries(data);

	return (
		<>
		{pairs.map(([key, value]) => (
			<li>
				{key}:
				<ul>
					<RecursiveComponent data={value} />
				</ul>
			</li>
		))}
		</>
	);
}
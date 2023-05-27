// Functional programming is a way of organizing your code base to minimize mutation and state change in your applications. The functions remain independent of external data, known as pure functions, and you also treat functions as first-class citizens
import { RecursiveComponent } from "./RecursiveComponent";

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

function App() {
	return (
		<RecursiveComponent data={nestedObject} />
	);
}

export default App;
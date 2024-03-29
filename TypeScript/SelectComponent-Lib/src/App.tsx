import { useState } from "react";
import Select, { SelectOption } from "./components/Select";

const options = [
	{ label: "First", value: 1 },
	{ label: "Second", value: 2 },
	{ label: "Third", value: 3 },
	{ label: "Fourth", value: 4 },
	{ label: "Fifth", value: 5 },
];

function App() {
	const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
	const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

	return (
		<div>
			<h1>SELECT COMPONENTS</h1>
			<div className="container">
				<h2>Multi-Select Component</h2>
				<Select
					multiple
					options={options}
					value={value1}
					onChange={(option) => setValue1(option)}
				/>
				<br />
				<hr />
				<br />
				<h2>Single-Select Component</h2>
				<Select
					options={options}
					value={value2}
					onChange={(option) => setValue2(option)}
				/>
			</div>
		</div>
	);
}

export default App;

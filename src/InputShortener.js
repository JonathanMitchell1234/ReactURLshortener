import { useState } from "react";
import Flip from "react-reveal/Flip";


const InputShortener = ({ setInputValue }) => {
	const [value, setValue] = useState("");

	const handleClick = () => {
		setInputValue(value);
		setValue("");
	};

	return (
		<div className="inputContainer">
			<Flip top>
				<h1>
					URL <span>Shortener</span>
				</h1>
			</Flip>
			<div>
				<input type="text" placeholder="Paste a link to shorten it..." value={value} onChange={(e) => setValue(e.target.value)} />
				<button onClick={handleClick}>shorten</button>
			</div>
		</div>
	);
};

export default InputShortener;

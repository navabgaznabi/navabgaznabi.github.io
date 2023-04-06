import { useState } from "react";
import "./toggle.scss";

export const Toggle = ({ label, toggled, onClick }) => {
	const [isToggled, toggle] = useState(toggled);

	const callback = () => {
		toggle(!isToggled);
		onClick(!isToggled);
	};

	return (
		<label className='toggle-lable'>
			<input
				className='toggle-input'
				type='checkbox'
				defaultChecked={isToggled}
				onClick={callback}
			/>
			<span className='toggle-span' />
			<strong>{label}</strong>
		</label>
	);
};

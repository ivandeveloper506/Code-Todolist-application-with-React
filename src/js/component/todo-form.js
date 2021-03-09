import React, { useState, useEffect, useRef } from "react";
import PropType from "prop-types";

export default function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = e => {
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});

		setInput("");
	};

	return (
		<div className="container bag-danger">
			<form onSubmit={handleSubmit}>
				{props.edit ? (
					<div className="input-group mb-3">
						<input
							type="text"
							name="text"
							value={input}
							className="form-control"
							placeholder="Actualizar la tarea..."
							aria-label="Editar Tarea"
							onChange={handleChange}
							ref={inputRef}></input>
						<div className="input-group-append">
							<button type="button" className="btn btn-success">
								Actualizar Tarea
							</button>
						</div>
					</div>
				) : (
					<div className="input-group mb-3">
						<input
							type="text"
							name="text"
							value={input}
							className="form-control"
							placeholder="Digite la tarea a realizar..."
							aria-label="Agregar Tarea"
							onChange={handleChange}
							ref={inputRef}></input>
						<div className="input-group-append">
							<button type="button" className="btn btn-success">
								Agregar Tarea
							</button>
						</div>
					</div>
				)}
			</form>
		</div>
	);
}

TodoForm.propTypes = {
	edit: PropType.string,
	onSubmit: PropType.any
};

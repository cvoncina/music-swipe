import React, { useState } from "react";

export default function LoginPage() {

	var [password, setPassword] = useState("");
	var [userName, setUserName] = useState("");

	const setUserNameValue = (event) => {
		setUserName(event.target.value)
	}

	const setPasswordValue = (event) => {
		setPassword(event.target.value)
	}

	const login = () => {

	}

	const verify = (event) => {
		console.log(userName, password)
	}

	return (
		<div>
			<form onSubmit={verify}>
				<label>User Name</label>
				<input key="usernameInput"
					type="text"
					onChange={setUserNameValue}
			/>
				<label>Password</label>
				<input key="userPasswordInput"
					onChange={setPasswordValue}
					type="password"
				/>
				<input type="submit" value={"submit"}/>
			</form>
		</div>
	);
} 
// class LoginPage extends React.PureComponent {
  	
//   	constructor(props) {
//   		super(props);
//   		this.state = {
//   			userName: "",
//   			password: "",
//   		};
//   	}

// 	login = () => {

// 	}

// 	verify = (event) => {
// 	}

// 	setUserName = (event) => {
// 		this.setState({userName: event.target.value});
// 	}

// 	setPassword = (event) => {
// 		this.setState({password: event.target.value});
// 	}

//     render() {
//   		return (
//   			<div>
//   				<form onSubmit={this.verify}>
//   					<label>User Name</label>
//   					<input key="usernameInput"
//   						type="text"
//   						value={this.state.userName}
//   						onChange={this.setUserName}
// 					/>
//   					<label>Password</label>
//   					<input key="userPasswordInput"
//   						value={this.state.password}
//   						onChange={this.setPassword}
//   						type="password"
//   					/>
//   					<input type="submit" value={"submit"}/>
//   				</form>
//   			</div>
// 		);
//   	}
// }

// export default LoginPage;
import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {

	const [id, setId] = useState("");
	const [password, setPassword] =useState("");

	const onChangeId = (e) => {
		setId(e.target.value)
	};
	const onChangePw = (e) => {
		setPassword(e.target.value)
	};


	let body = {
		userId : id,
		password : password
	};

	const onClickMe = (e) => {
		e.preventDefault();
		setId("");
		setPassword("");

		axios.post("http://10.80.163.48:8070/auth/login",body)
		.then((res) => {
			console.log(res.data);
		})
	}

	return (
		<>
			<h2>로그인</h2>
				<form>
					<label>아이디 : <input type="text" id="id" placeholder='아이디를 입력하세요' value={id} onChange={onChangeId}></input><br/></label>
					<label>비밀번호 : <input type="password" id="pw" placeholder='비밀번호를 입력하세요' value={password} onChange={onChangePw}></input><br/></label>
					<button type="submit" onClick={onClickMe}>로그인</button>
				</form>
				

		</>
	);
};

export default Login;
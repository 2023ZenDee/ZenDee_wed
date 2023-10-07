import React, { useState, useEffect } from 'react';
import Instance from './Instance';
import ReactDOM from 'react-dom'
import axios from 'axios';
import { render } from '@testing-library/react';
import Nav from './Nav';
const Login = () => {

	const [id, setId] = useState("");
	const [password, setPassword] =useState("");
	const [isLogined, setIsLogined] = useState(false);
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



	const onClickMe = async (e) => {
		e.preventDefault();
		if(!id) {
			return alert("ID를 입력하세요.")
		}else if(!password) {
			return alert("비밀번호를 입력하세요.")
		}
		setId("");
		setPassword("");

		try {
		await axios.post("http://3.36.170.237:8070/auth/login",
		body,
		)
		.then((res) => {
			console.log(res.data);
			

			switch (res.data.status) {
				case 200: console.log("로그인 성공");
				 localStorage.clear();
				 localStorage.setItem('accessToken', res.data.accessToken);
				 localStorage.setItem('refreshToken', res.data.refreshToken);
				 
				break;
				case 400: alert("유효하지 않는 사용자 아이디또는 비밀번호가 맞지 않습니다."); break;
				case 402: alert("비밀번호가 틀립니다."); break;			
				default:break;
			}
		});
		} catch(error) {
			console.log(error)
		}
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
		)

};

export default Login;